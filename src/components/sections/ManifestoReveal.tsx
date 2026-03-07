"use client";

import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ManifestoReveal = memo(() => {
  const containerRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const text =
    "We don't just build websites. We engineer immersive digital dimensions — where pixels pulse with energy, interfaces respond to your presence, and every scroll reveals a new layer of visual brilliance.";

  const words = text.split(" ");

  useGSAP(
    () => {
      wordsRef.current.forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0.08, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: word,
              start: "top 85%",
              end: "top 50%",
              scrub: 0.5,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-40 md:py-56 z-10 overflow-hidden transition-colors duration-500"
      style={{ background: "var(--background)" }}
    >
      {/* Accent orb */}
      <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/10 top-[30%] left-[-100px]" />

      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed tracking-tight text-center">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) wordsRef.current[i] = el;
              }}
              className="inline-block mr-[0.3em]"
              style={{ color: "var(--text-secondary)" }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-cyan-400/40 to-transparent" />
    </section>
  );
});

ManifestoReveal.displayName = "ManifestoReveal";
export default ManifestoReveal;
