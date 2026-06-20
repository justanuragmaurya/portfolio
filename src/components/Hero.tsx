"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Cinematic display name (background layer) ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            lineHeight: 0.88,
            fontSize: "clamp(7rem, 21vw, 21rem)",
            color: "var(--text)",
            opacity: 0.045,
            top: "12vh",
            left: "5vw",
            whiteSpace: "nowrap",
            letterSpacing: "-0.02em",
          }}
        >
          ANURAG
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
          className="absolute"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            lineHeight: 0.88,
            fontSize: "clamp(7rem, 21vw, 21rem)",
            color: "var(--accent)",
            opacity: 0.06,
            top: "calc(12vh + clamp(7rem, 21vw, 21rem) * 0.88)",
            left: "10vw",
            whiteSpace: "nowrap",
            letterSpacing: "-0.02em",
          }}
        >
          MAURYA
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-6xl mx-auto px-6 w-full pb-10 pt-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-7 max-w-2xl"
        >
          {/* Status tag */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--green)",
                boxShadow: "0 0 8px var(--green)",
              }}
            />
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              B.Tech CSE · LPU · Open to internships
            </span>
          </motion.div>

          {/* Primary headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "var(--text)",
            }}
            className="text-5xl md:text-7xl"
          >
            I build things
            <br />
            that ship.
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
          >
            Full-stack developer &amp; MVP builder.
            <br className="hidden md:block" />
            From idea to production in weeks, not quarters.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-[#0D0D0D] font-mono text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 hover:gap-3"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Let&apos;s build something
              <ArrowUpRight size={13} />
            </a>
            <Link
              href={personalInfo.resumeLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                border: "1px solid var(--border-strong)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
              Resume
              <ArrowUpRight size={13} />
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 pt-1"
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
                className="font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-[var(--accent)] inline-flex items-center gap-1"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
                <ArrowUpRight size={9} />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 max-w-6xl mx-auto w-full px-6 py-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          <StatItem value="500+" label="Organic users" />
          <StatItem value="8" label="Products shipped" />
          <StatItem value="'27" label="Graduating" />
          <StatItem value="Full-Stack" label="Specialist" />
        </div>
      </motion.div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.35rem",
          fontWeight: 400,
          color: "var(--accent)",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        className="font-mono text-[10px] tracking-[0.15em] uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}
