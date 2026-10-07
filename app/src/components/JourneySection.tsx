const roles = [
  {
    title: "Product Manager",
    period: "Jul 2015 – Abr 2025",
    startDate: "2015-07",
    endDate: "2025-04",
    intro:
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
    period: "Ago 2012 – Jul 2015",
    startDate: "2012-08",
    endDate: "2015-07",
    intro:
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
    period: "Ago 2009 – Ago 2012",
    startDate: "2009-08",
    endDate: "2012-08",
    intro:
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
      aria-labelledby="journey-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Experiência</p>
        <h2 id="journey-title">Trajetória profissional</h2>
        <p>
          Mais de 15 anos de atuação em produtos digitais, meios de pagamento,
          implantação de sistemas e liderança de equipes.
        </p>
      </div>
      <ol className="experience-list">
        {roles.map((role) => (
          <li className="experience-item" key={role.title}>
            <article>
              <div className="experience-heading">
                <div>
                  <h3>{role.title}</h3>
                  <p className="experience-company">
                    Altec Sistemas e Tecnologia
                  </p>
                </div>
                <p className="experience-period">
                  <time dateTime={role.startDate}>{role.period.split(" – ")[0]}</time>
                  {" – "}
                  <time dateTime={role.endDate}>{role.period.split(" – ")[1]}</time>
                </p>
              </div>
              <p className="experience-intro">{role.intro}</p>
              <ul className="experience-achievements">
                {role.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
