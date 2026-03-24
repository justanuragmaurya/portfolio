import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-20 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Technical Skills</span>
          <div className="flex-1 divider-dashed" />
          <span className="mono-text text-xs text-[var(--fg-dim)]">
            [{String(skills.length).padStart(2, '0')} Technologies]
          </span>
        </div>

        <div className="dashed-border p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[var(--border-color)]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[var(--bg)] p-4 text-center hover:bg-[var(--bg-secondary)] transition-colors group"
              >
                <span className="mono-text text-xs tracking-wider text-[var(--fg-secondary)] group-hover:text-[var(--fg)] transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
