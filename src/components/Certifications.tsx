import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-20 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Certifications</span>
          <div className="flex-1 divider-dashed" />
          <span className="mono-text text-xs text-[#525252]">
            [{String(certifications.length).padStart(2, "0")} Certificates]
          </span>
        </div>

        <div className="space-y-0">
          {certifications.map((cert, index) => (
            <Link
              key={index}
              href={cert.link}
              target="_blank"
              className={`solid-border ${index === 0 ? "" : "border-t-0"} p-6 flex items-center justify-between gap-4 hover:bg-[#0f0f0f] transition-colors group`}
            >
              <div className="min-w-0">
                <h3 className="text-base font-normal tracking-tight group-hover:text-[#fafafa] transition-colors">
                  {cert.title}
                </h3>
                <p className="mono-text text-xs text-[#737373] mt-1">
                  {cert.issuer}
                </p>
              </div>
              <div className="shrink-0 p-2 solid-border text-[#525252] group-hover:text-[#f97316] group-hover:border-[#f9731666] transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
