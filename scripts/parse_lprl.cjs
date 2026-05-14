const fs = require('fs');

const inputPath = 'C:\\Users\\borja\\.gemini\\antigravity\\brain\\1dcf7a32-cc5f-4a56-b223-a89ca02138f3\\.system_generated\\steps\\31\\content.md';
const outputPath = 'C:\\Users\\borja\\OneDrive\\Documentos\\Antigravity\\PRL España\\src\\data\\lprl.ts';

const content = fs.readFileSync(inputPath, 'utf8');
const lines = content.split('\n');

const capitulos = [];
let currentCapitulo = null;
let currentArticulo = null;
let captureText = false;

// We start capturing after we see CAPÍTULO I
let inPreamble = true;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.startsWith('#### CAPÍTULO')) {
    inPreamble = false;
    const num = line.replace('#### ', '');
    // Next line should be the title of the chapter
    let title = '';
    let j = i + 1;
    while (j < lines.length) {
      if (lines[j].trim().length > 0 && !lines[j].includes('[Subir]') && !lines[j].startsWith('####')) {
        title = lines[j].trim();
        if (title.startsWith('#### ')) title = title.substring(5);
        break;
      }
      j++;
    }
    currentCapitulo = {
      id: `lprl-cap${capitulos.length + 1}`,
      numero: num,
      titulo: title,
      articulos: []
    };
    capitulos.push(currentCapitulo);
  } else if (line.startsWith('##### Artículo')) {
    const match = line.match(/##### Artículo (\d+(?: bis)?)\.\s*(.*)/);
    if (match) {
      const numero = match[1];
      const titulo = match[2];
      
      currentArticulo = {
        id: `lprl-art${numero.replace(' bis', 'bis')}`,
        numero: numero,
        titulo: titulo,
        textoLines: [],
        badge: 'tecnico',
        tags: []
      };
      if (currentCapitulo) {
        currentCapitulo.articulos.push(currentArticulo);
      }
    }
  } else if (line.startsWith('#### Disposición')) {
     // Stop capturing at disposiciones
     break;
  } else if (currentArticulo && line.length > 0 && !line.startsWith('[Subir]') && !line.startsWith('[Bloque')) {
    currentArticulo.textoLines.push(line);
  }
}

// Format the typescript file
let tsCode = `import type { Ley } from './types';

export const lprl: Ley = {
  id: 'lprl',
  codigo: 'Ley 31/1995',
  titulo: 'Ley de Prevención de Riesgos Laborales',
  subtitulo: 'LPRL (Ley 31/1995) — Marco normativo base para promover la seguridad y salud de los trabajadores en España.',
  fecha: '8 de noviembre de 1995',
  boeUrl: 'https://boe.es/buscar/act.php?id=BOE-A-1995-24292',
  color: '#3b82f6',
  icono: '⚖️',
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
    let texto = art.textoLines.join('\\n\\n').replace(/'/g, "\\'");
    tsCode += `        {
          id: '${art.id}',
          numero: '${art.numero}',
          titulo: ${JSON.stringify(art.titulo)},
          texto: ${JSON.stringify(art.textoLines.join('\\n\\n'))},
          badge: 'tecnico',
          tags: [],
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

fs.writeFileSync('C:\\Users\\borja\\OneDrive\\Documentos\\Antigravity\\PRL España\\parse_lprl_output.ts', tsCode);
console.log('Done parsing LPRL.');
