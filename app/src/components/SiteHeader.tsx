import { useState } from "react";

const navigationLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#formacao", label: "Educação" },
  { href: "#competencias", label: "Skills" },
  { href: "#trajetoria", label: "Carreira" },
  { href: "#projetos", label: "Projetos" },
  { href: "#publicacoes", label: "Publicações" },
  { href: "#contato", label: "Contato" },
];

const quickLinks = [
  { href: "#inicio", label: "Início", icon: "M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" },
  { href: "#sobre", label: "Sobre", icon: "M20 21a8 8 0 0 0-16 0m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
  { href: "#formacao", label: "Educação", icon: "m2 9 10-5 10 5-10 5L2 9Zm4 2v5c3.5 2.7 8.5 2.7 12 0v-5" },
  { href: "#competencias", label: "Skills", icon: "M4 20V11m5 9V5m5 15v-7m5 7V8M2 20h20" },
  { href: "#trajetoria", label: "Carreira", icon: "M3 8h18v13H3zM8 8V5h8v3M3 12h18m-11 0v3h4v-3" },
  { href: "#contato", label: "Contato", icon: "m3 4 18 8-18 8 4-8-4-8Zm4 8h14" },
];

interface SiteHeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function SiteHeader({ isDark, onToggleTheme }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Alessander Dutra, início">
            <span className="brand-mark" aria-hidden="true">
              AD
            </span>
            <span className="brand-copy">
              <span className="brand-name">Alessander Dutra</span>
              <span className="brand-caption">Portfólio</span>
            </span>
          </a>

          <nav
            id="primary-navigation"
            className={`site-nav${isMenuOpen ? " is-open" : ""}`}
            aria-label="Navegação principal"
          >
            {navigationLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-button theme-toggle"
              type="button"
              aria-label={`Ativar tema ${isDark ? "claro" : "escuro"}`}
              onClick={onToggleTheme}
            >
              <span aria-hidden="true">{isDark ? "☀" : "◐"}</span>
            </button>
            <button
              className="icon-button menu-toggle"
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </header>
      <nav className="quick-nav" aria-label="Navegação rápida">
        {quickLinks.map(({ href, label, icon }) => (
          <a key={href} href={href} aria-label={label} title={label}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={icon} />
            </svg>
          </a>
        ))}
      </nav>
    </>
  );
}
