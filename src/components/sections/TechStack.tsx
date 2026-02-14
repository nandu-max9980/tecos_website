"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
    "Next.js 14", "React Three Fiber", "GSAP", "Tailwind CSS",
    "Framer Motion", "TypeScript", "Node.js", "WebGL",
    "PostgreSQL", "AWS", "Vercel", "Docker"
];

export default function TechStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-mono text-cyan-400 tracking-widest mb-12 uppercase">
                    Powered By
                </p>

                <div ref={ref} className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "backOut" }}
                            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 font-medium hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
