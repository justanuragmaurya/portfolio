"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { MoveLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function BookMeetPage() {
  return (
    <div className="min-h-screen grid-pattern">
      {/* Header */}
      <div className="w-full solid-border border-t-0 border-x-0">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="btn-minimal inline-flex items-center gap-2">
            <MoveLeft size={14} />
            Back
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Title section */}
        <div className="dashed-border p-8 md:p-12 mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar size={24} className="text-[#737373]" />
            <span className="section-label">Schedule a Call</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Book A Meet
          </h1>
          <p className="text-sm md:text-base text-[#a3a3a3] max-w-xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? As a fullstack MVP
            developer with expertise in web and web3 technologies, I can help
            bring your next venture to life. Let&apos;s discuss how we can build
            something amazing together!
          </p>
        </div>

        {/* Calendar section */}
        <div className="solid-border p-4 md:p-6">
          <MeetComponent />
        </div>
      </div>
    </div>
  );
}

function MeetComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { 
        hideEventTypeDetails: false, 
        layout: "month_view",
        styles: {
          branding: {
            brandColor: "#0a0a0a"
          }
        }
      });
    })();
  }, []);

  return (
    <Cal
      namespace="30min"
      calLink="anuragmaurya/30min"
      style={{ width: "100%", height: "600px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
