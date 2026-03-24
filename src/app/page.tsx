import Hero from "@/components/Hero";
import Projects from "@/components/proofofwork";
import Experience from "@/components/Experience";
import Skills from "@/components/skillsection";
import Education from "@/components/Education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import LeetcodeStats from "@/components/LeetcodeStats";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
