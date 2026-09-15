import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { EngineeringJourney } from "@/components/EngineeringJourney";
import { Services } from "@/components/Services";
import { GitHubSection } from "@/components/GitHubSection";
import { ProofSection } from "@/components/ProofSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <EngineeringJourney />
        <Services />
        <GitHubSection />
        <ProofSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}