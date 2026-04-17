import HeroHeader from "@/components/landing/HeroHeader";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ChaosSection from "@/components/landing/ChaosSection";
import MasterSection from "@/components/landing/MasterSection";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <ChaosSection />
        <MasterSection />
      </main>
    </>
  );
}