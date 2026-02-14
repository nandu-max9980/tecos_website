"use client";

import { useRef, memo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Founders = memo(() => {
    const containerRef = useRef(null);
    const nanduRef = useRef(null);
    const koushikRef = useRef(null);

    // Parallax effect disabled for scroll performance
    // useGSAP(
    //     () => {
    //         gsap.to(nanduRef.current, {
    //             y: -30,
    //             scrollTrigger: {
    //                 trigger: containerRef.current,
    //                 start: "top 80%",
    //                 end: "bottom top",
    //                 scrub: 0.5,
    //             },
    //         });
    //
    //         gsap.to(koushikRef.current, {
    //             y: -40,
    //             scrollTrigger: {
    //                 trigger: containerRef.current,
    //                 start: "top 80%",
    //                 end: "bottom top",
    //                 scrub: 0.5,
    //             },
    //         });
    //     },
    //     { scope: containerRef }
    // );

    return (
        <section id="about" ref={containerRef} className="py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden z-20">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
                        The <span className="text-gradient">Visionaries</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Architecting the bridge between human creativity and machine precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Nandu */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <div ref={nanduRef} className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden mb-6 filter grayscale hover:grayscale-0 transition-all duration-700 will-change-transform">
                            <Image
                                src="/images/founder.png"
                                alt="Nandu Kumar Koribilli"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-3xl font-bold text-white">Nandu Kumar Koribilli</h3>
                            </div>
                        </div>
                        <p className="text-cyan-400 font-mono tracking-widest text-sm mb-2">FOUNDER</p>
                        <p className="text-gray-400 max-w-sm">
                            Lead architect who weaves controlled chaos into refined, sculptural digital experiences.
                        </p>
                    </div>

                    {/* Koushik */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-32">
                        <div ref={koushikRef} className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden mb-6 filter grayscale hover:grayscale-0 transition-all duration-700 will-change-transform">
                            <Image
                                src="/images/cofounder.jpeg"
                                alt="Koushik Katta"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h3 className="text-3xl font-bold text-white">Koushik Katta</h3>
                            </div>
                        </div>
                        <p className="text-purple-400 font-mono tracking-widest text-sm mb-2">CO-FOUNDER</p>
                        <p className="text-gray-400 max-w-sm">
                            Guardian of our data — designing resilient systems and ensuring secure, seamless availability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

Founders.displayName = "Founders";
export default Founders;
