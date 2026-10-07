const publications = [
  {
    title: "Explorando o Universo do Machine Learning",
    date: "Setembro de 2025",
    dateTime: "2025-09",
    description:
      "Introdução aos fundamentos, tipos de aprendizado de máquina, etapas de um projeto de ML, aplicações práticas e considerações de ética.",
    href: "https://notebooklm.google.com/notebook/afc377f1-2806-440f-9183-7a4a359badfc",
  },
  {
    title: "Principais Tendências para o Futuro da Alimentação em 2025",
    date: "Maio de 2025",
    dateTime: "2025-05",
    description:
      "Uma leitura sobre mudanças de consumo, tecnologia e gestão que influenciam a transformação do setor de food service.",
    href: "https://gebwwjsr.manus.space",
  },
];

export function PublicationsSection() {
  return (
    <section
      id="publicacoes"
      className="content-section publications-section"
      aria-label="Publicações"
    >
      <div className="section-heading">
        <p className="section-kicker">Ideias e perspectivas</p>
        <h2>Publicações</h2>
        <p>
          Conteúdos sobre inteligência artificial, aprendizado de máquina e
          transformação de produtos e mercados.
        </p>
      </div>
      <div className="publication-grid">
        {publications.map(({ title, date, dateTime, description, href }) => (
          <article className="publication-card" key={title}>
            <p className="publication-date">
              <time dateTime={dateTime}>{date}</time>
            </p>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={href} target="_blank" rel="noreferrer">
              Ler publicação: {title}
              <span aria-hidden="true"> ↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
