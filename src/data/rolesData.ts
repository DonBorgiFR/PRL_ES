import { RoleObligation } from './types';

export const rolesData: RoleObligation[] = [
  {
    id: 'trabajador-almacen',
    shortLabel: 'Trabajador de Almacén',
    label: 'Trabajador de Almacén',
    icon: '📦',
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
  }
];
