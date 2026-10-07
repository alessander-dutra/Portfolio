const recentProjects = [
  {
    title: "The Prompt Engineering Playbook for Product Ecosystems",
    category: "IA generativa · Engenharia de prompts",
    startDate: "2026-05",
    startLabel: "mai. de 2026",
    description:
      "Passei semanas estudando Engenharia de Prompts a fundo: técnicas, frameworks, casos práticos e tudo que separa um prompt mediano de um prompt que realmente entrega resultado.",
    summary:
      "Organizei o conteúdo em um NotebookLM público para você acessar, explorar e estudar no seu ritmo.",
    highlights: [
      "Chain-of-Thought, Few-Shot, Zero-Shot e Role Prompting",
      "Como reduzir alucinações e aumentar a precisão",
      "Técnicas avançadas para usar com GPT, Gemini e Claude",
      "Aplicações práticas para desenvolvimento e gestão de produtos",
      "Referências e exemplos reais",
    ],
    tools: ["Ferramentas de inteligência artificial generativa"],
    href: "https://notebooklm.google.com/notebook/c4b1bee7-16e7-4f4b-9964-80eeb9ef89ef",
    linkLabel: "Acessar o notebook The Prompt Engineering Playbook",
  },
  {
    title: "Universo do Machine Learning",
    category: "Inteligência artificial · Aprendizado de máquina",
    description:
      "Uma visão abrangente de Machine Learning como subcampo da Inteligência Artificial, cobrindo ciclo de vida, aplicações e considerações éticas. Os materiais descrevem etapas de um projeto de ML — da coleta e preparação dos dados à avaliação, implantação e retreinamento — e comparam aprendizado supervisionado, não supervisionado e por reforço. Também abordam algoritmos, desequilíbrio de dados e aplicações em logística, personalização de produtos e manutenção preditiva.",
    tools: [],
    href: "https://notebooklm.google.com/notebook/afc377f1-2806-440f-9183-7a4a359badfc",
    linkLabel: "Ler publicação sobre Machine Learning",
  },
];

export function RecentProjects() {
  return (
    <div className="recent-projects">
      <p className="project-group-label">Projetos recentes</p>
      <div className="project-grid project-grid--recent">
        {recentProjects.map((project) => (
          <article
            className="project-card project-card--recent"
            key={project.title}
          >
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            {project.startDate && (
              <p className="project-period">
                <time dateTime={project.startDate}>{project.startLabel}</time>
                {" – "}
                <span>o momento</span>
              </p>
            )}
            <p className="project-description">{project.description}</p>
            {project.summary && (
              <p className="project-description">{project.summary}</p>
            )}
            {project.highlights && (
              <>
                <p className="project-highlights-label">
                  O que você vai encontrar:
                </p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
            <a
              className="text-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </a>
            {project.tools.length > 0 && (
              <ul className="project-tags" aria-label="Ferramentas do projeto">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            )}
            <p className="project-affiliation">Associados à UNIASSELVI</p>
          </article>
        ))}
      </div>
    </div>
  );
}
