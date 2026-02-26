import Hero from "@/components/Hero";
import Projects from "@/components/proofofwork";
import Experience from "@/components/Experience";
import Skills from "@/components/skillsection";
import Education from "@/components/Education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import LeetcodeStats from "@/components/LeetcodeStats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <LeetcodeStats />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
