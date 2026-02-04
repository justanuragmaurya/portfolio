"use client";

import Image from "next/image";
import Link from "next/link";
import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowUpRight, Copy, FileText, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full">
      {/* Top navigation bar */}
      <div className="w-full solid-border border-t-0 border-x-0">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="mono-text text-sm tracking-[0.15em] uppercase">
            {personalInfo.name}
          </span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-[#22c55e] animate-pulse-slow" />
            <span className="mono-text text-[10px] tracking-wider uppercase text-[#737373] ml-2">
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
          {/* Left content */}
          <div className="space-y-8">
            {/* Greeting box */}
            <div className="card-minimal">
              <p className="section-label mb-4">Introduction</p>
              <h1 className="text-3xl md:text-4xl font-light leading-tight tracking-tight">
                {personalInfo.greeting}
                <br />
                <span className="mono-text text-[#a3a3a3]">I build</span>{" "}
                <span className="font-normal">MVPs</span>
                <br />
                <span className="mono-text text-[#a3a3a3]">and</span>{" "}
                <span className="font-normal">full-stack products</span>
              </h1>
            </div>

            {/* Description */}
            <div className="solid-border p-6 bg-[#0a0a0a]">
              <p className="text-[#a3a3a3] leading-relaxed text-sm md:text-base">
                {personalInfo.title}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Link href={socialLinks.meetingLink} className="btn-minimal-solid inline-flex items-center gap-2">
                <Calendar size={14} />
                Book a Call
                <ArrowUpRight size={12} />
              </Link>
              <Link href={personalInfo.resumeLink} target="_blank" className="btn-minimal inline-flex items-center gap-2">
                <FileText size={14} />
                Resume
                <ArrowUpRight size={12} />
              </Link>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-2 mono-text text-xs tracking-wider text-[#737373] hover:text-[#fafafa] transition-colors"
              >
                <Copy size={12} />
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <span className="text-[#333333]">/</span>
              <Link
                href={socialLinks.github}
                target="_blank"
                className="mono-text text-xs tracking-wider text-[#737373] hover:text-[#fafafa] transition-colors inline-flex items-center gap-1"
              >
                GitHub
                <ArrowUpRight size={10} />
              </Link>
              <span className="text-[#333333]">/</span>
              <Link
                href={socialLinks.twitter}
                target="_blank"
                className="mono-text text-xs tracking-wider text-[#737373] hover:text-[#fafafa] transition-colors inline-flex items-center gap-1"
              >
                Twitter
                <ArrowUpRight size={10} />
              </Link>
              <span className="text-[#333333]">/</span>
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

          {/* Right - Image */}
          <div className="hidden md:block">
            <div className="dashed-border p-2">
              <div className="solid-border">
                <Image
                  src={personalInfo.image}
                  width={280}
                  height={280}
                  alt={personalInfo.name}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <p className="mono-text text-[10px] tracking-wider text-[#525252] mt-2 text-center">
              [{currentTime}]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
