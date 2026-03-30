import type { Ley } from './types';

export const cae: Ley = {
  id: 'cae',
  codigo: 'RD 171/2004',
  titulo: 'Coordinación de Actividades Empresariales',
  subtitulo: 'RD 171/2004, en materia de coordinación de actividades empresariales (CAE).',
  fecha: '30 de enero de 2004',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-1891',
  color: '#db2777',
  icono: '🤝',
  capitulos: [
    {
      id: 'cae-cap1',
      numero: 'Capítulo I',
      titulo: 'Disposiciones Generales',
      articulos: [
        {
          id: 'cae-art1',
          numero: '1 y 2',
          titulo: 'Objeto de la ley y Definiciones',
          texto: 'Desarrolla el artículo 24 de la LPRL en relación con la concurrencia de trabajadores de varias empresas. Define "Centro de trabajo", "Empresario titular" (aquel con capacidad de control sobre el centro), y "Empresario principal" (aquel que subcontrata para su "propia actividad").',
          badge: 'tecnico',
          tags: ['objeto', 'empresario titular', 'empresario principal', 'propia actividad'],
        },
      ],
    },
    {
      id: 'cae-cap2',
      numero: 'Capítulo II',
      titulo: 'Concurrencia de trabajadores de varias empresas',
      articulos: [
        {
          id: 'cae-art4',
          numero: '4',
          titulo: 'Deber de cooperación',
          texto: 'La concurrencia de trabajadores obliga a todos los empresarios concurrentes a cooperar en la aplicación de la normativa de PRL.',
          badge: 'divulgativo',
          tags: ['deber de cooperación', 'concurrencia'],
        },
        {
          id: 'cae-art5-6',
          numero: '5 y 6',
          titulo: 'Intercambio de información',
          texto: 'Las empresas concurrentes deben informarse recíprocamente: \n1. Riesgos de los trabajos a ejecutar. \n2. Posibilidad de que estos agraven riesgos de la otra mercantil. \nDebe ser fehaciente, documentada y PREVIA al inicio de cualquier tarea.',
          badge: 'tecnico',
          tags: ['información recíproca', 'evaluación', 'riesgos cruzados'],
        },
        {
          id: 'cae-art7-8',
          numero: '7 y 8',
          titulo: 'Ocurrencia de un accidente e información a los trabajadores',
          texto: 'Si ocuurriese un accidente in situ en concurrencia (incluso si era solo una contrata implicada), lo deben notificar al titular. Así mismo, cada empleador tiene el deber de trasladar esa información a sus trabajadores contratados allí.',
          badge: 'tecnico',
          tags: ['accidente de trabajo', 'comunicación interna', 'información'],
        },
      ],
    },
    {
      id: 'cae-cap3',
      numero: 'Capítulo III',
      titulo: 'Concurrencia con la presencia de un Empresario Titular',
      articulos: [
        {
          id: 'cae-art9-10',
          numero: '9 y 10',
          titulo: 'Obligaciones del Empresario Titular',
          texto: 'El Empresario Titular (el que tiene la capacidad de gestión del lugar aunque no interactúe laboralmente en ese contrato) es el garante principal respecto al "estado del edificio". Deben impartir a las contratas información general del centro, e instrucciones ante emergencia previas al contrato.',
          badge: 'tecnico',
          tags: ['empresario titular', 'instrucciones de emergencia', 'riesgos del centro'],
        },
      ],
    },
    {
      id: 'cae-cap4',
      numero: 'Capítulo IV',
      titulo: 'Contratas en la Propia Actividad (Empresario Principal)',
      articulos: [
        {
          id: 'cae-art11',
          numero: '11 y 12',
          titulo: 'Vigilancia de la normativa por el Principal',
          texto: 'Cuando una contrata realiza labores de la PROPIA ACTIVIDAD del empresario titular (ej. cadena de montaje dentro de la industria productiva), este se convierte en Empresario Principal y se somete a estricta vigilancia del cumplimiento normativo de la contratista en su centro.',
          badge: 'tecnico',
          tags: ['empresario principal', 'propia actividad', 'deber vigilando', 'subcontratación'],
        },
        {
          id: 'cae-art13-14',
          numero: '13 y 14',
          titulo: 'Acreditación del cumplimiento',
          texto: 'El empresario principal debe exigir -antes del inicio de la obra- documental de las evaluaciones de riesgos y de que las subcontratas han adiestrado a los concurrentes.',
          badge: 'tecnico',
          tags: ['acreditación', 'check list documental', 'vigilancia documental'],
        },
      ],
    },
    {
      id: 'cae-cap5',
      numero: 'Capítulo V',
      titulo: 'Medios de coordinación',
      articulos: [
        {
          id: 'cae-art15',
          numero: '15',
          titulo: 'Clases y criterios de medios de coordinación',
          texto: 'El RD permite nombrar Coordinadores de Seguridad (en industria general, distinto a construcción), recurso preventivo, reuniones periódicas de CSS compartidos, o designados. La complejidad del método de CAE depende de peligrosidad (ej: riesgo de caída de altura) o volumen de rotación.',
          badge: 'tecnico',
          tags: ['medios de coordinación', 'recursos preventivos', 'reuniones eficaces'],
        },
      ],
    },
  ],
};
