# PRL España — Cultura de Prevención y Misión Estratégica

> **Más que Normativa:** Una plataforma diseñada para transformar el complejo marco legal español en decisiones operativas que salvan vidas. Cada día, 1.800 personas sufren un accidente laboral en España; nuestro compromiso es reducir esa cifra a través de datos, capacitación y blindaje normativo.

[![Deploy](https://github.com/DonBorgiFR/PRL-Espana/actions/workflows/deploy.yml/badge.svg)](https://github.com/DonBorgiFR/PRL-Espana/actions/workflows/deploy.yml)

---

## ¿Qué es PRL España?

Una herramienta de alto impacto para técnicos de prevención y líderes de seguridad que integra:

- **Radiografía del Riesgo:** Visualización de datos críticos de siniestralidad (INSST/OIT) para fomentar la toma de conciencia.
- **Evolución Legislativa:** Un viaje visual por la historia de la PRL en España (1900-2026).
- **Blindaje Normativo:** Más de **300 artículos íntegros** de las 8 normas clave, cruzados dinámicamente con módulos formativos.
- **Buscador Inteligente:** Consulta simultánea en leyes y fichas técnicas con IA local.
- **Auditoría interactiva:** Checklist sectorial con generación de informes PDF para evidencias ante la Inspección.
- **Mapas de obligaciones:** Adaptados a cada rol (Técnico, Mando, RRHH, Trabajador).
- **Gestión de CAE:** Control específico de coordinación en obras y contratas.

No requiere instalación ni cuenta. Privacidad total: funciona 100% en el navegador.

---

## 📋 Normativa incluida (8 normas base)

| Norma | Código | Contenido |
| :--- | :--- | :--- |
| ⚖️ LPRL | Ley 31/1995 | Marco jurídico fundamental de la PRL en España |
| 🏢 RSP | RD 39/1997 | Servicios de prevención, evaluación de riesgos, auditorías |
| 🤝 CAE | RD 171/2004 | Coordinación de actividades empresariales (contratas) |
| 🏗️ Construcción | RD 1627/1997 | Seguridad en obras: ESS, EBSS, PSS, coordinadores |
| 🏭 Lugares de Trabajo | RD 486/1997 | Condiciones constructivas, temperatura, iluminación, ergonomía |
| ⚡ Riesgo Eléctrico | RD 614/2001 | Protección eléctrica, Regla de Oro, trabajos AT/BT |
| 🔧 Equipos de Trabajo | RD 1215/1997 | Máquinas, resguardos, LOTO, equipos móviles |
| 🦺 EPI | RD 773/1997 | Equipos de protección individual: selección, categorías, registro |

Cada norma incluye: capítulos, artículos completos, etiquetas de búsqueda y enlace directo al BOE.

---

## 🚀 Funcionalidades principales

### Buscador Inteligente

Busca en tiempo real en los artículos y fichas de las 8 normas. Filtra por ley o nivel. Resultados con badges técnico/divulgativo y acceso directo al artículo.

### Referencias Cruzadas (23 conexiones)

Mapa visual de cómo se relacionan los artículos entre normas. Por ejemplo:

- LPRL Art. 15 → RD 773/1997 Art. 1 (jerarquía de controles → EPI como última medida)
- RD 1215 Anexo I.C → RD 614 Art. 7 (LOTO + Regla de Oro eléctrica)

### Fichas de Capacitación (10 fichas)

Módulos formativos en 3 niveles con contenido estructurado, referencias normativas y quiz interactivo (5 preguntas, corrección automática).

- **Básico:** Fundamentos LPRL, Derechos y Obligaciones, Participación
- **Intermedio:** Evaluación de riesgos, Organización preventiva, Colectivos sensibles
- **Avanzado:** CAE, Construcción, Régimen sancionador, Auditoría del sistema

### Auditoría Interactiva + PDF

Checklist sectorial por tipo de empresa (Oficinas, Industria, Comercio, Construcción). Progreso visual por bloque normativo. Exportación del informe completo a PDF diseñada para gestionar el caos documental de la CAE en obra y servir como prueba ante requerimientos de subsanación de la Inspección de Trabajo.

### Mapas por Rol

Guías de obligaciones para: Técnico PRL, Mando Intermedio, Trabajador, RRHH, Autónomo. Con fichas recomendadas y artículos relevantes por perfil.

### Consultor IA (Vista Previa)

Escribe tu consulta y el sistema busca en la base normativa interna devolviendo los artículos y fichas más relevantes. Botón copiar, historial persistente y presets por categoría. Sin necesidad de IA externa.

---

## 🖥️ Uso local (técnicos con perfil técnico)

Si quieres ejecutarlo en tu propio ordenador:

```bash
# 1. Clonar el repo
git clone https://github.com/DonBorgiFR/PRL-Espana.git
cd PRL-Espana

# 2. Instalar dependencias (Node 18+ requerido)
npm install

# 3. Arrancar
npm run dev
# Abre http://localhost:5173
```

Para construir la versión de producción:

```bash
npm run build    # genera dist/
npm run preview  # sirve dist/ en http://localhost:4173
```

---

## 📁 Estructura del proyecto

```text
PRL-Espana/
├── src/
│   ├── App.tsx              ← toda la lógica de UI (vistas, componentes)
│   ├── index.css            ← sistema de diseño completo
│   └── data/
│       ├── types.ts         ← definiciones TypeScript
│       ├── index.ts         ← buscador, exportaciones
│       ├── lprl.ts          ← Ley 31/1995
│       ├── rsp.ts           ← RD 39/1997
│       ├── cae.ts           ← RD 171/2004
│       ├── construccion.ts  ← RD 1627/1997
│       ├── rd486.ts         ← RD 486/1997
│       ├── rd614.ts         ← RD 614/2001 ✨ nuevo
│       ├── rd1215.ts        ← RD 1215/1997 ✨ nuevo
│       ├── rd773.ts         ← RD 773/1997 ✨ nuevo
│       ├── fichas.ts        ← 10 fichas de capacitación
│       ├── referencias.ts   ← 23 referencias cruzadas
│       ├── rolesData.ts     ← mapas por rol profesional
│       └── documentosData.ts
├── .agent/
│   └── workflows/
│       ├── add_ficha.md     ← cómo añadir una ficha nueva
│       ├── add_norma.md     ← cómo añadir una norma nueva
│       └── build_deploy.md  ← guía de build y deploy
├── .github/
│   └── workflows/
│       └── deploy.yml       ← CI/CD → GitHub Pages
├── docs/
│   └── prl-industria/       ← documentación operativa (flujos, plantillas)
└── ROADMAP.md               ← estado del proyecto por bloques
```

---

## ⚙️ Workflows de agente

Si usas un asistente de IA (como Antigravity/Claude) para mantener este proyecto, los workflows en `.agent/workflows/` documentan los procedimientos:

- **`/add_ficha`** — añadir una nueva ficha de capacitación
- **`/add_norma`** — integrar una nueva norma al data layer
- **`/build_deploy`** — proceso completo de build y deploy

---

## 🔧 Stack tecnológico

- **React 18 + TypeScript** — UI + tipado estático
- **Wouter** — routing SPA sin dependencias pesadas
- **Vite 6** — build tool + dev server
- **jsPDF + html2canvas** — exportación PDF nativa
- **Vanilla CSS** — design system propio (glassmorphism, dark mode, CSS custom properties)
- **Google Fonts** — DM Sans (cuerpo) + Playfair Display (títulos)

Sin frameworks CSS externos. Sin base de datos. Sin backend obligatorio.

---

## 🤖 Integración con IA real (opcional)

El Consultor IA funciona en modo vista previa sin ningún backend.

Para activar respuestas generadas por IA:

1. Despliega el `server.js` incluido (Node/Express) en tu infraestructura
2. Configura las variables de entorno (`.env.example` como plantilla)
3. El frontend se conecta automáticamente si detecta `/api/health` activo

Compatible con: Ollama local (intranet privada), Groq, OpenAI, OpenRouter, o cualquier proveedor con API compatible OpenAI.

> Ver `.agent/workflows/build_deploy.md` para instrucciones detalladas.

---

## 📄 Licencia y uso

Proyecto desarrollado como herramienta profesional de consulta normativa.
Contenido normativo: fuente pública (BOE.es).
Código: uso libre para fines formativos y profesionales en entornos PRL.

---

## 📈 Estado del proyecto (Marzo 2026)

| Bloque | Estado |
| :--- | :--- |
| 1 — Backend proxy IA | ✅ Completado |
| 2 — Exportación PDF (Fichas, Artículos, Auditoría) | ✅ Completado |
| 3 — UX Consultor IA (presets, historial, copiar) | ✅ Completado |
| 4 — Workflows de agente | ✅ Completado |
| 5 — Ampliación normativa (RD 614, 1215, 773) | ✅ Completado |
| 6 — Repo espejo + CI/CD | ✅ Completado |
| 7 — Rediseño Estratégico y Concienciación | ✅ Completado |
