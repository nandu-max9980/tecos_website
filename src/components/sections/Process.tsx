"use client";

import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    id: "01",
    title: "Concept",
    desc: "We deconstruct your vision into core architectural pillars, mapping every interaction and designing the emotional journey.",
    icon: "💡",
    accent: "#00f3ff",
  },
  {
    id: "02",
    title: "Design",
    desc: "High-fidelity 3D modeling, chaotic aesthetic systems, and motion storyboards that push creative boundaries.",
    icon: "🎨",
    accent: "#a855f7",
  },
  {
    id: "03",
    title: "Build",
    desc: "Next.js, WebGL, and GSAP implementation with pixel-perfect precision — optimized for 120 FPS performance.",
    icon: "⚡",
    accent: "#ec4899",
  },
  {
    id: "04",
    title: "Deploy",
    desc: "Global edge network deployment, CI/CD pipelines, and real-time monitoring across 300+ data centers worldwide.",
    icon: "🚀",
    accent: "#10b981",
  },
];

const stats = [
  { value: "60+", label: "Projects Delivered" },
  { value: "120", label: "FPS Performance" },
  { value: "300+", label: "Edge Locations" },
  { value: "99.9%", label: "Uptime" },
];

const Process = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate the connecting line
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 50%",
            scrub: 1,
          },
        });
      }

      // Animate steps
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Animate stats
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-32 z-10 transition-colors duration-500"
      style={{ background: "var(--background)" }}
    >
      {/* Background */}
      <div className="gradient-orb w-[500px] h-[500px] bg-cyan-500/5 top-[10%] left-[-200px]" />
      <div className="gradient-orb w-[400px] h-[400px] bg-purple-500/5 bottom-[10%] right-[-200px]" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="text-sm font-mono tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            // How We Work
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            The <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            From raw concept to global-scale deployment — our battle-tested methodology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/30 via-purple-400/30 to-pink-400/30 -translate-x-1/2 hidden md:block"
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => {
                  if (el) stepsRef.current[i] = el;
                }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold font-mono"
                    style={{ borderColor: step.accent, color: step.accent, background: "var(--background)" }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24 md:text-left"
                  }`}
                >
                  <div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
                    {/* Icon */}
                    <span className="text-4xl mb-4 block">{step.icon}</span>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 40px ${step.accent}08, 0 0 30px ${step.accent}05`,
                      }}
                    />

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 relative z-10" style={{ color: "var(--text-primary)" }}>
                      {step.title}
                    </h3>
                    <p className="text-lg leading-relaxed relative z-10" style={{ color: "var(--text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => {
                if (el) statsRef.current[i] = el;
              }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Process.displayName = "Process";
export default Process;
