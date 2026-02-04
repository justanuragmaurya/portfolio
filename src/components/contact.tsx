import { personalInfo } from "@/lib/data";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Get in Touch</span>
          <div className="flex-1 divider-dashed" />
        </div>

        <div className="dashed-border p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="text-[#a3a3a3] leading-relaxed text-sm md:text-base mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I&apos;m always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 solid-border">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="section-label block mb-1">Email</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm md:text-base hover:text-[#a3a3a3] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <div className="p-3 solid-border">
                  <span className="mono-text text-xs"> Socials</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={socialLinks.github}
                    target="_blank"
                    className="mono-text text-xs tracking-wider text-[#737373] hover:text-[#fafafa] transition-colors inline-flex items-center gap-1"
                  >
                    GitHub
                    <ArrowUpRight size={10} />
                  </Link>
                  <Link
                    href={socialLinks.twitter}
                    target="_blank"
                    className="mono-text text-xs tracking-wider text-[#737373] hover:text-[#fafafa] transition-colors inline-flex items-center gap-1"
                  >
                    Twitter
                    <ArrowUpRight size={10} />
                  </Link>
                  <Link
                    href={socialLinks.linkedin}
                    target="_blank"
                    className="mono-text text-xs tracking-wider text-[#737373] hover:text-[#fafafa] transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <ArrowUpRight size={10} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
