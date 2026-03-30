import type { Ley } from './types';

export const construccion: Ley = {
  id: 'construccion-obras',
  codigo: 'RD 1627/1997',
  titulo: 'Obras de Construcción',
  subtitulo: 'RD 1627/1997 sobre disposiciones mínimas en las Obras y proyectos formativos de Construcción y el Sector de Ingeniería.',
  fecha: '24 de octubre de 1997',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-22614',
  color: '#ea580c',
  icono: '🏗️',
  capitulos: [
    {
      id: 'const-cap1',
      numero: 'Articulado I-II',
      titulo: 'Sujetos, Estudio y Coordinación',
      articulos: [
        {
          id: 'const-art1-2',
          numero: '1 y 2',
          titulo: 'Sujetos intervinientes y Agentes de la obra',
          texto: 'Define sujetos de la PRL civil: PROMOTOR (dueño inicial que decide), Proyectista, Dirección Facultativa, COORDINADOR SS (Fase de Proyecto y Ejecución), CONTRATISTA PRINCIPAL o SUBCONTRATISTA y el Trabajador Autónomo.',
          badge: 'tecnico',
          tags: ['agentes', 'promotor', 'CSS', 'contratista', 'trabajador autónomo'],
        },
        {
          id: 'const-art3',
          numero: '3',
          titulo: 'Designación de CSS (Coordinador Seguridad y Salud)',
          texto: 'En obras con más de una empresa (o una con autónomos, o varios autónomos) en un centro o parcelación, el Promotor TIENE la obligación inexcusable de designar -antes de arrancar- un CSS durante el proyecto y un CSS durante la ejecución de obra (pueden ser la misma entidad).',
          badge: 'tecnico',
          tags: ['nombramiento CSS', 'coordinador ejecución', 'coordinador de proyecto', 'promotor'],
        },
        {
          id: 'const-art4-6',
          numero: '4, 5 y 6',
          titulo: 'ESS y EBSS (Estudio Seguridad / Básico)',
          texto: 'Proyectista hace el Estudio de Seguridad (ESS) si la obra tiene Presupuesto >450k €, o duración > 30d laborables empleando a más de >20 trab en simultáneo, volúmen de mano de obra>500 o túneles mecánicos pesados. Si no cruza esos umbrales requiere Estudio "Básico" de Seguridad y Salud (EBSS).',
          badge: 'tecnico',
          tags: ['estudio de seguridad y salud', 'EBSS', 'presupuesto preventivo', 'proyectista'],
        },
        {
          id: 'const-art7',
          numero: '7',
          titulo: 'Plan de Seguridad y Salud del Contratista principal (PSS)',
          texto: 'Al comenzar, en base al EBSS o ESS o Pliego, CADA contratista generará el Plan de SSD en su actividad dentro de la obra. Será APROBADO preceptivamente de forma Documentada por el CSS en fase de ejecución, validado también en su caso por la autoridad y los delegados prev. de empresa constructora contratista.',
          badge: 'tecnico',
          tags: ['plan de seguridad', 'plan sst', 'aprobación PSS', 'contratista'],
        },
      ],
    },
    {
      id: 'const-cap3',
      numero: 'Articulado II',
      titulo: 'Herramientas Documentales Obligadas',
      articulos: [
        {
          id: 'const-art13',
          numero: '13 y 14',
          titulo: 'El Libro de Incidencias e información',
          texto: 'En la obra (y control del CSS o Dirección) ha de haber un LIBRO de INCIDENCIAS rubricado. En el cual, el CSS o la Inspección anotarán actas de cese cuando detecten incumplimiento severo -o paros-. Aporta información de visados colegiales. Con un aviso preceptivo de la Adm, de Trbjo. (Apertura Centro de Trabajo) en zona visible al exterior.',
          badge: 'tecnico',
          tags: ['libro de incidencias', 'apertura de centro', 'paralización', 'visto bueno COAAT/Colegio'],
        },
      ],
    },
    {
      id: 'const-anxo1-3',
      numero: 'Anexos I-III',
      titulo: 'Listados de Obras y Trabajos Especiales (Agravados)',
      articulos: [
        {
          id: 'const-anx2',
          numero: 'Anexo II',
          titulo: 'Riesgos de Especial Gravedad para el RD',
          texto: 'Aquellos con riesgos muy específicos: \n- Sepultamiento en zanjas profundas (>1,20m a >2m).\n- Riesgo químico-biológico severo y exposición a amianto / silicatos, ATEX.\n- Caídas de altura sin viabilidad de protecciones previas.\n- Exposición de MT/AT eléctricas.\n- Explosivos y minería.\n- Montaje/Desmontaje pesado, túnel, tablestacado',
          badge: 'tecnico',
          tags: ['riesgo extremo', 'alta peligrosidad', 'zanjas', 'amianto', 'montajes pesados', 'túnel', 'sepultamiento'],
        },
      ],
    },
    {
      id: 'const-anxo4',
      numero: 'Anexo IV',
      titulo: 'Obligaciones y Exigencias Mínimas (Obras)',
      articulos: [
        {
          id: 'const-anx4-paB',
          numero: 'Parte B',
          titulo: 'Movimiento de Tierras, Vehículos',
          texto: 'Cualquier maquinaria perimetral de la obra al vacío o en zanja profunda requiere tope, estivado y señalización. Conductores debidamente cualificados con palas-excavadoras y tractores-bulldozer (certificados CE para equipos rodantes pesados, limitación de velocidad o marcha atrás con señal sonora).',
          badge: 'ambos',
          tags: ['maquinaria de tierras', 'zanja', 'dumpers', 'retroexcavadoras', 'vías de maquinaria'],
        },
        {
          id: 'const-anx4-paC',
          numero: 'Parte C',
          titulo: 'Caídas en altura, Tejado, Andamiaje',
          texto: 'La norma es tajante: Siempre se favorece CPG frente a EPI anti caídas y se limitan andamios sobre borriquetas o escaleras de mano (uso excepcional de escalera limitándose a 130kg de peso estático breve sin trabajos de par. Eslingas). Redes e imperativos o Líneas Vida en forjado abierto / cubierta (caídas borde/lucernario).',
          badge: 'tecnico',
          tags: ['caídas en altura', 'redes de seguridad', 'escaleras de mano', 'borriquetas', 'líneas de vida', 'cubiertas frágiles', 'lucernarios cerrados'],
        },
      ],
    },
  ],
};
