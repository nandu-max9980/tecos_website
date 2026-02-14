"use client";

import { useRef } from "react";
import ProjectCard from "../ui/ProjectCard"; // Correct relative import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Portfolio() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <section id="work" ref={containerRef} className="py-24 relative z-10 bg-black">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                        Selected <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl">
                        A showcase of our technical prowess and creative direction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Project 1: Smart Kisan - Large Feature */}
                    <div className="project-card md:col-span-2 md:row-span-2">
                        <ProjectCard
                            title="Smart Kisan"
                            category="AgriTech / IoT"
                            tags={["IoT Integration", "Real-time Data", "Next.js"]}
                            image="https://img.freepik.com/premium-photo/kisan-divas-farmer-s-day-india-generative-ai_756405-10291.jpg"
                            size="large"
                        />
                    </div>

                    {/* Project 2: Marvel Store (Expanded to fill vertical gap) */}
                    <div className="project-card md:col-span-1 md:row-span-2">
                        <ProjectCard
                            title="Marvel Store"
                            category="E-Commerce"
                            tags={["3D Assets", "Shopify API", "React"]}
                            image="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop"
                            size="medium"
                            link="https://rawcdn.githack.com/Nandukumar-koribilli/marvel_store/2b1d8b4c525708f8ae08d12e13b42cafe1771b9b/index.html"
                        />
                    </div>



                    {/* Project 4: Plants Shop (Full Row) */}
                    <div className="project-card md:col-span-2 lg:col-span-3 md:row-span-1">
                        <ProjectCard
                            title="Plants Shop"
                            category="E-Commerce"
                            tags={["Green Design", "Animation", "Cart Logic"]}
                            image="https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=2105&auto=format&fit=crop"
                            size="small"
                            link="https://rawcdn.githack.com/Nandukumar-koribilli/Plants_Scrolling_effect/0b672bf901c23e1bdd40dc97331dad17b98cbf63/index.html"
                        />
                    </div>

                    {/* Project 5: TECOS Internal */}
                    <div className="project-card md:col-span-2 md:row-span-1">
                        <ProjectCard
                            title="TECOS R&D"
                            category="Experimental"
                            tags={["WebGL", "Shader Art", "Performance"]}
                            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
                            size="medium"
                        />
                    </div>

                    {/* Project 4: MediTrack (Moved beside TECOS R&D) */}
                    <div className="project-card md:col-span-1 md:row-span-1">
                        <ProjectCard
                            title="MediTrack"
                            category="HealthTech"
                            tags={["AI Prediction", "Secure Data", "Mobile First"]}
                            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                            size="small"
                            link="https://medical-adherence.vercel.app"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
