import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Founders from "@/components/sections/Founders";
import TechMarquee from "@/components/sections/TechMarquee";
import ManifestoReveal from "@/components/sections/ManifestoReveal";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <TechMarquee />
      <Portfolio />
      <ManifestoReveal />
      <Process />
      <Founders />
      <ContactCTA />
    </div>
  );
}
