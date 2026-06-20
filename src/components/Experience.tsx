"use client";

import { experience } from "@/lib/data";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <span
              className="font-mono text-[10px] tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              02
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Where I&apos;ve worked
            </span>
          </div>
        </FadeUp>

        <div className="space-y-px" style={{ backgroundColor: "var(--border)" }}>
          {experience.map((exp, index) => (
            <FadeUp key={index} delay={index * 0.08}>
              <div
                className="flex items-start gap-6 p-6 md:p-8 transition-colors duration-200"
                style={{ backgroundColor: "var(--bg-card)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card)")
                }
              >
                {exp.logo && (
                  <div
                    className="shrink-0 w-12 h-12 flex items-center justify-center"
                    style={{ border: "1px solid var(--border-strong)" }}
                  >
                    <Image
                      src={exp.logo}
                      width={32}
                      height={32}
                      alt={exp.company}
                      className="object-contain"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3
                      className="text-xl md:text-2xl leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {exp.company}
                    </h3>
                    <span
                      className="font-mono text-[10px] tracking-[0.12em] uppercase shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {exp.duration}
                    </span>
                  </div>
                  <p
                    className="font-mono text-xs tracking-[0.08em] mt-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {exp.position}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
