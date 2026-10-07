import profileImage from "../../../assets/img/portife2.jpeg";

const expertise = [
  {
    label: "Estratégia de produto",
    icon: "M4 19V5m0 14h16M8 15l3-4 3 2 5-6",
  },
  {
    label: "IA generativa",
    icon: "m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 13 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z",
  },
  {
    label: "IA aplicada a produtos",
    icon: "m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 13 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z",
  },
  {
    label: "Product Analytics",
    icon: "M4 19V9h4v10m2 0V5h4v14m2 0v-7h4v7M2 20h20",
  },
  {
    label: "SaaS e marketplaces",
    icon: "M4 6h16v12H4zM4 10h16M8 15h3",
  },
  {
    label: "Meios de pagamento",
    icon: "M4 6h16v12H4zM4 10h16M8 15h3",
  },
  {
    label: "PCI-DSS",
    icon: "M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4",
  },
  {
    label: "Power BI",
    icon: "M4 19V9h4v10m2 0V5h4v14m2 0v-7h4v7M2 20h20",
  },
  {
    label: "AWS",
    icon: "M6 18h12a4 4 0 0 0 .7-7.9A7 7 0 0 0 5 9a4.5 4.5 0 0 0 1 9Z",
  },
  {
    label: "Oracle Cloud",
    icon: "M8 5h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5Zm0 4a3 3 0 1 0 0 6h8a3 3 0 1 0 0-6H8Z",
  },
  {
    label: "SQL Server",
    icon: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm-8 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  },
  {
    label: "Low-code",
    icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  },
];

function ExpertiseItems() {
  return expertise.map(({ label, icon }) => (
    <li className="expertise-item" key={label}>
      <svg
        className="expertise-icon"
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
      <span>{label}</span>
    </li>
  ));
}

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-greeting">Olá, eu sou</p>
        <p className="portfolio-eyebrow">
          IA aplicada <span aria-hidden="true">·</span> Especialista em produto
          de software e plataformas <span aria-hidden="true">·</span> Product Manager
          <span aria-hidden="true">·</span> São Paulo, Brasil
        </p>
        <h1 id="hero-title">
          <span>Alessander</span>
          {" "}
          <span>Dutra</span>
        </h1>
        <p className="portfolio-intro">
          Produto digital, IA aplicada, dados e integrações conectados a
          resultados de negócio.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href="#contato">
            Entrar em contato
          </a>
        </div>
        <ul className="social-links" aria-label="Redes e contato">
          <li>
            <a
              href="https://linkedin.com/in/alessander-dutra"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.5H7v11H3.4zm5.9 0h3.4V11h.1a3.7 3.7 0 0 1 3.3-1.8c3.5 0 4.2 2.3 4.2 5.3v6h-3.6v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.3z" />
              </svg>
              <span className="visually-hidden">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alessander-dutra"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2.2 3.9 1.6.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.1a10.6 10.6 0 0 1 5.7 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              <span className="visually-hidden">GitHub</span>
            </a>
          </li>
          <li>
            <a href="mailto:alessander.dutra.santos@gmail.com">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="visually-hidden">Email</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5511940538426" target="_blank" rel="noreferrer">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
                <path d="M8 8.2c.5 3 2.3 4.8 5.3 5.4l1.1-1.2 2 .9c-.2 1.2-1.2 2.1-2.5 2-3.9-.4-6.9-3.4-7.3-7.3-.1-1.3.8-2.3 2-2.5l.9 2L8 8.2Z" />
              </svg>
              <span className="visually-hidden">WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>

      <aside className="profile-card" aria-label="Perfil profissional">
        <div className="profile-image-wrap">
          <img
            className="profile-image"
            src={profileImage}
            alt="Alessander Dutra"
            fetchPriority="high"
          />
        </div>
        <div className="profile-details">
          <p className="profile-label">PERFIL PROFISSIONAL</p>
          <h2>Alessander Dutra</h2>
          <p>IA aplicada · Produto digital</p>
          <dl className="profile-facts">
            <div>
              <dt>Especialidade</dt>
              <dd>Produtos digitais e IA</dd>
            </div>
            <div>
              <dt>Localização</dt>
              <dd>São Paulo, Brasil</dd>
            </div>
            <div>
              <dt>Experiência</dt>
              <dd>Mais de 15 anos</dd>
            </div>
          </dl>
        </div>
      </aside>
    </section>
  );
}

export function ExpertiseStrip() {
  return (
    <section
      className="expertise-strip"
      aria-label="Tecnologias e competências"
    >
      <div className="expertise-track">
        <ul aria-label="Especialidades profissionais">
          <ExpertiseItems />
        </ul>
        <ul className="expertise-track-copy" aria-hidden="true">
          <ExpertiseItems />
        </ul>
      </div>
    </section>
  );
}
