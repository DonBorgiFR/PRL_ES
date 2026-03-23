import type { ReferenciaCruzada } from './types';

// ============================================================
// 12 Referencias Cruzadas entre normativas PRL
// ============================================================

export const referencias: ReferenciaCruzada[] = [
  {
    id: 'ref-01',
    origen: { leyId: 'lprl', articuloId: 'lprl-art24', label: 'LPRL Art. 24' },
    destino: { leyId: 'cae', articuloId: 'cae-art3', label: 'RD 171/2004 Art. 3' },
    descripcion: 'El art. 24 LPRL establece el deber de coordinación. El RD 171/2004 desarrolla en detalle cómo se articula esa coordinación entre empresas concurrentes.',
    tipo: 'desarrollo',
  },
  {
    id: 'ref-02',
    origen: { leyId: 'lprl', articuloId: 'lprl-art16', label: 'LPRL Art. 16' },
    destino: { leyId: 'rsp', articuloId: 'rsp-art3', label: 'RSP Art. 3' },
    descripcion: 'El art. 16 LPRL obliga al empresario a realizar la evaluación de riesgos. El RSP art. 3 define con precisión qué es esta evaluación y cómo debe desarrollarse.',
    tipo: 'desarrollo',
  },
  {
    id: 'ref-03',
    origen: { leyId: 'lprl', articuloId: 'lprl-art30', label: 'LPRL Art. 30' },
    destino: { leyId: 'rsp', articuloId: 'rsp-art10', label: 'RSP Art. 10' },
    descripcion: 'El art. 30 LPRL establece la obligación de organizar la actividad preventiva. El RSP art. 10 describe las cuatro modalidades posibles de organización.',
    tipo: 'desarrollo',
  },
  {
    id: 'ref-04',
    origen: { leyId: 'lprl', articuloId: 'lprl-art31', label: 'LPRL Art. 31' },
    destino: { leyId: 'rsp', articuloId: 'rsp-art14', label: 'RSP Art. 14' },
    descripcion: 'El art. 31 LPRL regula los servicios de prevención. El RSP art. 14 especifica cuándo es obligatorio constituir un Servicio de Prevención Propio (SPP).',
    tipo: 'especificacion',
  },
  {
    id: 'ref-05',
    origen: { leyId: 'lprl', articuloId: 'lprl-art19', label: 'LPRL Art. 19' },
    destino: { leyId: 'rsp', articuloId: 'rsp-art34', label: 'RSP Art. 34' },
    descripcion: 'El art. 19 LPRL obliga al empresario a garantizar formación. El RSP art. 34 define los tres niveles de capacitación preventiva (básico, intermedio, superior).',
    tipo: 'desarrollo',
  },
  {
    id: 'ref-06',
    origen: { leyId: 'cae', articuloId: 'cae-art7', label: 'CAE Art. 7' },
    destino: { leyId: 'lprl', articuloId: 'lprl-art24', label: 'LPRL Art. 24' },
    descripcion: 'El art. 7 CAE regula las obligaciones del empresario principal, quien debe vigilar el cumplimiento preventivo de sus contratistas, basándose en el deber del art. 24 LPRL.',
    tipo: 'complemento',
  },
  {
    id: 'ref-07',
    origen: { leyId: 'construccion', articuloId: 'const-art7', label: 'RD 1627 Art. 7' },
    destino: { leyId: 'lprl', articuloId: 'lprl-art15', label: 'LPRL Art. 15' },
    descripcion: 'El Plan de Seguridad y Salud en obra debe recoger los principios de acción preventiva del art. 15 LPRL y adaptarlos al sistema de ejecución del contratista.',
    tipo: 'especificacion',
  },
  {
    id: 'ref-08',
    origen: { leyId: 'construccion', articuloId: 'const-art9', label: 'RD 1627 Art. 9' },
    destino: { leyId: 'cae', articuloId: 'cae-art11', label: 'CAE Art. 11' },
    descripcion: 'El coordinador de seguridad en obra ejerce funciones de coordinación muy similares a las descritas en el CAE. El RD 1627 es la norma específica para construcción.',
    tipo: 'complemento',
  },
  {
    id: 'ref-09',
    origen: { leyId: 'lprl', articuloId: 'lprl-art22', label: 'LPRL Art. 22' },
    destino: { leyId: 'rsp', articuloId: 'rsp-art6', label: 'RSP Art. 6' },
    descripcion: 'La vigilancia de la salud (art. 22 LPRL) debe planificarse como parte de la Planificación de la Actividad Preventiva que regula el RSP en su art. 6.',
    tipo: 'complemento',
  },
  {
    id: 'ref-10',
    origen: { leyId: 'rsp', articuloId: 'rsp-art24', label: 'RSP Art. 24' },
    destino: { leyId: 'lprl', articuloId: 'lprl-art23', label: 'LPRL Art. 23' },
    descripcion: 'La auditoría del sistema de prevención (RSP art. 24) es un mecanismo de control que refuerza la obligación de documentación del art. 23 LPRL.',
    tipo: 'complemento',
  },
  {
    id: 'ref-11',
    origen: { leyId: 'lprl', articuloId: 'lprl-art38', label: 'LPRL Art. 38' },
    destino: { leyId: 'lprl', articuloId: 'lprl-art35', label: 'LPRL Art. 35' },
    descripcion: 'El Comité de Seguridad y Salud (art. 38 LPRL) está compuesto por los Delegados de Prevención (art. 35 LPRL) y representantes del empresario a partes iguales.',
    tipo: 'complemento',
  },
  {
    id: 'ref-12',
    origen: { leyId: 'construccion', articuloId: 'const-art5', label: 'RD 1627 Art. 5' },
    destino: { leyId: 'cae', articuloId: 'cae-art5', label: 'CAE Art. 5' },
    descripcion: 'El ESS en obras (RD 1627) y la información sobre riesgos del centro (CAE art. 5) son instrumentos complementarios: el primero es documental y preventivo, el segundo es informativo y dinámico.',
    tipo: 'complemento',
  },
  {
    id: 'ref-13',
    origen: { leyId: 'lprl', articuloId: 'lprl-art15', label: 'LPRL Art. 15' },
    destino: { leyId: 'rd486', articuloId: 'rd486-art3', label: 'RD 486/1997 Art. 3' },
    descripcion: 'Los principios de acción preventiva del art. 15 LPRL (combatir riesgos en origen, adaptar el trabajo a la persona) se materializan en las obligaciones concretas del art. 3 RD 486/1997 para cada lugar de trabajo.',
    tipo: 'especificacion',
  },
  {
    id: 'ref-14',
    origen: { leyId: 'lprl', articuloId: 'lprl-art16', label: 'LPRL Art. 16' },
    destino: { leyId: 'rd486', articuloId: 'rd486-anexo4', label: 'RD 486/1997 Anexo IV' },
    descripcion: 'La evaluación de riesgos del art. 16 LPRL debe incluir la verificación de los niveles mínimos de iluminación definidos en el Anexo IV del RD 486/1997 para cada tipo de tarea y zona de trabajo.',
    tipo: 'complemento',
  },
  {
    id: 'ref-15',
    origen: { leyId: 'rsp', articuloId: 'rsp-art4', label: 'RSP Art. 4' },
    destino: { leyId: 'rd486', articuloId: 'rd486-anexo3', label: 'RD 486/1997 Anexo III' },
    descripcion: 'El contenido de la evaluación inicial de riesgos (RSP art. 4) debe abarcar las condiciones ambientales del puesto: temperatura, humedad y ruido regulados en el Anexo III del RD 486/1997.',
    tipo: 'complemento',
  },
  {
    id: 'ref-16',
    origen: { leyId: 'rsp', articuloId: 'rsp-art6', label: 'RSP Art. 6' },
    destino: { leyId: 'rd486', articuloId: 'rd486-carga-manual', label: 'RD 486/1997 Anexo V' },
    descripcion: 'La planificación de la actividad preventiva (RSP art. 6) debe recoger las medidas específicas para la manipulación manual de cargas del Anexo V del RD 486/1997 cuando exista riesgo dorso-lumbar identificado.',
    tipo: 'especificacion',
  },
  {
    id: 'ref-17',
    origen: { leyId: 'lprl', articuloId: 'lprl-art22', label: 'LPRL Art. 22' },
    destino: { leyId: 'rd486', articuloId: 'rd486-ruido', label: 'RD 486/1997 Anexo III.B' },
    descripcion: 'La vigilancia de la salud (art. 22 LPRL) debe incluir control auditivo cuando la evaluación del lugar de trabajo detecte niveles de ruido superiores a 80 dB(A) conforme al Anexo III.B del RD 486/1997.',
    tipo: 'complemento',
  },
];
