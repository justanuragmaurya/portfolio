"use client";

import Link from "next/link";
import { footerInfo } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full solid-border border-b-0">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="mono-text text-xs text-[var(--fg-muted)]">
              Designed & Built by
            </span>
            <Link
              href={footerInfo.designerLink}
              target="_blank"
              className="mono-text text-xs tracking-wider hover:text-[var(--accent)] transition-colors"
            >
              {footerInfo.designerName}
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="mono-text text-xs tracking-wider text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
          >
            Back to Top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
