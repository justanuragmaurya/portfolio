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
          {/* Left - Credits */}
          <div className="flex items-center gap-2">
            <span className="mono-text text-xs text-[#737373]">
              Designed & Built by
            </span>
            <Link
              href={footerInfo.designerLink}
              target="_blank"
              className="mono-text text-xs tracking-wider hover:text-[#a3a3a3] transition-colors"
            >
              {footerInfo.designerName}
            </Link>
          </div>



          {/* Right - Back to top */}
          <button
            onClick={scrollToTop}
            className="mono-text text-xs tracking-wider text-[#737373] hover:text-[#fafafa] transition-colors inline-flex items-center gap-1"
          >
            Back to Top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
