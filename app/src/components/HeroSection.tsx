import profileImage from "../../../assets/img/profile.jpeg";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="portfolio-eyebrow">
          Product Manager <span aria-hidden="true">·</span> Produtos digitais{" "}
          <span aria-hidden="true">·</span> IA
        </p>
        <h1 id="hero-title">Alessander Dutra</h1>
        <p className="portfolio-intro">
          Estratégia de produto, tecnologia e inteligência artificial a serviço
          de resultados.
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
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alessander-dutra"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:alessander.dutra.santos@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://wa.me/5511940538426" target="_blank" rel="noreferrer">
              WhatsApp
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
          <p>Product Manager</p>
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
