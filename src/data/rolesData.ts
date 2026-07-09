import { RoleObligation } from './types';

export const rolesData: RoleObligation[] = [
  {
    id: 'trabajador-almacen',
    shortLabel: 'Trabajador de Almacén',
    label: 'Trabajador de Almacén',
    icon: '📦',
    accentColor: '#f59e0b',
    surfaceColor: 'rgba(245, 158, 11, 0.18)',
    description: 'Personal operativo encargado de la logística, manipulación de cargas y operaciones en el almacén.',
    obligations: [
      {
        title: 'Uso de EPIs',
        description: 'Usar correctamente los Equipos de Protección Individual entregados por la empresa.',
        leyId: 'lprl',
        articuloId: 'lprl-art17'
      },
      {
        title: 'Seguir Instrucciones',
        description: 'Seguir las instrucciones de seguridad y procedimientos internos establecidos.',
        leyId: 'lprl',
        articuloId: 'lprl-art29'
      },
      {
        title: 'Informar de Riesgos',
        description: 'Informar inmediatamente de riesgos o condiciones inseguras detectadas.',
        leyId: 'lprl',
        articuloId: 'lprl-art29'
      },
      {
        title: 'Condiciones de Lugar de Trabajo',
        description: 'Mantener orden, limpieza y respetar la señalización del entorno industrial.',
        leyId: 'rd486',
        articuloId: 'rd486-art3'
      }
    ],
    fichas: ['ficha-01', 'ficha-02'],
    risks: [
      'Sobreesfuerzos y posturas forzadas.',
      'Golpes y atrapamientos por caída de objetos.',
      'Caídas al mismo nivel por falta de orden.',
      'Colisiones con carretillas elevadoras.'
    ]
  },
  {
    id: 'tecnico-prl',
    shortLabel: 'Técnico PRL',
    label: 'Técnico de Prevención (SPP o SPA)',
    icon: '🛡️',
    accentColor: '#14b8a6',
    surfaceColor: 'rgba(20, 184, 166, 0.18)',
    description: 'Especialista en seguridad laboral encargado de la gestión preventiva técnica en la organización.',
    obligations: [
      {
        title: 'Evaluar Riesgos',
        description: 'Evaluar riesgos laborales y planificar razonadamente la actividad preventiva.',
        leyId: 'lprl',
        articuloId: 'lprl-art16'
      },
      {
        title: 'Proponer Medidas',
        description: 'Diseñar, proponer y vigilar el cumplimiento de medidas correctoras en planta.',
        leyId: 'lprl',
        articuloId: 'lprl-art30'
      },
      {
        title: 'Coordinación CAE',
        description: 'Coordinar las actividades preventivas de empresas concurrentes.',
        leyId: 'cae',
        articuloId: 'cae-art4'
      },
      {
        title: 'Reglamento de Prevención',
        description: 'Cumplir lo establecido en el Reglamento de los Servicios de Prevención.',
        leyId: 'rsp',
        articuloId: 'rsp-art31'
      }
    ],
    fichas: ['ficha-04', 'ficha-05', 'ficha-07', 'ficha-10'],
    risks: [
      'Riesgo documental e incumplimientos en CAE.',
      'Falta de control real sobre medidas preventivas propuestas.',
      'Descoordinación entre contratas y subcontratas.'
    ]
  },
  {
    id: 'encargado-obra',
    shortLabel: 'Encargado de Obra',
    label: 'Encargado / Jefe de Equipo',
    icon: '🏗️',
    accentColor: '#ef4444',
    surfaceColor: 'rgba(239, 68, 68, 0.18)',
    description: 'Mando intermedio con responsabilidad directa sobre la ejecución de los trabajos y los equipos operativos.',
    obligations: [
      {
        title: 'Cumplimiento de Medidas',
        description: 'Garantizar que los trabajadores a su cargo cumplen las medidas de seguridad establecidas.',
        leyId: 'lprl',
        articuloId: 'lprl-art14'
      },
      {
        title: 'Informar de Riesgos',
        description: 'Asegurar la información y formación práctica sobre los riesgos inminentes del tajo.',
        leyId: 'lprl',
        articuloId: 'lprl-art18'
      },
      {
        title: 'Coordinación Simultánea',
        description: 'Coordinar actividades de riesgos especiales que ocurren de manera simultánea.',
        leyId: 'construccion',
        articuloId: 'rd1627-art11'
      },
      {
        title: 'Equipos Seguros',
        description: 'Verificar diariamente que los equipos, protecciones colectivas y herramientas son seguras.',
        leyId: 'construccion',
        articuloId: 'rd1627-art10'
      }
    ],
    fichas: ['ficha-08', 'ficha-01'],
    risks: [
      'Caídas desde altura.',
      'Golpes por objetos en movimiento o desprendimientos.',
      'Riesgos eléctricos en instalaciones provisionales.',
      'Riesgos por uso de maquinaria pesada.'
    ]
  },
  {
    id: 'empresa-contratista',
    shortLabel: 'Empresa Contratista',
    label: 'Empresa Contratista / Subcontrata',
    icon: '🤝',
    accentColor: '#3b82f6',
    surfaceColor: 'rgba(59, 130, 246, 0.18)',
    description: 'Empresa externa que accede al centro de trabajo para realizar obras, mantenimientos o servicios.',
    obligations: [
      {
        title: 'Documentación CAE',
        description: 'Aportar toda la documentación requerida por la Coordinación de Actividades Empresariales.',
        leyId: 'lprl',
        articuloId: 'lprl-art24'
      },
      {
        title: 'Garantizar Formación',
        description: 'Garantizar documentalmente la formación y aptitud médica de todos sus trabajadores.',
        leyId: 'cae',
        articuloId: 'cae-art4'
      },
      {
        title: 'Cumplir PSS',
        description: 'Cumplir y hacer cumplir el Plan de Seguridad y Salud aprobado para la obra o servicio.',
        leyId: 'construccion',
        articuloId: 'rd1627-art7'
      },
      {
        title: 'Coordinación con Titular',
        description: 'Acudir a las reuniones de coordinación e informar de los riesgos inherentes a sus trabajos.',
        leyId: 'cae',
        articuloId: 'cae-art11'
      }
    ],
    fichas: ['ficha-07', 'ficha-08', 'ficha-04'],
    risks: [
      'Falta de acreditación o documentación caducada.',
      'Descoordinación temporal con otras empresas concurrentes.',
      'Riesgos agravados por interferencias mutuas y trabajos solapados.'
    ]
  },
  {
    id: 'trabajador-oficina',
    shortLabel: 'Trabajador Oficina',
    label: 'Trabajador de Oficina',
    icon: '💻',
    accentColor: '#8b5cf6',
    surfaceColor: 'rgba(139, 92, 246, 0.18)',
    description: 'Personal de tareas administrativas, gestión y uso continuado de Pantallas de Visualización de Datos (PVD).',
    obligations: [
      {
        title: 'Uso de Equipos',
        description: 'Usar correctamente los equipos informáticos y mobiliario ergonómico facilitado.',
        leyId: 'lprl',
        articuloId: 'lprl-art29'
      },
      {
        title: 'Informar Molestias',
        description: 'Informar tempranamente de molestias musculares, fatiga visual o incomodidad postural.',
        leyId: 'lprl',
        articuloId: 'lprl-art29'
      },
      {
        title: 'Emergencias',
        description: 'Conocer y seguir disciplinadamente los procedimientos de evacuación y emergencia del edificio.',
        leyId: 'lprl',
        articuloId: 'lprl-art20'
      },
      {
        title: 'Condiciones de Oficina',
        description: 'Mantener las zonas de paso despejadas y las condiciones de temperatura/iluminación estables.',
        leyId: 'rd486',
        articuloId: 'rd486-art3'
      }
    ],
    fichas: ['ficha-01', 'ficha-02'],
    risks: [
      'Trastornos musculoesqueléticos (espalda, cervicales, muñecas).',
      'Fatiga visual y mental.',
      'Caídas al mismo nivel por cables o suelos resbaladizos.'
    ]
  },
  {
    id: 'responsable-rrhh',
    shortLabel: 'Responsable RRHH',
    label: 'Responsable de RRHH / Empresa',
    icon: '👥',
    accentColor: '#ec4899',
    surfaceColor: 'rgba(236, 72, 153, 0.18)',
    description: 'Perfil directivo encargado de facilitar los recursos, formación y vigilancia de la salud de la plantilla.',
    obligations: [
      {
        title: 'Protección Eficaz',
        description: 'Deber ineludible de garantizar una protección eficaz en materia de seguridad y salud.',
        leyId: 'lprl',
        articuloId: 'lprl-art14'
      },
      {
        title: 'Formación Preventiva',
        description: 'Garantizar formación inicial y periódica, teórica y práctica, dentro de la jornada laboral.',
        leyId: 'lprl',
        articuloId: 'lprl-art19'
      },
      {
        title: 'Vigilancia de la Salud',
        description: 'Gestionar, proponer y controlar la vigilancia periódica de la salud según los protocolos aplicables.',
        leyId: 'lprl',
        articuloId: 'lprl-art22'
      },
      {
        title: 'Organización Preventiva',
        description: 'Dotar a la empresa de una modalidad organizativa preventiva válida y suficiente.',
        leyId: 'rsp',
        articuloId: 'rsp-art10'
      }
    ],
    fichas: ['ficha-05', 'ficha-06', 'ficha-09'],
    risks: [
      'Incumplimientos documentales y caducidad de certificaciones.',
      'Contratación de personal sin la formación específica previa.',
      'Responsabilidad legal por falta de coordinación con el SPA o contratas.'
    ]
  },
  {
    id: 'directora-centre',
    shortLabel: 'Directora de Centre',
    label: 'Directora de Centre / Mando Intermedio (Cooperativa)',
    icon: '👩‍💼',
    accentColor: '#10b981',
    surfaceColor: 'rgba(16, 185, 129, 0.18)',
    description: 'Mando intermedio responsable del centro (Bressol, Casal o equipamiento). Asume la jefatura de emergencias (Cap d\'emergència) y la CAE local.',
    obligations: [
      {
        title: 'Cap d\'emergència y Autoprotección',
        description: 'Actuar como responsable y Jefe de Emergencias del centro, custodiando e implementando el Plan de Emergencias y simulacros.',
        leyId: 'lprl',
        articuloId: 'lprl-art20'
      },
      {
        title: 'Coordinación CAE Local',
        description: 'Coordinar las actividades de personal externo (mantenimiento, obras) en locales municipales para evitar riesgos y aislar a los menores.',
        leyId: 'cae',
        articuloId: 'cae-art4'
      },
      {
        title: 'Formación de Personal (Art. 19)',
        description: 'Garantizar que todo el personal de nueva incorporación (incluidos eventuales por estacionalidad) realice la inducción de seguridad.',
        leyId: 'lprl',
        articuloId: 'lprl-art19'
      }
    ],
    fichas: ['ficha-05', 'ficha-07', 'ficha-11'],
    risks: [
      'Descoordinación en simulacros o incidentes en instalaciones ajenas de los Ayuntamientos.',
      'Falta de control en la CAE local con contratas concurrentes.',
      'Incorporación de personal temporal sin la debida inducción formativa inicial.'
    ]
  },
  {
    id: 'personal-aula-cuidado',
    shortLabel: 'Personal Aula/Cura',
    label: 'Personal de Aula y Cuidado Directo (Cooperativa)',
    icon: '🧸',
    accentColor: '#f59e0b',
    surfaceColor: 'rgba(245, 158, 11, 0.18)',
    description: 'Educadoras, cuidadoras y dinamizadores. Expuestos a riesgos ergonómicos (mobiliario bajo, niños), biológicos (fluidos), foniátricos (voz) y estacionalidad.',
    obligations: [
      {
        title: 'Higiene Postural y Voz',
        description: 'Mantener posturas ergonómicas al atender a niños y aplicar el cuidado de la voz para prevenir nódulos vocales (enfermedad profesional).',
        leyId: 'lprl',
        articuloId: 'lprl-art15'
      },
      {
        title: 'Calzado Antideslizante',
        description: 'Uso obligatorio del calzado técnico y antideslizante entregado por la cooperativa para evitar resbalones y caídas.',
        leyId: 'rd773',
        articuloId: 'rd773-art5'
      },
      {
        title: 'Notificación de Incidencias',
        description: 'Informar de inmediato a la dirección del centro de cualquier riesgo en las instalaciones, pavimentos húmedos o riesgo biológico en aula.',
        leyId: 'lprl',
        articuloId: 'lprl-art29'
      }
    ],
    fichas: ['ficha-01', 'ficha-11', 'ficha-12'],
    risks: [
      'Lesiones musculoesqueléticas por sobreesfuerzos lumbares en transferencias y cuidado.',
      'Disfonías crónicas y nódulos en cuerdas vocales por sobreesfuerzo de la voz en aula.',
      'Contagios biológicos por contacto directo con fluidos infantiles en guarderías.',
      'Caídas al mismo nivel por falta de orden (juguetes) o pavimentos húmedos.'
    ]
  },
  {
    id: 'area-persones',
    shortLabel: 'Àrea de Persones',
    label: 'Responsable del Àrea de Persones / RH (Cooperativa)',
    icon: '👥',
    accentColor: '#ec4899',
    surfaceColor: 'rgba(236, 72, 153, 0.18)',
    description: 'Àrea responsable de la salud laboral de la plantilla, el registro formativo, el cumplimiento psicosocial en mediadores y el régimen de socios.',
    obligations: [
      {
        title: 'Vigilancia de la Salud Específica',
        description: 'Controlar exámenes médicos anuales. En Lleure se gestiona el examen voluntario por riesgos y se garantizan revisiones urológicas y mamografías preventivas anticipadas.',
        leyId: 'lprl',
        articuloId: 'lprl-art22'
      },
      {
        title: 'Régimen Disciplinario Cooperativo',
        description: 'Gestionar el régimen sancionador y disciplinario específico para los socios trabajadores conforme a los Estatutos y Reglamento de Régimen Interno.',
        leyId: 'lprl',
        articuloId: 'lprl-art42'
      },
      {
        title: 'Prevención Psicosocial de Equipos',
        description: 'Evaluar riesgos psicosociales (RSP Art. 3) y proveer soporte emocional frente al desgaste y burnout en mediación comunitaria.',
        leyId: 'rsp',
        articuloId: 'rsp-art3'
      }
    ],
    fichas: ['ficha-05', 'ficha-06', 'ficha-09', 'ficha-13'],
    risks: [
      'Falta de archivo o justificación de entrega de EPIs y calzado.',
      'Caducidad de revisiones médicas en personal con exposición biológica en bressol.',
      'Casos de Burnout no gestionados en servicios de intervención social y mediación.'
    ]
  },
  {
    id: 'control-gestio-pmo',
    shortLabel: 'Control de Gestió / PMO',
    label: 'Control de Gestió, Finanzas y Licitaciones (Cooperativa)',
    icon: '📊',
    accentColor: '#3b82f6',
    surfaceColor: 'rgba(59, 130, 246, 0.18)',
    description: 'Supervisión de costes preventivos, justificación de PRL en pliegos públicos según la LCSP y control de pólizas preventivas.',
    obligations: [
      {
        title: 'Integración en Licitaciones (LCSP)',
        description: 'Asegurar el desglose obligatorio de costes de PRL y de convenio (Lleure, Acción Social) en los presupuestos de ofertas públicas.',
        leyId: 'lprl',
        articuloId: 'lprl-art14'
      },
      {
        title: 'Seguros y Responsabilidad Civil',
        description: 'Gestionar las pólizas de RC y coberturas correspondientes a socios trabajadores y personal contratado ante incidentes.',
        leyId: 'lprl',
        articuloId: 'lprl-art42'
      },
      {
        title: 'Coordinación con SPA y Auditoría',
        description: 'Supervisar el coste y rendimiento del SPA contratado y verificar la idoneidad del sistema preventivo para justificar pliegos.',
        leyId: 'rsp',
        articuloId: 'rsp-art10'
      }
    ],
    fichas: ['ficha-05', 'ficha-07', 'ficha-10'],
    risks: [
      'Infradotación presupuestaria en ofertas de licitación pública que impida cumplir los estándares mínimos de PRL.',
      'Ausencia de cobertura económica o desajustes en seguros de RC ante incidentes graves en centros municipales.'
    ]
  }
];
