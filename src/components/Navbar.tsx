"use client";

import { personalInfo } from "@/lib/data";
import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  // { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-md solid-border border-t-0 border-x-0">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Name / logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="mono-text text-sm tracking-[0.15em] uppercase hover:text-[#f97316] transition-colors"
        >
          {personalInfo.name}
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`mono-text text-[11px] tracking-wider uppercase px-3 py-1.5 transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-[#f97316] bg-[#f9731610]"
                  : "text-[#737373] hover:text-[#f97316]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-1 ml-3">
            <span className="w-2 h-2 bg-[#22c55e] animate-pulse-slow" />
            <span className="mono-text text-[10px] tracking-wider uppercase text-[#737373] ml-1">
              Available
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden mono-text text-xs tracking-wider uppercase text-[#737373] hover:text-[#fafafa] transition-colors p-2 solid-border"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden solid-border border-t-0 border-x-0 bg-[#0a0a0a]/95 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`mono-text text-xs tracking-wider uppercase px-3 py-2 text-left transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-[#f97316] bg-[#f9731610]"
                    : "text-[#737373] hover:text-[#f97316]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-1 px-3 py-2 mt-2">
              <span className="w-2 h-2 bg-[#22c55e] animate-pulse-slow" />
              <span className="mono-text text-[10px] tracking-wider uppercase text-[#737373] ml-1">
                Available for work
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
