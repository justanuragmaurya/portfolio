import { experience } from "@/lib/data";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-20 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Experience</span>
          <div className="flex-1 divider-dashed" />
          <span className="mono-text text-xs text-[var(--fg-dim)]">
            [{String(experience.length).padStart(2, '0')} Positions]
          </span>
        </div>

        <div className="space-y-0">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`solid-border ${index === 0 ? '' : 'border-t-0'} p-6 flex items-start gap-6 hover:bg-[var(--bg-hover)] transition-colors`}
            >
              {exp.logo && (
                <div className="dashed-border-thin p-2 shrink-0">
                  <Image
                    src={exp.logo}
                    width={40}
                    height={40}
                    alt={exp.company}
                    className="object-contain"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-base font-normal tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="mono-text text-xs text-[var(--fg-muted)]">
                    {exp.duration}
                  </span>
                </div>
                <p className="mono-text text-sm text-[var(--fg-secondary)] mt-1">
                  {exp.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
