"use client";

import { useRef, memo, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FounderCardProps {
  name: string;
  role: string;
  desc: string;
  image: string;
  accent: string;
  linkedin?: string;
}

function FounderCard({ name, role, desc, image, accent, linkedin }: FounderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      const shine = shineRef.current;
      if (!card || !shine) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, ${accent}20, transparent 50%)`;
    },
    [accent]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!card || !shine) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    shine.style.background = "transparent";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] transition-transform duration-200 ease-out will-change-transform cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
      onClick={() => linkedin && window.open(linkedin, "_blank")}
    >
      {/* Shine overlay */}
      <div ref={shineRef} className="absolute inset-0 z-30 pointer-events-none transition-all duration-200" />

      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 will-change-transform"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
        <p
          className="font-mono tracking-[0.2em] text-xs mb-2 uppercase"
          style={{ color: accent }}
        >
          {role}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
          {name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {desc}
        </p>
      </div>

      {/* Animated border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-40"
        style={{ borderColor: `${accent}30` }}
      />
    </div>
  );
}

const Founders = memo(() => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".founder-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden z-10 transition-colors duration-500"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
    >
      {/* Orbs */}
      <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/10 top-[20%] right-[-150px]" />
      <div className="gradient-orb w-[350px] h-[350px] bg-purple-500/10 bottom-[10%] left-[-150px]" />

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="text-sm font-mono tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent-purple)" }}>
            // The Team
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            The <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Architecting the bridge between human creativity and machine precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="founder-card">
            <FounderCard
              name="Nandu Kumar Koribilli"
              role="Founder"
              desc="Lead architect who weaves controlled chaos into refined, sculptural digital experiences."
              image="/images/founder.png"
              accent="#00f3ff"
              linkedin="https://www.linkedin.com/in/nandukumar-koribilli-062ba42a2/"
            />
          </div>
          <div className="founder-card md:mt-16">
            <FounderCard
              name="Koushik Katta"
              role="Co-Founder"
              desc="Guardian of resilient systems — designing secure, seamless availability at scale."
              image="/images/cofounder.jpeg"
              accent="#a855f7"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Founders.displayName = "Founders";
export default Founders;
