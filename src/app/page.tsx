import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Founders from "@/components/sections/Founders";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Hero />
      <Portfolio />
      <Process />
      <Founders />
    </div>
  );
}
