"use client";

import { useTheme } from "@/components/layout/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative w-10 h-10 rounded-full border border-white/10 dark:border-white/10 flex items-center justify-center overflow-hidden group transition-all duration-300 hover:border-cyan-400/50 bg-white/5"
    >
      {/* Sun icon */}
      <Sun
        size={16}
        className={`absolute transition-all duration-500 ease-out ${
          theme === "light"
            ? "opacity-100 rotate-0 scale-100 text-amber-500"
            : "opacity-0 rotate-90 scale-50 text-amber-500"
        }`}
      />
      {/* Moon icon */}
      <Moon
        size={16}
        className={`absolute transition-all duration-500 ease-out ${
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100 text-cyan-400"
            : "opacity-0 -rotate-90 scale-50 text-cyan-400"
        }`}
      />

      {/* Glow ring on hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: theme === "dark"
            ? "inset 0 0 12px rgba(0,243,255,0.15)"
            : "inset 0 0 12px rgba(245,158,11,0.2)",
        }}
      />
    </button>
  );
}
