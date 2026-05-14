const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'docs', 'prl-industria', 'normativas', 'rsp.md');
const outputPath = path.join(__dirname, 'src', 'data', 'rsp.ts');

const content = fs.readFileSync(inputPath, 'utf8');
const lines = content.split('\n');

const capitulos = [];
let currentCapitulo = null;
let currentArticulo = null;

let inPreamble = true;

const ignoreKeywords = [
  'Subir',
  '\\[Bloque',
  'Seleccionar redacción:',
  'Se modifica por',
  'Se añade por',
  'Texto añadido,',
  'Se suprime por',
  'Se deroga por'
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
      id: `rsp-cap${capitulos.length + 1}`,
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
    const numeroStr = artMatch[1].replace(/\s+/g, ''); // e.g. "22bis"
    const titulo = artMatch[2];
    
    currentArticulo = {
      id: `rsp-art${numeroStr}`,
      numero: artMatch[1],
      titulo: titulo,
      textoLines: [],
      textoResumen: null,
      badge: 'tecnico',
      tags: []
    };
    
    if (!currentCapitulo) {
      currentCapitulo = { id: 'rsp-cap0', numero: 'Preámbulo', titulo: 'Disposiciones Generales', articulos: [] };
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

// Resumen Mapping
const resumenMap = [
  { range: ['1', '2'], tags: ['plan de prevención', 'integración preventiva', 'responsabilidades'], badge: 'tecnico', texto: 'La prevención de riesgos se integrará en el sistema de la empresa mediante la implantación del Plan de Prevención. Este documento define la estructura organizativa, responsabilidades, prácticas y recursos. Estará a disposición de Autoridad Laboral y Sanit.' },
  { range: ['3', '4', '5', '6', '7'], tags: ['evaluación inicial', 'revisión', 'trabajadores sensibles', 'magnitud de riesgo'], badge: 'tecnico', texto: 'La ER inicial (o revisión tras accidente/nueva máquina) ha de estimar magnitude(s) del riesgo, priorizando los que no se han evitado. La ER debe repetirse con la incorporación de trabajadores especialmente sensibles y medir exposición sistemática en agentes químicos/físicos.' },
  { range: ['8', '9'], tags: ['planificación', 'plazos', 'riesgo mitigado', 'medidas técnicas'], badge: 'divulgativo', texto: 'Aislando cada riesgo de la ER, se preveerán medidas o plazos si las medidas se alargan más de un año (presupuestos en plan anual). Si no es viable, el riesgo grave e inminente suspende la actividad operativa.' },
  { range: ['10', '11'], tags: ['asunción', 'asunción empresario', 'microempresa'], badge: 'ambos', texto: 'El empresario puede asumir la PRL personalmente (excepto Salud en el Trabajo Médico) si tiene hasta 25 trab. con un único centro de trb, o menos de 10 en general. Ha de tener presencia física rutinaria y capacidad Básica en PRL.' },
  { range: ['12', '13'], tags: ['designado', 'nivel básico', 'medios', 'horas asginadas'], badge: 'tecnico', texto: 'El empresario designará uno o varios trabajadores para ocuparse de la PRL si no hay asunción, SPP obligatorio ni SPA. Requieren capacidad/nivel Básico y tiempo y medios asignados.' },
  { range: ['14', '15'], tags: ['SPP', '500 trabajadores', 'especialidades preventivas'], badge: 'tecnico', texto: 'Obligatorios en empresas de más de 500 trabajadores (y de 250 tratándose del Anexo 1 tóxicos/peligrosos). Constituirán una unidad organizativa específica (minimo 2 especialidades cubiertas Técnico Superior).' },
  { range: ['16', '17', '18', '19', '20'], tags: ['SPA', 'acreditación', 'concierto', 'mutuas'], badge: 'ambos', texto: 'Entidades especializadas en consultoría (acreditadas por Autoridad Laboral). Contratables total o en las especialidades que el empresario o el SPP o Designado no puedan abarcar internamente (como Vigilancia Sanitaria y Medicina del Trabajo). La empresa concertante paga cuotas y se provee apoyo.' },
  { range: ['22bis'], tags: ['recurso preventivo', 'presencia insitu', 'operaciones peligrosas'], badge: 'tecnico', texto: 'Obligada la presencia física del Recurso Preventivo nombrado formalmente en la empresa si ocurren operaciones peligrosas: 1) Riesgo caída altura, 2) Zonas Atex o EEE (espacios confinados/química), o 3) si hay concurrencia o una norma ITSS lo mande al estar una operativa descontrolada.' },
  { range: ['29', '30', '31', '32', '33'], tags: ['auditoría', 'SPA', 'sometimiento', 'eficacia del sistema anual'], badge: 'tecnico', texto: 'Obligadas a someter su SPT (Sistema de PRL) a una auditoría reglamentaria aquellas empresas NO amparadas 100% por SPA, a los dos años si tienen anexo 1, o a 4 si no lo tienen. Auditor busca comprobar la suficiencia e idoneidad.' },
  { range: ['35', '36', '37'], tags: ['formación en prevención', 'nivel básico de prevención', 'tecnico superior de PRL (TPRLL)', 'Médico Evaluador', 'Enfermería Trabajo'], badge: 'divulgativo', texto: 'Cualificación en PRL. Básico (30/50hr) de vigilancia rutinaria en empresa de bajo riesgo. Intermedio (300hr) promoción y mediciones no exigentes complejas. Superior (Grado Maestro Universitario 600h) evaluación cualitativa de agentes físicos/quimico, biológico, higiene industrial, psico o ergónomo. Medicina Trabajo (MIR Médico).' }
];

for (const cap of capitulos) {
  for (const art of cap.articulos) {
    const num = art.numero.replace(/\s+/g, ''); // "22bis", "1", etc.
    const mapping = resumenMap.find(m => m.range.includes(num));
    if (mapping) {
      art.textoResumen = mapping.texto;
      art.badge = mapping.badge;
      art.tags = mapping.tags;
    }
  }
}


let tsCode = `import type { Ley } from './types';

export const rsp: Ley = {
  id: 'rsp',
  codigo: 'RD 39/1997',
  titulo: 'Reglamento de los Servicios de Prevención',
  subtitulo: 'RSP (RD 39/1997) — Regula los procedimientos de evaluación de riesgos y los servicios de prevención.',
  fecha: '17 de enero de 1997',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-1853',
  color: '#8b5cf6',
  icono: '🛡️',
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
    let textoLegal = art.textoLines.join('\\n\\n');
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
console.log('Done parsing RSP and merging with old summaries.');
