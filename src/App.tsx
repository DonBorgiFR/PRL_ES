import { useState, useMemo } from 'react';
import { Route, Switch, useLocation, Link } from 'wouter';
import brandLogo from '../logo.jpeg';
import {
  leyes,
  referencias,
  fichas,
  getLeyById,
  searchAll,
  buildNormativeContext
} from './data';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

// ============================================================
// COMPONENTS
// ============================================================

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [location] = useLocation();

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
            <h1>PRL España</h1>
            <span>Control de Gestión · Ingeniería de Datos · PRL</span>
          </div>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section-label">Principal</div>
        <Link href="/">
          <a className={`nav-item ${location === '/' ? 'active' : ''}`} id="link-nav-home" onClick={closeOnMobile}>
            <span className="nav-icon">🏠</span> Inicio
          </a>
        </Link>
        <Link href="/buscador">
          <a className={`nav-item ${location === '/buscador' ? 'active' : ''}`} id="link-nav-search" onClick={closeOnMobile}>
            <span className="nav-icon">🔍</span> Buscador Inteligente
          </a>
        </Link>
        
        <div className="nav-section-label">Normativa</div>
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
        
        <div className="nav-section-label">Recursos</div>
        <Link href="/referencias">
          <a className={`nav-item ${location === '/referencias' ? 'active' : ''}`} id="link-nav-refs" onClick={closeOnMobile}>
            <span className="nav-icon">🔗</span> Referencias Cruzadas
          </a>
        </Link>
        <Link href="/fichas">
          <a className={`nav-item ${location === '/fichas' ? 'active' : ''}`} id="link-nav-fichas" onClick={closeOnMobile}>
            <span className="nav-icon">🎓</span> Fichas de Capacitación
          </a>
        </Link>
        <Link href="/auditoria">
          <a className={`nav-item ${location === '/auditoria' ? 'active' : ''}`} id="link-nav-auditoria" onClick={closeOnMobile}>
            <span className="nav-icon">✅</span> Auditoría Interactiva
          </a>
        </Link>
        <Link href="/consultor-ia">
          <a className={`nav-item ${location === '/consultor-ia' ? 'active' : ''}`} id="link-nav-ai" onClick={closeOnMobile}>
            <span className="nav-icon">🤖</span> Consultor IA Local
          </a>
        </Link>
      </nav>
    </aside>
  );
};

const Badge = ({ type }: { type: 'tecnico' | 'divulgativo' | 'ambos' }) => {
  const labels = {
    tecnico: 'Perfil Técnico',
    divulgativo: 'Divulgativo',
    ambos: 'General'
  };
  return <span className={`badge badge-${type}`}>{labels[type]}</span>;
};

// ============================================================
// PAGES
// ============================================================

const HomePage = () => (
  <div className="fade-in">
    <header className="home-hero">
      <h2 id="hero-title">Transformando normativa en <span className="gradient-text">decisiones estratégicas</span></h2>
      <p id="hero-desc">Plataforma de consulta PRL con enfoque de ingeniería y control de gestión: del cumplimiento legal a la ejecución operativa medible.</p>
    </header>
    
    <div className="home-stats" id="stats-container">
      <div className="home-stat" id="stat-normas">
        <span className="num">{leyes.length}</span>
        <span className="label">Normas Base</span>
      </div>
      <div className="home-stat" id="stat-fichas">
        <span className="num">{fichas.length}</span>
        <span className="label">Fichas Formativas</span>
      </div>
      <div className="home-stat" id="stat-conexiones">
        <span className="num">{referencias.length}</span>
        <span className="label">Conexiones</span>
      </div>
    </div>
    
    <div className="nav-section-label" style={{ paddingLeft: 0, marginBottom: '1rem' }}>Explorar Normativa</div>
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
                BOE ↗
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const NormativaPage = ({ params }: { params: { id: string } }) => {
  const ley = getLeyById(params.id);
  const [openCaps, setOpenCaps] = useState<Record<string, boolean>>({ 'lprl-cap1': true, 'lprl-cap3': true });

  if (!ley) return <div className="empty-state">Normativa no encontrada</div>;

  const toggleCap = (id: string) => {
    setOpenCaps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fade-in">
      <div className="law-detail-header">
        <Link href="/">
          <button className="back-btn">← Volver</button>
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
                  <div key={art.id} className="articulo-card fade-in">
                    <div className="articulo-header">
                      <span className="art-number">Art. {art.numero}</span>
                      <span className="art-title">{art.titulo}</span>
                      <Badge type={art.badge} />
                    </div>
                    <p className="art-text">{art.texto}</p>
                    <div className="art-footer">
                      {art.tags.map(tag => <span key={tag} className="art-tag">#{tag}</span>)}
                      {art.boeUrl && <a href={art.boeUrl} className="art-boe-link" target="_blank" rel="noreferrer">Ver en BOE ↗</a>}
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
  
  const results = useMemo(() => searchAll(query, { leyId: filterLey }), [query, filterLey]);

  return (
    <div className="fade-in">
      <header className="page-header">
        <h2>Buscador Inteligente</h2>
        <p>Encuentra artículos específicos, definiciones o fichas de capacitación en toda la base normativa.</p>
      </header>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Buscar 'evaluación de riesgos', 'EPIS', 'caídas'..." 
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
          Todo
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
          <p>Escribe algo para empezar a buscar...</p>
        </div>
      ) : results.articulos.length === 0 && results.fichas.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">😢</div>
          <p>No se encontraron resultados para "{query}"</p>
        </div>
      ) : (
        <div className="search-results">
          {results.articulos.length > 0 && (
            <>
              <div className="result-group-label">Artículos de Normativa ({results.articulos.length})</div>
              <div className="articulos-list" style={{ marginLeft: 0 }}>
                {results.articulos.map(res => (
                  <div key={res.articulo.id} className="articulo-card">
                    <div className="articulo-header">
                      <span className="art-number" style={{ color: res.ley.color }}>{res.ley.id.toUpperCase()} · Art. {res.articulo.numero}</span>
                      <span className="art-title">{res.articulo.titulo}</span>
                      <Badge type={res.articulo.badge} />
                    </div>
                    <p className="art-text">{res.articulo.texto}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {results.fichas.length > 0 && (
            <>
              <div className="result-group-label">Fichas de Capacitación ({results.fichas.length})</div>
              <div className="fichas-grid">
                {results.fichas.map(ficha => (
                  <div key={ficha.id} className="ficha-card">
                    <div className={`ficha-level-badge ${ficha.nivel}`}>{ficha.nivel}</div>
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

const ReferenciasPage = () => (
  <div className="fade-in">
    <header className="page-header">
      <h2>Referencias Cruzadas</h2>
      <p>Explora cómo se conectan y desarrollan los diferentes marcos normativos entre sí.</p>
    </header>

    <div className="ref-grid">
      {referencias.map(ref => (
        <div key={ref.id} className="ref-card">
          <div className={`ref-tipo ${ref.tipo}`}>{ref.tipo}</div>
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

const FichasPage = () => {
  const [filterNivel, setFilterNivel] = useState<string | null>(null);
  
  const filteredFichas = filterNivel 
    ? fichas.filter(f => f.nivel === filterNivel)
    : fichas;

  return (
    <div className="fade-in">
      <header className="page-header">
        <h2>Fichas de Capacitación</h2>
        <p>Contenido formativo estructurado en tres niveles para diferentes colectivos de la organización.</p>
      </header>

      <div className="tabs-row" id="nivel-tabs">
        <button 
          className={`tab-btn ${!filterNivel ? 'active' : ''}`}
          onClick={() => setFilterNivel(null)}
          id="tab-nivel-all"
        >
          Todas
        </button>
        <button 
          className={`tab-btn ${filterNivel === 'basico' ? 'active' : ''}`}
          onClick={() => setFilterNivel('basico')}
          id="tab-nivel-basico"
        >
          Básico
        </button>
        <button 
          className={`tab-btn ${filterNivel === 'intermedio' ? 'active' : ''}`}
          onClick={() => setFilterNivel('intermedio')}
          id="tab-nivel-intermedio"
        >
          Intermedio
        </button>
        <button 
          className={`tab-btn ${filterNivel === 'avanzado' ? 'active' : ''}`}
          onClick={() => setFilterNivel('avanzado')}
          id="tab-nivel-avanzado"
        >
          Avanzado
        </button>
      </div>

      <div className="fichas-grid">
        {filteredFichas.map(ficha => (
          <div key={ficha.id} className="ficha-card">
            <div className={`ficha-level-badge ${ficha.nivel}`}>{ficha.nivel}</div>
            <div className="ficha-icon">{ficha.icono}</div>
            <h3>{ficha.titulo}</h3>
            <div className="ficha-meta">
              <span>⏱️ {ficha.duracion}</span>
              <span>👥 {ficha.colectivo}</span>
            </div>
            <p className="ficha-objetivo">{ficha.objetivo}</p>
            <ul className="ficha-contenido">
              {ficha.contenido.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
            <div className="ficha-normativa">
              {ficha.normativaRelacionada.map(n => <span key={n} className="ficha-norm-tag">{n}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConsultorIAPage = () => {
  const [model, setModel] = useState('llama3.1:8b');
  const [question, setQuestion] = useState('');
  const [useContext, setUseContext] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Listo para ayudarte con normativa PRL. Formula una consulta y te responderé con enfoque técnico-práctico y citando artículos cuando sea posible.',
    },
  ]);

  const handleAsk = async () => {
    const q = question.trim();
    if (!q || loading) return;

    setError(null);
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: q }]);
    setQuestion('');

    const context = useContext ? buildNormativeContext(q) : { contextText: '', articleMatches: 0, fichaMatches: 0 };

    const systemPrompt = [
      'Eres un consultor experto en PRL España para técnicos de prevención y control de gestión.',
      'Responde en español claro, con enfoque aplicable y operativo.',
      'Si hay contexto normativo, cítalo en formato [Ley/Art.] y evita inventar artículos.',
      'Si no tienes base suficiente, dilo explícitamente y sugiere cómo validar.',
      context.contextText ? `CONTEXTO NORMATIVO DEL REPOSITORIO:\n${context.contextText}` : '',
    ].filter(Boolean).join('\n\n');

    const history = messages.slice(-6).map((m) => ({ role: m.role, content: m.content }));

    try {
      const response = await fetch('/api/ollama/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          stream: false,
          options: {
            temperature: 0.2,
            num_predict: 700,
          },
          messages: [
            { role: 'system', content: systemPrompt },
            ...history,
            { role: 'user', content: q },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama devolvió ${response.status}. Verifica que esté activo.`);
      }

      const data = await response.json();
      const answer = data?.message?.content?.trim();
      if (!answer) {
        throw new Error('Ollama no devolvió contenido en la respuesta.');
      }

      const footer = useContext
        ? `\n\nFuentes internas detectadas: ${context.articleMatches} artículos y ${context.fichaMatches} fichas relacionadas.`
        : '';

      setMessages((prev) => [...prev, { role: 'assistant', content: `${answer}${footer}` }]);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Error inesperado al consultar Ollama.';
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'No pude conectar con Ollama local. Revisa que esté ejecutándose y que el modelo exista.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fade-in">
      <header className="page-header">
        <h2>Consultor IA Local</h2>
        <p>Asistente PRL conectado a Ollama en local con contexto normativo del repositorio para respuestas accionables.</p>
      </header>

      <div className="ai-panel">
        <div className="ai-controls">
          <label>
            Modelo Ollama
            <input
              className="ai-input"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="llama3.1:8b"
            />
          </label>
          <label className="ai-checkbox-wrap">
            <input
              type="checkbox"
              checked={useContext}
              onChange={(e) => setUseContext(e.target.checked)}
            />
            Usar contexto normativo interno (RAG)
          </label>
        </div>

        <div className="ai-chat">
          {messages.map((m, idx) => (
            <div key={idx} className={`ai-msg ai-msg-${m.role}`}>
              <span className="ai-msg-role">{m.role === 'assistant' ? 'Consultor IA' : 'Tú'}</span>
              <p>{m.content}</p>
            </div>
          ))}
          {loading && <div className="ai-msg ai-msg-assistant"><span className="ai-msg-role">Consultor IA</span><p>Pensando respuesta...</p></div>}
        </div>

        <div className="ai-composer">
          <textarea
            className="ai-input ai-textarea"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ejemplo: ¿Qué obligaciones tengo para coordinación de actividades en obra con dos subcontratas?"
          />
          <button className="audit-action-btn" onClick={handleAsk} disabled={loading || !question.trim()}>
            {loading ? 'Consultando...' : 'Consultar normativa'}
          </button>
        </div>

        {error && <div className="ai-error">{error}</div>}
      </div>
    </div>
  );
};

// ============================================================
// AUDITORÍA INTERACTIVA
// ============================================================

const SECTORES = [
  {
    id: 'construccion',
    label: 'Construcción',
    icon: '🏗️',
    desc: 'Obras de edificación y obra civil',
    leyIds: ['lprl', 'rsp', 'cae', 'construccion'],
    color: '#f87171',
  },
  {
    id: 'coordinacion',
    label: 'Coordinación de Actividades',
    icon: '🔄',
    desc: 'Subcontratación y concurrencia empresarial',
    leyIds: ['lprl', 'rsp', 'cae'],
    color: '#fbbf24',
  },
  {
    id: 'industria',
    label: 'Industria / Almacén',
    icon: '🏭',
    desc: 'Actividades industriales y logísticas',
    leyIds: ['lprl', 'rsp'],
    color: '#34d399',
  },
  {
    id: 'oficinas',
    label: 'Oficinas / Servicios',
    icon: '🏢',
    desc: 'Trabajo en entorno de oficina y servicios',
    leyIds: ['lprl', 'rsp'],
    color: '#818cf8',
  },
  {
    id: 'hosteleria',
    label: 'Hostelería / Comercio',
    icon: '🍽️',
    desc: 'Sector servicios, hostelería y comercio',
    leyIds: ['lprl', 'rsp'],
    color: '#c084fc',
  },
];

const AuditoriaPage = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expandedArts, setExpandedArts] = useState<Set<string>>(new Set());

  const sector = SECTORES.find(s => s.id === selectedSector);

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
          <h2>Auditoría Interactiva</h2>
          <p>Selecciona el sector de actividad para generar un checklist de cumplimiento normativo personalizado.</p>
        </header>
        <div className="auditoria-sectores-grid">
          {SECTORES.map(s => (
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
                {s.leyIds.length} normativa{s.leyIds.length > 1 ? 's' : ''}
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
        <button className="back-btn" onClick={handleReset}>← Cambiar sector</button>
        <div className="auditoria-header-info">
          <span className="auditoria-sector-chip" style={{ '--sector-color': sector!.color } as React.CSSProperties}>
            {sector!.icon} {sector!.label}
          </span>
          <h2>Checklist de Cumplimiento Normativo</h2>
        </div>
        <div className="auditoria-header-actions">
          <button className="audit-action-btn" onClick={checkAll}>Marcar todo</button>
          <button className="audit-action-btn" onClick={uncheckAll}>Limpiar</button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="auditoria-progress-wrap">
        <div className="auditoria-progress-labels">
          <span>{checked.size} de {totalIds.length} verificados</span>
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
          <span className="auditoria-stat-label">Requisitos totales</span>
        </div>
        <div className="auditoria-stat">
          <span className="auditoria-stat-num" style={{ color: '#34d399' }}>{checked.size}</span>
          <span className="auditoria-stat-label">Verificados</span>
        </div>
        <div className="auditoria-stat">
          <span className="auditoria-stat-num" style={{ color: '#fbbf24' }}>{totalIds.length - checked.size}</span>
          <span className="auditoria-stat-label">Pendientes</span>
        </div>
        <div className="auditoria-stat">
          <span className="auditoria-stat-num">{leyesAuditoria.length}</span>
          <span className="auditoria-stat-label">Normativas</span>
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
                          title={isExpanded ? 'Ocultar detalle' : 'Ver detalle'}
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
            <strong>Auditoría completada</strong>
            <p>Todos los requisitos normativos han sido verificados para el sector <em>{sector!.label}</em>.</p>
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

  return (
    <div className="app-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <button
        className={`sidebar-backdrop ${isSidebarOpen ? 'show' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
        aria-label="Cerrar menú"
      />
      <main className="main-content">
        <div className="mobile-topbar">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
          <div className="mobile-topbar-title">PRL España</div>
        </div>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/normativa/:id" component={NormativaPage} />
          <Route path="/buscador" component={BuscadorPage} />
          <Route path="/referencias" component={ReferenciasPage} />
          <Route path="/fichas" component={FichasPage} />
          <Route path="/auditoria" component={AuditoriaPage} />
          <Route path="/consultor-ia" component={ConsultorIAPage} />
          <Route>
            <div className="empty-state">Página no encontrada</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
