const services = [
  "Gestão de projetos",
  "Gestão de programas",
  "Teste de software",
  "Design de experiência do usuário (UX)",
  "Consultoria de TI",
  "Eventos de lançamento de produtos",
  "Gestão da informação",
  "Desenvolvimento de banco de dados",
  "Desenvolvimento de SaaS",
  "Atividades de integração de equipe",
];

const credentials = [
  ["Agentic Thinking 101", "Udacity", "Set 2026", "2026-09"],
  ["Reinvention with Agentic AI", "Accenture", "Ago 2026", "2026-08"],
  [
    "Agentic AI for Business Leaders",
    "Udacity",
    "Jun 2026",
    "2026-06",
  ],
  [
    "AWS Generative AI Developer (AIP-C01): Prompt Engineering, Prompt Management, & Prompt Flows",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "AWS Generative AI Developer (AIP-C01): Chunking, Embeddings, & Retrieval Design for FM Augmentation",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "AWS Generative AI Developer (AIP-C01): Vector Store Architecture, Metadata, & Data Freshness for RAG",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "AWS Generative AI Developer (AIP-C01): Data Validation & Multimodal Preprocessing for FM Consumption",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "AWS Generative AI Developer (AIP-C01): Customizing Foundation Models & Managing Model Lifecycles",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "AWS Generative AI Developer (AIP-C01): Architecting GenAI Solutions on AWS",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "ChatGPT Prompt Engineering Examples & Use Cases",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "Generative AI APIs for Practical Applications: An Introduction",
    "Skillsoft",
    "Jun 2026",
    "2026-06",
  ],
  [
    "Programação e monitoramento de projetos Agile",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  ["Planejamento de projetos Agile", "Skillsoft", "Jul 2026", "2026-07"],
  [
    "Product Management: Building a Product Strategy",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "Fostering a Growth Mindset in the Age of AI",
    "Skillsoft",
    "Jul 2026",
    "2026-07",
  ],
  [
    "Leading in the Age of Generative AI",
    "Skillsoft",
    "Jun 2026",
    "2026-06",
  ],
  ["Advanced Product Analytics", "Tera", "Mar 2026", "2026-03"],
  ["IA para Gestão de Produtos", "Tera", "Mar 2026", "2026-03"],
  ["Discovery & Delivery com IA", "Tera", "Fev 2026", "2026-02"],
  ["Product Strategy", "Tera", "Fev 2026", "2026-02"],
  [
    "Introdução à Inteligência Artificial",
    "IBM",
    "Jan 2026",
    "2026-01",
  ],
  [
    "Marketplace Product Strategy",
    "Tera",
    "Nov 2025",
    "2025-11",
  ],
  [
    "Fundamentos de Estratégia de Produtos",
    "Tera",
    "Nov 2025",
    "2025-11",
  ],
  ["SaaS Product Strategy", "Tera", "Nov 2025", "2025-11"],
  [
    "Inteligência Artificial para Gerentes de Projetos",
    "LinkedIn Learning",
    "Nov 2025",
    "2025-11",
  ],
  [
    "Criação de assistentes de pesquisa com GPTs personalizados no ChatGPT e NotebookLM",
    "Universidade Presbiteriana Mackenzie",
    "Nov 2025",
    "2025-11",
  ],
  [
    "Foundations of Business and Entrepreneurship",
    "SkillFront",
    "Nov 2025",
    "2025-11",
  ],
  [
    "Microcertificação de Análise de Produto (PAC)",
    "Product School",
    "Out 2025",
    "2025-10",
  ],
  [
    "Microcertificação de Inteligência Artificial (AIC)",
    "Product School",
    "Out 2025",
    "2025-10",
  ],
  [
    "Como Aproveitar ao Máximo a IA Generativa na Gestão de Projetos",
    "LinkedIn Learning",
    "Out 2025",
    "2025-10",
  ],
  [
    "Formação Engenheiro de IA Generativa",
    "Udemy",
    "Out 2025",
    "2025-10",
  ],
  ["Lovable Workshop", "PM3", "Set 2025", "2025-09"],
  [
    "IA Generativa para Profissionais Criativos: Oportunidades, Desafios e Ética",
    "LinkedIn Learning",
    "Ago 2025",
    "2025-08",
  ],
  [
    "Descubra a Inteligência Artificial Generativa",
    "LinkedIn Learning",
    "Ago 2025",
    "2025-08",
  ],
  [
    "Otimize seu Trabalho com o Microsoft Copilot",
    "LinkedIn Learning",
    "Ago 2025",
    "2025-08",
  ],
  [
    "IA Generativa: Oportunidades e Considerações para Líderes Empresariais",
    "LinkedIn Learning",
    "Ago 2025",
    "2025-08",
  ],
  [
    "Prompt Engineering: Aprenda a Conversar com uma IA Generativa",
    "LinkedIn Learning",
    "Ago 2025",
    "2025-08",
  ],
  [
    "IA Generativa: a Evolução da Busca Online Inteligente",
    "LinkedIn Learning",
    "Ago 2025",
    "2025-08",
  ],
  [
    "IA Generativa Prompt Engineering",
    "LinkedIn Learning",
    "2025",
    "2025",
  ],
  ["Formação em Liderança", "Escola Conquer", "2024", "2024"],
  [
    "Agile Project Management",
    "Universidade Presbiteriana Mackenzie",
    "2023",
    "2023",
  ],
  [
    "Kanban e Scrum",
    "International Scrum Institute",
    "2020",
    "2020",
  ],
  ["Lean Six Sigma White Belt", "Grupo Voitto", "2020", "2020"],
  ["Management 3.0", "OAT Solutions", "2020", "2020"],
  ["Scrum Essentials", "Itcerts Inc.", "2019", "2019"],
  ["DevOps Foundation", "Estabilis", "2018", "2018"],
  ["ITIL v3 Foundations", "Ka Solution", "2014", "2014"],
  ["SQL Server 2012", "Ka Solution", "2013", "2013"],
].map(([title, provider, date, dateTime]) => ({
  title,
  provider,
  date,
  dateTime,
}));

export function ProfileHighlightsSection() {
  return (
    <section
      id="atuacao-ampliada"
      className="content-section profile-highlights-section"
      aria-labelledby="profile-highlights-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Atuação profissional</p>
        <h2 id="profile-highlights-title">Serviços e formação complementar</h2>
        <p>
          Serviços apresentados no perfil e cursos e credenciais da trajetória
          em produto, dados, tecnologia e IA. Links individuais de validação
          não foram informados.
        </p>
      </div>

      <section className="profile-services" aria-label="Serviços prestados">
        <h3>Serviços prestados</h3>
        <ul className="service-tags">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section
        className="profile-learning"
        aria-label="Formação complementar em destaque"
      >
        <div className="profile-learning-heading">
          <h3>Cursos e credenciais</h3>
          <p>Seleção recente em destaque; lista completa expansível abaixo.</p>
        </div>
        <ul className="learning-grid">
          {credentials
            .slice(0, 6)
            .map(({ title, provider, date, dateTime }) => (
              <li className="learning-card" key={title}>
                <h4>{title}</h4>
                <p>{provider}</p>
                <time dateTime={dateTime}>{date}</time>
              </li>
            ))}
        </ul>
        <details className="additional-learning">
          <summary>Ver demais cursos e credenciais</summary>
          <ul className="learning-grid">
            {credentials
              .slice(6)
              .map(({ title, provider, date, dateTime }) => (
                <li className="learning-card" key={title}>
                  <h4>{title}</h4>
                  <p>{provider}</p>
                  <time dateTime={dateTime}>{date}</time>
                </li>
              ))}
          </ul>
        </details>
      </section>
    </section>
  );
}
