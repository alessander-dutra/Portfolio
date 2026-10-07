export function AboutSection() {
  return (
    <section id="sobre" className="content-section about-section">
      <div className="section-heading">
        <p className="section-kicker">Sobre</p>
        <h2>Produto com estratégia, tecnologia e foco em valor.</h2>
      </div>
      <div className="about-content">
        <p>
          Ao longo de mais de 15 anos, transformei desafios complexos em
          produtos digitais de alto impacto. Minha trajetória passa por meios
          de pagamento, soluções em nuvem e pelo uso estratégico da inteligência
          artificial generativa.
        </p>
        <p>
          Uno estratégia, dados e inovação para aproximar necessidades de
          clientes dos objetivos do negócio, liderando equipes e ciclos de
          produto do discovery à entrega.
        </p>
        <div className="impact-grid" aria-label="Resultados profissionais">
          <article className="impact-item">
            <strong>+30%</strong>
            <span>Aumento na satisfação com novos produtos</span>
          </article>
          <article className="impact-item">
            <strong>25%</strong>
            <span>Redução no tempo de entrega com low-code</span>
          </article>
          <article className="impact-item">
            <strong>98%</strong>
            <span>Lançamentos sem defeitos com QA e testes A/B</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projetos" className="content-section">
      <div className="section-heading">
        <p className="section-kicker">Trabalho selecionado</p>
        <h2>Projetos</h2>
        <p>
          Produtos digitais que conectam experiência do usuário e necessidades
          operacionais.
        </p>
      </div>
      <div className="project-grid">
        <article className="project-card">
          <p className="project-category">Delivery · Plataforma digital</p>
          <h3>HungryGo</h3>
          <p>
            Plataforma de delivery e gestão de pedidos para restaurantes,
            cardápios e operações.
          </p>
          <a
            className="text-link"
            href="https://github.com/alessander-dutra/hungry-go-page"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto no GitHub <span aria-hidden="true">↗</span>
          </a>
          <ul className="project-tags" aria-label="Tecnologias utilizadas">
            {["React 18", "TypeScript", "Vite", "Tailwind CSS", "Node.js"].map(
              (technology) => (
                <li key={technology}>{technology}</li>
              ),
            )}
          </ul>
        </article>
        <article className="project-card">
          <p className="project-category">Food service · Full-stack</p>
          <h3>Menu Digital Pro</h3>
          <p>
            Sistema de cardápio digital com painel administrativo, carrinho,
            checkout e gestão de pedidos.
          </p>
          <a
            className="text-link"
            href="https://github.com/alessander-dutra/Menu-Digital-Pro-v1"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto no GitHub <span aria-hidden="true">↗</span>
          </a>
          <ul className="project-tags" aria-label="Tecnologias utilizadas">
            {["React 18", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL"].map(
              (technology) => (
                <li key={technology}>{technology}</li>
              ),
            )}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="contact-section">
      <div>
        <p className="section-kicker">Vamos conversar</p>
        <h2>Entre em contato</h2>
        <p>
          Para conversas sobre produtos digitais, IA generativa e estratégia de
          produto, fale comigo pelos canais abaixo.
        </p>
      </div>
      <div className="contact-links">
        <a href="mailto:alessander.dutra.santos@gmail.com">
          alessander.dutra.santos@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/alessander-dutra"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href="https://wa.me/5511940538426" target="_blank" rel="noreferrer">
          WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="#inicio">Alessander Dutra</a>
      <p>Product Manager · São Paulo, Brasil</p>
      <a href="#inicio">Voltar ao início ↑</a>
    </footer>
  );
}
