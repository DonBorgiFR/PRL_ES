import { lprl } from './lprl';
import { rsp } from './rsp';
import { cae } from './cae';
import { construccion } from './construccion';
import { rd486 } from './rd486';
import { referencias } from './referencias';
import { fichas } from './fichas';
import type { Ley } from './types';

export const leyes: Ley[] = [lprl, rsp, cae, construccion, rd486];

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

export function searchAll(query: string, filtros?: { leyId?: string; nivel?: string }) {
  const q = query.toLowerCase().trim();
  if (!q) return { articulos: [], fichas: [] };

  const articulosResult: Array<{
    ley: Ley;
    capituloTitulo: string;
    articulo: (typeof lprl.capitulos)[0]['articulos'][0];
  }> = [];

  const leyesFiltradas = filtros?.leyId
    ? leyes.filter((l) => l.id === filtros.leyId)
    : leyes;

  for (const ley of leyesFiltradas) {
    for (const cap of ley.capitulos) {
      for (const art of cap.articulos) {
        const match =
          art.titulo.toLowerCase().includes(q) ||
          art.texto.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q));
        if (match) {
          articulosResult.push({ ley, capituloTitulo: cap.titulo, articulo: art });
        }
      }
    }
  }

  const fichasFiltradas = fichas.filter((f) => {
    const matchNivel = !filtros?.nivel || f.nivel === filtros.nivel;
    const matchQ =
      f.titulo.toLowerCase().includes(q) ||
      f.objetivo.toLowerCase().includes(q) ||
      f.contenido.some((c) => c.toLowerCase().includes(q));
    return matchNivel && matchQ;
  });

  return { articulos: articulosResult, fichas: fichasFiltradas };
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

export { leyes as default, referencias, fichas, lprl, rsp, cae, construccion, rd486 };
