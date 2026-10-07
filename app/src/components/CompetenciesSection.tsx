const competencyGroups = [
  {
    title: "Estratégia e gestão de produto",
    skills: [
      "Estratégia de produto",
      "Estratégia de produto SaaS",
      "Marketplace Product Strategy",
      "Product Lifecycle Management",
      "Product Marketing",
      "Product Analytics",
      "Agile Product Discovery",
      "Discovery & Delivery com IA",
      "Priorização de roadmap",
      "OKRs e KPIs de produto",
      "Customer Journey Mapping",
      "Pesquisa de mercado e competitiva",
      "Levantamento de requisitos",
      "Estratégia de posicionamento",
      "Criação de materiais para vendas",
      "Go-To-Market",
      "Lançamento de produtos",
    ],
  },
  {
    title: "Inteligência artificial aplicada",
    skills: [
      "IA generativa",
      "ChatGPT",
      "Claude",
      "Notion AI",
      "NotebookLM",
      "Microsoft Copilot",
      "Engenharia de prompts",
      "GPTs e assistentes personalizados",
      "IA para negócios",
      "IA aplicada a produtos digitais",
      "Agentes de IA",
      "Fundamentos de RAG e arquitetura vetorial",
    ],
  },
  {
    title: "Dados, arquitetura e integrações",
    skills: [
      "Power BI",
      "SQL Server",
      "SQL",
      "MySQL",
      "PL/SQL",
      "Oracle Database",
      "SQL Server Reporting Services",
      "ETL e integração de dados",
      "APIs e plataformas de integração",
      "Microsserviços",
      "Arquitetura de sistemas",
      "Business Intelligence",
      "Tecnologias Microsoft",
      "Gestão de relacionamento com o cliente (CRM)",
      "AWS",
      "Oracle Cloud",
      "Sistemas de PDV",
    ],
  },
  {
    title: "Entrega, qualidade e operações",
    skills: [
      "Meios de pagamento e PCI-DSS",
      "Scrum",
      "Kanban",
      "Metodologias Agile",
      "Gestão ágil de projetos",
      "Gestão de programas e projetos de TI",
      "DevOps",
      "ITIL",
      "Management 3.0",
      "Testes de software e QA",
      "Testes A/B",
      "Design de UX/UI",
      "Design thinking",
      "Gestão de infraestrutura e operações de TI",
      "Jira",
      "Confluence",
      "Lean Six Sigma",
      "Plataformas low-code",
    ],
  },
];

const professionalSkills = [
  "Liderança de equipes",
  "Liderança multifuncional",
  "Gestão de stakeholders",
  "Colaboração entre equipes",
  "Planejamento estratégico",
  "Análise de negócios",
  "Capacidade analítica",
  "Comunicação",
  "Comunicação escrita",
  "Resolução de problemas",
  "Trabalho em equipe",
  "Experiência do cliente",
  "Gestão de operações",
  "Mentoria e desenvolvimento",
  "Eficácia e escalabilidade",
  "Melhoria contínua",
];

export function CompetenciesSection() {
  return (
    <section
      id="competencias"
      className="content-section competencies-section"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Conhecimentos e atuação</p>
        <h2 id="skills-title">Skills &amp; competências</h2>
        <p>
          Produto digital, IA aplicada, dados e integração de plataformas,
          conectados à liderança e à entrega de resultados.
        </p>
      </div>
      <div className="skills-grid">
        <article className="skills-panel technical-skills">
          <div className="skills-panel-heading">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
              <circle cx="8" cy="5" r="2" fill="var(--surface)" />
              <circle cx="16" cy="12" r="2" fill="var(--surface)" />
              <circle cx="10" cy="19" r="2" fill="var(--surface)" />
            </svg>
            <h3>Conhecimentos técnicos</h3>
          </div>
          {competencyGroups.map((group) => (
            <div className="skill-category" key={group.title}>
              <h4>{group.title}</h4>
              <ul className="competency-tags">
                {group.skills.slice(0, 7).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              {group.skills.length > 7 && (
                <details className="additional-skills">
                  <summary>
                    {group.skills.length - 7} outras competências
                  </summary>
                  <ul className="competency-tags">
                    {group.skills.slice(7).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </article>
        <article className="skills-panel professional-skills">
          <div className="skills-panel-heading">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M9 9h.01M15 9h.01M8.5 14c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2" />
            </svg>
            <h3>Competências profissionais</h3>
          </div>
          <ul className="professional-skill-tags">
            {professionalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p className="skills-note">
            Da estratégia ao delivery: conectando clientes, tecnologia, dados
            e objetivos do negócio.
          </p>
        </article>
      </div>
    </section>
  );
}
