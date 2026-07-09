import type { FichaCapacitacion } from './types';

// ============================================================
// 10 Fichas de Capacitación — 3 niveles
// ============================================================

export const fichas: FichaCapacitacion[] = [
  // NIVEL BÁSICO
  {
    id: 'ficha-01',
    titulo: 'Fundamentos de la Prevención de Riesgos Laborales',
    nivel: 'basico',
    duracion: '5-10 min',
    colectivo: 'Todos los trabajadores',
    icono: '📚',
    objetivo: 'Comprender el marco legal básico de la PRL, los conceptos fundamentales y la importancia de la prevención en el entorno de trabajo.',
    contenido: [
      'Marco normativo: Ley 31/1995 LPRL — objeto y ámbito de aplicación',
      'Conceptos básicos: riesgo, peligro, daño, prevención',
      'Obligaciones del empresario: el deber de garantizar la seguridad',
      'Principios de la acción preventiva (art. 15 LPRL): 9 principios jerárquicos',
      'Plan de Prevención y Evaluación de Riesgos: qué son y para qué sirven',
      'Riesgos más frecuentes en el trabajo: caídas, golpes, sobresfuerzos, contactos eléctricos',
    ],
    modulosLectura: [
      {
        titulo: '1. El Pilar: La Ley 31/1995 LPRL',
        texto: 'La Ley de Prevención de Riesgos Laborales (LPRL) es la espina dorsal normativa en España. Su objetivo principal no es castigar, sino crear una cultura de seguridad real que prevenga daños a la salud de los trabajadores. Obliga a que la seguridad sea un pilar integrado en todas las fases de la actividad empresarial.'
      },
      {
        titulo: '2. Peligro vs Riesgo: La diferencia fundamental',
        texto: 'A menudo se confunden, pero son distintos. El **Peligro** es la fuente o situación con capacidad de causar daño (ej: un cable eléctrico pelado). El **Riesgo** es la combinación de la probabilidad de que ocurra ese daño y la severidad del mismo (ej: la probabilidad de que alguien toque el cable x el daño de electrocución). Un Técnico de PRL no siempre puede eliminar el peligro, pero siempre debe minimizar el riesgo.'
      },
      {
        titulo: '3. El Deber de Protección y los Principios de Acción (Art. 15)',
        texto: 'El empresario tiene el deber inexcusable de garantizar la seguridad. Esto se hace mediante los Principios de la Acción Preventiva: combatir los riesgos en su origen, adaptar el trabajo a la persona y, crucialmente, **anteponer siempre la protección colectiva frente a la individual** (es decir, poner una barandilla perimetral antes que darle un arnés a un trabajador).'
      }
    ],
    normativaRelacionada: ['LPRL Art. 2', 'LPRL Art. 4', 'LPRL Art. 14', 'LPRL Art. 15'],
    quiz: [
      {
        question: '¿A quién corresponde el deber fundamental de garantizar la seguridad y salud de los trabajadores en todos los aspectos relacionados con el trabajo?',
        options: [
          'A los Delegados de Prevención.',
          'Al propio trabajador mediante el autocuidado.',
          'Al empresario titular o dirección.',
          'A la Inspección de Trabajo y Seguridad Social.'
        ],
        correctIndex: 2,
        explanation: 'El art. 14 de la LPRL establece que los trabajadores tienen derecho a una protección eficaz en materia de SST. Este derecho supone un correspondiente deber del empresario de proteger a los trabajadores frente a los riesgos laborales.',
        articleRef: 'Ley 31/1995 · Art. 14'
      },
      {
        question: 'Según los principios de la acción preventiva (Art. 15 LPRL), ¿qué medida se debe priorizar general?',
        options: [
          'Adoptar medidas que antepongan la protección colectiva a la individual.',
          'Proporcionar siempre EPIs (Equipos de Protección Individual) primero.',
          'Sustituir a los trabajadores que se quejen del riesgo.',
          'Evitar documentar el riesgo para reducir burocracia.'
        ],
        correctIndex: 0,
        explanation: 'El art. 15.1.h de la LPRL obliga a adoptar medidas que antepongan la protección colectiva a la individual, siendo los EPIs una medida de último recurso o complementaria.',
        articleRef: 'Ley 31/1995 · Art. 15'
      },
      {
        question: '¿Cuál es el primer principio de la acción preventiva?',
        options: [
          'Evaluar los riesgos que no se puedan evitar.',
          'Evitar los riesgos.',
          'Combatir los riesgos en su origen.',
          'Dar las debidas instrucciones a los trabajadores.'
        ],
        correctIndex: 1,
        explanation: 'Según el art. 15.1.a de la LPRL el empresario aplicará las medidas que integran el deber de prevención con arreglo al primer principio general: evitar los riesgos.',
        articleRef: 'Ley 31/1995 · Art. 15'
      },
      {
        question: '¿Qué es un Plan de Prevención de Riesgos Laborales?',
        options: [
          'Un cartel que se pone en la entrada del centro.',
          'Un documento voluntario para grandes empresas.',
          'La herramienta que integra la actividad preventiva de la empresa y la evaluación de riesgos.',
          'Una hoja de cálculo para RRHH con el listado de bajas.'
        ],
        correctIndex: 2,
        explanation: 'El art. 16.1 de la LPRL indica que la prevención de riesgos laborales deberá integrarse en el sistema general de gestión de la empresa a través de la implantación de un plan de prevención, incluyendo la evaluación y planificación operativa.',
        articleRef: 'Ley 31/1995 · Art. 16'
      },
      {
        question: 'En relación con los equipos de trabajo, el empresario adoptará medidas para que...',
        options: [
          'Su uso no presente riesgos y sean adecuados para el trabajo.',
          'Se reparen por el propio trabajador si no son seguros.',
          'Solo se usen de noche.',
          'Manejen la maquinaria los más rápidos aunque no tengan formación.'
        ],
        correctIndex: 0,
        explanation: 'El art. 17.1 estipula que el empresario adoptará las medidas necesarias con el fin de que los equipos de trabajo sean adecuados para el trabajo que deba realizarse y convenientemente adaptados a tal efecto.',
        articleRef: 'Ley 31/1995 · Art. 17'
      }
    ]
  },
  {
    id: 'ficha-02',
    titulo: 'Derechos y Obligaciones en Materia de PRL',
    nivel: 'basico',
    duracion: '5-10 min',
    colectivo: 'Todos los trabajadores',
    icono: '⚖️',
    objetivo: 'Conocer los derechos de los trabajadores en materia de seguridad y salud, así como sus obligaciones y la de los empresarios.',
    contenido: [
      'Derecho a la protección eficaz (art. 14 LPRL): qué implica para el empresario',
      'Obligaciones de los trabajadores (art. 29 LPRL): uso correcto de equipos y EPIs',
      'Derecho a la información: sobre riesgos del puesto y medidas preventivas',
      'Derecho a la formación (art. 19): teoría y práctica dentro de la jornada',
      'Derecho a paralizar el trabajo ante riesgo grave e inminente (art. 21)',
      'Derecho a la vigilancia de la salud (art. 22): carácter voluntario y excepciones',
    ],
    modulosLectura: [
      {
        titulo: '1. El Derecho Central (Art. 14)',
        texto: 'La Ley otorga a cada trabajador el **Derecho a una protección eficaz**. Pero, como los derechos de uno son las obligaciones del otro, esto significa directamente que el empresario tiene el correlativo **deber de garantizar la seguridad**. Este nivel de protección no puede depender de la economía de la empresa; si una actividad no puede realizarse de forma segura, no debe realizarse.'
      },
      {
        titulo: '2. Obligaciones en el terreno (Art. 29)',
        texto: 'La prevención no es pasiva. El artículo 29 exige al empleado una serie de tareas. No basta con ponerse el casco cuando alguien mira; se exige velar racionalmente por la propia seguridad y la de los compañeros. Si un trabajador decide "saltarse" un sistema de seguridad para terminar antes, y ocurre un accidente, puede ser sancionado duramente o perder ciertos derechos indemnizatorios.'
      },
      {
        titulo: '3. El Freno de Emergencia (Art. 21)',
        texto: 'El derecho más extremo y poderoso del técnico o de los representantes sindicales: paralizar la obra. Ante un **Riesgo Grave e Inminente** (ej. una zanja de 4 metros sin entibar con personas dentro), los trabajadores o sus representantes pueden detener legalmente la actividad hasta que el empresario resuelva la situación de peligro. Nadie puede ser sancionado por activar esta medida si lo hizo de buena fe.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 14', 'LPRL Art. 18', 'LPRL Art. 19', 'LPRL Art. 21', 'LPRL Art. 29'],
    quiz: [
      {
        question: '¿Pueden las medidas relativas a la seguridad y la salud en el trabajo suponer un coste económico para el trabajador?',
        options: [
          'Sí, la empresa puede descontarlo de la nómina.',
          'No, en ningún caso.',
          'Solo si el EPI es de uso muy personal.',
          'Depende del convenio colectivo.'
        ],
        correctIndex: 1,
        explanation: 'El artículo 14.5 de la LPRL establece claramente que "el coste de las medidas relativas a la seguridad y la salud en el trabajo no deberá recaer en modo alguno sobre los trabajadores".',
        articleRef: 'Ley 31/1995 · Art. 14'
      },
      {
        question: 'Respecto a la formación en prevención (Art. 19 LPRL), esta debe impartirse...',
        options: [
          'Siempre fuera de la jornada de trabajo para no interrumpir.',
          'Únicamente cuando el trabajador se incorpora a la empresa por primera vez.',
          'Dentro de la jornada de trabajo o, en su defecto, compensarse con tiempo de descanso.',
          'Mediante la entrega de un manual sin necesidad de más explicaciones.'
        ],
        correctIndex: 2,
        explanation: 'El art. 19 de la LPRL indica que la formación debe impartirse, siempre que sea posible, dentro de la jornada de trabajo o, en su defecto, en otras horas pero con el descuento en aquélla del tiempo invertido.',
        articleRef: 'Ley 31/1995 · Art. 19'
      },
      {
        question: '¿Qué ocurre si hay un riesgo grave e inminente y el empresario no adopta medidas?',
        options: [
          'El trabajador debe continuar trabajando bajo su propia responsabilidad.',
          'Los representantes pueden acordar la paralización de la actividad.',
          'Se debe esperar a que actúe la Inspección de Trabajo sin detener la obra.',
          'El riesgo grave no está contemplado en la LPRL.'
        ],
        correctIndex: 1,
        explanation: 'Art. 21.3: Si el empresario no adopta medidas, los representantes de los trabajadores podrán acordar por mayoría la paralización de la actividad afectada por el riesgo grave e inminente.',
        articleRef: 'Ley 31/1995 · Art. 21'
      },
      {
        question: 'El uso adecuado de las máquinas, herramientas y equipos de transporte es...',
        options: [
          'Recomendable pero no obligatorio.',
          'Una obligación expresa de los trabajadores.',
          'Responsabilidad exclusiva del personal de mantenimiento.',
          'Voluntario en caso de urgencia productiva.'
        ],
        correctIndex: 1,
        explanation: 'Art. 29 de la LPRL "Obligaciones de los trabajadores", incluye usar adecuadamente máquinas, aparatos, herramientas y equipos de transporte.',
        articleRef: 'Ley 31/1995 · Art. 29'
      }
    ]
  },
  {
    id: 'ficha-03',
    titulo: 'Participación de los Trabajadores en PRL',
    nivel: 'basico',
    duracion: '5-10 min',
    colectivo: 'Trabajadores y representantes',
    icono: '🤝',
    objetivo: 'Entender los mecanismos de participación y representación en PRL: delegados de prevención y Comité de Seguridad y Salud.',
    contenido: [
      'Derecho de participación y representación (art. 34 LPRL)',
      'Delegados de Prevención: quiénes son, cómo se designan, cuántos corresponden',
      'Competencias de los Delegados de Prevención (art. 36): inspección, propuestas, información',
      'Comité de Seguridad y Salud: composición paritaria, 50+ trabajadores',
      'Consulta obligatoria antes de decisiones (art. 33 LPRL)',
      'Garantías y sigilo profesional de los representantes',
    ],
    modulosLectura: [
      {
        titulo: '1. La Voz del Trabajador (Art. 34)',
        texto: 'La prevención no se impone, se construye. Los trabajadores tienen derecho a participar activamente en cuestiones de seguridad. Este derecho garantiza que las decisiones de prevención no se tomen a sus espaldas, sino consultando a quienes están expuestos al riesgo de primera mano.'
      },
      {
        titulo: '2. Delegados de Prevención',
        texto: 'Son los representantes específicos de los trabajadores en materia preventiva (Art. 35). Tienen amplias competencias: desde acompañar a los inspectores de trabajo hasta emitir informes previos a decisiones importantes. No es un cargo meramente sindical, es un rol analítico con garantías especiales de actuación.'
      },
      {
        titulo: '3. El Comité de Seguridad y Salud',
        texto: 'Obligatorio en empresas de 50 o más trabajadores. Es un órgano paritario y colegiado. A diferencia de otros foros laborales, aquí se sientan frente a frente la dirección y los delegados de prevención para debatir exclusivamente sobre política de seguridad. Sus reuniones son periódicas de carácter trimestral como mínimo.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 33', 'LPRL Art. 34', 'LPRL Art. 35', 'LPRL Art. 36', 'LPRL Art. 38'],
    quiz: [
      {
        question: '¿Quiénes son los Delegados de Prevención?',
        options: [
          'Cualquier trabajador voluntario que haya hecho un curso básico.',
          'Los representantes de los trabajadores con funciones específicas en PRL.',
          'Inspectores de Trabajo infiltrados.',
          'Especialistas del Servicio de Prevención Ajeno.'
        ],
        correctIndex: 1,
        explanation: 'Art. 35 de la LPRL define a los Delegados de Prevención como los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo.',
        articleRef: 'Ley 31/1995 · Art. 35'
      },
      {
        question: 'El Comité de Seguridad y Salud se constituirá obligatoriamente en empresas que cuenten con...',
        options: [
          '5 o más trabajadores.',
          '30 o más trabajadores.',
          '50 o más trabajadores.',
          '250 o más trabajadores.'
        ],
        correctIndex: 2,
        explanation: 'Art. 38 de la LPRL: El Comité de Seguridad y Salud se constituirá en todas las empresas o centros de trabajo que cuenten con 50 o más trabajadores.',
        articleRef: 'Ley 31/1995 · Art. 38'
      },
      {
        question: '¿Tienen derecho los Delegados de Prevención a acompañar a los inspectores de Trabajo en sus visitas?',
        options: [
          'Sí, pueden acompañar a los inspectores en las visitas a los centros de trabajo.',
          'No, las visitas de inspección son confidenciales.',
          'Solo si la empresa les da permiso por escrito antes.',
          'Sí, pero no pueden hacer observaciones.'
        ],
        correctIndex: 0,
        explanation: 'Art. 36.2 de la LPRL determina que están facultados para acompañar a los técnicos y a los Inspectores de Trabajo y Seguridad Social en las visitas, pudiendo formular ante ellos las observaciones que estimen oportunas.',
        articleRef: 'Ley 31/1995 · Art. 36'
      }
    ]
  },
  // NIVEL INTERMEDIO
  {
    id: 'ficha-04',
    titulo: 'Evaluación de Riesgos Laborales',
    nivel: 'intermedio',
    duracion: '5-10 min',
    colectivo: 'Técnicos y mandos intermedios',
    icono: '🔍',
    objetivo: 'Dominar el proceso de evaluación de riesgos laborales, metodologías aplicables y el contenido documental mínimo requerido.',
    contenido: [
      'El proceso de evaluación: definición según RSP art. 3',
      'Evaluación inicial versus revisión periódica: cuándo revisar',
      'Identificación de peligros por puesto de trabajo',
      'Estimación del riesgo: probabilidad × consecuencia',
      'Criterios de valoración: trivial, tolerable, moderado, importante, intolerable',
      'Documentación de la evaluación: contenido mínimo según art. 23 LPRL',
      'Planificación derivada: medidas correctoras con plazo, responsable y recursos',
    ],
    modulosLectura: [
      {
        titulo: '1. El Corazón Preventivo (RSP Art. 3)',
        texto: 'La Evaluación de Riesgos es el núcleo de actuación técnica. No es "rellenar un papel", es un proceso iterativo. Combina la identificación exhaustiva de cada peligro por puesto de trabajo y la priorización posterior. Lo que no se mide objetivamente (o no se evalúa), no se puede prevenir con eficacia.'
      },
      {
        titulo: '2. La Fórmula del Riesgo',
        texto: 'Para estimar el riesgo se cruzan empíricamente dos variables: **Probabilidad** (Alta, Media, Baja) y **Consecuencia** (Ligeramente dañino, Dañino, Extremadamente dañino). Un riesgo Trivial no requiere acción inmediata, pero un riesgo Intolerable exige la paralización absoluta hasta que se recupere la normalidad de su entorno.'
      },
      {
        titulo: '3. Planificación Derivada',
        texto: 'Una evaluación de riesgos sin planificación es puramente académica. Si se detecta un riesgo que no puede evitarse de raíz, la empresa está obligada por ley a planificar de inmediato las acciones correctoras (Planificación de Actividad Preventiva). Su formalidad exige detallar la Acción, el Responsable, Plazos y Recursos económicos asignables.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 16', 'LPRL Art. 23', 'RSP Art. 3', 'RSP Art. 4', 'RSP Art. 6'],
    quiz: [
      {
        question: '¿Cuándo debe revisarse la Evaluación de Riesgos según el Reglamento de los Servicios de Prevención?',
        options: [
          'Exclusivamente cada 5 años.',
          'Solo cuando lo pida la Autoridad Laboral.',
          'Cuando se produzcan daños a la salud, cambios en condiciones y periódicamente.',
          'No es necesario revisarla si no hay accidentes mortales.'
        ],
        correctIndex: 2,
        explanation: 'El Art. 6 del RSP indica que la evaluación debe revisarse cuando se hayan detectado daños a la salud (accidentes/enfermedades), cuando haya cambios en las condiciones de trabajo, equipos o sustancias, y con la periodicidad acordada.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 6'
      },
      {
        question: 'El proceso de estimar la magnitud de los riesgos que no se hayan podido evitar se determina conjunta y combinadamente por:',
        options: [
          'La probabilidad del daño y la severidad de sus consecuencias.',
          'El coste económico y la frecuencia del daño.',
          'El tiempo de exposición y la indemnización posible.',
          'La experiencia del trabajador y el número de horas extra.'
        ],
        correctIndex: 0,
        explanation: 'El Art. 3 RSP estipula que la evaluación se basa en estimar la magnitud de aquellos riesgos que no hayan podido evitarse, obteniendo la información necesaria en forma de Probabilidad y Severidad.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 3'
      },
      {
        question: 'Si el resultado de la evaluación pone de manifiesto situaciones de riesgo, el empresario deberá...',
        options: [
          'Avisar inmediatamente a la Mutua.',
          'Realizar aquellas actividades preventivas necesarias y planificarlas.',
          'Delegar la responsabilidad al trabajador más experimentado.',
          'Guardar el informe durante al menos 10 años y no hacer nada más.'
        ],
        correctIndex: 1,
        explanation: 'RSP Art. 8 y LPRL Art. 16 establecen que, ante situaciones de riesgo identificadas en la evaluación, es mandatorio acometer la consiguiente "Planificación de la Actividad Preventiva" con medidas, plazos y recursos.',
        articleRef: 'Ley 31/1995 · Art. 16'
      }
    ]
  },
  {
    id: 'ficha-05',
    titulo: 'Organización de la Prevención en la Empresa',
    nivel: 'intermedio',
    duracion: '5-10 min',
    colectivo: 'Técnicos y responsables de PRL',
    icono: '🏢',
    objetivo: 'Conocer las modalidades de organización preventiva, sus requisitos legales y cuándo es obligatoria cada una.',
    contenido: [
      'Modalidades de organización preventiva (RSP art. 10): 4 opciones',
      'Asunción personal por el empresario: hasta 10 trabajadores, sin actividades del Anexo I',
      'Trabajadores designados: capacitación mínima requerida, incompatibilidades',
      'Servicio de Prevención Propio (SPP): cuándo es obligatorio, especialidades requeridas',
      'Servicio de Prevención Ajeno (SPA): concierto, seguimiento, acreditación',
      'Servicio de Prevención Mancomunado: sectores y grupos empresariales',
      'Auditorías internas del sistema de prevención: periodicidad y alcance',
    ],
    modulosLectura: [
      {
        titulo: '1. El Esqueleto Estructural (RSP)',
        texto: 'El Reglamento de los Servicios de Prevención obliga a la empresa a "organizarse" bajo una modalidad oficial aprobada legalmente. Las modalidades escalan desde la Asunción Personal (el propio empresario asume gestiones de campo en pymes < 10) hasta el imponente Servicio de Prevención Propio (obligatorio orgánicamente con > 500 trabajadores).'
      },
      {
        titulo: '2. Trabajadores Designados vs SPA',
        texto: 'La empresa puede nombrar internamente *Trabajadores Designados* provistos de capacitación específica (Técnico Básico/Medio/Superior) y con su tiempo productivo liberado en porcentaje. Si no dispone de esa capacidad interna, procede a la externalización del deber de análisis suscribiendo un concierto con un *Servicio de Prevención Ajeno* (SPA). En ambos casos, el máximo responsable legal por daños sigue siendo el empresario final.'
      },
      {
        titulo: '3. Auditoría Interna Reglamentaria',
        texto: 'Cualquier empresa que genere su prevención "internamente de forma autónoma" (como un SPP o Trabajador Designado) y no posea el filtro de revisión externa, se obliga legalmente por el Art. 29 RSP a someter todo su sistema de control a una Auditoría Regulatoria de evaluación periódica expedida por auditores cualificados, como garantía de rigor y eficacia real.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 30', 'LPRL Art. 31', 'RSP Art. 10', 'RSP Art. 11', 'RSP Art. 14', 'RSP Art. 16', 'RSP Art. 24'],
    quiz: [
      {
        question: '¿Cuándo puede el empresario asumir personalmente la prevención de su empresa?',
        options: [
          'En empresas de hasta 10 trabajadores (o 25 con único centro) y que no desarrollen actividades del Anexo I del RSP.',
          'En cualquier pyme de menos de 50 trabajadores.',
          'Solo si la empresa se dedica al sector servicios e informática.',
          'Nunca, es obligatorio contratar siempre un Servicio de Prevención Ajeno.'
        ],
        correctIndex: 0,
        explanation: 'El art. 11 del RSP permite la asunción personal si la empresa tiene hasta 10 trabajadores (hasta 25 si es un único centro), las actividades no son de riesgo especial (Anexo I) y el empresario se encuentra habitualmente en el lugar de trabajo.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 11'
      },
      {
        question: '¿Cuándo es obligatorio constituir un Servicio de Prevención Propio (SPP)?',
        options: [
          'En empresas de más de 50 trabajadores siempre.',
          'En empresas de más de 500 trabajadores, o más de 250 si desarrollan actividades del Anexo I.',
          'Cuando la empresa reciba una subvención estatal de fomento de empleo.',
          'Opcionalmente, nunca es obligatorio.'
        ],
        correctIndex: 1,
        explanation: 'El art. 14 del RSP dicta la obligatoriedad del SPP para >500 trabajadores, o >250 si es Anexo I, o cuando lo decida la Autoridad Laboral en función de la peligrosidad.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 14'
      },
      {
        question: '¿Qué es un Servicio de Prevención Ajeno (SPA)?',
        options: [
          'Una mutua de accidentes de trabajo exclusivamente.',
          'Un técnico freelance autónomo contratado temporalmente por horas.',
          'Una entidad especializada, acreditada por la Autoridad Laboral, con la que el empresario concerta la actividad preventiva.',
          'Un sindicato mayoritario que presta asesoramiento a los delegados.'
        ],
        correctIndex: 2,
        explanation: 'Art. 16 RSP define al SPA como la entidad especializada que concierta con el empresario la realización de actividades de prevención, acreditada con medios humanos y materiales suficientes.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 16'
      }
    ]
  },
  {
    id: 'ficha-06',
    titulo: 'Protección de Colectivos Especialmente Sensibles',
    nivel: 'intermedio',
    duracion: '5-10 min',
    colectivo: 'RRHH, mandos y técnicos PRL',
    icono: '🛡️',
    objetivo: 'Conocer las medidas específicas de protección para trabajadores con especial vulnerabilidad: mujeres embarazadas, menores y discapacitados.',
    contenido: [
      'Trabajadores especialmente sensibles (art. 25 LPRL): evaluación adaptada',
      'Protección de la maternidad (art. 26): evaluación de agentes de riesgo durante embarazo',
      'Suspensión de contrato por riesgo durante embarazo: requisitos y procedimiento',
      'Protección de los menores de 18 años (art. 27): evaluación previa al inicio',
      'Trabajadores temporales y ETT (art. 28): igualdad en protección',
      'Adaptación del puesto versus cambio de puesto: criterios de prioridad',
    ],
    modulosLectura: [
      {
        titulo: '1. Más Allá de la Norma General (Art. 25)',
        texto: 'A veces, los Límites de Exposición ambiental estándar fallan. Asumir esfuerzos laborales no detona la misma fatiga en una persona en salud óptima frente a un empleado con alta vulnerabilidad patológica o menores de edad. El sistema legal determina expresamente que el empleador ajuste los escenarios para garantizar la seguridad clínica de trabajadores que se consideren *Especialmente Sensibles*.'
      },
      {
        titulo: '2. Protección a la Maternidad',
        texto: 'La prevención del daño debe ajustarse biológicamente. Ante periodos de embarazo o lactancia temprana, si las revisiones evaluadoras del contexto señalan peligro ambiental (químicos/cargas) y no existe adaptación posible, el Art. 26 impera movilidad: rotar de actividad hacia zonas neutras y, en casos de impedimento fáctico, se cursará baja cautelar por "Riesgo Integral por Embarazo".'
      },
      {
        titulo: '3. Menores y Eventuales (Art. 28)',
        texto: 'El estado legal determina de forma cristalina proteger a los no veteranos. La rotación temporal o vinculación vía ETT no anula garantías. Se otorga la totalidad de recursos protectores a los fijos que hacia un temporal de corto plazo. Además, integrar a menores de 18 años requerirá previamente una evaluación a medida, sabiendo que múltiples oficios (manipulación peligrosa, minería, exposición alta a ruidos) les quedan vetados por completo, evitando su sobrecarga biológica formativa.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 25', 'LPRL Art. 26', 'LPRL Art. 27', 'LPRL Art. 28'],
    quiz: [
      {
        question: 'Si los resultados de la evaluación revelan un riesgo para el embarazo, y la adaptación de las condiciones o tiempo de trabajo no resulta posible, ¿qué prioridad existe?',
        options: [
          'Extinguir el contrato de trabajo de mutuo acuerdo.',
          'Dar la baja por enfermedad común.',
          'Pasar a la trabajadora a un puesto de trabajo diferente compatible con su estado (cambio de puesto).',
          'Que la trabajadora firme un descargo de responsabilidad y siga en su puesto.'
        ],
        correctIndex: 2,
        explanation: 'El Art. 26.2 LPRL indica que si la adaptación no es posible, la trabajadora deberá desempeñar un puesto de trabajo o función diferente y compatible con su estado, prioritariamente de su mismo grupo.',
        articleRef: 'Ley 31/1995 · Art. 26'
      },
      {
        question: 'En cuanto a la protección de menores, el empresario debe realizar una evaluación específica...',
        options: [
          'A los seis meses de su incorporación.',
          'Únicamente si el menor desarrolla tareas nocturnas.',
          'Antes de su incorporación al trabajo y previamente a cualquier modificación importante.',
          'No es necesario, una evaluación general sirve para todos los trabajadores.'
        ],
        correctIndex: 2,
        explanation: 'Art. 27 LPRL: El empresario realizará una evaluación de los puestos a desempeñar por jóvenes menores de 18 años ANTES de su incorporación, teniendo en cuenta riesgos para su desarrollo y salud.',
        articleRef: 'Ley 31/1995 · Art. 27'
      },
      {
        question: 'Los trabajadores temporales o contratados por ETT respecto a riesgos laborales...',
        options: [
          'Tienen los mínimos derechos pero no reciben vigilancia de la salud.',
          'Disfrutan del mismo nivel de protección que los restantes trabajadores en la empresa.',
          'Están bajo la responsabilidad exclusiva del SEPE.',
          'Solo tienen derecho a Epi si el contrato dura más de 6 meses.'
        ],
        correctIndex: 1,
        explanation: 'Art. 28.1 LPRL consagra la igualdad en la protección: Los trabajadores con relaciones temporales o de ETT disfrutarán del mismo nivel de protección que los restantes trabajadores.',
        articleRef: 'Ley 31/1995 · Art. 28'
      }
    ]
  },
  // NIVEL AVANZADO
  {
    id: 'ficha-07',
    titulo: 'Coordinación de Actividades Empresariales (CAE)',
    nivel: 'avanzado',
    duracion: '5-10 min',
    colectivo: 'Técnicos PRL, coordinadores, contratas',
    icono: '🔗',
    objetivo: 'Aplicar correctamente el RD 171/2004 en situaciones de concurrencia empresarial: deberes, documentación e instrumentos de coordinación.',
    contenido: [
      'Ámbito de aplicación: cuándo hay concurrencia empresarial',
      'Deber de cooperación: información recíproca de riesgos específicos',
      'Empresario titular: deber de información e instrucciones antes del inicio',
      'Empresario principal: vigilancia del cumplimiento de contratas y subcontratas',
      'Documentación CAE: qué debe intercambiarse y cuándo actualizarse',
      'Medios de coordinación: reuniones, intercambio de documentos, instrucciones conjuntas',
      'Coordinador de Actividades Preventivas: designación, funciones y perfil',
      'Plataformas CAE: uso de sistemas informatizados de gestión documental',
    ],
    modulosLectura: [
      {
        titulo: '1. El Laberinto de la Concurrencia',
        texto: 'Cuando múltiples empresas operan bajo el mismo techo, el riesgo no se suma, se multiplica. El RD 171/2004 nace para evitar el "eso no me toca a mí". Todas las empresas concurrentes tienen un *Deber de Cooperación* obligado, debiendo informarse recíprocamente de los riesgos que cada una aporta al centro de trabajo.'
      },
      {
        titulo: '2. Empresario Titular vs Principal',
        texto: 'El *Empresario Titular* (quien gestiona el centro) debe emitir instrucciones antes de empezar. Pero el *Empresario Principal* (quien contrata para su propia actividad) asume más peso: el deber *in vigilando*. Debe comprobar que su contrata tiene la prevención al día; si la contrata falla, la responsabilidad resbala hacia el principal.'
      },
      {
        titulo: '3. Medios de Coordinación y CAE',
        texto: 'La ley exige medios técnicos para este intercambio organizativo. Desde burocracia de reuniones hasta designar un *Coordinador de Actividades Preventivas*. Hoy en día, en centros multiproveedor, esta vigilancia se delega en Plataformas CAE (software de homologación documental en la nube).'
      }
    ],
    normativaRelacionada: ['LPRL Art. 24', 'CAE Art. 3', 'CAE Art. 4', 'CAE Art. 5', 'CAE Art. 7', 'CAE Art. 11', 'CAE Art. 13'],
    quiz: [
      {
        question: '¿Qué es el deber de vigilancia atribuido al empresario principal (RD 171/2004)?',
        options: [
          'Instalar cámaras de seguridad en las zonas comunes.',
          'Vigilar que las empresas contratistas cumplan la normativa de prevención aplicable, exigiendo acreditar documentalmente formación y aptitud.',
          'Acudir físicamente a cada centro contratado para revisar maquinaria diaria.',
          'Revisar las cuentas fiscales de las subcontratas.'
        ],
        correctIndex: 1,
        explanation: 'Art. 10 y 11 del RD 171/2004: La empresa principal, respecto a la propia actividad concurrente, tiene el deber de vigilar el cumplimiento pidiendo antes del inicio acreditación de evaluación, formación y aptitud médica.',
        articleRef: 'RD 171/2004 · Art. 10'
      },
      {
        question: '¿Considera el RD 171/2004 como medio válido de coordinación la designación de un Coordinador de Actividades Preventivas?',
        options: [
          'Sí, y en ocasiones es obligatorio.',
          'No, solo se aplica en construcción bajo otro Real Decreto.',
          'Es optativo pero sin validez jurídica.',
          'Sí, pero su función recae únicamente en la Policía.'
        ],
        correctIndex: 0,
        explanation: 'Art. 11 y Art. 13 especifica la figura del Coordinador de Actividades Preventivas como medio y detalla los casos obligatorios (alto número de empresas, riesgos de especial gravedad, etc.).',
        articleRef: 'RD 171/2004 · Art. 13'
      },
      {
        question: 'Si dos empresas concurren en un mismo centro de trabajo sin relación jurídica entre ellas (por ejemplo dos proveedores en un edificio de oficinas):',
        options: [
          'No están obligadas a coordinarse.',
          'Solo se coordinan si hay más de 50 trabajadores.',
          'Aplica el deber genérico de cooperación: deben informarse recíprocamente de los riesgos.',
          'Deben crear una Unión Temporal de Empresas.'
        ],
        correctIndex: 2,
        explanation: 'El art. 4 describe el Deber de Cooperación: Todas las empresas en un mismo centro de trabajo, tengan vínculo jurídico o no, deben cooperar e informarse mutuamente sobre los riesgos originados.',
        articleRef: 'RD 171/2004 · Art. 4'
      }
    ]
  },
  {
    id: 'ficha-08',
    titulo: 'Seguridad en Obras de Construcción',
    nivel: 'avanzado',
    duracion: '5-10 min',
    colectivo: 'Técnicos PRL construcción, coordinadores CSS',
    icono: '🏗️',
    objetivo: 'Conocer las obligaciones específicas del sector de la construcción: ESS/EBSS, PSS, coordinación de SST y obligaciones de todos los agentes.',
    contenido: [
      'Promotor: cuándo debe elaborar ESS o EBSS (umbrales del art. 5)',
      'Contenido del Estudio de Seguridad y Salud: memorias, planos, pliego, presupuesto',
      'Estudio Básico: obras menores, contenido simplificado',
      'Plan de Seguridad y Salud del contratista (art. 7): aprobación por el CSS',
      'Coordinador de diseño vs Coordinador de ejecución: diferencias y designación',
      'Funciones del Coordinador de SST durante la ejecución (art. 9)',
      'Libro de Incidencias: uso obligatorio, quién puede anotarlo y destinatarios',
      'Obligaciones de contratistas, subcontratistas y autónomos',
      'Aviso previo a la autoridad laboral',
    ],
    modulosLectura: [
      {
        titulo: '1. El Sector de la Dureza (RD 1627)',
        texto: 'La construcción es la industria con mayor siniestralidad mortal. Por eso el RD 1627/1997 impone reglas exclusivas antes y durante el hormigón. La base de todo radica en que el Promotor encargue redactar el *Estudio de Seguridad y Salud (ESS)* en la misma fase de proyecto arquitectónico, presupuestando la seguridad desde el día cero.'
      },
      {
        titulo: '2. El Plan y la Subcontratación',
        texto: 'El contratista adjudicatario toma el ESS y aterriza sus medidas redactando el *Plan de Seguridad y Salud (PSS)*. Ojo a la jerarquía operativa: ningún albañil entra al pozo hasta que el Coordinador de Seguridad visione y apruebe formalmente ese Plan y firme el acta de obra inicial.'
      },
      {
        titulo: '3. El CSS y el Libro Oficial',
        texto: 'Si en la obra hay más de una empresa o autónomos concurrentes, es innegociable designar al *Coordinador de Seguridad y Salud (CSS)*. Ocupará el liderazgo prevencionista y custodiará el *Libro de Incidencias* para anotar los incumplimientos, pudiendo ejecutar la orden de paralización inmediata si detecta inminencia grave.'
      }
    ],
    normativaRelacionada: ['RD 1627 Art. 3', 'RD 1627 Art. 4', 'RD 1627 Art. 5', 'RD 1627 Art. 7', 'RD 1627 Art. 9'],
    quiz: [
      {
        question: '¿Quién debe aprobar el Plan de Seguridad y Salud en una obra de construcción?',
        options: [
          'El jefe de obra del contratista.',
          'El promotor, firmando todas las páginas.',
          'La Autoridad Laboral (Inspección) validando el documento previo a la ejecución.',
          'El Coordinador de Seguridad y Salud durante la ejecución, o la dirección facultativa en su defecto.'
        ],
        correctIndex: 3,
        explanation: 'RD 1627/1997 Art. 7.2 establece que el PSS deberá ser aprobado, antes del inicio de los trabajos, por el coordinador en materia de seguridad y salud, debiendo dejar constancia documental.',
        articleRef: 'RD 1627/1997 · Art. 7'
      },
      {
        question: 'Cuando en una obra intervenga más de una empresa (o una empresa y autónomos), es obligatoria la designación de:',
        options: [
          'Un Vigilante Jurado para el control de accesos obligatoriamente armado.',
          'Un Coordinador en materia de Seguridad y Salud durante la ejecución de la obra.',
          'Un Auditor externo por parte del Ministerio.',
          'No se requiere nada especial, la propia obra funciona de forma colaborativa.'
        ],
        correctIndex: 1,
        explanation: 'Art. 3 RD 1627/1997 dicta que si en la obra intervienen varios contratistas/subcontratistas o trabajadores autónomos, el promotor debe designar obligatoriamente un Coordinador de ejecución.',
        articleRef: 'RD 1627/1997 · Art. 3'
      },
      {
        question: '¿Qué documento sirve en la obra para que la Dirección Facultativa o el CSS anoten los incumplimientos o advertencias al contratista?',
        options: [
          'El Libro de Subcontratación.',
          'El Memorándum interno del Promotor.',
          'El Libro de Incidencias.',
          'El Documento Único de Evaluación (DUE).'
        ],
        correctIndex: 2,
        explanation: 'Art. 13 y 14: El Libro de Incidencias, facilitado por el Colegio Profesional, sirve para reflejar el seguimiento del plan, dejando el CSS constancia de cuantas observaciones y paralizaciones se detecten.',
        articleRef: 'RD 1627/1997 · Art. 13'
      }
    ]
  },
  {
    id: 'ficha-09',
    titulo: 'Régimen Sancionador en PRL',
    nivel: 'avanzado',
    duracion: '5-10 min',
    colectivo: 'Responsables empresa, técnicos PRL, RRHH',
    icono: '⚠️',
    objetivo: 'Conocer el régimen sancionador de la LPRL: tipos de infracciones, cuantías de sanciones y responsabilidades concurrentes.',
    contenido: [
      'Tipos de responsabilidades: administrativa, penal y civil (art. 42 LPRL)',
      'Infracciones leves: ejemplos y cuantías (hasta 2.045 €)',
      'Infracciones graves (art. 47): falta de evaluación, falta de formación, accidentes no comunicados',
      'Infracciones muy graves (art. 48): afección a colectivos especiales, obstrucción',
      'Cuantías de infracciones graves (2.046 € – 40.985 €) y muy graves (40.986 € – 819.780 €)',
      'Reincidencia: agravante que puede multiplicar la sanción',
      'Paralización de trabajos por la Inspección (art. 44)',
      'Recargo de prestaciones: 30%-50% sobre la indemnización de accidente',
    ],
    modulosLectura: [
      {
        titulo: '1. Responsabilidades Múltiples',
        texto: 'En Seguridad Laboral, pagar una multa administrativa no absuelve tus malas praxis. La LPRL establece que las infracciones generan un efecto de onda expansiva: el empresario puede ser condenado por vía *Administrativa* (multa de Inspección), *Civil* (pagos ciegos indemnizatorios a la víctima) y *Penal* (delito criminal contra trabajadores si se demuestra culpa grave).'
      },
      {
        titulo: '2. La LISOS y sus Multas',
        texto: 'La Ley de Infracciones y Sanciones marca tramos aterrorizantes para la pyme. Un defecto *Grave* (omitir formación clave, ignorar una evaluación) sitúa su banda de cobro entre 2.000€ y 40.000€. Una temeridad *Muy Grave* (desproteger a embarazadas o esconder caídas letales) arranca de 40.000€ y llega a perforar el límite superior de los 800.000€.'
      },
      {
        titulo: '3. El Recargo de Prestaciones',
        texto: 'La peor condena financiera imaginable. Si ocurre un accidente fruto de la falta flagrante de medidas, Seguridad Social impondrá el "*Recargo de Prestación*". La empresa sentenciada (sin apoyo de aseguradoras ni mutuas, totalmente de su propio banco) deberá sufragarle de por vida al accidentado un sobresueldo del 30% al 50% de su invalidez.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 42', 'LPRL Art. 43', 'LPRL Art. 44', 'LPRL Art. 45', 'LPRL Art. 47', 'LPRL Art. 48'],
    quiz: [
      {
        question: 'En el ámbito de las infracciones en PRL, ¿una infracción económica puede extinguir la responsabilidad penal o civil por los daños?',
        options: [
          'Sí, pagar la sanción administrativa evita ir a juicio.',
          'No, las responsabilidades administrativas, penales y civiles son compatibles e independientes.',
          'Solo si la multa es por importe superior a 1 millón de euros.',
          'Sí, rige el principio "non bis in idem" y te libra de indemnizaciones civiles.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 42 LPRL dispone expresamente que las responsabilidades administrativas que se deriven del incumplimiento serán compatibles con las indemnizaciones por daños y perjuicios y con recargos punitivos.',
        articleRef: 'Ley 31/1995 · Art. 42'
      },
      {
        question: 'La no realización de las evaluaciones de riesgo requeridas por la LPRL se clasifica como una infracción...',
        options: [
          'Leve.',
          'Grave, salvo que del origen de riesgo se deriven situaciones de extrema gravedad.',
          'Muy grave inexcusablemente.',
          'Sancionable solo con advertencia de la Inspección.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 12 del LISOS (y Art. 47 LPRL en sus tipos generales) clasifica como infracción grave no realizar las evaluaciones de riesgos o no planificar la prevención. Si esto expusiera a daños inminentes, pasaría a muy grave.',
        articleRef: 'LISOS · Tipo de Infracción Grave'
      },
      {
        question: '¿Qué es el "Recargo de Prestaciones Económicas" en caso de accidente laboral por falta de prevención?',
        options: [
          'Un impuesto de la Seguridad Social para mantener el sistema de mutuas.',
          'Una sanción penal directa contra el Técnico de Prevención.',
          'Un aumento entre el 30% y el 50% de la pensión/incapacidad que deberá pagar exclusivamente el empresario infractor.',
          'Una bonificación a las empresas sin accidentes.'
        ],
        correctIndex: 2,
        explanation: 'Regulado en la Ley General de la Seg. Social y ligado a la LPRL. Consiste en sancionar a la empresa obligándole a asumir con su patrimonio el recargo indemnizatorio de la prestación que percibe el trabajador por el accidente.',
        articleRef: 'LGSS / LPRL Art. 42'
      }
    ]
  },
  {
    id: 'ficha-10',
    titulo: 'Auditoría del Sistema de Prevención',
    nivel: 'avanzado',
    duracion: '5-10 min',
    colectivo: 'Técnicos PRL superiores, responsables de SPP',
    icono: '📋',
    objetivo: 'Comprender el papel de la auditoría en el sistema de gestión preventiva, los requisitos legales y el alcance de la evaluación externa.',
    contenido: [
      'Cuándo es obligatoria la auditoría: empresas sin SPA con SPP/trabajadores designados',
      'Primera auditoría: dentro de los 12 meses tras la primera planificación',
      'Periodicidad: cada 4 años (cada 2 en sectores del Anexo I del RSP)',
      'Alcance de la auditoría: evaluación de la eficacia del sistema preventivo',
      'Requisitos de los auditores: acreditación, independencia, imparcialidad',
      'Informe de auditoría: contenido mínimo y conservación',
      'Diferencias entre auditoría interna (mejora continua) y auditoría legal (RSP)',
      'Relación con la norma ISO 45001 y el ciclo PDCA en gestión de SST',
    ],
    modulosLectura: [
      {
        titulo: '1. El Ojo Clínico de la Revisión',
        texto: 'Generar toneladas de folios estáticos y firmados no te librará de la cárcel si se demuestra abandono real. La **Auditoría Reglamentaria** transciende la inspección punitiva, actuando como análisis sistémico profundo para dictaminar y revelar si tus protocolos se ejecutan genuinamente de forma resolutiva entre tus peones.'
      },
      {
        titulo: '2. ¿Quiénes Sufren la Criba?',
        texto: 'El axioma es cristalino: "Nadie puede validarse honestamente a sí mismo". Estarán forzadas a contratar auditores externos cualificados todas las empresas que generen internamente su prevención (a través de SPP estructurados u obreros designados), no subcontratándolo al 100% hacia un organismo técnico externo (SPA).'
      },
      {
        titulo: '3. Las Vigencias y el Reloj Reglado',
        texto: 'La redacción legal establece el plazo bautismal del Examen en el margen rígido de **12 meses** desde consolidar su autogestión primera. Superada la reválida con dictamen positivo, el ritmo de evaluación cíclica se normaliza renovando su evaluación legal estricta cada **4 intensivos años**.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 30', 'RSP Art. 24', 'RSP Art. 34'],
    quiz: [
      {
        question: '¿Qué empresas están sometidas obligatoriamente a la Auditoría reglamentaria de su sistema de prevención?',
        options: [
          'Todas las empresas ubicadas en territorio español.',
          'Ocasionalmente las empresas de la construcción independientemente de su modelo.',
          'Las que no hayan concertado su actividad preventiva con un Servicio de Prevención Ajeno.',
          'Solo las multinacionales con más de 10.000 trabajadores.'
        ],
        correctIndex: 2,
        explanation: 'El Art. 29 RSP establece que las empresas que no hubieran concertado el servicio de prevención con SPA (asumiendo SPP, trabajadores designados o asunción personal en ciertos casos) deberán someterse a auditoría.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 29'
      },
      {
        question: 'Respecto a la periodicidad de las auditorías legales (no ISO 45001), se establece que deben repetirse...',
        options: [
          'Todos los años el 1 de enero.',
          'Cada 4 años o cada 2 años para aquellas empresas cuyas actividades se incluyan en el Anexo I.',
          'Cada 10 años o cuando inspección lo ordene explícitamente.',
          'Cada semestre forzoso para actualizar los listados de Mutuas.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 30.4 del RSP dicta la periocidad: la auditoría se repetirá cada 4 años. Este plazo se reducirá a dos años si la empresa desarrolla actividades del Anexo I (riesgo especial).',
        articleRef: 'Reglamento (RD 39/1997) · Art. 30'
      },
      {
        question: 'Los resultados de la auditoría legal se deben documentar en un informe que servirá para...',
        options: [
          'Mandarlo a un periódico local de forma propagandística.',
          'Mantenerlo a disposición de la Autoridad Laboral y Representantes de los trabajadores.',
          'Ser archivado en secreto para que no modifique la producción industrial.',
          'Elaborar nóminas más justas para los empleados productivos.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 31 afirma que el informe será mantenido por la empresa a disposición de la Autoridad Laboral, Servicios de Prevención y Representantes de los trabajadores.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 31'
      }
    ]
  },
  {
    id: 'ficha-11',
    titulo: 'Ergonomía, Voz y Riesgos Biológicos en Escoles Bressol',
    nivel: 'intermedio',
    duracion: '5-10 min',
    colectivo: 'Educadoras infantiles, personal de limpieza y comedor',
    icono: '👶',
    objetivo: 'Conocer las posturas ergonómicas, el cuidado de la voz frente a riesgos foniátricos y los protocolos de prevención biológica (fluidos y pañales) en educación infantil de 0 a 3 años.',
    contenido: [
      'Posturas ergonómicas en mobiliario infantil bajo (mesas y sillas reducidas).',
      'Técnica segura de carga y levantamiento de infantes, cunas y cambiadores.',
      'Prevención del riesgo foniátrico: técnicas de cuidado y uso correcto de la voz.',
      'Protocolo ante agentes biológicos y fluidos (cambio de pañales, desinfección).',
      'Protección especial a la maternidad y lactancia de las educadoras (Art. 26 LPRL).',
    ],
    modulosLectura: [
      {
        titulo: '1. Carga Física y Mobiliario Infantil',
        texto: 'Trabajar en entornos diseñados para niños de 0 a 3 años impone una severa exigencia ergonómica. Permanecer sentado en sillas muy bajas y realizar flexiones continuas de columna para atender a los infantes multiplica el riesgo de lumbalgias. Es fundamental emplear cambiadores y cunas regulables en altura y realizar estiramientos periódicos durante la jornada.'
      },
      {
        titulo: '2. El Cuidado de la Voz (Riesgo Foniátrico)',
        texto: 'La voz es la herramienta de trabajo principal de las educadoras. La exposición continuada al ruido en el aula a menudo provoca que fuercen la voz, lo cual deriva en afecciones foniátricas como nódulos en las cuerdas vocales (reconocidos como Enfermedad Profesional en educación). Se debe evitar gritar, beber agua regularmente para mantener la hidratación laríngea y realizar respiraciones diafragmáticas.'
      },
      {
        titulo: '3. Control de Agentes Biológicos y Fluidos',
        texto: 'El contacto estrecho con menores y fluidos corporales (orina, heces, saliva) facilita la exposición a agentes biológicos. El cambio de pañales debe acompañarse siempre de guantes desechables y lavado sistemático de manos. La desinfección regular de juguetes compartidos y la ventilación cruzada de las aulas son barreras preventivas esenciales.'
      },
      {
        titulo: '4. Protección a la Maternidad (Art. 26 LPRL)',
        texto: 'Dada la naturaleza biológica y de carga física de las escuelas infantiles, la protección a las educadoras gestantes es crítica. El Art. 26 de la LPRL obliga a evaluar los riesgos del puesto y adaptarlo o, si no es posible, facilitar el cambio a una vacante compatible o tramitar la suspensión del contrato por riesgo durante el embarazo.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 15', 'LPRL Art. 26', 'RD 486/1997'],
    quiz: [
      {
        question: '¿Qué obliga a hacer la empresa según el Art. 26 de la LPRL si se detectan riesgos biológicos o de carga física para una educadora gestante?',
        options: [
          'Dejarla continuar en el puesto bajo su propia responsabilidad.',
          'Adaptar las condiciones de trabajo o tiempo de exposición, o proceder a su reubicación temporal si es necesario.',
          'Darle de baja forzosa sin sueldo.',
          'Exigir que ella aporte sus propios equipos de protección individual.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 26 de la LPRL impone el deber de adaptar las condiciones o tiempo de trabajo, y si esto no fuera factible, reubicar a la trabajadora a un puesto compatible con su estado.',
        articleRef: 'Ley 31/1995 · Art. 26'
      },
      {
        question: '¿Qué patología derivada de un sobreesfuerzo de la voz está catalogada oficialmente como Enfermedad Profesional en el sector educativo?',
        options: [
          'La afonía temporal por enfriamiento.',
          'Los nódulos en las cuerdas vocales debidos a los esfuerzos sostenidos de la voz por motivos laborales.',
          'La faringitis vírica común transmitida por los alumnos.',
          'La fatiga auditiva por ruido en el recreo.'
        ],
        correctIndex: 1,
        explanation: 'Los nódulos en las cuerdas vocales a causa de esfuerzos de la voz por motivos profesionales están reconocidos como Enfermedad Profesional en la legislación española de Seguridad Social.',
        articleRef: 'RD 1299/2006 · Enfermedades Profesionales'
      },
      {
        question: '¿Cuál es la medida preventiva de higiene más eficaz en guarderías para atajar contagios por agentes biológicos y fluidos?',
        options: [
          'Usar mascarilla industrial FFP3 durante toda la jornada.',
          'Hacer lavados de manos sistemáticos (especialmente tras cambiar pañales y tocar fluidos) y ventilación regular.',
          'Evitar todo contacto físico con los alumnos.',
          'Utilizar lejía pura sin diluir en todo el material de juego.'
        ],
        correctIndex: 1,
        explanation: 'El lavado sistemático de manos tras el contacto con fluidos y la correcta ventilación son las medidas higiénicas primarias más eficaces y viables en entornos educativos infantiles para atajar la transmisión vírica.',
        articleRef: 'LPRL · Art. 15 · Principios Preventivos'
      }
    ]
  },
  {
    id: 'ficha-12',
    titulo: 'Movilización Segura de Personas Dependientes',
    nivel: 'intermedio',
    duracion: '5-10 min',
    colectivo: 'Auxiliares de geriatría, coordinadores y dinamizadores de Casals',
    icono: '👵',
    objetivo: 'Adquirir las técnicas básicas de movilización de usuarios con movilidad reducida en Casals y Centros de Día para prevenir lesiones lumbares.',
    contenido: [
      'Principios de la ergonomía en la movilización de personas.',
      'Técnicas de transferencia segura (cama-silla, bipedestación).',
      'Uso correcto de soportes y ayudas mecánicas (asideros, grúas).',
      'Actuación segura ante caídas de usuarios reduciendo el sobreesfuerzo.',
      'Estiramientos y calentamientos preventivos para la musculatura del cuidador.',
    ],
    modulosLectura: [
      {
        titulo: '1. La Columna del Cuidador',
        texto: 'La movilización de personas dependientes es uno de los mayores factores de riesgo lumbar. Tratar de levantar a un usuario a pulso sin técnica adecuada sobrecarga la columna. Es imperativo empujar con las piernas, mantener el abdomen contraído y utilizar el peso del propio cuerpo como contrapeso para transferir cargas.'
      },
      {
        titulo: '2. Técnicas de Transferencia',
        texto: 'Al realizar la transferencia de un usuario (de silla a bipedestación o a camilla), se debe explicar la acción previamente al usuario para lograr su colaboración (si es posible), bloquear los frenos de la silla de ruedas, colocar el calzado antideslizante al usuario y sujetarlo firmemente por los hombros o cinturón, nunca de los brazos.'
      },
      {
        titulo: '3. Elementos de Apoyo y Pavimento',
        texto: 'El entorno físico es una herramienta preventiva de primer orden. Zonas de aseos con barras de apoyo sólidas y pavimentos antideslizantes reducen las caídas de los usuarios y evitan que el personal deba realizar esfuerzos súbitos para sostenerlos durante un resbalón.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 15', 'RD 486/1997', 'LPRL Art. 29'],
    quiz: [
      {
        question: 'Al realizar una movilización o transferencia de un usuario con movilidad reducida, ¿dónde debe situarse principalmente el esfuerzo del cuidador?',
        options: [
          'En los brazos y la columna lumbar.',
          'En las piernas, manteniendo la espalda recta y el abdomen contraído.',
          'En los hombros, arqueando el tronco hacia atrás.',
          'En el cuello, inclinando la cabeza lateralmente.'
        ],
        correctIndex: 1,
        explanation: 'Para prevenir lesiones lumbares, la técnica de movilización obliga a flexionar y empujar con las piernas (musculatura de cuadríceps y glúteos), estabilizando la columna en su posición neutra.',
        articleRef: 'LPRL · Art. 15 · Principios Preventivos'
      },
      {
        question: '¿Qué paso previo es indispensable antes de sentar o levantar a un usuario de una silla de ruedas?',
        options: [
          'Retirar los reposabrazos con fuerza.',
          'Girar la silla rápidamente para orientarla.',
          'Asegurarse de que las ruedas de la silla están firmemente bloqueadas.',
          'Indicarle al usuario que salte levemente.'
        ],
        correctIndex: 2,
        explanation: 'Por seguridad del usuario y del cuidador, antes de cualquier movilización la silla debe estar frenada para evitar desplazamientos accidentales que provoquen caídas o esfuerzos bruscos.',
        articleRef: 'LPRL · Art. 29 · Obligaciones Trabajadores'
      },
      {
        question: 'En caso de caída inminente de un usuario, ¿cuál debe ser la prioridad del cuidador?',
        options: [
          'Sostenerlo a pulso a toda costa para evitar el impacto.',
          'Guiar y amortiguar la caída del usuario protegiendo su cabeza, adoptando una postura ergonómica para no lesionarse la espalda.',
          'Soltarlo bruscamente y alejarse del lugar.',
          'Tratar de colocar una silla debajo del usuario mientras cae.'
        ],
        correctIndex: 1,
        explanation: 'Intentar frenar una caída libre a pulso suele lesionar gravemente la espalda del cuidador. La práctica segura es guiar suavemente el cuerpo del usuario al suelo, protegiendo su cabeza y flectando las rodillas.',
        articleRef: 'Guía Técnica · Ergonomía en Servicios'
      }
    ]
  },
  {
    id: 'ficha-13',
    titulo: 'Prevención del Burnout y Fatiga por Compasión',
    nivel: 'avanzado',
    duracion: '5-10 min',
    colectivo: 'Personal de atención directa, coordinadores y mandos de Incoop',
    icono: '🧠',
    objetivo: 'Identificar y prevenir los factores de riesgo psicosocial asociados al cuidado de personas vulnerables y la gestión de la dependencia.',
    contenido: [
      'Definición y síntomas del Síndrome de Burnout y la fatiga por compasión.',
      'Identificación de estresores psicosociales en el tercer sector (duelo, dependencia).',
      'Estrategias de regulación emocional y establecimiento de límites profesionales.',
      'Medidas organizativas preventivas (soporte entre pares, supervisión).',
      'Obligaciones empresariales sobre evaluación de riesgos psicosociales (RSP).',
    ],
    modulosLectura: [
      {
        titulo: '1. Desgaste en el Cuidado',
        texto: 'La exposición continuada al sufrimiento ajeno, la dependencia severa y las altas demandas de colectivos vulnerables pueden generar Síndrome de Burnout (desgaste profesional) y Fatiga por Compasión. Se manifiesta en síntomas físicos (agotamiento), conductuales (apatía) y cognitivos (despersonalización).'
      },
      {
        titulo: '2. Medidas de Protección Psicosocial',
        texto: 'La prevención del desgaste no depende únicamente del autocuidado individual. La cooperativa debe implementar medidas organizativas como: reuniones periódicas de equipo para supervisión de casos, rotación de tareas de alta carga emocional, y protocolos claros para canalizar e informar sobre agresiones o tensiones externas.'
      },
      {
        titulo: '3. El Deber de Evaluar (RSP Art. 3)',
        texto: 'El Reglamento de los Servicios de Prevención (RSP) establece la obligación de evaluar todas las condiciones de trabajo, incluyendo expresamente los factores de naturaleza psicosocial. Una evaluación psicosocial periódica y participativa es la única vía legal y técnica para estructurar un plan de mejora del clima laboral.'
      }
    ],
    normativaRelacionada: ['LPRL Art. 14', 'RSP Art. 3', 'LPRL Art. 15'],
    quiz: [
      {
        question: '¿Qué es el Síndrome de Burnout o desgaste profesional?',
        options: [
          'Una lesión física producida por exposición a fuego directo en el trabajo.',
          'Una respuesta de estrés crónico en el ámbito laboral caracterizada por agotamiento emocional, despersonalización y baja realización personal.',
          'Un tipo de absentismo justificado por motivos festivos.',
          'Una sanción que impone la Inspección de Trabajo al empleado.'
        ],
        correctIndex: 1,
        explanation: 'El burnout es un trastorno psicosocial derivado de una situación de estrés crónico de carácter laboral, especialmente frecuente en profesiones de ayuda y cuidado directo.',
        articleRef: 'RSP · Art. 3 · Evaluación Psicosocial'
      },
      {
        question: '¿Es obligatorio para las empresas y cooperativas evaluar los riesgos psicosociales (como la carga mental o el estrés)?',
        options: [
          'No, solo se evalúan los riesgos físicos, químicos o mecánicos.',
          'Sí, es una obligación legal del empresario contemplada dentro de la evaluación de riesgos generales del RSP.',
          'Solo si la empresa tiene más de 1.000 trabajadores.',
          'Es de carácter voluntario según decida la dirección de RRHH.'
        ],
        correctIndex: 1,
        explanation: 'El Art. 3 del RSP determina que la evaluación debe extenderse a todos los factores de riesgo de las condiciones de trabajo, incluyendo los de naturaleza psicosocial.',
        articleRef: 'Reglamento (RD 39/1997) · Art. 3'
      },
      {
        question: '¿Cuál de las siguientes es una medida organizativa eficaz para prevenir la fatiga por compasión y el desgaste laboral?',
        options: [
          'Aumentar la jornada laboral para terminar antes las tareas.',
          'Implementar espacios regulares de supervisión técnica del equipo y soporte mutuo para desahogo emocional.',
          'Evitar hablar de los problemas y concentrarse únicamente en el rendimiento técnico.',
          'Sancionar al trabajador que muestre síntomas de cansancio emocional.'
        ],
        correctIndex: 1,
        explanation: 'Las reuniones de supervisión de casos de atención directa y los grupos de apoyo mutuo en el equipo facilitan la asimilación emocional y reducen drásticamente el desgaste por compasión.',
        articleRef: 'LPRL · Art. 15 · Principios Preventivos'
      }
    ]
  }
];

