"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import Pulse from "./pulse";
import Link from "next/link";
import { footerInfo } from "@/lib/data";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Footer() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center my-10 text-sm text-primary/70">
        <h2 className={`text-sm ${font.className}`}>Designed & Developed by <Link href={footerInfo.designerLink} target="__blank"><span className="text-blue-300 underline">{footerInfo.designerName}</span></Link></h2>
    </div>
  );
}
