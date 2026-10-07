import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";
import { buildContactMailto } from "./components/PortfolioSections";

describe("portfolio application shell", () => {
  afterEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("renders Alessander Dutra as the page's main heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Alessander Dutra" }),
    ).toBeInTheDocument();
  });

  it("provides navigation links whose targets exist on the page", () => {
    render(<App />);
    const navigation = screen.getByRole("navigation", {
      name: "Navegação principal",
    });

    for (const label of [
      "Sobre",
      "Carreira",
      "Projetos",
      "Publicações",
      "Contato",
      "Educação",
      "Skills",
    ]) {
      const link = within(navigation).getByRole("link", { name: label });
      const targetId = link.getAttribute("href")?.slice(1);
      expect(targetId).toBeTruthy();

      if (targetId) {
        expect(document.getElementById(targetId)).toBeInTheDocument();
      }
    }
  });

  it("uses a floating portfolio header and an accessible section dock", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "Alessander Dutra, início" }),
    ).toHaveTextContent("Portfólio");

    const dock = screen.getByRole("navigation", {
      name: "Navegação rápida",
    });
    for (const label of [
      "Início",
      "Sobre",
      "Educação",
      "Skills",
      "Carreira",
      "Contato",
    ]) {
      expect(within(dock).getByRole("link", { name: label })).toHaveAttribute(
        "href",
      );
    }
    expect(dock.querySelectorAll("svg")).toHaveLength(6);
  });

  it("displays the expertise ticker with verified skills and a hidden visual duplicate", () => {
    render(<App />);

    const ticker = screen.getByRole("region", {
      name: "Tecnologias e competências",
    });
    const skills = within(ticker).getByRole("list", {
      name: "Especialidades profissionais",
    });
    for (const skill of [
      "Estratégia de produto",
      "IA generativa",
      "IA aplicada a produtos",
      "Product Analytics",
      "SaaS e marketplaces",
      "PCI-DSS",
      "Power BI",
      "AWS",
      "Oracle Cloud",
      "SQL Server",
      "Low-code",
    ]) {
      expect(within(skills).getByText(skill)).toBeInTheDocument();
    }
    expect(
      ticker.querySelector('[aria-hidden="true"].expertise-track-copy'),
    ).toBeInTheDocument();
  });

  it("uses accessible vector icons for professional social links", () => {
    render(<App />);

    const socialLinks = screen.getByRole("list", { name: "Redes e contato" });
    for (const name of ["LinkedIn", "GitHub", "Email", "WhatsApp"]) {
      expect(
        within(socialLinks)
          .getByRole("link", { name })
          .querySelector("svg"),
      ).toBeInTheDocument();
    }
  });

  it("introduces the portfolio with a greeting and a profile image", () => {
    render(<App />);

    expect(screen.getByText("Olá, eu sou")).toBeInTheDocument();
    expect(screen.getByText(/Produto digital, IA aplicada, dados e integrações/)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Alessander Dutra" }),
    ).toBeInTheDocument();
  });

  it("shows verified specialties as a horizontal strip beneath the hero", () => {
    render(<App />);

    const specialties = screen.getByRole("list", {
      name: "Especialidades profissionais",
    });
    expect(
      within(specialties).getByText("Estratégia de produto"),
    ).toBeInTheDocument();
    expect(within(specialties).getByText("IA generativa")).toBeInTheDocument();
    expect(
      within(specialties).getByText("Meios de pagamento"),
    ).toBeInTheDocument();
    expect(
      specialties.compareDocumentPosition(document.getElementById("sobre")!),
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it("uses the system color preference when no saved theme exists", () => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: () => ({ matches: true }),
    });
    render(<App />);

    expect(document.documentElement).toHaveClass("dark");
    expect(
      screen.getByRole("button", { name: "Ativar tema claro" }),
    ).toBeInTheDocument();
  });

  it("toggles and persists the selected color theme", () => {
    localStorage.setItem("theme", "light");
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Ativar tema escuro" }));

    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: "Ativar tema claro" }),
    ).toBeInTheDocument();
  });

  it("opens and closes the mobile navigation", () => {
    render(<App />);
    const menuButton = screen.getByRole("button", { name: "Abrir menu" });

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const navigation = screen.getByRole("navigation", {
      name: "Navegação principal",
    });
    fireEvent.click(within(navigation).getByRole("link", { name: "Projetos" }));
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("shows impact metrics with the context documented in the original portfolio", () => {
    render(<App />);

    expect(screen.getByText("Aumento na satisfação com novos produtos")).toBeInTheDocument();
    expect(screen.getByText("Redução no tempo de entrega com low-code")).toBeInTheDocument();
    expect(
      screen.getByText("Lançamentos sem defeitos com QA e testes A/B"),
    ).toBeInTheDocument();
  });

  it("groups professional competencies separately from certifications", () => {
    render(<App />);

    const competencies = screen.getByRole("region", { name: /Skills/ });
    expect(
      within(competencies).getByRole("heading", {
        level: 2,
        name: "Skills & competências",
      }),
    ).toBeInTheDocument();
    expect(
      within(competencies).getByText("Estratégia de produto"),
    ).toBeInTheDocument();
    expect(within(competencies).getByText("IA generativa")).toBeInTheDocument();
    expect(
      within(competencies).getByText("Meios de pagamento e PCI-DSS"),
    ).toBeInTheDocument();
  });

  it("shows the current Accenture role and all previous Altec experiences", () => {
    render(<App />);

    const journey = screen.getByRole("region", {
      name: "Trajetória profissional",
    });

    const roles = within(journey).getAllByRole("heading", { level: 3 });
    expect(roles.map((role) => role.textContent?.trim())).toEqual([
      "Software Prod & Plat Eng Specialist",
      "Product Manager",
      "Gerente de Suporte Técnico e Implantação",
      "Supervisor de Suporte Técnico e Operações",
    ]);
    expect(journey).toHaveTextContent("Accenture Brasil");
    expect(journey).toHaveTextContent("Tempo integral");
    expect(journey).toHaveTextContent("Avenida das Nações Unidas, 14401");
    expect(journey).toHaveTextContent("OpenTelemetry");
    expect(journey.querySelector('time[datetime="2026-06"]')).toHaveTextContent(
      "Jun 2026",
    );
    expect(within(journey).getByText("o momento · 5 meses")).toBeInTheDocument();
    expect(journey).toHaveTextContent("Altec Sistemas e Tecnologia");
    expect(journey).toHaveTextContent("Jul 2015");
    expect(journey).toHaveTextContent("Ago 2009");
  });

  it("renders all four experiences in an accessible timeline", () => {
    render(<App />);

    const timeline = screen.getByRole("region", {
      name: "Trajetória profissional",
    });
    const roles = within(timeline).getAllByRole("article");

    expect(roles).toHaveLength(4);
    expect(roles[0].parentElement).toHaveClass("experience-item--right");
    expect(roles[1].parentElement).toHaveClass("experience-item--left");
    expect(
      within(timeline).getByRole("list", {
        name: "Experiências profissionais",
      }),
    ).toBeInTheDocument();
  });

  it("shows the verified academic program and dates", () => {
    render(<App />);

    const education = screen.getByRole("region", {
      name: "Formação acadêmica",
    });
    expect(
      within(education).getByRole("heading", {
        name: "Inteligência Artificial e Machine Learning",
      }),
    ).toBeInTheDocument();
    expect(within(education).getByText(/UNIASSELVI/)).toBeInTheDocument();
    expect(education.querySelector('time[datetime="2025"]')).toBeInTheDocument();
    expect(education.querySelector('time[datetime="2027"]')).toBeInTheDocument();
  });

  it("groups verified skills in technical and professional panels", () => {
    render(<App />);

    const skills = screen.getByRole("region", { name: /Skills/ });
    expect(
      within(skills).getByRole("heading", { name: "Conhecimentos técnicos" }),
    ).toBeInTheDocument();
    expect(
      within(skills).getByRole("heading", {
        name: "Competências profissionais",
      }),
    ).toBeInTheDocument();
    for (const skill of [
      "IA generativa",
      "Claude",
      "Notion AI",
      "Engenharia de prompts",
      "Product Lifecycle Management",
      "Product Analytics",
      "OKRs e KPIs de produto",
      "Customer Journey Mapping",
      "ETL e integração de dados",
      "Microsserviços",
      "SQL",
      "Power BI",
      "AWS",
      "Meios de pagamento e PCI-DSS",
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "Liderança multifuncional",
    ]) {
      expect(within(skills).getByText(skill)).toBeInTheDocument();
    }
    const productGroup = within(skills).getByRole("heading", {
      level: 4,
      name: "Estratégia e gestão de produto",
    }).parentElement;
    const additionalSkills = productGroup?.querySelector("details");
    expect(additionalSkills).not.toHaveAttribute("open");
    const additionalSkillsSummary = additionalSkills?.querySelector("summary");
    expect(additionalSkillsSummary).toBeInTheDocument();
    if (additionalSkillsSummary) {
      fireEvent.click(additionalSkillsSummary);
    }
    expect(additionalSkills).toHaveAttribute("open");
  });

  it("shows services and selected professional development from the LinkedIn profile", () => {
    render(<App />);

    const services = screen.getByRole("region", { name: "Serviços prestados" });
    for (const service of [
      "Consultoria de TI",
      "Teste de software",
      "Design de experiência do usuário (UX)",
      "Desenvolvimento de SaaS",
      "Gestão de programas",
    ]) {
      expect(within(services).getByText(service)).toBeInTheDocument();
    }

    const development = screen.getByRole("region", {
      name: "Formação complementar em destaque",
    });
    const additionalCourses = within(development).getByText(
      "Ver demais cursos e credenciais",
    );
    expect(additionalCourses).toBeInTheDocument();
    expect(additionalCourses.parentElement).not.toHaveAttribute("open");
    fireEvent.click(additionalCourses);
    expect(additionalCourses.parentElement).toHaveAttribute("open");
    expect(within(development).getByText("Product Strategy")).toBeInTheDocument();
    expect(
      within(development).getAllByText(/AWS Generative AI Developer \(AIP-C01\)/),
    ).toHaveLength(6);
    for (const course of [
      "Discovery & Delivery com IA",
      "Advanced Product Analytics",
      "Agentic Thinking 101",
      "Formação Engenheiro de IA Generativa",
    ]) {
      expect(within(development).getByText(course)).toBeInTheDocument();
    }
    expect(development.querySelectorAll("a[href='#']")).toHaveLength(0);
  });

  it("shows the complete credential inventory without inventing credential links", () => {
    render(<App />);

    const learning = screen.getByRole("region", {
      name: "Formação complementar em destaque",
    });
    const otherCourses = within(learning).getByText(
      "Ver demais cursos e credenciais",
    );
    expect(otherCourses.parentElement).not.toHaveAttribute("open");
    fireEvent.click(otherCourses);
    expect(learning.querySelectorAll(".learning-card")).toHaveLength(48);

    for (const credential of [
      "ChatGPT Prompt Engineering Examples & Use Cases",
      "AWS Generative AI Developer (AIP-C01): Chunking, Embeddings, & Retrieval Design for FM Augmentation",
      "Programação e monitoramento de projetos Agile",
      "Fostering a Growth Mindset in the Age of AI",
      "Formação em Liderança",
      "ITIL v3 Foundations",
      "SQL Server 2012",
    ]) {
      expect(within(learning).getByText(credential)).toBeInTheDocument();
    }
    expect(learning.querySelectorAll("a")).toHaveLength(0);
  });

  it("presents the two source-verified publications once with working destinations", () => {
    render(<App />);

    const publications = screen.getByRole("region", { name: "Publicações" });
    expect(
      within(publications).getAllByRole("heading", {
        level: 2,
        name: "Publicações",
      }),
    ).toHaveLength(1);
    expect(
      within(publications).getByRole("heading", {
        level: 3,
        name: "Explorando o Universo do Machine Learning",
      }),
    ).toBeInTheDocument();
    expect(
      within(publications).getByRole("link", {
        name: "Ler publicação: Explorando o Universo do Machine Learning",
      }),
    ).toHaveAttribute(
      "href",
      "https://notebooklm.google.com/notebook/afc377f1-2806-440f-9183-7a4a359badfc",
    );
    expect(
      within(publications).getByRole("heading", {
        level: 3,
        name: "Principais Tendências para o Futuro da Alimentação em 2025",
      }),
    ).toBeInTheDocument();
    expect(
      within(publications).getByRole("link", {
        name: "Ler publicação: Principais Tendências para o Futuro da Alimentação em 2025",
      }),
    ).toHaveAttribute("href", "https://gebwwjsr.manus.space");
  });

  it("shows recommendations already present in the portfolio source", () => {
    render(<App />);

    const recommendations = screen.getByRole("region", {
      name: "Recomendações",
    });
    for (const name of [
      "Rikelmi Alves da Silva",
      "Nilza Teixeira Ribeiro",
      "Rosângela Rodrigues",
      "Chrystiane C. G. Jajácomo Aoki",
      "Andre Ramos",
      "Vanessa Rodrigues",
    ]) {
      expect(within(recommendations).getByText(name)).toBeInTheDocument();
    }
    expect(within(recommendations).getAllByRole("article")).toHaveLength(6);
  });

  it("offers a real mailto contact form with labelled, bounded inputs", () => {
    render(<App />);

    const form = screen.getByRole("form", { name: "Envie uma mensagem" });
    expect(within(form).getByLabelText("Seu nome")).toBeRequired();
    expect(within(form).getByLabelText("Seu e-mail")).toBeRequired();
    expect(within(form).getByLabelText("Mensagem")).toBeRequired();
    expect(within(form).getByLabelText("Mensagem")).toHaveAttribute(
      "maxlength",
      "4000",
    );
    expect(
      within(form).getByRole("button", { name: "Abrir aplicativo de e-mail" }),
    ).toBeInTheDocument();
  });

  it("encodes contact form values into the fixed portfolio mailto address", () => {
    expect(
      buildContactMailto({
        name: "Alessander & time",
        email: "teste@example.com",
        message: "Olá\nTenho interesse.",
      }),
    ).toBe(
      "mailto:alessander.dutra.santos@gmail.com?subject=Contato+pelo+portf%C3%B3lio&body=Nome%3A+Alessander+%26+time%0AEmail%3A+teste%40example.com%0A%0AMensagem%3A%0AOl%C3%A1%0ATenho+interesse.",
    );
  });

  it("provides footer navigation and social links with real destinations", () => {
    render(<App />);

    const footerNavigation = screen.getByRole("navigation", {
      name: "Navegação do rodapé",
    });
    for (const link of within(footerNavigation).getAllByRole("link")) {
      const targetId = link.getAttribute("href")?.slice(1);
      expect(targetId).toBeTruthy();
      expect(document.getElementById(targetId ?? "")).toBeInTheDocument();
    }

    const socialLinks = screen.getByRole("navigation", {
      name: "Redes sociais no rodapé",
    });
    expect(within(socialLinks).getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/alessander-dutra",
    );
    expect(within(socialLinks).getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/alessander-dutra",
    );
  });

  it("lists the technologies documented for each selected project", () => {
    render(<App />);

    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("Vite")).toBeInTheDocument();
  });
});
