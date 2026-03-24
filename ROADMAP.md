# ROADMAP — PRL España

Estado: 24 de marzo de 2026.

---

## Lo que ya esta en produccion

### Aplicacion web (SPA React + TypeScript)

| Modulo | Estado | Revisiones pendientes |
|---|---|---|
| Base normativa LPRL (Ley 31/1995) | ✅ Operativo | Ampliar articulos menos cubiertos |
| Base normativa RSP (RD 39/1997) | ✅ Operativo | Ampliar capitulos de organización del SP |
| Base normativa CAE (RD 171/2004) | ✅ Operativo | Añadir fichas de capacitacion especificas |
| Base normativa Construccion (RD 1627/1997) | ✅ Operativo | Ampliar articulos de coordinacion de seguridad |
| Base normativa RD 486/1997 | ✅ Operativo | Ampliar Anexo V ergonomia, añadir Anexo VI EPI |
| Referencias cruzadas (17 conexiones) | ✅ Operativo | Añadir conexiones con RD 614/2001 (electrico) y RD 486 Anexo VI |
| Fichas de capacitacion (10 modulos) | ✅ Operativo | Ampliar a 15 fichas; añadir fichas especificas RD 486 |
| Buscador inteligente | ✅ Operativo | Mejorar ranking de relevancia; filtro por norma |
| Consultor IA (vista previa publica) | ✅ Operativo en preview | Activacion real solo como servicio post-implementacion personalizada |
| Exportación PDF de artículos y fichas | ✅ Operativo | Extender a vista del Checklist Auditoría |

### Repositorio documental PRL Industria

| Modulo | Estado | Revisiones pendientes |
|---|---|---|
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
- [ ] Exportar resultados de Checklist de Auditoría Interactiva.

### Bloque 3 — UX consultor IA
**Por que tercero:** mejorar la experiencia de prueba publica antes de escalar activaciones personalizadas.

- [ ] Presets de consulta rapida (botones de prompt frecuentes).
- [ ] Boton copiar/exportar respuesta.
- [ ] Historial de consultas (localStorage).
- [ ] Indicador de fuentes usadas en la respuesta.

### Bloque 4 — Consistencia interna y workflows de agente
**Por que cuarto:** documentar para no perder prácticas establecidas.

- [ ] `.agent/workflows/add_ficha.md` — proceso para añadir ficha de capacitacion.
- [ ] `.agent/workflows/build_deploy.md` — proceso de build + deploy completo.
- [ ] `.agent/workflows/add_norma.md` — proceso para integrar nueva norma al data layer.

### Bloque 5 — Ampliacion normativa
**Por que quinto:** completar cobertura para sectores mas demandados.

- [ ] RD 614/2001 — Riesgo electrico (alta demanda en industria y mantenimiento).
- [ ] RD 1215/1997 — Equipos de trabajo (complementa RD 486 Anexo I.C).
- [ ] RD 773/1997 — EPI (complementa jerarquia de controles).
- [ ] Ampliar RD 486 con Anexo VI (condiciones de proteccion — EPI).

### Bloque 6 — Repo espejo operativo
**Por que sexto:** materializar estrategia ya documentada.

- [ ] Crear repo GitHub dedicado para equipos de prevencion.
- [ ] Configurar GitHub Actions para sync automatico desde este repo.
- [ ] README publico con guia de uso para tecnicos PRL sin perfil tecnico.

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
