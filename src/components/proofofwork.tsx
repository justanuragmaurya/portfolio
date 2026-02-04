"use client";

import { Projects as projectsData } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="w-full py-6 md:py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">My Works</span>
          <div className="flex-1 divider-dashed" />
          <span className="mono-text text-xs text-[#525252]">
            [{String(projectsData.length).padStart(2, '0')}]
          </span>
        </div>

        {/* Projects list - compact */}
        <div className="space-y-4">
          {projectsData.map((project, index) => (
            <article
              key={index}
              className="solid-border p-4 hover:bg-[#0f0f0f] transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Project image - smaller with link */}
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="solid-border overflow-hidden shrink-0 w-full md:w-48 h-28 block"
                >
                  <Image
                    src={project.image}
                    width={200}
                    height={112}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                </Link>

                {/* Project info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-normal tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mono-text text-[10px] text-[#737373] mt-1 line-clamp-1">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="p-2 solid-border hover:bg-[#171717] transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={14} />
                      </Link>
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="p-2 solid-border hover:bg-[#171717] transition-colors"
                        aria-label="View live site"
                      >
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Tech tags - compact */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techUsed.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tag-minimal">
                        {tech}
                      </span>
                    ))}
                    {project.techUsed.length > 4 && (
                      <span className="tag-minimal">
                        +{project.techUsed.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
