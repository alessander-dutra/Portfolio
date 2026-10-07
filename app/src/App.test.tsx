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

    for (const label of ["Sobre", "Projetos", "Trajetória", "Contato"]) {
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
});
