import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

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
      "Competências",
      "Projetos",
      "Trajetória",
      "Contato",
    ]) {
      const link = within(navigation).getByRole("link", { name: label });
      const targetId = link.getAttribute("href")?.slice(1);
      expect(targetId).toBeTruthy();

      if (targetId) {
        expect(document.getElementById(targetId)).toBeInTheDocument();
      }
    }
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

    expect(
      screen.getByRole("heading", { level: 2, name: "Competências" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Estratégia de produto")).toBeInTheDocument();
    expect(screen.getByText("IA generativa")).toBeInTheDocument();
    expect(screen.getByText("Meios de pagamento e PCI-DSS")).toBeInTheDocument();
  });

  it("shows the three real Altec roles in reverse chronological order", () => {
    render(<App />);

    const journey = document.getElementById("trajetoria");
    expect(journey).toBeInTheDocument();

    const roles = journey
      ? [...journey.querySelectorAll("h3")].map((heading) =>
          heading.textContent?.trim(),
        )
      : [];
    expect(roles).toEqual([
      "Product Manager",
      "Gerente de Suporte Técnico e Implantação",
      "Supervisor de Suporte Técnico e Operações",
    ]);
    expect(journey?.querySelector('time[datetime="2015-07"]')).toHaveTextContent(
      "Jul 2015",
    );
    expect(journey?.querySelector('time[datetime="2025-04"]')).toHaveTextContent(
      "Abr 2025",
    );
    expect(journey?.querySelector('time[datetime="2009-08"]')).toHaveTextContent(
      "Ago 2009",
    );
  });

  it("lists the technologies documented for each selected project", () => {
    render(<App />);

    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.getByText("Vite")).toBeInTheDocument();
  });
});
