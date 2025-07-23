"use client";
import Image from "next/image";
import { Calendar, File, GithubIcon, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { personalInfo, socialLinks } from "@/lib/data";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function HeroSection() {
  return (
    <div className="pt-12 w-full flex flex-col md:flex-row gap-6 md:gap-8 md:justify-between md:items-center relative">
      <div className="flex justify-center md:hidden">
        <Image
          src={personalInfo.image}
          height={120}
          width={120}
          alt="anurag image"
          className="rounded-full border shadow-xl"
        />
      </div>
      <div className="text-center md:text-left px-4 md:px-0 max-w-2xl">
        <h1 className={`text-2xl md:text-3xl font-medium`}>{personalInfo.greeting}</h1>
        <h1 className={`text-4xl md:text-5xl font-semibold`}>
          I&apos;m{" "}
          <span className={`${font.className} font-black`}>
            <AuroraText colors={["cyan", "cyan"]}>{personalInfo.name}</AuroraText>
          </span>
        </h1>
        <p className="text-primary/70 py-3 text-md">
          {personalInfo.title}
        </p>
        <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start items-center">
          <Link href={socialLinks.meetingLink}>
            <RainbowButton>
              <Calendar className="mr-2 h-4 w-4" /> Book A Meet
            </RainbowButton>
          </Link>
          <Link
            href={personalInfo.resumeLink}
            target="_blank"
          >
            <RainbowButton variant="outline">
              <File className="mr-2 h-4 w-4" />
              My Resume
            </RainbowButton>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start items-center">
          <div
            onClick={() => {
              navigator.clipboard
                .writeText(personalInfo.email)
                .then(() => {
                  alert("Email copied to clipboard!");
                })
                .catch((err) => {
                  console.error("Failed to copy email: ", err);
                });
            }}
            className="border p-3 rounded-full shadow-sm"
          >
            <Mail />
          </div>
          <Link
            href={socialLinks.twitter}
            target="_blank"
          >
            <div className="border p-3 rounded-full shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </div>
          </Link>
          <Link href={socialLinks.github} target="_blank">
            <div className="border p-3 rounded-full shadow-sm">
              <GithubIcon size={20} />
            </div>
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
          >
            <div className="border p-3 rounded-full shadow-sm">
              <Linkedin size={20} />
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden h-full md:block">
        <Image
          src={personalInfo.image}
          height={500}
          width={500}
          alt="anurag's image"
          className="rounded-full border shadow-xl"
        />
      </div>
    </div>
  );
}
