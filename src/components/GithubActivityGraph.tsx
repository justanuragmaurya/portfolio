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
    <div className="flex flex-col items-center mt-10 w-full">
      <h1 className={`${font.className} font-semibold text-3xl py-2`}>{githubActivity.title}</h1>
      <div className="flex w-full items-center gap-5 mt-5">
        <Link href={githubActivity.profileUrl} target="__blank">
          <GithubGraph username={githubActivity.username} blockMargin={githubActivity.blockMargin} />
        </Link>
      </div>
    </div>
  );
}
