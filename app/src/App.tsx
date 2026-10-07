import { useEffect, useState } from "react";
import {
  AboutSection,
  ContactSection,
  JourneySection,
  ProjectsSection,
  SiteFooter,
} from "./components/PortfolioSections";
import { HeroSection } from "./components/HeroSection";
import { SiteHeader } from "./components/SiteHeader";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export default function App() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function toggleTheme() {
    const nextIsDark = !isDark;

    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <>
      <SiteHeader isDark={isDark} onToggleTheme={toggleTheme} />
      <main id="conteudo" className="page-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
