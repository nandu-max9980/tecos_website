"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { useTheme } from "@/components/layout/ThemeProvider";

export default function Hero() {
  const comp = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleLine1 = useRef<HTMLSpanElement>(null);
  const titleLine2 = useRef<HTMLSpanElement>(null);
  const titleLine3 = useRef<HTMLSpanElement>(null);
  const desc = useRef<HTMLParagraphElement>(null);
  const scrollIndicator = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // --- Particle Background ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }[] = [];
    const PARTICLE_COUNT = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.5 ? 190 : 270,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = theme === "dark";

      particles.forEach((p, i) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.3;
          p.vy += (dy / dist) * force * 0.3;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const lightness = isDark ? 70 : 40;
        const opacityMod = isDark ? 1 : 0.7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${lightness}%, ${p.opacity * opacityMod})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${p.hue}, 100%, ${lightness}%, ${0.08 * (1 - d / 120) * opacityMod})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [theme]);

  // --- GSAP Text Reveal ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(titleLine1.current, {
        y: 120,
        opacity: 0,
        rotateX: -40,
        duration: 1.2,
        delay: 0.3,
      })
        .from(
          titleLine2.current,
          { y: 120, opacity: 0, rotateX: -40, duration: 1.2 },
          "-=0.9"
        )
        .from(
          titleLine3.current,
          { y: 120, opacity: 0, rotateX: -40, duration: 1.2 },
          "-=0.9"
        )
        .from(
          desc.current,
          { y: 40, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .from(
          scrollIndicator.current,
          { opacity: 0, y: 20, duration: 0.8 },
          "-=0.4"
        );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-500"
      style={{ background: "var(--background)" }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Gradient Orbs */}
      <div className="gradient-orb w-[600px] h-[600px] bg-cyan-500/20 top-[-200px] left-[-200px] animate-pulse-glow" />
      <div
        className="gradient-orb w-[500px] h-[500px] bg-purple-500/20 bottom-[-150px] right-[-150px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="gradient-orb w-[300px] h-[300px] bg-pink-500/10 top-[40%] left-[60%] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(128,128,128,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ perspective: "1000px" }}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] mb-8">
          <div className="overflow-hidden">
            <span ref={titleLine1} className="block text-gradient-subtle">
              We Architect
            </span>
          </div>
          <div className="overflow-hidden">
            <span ref={titleLine2} className="block text-gradient">
              The Future
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              ref={titleLine3}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2"
              style={{ color: "var(--text-secondary)" }}
            >
              of Digital
            </span>
          </div>
        </h1>

        <p
          ref={desc}
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          TECOS is a high-end creative agency merging{" "}
          <span style={{ color: "var(--accent)" }}>3D aesthetics</span>,{" "}
          <span style={{ color: "var(--accent-purple)" }}>WebGL shaders</span>,
          and{" "}
          <span style={{ color: "var(--accent-pink)" }}>
            chaotic engineering
          </span>{" "}
          into mind-blowing digital experiences.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicator}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs font-mono uppercase tracking-[0.3em]"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 z-[2] noise-overlay pointer-events-none" />
    </section>
  );
}
