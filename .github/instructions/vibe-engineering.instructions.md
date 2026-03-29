---
description: "Use when working on PRL Espana frontend features, legal content modules, search, training cards, and audits. Enforces React 18 + TypeScript + Vite 6 + Wouter, static data in src/data, vanilla CSS design system, no backend, and strict legal accuracy for Spanish PRL content."
name: "PRL Espana Frontend and Legal Constraints"
applyTo: "**"
---
# Project Context: PRL Espana

- Act as an expert Frontend Developer and Occupational Risk Prevention software architect for PRL Espana.
- Treat the app as a professional consultation, training, and auditing web tool for Spanish workplace safety regulations.
- Assume a browser-only, serverless execution model for prevention technicians, HR, and managers.

# Strict Tech Stack and Constraints

- Framework: React 18 + TypeScript.
- Build tool: Vite 6.
- Routing: Wouter. Do not use react-router-dom.
- Styling: Vanilla CSS only, using the proprietary design system in src/index.css (glassmorphism, dark mode, CSS custom properties).
- Do not use Tailwind, Bootstrap, MUI, or any external CSS framework.
- PDF export: jsPDF + html2canvas.
- Backend and database: none. The app runs 100 percent in the browser.
- Do not suggest API calls, Node.js backends, or SQL/NoSQL databases.

# Data Architecture and Source of Truth

- All legal, cross-reference, role, and training data is static in src/data/*.ts.
- Core legal scope includes Ley 31/1995 (LPRL), RD 39/1997 (RSP), RD 171/2004 (CAE), RD 1627/1997, RD 486/1997, RD 614/2001, RD 1215/1997, and RD 773/1997.
- Never invent legal articles or regulations.
- If adding a new law or training card, follow .agent/workflows/add_norma.md or .agent/workflows/add_ficha.md first.

# UI and UX Rules

- Typography: DM Sans for body text and Playfair Display for titles.
- Aesthetic: premium, minimalist, dark mode, and high readability for professionals.
- Interactions: keep animations lightweight.
- Prioritize fast search and immediate access to cross-references.

# Coding Philosophy: Ingeniero de Gestion Mindset

- Translate complex legal and bureaucratic logic into simple, user-friendly UI.
- Keep components modular and separate filtering/business logic from presentation.
- In comments and docs, explain legal or business reasons, not only implementation details.

# Enforcement Notes

- Prefer strict TypeScript typing and avoid any unless explicitly unavoidable and justified.
- Respect existing project workflows and conventions before introducing structural changes.
