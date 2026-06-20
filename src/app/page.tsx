import Hero from "@/components/Hero";
import Projects from "@/components/proofofwork";
import Experience from "@/components/Experience";
import Skills from "@/components/skillsection";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
