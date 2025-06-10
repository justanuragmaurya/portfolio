import Image from "next/image";
import { File, Mail } from "lucide-react";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

const font = Bricolage_Grotesque({
    subsets:["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function HeroSection(){
    return(
        <div className="mt-16 md:mt-32 flex flex-col md:flex-row gap-6 md:gap-8 md:justify-between md:items-center">
            <div className="flex justify-center md:hidden">
                <Image 
                    src={"https://pbs.twimg.com/profile_images/1928635890999394304/09YwaCu8_400x400.jpg"} 
                    height={120} 
                    width={120} 
                    alt="anurag's image" 
                    className="rounded-full border shadow-xl"
                />
            </div>
            <div className="text-center md:text-left px-4 md:px-0 max-w-2xl">
                <h1 className={`text-2xl md:text-3xl font-medium`}>Hey there,</h1>
                <h1 className={`text-4xl md:text-5xl font-semibold`}>I'm <span className={`${font.className} font-black`}><AuroraText colors={["red","orange"]}>Anurag</AuroraText></span></h1>
                <p className="text-primary/70 py-3 text-md">
                    I'm a MVP builder and full-stack developer, turning ideas into production-ready products—handling everything from concept to deployment with a complete modern tech stack.
                </p>
                <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start items-center">
                    <Link href="mailto:contact@anuragmaurya.com">
                        <RainbowButton><Mail className="mr-2 h-4 w-4" /> Get in touch</RainbowButton>
                    </Link>
                    <Link href={"https://thumbnaily-storage.s3.ap-south-1.amazonaws.com/thumbnails/assests/resumeanuragmaurya.pdf"} target="_blank">
                        <RainbowButton variant="outline"><File className="mr-2 h-4 w-4" />My Resume</RainbowButton>
                    </Link>
                </div>
            </div>
            <div className="hidden w-full md:block">
                <Image 
                    src={"https://pbs.twimg.com/profile_images/1928635890999394304/09YwaCu8_400x400.jpg"} 
                    height={200} 
                    width={200} 
                    alt="anurag's image" 
                    className="rounded-full border shadow-xl"
                />
            </div>
        </div>
    )
}