"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
    title: string;
    category: string;
    image?: string;
    tags: string[];
    size?: "small" | "medium" | "large";
    link?: string;
}

const ProjectCard = ({ title, category, image, tags, size = "medium", link }: ProjectProps) => {
    const colSpan = size === "large" ? "md:col-span-2 md:row-span-2" : size === "medium" ? "md:col-span-2" : "md:col-span-1";

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "tween", duration: 0.2 }}
            className={`relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 ${colSpan} min-h-[300px] h-full cursor-pointer`}
            onClick={() => link && window.open(link, '_blank')}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            {/* Background Image with optimization */}
            <div className="absolute inset-0 bg-neutral-800 overflow-hidden">
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
            </div>

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-cyan-400 text-sm font-mono mb-2 uppercase tracking-wider">{category}</p>
                        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white text-black p-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
