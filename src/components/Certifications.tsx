"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const certifications = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/2c5e1d1e657e",
  },
  {
    title: "Node.js (Intermediate)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/88d0c706c2d7",
  },
  {
    title: "Java Programming",
    issuer: "LPU",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2FFjFFAz0MwagbnXIG1%2FBTNNDBNEkFXZyw%3D",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google · Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/ROC0EI389JIG",
  },
  {
    title: "Programming in C",
    issuer: "LPU",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX19daxDxUuCnF%2Bb%2Bd3w3eHGZOQSwZqj2oc0%3D",
  },
];

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

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <span
              className="font-mono text-[10px] tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              06
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Certifications
            </span>
          </div>
        </FadeUp>

        <div className="space-y-px" style={{ backgroundColor: "var(--border)" }}>
          {certifications.map((cert, index) => (
            <FadeUp key={index} delay={index * 0.06}>
              <Link
                href={cert.link}
                target="_blank"
                className="group flex items-center justify-between gap-6 p-5 md:p-6 transition-colors duration-200"
                style={{ backgroundColor: "var(--bg-card)", display: "flex" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card)")
                }
              >
                <div className="min-w-0">
                  <h3
                    className="text-base leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      color: "var(--text)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className="font-mono text-[10px] tracking-[0.08em] uppercase mt-1.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {cert.issuer}
                  </p>
                </div>
                <div
                  className="shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid var(--border-strong)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  <ArrowUpRight size={13} />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
