import type { Language } from '../i18n';
import type { FichaCapacitacion, ReferenciaCruzada, RoleObligation } from './types';

type NonSpanishLanguage = Exclude<Language, 'es'>;

type FichaOverride = Pick<FichaCapacitacion, 'titulo' | 'colectivo' | 'objetivo'> & {
  contenido?: string[];
};

const fichaOverrides: Record<NonSpanishLanguage, Record<string, FichaOverride>> = {
  ca: {
    'ficha-01': {
      titulo: 'Fonaments de la Prevenció de Riscos Laborals',
      colectivo: 'Tots els treballadors',
      objetivo: 'Comprendre el marc legal bàsic de la PRL, els conceptes fonamentals i la importància de la prevenció en l\'entorn de treball.',
      contenido: [
        'Marc normatiu: Llei 31/1995 LPRL — objecte i àmbit d\'aplicació',
        'Conceptes bàsics: risc, perill, dany, prevenció',
        'Obligacions de l\'empresa: deure de garantir la seguretat',
        'Principis de l\'acció preventiva (art. 15 LPRL): 9 principis jeràrquics',
        'Pla de Prevenció i Avaluació de Riscos: què són i per a què serveixen',
        'Riscos més freqüents al treball: caigudes, cops, sobreesforços, contactes elèctrics',
      ],
    },
    'ficha-02': {
      titulo: 'Drets i Obligacions en Matèria de PRL',
      colectivo: 'Tots els treballadors',
      objetivo: 'Conèixer els drets dels treballadors en seguretat i salut, així com les seves obligacions i les de l\'empresa.',
      contenido: [
        'Dret a la protecció eficaç (art. 14 LPRL): implicacions per a l\'empresa',
        'Obligacions dels treballadors (art. 29 LPRL): ús correcte d\'equips i EPI',
        'Dret a la informació: riscos del lloc i mesures preventives',
        'Dret a la formació (art. 19): teoria i pràctica dins la jornada',
        'Dret a paralitzar la feina davant risc greu i imminent (art. 21)',
        'Dret a la vigilància de la salut (art. 22): caràcter voluntari i excepcions',
      ],
    },
    'ficha-03': {
      titulo: 'Participació dels Treballadors en PRL',
      colectivo: 'Treballadors i representants',
      objetivo: 'Entendre els mecanismes de participació i representació en PRL: delegats de prevenció i Comitè de Seguretat i Salut.',
      contenido: [
        'Dret de participació i representació (art. 34 LPRL)',
        'Delegats de Prevenció: qui són, designació i nombre corresponent',
        'Competències dels Delegats de Prevenció (art. 36): inspecció, propostes, informació',
        'Comitè de Seguretat i Salut: composició paritària, 50+ treballadors',
        'Consulta obligatòria abans de decisions (art. 33 LPRL)',
        'Garanties i deure de sigil professional dels representants',
      ],
    },
    'ficha-04': {
      titulo: 'Avaluació de Riscos Laborals',
      colectivo: 'Tècnics i comandaments intermedis',
      objetivo: 'Dominar el procés d\'avaluació de riscos laborals, les metodologies aplicables i el contingut documental mínim requerit.',
      contenido: [
        'Procés d\'avaluació: definició segons RSP art. 3',
        'Avaluació inicial versus revisió periòdica: quan revisar',
        'Identificació de perills per lloc de treball',
        'Estimació del risc: probabilitat × conseqüència',
        'Criteris de valoració: trivial, tolerable, moderat, important, intolerable',
        'Documentació de l\'avaluació: contingut mínim segons art. 23 LPRL',
        'Planificació derivada: mesures correctores amb termini, responsable i recursos',
      ],
    },
    'ficha-05': {
      titulo: 'Organització de la Prevenció a l\'Empresa',
      colectivo: 'Tècnics i responsables de PRL',
      objetivo: 'Conèixer les modalitats d\'organització preventiva, els requisits legals i quan és obligatòria cadascuna.',
      contenido: [
        'Modalitats d\'organització preventiva (RSP art. 10): 4 opcions',
        'Assumpció personal per l\'empresari: fins a 10 treballadors, sense activitats de l\'Annex I',
        'Treballadors designats: capacitació mínima requerida i incompatibilitats',
        'Servei de Prevenció Propi (SPP): quan és obligatori i especialitats requerides',
        'Servei de Prevenció Aliè (SPA): concert, seguiment i acreditació',
        'Servei de Prevenció Mancomunat: sectors i grups empresarials',
        'Auditories internes del sistema preventiu: periodicitat i abast',
      ],
    },
    'ficha-06': {
      titulo: 'Protecció de Col·lectius Especialment Sensibles',
      colectivo: 'RRHH, comandaments i tècnics PRL',
      objetivo: 'Conèixer les mesures específiques de protecció per a treballadors amb especial vulnerabilitat: embarassades, menors i persones amb discapacitat.',
      contenido: [
        'Treballadors especialment sensibles (art. 25 LPRL): avaluació adaptada',
        'Protecció de la maternitat (art. 26): avaluació d\'agents de risc durant l\'embaràs',
        'Suspensió de contracte per risc durant l\'embaràs: requisits i procediment',
        'Protecció dels menors de 18 anys (art. 27): avaluació prèvia a l\'inici',
        'Treballadors temporals i ETT (art. 28): igualtat en protecció',
        'Adaptació del lloc versus canvi de lloc: criteris de prioritat',
      ],
    },
    'ficha-07': {
      titulo: 'Coordinació d\'Activitats Empresarials (CAE)',
      colectivo: 'Tècnics PRL, coordinadors, contractes',
      objetivo: 'Aplicar correctament el RD 171/2004 en situacions de concurrència empresarial: deures, documentació i instruments de coordinació.',
      contenido: [
        'Àmbit d\'aplicació: quan hi ha concurrència empresarial',
        'Deure de cooperació: informació recíproca de riscos específics',
        'Empresari titular: informació i instruccions abans de l\'inici',
        'Empresari principal: vigilància del compliment de contractes i subcontractes',
        'Documentació CAE: què s\'ha d\'intercanviar i quan actualitzar',
        'Mitjans de coordinació: reunions, intercanvi documental, instruccions conjuntes',
        'Coordinador d\'Activitats Preventives: designació, funcions i perfil',
        'Plataformes CAE: ús de sistemes informatitzats de gestió documental',
      ],
    },
    'ficha-08': {
      titulo: 'Seguretat en Obres de Construcció',
      colectivo: 'Tècnics PRL construcció, coordinadors CSS',
      objetivo: 'Conèixer les obligacions específiques del sector construcció: ESS/EBSS, PSS, coordinació de SST i deures de tots els agents.',
      contenido: [
        'Promotor: quan ha d\'elaborar ESS o EBSS (llindars art. 5)',
        'Contingut de l\'Estudi de Seguretat i Salut: memòries, plànols, plec, pressupost',
        'Estudi Bàsic: obres menors i contingut simplificat',
        'Pla de Seguretat i Salut del contractista (art. 7): aprovació pel CSS',
        'Coordinador de disseny vs execució: diferències i designació',
        'Funcions del Coordinador de SST durant l\'execució (art. 9)',
        'Llibre d\'Incidències: ús obligatori, qui pot anotar i destinataris',
        'Obligacions de contractistes, subcontractistes i autònoms',
        'Avís previ a l\'autoritat laboral',
      ],
    },
    'ficha-09': {
      titulo: 'Règim Sancionador en PRL',
      colectivo: 'Responsables d\'empresa, tècnics PRL, RRHH',
      objetivo: 'Conèixer el règim sancionador de la LPRL: tipus d\'infraccions, quanties de sanció i responsabilitats concurrents.',
      contenido: [
        'Tipus de responsabilitats: administrativa, penal i civil (art. 42 LPRL)',
        'Infraccions lleus: exemples i quanties (fins a 2.045 EUR)',
        'Infraccions greus (art. 47): manca d\'avaluació, formació i comunicació d\'accidents',
        'Infraccions molt greus (art. 48): afectació a col·lectius especials i obstrucció',
        'Quanties greus (2.046 EUR - 40.985 EUR) i molt greus (40.986 EUR - 819.780 EUR)',
        'Reincidència: agreujant que pot multiplicar la sanció',
        'Paralització de treballs per Inspecció (art. 44)',
        'Recàrrec de prestacions: 30%-50% sobre la indemnització d\'accident',
      ],
    },
    'ficha-10': {
      titulo: 'Auditoria del Sistema de Prevenció',
      colectivo: 'Tècnics PRL superiors, responsables de SPP',
      objetivo: 'Comprendre el paper de l\'auditoria en el sistema de gestió preventiva, els requisits legals i l\'abast de l\'avaluació externa.',
      contenido: [
        'Quan és obligatòria l\'auditoria: empreses sense SPA amb SPP/treballadors designats',
        'Primera auditoria: dins dels 12 mesos després de la primera planificació',
        'Periodicitat: cada 4 anys (cada 2 en sectors de l\'Annex I del RSP)',
        'Abast de l\'auditoria: avaluació de l\'eficàcia del sistema preventiu',
        'Requisits dels auditors: acreditació, independència, imparcialitat',
        'Informe d\'auditoria: contingut mínim i conservació',
        'Diferències entre auditoria interna (millora contínua) i legal (RSP)',
        'Relació amb ISO 45001 i cicle PDCA en gestió de SST',
      ],
    },
  },
  eu: {
    'ficha-01': {
      titulo: 'Lan Arriskuen Prebentzioaren Oinarriak',
      colectivo: 'Langile guztiak',
      objetivo: 'PRLren oinarrizko lege-esparrua, funtsezko kontzeptuak eta lan-ingurunean prebentzioaren garrantzia ulertzea.',
      contenido: [
        'Arau-esparrua: 31/1995 LPRL Legea — xedea eta aplikazio-eremua',
        'Oinarrizko kontzeptuak: arriskua, arrisku-iturria, kaltea, prebentzioa',
        'Enpresaren obligazioak: segurtasuna bermatzeko betebeharra',
        'Prebentzio ekintzaren printzipioak (15. art. LPRL): 9 printzipio hierarkiko',
        'Prebentzio Plana eta Arriskuen Ebaluazioa: zer diren eta zertarako',
        'Ohiko arriskuak: erorketak, kolpeak, gainesfortzuak, kontaktu elektrikoak',
      ],
    },
    'ficha-02': {
      titulo: 'PRL arloko Eskubideak eta Betebeharrak',
      colectivo: 'Langile guztiak',
      objetivo: 'Langileen segurtasun eta osasun arloko eskubideak ezagutzea, baita haien eta enpresaren betebeharrak ere.',
      contenido: [
        'Babes eraginkorrerako eskubidea (14. art. LPRL): enpresarentzat zer den',
        'Langileen betebeharrak (29. art. LPRL): ekipamenduen eta EPIen erabilera zuzena',
        'Informaziorako eskubidea: lanpostuko arriskuak eta neurri prebentiboak',
        'Prestakuntzarako eskubidea (19. art.): teoria eta praktika lanaldian',
        'Lana eteteko eskubidea arrisku larri eta berehalakoaren aurrean (21. art.)',
        'Osasunaren zaintzarako eskubidea (22. art.): borondatezkoa eta salbuespenak',
      ],
    },
    'ficha-03': {
      titulo: 'Langileen Parte-hartzea PRLn',
      colectivo: 'Langileak eta ordezkariak',
      objetivo: 'PRLko parte-hartze eta ordezkaritza mekanismoak ulertzea: prebentzio ordezkariak eta Segurtasun eta Osasun Batzordea.',
      contenido: [
        'Parte-hartze eta ordezkaritza eskubidea (34. art. LPRL)',
        'Prebentzio ordezkariak: nortzuk diren, nola izendatzen diren eta kopurua',
        'Prebentzio ordezkarien gaitasunak (36. art.): ikuskapena, proposamenak, informazioa',
        'Segurtasun eta Osasun Batzordea: osaera parekidea, 50+ langile',
        'Erabakiak aurretik kontsulta derrigorrezkoa (33. art. LPRL)',
        'Ordezkarien bermeak eta isilpekotasuna',
      ],
    },
    'ficha-04': {
      titulo: 'Lan Arriskuen Ebaluazioa',
      colectivo: 'Teknikariak eta erdi-mailako agintariak',
      objetivo: 'Lan-arriskuen ebaluazio prozesua, aplikagarri diren metodologiak eta gutxieneko dokumentazio-eskakizuna menperatzea.',
      contenido: [
        'Ebaluazio prozesua: definizioa RSP 3. artikuluaren arabera',
        'Hasierako ebaluazioa vs aldizkako berrikuspena: noiz berrikusi',
        'Lanpostuaren araberako arrisku-iturrien identifikazioa',
        'Arriskuaren estimazioa: probabilitatea × ondorioa',
        'Balorazio irizpideak: hutsa, onargarria, ertaina, garrantzitsua, onartezina',
        'Ebaluazio dokumentazioa: gutxieneko edukia 23. art. LPRL',
        'Ondoriozko plangintza: neurri zuzentzaileak epe, arduradun eta baliabideekin',
      ],
    },
    'ficha-05': {
      titulo: 'Prebentzioaren Antolaketa Enpresan',
      colectivo: 'PRL teknikariak eta arduradunak',
      objetivo: 'Prebentzio-antolaketaren modalitateak, lege-eskakizunak eta bakoitza noiz den derrigorrezkoa ezagutzea.',
      contenido: [
        'Prebentzio antolaketa modalitateak (RSP 10. art.): 4 aukera',
        'Enpresariaren bere gain hartzea: 10 langilera arte, I. Eranskineko jarduerarik gabe',
        'Izendatutako langileak: gutxieneko gaitasuna eta bateraezintasunak',
        'Prebentzio Zerbitzu Propioa (SPP): noiz den derrigorrezkoa eta espezialitateak',
        'Kanpoko Prebentzio Zerbitzua (SPA): kontzertua, jarraipena eta akreditazioa',
        'Prebentzio Zerbitzu Mankomunatua: sektoreak eta enpresa-taldeak',
        'Prebentzio sistemaren barne-auditoriak: maiztasuna eta irismena',
      ],
    },
    'ficha-06': {
      titulo: 'Bereziki Sentikorrak diren Kolektiboen Babesa',
      colectivo: 'Giza Baliabideak, agintariak eta PRL teknikariak',
      objetivo: 'Berezi ahulak diren langileentzako babes-neurri espezifikoak ezagutzea: haurdunak, adingabeak eta desgaitasuna duten pertsonak.',
      contenido: [
        'Bereziki sentikorrak diren langileak (25. art. LPRL): egokitutako ebaluazioa',
        'Amatasun babesa (26. art.): haurdunaldiko arrisku-agenteen ebaluazioa',
        'Kontratua etetea haurdunaldi arriskuagatik: baldintzak eta prozedura',
        '18 urtetik beherakoen babesa (27. art.): hasi aurreko ebaluazioa',
        'Aldi baterako langileak eta ETT (28. art.): babes berdintasuna',
        'Lanpostu egokitzapena vs lanpostu aldaketa: lehentasun irizpideak',
      ],
    },
    'ficha-07': {
      titulo: 'Enpresa Jardueren Koordinazioa (CAE)',
      colectivo: 'PRL teknikariak, koordinatzaileak, kontratak',
      objetivo: 'RD 171/2004 behar bezala aplikatzea enpresa-bateratze egoeretan: betebeharrak, dokumentazioa eta koordinazio-tresnak.',
      contenido: [
        'Aplikazio eremua: noiz dagoen enpresa-bateratzea',
        'Lankidetza betebeharra: arrisku espezifikoen elkarrekiko informazioa',
        'Titular enpresaria: hasi aurreko informazioa eta jarraibideak',
        'Enpresari nagusia: kontrata eta azpikontraten betetzearen zaintza',
        'CAE dokumentazioa: zer trukatu eta noiz eguneratu',
        'Koordinazio baliabideak: bilerak, dokumentu-trukea, jarraibide bateratuak',
        'Prebentzio Jardueren Koordinatzailea: izendapena, eginkizunak eta profila',
        'CAE plataformak: dokumentu kudeaketako sistema informatizatuak',
      ],
    },
    'ficha-08': {
      titulo: 'Segurtasuna Eraikuntza Obretan',
      colectivo: 'Eraikuntzako PRL teknikariak, CSS koordinatzaileak',
      objetivo: 'Eraikuntza sektoreko betebehar espezifikoak ezagutzea: ESS/EBSS, PSS, SST koordinazioa eta eragile guztien obligazioak.',
      contenido: [
        'Sustatzailea: noiz prestatu ESS edo EBSS (5. art. atalaseak)',
        'Segurtasun eta Osasun Azterlanaren edukia: memoriak, planoak, plegua, aurrekontua',
        'Oinarrizko Azterlana: obra txikiak, eduki sinplifikatua',
        'Kontratistaren Segurtasun eta Osasun Plana (7. art.): CSSk onartua',
        'Diseinuko koordinatzailea vs exekuziokoa: aldeak eta izendapena',
        'SST koordinatzailearen eginkizunak exekuzioan (9. art.)',
        'Gorabehera Liburua: derrigorrezko erabilera, nork idatz dezakeen eta hartzaileak',
        'Kontratista, azpikontratista eta autonomoen obligazioak',
        'Lan agintaritzari aurretiazko jakinarazpena',
      ],
    },
    'ficha-09': {
      titulo: 'PRLko Zehapen Araubidea',
      colectivo: 'Enpresa arduradunak, PRL teknikariak, Giza Baliabideak',
      objetivo: 'LPRLaren zehapen araubidea ezagutzea: arau-hauste motak, zehapen zenbatekoak eta erantzukizun bateratuak.',
      contenido: [
        'Erantzukizun motak: administratiboa, penala eta zibila (42. art. LPRL)',
        'Arau-hauste arinak: adibideak eta zenbatekoak (2.045 EUR arte)',
        'Arau-hauste larriak (47. art.): ebaluazio falta, prestakuntza falta, istripuen jakinarazpen eza',
        'Arau-hauste oso larriak (48. art.): kolektibo berezien eragina, oztopoa',
        'Larriak (2.046 EUR - 40.985 EUR) eta oso larriak (40.986 EUR - 819.780 EUR)',
        'Berrerortzea: zehapena biderkatu dezakeen larriagotzailea',
        'Ikuskaritzak lanak etetea (44. art.)',
        'Prestazioen gainkarga: istripu kalte-ordainaren %30-%50',
      ],
    },
    'ficha-10': {
      titulo: 'Prebentzio Sistemaren Auditoria',
      colectivo: 'Goi-mailako PRL teknikariak, SPP arduradunak',
      objetivo: 'Auditoriak prebentzio-kudeaketa sisteman duen rola, lege-baldintzak eta kanpo-ebaluazioaren irismena ulertzea.',
      contenido: [
        'Noiz den derrigorrezkoa auditoria: SPArik gabeko enpresak SPP/izendatutako langileekin',
        'Lehen auditoria: lehen plangintzatik 12 hilabete barru',
        'Maiztasuna: 4 urtez behin (2 urtez behin RSP I. Eranskineko sektoreetan)',
        'Auditoriaren irismena: prebentzio sistemaren eraginkortasunaren ebaluazioa',
        'Auditoreen baldintzak: akreditazioa, independentzia, inpartzialtasuna',
        'Auditoria txostena: gutxieneko edukia eta kontserbazioa',
        'Barne-auditoria (hobekuntza) eta legezkoa (RSP) arteko aldeak',
        'ISO 45001 eta PDCA zikloarekin lotura SST kudeaketan',
      ],
    },
  },
  gl: {
    'ficha-01': {
      titulo: 'Fundamentos da Prevención de Riscos Laborais',
      colectivo: 'Todos os traballadores',
      objetivo: 'Comprender o marco legal básico da PRL, os conceptos fundamentais e a importancia da prevención no contorno de traballo.',
      contenido: [
        'Marco normativo: Lei 31/1995 LPRL — obxecto e ámbito de aplicación',
        'Conceptos básicos: risco, perigo, dano, prevención',
        'Obrigas da empresa: deber de garantir a seguridade',
        'Principios da acción preventiva (art. 15 LPRL): 9 principios xerárquicos',
        'Plan de Prevención e Avaliación de Riscos: que son e para que serven',
        'Riscos máis frecuentes no traballo: caídas, golpes, sobreesforzos, contactos eléctricos',
      ],
    },
    'ficha-02': {
      titulo: 'Dereitos e Obrigas en Materia de PRL',
      colectivo: 'Todos os traballadores',
      objetivo: 'Coñecer os dereitos dos traballadores en seguridade e saúde, así como as súas obrigas e as da empresa.',
      contenido: [
        'Dereito á protección eficaz (art. 14 LPRL): implicacións para a empresa',
        'Obrigas dos traballadores (art. 29 LPRL): uso correcto de equipos e EPI',
        'Dereito á información: riscos do posto e medidas preventivas',
        'Dereito á formación (art. 19): teoría e práctica dentro da xornada',
        'Dereito a paralizar o traballo ante risco grave e inminente (art. 21)',
        'Dereito á vixilancia da saúde (art. 22): carácter voluntario e excepcións',
      ],
    },
    'ficha-03': {
      titulo: 'Participación dos Traballadores en PRL',
      colectivo: 'Traballadores e representantes',
      objetivo: 'Entender os mecanismos de participación e representación en PRL: delegados de prevención e Comité de Seguridade e Saúde.',
      contenido: [
        'Dereito de participación e representación (art. 34 LPRL)',
        'Delegados de Prevención: quen son, designación e número',
        'Competencias dos Delegados de Prevención (art. 36): inspección, propostas, información',
        'Comité de Seguridade e Saúde: composición paritaria, 50+ traballadores',
        'Consulta obrigatoria antes de decisións (art. 33 LPRL)',
        'Garantías e deber de sixilo profesional dos representantes',
      ],
    },
    'ficha-04': {
      titulo: 'Avaliación de Riscos Laborais',
      colectivo: 'Técnicos e mandos intermedios',
      objetivo: 'Dominar o proceso de avaliación de riscos laborais, metodoloxías aplicables e o contido documental mínimo requirido.',
      contenido: [
        'Proceso de avaliación: definición segundo RSP art. 3',
        'Avaliación inicial versus revisión periódica: cando revisar',
        'Identificación de perigos por posto de traballo',
        'Estimación do risco: probabilidade × consecuencia',
        'Criterios de valoración: trivial, tolerable, moderado, importante, intolerable',
        'Documentación da avaliación: contido mínimo segundo art. 23 LPRL',
        'Planificación derivada: medidas correctoras con prazo, responsable e recursos',
      ],
    },
    'ficha-05': {
      titulo: 'Organización da Prevención na Empresa',
      colectivo: 'Técnicos e responsables de PRL',
      objetivo: 'Coñecer as modalidades de organización preventiva, os seus requisitos legais e cando é obrigatoria cada unha.',
      contenido: [
        'Modalidades de organización preventiva (RSP art. 10): 4 opcións',
        'Asunción persoal polo empresario: ata 10 traballadores, sen actividades do Anexo I',
        'Traballadores designados: capacitación mínima requirida e incompatibilidades',
        'Servizo de Prevención Propio (SPP): cando é obrigatorio e especialidades',
        'Servizo de Prevención Alleo (SPA): concerto, seguimento e acreditación',
        'Servizo de Prevención Mancomunado: sectores e grupos empresariais',
        'Auditorías internas do sistema preventivo: periodicidade e alcance',
      ],
    },
    'ficha-06': {
      titulo: 'Protección de Colectivos Especialmente Sensibles',
      colectivo: 'RRHH, mandos e técnicos PRL',
      objetivo: 'Coñecer as medidas específicas de protección para traballadores con especial vulnerabilidade: embarazadas, menores e persoas con discapacidade.',
      contenido: [
        'Traballadores especialmente sensibles (art. 25 LPRL): avaliación adaptada',
        'Protección da maternidade (art. 26): avaliación de axentes de risco durante o embarazo',
        'Suspensión de contrato por risco durante embarazo: requisitos e procedemento',
        'Protección dos menores de 18 anos (art. 27): avaliación previa ao inicio',
        'Traballadores temporais e ETT (art. 28): igualdade en protección',
        'Adaptación do posto versus cambio de posto: criterios de prioridade',
      ],
    },
    'ficha-07': {
      titulo: 'Coordinación de Actividades Empresariais (CAE)',
      colectivo: 'Técnicos PRL, coordinadores, contratas',
      objetivo: 'Aplicar correctamente o RD 171/2004 en situacións de concorrencia empresarial: deberes, documentación e instrumentos de coordinación.',
      contenido: [
        'Ámbito de aplicación: cando hai concorrencia empresarial',
        'Deber de cooperación: información recíproca de riscos específicos',
        'Empresario titular: información e instrucións antes do inicio',
        'Empresario principal: vixilancia do cumprimento de contratas e subcontratas',
        'Documentación CAE: que intercambiar e cando actualizar',
        'Medios de coordinación: reunións, intercambio documental, instrucións conxuntas',
        'Coordinador de Actividades Preventivas: designación, funcións e perfil',
        'Plataformas CAE: uso de sistemas informatizados de xestión documental',
      ],
    },
    'ficha-08': {
      titulo: 'Seguridade en Obras de Construción',
      colectivo: 'Técnicos PRL construción, coordinadores CSS',
      objetivo: 'Coñecer as obrigas específicas do sector da construción: ESS/EBSS, PSS, coordinación de SST e obrigas de todos os axentes.',
      contenido: [
        'Promotor: cando debe elaborar ESS ou EBSS (limiares do art. 5)',
        'Contido do Estudo de Seguridade e Saúde: memorias, planos, prego e orzamento',
        'Estudo Básico: obras menores e contido simplificado',
        'Plan de Seguridade e Saúde do contratista (art. 7): aprobación polo CSS',
        'Coordinador de deseño vs execución: diferenzas e designación',
        'Funcións do Coordinador de SST durante a execución (art. 9)',
        'Libro de Incidencias: uso obrigatorio, quen pode anotalo e destinatarios',
        'Obrigas de contratistas, subcontratistas e autónomos',
        'Aviso previo á autoridade laboral',
      ],
    },
    'ficha-09': {
      titulo: 'Réxime Sancionador en PRL',
      colectivo: 'Responsables de empresa, técnicos PRL, RRHH',
      objetivo: 'Coñecer o réxime sancionador da LPRL: tipos de infraccións, contías de sanción e responsabilidades concorrentes.',
      contenido: [
        'Tipos de responsabilidades: administrativa, penal e civil (art. 42 LPRL)',
        'Infraccións leves: exemplos e contías (ata 2.045 EUR)',
        'Infraccións graves (art. 47): falta de avaliación, formación e comunicación de accidentes',
        'Infraccións moi graves (art. 48): afección a colectivos especiais e obstrución',
        'Contías graves (2.046 EUR - 40.985 EUR) e moi graves (40.986 EUR - 819.780 EUR)',
        'Reincidencia: agravante que pode multiplicar a sanción',
        'Paralización de traballos pola Inspección (art. 44)',
        'Recargo de prestacións: 30%-50% sobre a indemnización por accidente',
      ],
    },
    'ficha-10': {
      titulo: 'Auditoría do Sistema de Prevención',
      colectivo: 'Técnicos PRL superiores, responsables de SPP',
      objetivo: 'Comprender o papel da auditoría no sistema de xestión preventiva, os requisitos legais e o alcance da avaliación externa.',
      contenido: [
        'Cando é obrigatoria a auditoría: empresas sen SPA con SPP/traballadores designados',
        'Primeira auditoría: dentro dos 12 meses tras a primeira planificación',
        'Periodicidade: cada 4 anos (cada 2 en sectores do Anexo I do RSP)',
        'Alcance da auditoría: avaliación da eficacia do sistema preventivo',
        'Requisitos dos auditores: acreditación, independencia, imparcialidade',
        'Informe de auditoría: contido mínimo e conservación',
        'Diferenzas entre auditoría interna (mellora continua) e legal (RSP)',
        'Relación coa norma ISO 45001 e ciclo PDCA na xestión de SST',
      ],
    },
  },
};

type RoleTextOverride = {
  shortLabel: string;
  label: string;
  description: string;
  obligations: Array<{ title: string; description: string }>;
  risks: string[];
};

const roleOverrides: Record<NonSpanishLanguage, Record<string, RoleTextOverride>> = {
  ca: {
    'trabajador-almacen': {
      shortLabel: 'Treballador de Magatzem',
      label: 'Treballador de Magatzem',
      description: 'Personal operatiu encarregat de la logística, manipulació de càrregues i operacions al magatzem.',
      obligations: [
        { title: 'Ús d\'EPI', description: 'Utilitzar correctament els Equips de Protecció Individual lliurats per l\'empresa.' },
        { title: 'Seguir Instruccions', description: 'Seguir les instruccions de seguretat i els procediments interns establerts.' },
        { title: 'Informar de Riscos', description: 'Informar immediatament de riscos o condicions insegures detectades.' },
        { title: 'Condicions del Lloc de Treball', description: 'Mantenir ordre, neteja i respectar la senyalització de l\'entorn industrial.' },
      ],
      risks: [
        'Sobreesforços i postures forçades.',
        'Cops i atrapaments per caiguda d\'objectes.',
        'Caigudes al mateix nivell per manca d\'ordre.',
        'Col·lisions amb carretons elevadors.',
      ],
    },
    'tecnico-prl': {
      shortLabel: 'Tècnic PRL',
      label: 'Tècnic de Prevenció (SPP o SPA)',
      description: 'Especialista en seguretat laboral encarregat de la gestió preventiva tècnica a l\'organització.',
      obligations: [
        { title: 'Avaluar Riscos', description: 'Avaluar riscos laborals i planificar de manera raonada l\'activitat preventiva.' },
        { title: 'Proposar Mesures', description: 'Dissenyar, proposar i vigilar el compliment de mesures correctores a planta.' },
        { title: 'Coordinació CAE', description: 'Coordinar les activitats preventives d\'empreses concurrents.' },
        { title: 'Reglament de Prevenció', description: 'Complir el que estableix el Reglament dels Serveis de Prevenció.' },
      ],
      risks: [
        'Risc documental i incompliments en CAE.',
        'Manca de control real sobre mesures preventives proposades.',
        'Descoordinació entre contractes i subcontractes.',
      ],
    },
    'encargado-obra': {
      shortLabel: 'Encarregat d\'Obra',
      label: 'Encarregat / Cap d\'Equip',
      description: 'Comandament intermedi amb responsabilitat directa sobre l\'execució dels treballs i els equips operatius.',
      obligations: [
        { title: 'Compliment de Mesures', description: 'Garantir que els treballadors al seu càrrec compleixen les mesures de seguretat establertes.' },
        { title: 'Informar de Riscos', description: 'Assegurar la informació i formació pràctica sobre els riscos imminents del tajo.' },
        { title: 'Coordinació Simultània', description: 'Coordinar activitats de riscos especials que es produeixen simultàniament.' },
        { title: 'Equips Segurs', description: 'Verificar diàriament que equips, proteccions col·lectives i eines són segures.' },
      ],
      risks: [
        'Caigudes d\'alçada.',
        'Cops per objectes en moviment o despreniments.',
        'Riscos elèctrics en instal·lacions provisionals.',
        'Riscos per ús de maquinària pesada.',
      ],
    },
    'empresa-contratista': {
      shortLabel: 'Empresa Contractista',
      label: 'Empresa Contractista / Subcontracta',
      description: 'Empresa externa que accedeix al centre de treball per fer obres, manteniments o serveis.',
      obligations: [
        { title: 'Documentació CAE', description: 'Aportar tota la documentació requerida per la Coordinació d\'Activitats Empresarials.' },
        { title: 'Garantir Formació', description: 'Garantir documentalment la formació i aptitud mèdica de tots els seus treballadors.' },
        { title: 'Complir PSS', description: 'Complir i fer complir el Pla de Seguretat i Salut aprovat per a l\'obra o servei.' },
        { title: 'Coordinació amb Titular', description: 'Assistir a reunions de coordinació i informar dels riscos inherents als seus treballs.' },
      ],
      risks: [
        'Manca d\'acreditació o documentació caducada.',
        'Descoordinació temporal amb altres empreses concurrents.',
        'Riscos agreujats per interferències mútues i treballs solapats.',
      ],
    },
    'trabajador-oficina': {
      shortLabel: 'Treballador Oficina',
      label: 'Treballador d\'Oficina',
      description: 'Personal de tasques administratives, gestió i ús continuat de Pantalles de Visualització de Dades (PVD).',
      obligations: [
        { title: 'Ús d\'Equips', description: 'Utilitzar correctament equips informàtics i mobiliari ergonòmic facilitat.' },
        { title: 'Informar Molèsties', description: 'Informar aviat de molèsties musculars, fatiga visual o incomoditat postural.' },
        { title: 'Emergències', description: 'Conèixer i seguir de manera disciplinada els procediments d\'evacuació i emergència de l\'edifici.' },
        { title: 'Condicions d\'Oficina', description: 'Mantenir zones de pas lliures i condicions estables de temperatura/il·luminació.' },
      ],
      risks: [
        'Trastorns musculoesquelètics (esquena, cervicals, canells).',
        'Fatiga visual i mental.',
        'Caigudes al mateix nivell per cables o terres relliscosos.',
      ],
    },
    'responsable-rrhh': {
      shortLabel: 'Responsable RRHH',
      label: 'Responsable de RRHH / Empresa',
      description: 'Perfil directiu encarregat de facilitar recursos, formació i vigilància de la salut de la plantilla.',
      obligations: [
        { title: 'Protecció Eficaç', description: 'Deure ineludible de garantir una protecció eficaç en seguretat i salut.' },
        { title: 'Formació Preventiva', description: 'Garantir formació inicial i periòdica, teòrica i pràctica, dins la jornada laboral.' },
        { title: 'Vigilància de la Salut', description: 'Gestionar, proposar i controlar la vigilància periòdica de la salut segons protocols aplicables.' },
        { title: 'Organització Preventiva', description: 'Dotar l\'empresa d\'una modalitat organitzativa preventiva vàlida i suficient.' },
      ],
      risks: [
        'Incompliments documentals i caducitat de certificacions.',
        'Contractació de personal sense formació específica prèvia.',
        'Responsabilitat legal per manca de coordinació amb l\'SPA o contractes.',
      ],
    },
  },
  eu: {
    'trabajador-almacen': {
      shortLabel: 'Biltegiko Langilea',
      label: 'Biltegiko Langilea',
      description: 'Logistika, kargen manipulazioa eta biltegiko eragiketak egiten dituen langile operatiboa.',
      obligations: [
        { title: 'EPIen Erabilera', description: 'Enpresak emandako Babes Ekipamendu Pertsonalak behar bezala erabiltzea.' },
        { title: 'Jarraibideak Betetzea', description: 'Ezarritako segurtasun-jarraibideak eta barne-prozedurak betetzea.' },
        { title: 'Arriskuen Berri Ematea', description: 'Detektatutako arriskuak edo egoera ez-seguruak berehala jakinaraztea.' },
        { title: 'Lantoki Baldintzak', description: 'Ordena eta garbitasuna mantentzea eta industria-inguruneko seinalea errespetatzea.' },
      ],
      risks: [
        'Gainesfortzuak eta postura behartuak.',
        'Objektuen erorketagatik kolpeak eta harrapatzeak.',
        'Ordenarik ezagatik maila bereko erorketak.',
        'Orgatxo jasotzaileekin talkak.',
      ],
    },
    'tecnico-prl': {
      shortLabel: 'PRL Teknikaria',
      label: 'Prebentzio Teknikaria (SPP edo SPA)',
      description: 'Erakundeko prebentzio-kudeaketa teknikoaren arduradun den lan-segurtasuneko espezialista.',
      obligations: [
        { title: 'Arriskuak Ebaluatu', description: 'Lan-arriskuak ebaluatu eta prebentzio jarduera modu arrazoituan planifikatu.' },
        { title: 'Neurriak Proposatu', description: 'Plantan neurri zuzentzaileak diseinatu, proposatu eta betetzea zaindu.' },
        { title: 'CAE Koordinazioa', description: 'Enpresa bateratzaileetako prebentzio jarduerak koordinatu.' },
        { title: 'Prebentzio Araudia', description: 'Prebentzio Zerbitzuen Erregelamenduan ezarritakoa bete.' },
      ],
      risks: [
        'CAEko dokumentu-arriskua eta ez-betetzeak.',
        'Proposatutako neurri prebentiboen gaineko benetako kontrolik eza.',
        'Kontrata eta azpikontraten arteko deskoordinazioa.',
      ],
    },
    'encargado-obra': {
      shortLabel: 'Obrako Arduraduna',
      label: 'Arduraduna / Talde Burua',
      description: 'Lanen exekuzioaren eta talde operatiboen gaineko erantzukizun zuzena duen erdi-mailako agintaria.',
      obligations: [
        { title: 'Neurrien Betetzea', description: 'Bere ardurapean dauden langileek ezarritako segurtasun-neurriak betetzen dituztela bermatzea.' },
        { title: 'Arriskuen Berri Ematea', description: 'Tajoko arrisku berehalakoei buruzko informazioa eta prestakuntza praktikoa bermatzea.' },
        { title: 'Aldibereko Koordinazioa', description: 'Aldi berean gertatzen diren arrisku bereziko jarduerak koordinatzea.' },
        { title: 'Ekipamendu Segurua', description: 'Egunero egiaztatzea ekipamenduak, babes kolektiboak eta tresnak seguruak direla.' },
      ],
      risks: [
        'Altueratik erorketak.',
        'Mugitzen ari diren objektuen edo erorketen ondoriozko kolpeak.',
        'Behin-behineko instalazioetako arrisku elektrikoak.',
        'Makineria astunaren erabileragatik arriskuak.',
      ],
    },
    'empresa-contratista': {
      shortLabel: 'Enpresa Kontratista',
      label: 'Enpresa Kontratista / Azpikontrata',
      description: 'Zentrora obrak, mantentze-lanak edo zerbitzuak egitera sartzen den kanpoko enpresa.',
      obligations: [
        { title: 'CAE Dokumentazioa', description: 'Enpresa Jardueren Koordinazioak eskatutako dokumentazio guztia aurkeztea.' },
        { title: 'Prestakuntza Bermatu', description: 'Langile guztien prestakuntza eta gaitasun medikoa dokumentalki bermatzea.' },
        { title: 'PSS Betetzea', description: 'Obra edo zerbitzurako onartutako Segurtasun eta Osasun Plana betetzea eta betearaztea.' },
        { title: 'Titularrarekin Koordinatu', description: 'Koordinazio bileretan parte hartu eta bere lanen arriskuak jakinaraztea.' },
      ],
      risks: [
        'Egiaztagiri falta edo dokumentazio iraungia.',
        'Beste enpresa bateratzaileekin denborazko deskoordinazioa.',
        'Elkarrekiko interferentzien eta lan gainjarriengatik areagotutako arriskuak.',
      ],
    },
    'trabajador-oficina': {
      shortLabel: 'Bulegoko Langilea',
      label: 'Bulegoko Langilea',
      description: 'Administrazio, kudeaketa eta Datuak Bistaratzeko Pantailen (PVD) erabilera jarraituko langileak.',
      obligations: [
        { title: 'Ekipamenduen Erabilera', description: 'Ekipamendu informatikoak eta altzari ergonomikoak behar bezala erabiltzea.' },
        { title: 'Molestien Berri Ematea', description: 'Muskulu-ondoezak, ikusmen-nekea edo postura-deserosotasuna goiz jakinaraztea.' },
        { title: 'Larrialdiak', description: 'Eraikineko ebakuazio eta larrialdi prozedurak ezagutu eta zorrotz jarraitzea.' },
        { title: 'Bulego Baldintzak', description: 'Ibilbide-eremuak libre mantendu eta tenperatura/argiztapen baldintza egonkorrak bermatzea.' },
      ],
      risks: [
        'Muskulu-eskeletoko nahasmenduak (bizkarra, zerbikalak, eskumuturrak).',
        'Ikusmen eta buru-nekea.',
        'Kable edo lur irristakorren ondoriozko maila bereko erorketak.',
      ],
    },
    'responsable-rrhh': {
      shortLabel: 'Giza Baliabideen Arduraduna',
      label: 'RRHH / Enpresaren Arduraduna',
      description: 'Plantillaren baliabideak, prestakuntza eta osasun-zaintza ahalbidetzen dituen zuzendaritza-profila.',
      obligations: [
        { title: 'Babes Eraginkorra', description: 'Segurtasun eta osasun arloan babes eraginkorra bermatzeko betebehar saihestezina.' },
        { title: 'Prebentzio Prestakuntza', description: 'Hasierako eta aldizkako prestakuntza teoriko-praktikoa bermatzea, lanaldi barruan.' },
        { title: 'Osasunaren Zaintza', description: 'Protokolo aplikagarrien arabera osasunaren aldizkako zaintza kudeatu, proposatu eta kontrolatzea.' },
        { title: 'Prebentzio Antolaketa', description: 'Enpresari prebentzio-antolaketa modalitate baliodun eta nahikoa ematea.' },
      ],
      risks: [
        'Dokumentu ez-betetzeak eta ziurtagirien iraungitzea.',
        'Aurretiazko prestakuntza espezifikorik gabeko langileen kontratazioa.',
        'SPA edo kontratekin koordinazio faltagatik erantzukizun juridikoa.',
      ],
    },
  },
  gl: {
    'trabajador-almacen': {
      shortLabel: 'Traballador de Almacén',
      label: 'Traballador de Almacén',
      description: 'Persoal operativo encargado da loxística, manipulación de cargas e operacións no almacén.',
      obligations: [
        { title: 'Uso de EPI', description: 'Usar correctamente os Equipos de Protección Individual entregados pola empresa.' },
        { title: 'Seguir Instrucións', description: 'Seguir as instrucións de seguridade e procedementos internos establecidos.' },
        { title: 'Informar de Riscos', description: 'Informar de inmediato dos riscos ou condicións inseguras detectadas.' },
        { title: 'Condicións do Lugar de Traballo', description: 'Manter orde, limpeza e respectar a sinalización da contorna industrial.' },
      ],
      risks: [
        'Sobreesforzos e posturas forzadas.',
        'Golpes e atrapamentos por caída de obxectos.',
        'Caídas ao mesmo nivel por falta de orde.',
        'Colisións con carretillas elevadoras.',
      ],
    },
    'tecnico-prl': {
      shortLabel: 'Técnico PRL',
      label: 'Técnico de Prevención (SPP ou SPA)',
      description: 'Especialista en seguridade laboral encargado da xestión preventiva técnica na organización.',
      obligations: [
        { title: 'Avaliar Riscos', description: 'Avaliar riscos laborais e planificar de forma razoada a actividade preventiva.' },
        { title: 'Propoñer Medidas', description: 'Deseñar, propoñer e vixiar o cumprimento de medidas correctoras en planta.' },
        { title: 'Coordinación CAE', description: 'Coordinar as actividades preventivas de empresas concorrentes.' },
        { title: 'Regulamento de Prevención', description: 'Cumprir o establecido no Regulamento dos Servizos de Prevención.' },
      ],
      risks: [
        'Risco documental e incumprimentos en CAE.',
        'Falta de control real sobre medidas preventivas propostas.',
        'Descoordinación entre contratas e subcontratas.',
      ],
    },
    'encargado-obra': {
      shortLabel: 'Encargado de Obra',
      label: 'Encargado / Xefe de Equipo',
      description: 'Mando intermedio con responsabilidade directa sobre a execución dos traballos e os equipos operativos.',
      obligations: [
        { title: 'Cumprimento de Medidas', description: 'Garantir que os traballadores ao seu cargo cumpren as medidas de seguridade establecidas.' },
        { title: 'Informar de Riscos', description: 'Asegurar a información e formación práctica sobre os riscos inminentes do tajo.' },
        { title: 'Coordinación Simultánea', description: 'Coordinar actividades de riscos especiais que se producen de maneira simultánea.' },
        { title: 'Equipos Seguros', description: 'Verificar diariamente que equipos, proteccións colectivas e ferramentas son seguras.' },
      ],
      risks: [
        'Caídas desde altura.',
        'Golpes por obxectos en movemento ou desprendementos.',
        'Riscos eléctricos en instalacións provisionais.',
        'Riscos por uso de maquinaria pesada.',
      ],
    },
    'empresa-contratista': {
      shortLabel: 'Empresa Contratista',
      label: 'Empresa Contratista / Subcontrata',
      description: 'Empresa externa que accede ao centro de traballo para realizar obras, mantementos ou servizos.',
      obligations: [
        { title: 'Documentación CAE', description: 'Aportar toda a documentación requirida pola Coordinación de Actividades Empresariais.' },
        { title: 'Garantir Formación', description: 'Garantir documentalmente a formación e aptitude médica de todos os seus traballadores.' },
        { title: 'Cumprir PSS', description: 'Cumprir e facer cumprir o Plan de Seguridade e Saúde aprobado para a obra ou servizo.' },
        { title: 'Coordinación co Titular', description: 'Acudir ás reunións de coordinación e informar dos riscos inherentes aos seus traballos.' },
      ],
      risks: [
        'Falta de acreditación ou documentación caducada.',
        'Descoordinación temporal con outras empresas concorrentes.',
        'Riscos agravados por interferencias mutuas e traballos solapados.',
      ],
    },
    'trabajador-oficina': {
      shortLabel: 'Traballador Oficina',
      label: 'Traballador de Oficina',
      description: 'Persoal de tarefas administrativas, xestión e uso continuado de Pantallas de Visualización de Datos (PVD).',
      obligations: [
        { title: 'Uso de Equipos', description: 'Usar correctamente os equipos informáticos e mobiliario ergonómico facilitado.' },
        { title: 'Informar Molestias', description: 'Informar de xeito temperán de molestias musculares, fatiga visual ou incomodidade postural.' },
        { title: 'Emerxencias', description: 'Coñecer e seguir de forma disciplinada os procedementos de evacuación e emerxencia do edificio.' },
        { title: 'Condicións de Oficina', description: 'Manter as zonas de paso despexadas e condicións estables de temperatura/iluminación.' },
      ],
      risks: [
        'Trastornos musculoesqueléticos (costas, cervicais, pulsos).',
        'Fatiga visual e mental.',
        'Caídas ao mesmo nivel por cables ou chans esvaradíos.',
      ],
    },
    'responsable-rrhh': {
      shortLabel: 'Responsable RRHH',
      label: 'Responsable de RRHH / Empresa',
      description: 'Perfil directivo encargado de facilitar recursos, formación e vixilancia da saúde do persoal.',
      obligations: [
        { title: 'Protección Eficaz', description: 'Deber ineludible de garantir unha protección eficaz en materia de seguridade e saúde.' },
        { title: 'Formación Preventiva', description: 'Garantir formación inicial e periódica, teórica e práctica, dentro da xornada laboral.' },
        { title: 'Vixilancia da Saúde', description: 'Xestionar, propoñer e controlar a vixilancia periódica da saúde segundo os protocolos aplicables.' },
        { title: 'Organización Preventiva', description: 'Dotar á empresa dunha modalidade organizativa preventiva válida e suficiente.' },
      ],
      risks: [
        'Incumprimentos documentais e caducidade de certificacións.',
        'Contratación de persoal sen formación específica previa.',
        'Responsabilidade legal por falta de coordinación co SPA ou contratas.',
      ],
    },
  },
};

const referenceTemplates: Record<NonSpanishLanguage, Record<ReferenciaCruzada['tipo'], string>> = {
  ca: {
    desarrollo: '{{origen}} desenvolupa operativament {{destino}}.',
    complemento: '{{origen}} complementa {{destino}} en l\'aplicació preventiva.',
    especificacion: '{{origen}} concreta requisits específics en relació amb {{destino}}.',
    remision: '{{origen}} remet a {{destino}} per a la seva aplicació.',
  },
  eu: {
    desarrollo: '{{origen}}k {{destino}} modu operatiboan garatzen du.',
    complemento: '{{origen}}k {{destino}} osatzen du prebentzio-aplikazioan.',
    especificacion: '{{origen}}k eskakizun zehatzak finkatzen ditu {{destino}}rekin lotuta.',
    remision: '{{origen}}k {{destino}}ra bidaltzen du aplikaziorako.',
  },
  gl: {
    desarrollo: '{{origen}} desenvolve {{destino}} en clave operativa.',
    complemento: '{{origen}} complementa {{destino}} na aplicación preventiva.',
    especificacion: '{{origen}} concreta requisitos específicos en relación con {{destino}}.',
    remision: '{{origen}} remite a {{destino}} para a súa aplicación.',
  },
};

const interpolate = (template: string, vars: Record<string, string>) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => vars[key] ?? `{{${key}}}`);

export function localizeFicha(ficha: FichaCapacitacion, language: Language): FichaCapacitacion {
  if (language === 'es') return ficha;
  const override = fichaOverrides[language]?.[ficha.id];
  if (!override) return ficha;
  return {
    ...ficha,
    ...override,
    contenido: override.contenido ?? ficha.contenido,
  };
}

export function localizeRole(role: RoleObligation, language: Language): RoleObligation {
  if (language === 'es') return role;
  const override = roleOverrides[language]?.[role.id];
  if (!override) return role;

  return {
    ...role,
    shortLabel: override.shortLabel,
    label: override.label,
    description: override.description,
    obligations: role.obligations.map((obl, idx) => ({
      ...obl,
      title: override.obligations[idx]?.title ?? obl.title,
      description: override.obligations[idx]?.description ?? obl.description,
    })),
    risks: override.risks.length ? override.risks : role.risks,
  };
}

export function localizeReference(reference: ReferenciaCruzada, language: Language): ReferenciaCruzada {
  if (language === 'es') return reference;
  const template = referenceTemplates[language]?.[reference.tipo];
  if (!template) return reference;

  return {
    ...reference,
    descripcion: interpolate(template, {
      origen: reference.origen.label,
      destino: reference.destino.label,
    }),
  };
}