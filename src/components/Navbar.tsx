"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
    const sections = ["home", "projects", "experience", "skills", "achievements", "education", "certifications", "contact"];
    const scrollY = window.scrollY + 100;
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(13, 13, 13, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          Anurag Maurya
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
              style={{
                color:
                  activeSection === item.href.slice(1)
                    ? "var(--accent)"
                    : "var(--text-muted)",
              }}
            >
              {item.label}
            </button>
          ))}

          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[var(--border)]">
            <span
              className="w-1.5 h-1.5 rounded-full pulse-dot"
              style={{
                backgroundColor: "var(--green)",
                boxShadow: "0 0 6px var(--green)",
              }}
            />
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)]">
              Available
            </span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-[var(--border)] px-6 py-6 flex flex-col gap-4"
          style={{ backgroundColor: "rgba(13, 13, 13, 0.98)", backdropFilter: "blur(20px)" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="font-mono text-sm tracking-[0.15em] uppercase text-left transition-colors duration-200 hover:text-[var(--accent)]"
              style={{
                color:
                  activeSection === item.href.slice(1)
                    ? "var(--accent)"
                    : "var(--text-secondary)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </nav>
  );
}
