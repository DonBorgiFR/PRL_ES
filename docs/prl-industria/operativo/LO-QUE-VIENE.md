# Lo Que Viene (Siguiente Bloque)

Este documento debe actualizarse al cierre de cada semana para dejar trazado el siguiente paso sin ambiguedad.

## Bloque completado

- Nombre: Integracion formal RD 486/1997 en base normativa y flujos.
- Estado: **Completado**.
- Entregables cerrados:
  - `src/data/rd486.ts` — 6 capitulos, 12 articulos integrados.
  - `src/data/referencias.ts` — ref-13 a ref-17 (RD 486 ↔ LPRL/RSP).
  - `src/data/index.ts` — rd486 en leyes[] y exportado.
  - FLW-01 y MATRIZ_OBLIGACIONES actualizados (FLW-06 añadido).
  - Mitigaciones temporales retiradas de todos los documentos.

---

## Proximo bloque activo

- Nombre: Consultor IA en vista previa publica + activacion personalizada.
- Estado: En progreso.
- Motivo de prioridad: el consultor debe funcionar en publico en modo demostracion, dejando la IA real como servicio post-implementacion para clientes que lo soliciten.

## Entregables esperados

1. [x] Backend minimo (Node/Express) con endpoint `/api/ollama/*` y healthcheck `/api/health`.
2. [x] Configuracion por variables de entorno (`.env.example`) para host Ollama, fallback y tokens.
3. [x] Produccion desacoplada del proxy de Vite mediante `server.js` + `dist/`.
4. [x] Workflow documentado en `.agent/workflows/build_deploy.md`.
5. [ ] Endurecer seguridad de despliegue: `CORS_ORIGIN` restringido por entorno y token habilitado en entornos compartidos.

## Criterios de listo

1. El consultor IA funciona en la version publica en modo vista previa (sin depender de proveedor IA activo).
2. Build y deploy documentados paso a paso.
3. Sin credenciales hardcodeadas; configuracion via env vars.
4. El camino de activacion real queda documentado como post-implementacion personalizada.

## Riesgos de ejecucion

1. Ollama solo disponible en red local (no expuesto publicamente).
2. Costes de compute si se conecta a modelo externo.

## Mitigacion

1. Documentar ambas variantes: Ollama local (intranet) y API externa como fallback.
2. Proteger endpoint con token simple (Bearer) para evitar uso no autorizado.

---

## Lo que viene (siguiente accion operativa)

1. Consolidar mensajes y UX de "vista previa" en `/consultor-ia` para uso publico.
2. Mantener backend IA como capacidad opcional para activaciones personalizadas (sin bloquear publicacion).
3. Cerrar bloque en `ROADMAP.md` cuando el flujo de preview y la documentacion comercial queden firmados.

## Evidencia de avance (2026-03-23)

1. Healthcheck productivo validado: `/api/health` -> `ok: true`.
2. Endpoint `/api/ollama/chat` sin token -> `401`.
3. Endpoint `/api/ollama/chat` con token -> pasa autenticacion (respuesta `500` por proveedor no disponible en el host de prueba).
