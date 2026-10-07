import type { FormEvent } from "react";
import { RecentProjects } from "./RecentProjects";

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
    <section
      id="projetos"
      className="content-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Projetos e publicações técnicas</p>
        <h2 id="projects-title">Projetos</h2>
        <p>
          Projetos recentes em inteligência artificial e conteúdos técnicos,
          além de produtos digitais desenvolvidos anteriormente.
        </p>
      </div>
      <RecentProjects />
      <p className="project-group-label">Produtos digitais</p>
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

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export function buildContactMailto({
  name,
  email,
  message,
}: ContactMessage): string {
  const body = [`Nome: ${name}`, `Email: ${email}`, "", "Mensagem:", message].join(
    "\n",
  );
  const query = new URLSearchParams({
    subject: "Contato pelo portfólio",
    body,
  });

  return `mailto:alessander.dutra.santos@gmail.com?${query.toString()}`;
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    throw new TypeError("Os campos do formulário de contato são inválidos.");
  }

  window.location.href = buildContactMailto({ name, email, message });
}

export function ContactSection() {
  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-card">
        <div className="contact-copy">
          <p className="section-kicker">Vamos conversar</p>
          <h2 id="contact-title">Entre em contato</h2>
          <p>
            Para conversas sobre produtos digitais, IA generativa e estratégia
            de produto, fale comigo pelos canais abaixo ou deixe uma mensagem.
          </p>
          <div className="contact-links">
            <a href="mailto:alessander.dutra.santos@gmail.com">
              <span aria-hidden="true">✉</span>
              alessander.dutra.santos@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/alessander-dutra"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">in</span>
              LinkedIn
            </a>
            <a href="https://wa.me/5511940538426" target="_blank" rel="noreferrer">
              <span aria-hidden="true">↗</span>
              WhatsApp
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          aria-label="Envie uma mensagem"
          onSubmit={handleContactSubmit}
        >
          <div className="form-field">
            <label htmlFor="contact-name">Seu nome</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={80}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Seu e-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              maxLength={4000}
              required
            />
          </div>
          <button className="contact-submit" type="submit">
            Abrir aplicativo de e-mail
            <span aria-hidden="true">↗</span>
          </button>
          <p className="contact-form-note">
            O botão abre seu aplicativo de e-mail com os dados preenchidos. A
            mensagem só é enviada por você.
          </p>
        </form>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            AD
          </span>
          <span>
            <strong>Alessander Dutra</strong>
            <small>Product Manager</small>
          </span>
        </a>
        <a className="back-to-top" href="#inicio">
          Voltar ao início <span aria-hidden="true">↑</span>
        </a>
      </div>
      <nav className="footer-navigation" aria-label="Navegação do rodapé">
        {[
          ["#inicio", "Início"],
          ["#sobre", "Sobre"],
          ["#formacao", "Educação"],
          ["#competencias", "Skills"],
          ["#trajetoria", "Carreira"],
          ["#projetos", "Projetos"],
          ["#publicacoes", "Publicações"],
          ["#contato", "Contato"],
        ].map(([href, label]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Alessander Dutra. Todos os direitos
          reservados.
        </p>
        <p>Product Manager · São Paulo, Brasil</p>
        <nav className="footer-social" aria-label="Redes sociais no rodapé">
          <a
            href="https://linkedin.com/in/alessander-dutra"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.5H7v11H3.4zm5.9 0h3.4V11h.1a3.7 3.7 0 0 1 3.3-1.8c3.5 0 4.2 2.3 4.2 5.3v6h-3.6v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.3z" />
            </svg>
          </a>
          <a
            href="https://github.com/alessander-dutra"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2.2 3.9 1.6.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.1a10.6 10.6 0 0 1 5.7 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>
          <a href="mailto:alessander.dutra.santos@gmail.com" aria-label="E-mail">
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
          </a>
          <a
            href="https://wa.me/5511940538426"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer"
          >
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
          </a>
        </nav>
      </div>
    </footer>
  );
}
