"use client";

import { personalInfo } from "@/lib/data";
import { useState, useEffect, useCallback } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleScroll = useCallback(() => {
    const sections = NAV_ITEMS.map((item) => item.href.slice(1));
    const scrollY = window.scrollY + 80;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection("home");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg-overlay-80)] backdrop-blur-md solid-border border-t-0 border-x-0">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#home")}
          className="mono-text text-sm tracking-[0.15em] uppercase hover:text-[var(--accent)] transition-colors"
        >
          {personalInfo.name}
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`mono-text text-[11px] tracking-wider uppercase px-3 py-1.5 transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-[var(--accent)] bg-[var(--accent-bg)]"
                  : "text-[var(--fg-muted)] hover:text-[var(--accent)]"
              }`}
            >
              {item.label}
            </button>
          ))}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-1.5 solid-border text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent-border-soft)] transition-colors ml-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}

          <div className="flex items-center gap-1 ml-3">
            <span className="w-2 h-2 bg-[var(--green)] animate-pulse-slow" />
            <span className="mono-text text-[10px] tracking-wider uppercase text-[var(--fg-muted)] ml-1">
              Available
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="mono-text text-xs tracking-wider uppercase text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors p-2 solid-border"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mono-text text-xs tracking-wider uppercase text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors p-2 solid-border"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden solid-border border-t-0 border-x-0 bg-[var(--bg-overlay-95)] backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`mono-text text-xs tracking-wider uppercase px-3 py-2 text-left transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-[var(--accent)] bg-[var(--accent-bg)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--accent)]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
