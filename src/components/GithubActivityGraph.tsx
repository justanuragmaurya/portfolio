import Link from "next/link";
import { GithubGraph } from "./ui/github";
import { Bricolage_Grotesque } from "next/font/google";
import { githubActivity } from "@/lib/data";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function GithubActivitySection() {

  return (
    <div className="flex flex-col items-center mt-10 w-full px-2 sm:px-4">
      <h1 className={`${font.className} font-semibold text-xl sm:text-2xl md:text-3xl py-2 text-center`}>{githubActivity.title}</h1>
      <div className="flex w-full items-center justify-center mt-5">
        <div className="w-full max-w-full overflow-hidden">
          <Link href={githubActivity.profileUrl} target="__blank" className="block">
            <div className="w-fit mx-auto max-w-full overflow-x-auto">
              <GithubGraph 
                username={githubActivity.username} 
                blockMargin={githubActivity.blockMargin} 
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
