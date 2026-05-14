import fs from 'fs';
let f = fs.readFileSync('src/data/fichas.ts', 'utf8');
f = f.replace(/duracion: '\d+\.?\d*h',/g, "duracion: '5-10 min',");
fs.writeFileSync('src/data/fichas.ts', f);
console.log('Fichas updated');
