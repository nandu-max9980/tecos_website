"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';
import gsap from "gsap";

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="w-full h-screen bg-black" />,
});

export default function Hero() {
    const comp = useRef(null);
    const titlePart1 = useRef(null);
    const titlePart2 = useRef(null);
    const desc = useRef(null);

    // Hide watermark using CSS injection (performance optimized)
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            a[href^="https://spline.design"] { 
                display: none !important; 
            }
        `;
        document.head.appendChild(style);
        return () => style.remove();
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(titlePart1.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.5,
            })
                .from(titlePart2.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                }, "-=0.8")
                .from(desc.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.8");
        }, comp);

        return () => ctx.revert();
    }, []);

    const onSplineMouseDown = (e: any) => {
        // Replace with the actual name of your button in Spline if different
        if (e.target.name === 'Get in touch' || e.target.name === 'Button' || e.target.name === 'Group') {
            window.open('https://www.linkedin.com/in/nandukumar-koribilli-062ba42a2/', '_blank');
        }
    };

    return (
        <section ref={comp} className="relative h-screen w-full flex items-start justify-center pt-32 md:pt-40 overflow-hidden">
            {/* Background Spline Scene - optimized for performance */}
            <div
                className="absolute inset-0 z-0 will-change-transform overflow-hidden"
                style={{ transform: "scale(1.255) translateY(-6%) translateX(-2%)", transformOrigin: "center" }}
            >
                <Spline
                    scene="https://prod.spline.design/WtVbd7y5OXJvwloF/scene.splinecode"
                    className="w-full h-full"
                    onMouseDown={onSplineMouseDown}
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none px-6 pt-12 pb-4 md:px-16 md:pt-24 md:pb-8">
                <div className="flex w-full justify-between items-start">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mix-blend-difference text-left max-w-xl">
                        <div className="overflow-hidden">
                            <span ref={titlePart1} className="block text-gradient">We Architect</span>
                        </div>
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mix-blend-difference text-right max-w-xl">
                        <div className="overflow-hidden">
                            <span ref={titlePart2} className="block text-white">The Future</span>
                        </div>
                    </h1>
                </div>

                <div className="w-full flex justify-center">
                    <p ref={desc} className="text-xl md:text-2xl text-gray-300 max-w-2xl text-center font-light mix-blend-plus-lighter">
                        TECOS is a high-end creative agency merging 3D aesthetics with robust chaotic engineering
                    </p>
                </div>
            </div>
        </section>
    );
}
