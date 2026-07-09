# ROADMAP — PRL España

Estado: 24 de marzo de 2026. Última actualización: 23:10.

---

## Lo que ya esta en produccion

### Aplicacion web (SPA React + TypeScript)

| Modulo | Estado | Revisiones pendientes |
| :--- | :--- | :--- |
| Base normativa LPRL (Ley 31/1995) | ✅ Operativo | Ampliar articulos menos cubiertos |
| Base normativa RSP (RD 39/1997) | ✅ Operativo | Ampliar capitulos de organización del SP |
| Base normativa CAE (RD 171/2004) | ✅ Operativo | Añadir fichas de capacitacion especificas |
| Base normativa Construccion (RD 1627/1997) | ✅ Operativo | Ampliar articulos de coordinacion de seguridad |
| Base normativa RD 486/1997 | ✅ Operativo | Revisar exhaustividad de Anexos |
| Referencias cruzadas (17 conexiones) | ✅ Operativo | Añadir conexiones con RD 614/2001 (electrico) y RD 773/1997 (EPI) |
| Fichas de capacitacion (10 modulos) | ✅ Operativo | Ampliar a 15 fichas; añadir fichas especificas RD 486 y RD 773 |
| Buscador inteligente | ✅ Operativo | Mejorar ranking de relevancia; filtro por norma |
| Consultor IA (vista previa publica) | ✅ Operativo en preview | Activacion real solo como servicio post-implementacion personalizada |
| Exportación PDF de artículos y fichas | ✅ Operativo | Extender a vista del Checklist Auditoría |

### Repositorio documental PRL Industria

| Modulo | Estado | Revisiones pendientes |
| :--- | :--- | :--- |
| FLW-01 Evaluacion de riesgos | ✅ Operativo | Añadir checklist especifico por tipo de puesto industrial |
| FLW-02 Induccion nuevo ingreso | ✅ Operativo | Adaptar a contratas y ETTs |
| FLW-03 CAE contratas | ✅ Operativo | Ampliar para obras con Plan de Seguridad activo |
| FLW-04 Vigilancia de la salud | ✅ Operativo | Añadir protocolo de reincorporacion post-baja |
| FLW-05 Incidentes y cierre | ✅ Operativo | Integrar metodologia 5 Why en RCA |
| FLW-06 Condiciones del lugar de trabajo (RD 486) | ✅ Operativo | Crear TPL-06-01 (checklist RD 486 por area) |
| Matriz de obligaciones legales | ✅ Operativo | Ampliar con sectores servicios y construccion |
| Plantillas TPL-01 a TPL-05 | ✅ Operativo | Pilotar con equipo PRL real; ajustar tras primer ciclo |
| Plan implementacion 30 dias | ✅ Operativo | Revisar hitos tras primer piloto |
| Tablero de seguimiento semanal | ✅ Operativo | Conectar a herramienta digital (Notion/Sheets) |
| Operativa semanal tipo | ✅ Operativo | Adaptar a empresas con varios centros de trabajo |
| Estrategia repo espejo | ✅ Operativo | Crear repo real en GitHub; configurar CI sync |

---

## Bloques pendientes (en orden de prioridad)

### Bloque 1 — Base IA lista para activacion personalizada

**Por que primero:** mantener el consultor util en modo preview publico y dejar la IA real como capa opcional de servicio.

- [x] Backend minimo (Node/Express) con endpoint `/api/ollama/*` y `healthcheck`.
- [x] Variables de entorno para host Ollama, fallback y token de acceso.
- [x] Documentado en `.agent/workflows/build_deploy.md`.
- [x] CORS restringible por lista de origenes + plantilla productiva sin credenciales hardcodeadas.
- [x] Variante A: Ollama en red local (intranet corporativa).
- [x] Variante B: modelo externo via API (fallback).

### Bloque 2 — Exportacion PDF

**Por que segundo:** los equipos de campo necesitan imprimir evidencias y checklists.

- [x] Exportar fichas de capacitacion a PDF.
- [x] Exportar articulo view a PDF (con referencias cruzadas visibles).
- [x] Explorar: `jsPDF` + `html2canvas` (Implementado).
- [x] Exportar resultados de Checklist de Auditoría Interactiva.

### Bloque 3 — UX consultor IA

**Por que tercero:** mejorar la experiencia de prueba publica antes de escalar activaciones personalizadas.

- [ ] Presets de consulta rapida (botones de prompt frecuentes).
- [ ] Boton copiar/exportar respuesta.
- [ ] Historial de consultas (localStorage).
- [ ] Indicador de fuentes usadas en la respuesta.

### Bloque 4 — Consistencia interna y workflows de agente

**Por que cuarto:** documentar para no perder prácticas establecidas.

- [x] `.agent/workflows/add_ficha.md` — proceso para añadir ficha de capacitacion.
- [x] `.agent/workflows/build_deploy.md` — proceso de build + deploy completo.
- [x] `.agent/workflows/add_norma.md` — proceso para integrar nueva norma al data layer.

### Bloque 5 — Ampliacion normativa

**Por que quinto:** completar coverage para sectores mas demandados.

- [x] RD 614/2001 — Riesgo electrico (alta demanda en industria y mantenimiento). 8 artículos, color cian.
- [x] RD 1215/1997 — Equipos de trabajo (complementa RD 486 Anexo I.C). 7 artículos, color violeta.
- [x] RD 773/1997 — EPI (complementa jerarquia de controles). 8 artículos, color rosa.
- [ ] Revisar exhaustividad del RD 486/1997 (Anexos I al VI). Pendiente.

### Bloque 6 — Repo espejo operativo

**Por que sexto:** materializar estrategia ya documentada.

- [x] Crear repo GitHub dedicado para equipos de prevencion.
- [x] Configurar GitHub Actions para sync automatico desde este repo.
- [x] README publico con guia de uso para tecnicos PRL sin perfil tecnico.

### Bloque 7 — Rediseño Estratégico y de Concienciación

**Por que septimo:** transformar la utilidad técnica en una misión de impacto y valor corporativo.

- [x] Nuevo Hero con enfoque en "Cultura de Prevención" y misión estratégica.
- [x] Radiografía del Riesgo: visualización de datos de impacto (Siniestralidad 2024).
- [x] Timeline histórico: Evolución normativa en España (1900-2026).
- [x] Blindaje Normativo: visualización del volumen de datos (artículos x fichas).
- [x] Traducción completa (ES, CA, EU, GL) del nuevo sistema de comunicación.

### Bloque 8 — Módulo Cooperativo
- [x] Crear e integrar las Fitxes de Cura específicas en catalán/castellano (Ergonomía, Voz y Riesgos Biológicos, Movilización dependientes, Burnout).
- [x] Registrar e integrar los 4 perfiles y obligaciones en el mapa de roles (Directora, Cuidado, Àrea de Persones, PMO).
- [x] Crear el enrutado a `/cooperativa` y enlazado en la sección principal del sidebar con iconografía unificada lineal SVG.
- [x] Diseñar el selector de servicios de auditoría (Bressol, Lleure, Gent Gran) con persistencia reactiva en localStorage, enlaces a artículos de ley, barra de cumplimiento y botón de reinicio.

### Bloque 9 — Informes PDF para Licitaciones Públicas (Fase 5)
- [ ] Incorporar membrete formal y logotipo simulado de la cooperativa.
- [ ] Integrar los sellos de calidad **ISO 9001:2015** y **Balanç Social de la XES** (Xarxa d'Economia Solidària) como ventaja competitiva en licitaciones.
- [ ] Exportación en formato tabular discriminando ítems verificados y pendientes, colorimetría según estado.
- [ ] Soporte de firma de responsabilidad corporativa y marcas de validación.

### Bloque 10 — Innovación y Participación: Buzón "EspaiTRES" (Fase 6)
- [ ] Crear la pestaña de Participación en el Módulo Cooperativo.
- [ ] Diseñar el formulario interactivo para que los trabajadores reporten riesgos/alertas rápidas (mobiliario roto, psicosocial, etc.) con guardado local.
- [ ] Integrar la filosofía participativa y co-diseño colaborativo de soluciones del EspaiTRES.

### Bloque 11 — Auditoría Societaria y Cláusula de Equiparación (Fase 7)
- [ ] Añadir un micro-checklist de "Auditoría Societaria (RRI)" para el rol de Àrea de Persones (RH).
- [ ] Diseñar las 4 preguntas de control que verifiquen que el Reglamento de Régimen Interno no vulnere los derechos indisponibles de prevención de riesgos.
- [ ] Verificar el cumplimiento de la "cláusula de equiparación" para garantizar condiciones laborales equivalentes a las del convenio de sector.

---

## Convenciones de este archivo

## Decision de producto vigente

- La publicacion del producto **no depende** de tener IA real activa.
- El consultor IA se mantiene en **modo vista previa** para uso publico.
- La conexion a modelo real (local o nube) se ofrece como **post-implementacion personalizada**.

- Se actualiza al cierre de cada bloque o iteracion de sesion.
- Cada modulo completado mantiene su fila con las revisiones pendientes visibles.
- Las revisiones pendientes no bloquean el estado "Operativo" — son mejoras de iteraciones futuras.
- Ver `docs/prl-industria/operativo/LO-QUE-VIENE.md` para el detalle del bloque activo.
