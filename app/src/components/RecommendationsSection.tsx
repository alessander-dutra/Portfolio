const recommendations = [
  {
    text: "Tive o privilégio de trabalhar com um profissional extraordinário, sem dúvidas, um dos melhores gestores com quem já tive a oportunidade de aprender.",
    author: "Rikelmi Alves da Silva",
  },
  {
    text: "Tive o privilégio de estar sob a liderança do Dutra por 6 meses e, mesmo em pouco tempo, aprendi lições valiosas que levo comigo até hoje.",
    author: "Nilza Teixeira Ribeiro",
  },
  {
    text: "Tive a satisfação de trabalhar na mesma empresa que Alessander Dutra por mais de 7 anos, atuando em setores diferentes, mas acompanhando de perto sua trajetória como gerente de produtos.",
    author: "Rosângela Rodrigues",
  },
  {
    text: "Trabalhar ao lado do Alessander foi uma experiência extremamente enriquecedora. Ele é um profissional que consegue unir visão estratégica e execução impecável.",
    author: "Chrystiane C. G. Jajácomo Aoki",
  },
  {
    text: "Tive a oportunidade de trabalhar junto com Alessander e durante esse período foram momentos bem interessantes acompanhar a evolução dele nas áreas de Banco de Dados e Produtos.",
    author: "Andre Ramos",
  },
  {
    text: "O Alessander tem muita facilidade com o relacionamento interpessoal, fácil relacionamento com os pares e com o time, sempre muito disposto a ajudar os colegas nas coisas de tecnologia.",
    author: "Vanessa Rodrigues",
  },
];

export function RecommendationsSection() {
  return (
    <section
      className="content-section recommendations-section"
      aria-labelledby="recommendations-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Recomendações</p>
        <h2 id="recommendations-title">Recomendações</h2>
        <p>Trechos de recomendações já publicados no portfólio.</p>
      </div>
      <div className="recommendation-grid">
        {recommendations.map(({ text, author }) => (
          <article className="recommendation-card" key={author}>
            <blockquote>
              <p>“{text}”</p>
            </blockquote>
            <p className="recommendation-author">{author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
