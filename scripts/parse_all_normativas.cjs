// ============================================================
// parse_all_normativas.cjs — Parser unificado BOE → modelo dual
// Versión 2: limpieza de artefactos BOE, re-ejecución segura
// ============================================================
const fs = require('fs');
const path = require('path');

const NORMATIVAS = [
    { md: 'rd486.md', ts: 'rd486.ts' },
    { md: 'rd1215.md', ts: 'rd1215.ts' },
    { md: 'rd614.md', ts: 'rd614.ts' },
    { md: 'rd773.md', ts: 'rd773.ts' },
    { md: 'construccion.md', ts: 'construccion.ts' }
];

const docsDir = path.join(__dirname, '..', 'docs', 'prl-industria', 'normativas');
const dataDir = path.join(__dirname, '..', 'src', 'data');

// ── Líneas a ignorar completamente (no son contenido legal) ──
const ignoreKeywords = [
    'Subir',
    '\\[Bloque', '[Bloque',
    'Seleccionar redacción:',
    'Se modifica por', 'Se añade por', 'Texto añadido,',
    'Se suprime por', 'Se deroga por', 'Redactados los párrafos',
    'Téngase en cuenta', 'Se modifica el apartado',
    'Se modifican las letras', 'Se modifican los apartados',
    'Redactado conforme', 'Redactada conforme',
    'Última actualización,', 'Ref. BOE-',
    'Texto modificado,',
];

// ── Líneas que son marcadores del BOE sin valor legal real ──
const exactIgnore = [
    'Jurisprudencia',
    'Concordancias',
];

// ── Detectores de frontera: estas líneas DETIENEN la acumulación
//    del bloque actual (son cabeceras de siguiente sección) ──
const boundaryPatterns = [
    /^CAP[ÍI]TULO\s+[IVXLCDM]+$/i,
    /^CAP[ÍI]TULO\s+[IVXLCDM]+\s*$/i,
    /^T[ÍI]TULO\s+[IVXLCDM]+$/i,
    /^Disposici[oó]n\s+(adicional|final|transitoria|derogatoria)/i,
];

function isBoundaryLine(line) {
    return boundaryPatterns.some(re => re.test(line));
}

function isIgnoredLine(line) {
    if (ignoreKeywords.some(kw => line.startsWith(kw) || line.includes(kw))) return true;
    if (exactIgnore.includes(line)) return true;
    return false;
}

// ── Parseo del .md en bruto → bloques {type, num, lines} ──
function parseMarkdown(mdPath) {
    if (!fs.existsSync(mdPath)) {
        console.warn(`[WARN] Faltante: ${mdPath}`);
        return [];
    }
    const content = fs.readFileSync(mdPath, 'utf8');
    const lines = content.split('\n');
    const blocks = [];
    let currentBlock = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        if (isIgnoredLine(line)) continue;

        // ── Frontera de capítulo/título: cierra el bloque actual ──
        if (isBoundaryLine(line)) {
            currentBlock = null; // cierra sin crear bloque nuevo
            continue;
        }

        // ── Títulos de capítulo que siguen a la cabecera (ej: "Disposiciones generales") ──
        // Si no hay bloque activo y la línea no es artículo ni anexo, la ignoramos
        // (es probablemente el subtítulo de un CAPÍTULO que ya cerramos)

        // ── Artículos ──
        const artMatch = line.match(/^Artículo\s+(\d+(?:\s*bis|\s*ter)?)\s*\.?\s*(.*)/i);
        if (artMatch) {
            currentBlock = {
                type: 'art',
                num: artMatch[1].replace(/\s+/g, '').toLowerCase(),
                title: artMatch[2],
                lines: []
            };
            blocks.push(currentBlock);
            continue;
        }

        // ── Anexos ──
        const anxMatch = line.match(/^ANEXO\s+([A-Z0-9]+)\b/i);
        if (anxMatch) {
            currentBlock = {
                type: 'anx',
                num: anxMatch[1].toUpperCase(),
                title: line,
                lines: []
            };
            blocks.push(currentBlock);
            continue;
        }

        // ── Acumular contenido en el bloque actual ──
        if (currentBlock) {
            currentBlock.lines.push(line);
        }
    }
    return blocks;
}

// ── Resolver texto para un "numero" del TS ──
function resolveTextForNumero(numeroRaw, mdBlocks) {
    let textLines = [];
    const isAnexo = numeroRaw.toLowerCase().includes('anexo');

    if (!isAnexo) {
        // Artículos: "1", "1 y 2", "4, 5 y 6", "Parte B", etc.
        const nums = numeroRaw.match(/\d+(?:bis|ter)?/gi) || [];
        for (const num of nums) {
            const cleanNum = num.toLowerCase().replace(/\s+/g, '');
            const block = mdBlocks.find(b => b.type === 'art' && b.num === cleanNum);
            if (block) {
                textLines.push(...block.lines);
            }
        }
    } else {
        // Anexos: agrupamos todo lo del Anexo mencionado
        const romanMatch = numeroRaw.match(/[IVXLCDM]+/gi) || [];
        for (const roman of romanMatch) {
            const upperRoman = roman.toUpperCase();
            const block = mdBlocks.find(b => b.type === 'anx' && b.num === upperRoman);
            if (block) {
                textLines.push(...block.lines);
            }
        }
    }

    if (textLines.length === 0) {
        return null; // No se encontró texto → no sobreescribir
    }

    // Escapar para inyección segura en TypeScript single-quoted string
    return textLines.join('\\n\\n').replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// ============================================================
// MAIN: Procesar cada normativa
// ============================================================
let totalChanges = 0;

for (const norm of NORMATIVAS) {
    const mdPath = path.join(docsDir, norm.md);
    const tsPath = path.join(dataDir, norm.ts);

    if (!fs.existsSync(tsPath)) {
        console.log(`[SKIP] No se encuentra TS para ${norm.ts}`);
        continue;
    }

    console.log(`\nProcesando ${norm.ts}...`);
    const mdBlocks = parseMarkdown(mdPath);
    const tsContent = fs.readFileSync(tsPath, 'utf8');
    const tsLines = tsContent.split('\n');
    const newTsLines = [];
    let currentNumero = null;
    let anexoSubCounter = {};
    let changesInFile = 0;

    for (let i = 0; i < tsLines.length; i++) {
        const line = tsLines[i];

        // Detectar el campo "numero:" para saber qué artículo estamos procesando
        const numMatch = line.match(/^\s*numero:\s*['"`]([^'"`]+)['"`]/);
        if (numMatch) {
            currentNumero = numMatch[1];
        }

        // ── CASO 1: Archivo ya migrado (tiene textoLegal:) → reemplazar valor ──
        const textoLegalMatch = line.match(/^(\s*)textoLegal:\s*'(.*)'\s*,?\s*$/);
        if (textoLegalMatch && currentNumero) {
            const indent = textoLegalMatch[1];
            const oldValue = textoLegalMatch[2];

            let isSubAnexo = false;
            let anexoBase = '';
            if (currentNumero.toLowerCase().includes('anexo')) {
                const parts = currentNumero.split('.');
                if (parts.length > 1) {
                    isSubAnexo = true;
                    anexoBase = parts[0].trim();
                }
            }

            let newTextoLegal = null;
            if (isSubAnexo) {
                if (!anexoSubCounter[anexoBase]) {
                    newTextoLegal = resolveTextForNumero(anexoBase, mdBlocks);
                    anexoSubCounter[anexoBase] = true;
                } else {
                    newTextoLegal = "El texto legal íntegro de este anexo se encuentra en el primer apartado superior.";
                }
            } else {
                newTextoLegal = resolveTextForNumero(currentNumero, mdBlocks);
            }

            if (newTextoLegal !== null) {
                newTsLines.push(`${indent}textoLegal: '${newTextoLegal}',`);
                if (newTextoLegal !== oldValue) {
                    changesInFile++;
                }
            } else {
                newTsLines.push(line); // Sin cambio, mantener original
            }

            currentNumero = null;
            continue;
        }

        // ── CASO 2: Archivo NO migrado (tiene texto: sin textoLegal) ──
        const textoMatch = line.match(/^(\s*)texto:\s*(['"`].*?['"`]),?(.*)$/);
        if (textoMatch && currentNumero && !line.includes('textoLegal') && !line.includes('textoResumen')) {
            const indent = textoMatch[1];
            const oldTextoStr = textoMatch[2];
            const trailing = textoMatch[3] || '';

            let isSubAnexo = false;
            let anexoBase = '';
            if (currentNumero.toLowerCase().includes('anexo')) {
                const parts = currentNumero.split('.');
                if (parts.length > 1) {
                    isSubAnexo = true;
                    anexoBase = parts[0].trim();
                }
            }

            let textoLegalStr = null;
            if (isSubAnexo) {
                if (!anexoSubCounter[anexoBase]) {
                    textoLegalStr = resolveTextForNumero(anexoBase, mdBlocks);
                    anexoSubCounter[anexoBase] = true;
                } else {
                    textoLegalStr = "El texto legal íntegro de este anexo se encuentra en el primer apartado superior.";
                }
            } else {
                textoLegalStr = resolveTextForNumero(currentNumero, mdBlocks);
            }

            if (textoLegalStr !== null) {
                newTsLines.push(`${indent}textoLegal: '${textoLegalStr}',`);
            } else {
                newTsLines.push(`${indent}textoLegal: 'Pendiente de integrar texto legal. Revisar archivo de origen.',`);
            }
            newTsLines.push(`${indent}textoResumen: ${oldTextoStr},${trailing}`);
            changesInFile++;
            currentNumero = null;
            continue;
        }

        // ── Línea normal: pasar sin modificar ──
        newTsLines.push(line);
    }

    fs.writeFileSync(tsPath, newTsLines.join('\n'));
    totalChanges += changesInFile;
    console.log(`[OK] ${norm.ts} — ${changesInFile} campos actualizados.`);
}

console.log(`\n✅ Total de campos actualizados: ${totalChanges}`);
