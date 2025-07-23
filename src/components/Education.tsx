import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import { education } from "@/lib/data";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Education(){
    return(
        <div className="flex flex-col items-center p-5 mt-5 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Education</h1>
            {education.map((edu, index) => (
                <div key={index} className="flex w-full items-center gap-5 mt-5">
                    <div>
                        <Image src={edu.logo} width={50} height={50} alt={`${edu.institution} LOGO`} className={edu.logoClassName}/>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div className="items-center gap-2"><h1 className="font-bold">{edu.institution}</h1></div>
                            <h1 className="text-sm text-primary/70">{edu.duration}</h1>
                        </div>
                        <span className="text-sm font-normal text-primary/70">{edu.degree}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}