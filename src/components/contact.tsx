"use client";

import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative w-full py-32 md:py-48 overflow-hidden scroll-mt-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201, 168, 76, 0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "600px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201, 168, 76, 0.3) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase block mb-8"
          style={{ color: "var(--accent)" }}
        >
          Open to work
        </span>

        <h2
          className="leading-[1.0] mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(3rem, 10vw, 8rem)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Let&apos;s build
          <br />
          something.
        </h2>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-8 py-4 font-mono text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:gap-4 hover:opacity-90"
          style={{
            backgroundColor: "var(--accent)",
            color: "#0D0D0D",
          }}
        >
          {personalInfo.email}
          <ArrowUpRight size={14} />
        </motion.a>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-8 mt-12"
        >
          {[
            { label: "GitHub", href: socialLinks.github },
            { label: "Twitter", href: socialLinks.twitter },
            { label: "LinkedIn", href: socialLinks.linkedin },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="font-mono text-[10px] tracking-[0.2em] uppercase inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--text)]"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
              <ArrowUpRight size={9} />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
