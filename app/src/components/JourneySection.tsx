const currentExperience = {
  title: "Software Prod & Plat Eng Specialist",
  company: "Accenture Brasil",
  employmentType: "Tempo integral",
  periodStart: "Jun 2026",
  startDate: "2026-06",
  location: "Avenida das Nações Unidas, 14401",
  description:
    "Sou especialista em Engenharia de Produtos e Plataformas com foco em plataformas de Inteligência Artificial, observabilidade, arquitetura de software e transformação tecnológica. Minha atuação combina desenvolvimento, arquitetura, governança técnica e inovação, ajudando equipes a construir soluções escaláveis, observáveis e preparadas para ambientes corporativos. Nos últimos anos concentrei meus esforços na evolução da Agent Platform, liderando iniciativas relacionadas à observabilidade, OpenTelemetry, monitoramento de agentes, telemetria distribuída, integração de sistemas e adoção de IA para engenharia de software. Tenho forte experiência na construção de arquiteturas modernas capazes de conectar desenvolvimento, operação, qualidade e inteligência artificial em uma visão única de plataforma. Meu objetivo é transformar complexidade técnica em capacidades concretas para o negócio, acelerando a entrega de valor enquanto fortaleço confiabilidade, governança e escalabilidade das soluções que desenvolvemos.",
};

export function JourneySection() {
  return (
    <section
      id="trajetoria"
      className="content-section journey-section"
      aria-label="Experiência profissional atual"
    >
      <div className="section-heading">
        <p className="section-kicker">Experiência atual</p>
        <h2>Experiência profissional</h2>
      </div>
      <ol className="experience-list" aria-label="Experiência profissional">
        <li className="experience-item experience-item--right">
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
              <time dateTime={currentExperience.startDate}>
                {currentExperience.periodStart}
              </time>
              {" – "}
              <time>o momento</time>
              {" · 5 meses"}
            </p>
            <div className="experience-heading">
              <h3>{currentExperience.title}</h3>
              <p className="experience-company">
                {currentExperience.company} · {currentExperience.employmentType}
              </p>
              <p className="experience-location">{currentExperience.location}</p>
            </div>
            <p className="experience-intro">{currentExperience.description}</p>
          </article>
        </li>
      </ol>
    </section>
  );
}
