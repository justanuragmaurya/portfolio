"use client";

import Link from "next/link";
import { ArrowUpRight, Trophy, Code2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const achievements = [
  {
    title: "Superteam Hackathon — Top 3",
    description: "Won $100 bounty for placing in the top 3",
    link: "https://superteam.fun/earn/t/ragey",
    icon: Trophy,
  },
  {
    title: "LeetCode — Top 15%",
    description: "1700+ contest rating",
    link: "https://leetcode.com/u/justanuragmaurya/",
    icon: Code2,
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

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <span
              className="font-mono text-[10px] tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              04
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Milestones
            </span>
          </div>
        </FadeUp>

        <div className="space-y-px" style={{ backgroundColor: "var(--border)" }}>
          {achievements.map((item, index) => (
            <FadeUp key={index} delay={index * 0.08}>
              <Link
                href={item.link}
                target="_blank"
                className="group flex items-center justify-between gap-6 p-6 md:p-8 transition-colors duration-200"
                style={{ backgroundColor: "var(--bg-card)", display: "flex" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-card)")
                }
              >
                <div className="flex items-center gap-5 min-w-0">
                  <div
                    className="shrink-0 w-10 h-10 flex items-center justify-center transition-colors duration-200"
                    style={{
                      border: "1px solid var(--border-strong)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <item.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-xl leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-mono text-[10px] tracking-[0.08em] mt-1.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.description}
                    </p>
                  </div>
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
