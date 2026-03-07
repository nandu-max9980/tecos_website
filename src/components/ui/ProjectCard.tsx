"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useCallback } from "react";

interface ProjectProps {
  title: string;
  category: string;
  image?: string;
  tags: string[];
  size?: "small" | "medium" | "large";
  link?: string;
}

const ProjectCard = ({
  title,
  category,
  image,
  tags,
  size = "medium",
  link,
}: ProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--accent-glow), transparent 60%)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    glow.style.background = "transparent";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => link && window.open(link, "_blank")}
      className="relative group overflow-hidden rounded-2xl border min-h-[300px] h-full cursor-pointer transition-transform duration-200 ease-out will-change-transform"
      style={{ transformStyle: "preserve-3d", background: "var(--card-bg)", borderColor: "var(--card-border)" }}
    >
      {/* Mouse glow */}
      <div ref={glowRef} className="absolute inset-0 z-20 pointer-events-none transition-all duration-200" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)", opacity: 0.9 }} />

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden" style={{ background: "var(--surface)" }}>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 z-30 rounded-2xl border border-transparent group-hover:border-cyan-500/20 transition-colors duration-500 pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-mono mb-2 uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>
              {category}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-xs border transition-all duration-300"
                  style={{
                    color: "var(--text-muted)",
                    borderColor: "var(--border)",
                    background: "var(--glass-bg)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {link && (
            <div
              className="backdrop-blur-sm p-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border shrink-0"
              style={{
                color: "var(--text-primary)",
                borderColor: "var(--border)",
                background: "var(--glass-bg)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--background)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--glass-bg)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <ArrowUpRight size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
