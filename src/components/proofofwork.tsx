"use client";

import { Projects as projectsData } from "@/lib/projects";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <span
              className="font-mono text-[10px] tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              01
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              What I&apos;ve shipped
            </span>
          </div>
        </FadeUp>

        {/* Project grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "var(--border)" }}
        >
          {projectsData.map((project, index) => (
            <FadeUp key={index} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-card)", minHeight: "220px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default state */}
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-between"
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="font-mono text-[10px] tracking-[0.2em] block mb-3"
              style={{ color: "var(--accent)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className="text-2xl md:text-[1.7rem] leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              {project.title}
            </h3>
          </div>
          <Link
            href={project.liveLink}
            target="_blank"
            aria-label="Visit live site"
            className="shrink-0 w-9 h-9 flex items-center justify-center transition-all duration-200"
            style={{ border: "1px solid var(--border-strong)", color: "var(--text-muted)" }}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            }}
          >
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.techUsed.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="font-mono text-[9px] tracking-[0.08em] uppercase px-2 py-1"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              {tech}
            </span>
          ))}
          {project.techUsed.length > 4 && (
            <span
              className="font-mono text-[9px] tracking-[0.08em] uppercase px-2 py-1"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              +{project.techUsed.length - 4}
            </span>
          )}
        </div>
      </motion.div>

      {/* Hover reveal */}
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-between"
        style={{
          backgroundColor: "var(--bg-hover)",
          borderTop: "1px solid var(--accent-border)",
        }}
        initial={{ y: "100%" }}
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <h3
            className="text-xl mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}
          >
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.techUsed.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="font-mono text-[9px] tracking-[0.08em] uppercase px-2 py-1"
                style={{ border: "1px solid var(--accent-border)", color: "var(--accent)" }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={project.githubLink}
              target="_blank"
              aria-label="Source code"
              className="w-8 h-8 flex items-center justify-center transition-colors duration-200"
              style={{ border: "1px solid var(--border-strong)", color: "var(--text-muted)" }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
              }}
            >
              <Github size={13} />
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              aria-label="Live site"
              className="w-8 h-8 flex items-center justify-center transition-colors duration-200"
              style={{ border: "1px solid var(--border-strong)", color: "var(--text-muted)" }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
              }}
            >
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
