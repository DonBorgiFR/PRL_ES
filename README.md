# 🏗️ PRL España — Base de Conocimiento Inteligente

PRL España es una herramienta avanzada de consulta y análisis de la normativa fundamental en **Prevención de Riesgos Laborales** (SST). Diseñada para técnicos de prevención, departamentos de formación y mandos intermedios, permite navegar de forma fluida a través del marco legal español, identificando conexiones entre leyes y accediendo a contenido formativo estructurado.

> **Roadmap completo y estado de cada módulo:** [`ROADMAP.md`](ROADMAP.md)

---

## 🏛️ Normativa Cubierta

La aplicación incluye el volcado estructurado de las cinco normas pilar de la PRL en España:

*   ⚖️ **Ley 31/1995 (LPRL)** — Marco jurídico fundamental.
*   🏢 **RD 39/1997 (RSP)** — Reglamento de los Servicios de Prevención.
*   🤝 **RD 171/2004 (CAE)** — Coordinación de Actividades Empresariales.
*   🏗️ **RD 1627/1997 (Construcción)** — Seguridad en obras de construcción.
*   🏭 **RD 486/1997** — Condiciones mínimas de seguridad y salud en los lugares de trabajo.

Cada norma incluye sus capítulos, artículos con **badges técnicos/divulgativos** y enlaces directos al BOE.

---

## 🚀 Funcionalidades Principales

*   **Buscador Inteligente:** Búsqueda rápida en toda la base normativa por palabras clave, artículos o etiquetas.
*   **Referencias Cruzadas:** Mapa interactivo con **17 conexiones estratégicas** entre normas (ej. cómo el Art. 24 LPRL se desarrolla en el RD 171/2004, o cómo el RD 486 Anexo IV aplica la evaluación del Art. 16 LPRL).
*   **Fichas de Capacitación:** 10 módulos formativos divididos en tres niveles (Básico, Intermedio, Avanzado) listos para orientación del personal.
*   **Consultor IA (Vista Previa):** Asistente inteligente en `/consultor-ia` que responde usando la base normativa interna. La activación con modelo IA real es disponible como servicio de post-implementación personalizada.
*   **Diseño Premium:** Interfaz oscura, minimalista y de alta legibilidad optimizada para profesionales.
*   **Vínculos BOE:** Acceso inmediato a la fuente oficial de cada artículo.

---

## 📚 Repositorio Documental PRL (Industria, MVP Operativo)

Paquete documental orientado a ejecución en entorno industrial, con trazabilidad legal, plantillas de campo y operativa semanal.

Ruta base: `docs/prl-industria/`

### Módulos completados

| Módulo | Estado | Revisiones pendientes |
|---|---|---|
| 6 flujos operativos (FLW-01 → FLW-06) | ✅ Completo | Ampliar con checklist sector-específico |
| Matriz de obligaciones legales | ✅ Completo | Añadir sectores adicionales (construcción, servicios) |
| Plantillas de campo (TPL-01 → TPL-05) | ✅ Completo | Validar con equipo PRL real en piloto |
| Plan de implementación 30 días | ✅ Completo | Ajustar fases según tamaño de empresa |
| Tablero de seguimiento semanal | ✅ Completo | Automatizar con herramienta (Notion/Sheets) |
| Operativa semanal tipo | ✅ Completo | Adaptar a turnos o trabajos nocturnos |
| Estrategia repo espejo | ✅ Completo | Configurar repo real + CI sync |
| RD 486/1997 en base normativa | ✅ Completo | Ampliar artículos y añadir FLW-06 dedicado |

### Acceso rápido

*   `docs/prl-industria/MATRIZ_OBLIGACIONES.md`
*   `docs/prl-industria/PLAN-IMPLEMENTACION-30DIAS.md`
*   `docs/prl-industria/TABLERO-SEGUIMIENTO.md`
*   `docs/prl-industria/operativo/LO-QUE-VIENE.md`
*   `docs/prl-industria/flows/`
*   `docs/prl-industria/templates/`

---

## 🛠️ Stack Tecnológico

*   **Core:** React 18 + TypeScript.
*   **Routing:** [Wouter](https://github.com/molecula-js/wouter).
*   **Estilos:** Vanilla CSS (Custom Properties, Glassmorphism, CSS Grid).
*   **Build Tool:** Vite.
*   **Fuentes:** DM Sans (Cuerpo), Playfair Display (Títulos).

---

## 🖥️ Configuración Local

1.  Clonar el repositorio.
2.  Instalar dependencias:

    ```bash
    npm install
    ```

3.  Ejecutar en modo desarrollo:

    ```bash
    npm run dev
    ```

4.  Construir para producción:

    ```bash
    npm run build
    ```

5.  Iniciar backend productivo (sirve `dist/` y proxy IA):

    ```bash
    npm start
    ```

6.  Verificar salud del backend:

    ```bash
    curl http://127.0.0.1:4173/api/health
    ```

## 🔐 Variables de Entorno (Producción IA)

Usar `.env.example` como plantilla.
Para despliegue productivo usar `.env.production.example` como base segura.

Variables clave:

*   `PORT`, `HOST`: binding del backend.
*   `CORS_ORIGIN`: origen permitido para frontend (admite lista separada por comas; en producción evitar `*`).
*   `OLLAMA_BASE_URL`: proveedor primario.
*   `OLLAMA_API_PREFIX`: prefijo API aguas arriba (por defecto `/api`).
*   `OLLAMA_FALLBACK_URL`: fallback opcional.
*   `OLLAMA_PROXY_TOKEN`: token Bearer para proteger `/api/ollama`.
*   `OLLAMA_UPSTREAM_TOKEN`: token hacia proveedor externo (si aplica).

---

## 💡 Integración con Ecosistema IA

### NotebookLM

Este repositorio está diseñado para ser sincronizado con **NotebookLM** como base de conocimiento. El archivo `src/data/` contiene los datos estructurados que pueden ser importados como fuentes para análisis profundo y generación de respuestas basadas únicamente en este contexto normativo.

### Activación Personalizada con IA Real (Ollama Local o Externo)

Si deseas una integración completa con un modelo de lenguaje, esta corresponde a la fase de **post-implementación personalizada**. El backend ya dispone del andamiaje (`server.js`) para conectar a:

*   **Ollama local** en tu intranet (Red privada, máxima privacidad).
*   **Proveedor externo** con API (Groq, OpenAI, OpenRouter).
*   **Fallback automático** entre primario y respaldo.

Ver documentación en `.agent/workflows/build_deploy.md` y `llm_integration.md` para la integración técnica completa.

Casuística de uso:

*   Generar checklists de auditoría personalizados basados en artículos específicos.
*   Crear escenarios de riesgo con recomendaciones tácticas.
*   Redactar resúmenes ejecutivos y reportes normalizados para directivos.

### Consultor IA (Vista Previa)

El proyecto incorpora una interfaz de consulta en `/consultor-ia` que opera en **modo vista previa**.

Funcionamiento actual (sin requerir IA real):

1. El usuario formula una pregunta técnica.
2. El sistema busca coincidencias en artículos y fichas (`searchAll`) y construye un contexto compacto (`buildNormativeContext`).
3. El consultor devuelve una respuesta estructurada extrayendo directamente de la base normativa interna, indicando claramente que se trata de una vista previa.
4. Si un proveedor IA real está disponible, la interfaz se adapta automáticamente (sin comprometer la publicación si no lo está).

**Activación Opcional con IA Real:**

Si deseas conectar un modelo de lenguaje real (Ollama local o proveedor externo), consulta la sección **Activación personalizada** abajo. Esto requiere configuración específica y es ofrecido como servicio de customización.

Inicio rápido modo vista previa:

```bash
npm run dev
# Acceder a http://127.0.0.1:5173/consultor-ia
```

Notas técnicas:

*   En desarrollo, el proxy Vite (`vite.config.ts`) puede reenviar tráfico IA si está disponible.
*   En producción, el proyecto incorpora `server.js` (Express) para servir `dist/` y reenviar `/api/ollama/*` de forma opcional.
*   El consultor funciona 100% sin dependencias de backend IA — diseño completamente resiliente.

---

## 🗺️ Roadmap de Explotación

*   [x] **Auditoría Interactiva:** Checklist sectorial basado en la normativa seleccionada.
*   [x] **Consultor IA (Vista Previa):** Asistente en `/consultor-ia` con contexto normativo interno (sin depender de proveedor IA).
*   [ ] **Activación IA Personalizada:** Módulo opcional de post-implementación con Ollama local o proveedor externo.
*   [ ] **Exportación PDF:** Descargar fichas, artículos y resultados de auditoría en PDF.
*   [ ] **Ampliación Normativa:** Inclusión de RD 614/2001 (Riesgo Eléctrico) y RD 1215/1997 (Equipos de Trabajo).

---

## 📌 Cierre de la Iteración (2026-03-24)

Estado al cierre:

*   UI renovada de la página principal (Home) dándole un acabado Premium (Glassmorphism, tarjetas de capacidades y métricas visuales atractivas).
*   Exportación a PDF implementada para Fichas de Capacitación y Artículos individuales, incluyendo en los resultados de búsqueda.
*   Consultor IA operativo en modo vista previa (sin dependencias de backend IA para publicación).
*   Backend productivo listo para activaciones IA personalizadas (`server.js` + proxy con healthcheck).
*   Repositorio sincronizado en GitHub con commits incrementales por funcionalidad.

---

## 🔜 Próxima Iteración (Checklist)

1. **Bloque 2 — Fase 2 PDF:**
    * Botón descargar para resultados de auditoría interactiva (Checklists).

2. **Bloque 3 — UX Consultor IA Vision Previa:**
    * Prompts rápidos por caso de uso (evaluación riesgos, coordinación actividades, etc.).
    * Botón copiar respuesta e historial corto (localStorage).
    * Indicadores visuales claros de "modo vista previa" vs "IA activa".

3. **Bloque 5 — Ampliación Normativa:**
    * Incorporación de nueva normativa RD 773/1997 (EPIs).
    * Extensión de RD 486/1997.

4. **Documentación de Activación Personalizada:**
    * Guía paso a paso en `docs/ACTIVACION-IA-PERSONALIZADA.md`.
    * Variantes locales (Ollama intranet), nube (Groq/OpenAI) y descripción de costes.
    * Ejemplos de archivo `.env.production` completado.
