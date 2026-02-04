import Hero from "@/components/Hero";
import Projects from "@/components/proofofwork";
import Experience from "@/components/Experience";
import Skills from "@/components/skillsection";
import Education from "@/components/Education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
