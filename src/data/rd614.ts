import type { Ley } from './types';

export const rd614: Ley = {
  id: 'rd614',
  codigo: 'RD 614/2001',
  titulo: 'Riesgo Eléctrico',
  subtitulo: 'RD 614/2001, disposiciones mínimas de seguridad p. la protección vs Riesgo Eléctrico.',
  fecha: '8 de junio de 2001',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881',
  color: '#eab308',
  icono: '⚡',
  capitulos: [
    {
      id: 'rd614-cap1',
      numero: 'Articulado',
      titulo: 'Disposiciones Generales',
      articulos: [
        {
          id: 'rd614-art1',
          numero: '1 y 2',
          titulo: 'Objeto de la ley y Definiciones',
          texto: 'Protección de los trabajadores frente al riesgo eléctrico en lugares de trabajo, instalaciones y en sus cercanías. Las definiciones técnicas operativas (como Baja o Alta tensión y Trabajador Cualificado) se delegan en el Anexo I.',
          badge: 'tecnico',
          tags: ['riesgo eléctrico', 'ánbito'],
        },
        {
          id: 'rd614-art3',
          numero: '3',
          titulo: 'Obligaciones del empresario relativas al Riesgo Eléctrico',
          texto: 'El empresario deberá cuidar que las instalaciones eléctricas ofrezcan seguridad general (contactos directos e indirectos) y no comporten exposición, prestando especial cuidado al entrono ATEX u otros humedecidos. Deben elegirse herramientas y equipos normativos.',
          badge: 'tecnico',
          tags: ['obligaciones', 'empresario', 'contactos indirectos'],
        },
        {
          id: 'rd614-art4-5',
          numero: '4 y 5',
          titulo: 'Formación y Consulta',
          texto: 'Debe promoverse la información y formación suficiente, debiendo exigirse la capacitación y designación estricta para trabajar en redes, ya sea sin tensión (Anex.II) o en tensión (Anex.III).',
          badge: 'divulgativo',
          tags: ['formación', 'información'],
        },
      ],
    },
    {
      id: 'rd614-anexo1',
      numero: 'Anexo I',
      titulo: 'Definiciones aplicables frente al Riesgo Eléctrico',
      articulos: [
        {
          id: 'rd614-anx1-1',
          numero: 'Anexo I',
          titulo: 'Glosario de riesgo',
          texto: '"Riesgo Eléctrico": Choque, arco eléctrico, quemaduras y explosión. "Trabajador Autorizado": formados y validados; vs "Trabajador Cualificado" (FP Eléctrica o ingenieros especializados). "Tensiones de seguridad": Baja Tension < 1000V AC (1500V DC). Alta Tension > 1000V AC.',
          badge: 'tecnico',
          tags: ['trabajador cualificado', 'arco eléctrico', 'BT', 'AT'],
        },
      ],
    },
    {
      id: 'rd614-anexo2',
      numero: 'Anexo II',
      titulo: 'Trabajos y Procedimientos sin tensión',
      articulos: [
        {
          id: 'rd614-anx2-1',
          numero: 'Anexo II',
          titulo: 'Las 5 Reglas de Oro',
          texto: 'El corte absoluto se basa en cinco normas secuenciales: 1. Desconectar todas las fuentes de tensión. 2. Bloquear y enclavar los aparatos de corte. 3. Verificación de Ausencia de Tensión (VAT). 4. Poner a tierra y en cortocircuito (AT obligatorio, BT a menudo). 5. Señalizar, y proteger frente a los elementos próximos en tensión.',
          badge: 'tecnico',
          tags: ['5 reglas de oro', 'corte visible', 'VAT', 'enclavamiento', 'puesta a tierra'],
        },
      ],
    },
    {
      id: 'rd614-anexo3',
      numero: 'Anexo III',
      titulo: 'Trabajos y Procedimientos en Tensión',
      articulos: [
        {
          id: 'rd614-anx3-1',
          numero: 'Anexo III',
          titulo: 'Medidas en BT y AT en Tensión',
          texto: 'Deben hacerse preferentemente por TRABAJADORES CUALIFICADOS. Se proveerá EPI dieléctrico clase calibrada (guantes y alfombras aislantes en clase 00, 0, 1 etc.), y las herramientas (aisladas o a distancia) se ajustarán al Real Decreto EPI. Todo se basará en Procedimientos estritos escritos.',
          badge: 'tecnico',
          tags: ['trabajos en tensión', 'EPI dieléctrico', 'método estricto'],
        },
      ],
    },
    {
      id: 'rd614-anexo4-5',
      numero: 'Anexo IV y V',
      titulo: 'Maniobras y Trabajos en proximidad',
      articulos: [
        {
          id: 'rd614-anx-prox',
          numero: 'Anexo IV y V',
          titulo: 'Zonas de peligro y distancias de seguridad',
          texto: 'DpeR (Distancia Peligro), DpROX (Distancia Proximidad). Para realizar pintados, limpieza no eléctrica o excavaciones cerca de líneas aéreas (generalmente por no eléctricos Autorizados), se velarán las distancias y si es inevitable que la carga se introduzca, se balizará u ordenarán apagones localizados de las redes de AT de distribución.',
          badge: 'tecnico',
          tags: ['en proximidad', 'zona de peligro', 'líneas aéreas AT'],
        },
      ],
    },
  ],
};
