"use client";

import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ContactCTA = memo(() => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        btnRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-40 md:py-56 z-10 overflow-hidden transition-colors duration-500"
      style={{ background: "var(--background)" }}
    >
      {/* Massive gradient orbs */}
      <div className="gradient-orb w-[800px] h-[800px] bg-cyan-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="gradient-orb w-[600px] h-[600px] bg-purple-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-sm font-mono tracking-[0.3em] uppercase mb-6" style={{ color: "var(--accent)" }}>
          // Ready to begin?
        </p>

        <h2
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter mb-12 leading-[0.9]"
          style={{ color: "var(--text-primary)" }}
        >
          Let&apos;s Build
          <br />
          <span className="text-gradient">Something Epic</span>
        </h2>

        <a
          ref={btnRef}
          href="mailto:koribillinandukumar@gmail.com"
          className="magnetic-btn inline-flex items-center gap-3 px-10 py-5 rounded-full border text-lg font-medium transition-all duration-500 group"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-elevated)",
            color: "var(--text-primary)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--foreground)";
            e.currentTarget.style.color = "var(--background)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--surface-elevated)";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
        >
          <span>Get in Touch</span>
          <ArrowUpRight
            size={20}
            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </section>
  );
});

ContactCTA.displayName = "ContactCTA";
export default ContactCTA;
