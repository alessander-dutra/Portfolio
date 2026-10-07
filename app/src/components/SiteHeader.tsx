import { useState } from "react";

const navigationLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
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
            <span className="brand-name">Alessander Dutra</span>
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
    </>
  );
}
