import { lprl } from './lprl';
import { rsp } from './rsp';
import { cae } from './cae';
import { construccion } from './construccion';
import { rd486 } from './rd486';
import { rd614 } from './rd614';
import { rd1215 } from './rd1215';
import { rd773 } from './rd773';
import { referencias } from './referencias';
import { fichas } from './fichas';
import { rolesData } from './rolesData';
import { documentosData } from './documentosData';
import type { Ley } from './types';

export const leyes: Ley[] = [lprl, rsp, cae, construccion, rd486, rd614, rd1215, rd773];

export function getLeyById(id: string): Ley | undefined {
  return leyes.find((l) => l.id === id);
}

export function getArticuloById(leyId: string, articuloId: string) {
  const ley = getLeyById(leyId);
  for (const cap of ley?.capitulos ?? []) {
    const art = cap.articulos.find((a) => a.id === articuloId);
    if (art) return { ley, capitulo: cap, articulo: art };
  }
  return null;
}

type SearchConfidence = 'alta' | 'media' | 'baja';

type SearchSuggestion = {
  label: string;
  query: string;
  leyId?: string;
};

type SearchInsights = {
  intentId: string;
  intentLabel: string;
  confidence: SearchConfidence;
  explanation: string;
  expandedTerms: string[];
  suggestedLeyes: string[];
  suggestions: SearchSuggestion[];
};

type SearchResult = {
  articulos: Array<{
    ley: Ley;
    capituloTitulo: string;
    articulo: (typeof lprl.capitulos)[0]['articulos'][0];
  }>;
  fichas: typeof fichas;
  insights: SearchInsights | null;
};

type IntentRule = {
  id: string;
  label: string;
  keywords: string[];
  leyHints: string[];
  expandTerms: string[];
  suggestions: SearchSuggestion[];
};

const INTENT_RULES: IntentRule[] = [
  {
    id: 'obligaciones',
    label: 'Obligaciones legales',
    keywords: ['obligacion', 'obligaciones', 'debe', 'deber', 'responsable', 'empresa', 'empresario'],
    leyHints: ['lprl', 'rsp'],
    expandTerms: ['obligaciones empresariales', 'evaluacion de riesgos', 'planificacion preventiva'],
    suggestions: [
      { label: 'Obligaciones del empresario', query: 'obligaciones empresario' },
      { label: 'Evaluacion inicial de riesgos', query: 'evaluacion inicial de riesgos' },
      { label: 'Organizacion preventiva', query: 'organizacion preventiva' },
    ],
  },
  {
    id: 'auditoria',
    label: 'Auditoria y verificacion',
    keywords: ['auditoria', 'verificacion', 'checklist', 'inspeccion', 'incumplimiento', 'subsanacion'],
    leyHints: ['rsp', 'lprl'],
    expandTerms: ['auditoria del sistema', 'evidencia documental', 'requisitos normativos'],
    suggestions: [
      { label: 'Checklist de cumplimiento', query: 'checklist cumplimiento normativo' },
      { label: 'Auditoria del sistema preventivo', query: 'auditoria sistema de prevencion' },
      { label: 'Documentacion obligatoria', query: 'documentacion obligatoria prevencion' },
    ],
  },
  {
    id: 'formacion',
    label: 'Formacion y capacitacion',
    keywords: ['formacion', 'capacitacion', 'curso', 'induccion', 'aprendizaje', 'ficha'],
    leyHints: ['lprl', 'rsp'],
    expandTerms: ['fichas formativas', 'nivel basico', 'nivel intermedio', 'nivel avanzado'],
    suggestions: [
      { label: 'Formacion obligatoria PRL', query: 'formacion obligatoria prl' },
      { label: 'Fichas para mandos intermedios', query: 'fichas mando intermedio' },
      { label: 'Capacitacion por niveles', query: 'fichas capacitacion niveles' },
    ],
  },
  {
    id: 'cae',
    label: 'Coordinacion de actividades empresariales',
    keywords: ['cae', 'coordinacion', 'contrata', 'subcontrata', 'concurrencia', 'empresarial'],
    leyHints: ['cae', 'lprl'],
    expandTerms: ['lprl art 24', 'rd 171 2004', 'informacion entre empresas'],
    suggestions: [
      { label: 'Ver normativa CAE', query: 'coordinacion de actividades empresariales', leyId: 'cae' },
      { label: 'Obligaciones empresario principal', query: 'obligaciones empresario principal cae' },
      { label: 'Intercambio de informacion preventiva', query: 'informacion preventiva entre empresas' },
    ],
  },
  {
    id: 'construccion',
    label: 'Seguridad en construccion',
    keywords: ['obra', 'construccion', 'coordinador', 'ess', 'pss', 'andamio'],
    leyHints: ['construccion', 'cae'],
    expandTerms: ['rd 1627 1997', 'plan de seguridad y salud', 'coordinador de seguridad'],
    suggestions: [
      { label: 'Plan de seguridad y salud', query: 'plan de seguridad y salud obra', leyId: 'construccion' },
      { label: 'Funciones del coordinador', query: 'funciones coordinador seguridad obra', leyId: 'construccion' },
      { label: 'CAE en obras', query: 'coordinacion actividades empresariales en obra', leyId: 'cae' },
    ],
  },
  {
    id: 'tecnico-especifico',
    label: 'Normativa tecnica especifica',
    keywords: ['epi', 'electrico', 'equipo', 'maquina', 'lugar de trabajo', 'iluminacion', 'ruido', 'temperatura'],
    leyHints: ['rd773', 'rd614', 'rd1215', 'rd486'],
    expandTerms: ['rd 773 1997', 'rd 614 2001', 'rd 1215 1997', 'rd 486 1997'],
    suggestions: [
      { label: 'EPI: seleccion y uso', query: 'epi seleccion uso mantenimiento', leyId: 'rd773' },
      { label: 'Riesgo electrico', query: 'riesgo electrico trabajos con electricidad', leyId: 'rd614' },
      { label: 'Equipos de trabajo', query: 'equipos de trabajo requisitos seguridad', leyId: 'rd1215' },
      { label: 'Condiciones del lugar de trabajo', query: 'condiciones lugar de trabajo iluminacion ruido', leyId: 'rd486' },
    ],
  },
];

const SYNONYM_MAP: Record<string, string[]> = {
  evaluacion: ['evaluacion de riesgos', 'planificacion preventiva'],
  riesgos: ['evaluacion de riesgos', 'medidas preventivas'],
  cae: ['coordinacion de actividades empresariales', 'concurrencia de empresas'],
  auditoria: ['checklist', 'verificacion de cumplimiento'],
  formacion: ['fichas formativas', 'capacitacion'],
  epi: ['equipos de proteccion individual', 'rd 773 1997'],
  electrico: ['rd 614 2001', 'regla de oro'],
  equipos: ['rd 1215 1997', 'maquinas y herramientas'],
  iluminacion: ['rd 486 1997 anexo iv', 'condiciones del puesto'],
  ruido: ['rd 486 1997 anexo iii', 'condiciones ambientales'],
  construccion: ['rd 1627 1997', 'plan de seguridad y salud'],
};

const LEY_KEYWORDS: Array<{ leyId: string; keywords: string[] }> = [
  { leyId: 'lprl', keywords: ['lprl', 'ley 31/1995', 'ley 31'] },
  { leyId: 'rsp', keywords: ['rsp', 'rd 39/1997', 'servicio de prevencion'] },
  { leyId: 'cae', keywords: ['cae', 'rd 171/2004', 'coordinacion de actividades'] },
  { leyId: 'construccion', keywords: ['construccion', 'rd 1627/1997', 'obra'] },
  { leyId: 'rd486', keywords: ['rd486', 'rd 486/1997', 'lugar de trabajo', 'iluminacion', 'ruido'] },
  { leyId: 'rd614', keywords: ['rd614', 'rd 614/2001', 'riesgo electrico', 'electrico'] },
  { leyId: 'rd1215', keywords: ['rd1215', 'rd 1215/1997', 'equipos de trabajo', 'maquinas'] },
  { leyId: 'rd773', keywords: ['rd773', 'rd 773/1997', 'epi', 'equipo de proteccion individual'] },
];

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function tokenize(value: string) {
  return normalizeText(value)
    .split(/[^a-z0-9]+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 3);
}

function uniqueStrings(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function detectIntent(normalizedQuery: string, tokens: string[]) {
  let selected: IntentRule | null = null;
  let bestScore = 0;

  for (const rule of INTENT_RULES) {
    let score = 0;
    for (const keyword of rule.keywords) {
      const nKeyword = normalizeText(keyword);
      if (normalizedQuery.includes(nKeyword)) score += 2;
      if (tokens.includes(nKeyword)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      selected = rule;
    }
  }

  if (!selected || bestScore === 0) return null;

  const confidence: SearchConfidence =
    bestScore >= 5 ? 'alta' : bestScore >= 3 ? 'media' : 'baja';

  return { selected, confidence, score: bestScore };
}

function detectLeyHints(normalizedQuery: string, intent: IntentRule | null) {
  const detectedByQuery: string[] = [];
  for (const entry of LEY_KEYWORDS) {
    if (entry.keywords.some((keyword) => normalizedQuery.includes(normalizeText(keyword)))) {
      detectedByQuery.push(entry.leyId);
    }
  }
  return uniqueStrings([...(intent?.leyHints ?? []), ...detectedByQuery]);
}

function buildExpandedTerms(tokens: string[], intent: IntentRule | null) {
  const expanded: string[] = [];

  for (const token of tokens) {
    expanded.push(token);
    if (SYNONYM_MAP[token]) {
      expanded.push(...SYNONYM_MAP[token]);
    }
  }

  if (intent) {
    expanded.push(...intent.expandTerms);
  }

  return uniqueStrings(expanded.map((value) => normalizeText(value))).slice(0, 14);
}

function scoreArticulo(
  articulo: (typeof lprl.capitulos)[0]['articulos'][0],
  ley: Ley,
  normalizedQuery: string,
  tokens: string[],
  expandedTerms: string[],
  hintedLeyes: string[],
) {
  const title = normalizeText(articulo.titulo);
  const text = normalizeText(articulo.texto);
  const tags = articulo.tags.map((tag) => normalizeText(tag));

  let score = 0;

  if (title.includes(normalizedQuery)) score += 130;
  if (tags.some((tag) => tag.includes(normalizedQuery))) score += 110;
  if (text.includes(normalizedQuery)) score += 38;

  for (const token of tokens) {
    if (title.includes(token)) score += 24;
    if (tags.some((tag) => tag.includes(token))) score += 19;
    if (text.includes(token)) score += 8;
  }

  for (const term of expandedTerms) {
    if (title.includes(term)) score += 11;
    if (tags.some((tag) => tag.includes(term))) score += 9;
    if (text.includes(term)) score += 4;
  }

  if (hintedLeyes.includes(ley.id)) score += 24;
  if (articulo.badge === 'tecnico') score += 4;

  return score;
}

function scoreFicha(
  ficha: (typeof fichas)[0],
  normalizedQuery: string,
  tokens: string[],
  expandedTerms: string[],
  hintedLeyes: string[],
) {
  const title = normalizeText(ficha.titulo);
  const objective = normalizeText(ficha.objetivo);
  const content = ficha.contenido.map((line) => normalizeText(line));
  const relatedNormative = ficha.normativaRelacionada.map((item) => normalizeText(item));
  const collective = normalizeText(ficha.colectivo);

  let score = 0;

  if (title.includes(normalizedQuery)) score += 95;
  if (objective.includes(normalizedQuery)) score += 52;
  if (content.some((line) => line.includes(normalizedQuery))) score += 35;
  if (relatedNormative.some((norm) => norm.includes(normalizedQuery))) score += 44;

  for (const token of tokens) {
    if (title.includes(token)) score += 21;
    if (objective.includes(token)) score += 11;
    if (content.some((line) => line.includes(token))) score += 8;
    if (relatedNormative.some((norm) => norm.includes(token))) score += 10;
    if (collective.includes(token)) score += 7;
  }

  for (const term of expandedTerms) {
    if (title.includes(term)) score += 8;
    if (objective.includes(term)) score += 6;
    if (content.some((line) => line.includes(term))) score += 4;
    if (relatedNormative.some((norm) => norm.includes(term))) score += 6;
  }

  if (
    hintedLeyes.length > 0 &&
    hintedLeyes.some((leyId) => relatedNormative.some((norm) => norm.includes(leyId)))
  ) {
    score += 13;
  }

  return score;
}

export function intelligentSearch(query: string, filtros?: { leyId?: string; nivel?: string }): SearchResult {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return { articulos: [], fichas: [], insights: null };
  }

  const tokens = tokenize(normalizedQuery);
  const intentMatch = detectIntent(normalizedQuery, tokens);
  const intent = intentMatch?.selected ?? null;
  const hintedLeyes = detectLeyHints(normalizedQuery, intent);
  const expandedTerms = buildExpandedTerms(tokens, intent);

  const leyesFiltradas = filtros?.leyId
    ? leyes.filter((l) => l.id === filtros.leyId)
    : leyes;

  const rankedArticulos: Array<{
    ley: Ley;
    capituloTitulo: string;
    articulo: (typeof lprl.capitulos)[0]['articulos'][0];
    score: number;
  }> = [];

  for (const ley of leyesFiltradas) {
    for (const cap of ley.capitulos) {
      for (const art of cap.articulos) {
        const score = scoreArticulo(art, ley, normalizedQuery, tokens, expandedTerms, hintedLeyes);
        if (score > 0) {
          rankedArticulos.push({ ley, capituloTitulo: cap.titulo, articulo: art, score });
        }
      }
    }
  }

  const rankedFichas = fichas
    .filter((ficha) => !filtros?.nivel || ficha.nivel === filtros.nivel)
    .map((ficha) => ({
      ficha,
      score: scoreFicha(ficha, normalizedQuery, tokens, expandedTerms, hintedLeyes),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.ficha);

  rankedArticulos.sort((a, b) => b.score - a.score);

  const insights: SearchInsights = {
    intentId: intent?.id ?? 'general',
    intentLabel: intent?.label ?? 'Busqueda general en normativa y fichas',
    confidence: intentMatch?.confidence ?? 'baja',
    explanation: intent
      ? `Se prioriza ${intent.label.toLowerCase()} usando coincidencias en titulo, tags y normativa relacionada.`
      : 'No se detecto una intencion fuerte; se aplica ranking general por coincidencias en titulo, tags y contenido.',
    expandedTerms: expandedTerms.slice(0, 8),
    suggestedLeyes: hintedLeyes,
    suggestions: (intent?.suggestions ?? []).slice(0, 4),
  };

  return {
    articulos: rankedArticulos.map(({ score: _score, ...rest }) => rest),
    fichas: rankedFichas,
    insights,
  };
}

export function searchAll(query: string, filtros?: { leyId?: string; nivel?: string }) {
  const smart = intelligentSearch(query, filtros);
  return { articulos: smart.articulos, fichas: smart.fichas };
}

export function buildNormativeContext(query: string, maxArticles = 6, maxFichas = 3) {
  const results = searchAll(query);
  const articleLines = results.articulos.slice(0, maxArticles).map((res) => {
    const text = res.articulo.texto.length > 420
      ? `${res.articulo.texto.slice(0, 420)}...`
      : res.articulo.texto;
    return `- [${res.ley.codigo} · Art. ${res.articulo.numero}] ${res.articulo.titulo}: ${text}`;
  });

  const fichaLines = results.fichas.slice(0, maxFichas).map((f) => {
    const objetivo = f.objetivo.length > 220
      ? `${f.objetivo.slice(0, 220)}...`
      : f.objetivo;
    return `- [${f.titulo} · ${f.nivel}] ${objetivo}`;
  });

  return {
    contextText: [
      articleLines.length ? 'ARTICULOS RELEVANTES:' : '',
      ...articleLines,
      fichaLines.length ? 'FICHAS RELACIONADAS:' : '',
      ...fichaLines,
    ].filter(Boolean).join('\n'),
    articleMatches: results.articulos.length,
    fichaMatches: results.fichas.length,
  };
}

export { leyes as default, referencias, fichas, lprl, rsp, cae, construccion, rd486, rd614, rd1215, rd773, rolesData, documentosData };
