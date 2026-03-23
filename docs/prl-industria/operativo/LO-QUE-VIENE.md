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

- Nombre: Despliegue IA productivo (backend proxy para Ollama).
- Estado: Pendiente.
- Motivo de prioridad: la integracion con Ollama solo funciona en desarrollo (proxy Vite). En produccion no hay backend; el consultor IA no puede operar.

## Entregables esperados

1. Backend minimo (Node/Express o similar) con endpoint `/api/ollama` que reenvie a Ollama local o remoto.
2. Configuracion de despliegue (variables de entorno, host Ollama, CORS).
3. Eliminar dependencia del proxy de Vite para produccion.
4. Documentar en `.agent/workflows/build_deploy.md` el proceso de build + deploy con IA activa.

## Criterios de listo

1. El consultor IA responde en la version de produccion (no solo en dev).
2. Build y deploy documentados paso a paso.
3. Sin credenciales hardcodeadas; configuracion via env vars.

## Riesgos de ejecucion

1. Ollama solo disponible en red local (no expuesto publicamente).
2. Costes de compute si se conecta a modelo externo.

## Mitigacion

1. Documentar ambas variantes: Ollama local (intranet) y API externa como fallback.
2. Proteger endpoint con token simple (Bearer) para evitar uso no autorizado.
