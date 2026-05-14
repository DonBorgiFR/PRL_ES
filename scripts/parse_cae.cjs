const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'docs', 'prl-industria', 'normativas', 'cae.md');
const outputPath = path.join(__dirname, 'src', 'data', 'cae.ts');

const content = fs.readFileSync(inputPath, 'utf8');
const lines = content.split('\n');

const capitulos = [];
let currentCapitulo = null;
let currentArticulo = null;

let inPreamble = true;

const ignoreKeywords = [
  'Subir',
  '\\[Bloque',
  '[Bloque',
  'Seleccionar redacción:',
  'Se modifica por',
  'Se añade por',
  'Texto añadido,',
  'Se suprime por',
  'Se deroga por',
  'Redactados los párrafos'
];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.length === 0) continue;
  
  if (ignoreKeywords.some(kw => line.startsWith(kw) || line.includes(kw))) {
    continue;
  }

  if (line.match(/^CAP[ÍI]TULO\s+([IVXLCDM]+)$/i)) {
    inPreamble = false;
    const num = line;
    let title = '';
    let j = i + 1;
    while (j < lines.length) {
      const nextLine = lines[j].trim();
      if (nextLine.length > 0 && !ignoreKeywords.some(kw => nextLine.startsWith(kw) || nextLine.includes(kw))) {
        title = nextLine;
        break;
      }
      j++;
    }
    
    currentCapitulo = {
      id: `cae-cap${capitulos.length + 1}`,
      numero: num,
      titulo: title,
      articulos: []
    };
    capitulos.push(currentCapitulo);
    
    i = j;
    currentArticulo = null;
    continue;
  } 
  
  const artMatch = line.match(/^Artículo\s+(\d+(?:\s+bis|\s+ter)?)\.\s*(.*)/i);
  if (artMatch && !inPreamble) {
    const numeroStr = artMatch[1].replace(/\s+/g, ''); // "1", "2"
    const titulo = artMatch[2];
    
    currentArticulo = {
      id: `cae-art${numeroStr}`,
      numero: artMatch[1],
      titulo: titulo,
      textoLines: [],
      textoResumen: null,
      badge: 'tecnico',
      tags: []
    };
    
    if (!currentCapitulo) {
      currentCapitulo = { id: 'cae-cap0', numero: 'Preámbulo', titulo: 'Disposiciones Generales', articulos: [] };
      capitulos.push(currentCapitulo);
    }
    currentCapitulo.articulos.push(currentArticulo);
    continue;
  }
  
  if (line.match(/^(?:Disposición|DISPOSICIÓN)\s+(?:adicional|final|transitoria|derogatoria)/i)) {
    break;
  }

  if (currentArticulo && !inPreamble) {
    currentArticulo.textoLines.push(line);
  }
}

// Resumen Mapping for CAE based on the old src/data/cae.ts
const resumenMap = [
  { range: ['1', '2'], tags: ['objeto', 'empresario titular', 'empresario principal', 'propia actividad'], badge: 'tecnico', texto: 'Desarrolla el artículo 24 de la LPRL en relación con la concurrencia de trabajadores de varias empresas. Define "Centro de trabajo", "Empresario titular" (aquel con capacidad de control sobre el centro), y "Empresario principal" (aquel que subcontrata para su "propia actividad").' },
  { range: ['4'], tags: ['deber de cooperación', 'concurrencia'], badge: 'divulgativo', texto: 'La concurrencia de trabajadores obliga a todos los empresarios concurrentes a cooperar en la aplicación de la normativa de PRL.' },
  { range: ['5', '6'], tags: ['información recíproca', 'evaluación', 'riesgos cruzados'], badge: 'tecnico', texto: 'Las empresas concurrentes deben informarse recíprocamente: \\n1. Riesgos de los trabajos a ejecutar. \\n2. Posibilidad de que estos agraven riesgos de la otra mercantil. \\nDebe ser fehaciente, documentada y PREVIA al inicio de cualquier tarea.' },
  { range: ['7', '8'], tags: ['accidente de trabajo', 'comunicación interna', 'información'], badge: 'tecnico', texto: 'Si ocuurriese un accidente in situ en concurrencia (incluso si era solo una contrata implicada), lo deben notificar al titular. Así mismo, cada empleador tiene el deber de trasladar esa información a sus trabajadores contratados allí.' },
  { range: ['9', '10'], tags: ['empresario titular', 'instrucciones de emergencia', 'riesgos del centro'], badge: 'tecnico', texto: 'El Empresario Titular (el que tiene la capacidad de gestión del lugar aunque no interactúe laboralmente en ese contrato) es el garante principal respecto al "estado del edificio". Deben impartir a las contratas información general del centro, e instrucciones ante emergencia previas al contrato.' },
  { range: ['11', '12'], tags: ['empresario principal', 'propia actividad', 'deber vigilando', 'subcontratación'], badge: 'tecnico', texto: 'Cuando una contrata realiza labores de la PROPIA ACTIVIDAD del empresario titular (ej. cadena de montaje dentro de la industria productiva), este se convierte en Empresario Principal y se somete a estricta vigilancia del cumplimiento normativo de la contratista en su centro.' },
  { range: ['13', '14'], tags: ['acreditación', 'check list documental', 'vigilancia documental'], badge: 'tecnico', texto: 'El empresario principal debe exigir -antes del inicio de la obra- documental de las evaluaciones de riesgos y de que las subcontratas han adiestrado a los concurrentes.' },
  { range: ['15'], tags: ['medios de coordinación', 'recursos preventivos', 'reuniones eficaces'], badge: 'tecnico', texto: 'El RD permite nombrar Coordinadores de Seguridad (en industria general, distinto a construcción), recurso preventivo, reuniones periódicas de CSS compartidos, o designados. La complejidad del método de CAE depende de peligrosidad (ej: riesgo de caída de altura) o volumen de rotación.' }
];

for (const cap of capitulos) {
  for (const art of cap.articulos) {
    const num = art.numero.replace(/\s+/g, '');
    const mapping = resumenMap.find(m => m.range.includes(num));
    if (mapping) {
      art.textoResumen = mapping.texto;
      art.badge = mapping.badge;
      art.tags = mapping.tags;
    }
  }
}

let tsCode = `import type { Ley } from './types';

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
`;

for (const cap of capitulos) {
  tsCode += `    {
      id: '${cap.id}',
      numero: '${cap.numero}',
      titulo: ${JSON.stringify(cap.titulo)},
      articulos: [
`;
  for (const art of cap.articulos) {
    let textoLegal = art.textoLines.join('\\n\\n').replace(/'/g, "\\'");
    tsCode += `        {
          id: '${art.id}',
          numero: '${art.numero}',
          titulo: ${JSON.stringify(art.titulo)},
          textoLegal: ${JSON.stringify(textoLegal)},
          textoResumen: ${art.textoResumen ? JSON.stringify(art.textoResumen) : 'undefined'},
          badge: '${art.badge}',
          tags: ${JSON.stringify(art.tags)},
        },
`;
  }
  tsCode += `      ],
    },
`;
}

tsCode += `  ],
};
`;

fs.writeFileSync(outputPath, tsCode);
console.log('Done parsing CAE and merging with old summaries.');
