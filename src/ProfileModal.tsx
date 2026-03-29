import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import brandLogo from '../logo.jpeg';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={`profile-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} role="dialog" aria-modal="true" aria-label="Perfil profesional">
      <div
        className="profile-modal"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Banner de cabecera ── */}
        <div className="profile-modal-banner">
          <div className="profile-modal-banner-orb orb-1" />
          <div className="profile-modal-banner-orb orb-2" />
          <div className="profile-modal-banner-orb orb-3" />
          <button
            className="profile-modal-close"
            onClick={onClose}
            aria-label="Cerrar perfil"
          >
            ✕
          </button>
        </div>

        {/* ── Cuerpo del modal ── */}
        <div className="profile-modal-body">

          {/* ── Cabecera: Avatar + botones de red ── */}
          <div className="profile-modal-head-row">
            <div className="profile-modal-avatar-wrap">
              <img src={brandLogo} alt="Borja Félix Rojas" className="profile-modal-avatar" />
            </div>
            <div className="profile-modal-social">
              <a
                href="https://github.com/DonBorgiFR"
                target="_blank"
                rel="noreferrer noopener"
                className="profile-social-btn btn-gh"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.506.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/borjafelixrojas/"
                target="_blank"
                rel="noreferrer noopener"
                className="profile-social-btn btn-li"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://borjafelixrojas.odoo.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="profile-social-btn btn-port"
                aria-label="Portfolio"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round"/>
                </svg>
                <span>Portfolio</span>
              </a>
            </div>
          </div>

          {/* ── Nombre y rol ── */}
          <div className="profile-modal-identity">
            <h2 className="profile-modal-name">Borja Félix Rojas</h2>
            <p className="profile-modal-role">Controller de Gestión · Analista de Datos · PRL Specialist</p>
            <p className="profile-modal-bio">
              Ingeniero Industrial especializado en hibridar mundos: visión estratégica de negocio y dominio técnico.
              Transformo datos complejos en decisiones ejecutivas mediante Power BI, automatizo flujos de trabajo con código
              y construyo herramientas digitales de alto impacto para la gestión empresarial y la seguridad laboral.
            </p>
          </div>

          {/* ── Grid principal ── */}
          <div className="profile-modal-grid">

            {/* Columna izquierda: skills + hitos */}
            <div className="profile-modal-col-main">

              {/* Tech Stack */}
              <div className="profile-modal-card">
                <div className="profile-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Tech Stack &amp; Habilidades</h3>
                </div>
                <div className="profile-tech-grid">
                  <TechBadge label="Power BI Avanzado" color="blue" />
                  <TechBadge label="Python &amp; SQL" color="indigo" />
                  <TechBadge label="Excel (VBA/Macros)" color="green" />
                  <TechBadge label="Control de Gestión" color="purple" />
                  <TechBadge label="PRL / Safety Mgmt." color="amber" />
                  <TechBadge label="React / TypeScript" color="rose" />
                </div>
              </div>

              {/* Hitos */}
              <div className="profile-modal-card">
                <div className="profile-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Hitos Destacados</h3>
                </div>
                <ul className="profile-hitos-list">
                  <HistoryItem
                    title="Sistema PRL España (Este Proyecto)"
                    desc="Motor de consulta normativa con IA integrada (Gemini), 8+ normativas estructuradas, fichas de capacitación interactivas y auditoría sectorial. Tecnología: React + TypeScript."
                  />
                  <HistoryItem
                    title="Digitalización Operativa (Empresas Gasco)"
                    desc="Implementación de software Zyght y desarrollo de dashboards ejecutivos (Power BI) para trazabilidad documental y control presupuestario."
                  />
                  <HistoryItem
                    title="Optimización de Flujos (Transviña Ltda.)"
                    desc="Reducción del 30% en tiempos operativos mediante la automatización de procesos administrativos y el rediseño de sistemas de gestión."
                  />
                </ul>
              </div>
            </div>

            {/* Columna derecha: valor añadido + contacto */}
            <div className="profile-modal-col-side">

              {/* Propuesta de valor */}
              <div className="profile-modal-card profile-value-card">
                <div className="profile-value-bg-icon" aria-hidden="true">⚖️</div>
                <div className="profile-card-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>El Valor Añadido</h3>
                </div>
                <p className="profile-value-text">
                  La mayoría de ingenieros no dominan la normativa laboral; la mayoría de técnicos de PRL no automatizan con código.<br /><br />
                  <strong>Yo traduzco la complejidad normativa y operativa en herramientas digitales escalables, dashboards ejecutivos y sistemas de gestión que generan impacto real.</strong>
                </p>
              </div>

              {/* Contacto */}
              <div className="profile-modal-card profile-contact-card">
                <p className="profile-contact-tagline">¿Tienes un proyecto ambicioso?</p>
                <a
                  href="mailto:bfelixrojas@gmail.com"
                  className="profile-contact-btn"
                >
                  Contactar ahora →
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── Helpers ──

function TechBadge({ label, color }: { label: string; color: 'blue' | 'indigo' | 'green' | 'purple' | 'amber' | 'rose' }) {
  return (
    <div className={`profile-tech-badge profile-tech-${color}`} dangerouslySetInnerHTML={{ __html: label }} />
  );
}

function HistoryItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="profile-hito-item">
      <h4>{title}</h4>
      <p>{desc}</p>
    </li>
  );
}
