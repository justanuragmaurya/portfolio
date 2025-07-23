"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import Pulse from "./pulse";
import Link from "next/link";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Footer() {
  const [visit, setVisit] = useState<number | "Loading">("Loading");
  useEffect(() => {
    async function increaseVisitors() {
      const response = await axios.get("/api/visit");
      setVisit(response.data.visitor);
    }
    increaseVisitors();
  }, []);
  return (
    <div className="flex flex-col gap-5 items-center justify-center my-10 text-sm text-primary/70">
        <Pulse text={`Total Vistors : ${visit}`}/>
        <h2 className={`text-sm ${font.className}`}>Designed & Developed by <Link href={"https://x.com/intent/follow?screen_name=codeanuragg"} target="__blank"><span className="text-blue-300 underline">Anurag Maurya</span></Link></h2>
    </div>
  );
}
