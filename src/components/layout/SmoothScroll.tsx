"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with responsive settings
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use requestAnimationFrame loop (preferred over gsap.ticker)
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keep gsap ticker default but avoid interfering with RAF
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
