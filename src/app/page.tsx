import Experience from "@/components/Experience";
import HeroSection from "@/components/Hero";
import MaxWidthContainer from "@/components/maxwidthcontainer";
import ProofOfWork from "@/components/proofofwork";

export default function Home() {
  return (
    <MaxWidthContainer>
      <HeroSection/>
      <ProofOfWork/>
      <Experience/>
    </MaxWidthContainer>
  );
}
