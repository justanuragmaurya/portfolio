import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Experience(){
    return(
        <div className="flex flex-col items-center p-5 mt-5 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Experience</h1>
            <div className="flex w-full items-center gap-5 mt-5">
                <div>
                    <Image src={"/hlogo.svg"} width={50} height={50} alt="HairiyapaLogo" className="rounded-full dark:invert"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div><h1 className="font-bold">Hairiyapa</h1></div>
                        <div><h1 className="text-sm text-primary/70">Oct 2024 - Dec 2024 </h1></div>
                    </div>
                    <span className="text-sm font-normal text-primary/70">Fullstack Developer Intern</span>
                </div>
            </div>
        </div>
    )
}