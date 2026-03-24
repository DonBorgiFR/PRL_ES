import { DocumentTemplate } from './types';

export const documentosData: DocumentTemplate[] = [
  {
    id: 'entrega-epis',
    title: 'Acta de Entrega de EPIs',
    description: 'Documento legal para justificar la entrega gratuita de Equipos de Protección Individual al trabajador (Art. 17 LPRL).',
    icon: '🦺',
    fields: [
      { name: 'empresa', label: 'Nombre de la Empresa', type: 'text' },
      { name: 'trabajador', label: 'Nombre del Trabajador', type: 'text' },
      { name: 'dni', label: 'DNI / NIE', type: 'text' },
      { name: 'puesto', label: 'Puesto de Trabajo', type: 'text' },
      { name: 'fecha', label: 'Fecha de Entrega', type: 'date' },
      { name: 'epis', label: 'Equipos Entregados (separados por coma)', type: 'textarea' },
    ],
    contentTemplate: `
# ACTA DE ENTREGA DE EQUIPOS DE PROTECCIÓN INDIVIDUAL (EPI)

**Empresa:** {{empresa}}
**Fecha:** {{fecha}}

D./Dña. **{{trabajador}}**, provisto/a de DNI/NIE **{{dni}}**, y prestando servicios para la empresa en el puesto de **{{puesto}}**.

### DECLARA:
Que recibe en el día de hoy, y con carácter gratuito, los siguientes Equipos de Protección Individual (EPI), adecuados para los riesgos de su puesto de trabajo de conformidad con lo establecido en la Ley 31/1995 de PRL y el RD 773/1997:

**Equipos entregados:**
{{epis}}

### COMPROMISOS DEL TRABAJADOR (Art. 29 LPRL):
1. Utilizar correctamente los EPI facilidados, según las instrucciones recibidas.
2. Cuidar de su perfecto estado y conservación.
3. Colocar los equipos después de su utilización en el lugar indicado para ello.
4. Informar de inmediato a su superior jerárquico de cualquier defecto, anomalía o daño apreciado.

El trabajador firma este documento como acuse de recibo de los materiales y asume los compromisos en materia de prevención.

<br><br><br>
<div style="display: flex; justify-content: space-between; margin-top: 50px;">
  <div style="text-align: center;">
    <p><strong>Fdo. El Trabajador</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
  </div>
  <div style="text-align: center;">
    <p><strong>Por la Empresa</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
  </div>
</div>
    `
  },
  {
    id: 'recurso-preventivo',
    title: 'Nombramiento Recurso Preventivo',
    description: 'Designación oficial de trabajador como Recurso Preventivo con formación mínima de 50h.',
    icon: '🏗️',
    fields: [
      { name: 'empresa', label: 'Nombre de la Empresa', type: 'text' },
      { name: 'trabajador', label: 'Trabajador Designado', type: 'text' },
      { name: 'dni', label: 'DNI / NIE', type: 'text' },
      { name: 'centro', label: 'Centro de Trabajo / Obra', type: 'text' },
      { name: 'fecha', label: 'Fecha de Designación', type: 'date' },
      { name: 'motivo', label: 'Motivo de la presencia (Art. 32 bis)', type: 'select', options: [
        'Riesgos especiales (caídas en altura, espacios confinados, etc.)',
        'Actividades concurrentes que agravan el riesgo',
        'Requerimiento de la Inspección de Trabajo'
      ] },
    ],
    contentTemplate: `
# NOMBRAMIENTO DE RECURSO PREVENTIVO

**Empresa:** {{empresa}}
**Centro de Trabajo / Obra:** {{centro}}
**Fecha:** {{fecha}}

Por medio del presente documento, la Dirección de la empresa, al amparo del artículo 32 bis de la Ley 31/1995 de Prevención de Riesgos Laborales y el artículo 22 bis del RD 39/1997, procede a designar a:

D./Dña. **{{trabajador}}** con DNI/NIE **{{dni}}**

como **RECURSO PREVENTIVO** en el centro de trabajo reseñado superiormente.

### MOTIVO DE LA DESIGNACIÓN:
La designación tiene carácter obligatorio por el siguiente motivo legal:
**{{motivo}}**

### FUNCIONES ASIGNADAS:
- Vigilar el cumplimiento de las medidas incluidas en el plan o evaluación de riesgos.
- Comprobar la eficacia de las mismas.
- Dar las indicaciones necesarias para el correcto e inmediato cumplimiento de las actividades preventivas.

La persona designada declara poseer, como mínimo, la formación preventiva correspondiente a las funciones de nivel básico (50/60 horas) estipuladas en el RSP, disponer de los medios necesarios y ACEPTAR la presente designación.

<br><br><br>
<div style="display: flex; justify-content: space-between; margin-top: 50px;">
  <div style="text-align: center;">
    <p><strong>Acepto la Designación</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
    <p>{{trabajador}}</p>
  </div>
  <div style="text-align: center;">
    <p><strong>La Dirección</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
  </div>
</div>
    `
  },
  {
    id: 'informacion-riesgos',
    title: 'Acta de Información de Riesgos',
    description: 'Justificante de entrega de información sobre riesgos del puesto (Art. 18 LPRL). Válido para inspecciones.',
    icon: '📋',
    fields: [
      { name: 'empresa', label: 'Nombre de la Empresa', type: 'text' },
      { name: 'trabajador', label: 'Nombre del Trabajador', type: 'text' },
      { name: 'dni', label: 'DNI / NIE', type: 'text' },
      { name: 'puesto', label: 'Puesto de Trabajo', type: 'text' },
      { name: 'departamento', label: 'Departamento / Sección', type: 'text' },
      { name: 'fecha', label: 'Fecha de Entrega', type: 'date' },
      { name: 'riesgos', label: 'Riesgos identificados en el puesto', type: 'textarea' },
      { name: 'medidas', label: 'Medidas preventivas aplicables', type: 'textarea' },
    ],
    contentTemplate: `
# ACTA DE INFORMACIÓN DE RIESGOS LABORALES
## (Artículo 18 de la Ley 31/1995 de PRL)

**Empresa:** {{empresa}}
**Fecha:** {{fecha}}

D./Dña. **{{trabajador}}**, con DNI/NIE **{{dni}}**, que presta servicios en el puesto de **{{puesto}}** ({{departamento}}), DECLARA haber recibido información suficiente y adecuada sobre:

### RIESGOS ESPECÍFICOS DEL PUESTO:
{{riesgos}}

### MEDIDAS DE PREVENCIÓN Y PROTECCIÓN APLICABLES:
{{medidas}}

### INFORMACIÓN ADICIONAL ENTREGADA:
- Plan de Prevención de Riesgos Laborales de la empresa.
- Medidas de emergencia y evacuación (Art. 20 LPRL).
- Identidad del Servicio de Prevención y de los Delegados de Prevención.

El trabajador/a declara haber recibido y comprendido la información anterior, habiendo tenido ocasión de formular las preguntas oportunas.

<br><br><br>
<div style="display: flex; justify-content: space-between; margin-top: 50px;">
  <div style="text-align: center;">
    <p><strong>El Trabajador/a</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
    <p>{{trabajador}} — DNI {{dni}}</p>
  </div>
  <div style="text-align: center;">
    <p><strong>Por la Empresa / Responsable PRL</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
  </div>
</div>
    `
  },
  {
    id: 'investigacion-accidente',
    title: 'Informe de Investigación de Accidente',
    description: 'Documento para investigar accidentes/incidentes y establecer causas y medidas correctoras (Art. 16 LPRL).',
    icon: '🔍',
    fields: [
      { name: 'empresa', label: 'Empresa', type: 'text' },
      { name: 'accidentado', label: 'Nombre del Accidentado', type: 'text' },
      { name: 'puesto', label: 'Puesto / Tarea que realizaba', type: 'text' },
      { name: 'fecha', label: 'Fecha y hora del accidente', type: 'text' },
      { name: 'lugar', label: 'Lugar exacto del accidente', type: 'text' },
      { name: 'descripcion', label: 'Descripción de lo ocurrido', type: 'textarea' },
      { name: 'causas', label: 'Causas identificadas (básicas e inmediatas)', type: 'textarea' },
      { name: 'medidas', label: 'Medidas correctoras propuestas', type: 'textarea' },
      { name: 'investigador', label: 'Nombre del investigador', type: 'text' },
    ],
    contentTemplate: `
# INFORME DE INVESTIGACIÓN DE ACCIDENTE / INCIDENTE

**Empresa:** {{empresa}}
**Fecha de elaboración:** {{fecha}}

---

### DATOS DEL ACCIDENTE
- **Personas afectada:** {{accidentado}}
- **Puesto / Tarea:** {{puesto}}
- **Fecha y hora:** {{fecha}}
- **Lugar:** {{lugar}}

### DESCRIPCIÓN DE LO OCURRIDO
{{descripcion}}

### ANÁLISIS CAUSAL
**Causas identificadas:**
{{causas}}

### MEDIDAS CORRECTORAS Y PREVENTIVAS
{{medidas}}

---

**Investigación realizada por:** {{investigador}}

> Este informe ha sido elaborado al amparo del Art. 16 de la Ley 31/1995 de PRL y del RD 39/1997. Las medidas correctoras deberán incorporarse a la Planificación de la Actividad Preventiva con responsable y plazo definidos.

<br><br><br>
<div style="display: flex; justify-content: space-between; margin-top: 50px;">
  <div style="text-align: center;">
    <p><strong>Investigador/a</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
    <p>{{investigador}}</p>
  </div>
  <div style="text-align: center;">
    <p><strong>Dirección / Responsable PRL</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
  </div>
</div>
    `
  },
  {
    id: 'permiso-trabajo-especial',
    title: 'Permiso de Trabajo en Altura',
    description: 'Autorización formal para trabajos en altura con evaluación previa del riesgo y medidas de control (RD 2177/2004).',
    icon: '📐',
    fields: [
      { name: 'empresa', label: 'Empresa Ejecutora', type: 'text' },
      { name: 'responsable', label: 'Responsable del Trabajo', type: 'text' },
      { name: 'trabajadores', label: 'Trabajadores autorizados', type: 'textarea' },
      { name: 'descripcion', label: 'Descripción del trabajo a realizar', type: 'textarea' },
      { name: 'altura', label: 'Altura aproximada (metros)', type: 'text' },
      { name: 'lugar', label: 'Lugar / Zona de trabajo', type: 'text' },
      { name: 'fecha', label: 'Fecha de autorización', type: 'date' },
      { name: 'epi', label: 'EPIs obligatorios a utilizar', type: 'textarea' },
      { name: 'autorizador', label: 'Nombre del Autorizador (técnico / encargado)', type: 'text' },
    ],
    contentTemplate: `
# PERMISO DE TRABAJO EN ALTURA

**Empresa:** {{empresa}}
**Fecha:** {{fecha}}

De acuerdo con el RD 2177/2004 sobre trabajos verticales y medidas de protección colectiva contra caídas, se AUTORIZA la ejecución del siguiente trabajo:

### DATOS DEL TRABAJO
- **Responsable del trabajo:** {{responsable}}
- **Trabajadores autorizados:**
{{trabajadores}}
- **Descripción de la tarea:** {{descripcion}}
- **Lugar / Zona:** {{lugar}}
- **Altura de trabajo estimada:** {{altura}} m

### MEDIDAS DE PROTECCIÓN OBLIGATORIAS

**EPIs de obligado uso:**
{{epi}}

**Protecciones colectivas verificadas antes del inicio:**
- ☐ Andamios / Plataformas en buen estado
- ☐ Redes de seguridad instaladas si procede
- ☐ Señalización y balizamiento de la zona
- ☐ Estado del tiempo favorable (sin lluvia, viento fuerte o hielo)

### CONDICIONES DE VALIDEZ
Esta autorización es válida ÚNICAMENTE para la fecha y tarea indicadas. Queda prohibido el inicio de los trabajos sin la firma del autorizador.

<br><br><br>
<div style="display: flex; justify-content: space-between; margin-top: 50px;">
  <div style="text-align: center;">
    <p><strong>Responsable del Trabajo</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
    <p>{{responsable}}</p>
  </div>
  <div style="text-align: center;">
    <p><strong>Autorizador</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
    <p>{{autorizador}}</p>
  </div>
</div>
    `
  },
  {
    id: 'registro-formacion',
    title: 'Registro de Asistencia a Formación PRL',
    description: 'Documento de control y firma de asistentes a una acción formativa en materia de seguridad (Art. 19 LPRL).',
    icon: '🎓',
    fields: [
      { name: 'empresa', label: 'Empresa', type: 'text' },
      { name: 'curso', label: 'Nombre del curso / acción formativa', type: 'text' },
      { name: 'formador', label: 'Formador / Entidad formadora', type: 'text' },
      { name: 'fecha', label: 'Fecha de realización', type: 'date' },
      { name: 'duracion', label: 'Duración (horas)', type: 'text' },
      { name: 'lugar', label: 'Lugar / Modalidad (presencial, online...)', type: 'text' },
      { name: 'contenido', label: 'Resumen del contenido impartido', type: 'textarea' },
    ],
    contentTemplate: `
# REGISTRO DE ASISTENCIA A FORMACIÓN EN PRL
## (Art. 19 Ley 31/1995 de Prevención de Riesgos Laborales)

**Empresa:** {{empresa}}
**Fecha:** {{fecha}}

### DATOS DE LA ACCIÓN FORMATIVA
- **Nombre del curso:** {{curso}}
- **Formador / Entidad:** {{formador}}
- **Duración:** {{duracion}} horas
- **Lugar / Modalidad:** {{lugar}}

### CONTENIDOS IMPARTIDOS
{{contenido}}

---

### REGISTRO DE ASISTENTES

| Nombre y Apellidos | DNI / NIE | Puesto de Trabajo | Firma |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

---

> La formación ha sido impartida dentro de la jornada de trabajo o con descuento equivalente, de conformidad con el Art. 19.2 LPRL. Se conserva como documento acreditativo a disposición de la Autoridad Laboral e Inspección de Trabajo.

<br><br>
<div style="display: flex; justify-content: space-between; margin-top: 50px;">
  <div style="text-align: center;">
    <p><strong>El/La Formador/a</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
    <p>{{formador}}</p>
  </div>
  <div style="text-align: center;">
    <p><strong>Responsable PRL / Empresa</strong></p>
    <p style="margin-top: 40px;">___________________________</p>
  </div>
</div>
    `
  }
];
