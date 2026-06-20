"use client";

import Link from "next/link";
import { footerInfo } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="w-full py-6 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span
            className="font-mono text-[10px] tracking-[0.12em]"
            style={{ color: "var(--text-muted)" }}
          >
            Designed &amp; built by
          </span>
          <Link
            href={footerInfo.designerLink}
            target="_blank"
            className="font-mono text-[10px] tracking-[0.12em] transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: "var(--text-secondary)" }}
          >
            {footerInfo.designerName}
          </Link>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[var(--accent)]"
          style={{ color: "var(--text-muted)" }}
        >
          Top
          <ArrowUp size={10} />
        </button>
      </div>
    </footer>
  );
}
