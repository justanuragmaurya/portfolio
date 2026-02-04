import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Technical Skills</span>
          <div className="flex-1 divider-dashed" />
          <span className="mono-text text-xs text-[#525252]">
            [{String(skills.length).padStart(2, '0')} Technologies]
          </span>
        </div>

        {/* Skills grid */}
        <div className="dashed-border p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#262626]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-4 text-center hover:bg-[#171717] transition-colors group"
              >
                <span className="mono-text text-xs tracking-wider text-[#a3a3a3] group-hover:text-[#fafafa] transition-colors">
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
