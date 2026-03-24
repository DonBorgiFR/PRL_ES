# Workflow: Build y Deploy con IA Activa

Este flujo deja operativo el consultor IA en produccion usando backend propio (sin depender del proxy de Vite).

---

## 1. Preparar entorno

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Crear archivo de entorno local a partir de `.env.production.example`:
   ```bash
   copy .env.production.example .env
   ```
3. Configurar como minimo:
   - `PORT`
   - `HOST`
   - `CORS_ORIGIN` (admite lista separada por comas; en produccion no usar `*`)
   - `OLLAMA_BASE_URL`
   - `OLLAMA_API_PREFIX`

## 2. Opciones de arquitectura

### Variante A: Ollama en red local (intranet)

1. Desplegar el frontend + backend en red corporativa.
2. Apuntar `OLLAMA_BASE_URL` al host interno de Ollama.
3. Restringir `CORS_ORIGIN` al dominio interno permitido.
4. Si hay acceso de multiples clientes, definir `OLLAMA_PROXY_TOKEN`.

### Variante B: Proveedor externo (fallback)

1. Mantener `OLLAMA_BASE_URL` como primario.
2. Configurar `OLLAMA_FALLBACK_URL` para continuidad.
3. Si el proveedor externo exige auth, usar `OLLAMA_UPSTREAM_TOKEN`.
4. Validar que el fallback responde con una prueba controlada.

## 3. Build y arranque

1. Construir app:
   ```bash
   npm run build
   ```
2. Iniciar backend productivo:
   ```bash
   npm start
   ```
3. Verificar salud:
   ```bash
   curl http://127.0.0.1:4173/api/health
   ```

## 4. Smoke test funcional

1. Abrir la aplicacion en el navegador.
2. Ir a `/consultor-ia`.
3. Enviar una consulta corta (ej. "obligaciones CAE en contratas").
4. Confirmar que responde sin errores de red.

## 5. Criterio de listo

1. El frontend se sirve desde `dist/` por `server.js`.
2. `/api/health` devuelve `ok: true`.
3. `/api/ollama/*` responde desde proveedor primario o fallback.
4. No hay credenciales hardcodeadas en codigo fuente.
