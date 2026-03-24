import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '0.0.0.0';
const PRIMARY_BASE_URL = (process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434').replace(/\/$/, '');
const FALLBACK_BASE_URL = (process.env.OLLAMA_FALLBACK_URL || '').replace(/\/$/, '');
const UPSTREAM_API_PREFIX = normalizePrefix(process.env.OLLAMA_API_PREFIX || '/api');
const INBOUND_TOKEN = process.env.OLLAMA_PROXY_TOKEN || '';
const UPSTREAM_TOKEN = process.env.OLLAMA_UPSTREAM_TOKEN || '';
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

// Rate limiter para proxy IA: máx 100 req/min por IP
const aiRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // No limitar /api/health (liveness checks)
    return req.path === '/api/health';
  },
  message: 'Demasiadas solicitudes IA. Reintenta en un minuto.',
  keyGenerator: (req) => {
    // Por IP remota
    return req.ip || req.connection.remoteAddress || 'unknown';
  },
});

const UPSTREAM_TIMEOUT_MS = 30000; // 30 segundos timeout en requests upstream
const MAX_QUERY_LENGTH = 5000; // Máx caracteres en una consulta

app.use(express.json({ limit: '2mb' }));
app.use(
  cors({
    origin: resolveCorsOrigin(CORS_ORIGIN),
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

if (process.env.NODE_ENV === 'production' && CORS_ORIGIN === '*') {
  console.warn('[server] CORS_ORIGIN esta en "*" en produccion. Restringelo a dominios explicitos.');
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, provider: PRIMARY_BASE_URL, hasFallback: Boolean(FALLBACK_BASE_URL) });
});

app.all('/api/ollama/*splat', aiRateLimiter, async (req, res) => {
  if (INBOUND_TOKEN && !hasValidInboundToken(req.headers.authorization, INBOUND_TOKEN)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Validación básica: limitar tamaño de query
  if (req.body?.messages) {
    const totalLength = JSON.stringify(req.body.messages).length;
    if (totalLength > MAX_QUERY_LENGTH) {
      return res.status(400).json({
        error: 'Request demasiado largo.',
        detail: `Máximo: ${MAX_QUERY_LENGTH} caracteres. Recibido: ${totalLength}`,
      });
    }
  }

  const suffix = req.path.replace(/^\/api\/ollama/, '') || '/';
  const targetPath = `${UPSTREAM_API_PREFIX}${suffix === '/' ? '' : suffix}`;
  const startTime = Date.now();

  try {
    const upstreamResponse = await proxyRequest(req, `${PRIMARY_BASE_URL}${targetPath}`, UPSTREAM_TOKEN);
    const elapsed = Date.now() - startTime;
    console.log(`[ollama-proxy] PRIMARY OK ${req.method} ${req.path} (${elapsed}ms)`);
    return relayResponse(upstreamResponse, res);
  } catch (primaryError) {
    if (!FALLBACK_BASE_URL) {
      console.error('[ollama-proxy] Primary request failed without fallback.', primaryError);
      return res.status(502).json({
        error: 'No se pudo alcanzar el proveedor principal de IA.',
        detail: extractError(primaryError),
      });
    }

    try {
      const fallbackResponse = await proxyRequest(req, `${FALLBACK_BASE_URL}${targetPath}`, UPSTREAM_TOKEN);
      const elapsed = Date.now() - startTime;
      console.log(`[ollama-proxy] FALLBACK OK ${req.method} ${req.path} (${elapsed}ms)`);
      return relayResponse(fallbackResponse, res);
    } catch (fallbackError) {
      const elapsed = Date.now() - startTime;
      console.error(`[ollama-proxy] Both providers failed (${elapsed}ms).`, {
        primary: extractError(primaryError),
        fallback: extractError(fallbackError),
      });

      return res.status(502).json({
        error: 'No se pudo alcanzar ningun proveedor de IA.',
        primary: extractError(primaryError),
        fallback: extractError(fallbackError),
      });
    }
  }
});

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));

  app.get('/{*splat}', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    return res.sendFile(path.join(distDir, 'index.html'));
  });
} else {
  console.warn('[server] No existe carpeta dist. Ejecuta npm run build para servir frontend en produccion.');
}

app.listen(PORT, HOST, () => {
  console.log(`[server] PRL España escuchando en http://${HOST}:${PORT}`);
  console.log(`[server] IA primaria: ${PRIMARY_BASE_URL}${UPSTREAM_API_PREFIX}`);
  if (FALLBACK_BASE_URL) {
    console.log(`[server] IA fallback: ${FALLBACK_BASE_URL}${UPSTREAM_API_PREFIX}`);
  }
});

function normalizePrefix(prefix) {
  if (!prefix.startsWith('/')) {
    return `/${prefix}`;
  }
  return prefix;
}

function resolveCorsOrigin(corsOriginEnv) {
  const raw = (corsOriginEnv || '*').trim();
  if (raw === '*') {
    return true;
  }

  const allowed = raw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  return (requestOrigin, callback) => {
    if (!requestOrigin) {
      return callback(null, true);
    }

    if (allowed.includes(requestOrigin)) {
      return callback(null, true);
    }

    return callback(new Error(`Origin no permitido por CORS: ${requestOrigin}`));
  };
}

function hasValidInboundToken(authorizationHeader, expectedToken) {
  if (!authorizationHeader?.startsWith('Bearer ')) {
    return false;
  }
  const token = authorizationHeader.slice('Bearer '.length).trim();
  return token === expectedToken;
}

async function proxyRequest(req, url, upstreamToken) {
  const headers = buildForwardHeaders(req.headers, upstreamToken);
  const init = {
    method: req.method,
    headers,
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = JSON.stringify(req.body ?? {});
  }

  return fetch(url, init);
}

function buildForwardHeaders(originalHeaders, upstreamToken) {
  const headers = {
    'content-type': originalHeaders['content-type'] || 'application/json',
    accept: originalHeaders.accept || 'application/json',
  };

  if (upstreamToken) {
    headers.authorization = `Bearer ${upstreamToken}`;
  }

  return headers;
}

async function relayResponse(upstreamResponse, res) {
  const contentType = upstreamResponse.headers.get('content-type');
  if (contentType) {
    res.setHeader('content-type', contentType);
  }

  const body = await upstreamResponse.text();
  return res.status(upstreamResponse.status).send(body);
}

function extractError(error) {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
