"use client";

import { memo } from "react";

const technologies = [
  "Next.js",
  "React Three Fiber",
  "GSAP",
  "WebGL",
  "Three.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "AWS",
  "Vercel",
  "Docker",
  "PostgreSQL",
  "GLSL Shaders",
  "Lenis",
  "Spline",
];

const TechMarquee = memo(() => {
  const doubled = [...technologies, ...technologies];

  return (
    <section
      className="relative py-6 overflow-hidden z-10 transition-colors duration-500"
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-8 text-sm font-mono uppercase tracking-[0.3em] transition-colors duration-300 cursor-default select-none flex items-center gap-3"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent-glow)" }} />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
});

TechMarquee.displayName = "TechMarquee";
export default TechMarquee;
