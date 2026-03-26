import { useState, useMemo, useEffect, useRef } from 'react';
import { Route, Switch, useLocation, Link } from 'wouter';
import brandLogo from '../logo.jpeg';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {
  leyes,
  referencias,
  fichas,
  getLeyById,
  searchAll,
  buildNormativeContext,
  rolesData,
  documentosData
} from './data';
import { LANGUAGE_OPTIONS, useLanguage, type Language } from './i18n';
import { localizeFicha, localizeReference, localizeRole } from './data/localizedContent';

const downloadToPDF = async (elementId: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const originalBorder = element.style.border;
  const originalBoxShadow = element.style.boxShadow;
  const originalTransform = element.style.transform;
  
  element.style.border = '1px solid rgba(255,255,255,0.1)';
  element.style.boxShadow = 'none';
  element.style.transform = 'none';

  try {
    const canvas = await html2canvas(element, { scale: 2, backgroundColor: '#080c14', logging: false });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? 'l' : 'p',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`${filename}.pdf`);
  } catch (err) {
    console.error('Error exporting PDF', err);
  } finally {
    element.style.border = originalBorder;
    element.style.boxShadow = originalBoxShadow;
    element.style.transform = originalTransform;
  }
};

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const getReferenceTypeLabel = (type: string, t: (key: string, params?: Record<string, string | number>) => string) =>
  t(`references.${type}`);

const getLevelLabel = (level: string, t: (key: string, params?: Record<string, string | number>) => string) =>
  t(`levels.${level}`);

const getBadgeLabel = (type: 'tecnico' | 'divulgativo' | 'ambos', t: (key: string, params?: Record<string, string | number>) => string) =>
  t(`badges.${type}`);

const getWelcomeMessage = (t: (key: string, params?: Record<string, string | number>) => string): ChatMessage => ({
  role: 'assistant',
  content: t('ai.welcome'),
});

const getDemoPromptsByCategory = (
  language: Language,
  t: (key: string, params?: Record<string, string | number>) => string,
) => {
  const promptsByLanguage: Record<Language, string[][]> = {
    es: [
      [
        '¿Qué obligaciones tiene el empresario en coordinación de actividades?',
        '¿Qué información debe entregar la empresa a los trabajadores?',
        '¿Qué dice la LPRL sobre la evaluación de riesgos?',
      ],
      [
        '¿Cómo se documenta la evaluación inicial de riesgos?',
        '¿Qué registros exige el RSP al servicio de prevención?',
        '¿Qué debe contener el Plan de Emergencia?',
      ],
      [
        '¿Qué exige el RD 486 sobre condiciones del lugar de trabajo?',
        '¿Cuándo es obligatoria la vigilancia de la salud?',
        '¿Qué obligaciones genera una obra de construcción según el RD 1627?',
      ],
    ],
    ca: [
      [
        'Quines obligacions té l\'empresa en coordinació d\'activitats?',
        'Quina informació ha de lliurar l\'empresa als treballadors?',
        'Què diu la LPRL sobre l\'avaluació de riscos?',
      ],
      [
        'Com es documenta l\'avaluació inicial de riscos?',
        'Quins registres exigeix l\'RSP al servei de prevenció?',
        'Què ha de contenir el Pla d\'Emergència?',
      ],
      [
        'Què exigeix el RD 486 sobre les condicions del lloc de treball?',
        'Quan és obligatòria la vigilància de la salut?',
        'Quines obligacions genera una obra de construcció segons el RD 1627?',
      ],
    ],
    eu: [
      [
        'Zer betebehar ditu enpresak jardueren koordinazioan?',
        'Zein informazio eman behar die enpresak langileei?',
        'Zer dio LPRLak arriskuen ebaluazioari buruz?',
      ],
      [
        'Nola dokumentatzen da arriskuen hasierako ebaluazioa?',
        'Zein erregistro eskatzen dizkio RSPk prebentzio-zerbitzuari?',
        'Zer eduki behar du Larrialdi Planak?',
      ],
      [
        'Zer eskatzen du RD 486k lantokiaren baldintzei buruz?',
        'Noiz da nahitaezkoa osasunaren zaintza?',
        'Zer betebehar sortzen ditu eraikuntza-obrak RD 1627ren arabera?',
      ],
    ],
    gl: [
      [
        'Que obrigas ten a empresa na coordinación de actividades?',
        'Que información debe entregar a empresa aos traballadores?',
        'Que di a LPRL sobre a avaliación de riscos?',
      ],
      [
        'Como se documenta a avaliación inicial de riscos?',
        'Que rexistros esixe o RSP ao servizo de prevención?',
        'Que debe conter o Plan de Emerxencia?',
      ],
      [
        'Que esixe o RD 486 sobre as condicións do lugar de traballo?',
        'Cando é obrigatoria a vixilancia da saúde?',
        'Que obrigas xera unha obra de construción segundo o RD 1627?',
      ],
    ],
  };

  return [
  {
    label: t('ai.categories.business'),
    color: '#818cf8',
    prompts: promptsByLanguage[language][0],
  },
  {
    label: t('ai.categories.documentation'),
    color: '#34d399',
    prompts: promptsByLanguage[language][1],
  },
  {
    label: t('ai.categories.specific'),
    color: '#fbbf24',
    prompts: promptsByLanguage[language][2],
  },
];
};

const getSectores = (t: (key: string, params?: Record<string, string | number>) => string) => [
  {
    id: 'construccion',
    label: t('audit.sectors.construccion.label'),
    icon: '🏗️',
    desc: t('audit.sectors.construccion.desc'),
    leyIds: ['lprl', 'rsp', 'cae', 'construccion'],
    color: '#f87171',
  },
  {
    id: 'coordinacion',
    label: t('audit.sectors.coordinacion.label'),
    icon: '🔄',
    desc: t('audit.sectors.coordinacion.desc'),
    leyIds: ['lprl', 'rsp', 'cae'],
    color: '#fbbf24',
  },
  {
    id: 'industria',
    label: t('audit.sectors.industria.label'),
    icon: '🏭',
    desc: t('audit.sectors.industria.desc'),
    leyIds: ['lprl', 'rsp'],
    color: '#34d399',
  },
  {
    id: 'oficinas',
    label: t('audit.sectors.oficinas.label'),
    icon: '🏢',
    desc: t('audit.sectors.oficinas.desc'),
    leyIds: ['lprl', 'rsp'],
    color: '#818cf8',
  },
  {
    id: 'hosteleria',
    label: t('audit.sectors.hosteleria.label'),
    icon: '🍽️',
    desc: t('audit.sectors.hosteleria.desc'),
    leyIds: ['lprl', 'rsp'],
    color: '#c084fc',
  },
];

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label={t('language.aria')}>
      <span className="language-switcher-label">{t('language.selector')}</span>
      <div className="language-switcher-buttons">
        {LANGUAGE_OPTIONS.map((option) => (
          <button
            key={option.code}
            className={`language-btn ${language === option.code ? 'active' : ''}`}
            onClick={() => setLanguage(option.code as Language)}
            title={option.label}
            type="button"
          >
            {option.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// COMPONENTS
// ============================================================

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [location] = useLocation();
  const { t } = useLanguage();

  const closeOnMobile = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      onClose();
    }
  };
  
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo" id="sidebar-header">
        <Link href="/">
          <div style={{ cursor: 'pointer' }} id="logo-branding" onClick={closeOnMobile}>
            <img src={brandLogo} alt="Borja Felix Rojas" className="brand-logo" />
            <h1>{t('app.title')}</h1>
            <span>{t('app.subtitle')}</span>
          </div>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section-label">{t('nav.main')}</div>
        <Link href="/">
          <a className={`nav-item ${location === '/' ? 'active' : ''}`} id="link-nav-home" onClick={closeOnMobile}>
            <span className="nav-icon">🏠</span> {t('nav.home')}
          </a>
        </Link>
        <Link href="/mapa-roles">
          <a className={`nav-item ${location === '/mapa-roles' ? 'active' : ''}`} id="link-nav-roles" onClick={closeOnMobile}>
            <span className="nav-icon">🧭</span> {t('nav.roles')}
          </a>
        </Link>
        <Link href="/buscador">
          <a className={`nav-item ${location === '/buscador' ? 'active' : ''}`} id="link-nav-search" onClick={closeOnMobile}>
            <span className="nav-icon">🔍</span> {t('nav.search')}
          </a>
        </Link>
        
        <div className="nav-section-label">{t('nav.normative')}</div>
        {leyes.map(ley => (
          <Link key={ley.id} href={`/normativa/${ley.id}`}>
            <a 
              className={`nav-item ${location === `/normativa/${ley.id}` ? 'active' : ''}`} 
              id={`link-nav-ley-${ley.id}`}
              onClick={closeOnMobile}
            >
              <div className="nav-dot" style={{ backgroundColor: ley.color }}></div>
              {ley.id.toUpperCase()}
            </a>
          </Link>
        ))}
        
        <div className="nav-section-label">{t('nav.resources')}</div>
        <Link href="/referencias">
          <a className={`nav-item ${location === '/referencias' ? 'active' : ''}`} id="link-nav-refs" onClick={closeOnMobile}>
            <span className="nav-icon">🔗</span> {t('nav.references')}
          </a>
        </Link>
        <Link href="/fichas">
          <a className={`nav-item ${location === '/fichas' ? 'active' : ''}`} id="link-nav-fichas" onClick={closeOnMobile}>
            <span className="nav-icon">🎓</span> {t('nav.training')}
          </a>
        </Link>
        <Link href="/auditoria">
          <a className={`nav-item ${location === '/auditoria' ? 'active' : ''}`} id="link-nav-auditoria" onClick={closeOnMobile}>
            <span className="nav-icon">✅</span> {t('nav.audit')}
          </a>
        </Link>
        <Link href="/consultor-ia">
          <a className={`nav-item ${location === '/consultor-ia' ? 'active' : ''}`} id="link-nav-ai" onClick={closeOnMobile}>
            <span className="nav-icon">🤖</span> {t('nav.ai')}
          </a>
        </Link>
        <Link href="/generador-docs">
          <a className={`nav-item ${location === '/generador-docs' ? 'active' : ''}`} id="link-nav-docs" onClick={closeOnMobile}>
            <span className="nav-icon">📄</span> {t('nav.docs')}
          </a>
        </Link>
      </nav>
    </aside>
  );
};

const Badge = ({ type }: { type: 'tecnico' | 'divulgativo' | 'ambos' }) => {
  const { t } = useLanguage();
  return <span className={`badge badge-${type}`}>{getBadgeLabel(type, t)}</span>;
};

// ============================================================
// PAGES
// ============================================================

const HomePage = () => {
  const { t } = useLanguage();

  return (
  <div className="fade-in">
    <header className="home-hero">
      <div className="hero-content">
        <h2 id="hero-title">{t('home.heroTitle')} <span className="gradient-text">{t('home.heroHighlight')}</span></h2>
        <p id="hero-desc">{t('home.heroDescription')}</p>
        <div className="hero-actions">
          <Link href="/buscador"><button className="hero-primary-btn">{t('home.heroSearch')}</button></Link>
          <div className="hero-inline-note">{t('home.heroNote')}</div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glass-card hero-glass-1">
          <span className="glass-icon">💡</span>
          <div>
            <strong>{t('home.crossTitle')}</strong>
            <span>{t('home.crossText')}</span>
          </div>
        </div>
        <div className="glass-card hero-glass-2">
           <span className="glass-icon">✅</span>
           <div>
             <strong>{t('home.auditTitle')}</strong>
             <span>{t('home.auditText')}</span>
           </div>
        </div>
      </div>
    </header>

    <div className="nav-section-label" style={{ paddingLeft: 0, marginBottom: '1rem', marginTop: '1rem' }}>{t('home.core')}</div>
    <div className="features-grid">
      <Link href="/mapa-roles">
        <div className="feature-card" style={{ '--feat-color': '#f43f5e' } as React.CSSProperties}>
          <div className="feat-icon">🧭</div>
          <h3>{t('home.featureRolesTitle')}</h3>
          <p>{t('home.featureRolesText')}</p>
        </div>
      </Link>
      <Link href="/auditoria">
        <div className="feature-card" style={{ '--feat-color': '#34d399' } as React.CSSProperties}>
          <div className="feat-icon">✅</div>
          <h3>{t('home.featureAuditTitle')}</h3>
          <p>{t('home.featureAuditText')}</p>
        </div>
      </Link>
      <Link href="/referencias">
        <div className="feature-card" style={{ '--feat-color': '#fbbf24' } as React.CSSProperties}>
          <div className="feat-icon">🔗</div>
          <h3>{t('home.featureRefsTitle')}</h3>
          <p>{t('home.featureRefsText')}</p>
        </div>
      </Link>
      <Link href="/fichas">
        <div className="feature-card" style={{ '--feat-color': '#c084fc' } as React.CSSProperties}>
          <div className="feat-icon">🎓</div>
          <h3>{t('home.featureTrainingTitle')}</h3>
          <p>{t('home.featureTrainingText')}</p>
        </div>
      </Link>
    </div>
    
    <div className="home-stats" id="stats-container">
      <div className="home-stat-card">
        <div className="stat-icon" style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#34d399' }}>📚</div>
        <div className="stat-data">
          <span className="num">{leyes.length}</span>
          <span className="label">{t('home.baseRules')}</span>
        </div>
      </div>
      <div className="home-stat-card">
        <div className="stat-icon" style={{ background: 'rgba(192, 132, 252, 0.15)', color: '#c084fc' }}>🎓</div>
        <div className="stat-data">
          <span className="num">{fichas.length}</span>
          <span className="label">{t('home.trainingSheets')}</span>
        </div>
      </div>
      <div className="home-stat-card">
        <div className="stat-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}>🔀</div>
        <div className="stat-data">
          <span className="num">{referencias.length}</span>
          <span className="label">{t('home.connections')}</span>
        </div>
      </div>
    </div>

    <div className="nav-section-label" style={{ paddingLeft: 0, marginBottom: '1rem' }}>{t('home.explore')}</div>
    <div className="cards-grid" id="normativa-grid">
      {leyes.map((ley, idx) => (
        <Link key={ley.id} href={`/normativa/${ley.id}`}>
          <div 
            className={`law-card fade-in-delay-${idx + 1}`} 
              style={{ '--card-accent-color': ley.color } as React.CSSProperties}
            id={`card-ley-${ley.id}`}
          >
            <div className="law-card-icon">{ley.icono}</div>
            <div className="law-card-code" style={{ color: ley.color }}>{ley.codigo}</div>
            <h3>{ley.titulo}</h3>
            <p>{ley.subtitulo}</p>
            <div className="law-card-meta">
              <span>{ley.fecha}</span>
              <a 
                href={ley.boeUrl} 
                target="_blank" 
                rel="noreferrer" 
                onClick={e => e.stopPropagation()}
                id={`btn-boe-${ley.id}`}
              >
                {t('home.boe')}
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>

    <section className="about-borja about-borja-subtle" id="sobre-borja">
      <div className="about-borja-header">
        <img src={brandLogo} alt="Borja Felix Rojas" className="about-borja-avatar" />
        <div>
          <h3>{t('home.profileTitle')}</h3>
          <p>{t('home.profileText')}</p>
        </div>
      </div>

      <div className="about-borja-grid">
        <article className="about-borja-card">
          <h4>{t('home.reportingTitle')}</h4>
          <p>{t('home.reportingText')}</p>
        </article>
        <article className="about-borja-card">
          <h4>{t('home.automationTitle')}</h4>
          <p>{t('home.automationText')}</p>
        </article>
        <article className="about-borja-card">
          <h4>{t('home.analyticsTitle')}</h4>
          <p>{t('home.analyticsText')}</p>
        </article>
        <article className="about-borja-card">
          <h4>{t('home.improvementTitle')}</h4>
          <p>{t('home.improvementText')}</p>
        </article>
      </div>

      <div className="about-borja-actions">
        <a href="https://borjafelixrojas.odoo.com/about-us" target="_blank" rel="noreferrer" className="about-borja-link">{t('home.profileLink')}</a>
      </div>
    </section>
  </div>
  );
};

const NormativaPage = ({ params }: { params: { id: string } }) => {
  const ley = getLeyById(params.id);
  const [openCaps, setOpenCaps] = useState<Record<string, boolean>>({ 'lprl-cap1': true, 'lprl-cap3': true });
  const { t } = useLanguage();

  if (!ley) return <div className="empty-state">{t('common.notFoundNormative')}</div>;

  const toggleCap = (id: string) => {
    setOpenCaps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in">
      <div className="law-detail-header">
        <Link href="/">
          <button className="back-btn">← {t('common.back')}</button>
        </Link>
        <div className="law-detail-info">
          <div className="law-code" style={{ color: ley.color }}>{ley.codigo}</div>
          <h2>{ley.titulo}</h2>
          <p className="subtitle">{ley.subtitulo}</p>
        </div>
      </div>

      <div className="law-detail">
        {ley.capitulos.map(cap => (
          <div key={cap.id} className="capitulo">
            <div 
              className={`capitulo-header ${openCaps[cap.id] ? 'open' : ''}`}
              onClick={() => toggleCap(cap.id)}
            >
              <div className="capitulo-number" style={{ background: ley.color + '20', color: ley.color }}>
                {cap.numero}
              </div>
              <h3>{cap.titulo}</h3>
              <span className="chevron">▼</span>
            </div>
            
            {openCaps[cap.id] && (
              <div className="articulos-list">
                {cap.articulos.map(art => (
                  <div key={art.id} className="articulo-card fade-in" id={`art-${art.id}`}>
                    <div className="articulo-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                        <span className="art-number">Art. {art.numero}</span>
                        <span className="art-title">{art.titulo}</span>
                        <Badge type={art.badge} />
                      </div>
                      <button 
                        className="pdf-btn"
                        onClick={(e) => { e.preventDefault(); downloadToPDF(`art-${art.id}`, `Articulo_${art.numero}_${ley.id}`); }}
                        title={t('common.downloadPdf')}
                      >
                        📥 PDF
                      </button>
                    </div>
                    <p className="art-text">{art.texto}</p>
                    <div className="art-footer">
                      {art.tags.map(tag => <span key={tag} className="art-tag">#{tag}</span>)}
                      {art.boeUrl && <a href={art.boeUrl} className="art-boe-link" target="_blank" rel="noreferrer">{t('common.viewInBoe')}</a>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const BuscadorPage = () => {
  const [query, setQuery] = useState('');
  const [filterLey, setFilterLey] = useState<string | undefined>();
  const { language, t } = useLanguage();
  
  const results = useMemo(() => searchAll(query, { leyId: filterLey }), [query, filterLey]);
  const localizedResultFichas = useMemo(
    () => results.fichas.map((ficha) => localizeFicha(ficha, language)),
    [results.fichas, language],
  );

  return (
    <div className="fade-in">
      <header className="page-header">
        <h2>{t('search.title')}</h2>
        <p>{t('search.description')}</p>
      </header>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder={t('search.placeholder')} 
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      <div className="filters-row" id="search-filters">
        <button 
          className={`filter-chip ${!filterLey ? 'active' : ''}`}
          onClick={() => setFilterLey(undefined)}
          id="filter-tag-all"
        >
          {t('common.all')}
        </button>
        {leyes.map(ley => (
          <button 
            key={ley.id}
            className={`filter-chip ${filterLey === ley.id ? 'active' : ''}`}
            onClick={() => setFilterLey(ley.id)}
            id={`filter-tag-${ley.id}`}
          >
            {ley.id.toUpperCase()}
          </button>
        ))}
      </div>

      {!query ? (
        <div className="empty-state">
          <div className="empty-icon">⌨️</div>
          <p>{t('common.searchStart')}</p>
        </div>
      ) : results.articulos.length === 0 && results.fichas.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">😢</div>
          <p>{t('common.noResults', { query })}</p>
        </div>
      ) : (
        <div className="search-results">
          {results.articulos.length > 0 && (
            <>
              <div className="result-group-label">{t('search.normativeResults', { count: results.articulos.length })}</div>
              <div className="articulos-list" style={{ marginLeft: 0 }}>
                {results.articulos.map(res => (
                  <div key={res.articulo.id} className="articulo-card" id={`search-art-${res.articulo.id}`}>
                    <div className="articulo-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
                        <span className="art-number" style={{ color: res.ley.color }}>{res.ley.id.toUpperCase()} · Art. {res.articulo.numero}</span>
                        <span className="art-title">{res.articulo.titulo}</span>
                        <Badge type={res.articulo.badge} />
                      </div>
                      <button 
                        className="pdf-btn"
                        onClick={(e) => { e.preventDefault(); downloadToPDF(`search-art-${res.articulo.id}`, `Articulo_${res.articulo.numero}`); }}
                        title={t('common.downloadPdf')}
                      >
                        📥 PDF
                      </button>
                    </div>
                    <p className="art-text">{res.articulo.texto}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {localizedResultFichas.length > 0 && (
            <>
              <div className="result-group-label">{t('search.trainingResults', { count: localizedResultFichas.length })}</div>
              <div className="fichas-grid">
                {localizedResultFichas.map(ficha => (
                  <div key={ficha.id} className="ficha-card" id={`search-ficha-${ficha.id}`}>
                    <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
                      <button 
                        className="pdf-btn"
                        onClick={(e) => { e.preventDefault(); downloadToPDF(`search-ficha-${ficha.id}`, `Ficha_${ficha.id}`); }}
                        title={t('common.downloadPdf')}
                      >
                        📥 PDF
                      </button>
                    </div>
                    <div className={`ficha-level-badge ${ficha.nivel}`}>{getLevelLabel(ficha.nivel, t)}</div>
                    <div className="ficha-icon">{ficha.icono}</div>
                    <h3>{ficha.titulo}</h3>
                    <p className="ficha-objetivo">{ficha.objetivo}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const ReferenciasPage = () => {
  const { language, t } = useLanguage();
  const localizedReferencias = useMemo(
    () => referencias.map((ref) => localizeReference(ref, language)),
    [language],
  );

  return (
  <div className="fade-in">
    <header className="page-header">
      <h2>{t('references.title')}</h2>
      <p>{t('references.description')}</p>
    </header>

    <div className="ref-grid">
      {localizedReferencias.map(ref => (
        <div key={ref.id} className="ref-card">
          <div className={`ref-tipo ${ref.tipo}`}>{getReferenceTypeLabel(ref.tipo, t)}</div>
          <div className="ref-connection">
            <span className="ref-label">{ref.origen.label}</span>
            <span className="ref-arrow">→</span>
            <span className="ref-label">{ref.destino.label}</span>
          </div>
          <p className="ref-desc">{ref.descripcion}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

// ============================================================
// MICRO-CURSOS / QUIZ MODAL
// ============================================================
const QuizModal = ({ ficha, onClose, onFinish }: { ficha: any; onClose: () => void; onFinish: () => void }) => {
  const quiz = ficha.quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const { t } = useLanguage();

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (!quiz) return null;

  const handleSelect = (idx: number) => {
    if (showExplanation) return;
    setSelectedIdx(idx);
    setShowExplanation(true);
    const isCorrect = idx === quiz[currentQuestion].correctIndex;
    setAnswers(prev => [...prev, isCorrect]);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(c => c + 1);
      setSelectedIdx(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
      const passed = answers.filter(Boolean).length >= Math.ceil(quiz.length * 0.8);
      if (passed) {
        localStorage.setItem(`prl_quiz_${ficha.id}`, 'true');
        onFinish(); // To trigger a re-render in parent and show the badge
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content quiz-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {!finished ? (
          <div className="quiz-container fade-in">
            <div className="quiz-header">
              <span className="quiz-progress-text">{t('quiz.questionProgress', { current: currentQuestion + 1, total: quiz.length })}</span>
              <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{ width: `${((currentQuestion + 0.5) / quiz.length) * 100}%` }}></div>
              </div>
            </div>
            
            <h3 className="quiz-question">{quiz[currentQuestion].question}</h3>
            
            <div className="quiz-options">
              {quiz[currentQuestion].options.map((opt: string, i: number) => {
                let btnClass = "quiz-option-btn";
                if (showExplanation) {
                  if (i === quiz[currentQuestion].correctIndex) btnClass += " correct";
                  else if (i === selectedIdx) btnClass += " incorrect";
                  else btnClass += " disabled";
                }
                return (
                  <button key={i} className={btnClass} onClick={() => handleSelect(i)}>
                    <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                    <span className="quiz-option-text">{opt}</span>
                  </button>
                )
              })}
            </div>
            
            {showExplanation && (
              <div className={`quiz-explanation fade-in ${selectedIdx === quiz[currentQuestion].correctIndex ? 'success' : 'error'}`}>
                <h4>{selectedIdx === quiz[currentQuestion].correctIndex ? t('quiz.correct') : t('quiz.incorrect')}</h4>
                <p>{quiz[currentQuestion].explanation}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '16px'}}>
                  <span className="quiz-article-ref">📌 {quiz[currentQuestion].articleRef}</span>
                  <button className="hero-primary-btn" onClick={nextQuestion}>
                    {currentQuestion + 1 < quiz.length ? t('quiz.next') : t('quiz.results')}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-result fade-in">
            <div className="quiz-result-icon">
              {answers.filter(Boolean).length >= Math.ceil(quiz.length * 0.8) ? '🏆' : '📚'}
            </div>
            <h3>{answers.filter(Boolean).length >= Math.ceil(quiz.length * 0.8) ? t('quiz.passed') : t('quiz.failed')}</h3>
            <p>{t('quiz.score', { correct: answers.filter(Boolean).length, total: quiz.length })}</p>
            <div style={{marginTop: '24px'}}>
              <button className="hero-primary-btn" onClick={onClose}>{t('quiz.backToSheets')}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const FichasPage = () => {
  const [filterNivel, setFilterNivel] = useState<string | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<any | null>(null);
  // Un state para forzar re-render cuando se termina un quiz
  const [refreshIdx, forceUpdate] = useState(0);
  const { language, t } = useLanguage();
  const localizedFichas = useMemo(
    () => fichas.map((ficha) => localizeFicha(ficha, language)),
    [language],
  );
  
  const filteredFichas = filterNivel 
    ? localizedFichas.filter(f => f.nivel === filterNivel)
    : localizedFichas;

  return (
    <>
      <div className="fade-in">
        <header className="page-header">
          <h2>{t('training.title')}</h2>
          <p>{t('training.description')}</p>
        </header>

        <div className="tabs-row" id="nivel-tabs">
          <button 
            className={`tab-btn ${!filterNivel ? 'active' : ''}`}
            onClick={() => setFilterNivel(null)}
            id="tab-nivel-all"
          >
            {t('common.allFeminine')}
          </button>
          <button 
            className={`tab-btn ${filterNivel === 'basico' ? 'active' : ''}`}
            onClick={() => setFilterNivel('basico')}
            id="tab-nivel-basico"
          >
            {t('levels.basico')}
          </button>
          <button 
            className={`tab-btn ${filterNivel === 'intermedio' ? 'active' : ''}`}
            onClick={() => setFilterNivel('intermedio')}
            id="tab-nivel-intermedio"
          >
            {t('levels.intermedio')}
          </button>
          <button 
            className={`tab-btn ${filterNivel === 'avanzado' ? 'active' : ''}`}
            onClick={() => setFilterNivel('avanzado')}
            id="tab-nivel-avanzado"
          >
            {t('levels.avanzado')}
          </button>
        </div>

        <div className="fichas-grid" key={refreshIdx}>
          {filteredFichas.map(ficha => {
            const isCompleted = localStorage.getItem(`prl_quiz_${ficha.id}`) === 'true';
            
            return (
            <div key={ficha.id} className="ficha-card" id={`ficha-${ficha.id}`}>
              <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, display: 'flex', gap: '8px' }}>
                <button 
                  className="pdf-btn"
                  onClick={(e) => { e.preventDefault(); downloadToPDF(`ficha-${ficha.id}`, `Ficha_${ficha.id}`); }}
                  title={t('common.downloadPdf')}
                >
                  📥 PDF
                </button>
              </div>
              <div className={`ficha-level-badge ${ficha.nivel}`}>{getLevelLabel(ficha.nivel, t)}</div>
              <div className="ficha-icon">{ficha.icono}</div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <h3>{ficha.titulo}</h3>
                {isCompleted && <span style={{fontSize: '1.2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'}} title={t('quiz.completedCourse')}>✅</span>}
              </div>
              <div className="ficha-meta">
                <span>⏱️ {ficha.duracion}</span>
                <span>👥 {ficha.colectivo}</span>
              </div>
              <p className="ficha-objetivo">{ficha.objetivo}</p>
              <ul className="ficha-contenido">
                {ficha.contenido.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
              
              {ficha.quiz && (
                <div style={{marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
                  <button 
                    className="hero-primary-btn" 
                    style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '8px', fontSize: '0.85rem'}}
                    onClick={() => setSelectedQuiz(ficha)}
                  >
                    {t('quiz.startCourse')}
                  </button>
                </div>
              )}
              
              {!ficha.quiz && (
                <div className="ficha-normativa" style={{marginTop: 'auto'}}>
                  {ficha.normativaRelacionada.map(n => <span key={n} className="ficha-norm-tag">{n}</span>)}
                </div>
              )}
            </div>
            )
          })}
        </div>
      </div>
      
      {selectedQuiz && (
        <QuizModal 
          ficha={selectedQuiz} 
          onClose={() => setSelectedQuiz(null)} 
          onFinish={() => forceUpdate((u: number) => u + 1)}
        />
      )}
    </>
  );
};

// ── Motor de respuesta demo ──────────────────────────────────
function buildDemoResponse(query: string, t: (key: string, params?: Record<string, string | number>) => string): string {
  const ctx = buildNormativeContext(query);
  const results = searchAll(query);

  if (ctx.articleMatches === 0 && ctx.fichaMatches === 0) {
    return t('ai.noMatches', { query });
  }

  const lineas: string[] = [];

  if (results.articulos.length > 0) {
    lineas.push(t('ai.relevantArticles'));
    results.articulos.slice(0, 5).forEach((res) => {
      const extracto = res.articulo.texto.length > 300
        ? res.articulo.texto.slice(0, 300) + '…'
        : res.articulo.texto;
      lineas.push(`▸ [${res.ley.codigo} · Art. ${res.articulo.numero}] **${res.articulo.titulo}**\n${extracto}\n`);
    });
  }

  if (results.fichas.length > 0) {
    lineas.push(t('ai.relatedSheets'));
    results.fichas.slice(0, 2).forEach((f) => {
      lineas.push(`▸ ${f.titulo} (${getLevelLabel(f.nivel, t)}) — ${f.objetivo.slice(0, 180)}…`);
    });
  }

  lineas.push(t('ai.repositorySummary', { articles: ctx.articleMatches, sheets: ctx.fichaMatches }));

  return lineas.join('\n');
}

const LS_KEY = 'prl_consultor_history';

// Extrae el bloque de fuentes del final del mensaje
const parseMessage = (content: string, sourceLabel: string): { body: string; sources: string | null } => {
  const idx = content.lastIndexOf(`\n\n${sourceLabel}`);
  if (idx === -1) return { body: content, sources: null };
  return { body: content.slice(0, idx).trim(), sources: content.slice(idx + 2).trim() };
};

const ConsultorIAPage = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [backendActive, setBackendActive] = useState<boolean | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const demoPromptsByCategory = useMemo(() => getDemoPromptsByCategory(language, t), [language, t]);

  // Inicializar desde localStorage o con mensaje de bienvenida
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) return JSON.parse(saved) as ChatMessage[];
    } catch { /* ignore */ }
    return [getWelcomeMessage(t)];
  });

  // Guardar en localStorage cuando cambian los mensajes
  useEffect(() => {
    try { localStorage.setItem(LS_KEY, JSON.stringify(messages)); } catch { /* ignore */ }
  }, [messages]);

  // Auto-scroll al último mensaje
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((data) => setBackendActive(data?.ok === true))
      .catch(() => setBackendActive(false));
  }, []);

  const clearHistory = () => {
    localStorage.removeItem(LS_KEY);
    setMessages([getWelcomeMessage(t)]);
  };

  const copyMessage = (content: string, idx: number) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    });
  };

  const handleAsk = async (customQ?: string) => {
    const q = (customQ ?? question).trim();
    if (!q || loading) return;

    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: q }]);
    setQuestion('');

    if (backendActive) {
      const ctx = buildNormativeContext(q);
      const systemPrompt = [
        'Eres un consultor experto en PRL España para técnicos de prevención y mandos intermedios.',
        'Responde en español claro, con enfoque aplicable y operativo.',
        'Cita artículos en formato [Ley · Art. N] cuando estén disponibles en el contexto. No inventes artículos.',
        'Si no tienes base suficiente para responder con seguridad, dilo explícitamente.',
        ctx.contextText ? `CONTEXTO NORMATIVO INTERNO:\n${ctx.contextText}` : '',
      ].filter(Boolean).join('\n\n');

      try {
        const response = await fetch('/api/ollama/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'llama3.1:8b',
            stream: false,
            options: { temperature: 0.2, num_predict: 700 },
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: q },
            ],
          }),
        });
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const data = await response.json();
        const answer = data?.message?.content?.trim();
        if (!answer) throw new Error('Sin respuesta del modelo.');
        const footer = `\n\n${t('ai.historyKey')} ${ctx.articleMatches} ${t('common.articles')} · ${ctx.fichaMatches} ${t('common.sheets')}`;
        setMessages((prev) => [...prev, { role: 'assistant', content: answer + footer }]);
      } catch {
        setMessages((prev) => [...prev, { role: 'assistant', content: t('ai.connectionError') }]);
      }
    } else {
      await new Promise((r) => setTimeout(r, 700));
      const demoAnswer = buildDemoResponse(q, t);
      setMessages((prev) => [...prev, { role: 'assistant', content: demoAnswer }]);
    }

    setLoading(false);
  };

  return (
    <div className="fade-in">
      <header className="page-header">
        <h2>{t('ai.title')}</h2>
        <p>{t('ai.description')}</p>
      </header>

      <div className="ai-panel">

        {backendActive === false && (
          <div className="ai-inline-note ai-demo-banner">
            <span className="ai-demo-badge">{t('ai.previewBadge')}</span>
            <span>{t('ai.previewText')}</span>
          </div>
        )}
        {backendActive === true && (
          <div className="ai-inline-note ai-live-banner">
            <span className="ai-live-badge">{t('ai.liveBadge')}</span>
            <span>{t('ai.liveText')}</span>
          </div>
        )}
        {backendActive === null && (
          <div className="ai-inline-note">{t('ai.checking')}</div>
        )}

        {/* Presets por categoría */}
        <div className="ai-presets-wrap">
          <div className="ai-presets-tabs">
            {demoPromptsByCategory.map((cat, i) => (
              <button
                key={i}
                className={`ai-preset-tab ${activeCategory === i ? 'active' : ''}`}
                style={{ '--tab-color': cat.color } as React.CSSProperties}
                onClick={() => setActiveCategory(i)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="ai-preset-chips">
            {demoPromptsByCategory[activeCategory].prompts.map((p) => (
              <button key={p} className="ai-demo-chip" onClick={() => handleAsk(p)} disabled={loading}>
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="ai-chat" ref={chatRef}>
          {messages.map((m, idx) => {
            const { body, sources } = parseMessage(m.content, t('ai.historyKey'));
            return (
              <div key={idx} className={`ai-msg ai-msg-${m.role}`}>
                <div className="ai-msg-header">
                  <span className="ai-msg-role">{m.role === 'assistant' ? t('ai.assistant') : t('ai.you')}</span>
                  {m.role === 'assistant' && (
                    <button
                      className={`ai-copy-btn ${copiedIdx === idx ? 'copied' : ''}`}
                      onClick={() => copyMessage(body, idx)}
                      title={t('ai.copyTitle')}
                    >
                      {copiedIdx === idx ? t('ai.copied') : t('ai.copy')}
                    </button>
                  )}
                </div>
                <p style={{ whiteSpace: 'pre-wrap' }}>{body}</p>
                {sources && (
                  <div className="ai-sources-chip">
                    📎 {sources}
                  </div>
                )}
              </div>
            );
          })}
          {loading && (
            <div className="ai-msg ai-msg-assistant">
              <div className="ai-msg-header">
                <span className="ai-msg-role">{t('ai.assistant')}</span>
              </div>
              <p className="ai-typing">
                <span /><span /><span />
              </p>
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="ai-composer">
          <textarea
            className="ai-input ai-textarea"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAsk(); } }}
            placeholder={t('ai.placeholder')}
          />
          <div className="ai-composer-actions">
            <button className="audit-action-btn" onClick={() => handleAsk()} disabled={loading || !question.trim()}>
              {loading ? t('common.loadingAi') : t('common.consult')}
            </button>
            <button
              className="audit-action-btn ai-clear-btn"
              onClick={clearHistory}
              title={t('common.clearHistory')}
            >
              🗑️
            </button>
          </div>
        </div>

        <div className="ai-activation-note">
          <strong>{t('ai.activationTitle')}</strong> {t('ai.activationText')}
          <span className="ai-activation-link">{t('ai.activationLink')}</span>
        </div>

      </div>
    </div>
  );
};

// ============================================================
// AUDITORÍA INTERACTIVA
// ============================================================

// ── Exportar Auditoría a PDF (jsPDF text-based) ──────────────────────────
const exportAuditoriaPDF = (
  sector: ReturnType<typeof getSectores>[0],
  leyesAuditoria: typeof leyes,
  checked: Set<string>,
  totalIds: string[],
  t: (key: string, params?: Record<string, string | number>) => string,
  locale: string
) => {
  const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
  const pageW = 210;
  const pageH = 297;
  const marginL = 14;
  const marginR = 14;
  const contentW = pageW - marginL - marginR;
  const now = new Date().toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  let y = 0;

  const checkY = (needed = 10) => {
    if (y + needed > pageH - 14) {
      doc.addPage();
      y = 16;
    }
  };

  // ── Portada ──
  doc.setFillColor(8, 12, 20);
  doc.rect(0, 0, pageW, 55, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('PRL España', marginL, 22);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(t('audit.pdfTitle'), marginL, 30);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text(`Sector: ${sector.icon} ${sector.label}`, marginL, 40);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(t('audit.pdfGenerated', { date: now }), marginL, 49);

  // ── Resumen ──
  y = 66;
  doc.setTextColor(30, 30, 30);
  doc.setFillColor(240, 249, 255);
  doc.roundedRect(marginL, y, contentW, 26, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 80, 160);
  doc.text(t('audit.pdfSummary'), marginL + 4, y + 7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 30, 30);
  doc.setFontSize(9);
  const progress = totalIds.length ? Math.round((checked.size / totalIds.length) * 100) : 0;
  doc.text(
    t('audit.pdfVerified', { checked: checked.size, total: totalIds.length, pending: totalIds.length - checked.size, progress }),
    marginL + 4, y + 15
  );
  doc.text(t('audit.pdfIncluded', { laws: leyesAuditoria.map(l => l.codigo).join(', ') }), marginL + 4, y + 22);
  y += 34;

  // ── Artículos ──
  for (const ley of leyesAuditoria) {
    checkY(14);
    doc.setFillColor(20, 30, 60);
    doc.rect(marginL, y, contentW, 9, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(`${ley.icono}  ${ley.codigo} — ${ley.titulo}`, marginL + 3, y + 6);
    y += 12;

    for (const cap of ley.capitulos) {
      checkY(8);
      doc.setTextColor(80, 100, 140);
      doc.setFont('helvetica', 'bolditalic');
      doc.setFontSize(8.5);
      doc.text(`${cap.numero}  ${cap.titulo}`, marginL + 2, y);
      y += 5;

      for (const art of cap.articulos) {
        checkY(7);
        const isChecked = checked.has(art.id);
        // checkbox symbol
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(isChecked ? 22 : 150, isChecked ? 163 : 150, isChecked ? 74 : 150);
        const mark = isChecked ? '[✓]' : '[ ]';
        doc.text(mark, marginL + 2, y);
        doc.setTextColor(isChecked ? 30 : 80, 30, 30);
        const label = `Art. ${art.numero}  ${art.titulo}`;
        const lines = doc.splitTextToSize(label, contentW - 16) as string[];
        doc.text(lines, marginL + 13, y);
        y += Math.max(lines.length * 4.5, 6);
      }
      y += 2;
    }
    y += 4;
  }

  // ── Pie de página en todas las páginas ──
  const total = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(160, 160, 160);
    doc.text(t('audit.pdfFooter'), marginL, pageH - 6);
    doc.text(`${t('common.pageAbbr')} ${i} / ${total}`, pageW - marginR, pageH - 6, { align: 'right' });
  }

  doc.save(`Auditoria_PRL_${sector.id}_${new Date().toISOString().slice(0,10)}.pdf`);
};

const AuditoriaPage = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expandedArts, setExpandedArts] = useState<Set<string>>(new Set());
  const { t, locale } = useLanguage();
  const sectores = useMemo(() => getSectores(t), [t]);

  const sector = sectores.find(s => s.id === selectedSector);

  const leyesAuditoria = useMemo(() => {
    if (!sector) return [];
    return sector.leyIds.map(id => leyes.find(l => l.id === id)).filter(Boolean) as typeof leyes;
  }, [sector]);

  const totalIds = useMemo(() => {
    const ids: string[] = [];
    leyesAuditoria.forEach(ley =>
      ley.capitulos.forEach(cap =>
        cap.articulos.forEach(art => ids.push(art.id))
      )
    );
    return ids;
  }, [leyesAuditoria]);

  const progress = totalIds.length ? Math.round((checked.size / totalIds.length) * 100) : 0;

  const toggleCheck = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedArts(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const checkAll = () => setChecked(new Set(totalIds));
  const uncheckAll = () => setChecked(new Set());

  const handleReset = () => {
    setSelectedSector(null);
    setChecked(new Set());
    setExpandedArts(new Set());
  };

  // ── STEP 1: sector selection ──
  if (!selectedSector) {
    return (
      <div className="fade-in">
        <header className="page-header">
          <h2>{t('audit.title')}</h2>
          <p>{t('audit.description')}</p>
        </header>
        <div className="auditoria-sectores-grid">
          {sectores.map(s => (
            <button
              key={s.id}
              className="auditoria-sector-card"
              style={{ '--sector-color': s.color } as React.CSSProperties}
              onClick={() => setSelectedSector(s.id)}
              id={`sector-${s.id}`}
            >
              <span className="auditoria-sector-icon">{s.icon}</span>
              <strong>{s.label}</strong>
              <span className="auditoria-sector-desc">{s.desc}</span>
              <span className="auditoria-sector-leyes">
                {s.leyIds.length === 1 ? t('audit.regulationsCountOne', { count: s.leyIds.length }) : t('audit.regulationsCount', { count: s.leyIds.length })}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── STEP 2: checklist ──
  return (
    <div className="fade-in">
      {/* Header */}
      <div className="auditoria-header">
        <button className="back-btn" onClick={handleReset}>{t('audit.changeSector')}</button>
        <div className="auditoria-header-info">
          <span className="auditoria-sector-chip" style={{ '--sector-color': sector!.color } as React.CSSProperties}>
            {sector!.icon} {sector!.label}
          </span>
          <h2>{t('audit.checklistTitle')}</h2>
        </div>
        <div className="auditoria-header-actions">
          <button className="audit-action-btn" onClick={checkAll}>{t('audit.checkAll')}</button>
          <button className="audit-action-btn" onClick={uncheckAll}>{t('audit.clear')}</button>
          <button
            className="audit-action-btn audit-export-btn"
            onClick={() => exportAuditoriaPDF(sector!, leyesAuditoria, checked, totalIds, t, locale)}
            title={t('audit.exportPdfTitle')}
          >
            {t('audit.exportPdf')}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="auditoria-progress-wrap">
        <div className="auditoria-progress-labels">
          <span>{t('audit.verifiedOf', { checked: checked.size, total: totalIds.length })}</span>
          <span className="auditoria-progress-pct">{progress}%</span>
        </div>
        <div className="auditoria-progress-track">
          <div
            className="auditoria-progress-fill"
            style={{ width: `${progress}%`, background: sector!.color }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="auditoria-stats">
        <div className="auditoria-stat">
          <span className="auditoria-stat-num">{totalIds.length}</span>
          <span className="auditoria-stat-label">{t('audit.totalRequirements')}</span>
        </div>
        <div className="auditoria-stat">
          <span className="auditoria-stat-num" style={{ color: '#34d399' }}>{checked.size}</span>
          <span className="auditoria-stat-label">{t('common.checked')}</span>
        </div>
        <div className="auditoria-stat">
          <span className="auditoria-stat-num" style={{ color: '#fbbf24' }}>{totalIds.length - checked.size}</span>
          <span className="auditoria-stat-label">{t('common.pending')}</span>
        </div>
        <div className="auditoria-stat">
          <span className="auditoria-stat-num">{leyesAuditoria.length}</span>
          <span className="auditoria-stat-label">{t('common.regulations')}</span>
        </div>
      </div>

      {/* Checklist grouped by ley → capitulo */}
      <div className="auditoria-checklist">
        {leyesAuditoria.map(ley => {
          const leyChecked = ley.capitulos.flatMap(c => c.articulos).filter(a => checked.has(a.id)).length;
          const leyTotal = ley.capitulos.flatMap(c => c.articulos).length;
          return (
            <div key={ley.id} className="auditoria-ley-section">
              <div className="auditoria-ley-header" style={{ '--ley-color': ley.color } as React.CSSProperties}>
                <span className="auditoria-ley-icon">{ley.icono}</span>
                <div>
                  <div className="auditoria-ley-code">{ley.codigo}</div>
                  <div className="auditoria-ley-title">{ley.titulo}</div>
                </div>
                <div className="auditoria-ley-count">
                  {leyChecked}/{leyTotal}
                </div>
              </div>

              {ley.capitulos.map(cap => (
                <div key={cap.id} className="auditoria-capitulo">
                  <div className="auditoria-cap-label">
                    <span style={{ opacity: 0.5 }}>{cap.numero}</span> {cap.titulo}
                  </div>
                  {cap.articulos.map(art => {
                    const isChecked = checked.has(art.id);
                    const isExpanded = expandedArts.has(art.id);
                    return (
                      <div
                        key={art.id}
                        className={`auditoria-item ${isChecked ? 'auditoria-item--checked' : ''}`}
                        style={{ '--ley-color': ley.color } as React.CSSProperties}
                      >
                        <label className="auditoria-item-label">
                          <input
                            type="checkbox"
                            className="auditoria-checkbox"
                            checked={isChecked}
                            onChange={() => toggleCheck(art.id)}
                          />
                          <span className="auditoria-item-art">Art. {art.numero}</span>
                          <span className="auditoria-item-title">{art.titulo}</span>
                          <Badge type={art.badge} />
                        </label>
                        <button
                          className="auditoria-expand-btn"
                          onClick={() => toggleExpand(art.id)}
                          title={isExpanded ? t('audit.hideDetail') : t('audit.showDetail')}
                        >
                          {isExpanded ? '▲' : '▼'}
                        </button>
                        {isExpanded && (
                          <p className="auditoria-item-text fade-in">{art.texto}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {progress === 100 && (
        <div className="auditoria-complete fade-in">
          <span>✅</span>
          <div>
            <strong>{t('common.completedAudit')}</strong>
            <p>{t('common.completedAuditText', { sector: sector!.label })}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// MAPAS DE ROLES
// ============================================================

const RolesPage = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const localizedRoles = useMemo(
    () => rolesData.map((roleData) => localizeRole(roleData, language)),
    [language],
  );

  const role = localizedRoles.find(r => r.id === selectedRole);

  return (
    <div className="fade-in">
      <header className="page-header">
        <h2>{t('roles.title')}</h2>
        <p>{t('roles.description')}</p>
      </header>

      {!selectedRole ? (
        <div className="roles-grid fade-in">
          {localizedRoles.map(r => (
            <div key={r.id} className="role-card" onClick={() => setSelectedRole(r.id)} id={`role-card-${r.id}`}>
              <div className="role-icon">{r.icon}</div>
              <h3>{r.shortLabel}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="role-dashboard fade-in">
          <button className="back-btn" onClick={() => setSelectedRole(null)}>← {t('common.backToRoles')}</button>
          
          <div className="role-dashboard-header">
            <div className="role-icon-large">{role?.icon}</div>
            <div>
              <h2>{role?.label}</h2>
              <p>{role?.description}</p>
            </div>
          </div>
          
          <div className="role-sections-grid">
            <div className="role-section left-column">
              <h3>{t('roles.obligations')}</h3>
              <div className="role-items-list">
                {role?.obligations.map((obl, i) => (
                  <div key={i} className="role-item-card fade-in-delay-1">
                    <h4>{obl.title}</h4>
                    <p>{obl.description}</p>
                    <Link href={`/normativa/${obl.leyId}`}>
                      {/* En versión final podríamos enviar un state/#hash al artículo. Dejamos el Link completo a la norma para facilidad de UX. */}
                      <a className="role-link">
                        {t('roles.viewArticle', { law: obl.leyId.toUpperCase(), article: obl.articuloId.split('-art')[1] || obl.articuloId })}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="right-column">
              <div className="role-section">
                <h3>{t('roles.risks')}</h3>
                <ul className="role-risks-list fade-in-delay-2">
                  {role?.risks.map((risk, i) => <li key={i}>⚠️ {risk}</li>)}
                </ul>
              </div>
              
              <div className="role-section">
                <h3>{t('roles.training')}</h3>
                <div className="role-fichas-list fade-in-delay-3">
                  {role?.fichas.map(fId => {
                    const f = fichas.find(x => x.id === fId);
                    if (!f) return null;
                    const localizedFicha = localizeFicha(f, language);
                    return (
                      <Link key={f.id} href="/fichas">
                        <a className="role-ficha-card">
                          <span className="ficha-icon-small">{f.icono}</span>
                          <span style={{flex: 1}}>{localizedFicha.titulo}</span>
                          <span className={`ficha-level-badge ${localizedFicha.nivel}`} style={{position: 'static', margin: 0}}>{getLevelLabel(localizedFicha.nivel, t)}</span>
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// GENERADOR DE DOCUMENTOS PRL
// ============================================================

const DocumentosPage = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [preview, setPreview] = useState<string | null>(null);
  const { t } = useLanguage();

  const template = documentosData.find(d => d.id === selectedDoc);

  const fillTemplate = (tpl: string, values: Record<string, string>) =>
    tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => values[k] || `[${k}]`);

  const handleGenerate = () => {
    if (!template) return;
    const filled = fillTemplate(template.contentTemplate, formValues);
    setPreview(filled);
  };

  const handlePrint = () => {
    const el = document.getElementById('doc-preview-area');
    if (!el) return;
    const win = window.open('', '_blank')!;
    win.document.write(`
      <html><head><title>${t('docs.previewTitle')}</title>
      <style>
        body { font-family: Georgia, serif; padding: 40px; color: #111; line-height: 1.7; }
        h1 { font-size: 1.4rem; border-bottom: 2px solid #333; padding-bottom: 8px; }
        h3 { font-size: 1rem; margin-top: 24px; }
      </style></head>
      <body>${el.innerHTML}</body></html>`);
    win.document.close();
    win.print();
  };

  return (
    <div className="fade-in">
      <header className="page-header">
        <h2>{t('docs.title')}</h2>
        <p>{t('docs.description')}</p>
      </header>

      {!selectedDoc ? (
        <div className="docs-grid">
          {documentosData.map(doc => (
            <div key={doc.id} className="doc-template-card" onClick={() => { setSelectedDoc(doc.id); setFormValues({}); setPreview(null); }} id={`doc-card-${doc.id}`}>
              <div className="doc-icon">{doc.icon}</div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <span className="doc-cta">{t('common.createDocument')}</span>
            </div>
          ))}
        </div>
      ) : preview ? (
        <div className="doc-preview-wrapper fade-in">
          <div className="doc-preview-toolbar">
            <button className="back-btn" onClick={() => setPreview(null)}>← {t('common.editData')}</button>
            <div style={{display:'flex', gap: '10px'}}>
              <button className="pdf-btn" onClick={handlePrint}>{t('common.printPdf')}</button>
              <button className="back-btn" onClick={() => { setSelectedDoc(null); setPreview(null); }}>{t('common.newDocument')}</button>
            </div>
          </div>
          <div className="doc-preview-paper" id="doc-preview-area"
            dangerouslySetInnerHTML={{ __html:
              preview
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/^# (.+)/gm, '<h1>$1</h1>')
                .replace(/^### (.+)/gm, '<h3>$1</h3>')
                .replace(/^\d+\. (.+)/gm, '<li>$1</li>')
            }}
          />
        </div>
      ) : (
        <div className="doc-form-wrapper fade-in">
          <button className="back-btn" onClick={() => setSelectedDoc(null)}>← {t('common.backToTemplates')}</button>
          <div className="doc-form-card">
            <div className="doc-form-header">
              <span className="doc-icon">{template?.icon}</span>
              <div>
                <h3>{template?.title}</h3>
                <p>{template?.description}</p>
              </div>
            </div>
            <div className="doc-fields-grid">
              {template?.fields.map(field => (
                <div key={field.name} className={`doc-field ${field.type === 'textarea' ? 'doc-field-full' : ''}`}>
                  <label className="doc-label">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      className="doc-input doc-textarea"
                      rows={4}
                      value={formValues[field.name] || ''}
                      onChange={e => setFormValues(v => ({ ...v, [field.name]: e.target.value }))}
                      placeholder={t('docs.placeholder', { label: field.label.toLowerCase() })}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className="doc-input doc-select"
                      value={formValues[field.name] || ''}
                      onChange={e => setFormValues(v => ({ ...v, [field.name]: e.target.value }))}
                    >
                      <option value="">{t('common.selectOption')}</option>
                      {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input
                      className="doc-input"
                      type={field.type}
                      value={formValues[field.name] || ''}
                      onChange={e => setFormValues(v => ({ ...v, [field.name]: e.target.value }))}
                      placeholder={field.label}
                    />
                  )}
                </div>
              ))}
            </div>
            <div style={{marginTop: '28px', textAlign: 'right'}}>
              <button className="hero-primary-btn" onClick={handleGenerate}>{t('common.generateDocument')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="app-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <button
        className={`sidebar-backdrop ${isSidebarOpen ? 'show' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
        aria-label={t('common.closeMenu')}
      />
      <main className="main-content">
        <div className="main-toolbar">
        <div className="mobile-topbar">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsSidebarOpen(true)}
            aria-label={t('common.openMenu')}
          >
            ☰
          </button>
          <div className="mobile-topbar-title">{t('app.title')}</div>
        </div>
          <LanguageSwitcher />
        </div>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/mapa-roles" component={RolesPage} />
          <Route path="/normativa/:id" component={NormativaPage} />
          <Route path="/buscador" component={BuscadorPage} />
          <Route path="/referencias" component={ReferenciasPage} />
          <Route path="/fichas" component={FichasPage} />
          <Route path="/auditoria" component={AuditoriaPage} />
          <Route path="/consultor-ia" component={ConsultorIAPage} />
          <Route path="/generador-docs" component={DocumentosPage} />
          <Route>
            <div className="empty-state">{t('common.notFoundPage')}</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
