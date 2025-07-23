import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import { experience } from "@/lib/data";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Experience(){
    return(
        <div className="flex flex-col items-center p-5 mt-10 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Experience</h1>
            {experience.map((exp, index) => (
                <div key={index} className="flex w-full items-center gap-5 mt-5">
                    <div>
                        <Image src={exp.logo} width={50} height={50} alt={`${exp.company}Logo`} className={exp.logoClassName}/>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div><h1 className="font-bold">{exp.company}</h1></div>
                            <div><h1 className="text-sm text-primary/70">{exp.duration}</h1></div>
                        </div>
                        <span className="text-sm font-normal text-primary/70">{exp.position}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}