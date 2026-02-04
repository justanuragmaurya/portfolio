import { education } from "@/lib/data";
import Image from "next/image";

export default function Education() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Education</span>
          <div className="flex-1 divider-dashed" />
          <span className="mono-text text-xs text-[#525252]">
            [{String(education.length).padStart(2, '0')} Institutions]
          </span>
        </div>

        {/* Education list */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="solid-border p-6 flex items-start gap-6 hover:bg-[#0f0f0f] transition-colors"
            >
              {/* Institution logo */}
              <div className="dashed-border-thin p-2 shrink-0">
                <Image
                  src={edu.logo}
                  width={48}
                  height={48}
                  alt={edu.institution}
                  className="object-contain"
                />
              </div>

              {/* Education details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-base font-normal tracking-tight">
                    {edu.institution}
                  </h3>
                  <span className="mono-text text-xs text-[#737373]">
                    {edu.duration}
                  </span>
                </div>
                <p className="mono-text text-sm text-[#a3a3a3] mt-1">
                  {edu.degree}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
