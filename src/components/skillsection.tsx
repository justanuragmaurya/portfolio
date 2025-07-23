import { Bricolage_Grotesque } from "next/font/google";
import { skills } from "@/lib/data";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function SkillsSection(){
    return(
            <div className="flex flex-col items-center p-5 mt-10 w-full">
                <h1 className={`${font.className} font-semibold text-3xl`}>Skills</h1>
                <div className="flex w-full gap-5 mt-5 flex-wrap mx-auto items-center justify-center"> 
                    {skills.map((skill, index)=>{
                        return(
                            <div key={index} className="bg-primary text-primary-foreground py-0.5 px-3 rounded-md text-sm">{skill}</div>
                        )
                    })}
                </div>
            </div>
    )
}