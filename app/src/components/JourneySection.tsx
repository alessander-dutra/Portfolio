interface Experience {
  title: string;
  company: string;
  periodStart: string;
  startDate: string;
  periodEnd: string;
  endDate?: string;
  current?: boolean;
  employmentType?: string;
  location?: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Prod & Plat Eng Specialist",
    company: "Accenture Brasil",
    periodStart: "Jun 2026",
    startDate: "2026-06",
    periodEnd: "o momento · 5 meses",
    current: true,
    employmentType: "Tempo integral",
    location: "Avenida das Nações Unidas, 14401",
    description:
      "Sou especialista em Engenharia de Produtos e Plataformas com foco em plataformas de Inteligência Artificial, observabilidade, arquitetura de software e transformação tecnológica. Minha atuação combina desenvolvimento, arquitetura, governança técnica e inovação, ajudando equipes a construir soluções escaláveis, observáveis e preparadas para ambientes corporativos. Nos últimos anos concentrei meus esforços na evolução da Agent Platform, liderando iniciativas relacionadas à observabilidade, OpenTelemetry, monitoramento de agentes, telemetria distribuída, integração de sistemas e adoção de IA para engenharia de software. Tenho forte experiência na construção de arquiteturas modernas capazes de conectar desenvolvimento, operação, qualidade e inteligência artificial em uma visão única de plataforma. Meu objetivo é transformar complexidade técnica em capacidades concretas para o negócio, acelerando a entrega de valor enquanto fortaleço confiabilidade, governança e escalabilidade das soluções que desenvolvemos.",
    achievements: [],
  },
  {
    title: "Product Manager",
    company: "Altec Sistemas e Tecnologia",
    periodStart: "Jul 2015",
    startDate: "2015-07",
    periodEnd: "Abr 2025",
    endDate: "2025-04",
    description:
      "Defini e executei estratégia de produto, alinhando stakeholders internos e externos.",
    achievements: [
      "Implantei plataformas low-code, reduzindo o tempo de entrega de funcionalidades em 25%.",
      "Gerenciei equipe ágil com 15 profissionais, promovendo autonomia e foco em resultados.",
      "Aumentei a adoção do produto em 20% com funcionalidades priorizadas por análise competitiva.",
      "Criei mais de 10 dashboards em Power BI, melhorando decisões baseadas em dados em 40%.",
      "Implementei processo de QA e testes A/B com taxa de 98% de lançamentos sem defeitos.",
      "Conduzi adequação à norma PCI-DSS em projeto de meios de pagamento da Paggi.",
      "Otimizei infraestrutura em nuvem e on-premise, garantindo uptime de 99,9% e reduzindo custos em 10%.",
      "Implantei Jira e Confluence do zero, reduzindo o tempo de onboarding em 20%.",
    ],
  },
  {
    title: "Gerente de Suporte Técnico e Implantação",
    company: "Altec Sistemas e Tecnologia",
    periodStart: "Ago 2012",
    startDate: "2012-08",
    periodEnd: "Jul 2015",
    endDate: "2015-07",
    description:
      "Liderei operações de suporte técnico e implantação de sistemas na Altec Sistemas e Tecnologia.",
    achievements: [
      "Coordenei as operações diárias e uma equipe de 10 técnicos.",
      "Melhorei os fluxos e processos de atendimento do service desk.",
      "Desenvolvi relatórios operacionais e estratégicos com KPIs; acompanhei desempenho e treinamentos.",
      "Planejei e executei implantações, coordenando stakeholders e o monitoramento pós-implantação.",
    ],
  },
  {
    title: "Supervisor de Suporte Técnico e Operações",
    company: "Altec Sistemas e Tecnologia",
    periodStart: "Ago 2009",
    startDate: "2009-08",
    periodEnd: "Ago 2012",
    endDate: "2012-08",
    description:
      "Atuei na supervisão do suporte técnico e das operações de implantação na Altec Sistemas e Tecnologia.",
    achievements: [
      "Coordenei o suporte técnico diário e uma equipe de 10 técnicos.",
      "Contribuí para melhorias no service desk e para a elaboração de relatórios com KPIs.",
      "Acompanhei desempenho, treinamentos e alinhamento com stakeholders.",
      "Planejei implantações e o suporte e monitoramento das aplicações após a entrega.",
    ],
  },
];

export function JourneySection() {
  return (
    <section
      id="trajetoria"
      className="content-section journey-section"
      aria-label="Trajetória profissional"
    >
      <div className="section-heading">
        <p className="section-kicker">Experiência profissional</p>
        <h2>Trajetória profissional</h2>
        <p>
          Experiência atual em engenharia de produtos e plataformas, com
          trajetória anterior em gestão de produtos, suporte e implantação.
        </p>
      </div>
      <ol className="experience-list" aria-label="Experiências profissionais">
        {experiences.map((experience, index) => (
          <li
            className={`experience-item experience-item--${index % 2 === 0 ? "right" : "left"}`}
            key={experience.title}
          >
            <article>
              <p className="experience-period">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18" />
                </svg>
                <time dateTime={experience.startDate}>
                  {experience.periodStart}
                </time>
                {" – "}
                {experience.endDate ? (
                  <time dateTime={experience.endDate}>
                    {experience.periodEnd}
                  </time>
                ) : (
                  <span>{experience.periodEnd}</span>
                )}
              </p>
              <div className="experience-heading">
                <h3>{experience.title}</h3>
                <p className="experience-company">
                  {experience.company}
                  {experience.employmentType && ` · ${experience.employmentType}`}
                </p>
                {experience.location && (
                  <p className="experience-location">{experience.location}</p>
                )}
              </div>
              <p className="experience-intro">{experience.description}</p>
              {experience.achievements.length > 0 && (
                <ul className="experience-achievements">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
