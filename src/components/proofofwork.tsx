import { Bricolage_Grotesque } from "next/font/google";
import MaxWidthContainer from "./maxwidthcontainer";
import { Projects } from "@/lib/projects";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, GithubIcon } from "lucide-react";
import Link from "next/link";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function ProofOfWork() {
  return (
    <MaxWidthContainer className="mt-16 flex flex-col items-center">
      <h1 className={`${font.className} font-semibold text-3xl`}>Proof Of Work </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-2 p-2 hover:cursor-default">
        {Projects.map((e, index) => {
          return (
            <div key={index} className="w-full border hover:scale-101 transition rounded-md overflow-hidden">
              <div className="overflow-hidden m-2 border rounded-sm">
                <Image src={`${e.image}`} width={1280} height={720} alt="Project Image" className="object-cover transition-transform duration-300 -z-10 hover:scale-105"/>
              </div>
              <div className="p-3 flex flex-col">
                <div className="flex justify-between">
                    <h1 className={`${font.className} text-xl font-bold`}>{e.title} </h1>
                    <div className="text-xs flex gap-2 text-primary-foreground">
                        <Link href={e.githubLink}><button className="w-max flex gap-2 items-center border px-2 py-1 rounded-sm bg-secondary-foreground hover:scale-105 transition-transform duration-300 hover:cursor-pointer"><Github size={15}/>Github</button></Link>
                        <Link href={e.liveLink}><button className="w-max flex   gap-2 items-center border px-2 py-1 rounded-sm bg-secondary-foreground hover:scale-105 transition-transform duration-300 hover:cursor-pointer"> Live Link</button></Link>
                    </div>
                </div>
                <p className="text-sm text-primary/70 mt-3">{e.description}</p>
                <div className="text-xs flex flex-wrap gap-2 my-2">
                  {e.techUsed.map((y, index) => {
                    return (
                      <h2 key={index} className="rounded-full border px-3 py-0.5">{y}</h2>
                    );
                  })}
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </MaxWidthContainer>
  );
}
