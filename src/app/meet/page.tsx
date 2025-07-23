"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import MaxWidthContainer from "@/components/maxwidthcontainer";
import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import { MoveLeft } from "lucide-react";
import { Bricolage_Grotesque, Butterfly_Kids } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function BookMeetPage() {
  return (
    <div className="p-5 relative max-w-7xl mx-auto">
      <div className="">
        <Link href={"/"}>
          <Button>
            <MoveLeft />
            Back{" "}
          </Button>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-center">
        <AuroraText className={`text-5xl font-bold ${font.className}`}>Book A Meet</AuroraText>
        <p className="text-lg md:max-w-1/2 text-primary/70 mb-4">
          Ready to transform your ideas into reality? As a fullstack MVP
          developer with expertise in web and web3 technologies, I can help
          bring your next venture to life. Let's discuss how we can build
          something amazing together!
        </p>
      </div>
      <div className="md:m-5 md:p-5">
        <MeetComponent />
      </div>
    </div>
  );
}

export function MeetComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="anuragmaurya/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
