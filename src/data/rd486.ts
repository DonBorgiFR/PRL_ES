import type { Ley } from './types';

// ============================================================
// RD 486/1997 — Seguridad y Salud en Lugares de Trabajo
// ============================================================

export const rd486: Ley = {
  id: 'rd486',
  codigo: 'RD 486/1997',
  titulo: 'Disposiciones Mínimas de Seguridad y Salud en los Lugares de Trabajo',
  subtitulo: 'RD 486/1997 — Condiciones constructivas, orden, limpieza, iluminación, ruido, temperatura y ergonomía en puestos de trabajo industriales',
  fecha: '14 de abril de 1997',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-8669',
  color: '#f59e0b',
  icono: '🏭',
  capitulos: [
    {
      id: 'rd486-cap1',
      numero: 'I',
      titulo: 'Disposiciones Generales y Obligaciones del Empresario',
      articulos: [
        {
          id: 'rd486-art1',
          numero: '1',
          titulo: 'Objeto',
          texto: 'El presente Real Decreto establece las disposiciones mínimas de seguridad y de salud aplicables a los lugares de trabajo. Las disposiciones de la Ley 31/1995, de Prevención de Riesgos Laborales, se aplicarán plenamente al conjunto del ámbito contemplado en el apartado anterior.',
          badge: 'tecnico',
          tags: ['objeto', 'ámbito de aplicación', 'lugares de trabajo', 'disposiciones mínimas'],
        },
        {
          id: 'rd486-art3',
          numero: '3',
          titulo: 'Obligaciones del Empresario',
          texto: 'El empresario deberá adoptar las medidas necesarias para que la utilización de los lugares de trabajo no origine riesgos para la seguridad y salud de los trabajadores o, si ello no fuera posible, para que tales riesgos se reduzcan al mínimo. En cualquier caso, los lugares de trabajo deberán cumplir las disposiciones mínimas establecidas en el presente Real Decreto en cuanto a sus condiciones constructivas, orden, limpieza y mantenimiento, señalización, instalaciones de servicio o protección, condiciones ambientales, iluminación, servicios higiénicos y locales de descanso, y material y locales de primeros auxilios.',
          badge: 'tecnico',
          tags: ['obligaciones empresario', 'medidas preventivas', 'condiciones mínimas', 'gestión lugares de trabajo'],
        },
      ],
    },
    {
      id: 'rd486-cap2',
      numero: 'II',
      titulo: 'Condiciones Constructivas, Orden y Limpieza',
      articulos: [
        {
          id: 'rd486-anexo1-a',
          numero: 'Anexo I.A',
          titulo: 'Condiciones Constructivas — Seguridad Estructural y Superficies',
          texto: 'Los edificios y locales de los lugares de trabajo deberán poseer la estructura y solidez apropiadas a su tipo de utilización. Las superficies de suelos, techos y paredes serán tales que puedan limpiarse y arreglarse, serán de material adecuado para el trabajo. Los suelos de los locales de trabajo deberán ser fijos, estables y no resbaladizos, sin irregularidades ni pendientes peligrosas. Las aberturas o desniveles que supongan un riesgo de caída de personas se protegerán mediante barandillas u otros sistemas de protección de seguridad equivalente, que podrán tener partes móviles cuando sea necesario disponer de acceso a la abertura.',
          badge: 'tecnico',
          tags: ['condiciones constructivas', 'suelos', 'superficies', 'barandillas', 'caída de personas', 'estructura'],
        },
        {
          id: 'rd486-anexo1-b',
          numero: 'Anexo I.B',
          titulo: 'Orden, Limpieza y Mantenimiento',
          texto: 'Las zonas de paso, salidas y vías de circulación de los lugares de trabajo y, en especial, las salidas y vías de evacuación previstas para la evacuación en casos de emergencia, deberán permanecer libres de obstáculos de forma que sea posible utilizarlas sin dificultades en todo momento. Los lugares de trabajo, incluidos los locales de servicio y sus respectivos equipos e instalaciones, se limpiarán periódicamente y siempre que sea necesario para mantenerlos en todo momento en condiciones higiénicas adecuadas. Las instalaciones de los lugares de trabajo deberán ser objeto de un mantenimiento periódico, de forma que sus condiciones de funcionamiento satisfagan siempre las especificaciones del proyecto, subsanándose con rapidez las deficiencias que puedan afectar a la seguridad y salud de los trabajadores.',
          badge: 'ambos',
          tags: ['orden', 'limpieza', 'mantenimiento', 'vías de evacuación', 'zonas de paso', 'periodicidad'],
        },
      ],
    },
    {
      id: 'rd486-cap3',
      numero: 'III',
      titulo: 'Condiciones Ambientales — Temperatura, Ventilación y Ruido',
      articulos: [
        {
          id: 'rd486-anexo3',
          numero: 'Anexo III',
          titulo: 'Condiciones Ambientales de los Lugares de Trabajo',
          texto: 'La exposición a las condiciones ambientales de los lugares de trabajo no debe suponer un riesgo para la seguridad y la salud de los trabajadores. La temperatura de los locales donde se realicen trabajos sedentarios propios de oficinas o similares estará comprendida entre 17 y 27 °C. La temperatura de los locales donde se realicen trabajos ligeros estará comprendida entre 14 y 25 °C. La humedad relativa estará comprendida entre el 30 y el 70 por 100, excepto en los locales donde existan riesgos por electricidad estática en los que el límite inferior será el 50 por 100. Los trabajadores no deberán estar expuestos de forma frecuente o continuada a corrientes de aire cuya velocidad exceda los límites establecidos según el tipo de trabajo.',
          badge: 'tecnico',
          tags: ['temperatura', 'humedad', 'ventilación', 'condiciones ambientales', 'confort térmico', 'electricidad estática'],
        },
        {
          id: 'rd486-ruido',
          numero: 'Anexo III.B',
          titulo: 'Ruido en el Lugar de Trabajo',
          texto: 'El nivel de ruido en el lugar de trabajo no debe suponer un riesgo para la seguridad y la salud de los trabajadores. Cuando el nivel de ruido supere los valores establecidos por la normativa específica sobre agentes físicos (RD 286/2006), deberán adoptarse las medidas técnicas u organizativas necesarias para reducir la exposición al ruido. Se priorizará la reducción del ruido en la fuente frente al uso de equipos de protección individual auditivos. Los puestos de trabajo con exposición habitual a niveles superiores a 80 dB(A) requieren evaluación específica y control médico auditivo.',
          badge: 'tecnico',
          tags: ['ruido', 'nivel sonoro', 'protección auditiva', 'agentes físicos', 'exposición', 'dB'],
        },
      ],
    },
    {
      id: 'rd486-cap4',
      numero: 'IV',
      titulo: 'Iluminación de los Lugares de Trabajo',
      articulos: [
        {
          id: 'rd486-anexo4',
          numero: 'Anexo IV',
          titulo: 'Niveles Mínimos de Iluminación',
          texto: 'La iluminación de cada zona o parte de un lugar de trabajo deberá adaptarse a las características de la actividad que se efectúe en ella, teniendo en cuenta los riesgos para la seguridad y salud de los trabajadores dependientes de las condiciones de visibilidad, y las exigencias visuales de las tareas desarrolladas. Los niveles mínimos de iluminación de los lugares de trabajo serán: zonas donde se ejecuten tareas con exigencias visuales bajas, 100 lux; tareas con exigencias visuales moderadas, 200 lux; tareas con exigencias visuales altas, 500 lux; tareas con exigencias visuales muy altas, 1000 lux. La iluminación de los lugares de trabajo deberá cumplir las condiciones de distribución y color de la luz que no comprometan la seguridad y salud de los trabajadores.',
          badge: 'tecnico',
          tags: ['iluminación', 'lux', 'niveles mínimos', 'exigencias visuales', 'visibilidad', 'zona de trabajo'],
        },
        {
          id: 'rd486-ilu-emergencia',
          numero: 'Anexo IV.B',
          titulo: 'Iluminación de Emergencia y Seguridad',
          texto: 'Los lugares de trabajo dispondrán, en la medida de lo posible, de suficiente luz natural y se complementarán con luz artificial cuando la primera, por sí sola, no garantice las condiciones de visibilidad adecuadas. En tales casos se utilizará preferentemente la iluminación artificial general, complementada a su vez con una localizada cuando en zonas concretas se requieran niveles de iluminación elevados. Los lugares de trabajo en los que los trabajadores estén particularmente expuestos a riesgos en caso de avería de la iluminación artificial dispondrán de una iluminación de seguridad de suficiente intensidad.',
          badge: 'ambos',
          tags: ['iluminación de emergencia', 'luz natural', 'luz artificial', 'avería', 'seguridad'],
        },
      ],
    },
    {
      id: 'rd486-cap5',
      numero: 'V',
      titulo: 'Ergonomía — Carga Manual y Pantallas de Visualización',
      articulos: [
        {
          id: 'rd486-carga-manual',
          numero: 'Anexo V',
          titulo: 'Manipulación Manual de Cargas',
          texto: 'Deberán adoptarse las medidas técnicas u organizativas necesarias para evitar la manipulación manual de cargas. Cuando no pueda evitarse, el empresario adoptará medidas organizativas, utilizará medios adecuados o proporcionará a los trabajadores los medios apropiados a fin de reducir el riesgo. La manipulación manual de una carga puede entrañar riesgo, en particular dorso-lumbar, para los trabajadores si supera los 25 kg en condiciones ideales o umbráles más bajos en condiciones desfavorables (posturas forzadas, suelos irregulares, condiciones ambientales adversas, frecuencia elevada). Se utilizará como guía la norma ISO 11228 y la ecuación de NIOSH para la evaluación de tareas de levantamiento.',
          badge: 'tecnico',
          tags: ['carga manual', 'manipulación', 'ergonomía', 'dorso-lumbar', 'NIOSH', 'levantamiento', '25kg'],
        },
        {
          id: 'rd486-pan-visualizacion',
          numero: 'Anexo V.B',
          titulo: 'Equipos con Pantallas de Visualización',
          texto: 'Los equipos de trabajo con pantallas de visualización de datos deben cumplir las disposiciones del RD 488/1997. En todo caso, el empresario deberá garantizar que el puesto de trabajo cumpla las disposiciones mínimas sobre pantalla, teclado, mesa, asiento, espacio y entorno del puesto. El trabajador que utilice habitualmente pantallas de visualización de datos como parte principal de su actividad tendrá derecho a una vigilancia específica de la vista y, en su caso, a recibir las gafas especiales adecuadas.',
          badge: 'ambos',
          tags: ['pantallas', 'PVD', 'ergonomía visual', 'puesto de trabajo', 'RD 488/1997', 'vista', 'teclado', 'asiento'],
        },
      ],
    },
    {
      id: 'rd486-cap6',
      numero: 'VI',
      titulo: 'Equipos de Trabajo y Señalización',
      articulos: [
        {
          id: 'rd486-equipos',
          numero: 'Anexo I.C',
          titulo: 'Equipos de Trabajo — Mantenimiento y Resguardos',
          texto: 'Los equipos de trabajo utilizados en los lugares de trabajo deberán diseñarse y construirse teniendo en cuenta los principios ergonómicos. Los equipos de trabajo deberán mantenerse en buen estado de funcionamiento mediante revisiones periódicas. Toda operación de mantenimiento, ajuste, desbloqueo, revisión o reparación del equipo que pueda suponer un peligro deberá realizarse tras haber parado o desconectado el equipo, verificadas las medidas de consignación, y en zona despejada. Los órganos de accionamiento de los equipos de trabajo que puedan provocar accidentes deberán ser claramente visibles e identificables y estar provistos de resguardos o dispositivos de seguridad cuando sea necesario.',
          badge: 'tecnico',
          tags: ['equipos de trabajo', 'resguardos', 'mantenimiento', 'consignación', 'órganos de accionamiento', 'revisiones'],
        },
        {
          id: 'rd486-senalizacion',
          numero: 'Anexo II',
          titulo: 'Señalización de Seguridad y Salud',
          texto: 'El empresario deberá adoptar las medidas precisas para que en los lugares de trabajo exista una señalización de seguridad y salud que cumpla lo establecido en el RD 485/1997. La señalización de seguridad no sustituirá en ningún caso a las medidas de prevención y protección establecidas en el plan de prevención. La señalización deberá permanecer en buen estado y ser fácilmente perceptible por los trabajadores a los que va destinada, renovándose cuando sea necesario.',
          badge: 'ambos',
          tags: ['señalización', 'seguridad y salud', 'RD 485/1997', 'señales', 'plan de prevención'],
        },
      ],
    },
  ],
};
