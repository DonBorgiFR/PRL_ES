export interface IncoopChecklistItem {
  id: string;
  pregunta: string;
  preguntaCa: string;
  justificacion: string;
  justificacionCa: string;
  leyId: string;
  articuloId: string;
}

export interface IncoopService {
  id: string;
  nombre: string;
  nombreCa: string;
  icon: string;
  desc: string;
  descCa: string;
  color: string;
  items: IncoopChecklistItem[];
}

export const incoopServices: IncoopService[] = [
  {
    id: 'escola-bressol',
    nombre: 'Escoles Bressol',
    nombreCa: 'Escoles Bressol',
    icon: '👶',
    desc: 'Prevención en escuelas infantiles municipales (0-3 años). Ergonomía, fluidos y cuidado de la voz.',
    descCa: 'Prevenció en escoles bressol municipals (0-3 anys). Ergonomia, fluids i cura de la veu.',
    color: '#10b981',
    items: [
      {
        id: 'eb-01',
        pregunta: '¿Cambiadores y cunas disponen de alturas ergonómicamente correctas u otros sistemas para evitar sobreesfuerzos lumbares del personal?',
        preguntaCa: '¿Els canviadors i bressols disposen d\'altures ergonòmicament correctes o altres sistemes per evitar sobreesforços lumbars del personal?',
        justificacion: 'RD 486/1997 - Disposiciones mínimas de seguridad en lugares de trabajo.',
        justificacionCa: 'RD 486/1997 - Disposicions mínimes de seguretat als llocs de treball.',
        leyId: 'rd486',
        articuloId: 'rd486-art3'
      },
      {
        id: 'eb-02',
        pregunta: '¿Existe un protocolo activo de desinfección, lavado de manos sistemático y uso de guantes desechables durante el cambio de pañales?',
        preguntaCa: '¿Existeix un protocol actiu de desinfecció, rentat de mans sistemàtic i ús de guants d\'un sol ús durant el canvi de bolquers?',
        justificacion: 'RD 664/1997 - Protección contra la exposición a agentes biológicos durante el trabajo.',
        justificacionCa: 'RD 664/1997 - Protecció contra l\'exposició a agents biològics durant el treball.',
        leyId: 'rd664',
        articuloId: 'rd664-art6'
      },
      {
        id: 'eb-03',
        pregunta: '¿Se imparte formación en cuidado foniátrico y control del ruido ambiental para prevenir nódulos vocales (enfermedad profesional)?',
        preguntaCa: '¿S\'imparteix formació en cura foniàtrica i control del soroll ambiental per prevenir nòduls vocals (malaltia professional)?',
        justificacion: 'RD 1299/2006 - Cuadro de Enfermedades Profesionales en la Seguridad Social.',
        justificacionCa: 'RD 1299/2006 - Quadre de Malalties Professionals a la Seguretat Social.',
        leyId: 'lprl', // Dado que no hay ley directa cargada para rd1299, referenciamos LPRL
        articuloId: 'lprl-art15'
      },
      {
        id: 'eb-04',
        pregunta: '¿El centro dispone de un botiquín con el contenido mínimo reglamentario revisado y reposición de material caducado?',
        preguntaCa: '¿El centre disposa d\'una farmaciola amb el contingut mínim reglamentari revisat i reposició de material caducat?',
        justificacion: 'RD 486/1997 Anexo VI - Disposiciones mínimas para el botiquín de primeros auxilios.',
        justificacionCa: 'RD 486/1997 Annex VI - Disposicions mínimes per a la farmaciola de primers auxilis.',
        leyId: 'rd486',
        articuloId: 'rd486-art3'
      },
      {
        id: 'eb-05',
        pregunta: '¿Se ha integrado el Protocolo de Catástrofes Climáticas y temperaturas extremas según las pautas de emergencia escolar?',
        preguntaCa: '¿S\'ha integrat el Protocol de Catàstrofes Climàtiques i temperatures extremes segons les pautes d\'emergència escolar?',
        justificacion: 'Convenio Colectivo de Centros de Educación Infantil - Disposición Adicional Séptima.',
        justificacionCa: 'Conveni Col·lectiu de Centres d\'Educació Infantil - Disposició Addicional Setena.',
        leyId: 'lprl',
        articuloId: 'lprl-art20'
      }
    ]
  },
  {
    id: 'lleure',
    nombre: 'Lleure Educatiu',
    nombreCa: 'Lleure Educatiu',
    icon: '⛺',
    desc: 'Actividades de tiempo libre, campamentos y dinamización infantil. Gestión psicosocial y CAE.',
    descCa: 'Activitats de lleure, campaments i dinamització infantil. Gestió psicosocial i CAE.',
    color: '#3b82f6',
    items: [
      {
        id: 'll-01',
        pregunta: '¿Se realiza de forma sistemática la evaluación de riesgos psicosociales y estrés laboral para prevenir burnout en equipos de mediación?',
        preguntaCa: '¿Es realitza de forma sistemàtica l\'avaluació de riscs psicosocials i estrès laboral per prevenir burnout en equips de mediació?',
        justificacion: 'Convenio Colectivo del Sector de Lleure Educatiu (Art. 72) y Reglamento de los Servicios de Prevención.',
        justificacionCa: 'Conveni Col·lectiu del Sector de Lleure Educatiu (Art. 72) i Reglament dels Serveis de Prevenió.',
        leyId: 'rsp',
        articuloId: 'rsp-art3'
      },
      {
        id: 'll-02',
        pregunta: '¿Se lleva a cabo la Coordinación de Actividades Empresariales (CAE) con los ayuntamientos titulares de las instalaciones públicas?',
        preguntaCa: '¿Es duu a terme la Coordinació d\'Activitats Empresarials (CAE) amb els ajuntaments titulars de les instal·lacions públiques?',
        justificacion: 'LPRL Art. 24 - Coordinación de actividades empresariales en centros de trabajo concurrentes.',
        justificacionCa: 'LPRL Art. 24 - Coordinació d\'activitats empresarials en centres de treball concurrents.',
        leyId: 'cae',
        articuloId: 'cae-art4'
      },
      {
        id: 'll-03',
        pregunta: '¿Disponen las salidas, campamentos y actividades de exterior de un plan de emergencias con asignación de responsables y botiquín móvil?',
        preguntaCa: '¿Disposen les sortides, campaments i activitats d\'exterior d\'un pla d\'emergències amb assignació de responsables i farmaciola mòbil?',
        justificacion: 'LPRL Art. 20 - Medidas de emergencia, primeros auxilios y evacuación de grupos.',
        justificacionCa: 'LPRL Art. 20 - Mesures d\'emergència, primers auxilis i evacuació de grups.',
        leyId: 'lprl',
        articuloId: 'lprl-art20'
      },
      {
        id: 'll-04',
        pregunta: '¿Se garantiza que la formación preventiva obligatoria se imparte preferentemente dentro del horario laboral o compensada con descanso?',
        preguntaCa: '¿Es garanteix que la formació preventiva obligatòria s\'imparteix preferentment dins de l\'horari laboral o compensada amb descans?',
        justificacion: 'Convenio Colectivo del Sector de Lleure Educatiu (Art. 71) y LPRL Art. 19.',
        justificacionCa: 'Conveni Col·lectiu del Sector de Lleure Educatiu (Art. 71) i LPRL Art. 19.',
        leyId: 'lprl',
        articuloId: 'lprl-art19'
      }
    ]
  },
  {
    id: 'gent-gran',
    nombre: 'Gent Gran / Dependencia',
    nombreCa: 'Gent Gran / Dependència',
    icon: '👵',
    desc: 'Casals de gent gran, residencias y servicios de día. Transferencias físicas y prevención de caídas.',
    descCa: 'Casals de gent gran, residències i serveis de dia. Transferències físiques i prevenció de caigudes.',
    color: '#f59e0b',
    items: [
      {
        id: 'gg-01',
        pregunta: '¿Cuenta el personal con ayudas mecánicas (grúas de bipedestación/traslado) o formación práctica para la movilización de usuarios?',
        preguntaCa: '¿Compta el personal amb ajudes mecàniques (grues de bipedestació/trasllat) o formació pràctica per a la mobilització d\'usuaris?',
        justificacion: 'RD 487/1997 - Disposiciones mínimas de seguridad relativas a la manipulación manual de cargas.',
        justificacionCa: 'RD 487/1997 - Disposicions mínimes de seguretat relatives a la manipulació manual de càrregues.',
        leyId: 'rd487',
        articuloId: 'rd487-art3'
      },
      {
        id: 'gg-02',
        pregunta: '¿Está actualizado el plan de emergencia contemplando las dificultades de evacuación de personas con movilidad reducida?',
        preguntaCa: '¿Està actualitzat el pla d\'emergència contemplant les dificultats d\'evacuació de persones amb mobilitat reduïda?',
        justificacion: 'LPRL Art. 20 - Medidas de emergencia, designación de personal y coordinación externa.',
        justificacionCa: 'LPRL Art. 20 - Mesures d\'emergència, designació de personal i coordinació externa.',
        leyId: 'lprl',
        articuloId: 'lprl-art20'
      },
      {
        id: 'gg-03',
        pregunta: '¿Se aplican límites de carga específicos (máximo 25 kg en general o 15 kg para mayor protección) en las cocinas y almacenes del centro?',
        preguntaCa: '¿S\'apliquen límits de càrrega específics (màxim 25 kg en general o 15 kg per a major protecció) a les cuines i magatzems del centre?',
        justificacion: 'RD 487/1997 - Límites de peso recomendados por la guía técnica del INSST.',
        justificacionCa: 'RD 487/1997 - Límits de pes recomanats per la guia tècnica de l\'INSST.',
        leyId: 'rd487',
        articuloId: 'rd487-art3'
      },
      {
        id: 'gg-04',
        pregunta: '¿Los pasillos, accesos y zonas de baño disponen de pavimentos antideslizantes, asideros adecuados y libres de obstáculos?',
        preguntaCa: '¿Els passadissos, accessos i zones de bany disposen de paviments antideslliscants, agafadors adequats i lliures d\'obstacles?',
        justificacion: 'RD 486/1997 - Condiciones de seguridad en los pavimentos, rampas y escaleras.',
        justificacionCa: 'RD 486/1997 - Condicions de seguretat als paviments, rampa i escales.',
        leyId: 'rd486',
        articuloId: 'rd486-art3'
      }
    ]
  }
];
