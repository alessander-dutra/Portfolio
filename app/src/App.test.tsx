import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio application shell", () => {
  it("renders Alessander Dutra as the page's main heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Alessander Dutra" }),
    ).toBeInTheDocument();
  });
});
