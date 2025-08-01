import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new PrismaClient();
  try {
    const data = await db.siteAnalytics.findUnique({
      where: {
        siteName: "portfolio",
      },
    });

    const vists = data?.visitors;

    const newVisitCount = vists! + 1;
    
    await db.siteAnalytics.update({
      where: {
        siteName: "portfolio",
      },
      data: {
        visitors: newVisitCount,
      },
    });

    return NextResponse.json({ 
      success: true, 
      visitor: newVisitCount.toString() 
    });
  }catch (e: any) {
    return NextResponse.json({
      success: false,
      message:`${e}`
    });
  } finally {
    await db.$disconnect();
  }
}
