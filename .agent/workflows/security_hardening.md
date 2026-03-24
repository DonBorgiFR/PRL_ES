# Hardening Mínimo del Proxy IA

Estado: Completado (2026-03-23)

---

## Cambios Implementados

### 1. Rate Limiting en `/api/ollama/*`

**Archivo:** `server.js`

**Cambio:**
```javascript
const aiRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 100,            // 100 requests por minuto por IP
  skip: (req) => req.path === '/api/health', // No limitar healthchecks
  keyGenerator: (req) => req.ip || req.connection.remoteAddress || 'unknown',
});

app.all('/api/ollama/*splat', aiRateLimiter, async (req, res) => { ... });
```

**Rationale:** Prevenir saturación de requests y abuso de recursos computacionales en el proxy.

**Criterio de éxito:** Requests > 100/min en la misma IP reciben HTTP 429.

---

### 2. Timeout en Requests Upstream

**Archivo:** `server.js`

**Cambio:**
```javascript
const UPSTREAM_TIMEOUT_MS = 30000; // 30 segundos

async function proxyRequest(req, url, upstreamToken) {
  const init = {
    method: req.method,
    headers,
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
  };
  return fetch(url, init);
}
```

**Rationale:** Evitar que el frontend quede esperando indefinidamente si el proveedor IA es lento o no responde.

**Criterio de éxito:** Requests que tardan > 30s reciben timeout y fallover automático al respaldo (si existe).

---

### 3. Validación Básica de Payload

**Archivo:** `server.js`

**Cambio:**
```javascript
const MAX_QUERY_LENGTH = 5000; // Máx caracteres en una consulta

app.all('/api/ollama/*splat', aiRateLimiter, async (req, res) => {
  if (req.body?.messages) {
    const totalLength = JSON.stringify(req.body.messages).length;
    if (totalLength > MAX_QUERY_LENGTH) {
      return res.status(400).json({
        error: 'Request demasiado largo.',
        detail: `Máximo: ${MAX_QUERY_LENGTH} caracteres. Recibido: ${totalLength}`,
      });
    }
  }
  // ... resto del handler
});
```

**Rationale:** Bloquear payloads excesivamente grandes que podrían causar problemas de parsing o consumo de memoria.

**Criterio de éxito:** Requests > 5000 caracteres reciben HTTP 400 con mensaje descriptivo.

---

### 4. Logging Mejorado

**Archivo:** `server.js`

**Cambio:**
```javascript
const startTime = Date.now();

try {
  const upstreamResponse = await proxyRequest(req, ...);
  const elapsed = Date.now() - startTime;
  console.log(`[ollama-proxy] PRIMARY OK ${req.method} ${req.path} (${elapsed}ms)`);
  // ...
} catch (primaryError) {
  // Fallover con log de latencia
  const elapsed = Date.now() - startTime;
  console.log(`[ollama-proxy] FALLBACK OK ${req.method} ${req.path} (${elapsed}ms)`);
  // ...
}
```

**Rationale:** Diagnosticar problemas de latencia y fallos de upstreams sin instrumentación externa.

**Criterio de éxito:** Logs incluyen timestamp, método, ruta, latencia y estado (PRIMARY/FALLBACK/ERROR).

---

## Dependencias Añadidas

```json
{
  "dependencies": {
    "express-rate-limit": "^7.1.0"
  }
}
```

Instalado con `npm install`.

---

## Validación Local

### Smoke Test 1: Rate Limiting

```bash
# Ejecutar desde terminal paralelo
npm run dev:server   # Inicia backend en puerto 4173

# En otra terminal, hacer burst de requests
for i in {1..110}; do curl -X POST http://127.0.0.1:4173/api/ollama/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"test"}]}' \
  -w "%{http_code}\n"; done > /tmp/burst.log

# Esperado: Primeros 100 exitosos (200/401), resto 429 (Too Many Requests)
grep "429" /tmp/burst.log | wc -l  # Debe ser ~10
```

### Smoke Test 2: Timeout

```bash
# Simular proveedor lento:
# (Requiere Ollama local o mock HTTP que responda lentamente)

# Con proveedor disponible:
time curl -X POST http://127.0.0.1:4173/api/ollama/chat \
  -H "Content-Type: application/json" \
  -d '{"model":"llama3.1:8b","messages":[{"role":"user","content":"s" * 1000}]}'

# Esperado: Si > 30s, timeout y fallback (si existe) o 502
```

### Smoke Test 3: Validación de Payload

```bash
# Request demasiada larga
HUGE_QUERY=$(python3 -c "print('a' * 6000)")

curl -X POST http://127.0.0.1:4173/api/ollama/chat \
  -H "Content-Type: application/json" \
  -d "{\"messages\":[{\"role\":\"user\",\"content\":\"${HUGE_QUERY}\"}]}"

# Esperado: HTTP 400 con error message
```

### Smoke Test 4: Logging

```bash
# Verificar logs incluyen latencia y estado
npm run dev:server 2>&1 | grep "ollama-proxy"

# Esperado: Líneas como:
# [ollama-proxy] PRIMARY OK POST /api/ollama/chat (234ms)
# o
# [ollama-proxy] Both providers failed (5000ms).
```

---

## Criterios de Éxito

- [x] Rate limiter bloquea después de 100 req/min por IP
- [x] Timeout en 30s en requests upstream (previene cuelgues)
- [x] Validación de tamaño (max 5000 caracteres) rechazada con 400
- [x] Logging incluye latencia por-request
- [x] Build y compilación limpios sin errores
- [x] Fallover automático a respaldo documentado y activo

---

## Notas de Operación

- **Rate limiting se aplica a `/api/ollama/*` pero NO a `/api/health`** (liveness checks)
- **Timeout de 30s es configurable** via variable de entorno futura si es necesario
- **Logging en stdout/stderr** — preparado para integración con sistemas de logs (ELK, Datadog, etc.)
- **Enable INBOUND_TOKEN en producción** para agregar capa de autenticación adicional

---

## Próximos Pasos (No en este Sprint)

1. Validación JSON Schema estricta en payloads (swagger/OpenAPI)
2. Audit logging persistente (archivo o base datos)
3. Métricas Prometheus en `/metrics` (counters, histogramas de latencia)
4. Autenticación de usuario final (JWT, OAuth)
5. Versionado de API (`/api/v1/`, `/api/v2/`)
