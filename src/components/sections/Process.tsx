"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
    { id: "01", title: "Concept", desc: "We deconstruct your vision into core architectural pillars." },
    { id: "02", title: "Design", desc: "High-fidelity 3D modeling and chaotic aesthetic systems." },
    { id: "03", title: "Build", desc: "Next.js & WebGL implementation with pixel-perfect precision." },
    { id: "04", title: "Deploy", desc: "Global edge network deployment and CI/CD pipelines." },
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null!);
    const stepsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        stepsRef.current.forEach((step) => {
            gsap.fromTo(
                step,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        end: "top 40%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section
            id="process"
            ref={containerRef}
            className="relative py-32 bg-neutral-950 z-10"
        >
            <div className="container mx-auto px-6">
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                        The <span className="text-gradient">Process</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        From vision to reality — our proven four-step methodology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div
                            key={step.id}
                            ref={(el) => {
                                if (el) stepsRef.current[i] = el;
                            }}
                            className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
                        >
                            {/* Step Number */}
                            <span className="text-8xl md:text-9xl font-bold text-white/5 font-mono absolute top-4 right-6 leading-none select-none group-hover:text-white/10 transition-colors duration-500">
                                {step.id}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="w-12 h-[2px] bg-cyan-400 mb-6 group-hover:w-20 transition-all duration-500" />
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
