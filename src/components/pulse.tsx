import { Bricolage_Grotesque } from "next/font/google";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Pulse({text}:{text:string}) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <span className={`font-semibold text-sm tracking-wide ${font.className}`}>{text}</span>
      </div>
    </div>
  )
}
