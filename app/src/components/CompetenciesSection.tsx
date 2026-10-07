const competencyGroups = [
  {
    title: "Estratégia e produto",
    skills: [
      "Estratégia de produto",
      "Estratégia de produto SaaS",
      "Marketplace",
      "Go-To-Market",
      "Discovery de produto",
    ],
  },
  {
    title: "IA e inovação",
    skills: [
      "IA generativa",
      "GPTs personalizados",
      "ChatGPT",
      "NotebookLM",
      "Microsoft Copilot",
    ],
  },
  {
    title: "Dados e plataformas",
    skills: [
      "Power BI",
      "SQL Server",
      "AWS",
      "Oracle Cloud",
      "Plataformas low-code",
    ],
  },
  {
    title: "Operações e governança",
    skills: [
      "Meios de pagamento e PCI-DSS",
      "Liderança de equipes",
      "KPIs operacionais",
      "Jira e Confluence",
      "QA e testes A/B",
    ],
  },
];

export function CompetenciesSection() {
  return (
    <section
      id="competencias"
      className="content-section competencies-section"
      aria-labelledby="competencies-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Conhecimentos</p>
        <h2 id="competencies-title">Competências</h2>
        <p>
          Estratégia, tecnologia e operação reunidas para levar produtos da
          descoberta à entrega de valor.
        </p>
      </div>
      <div className="competency-grid">
        {competencyGroups.map((group) => (
          <article className="competency-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="competency-tags">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
