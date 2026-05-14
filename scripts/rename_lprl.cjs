const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'lprl.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace 'texto: ' with 'textoLegal: '
content = content.replace(/\btexto: "/g, 'textoLegal: "');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced texto with textoLegal in lprl.ts');
