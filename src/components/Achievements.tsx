import Link from "next/link";
import { ArrowUpRight, Trophy, Code2 } from "lucide-react";

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

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-12 md:py-20 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Achievements</span>
          <div className="flex-1 divider-dashed" />
          <span className="mono-text text-xs text-[#525252]">
            [{String(achievements.length).padStart(2, "0")} Highlights]
          </span>
        </div>

        <div className="space-y-0">
          {achievements.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className={`solid-border ${index === 0 ? "" : "border-t-0"} p-6 flex items-center justify-between gap-4 hover:bg-[#0f0f0f] transition-colors group`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="shrink-0 p-2.5 dashed-border-thin text-[#737373] group-hover:text-[#f97316] transition-colors">
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-normal tracking-tight group-hover:text-[#fafafa] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mono-text text-xs text-[#737373] mt-1">
                    {item.description}
                  </p>
                </div>
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
