"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (throttleRef.current) return;

      throttleRef.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
        throttleRef.current = null;
      }, 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleRef.current) clearTimeout(throttleRef.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent"
      )}
      style={{
        background: isScrolled ? "var(--header-bg)" : "transparent",
        borderColor: isScrolled ? "var(--header-border)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-[-0.05em] hover:opacity-80 transition-opacity relative group"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="relative z-10">TECOS</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#about">About</NavLink>
          <ThemeToggle />
          <a
            href="mailto:koribillinandukumar@gmail.com"
            className="px-5 py-2 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface-elevated)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--foreground)";
              e.currentTarget.style.color = "var(--background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface-elevated)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile: Theme + Menu toggles */}
        <div className="md:hidden flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            className="w-10 h-10 flex items-center justify-center"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav — Full screen overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 backdrop-blur-2xl z-40 transition-all duration-500 flex flex-col items-center justify-center gap-8",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--mobile-menu-bg)" }}
      >
        <MobileNavLink href="#work" onClick={() => setMobileMenuOpen(false)}>
          Work
        </MobileNavLink>
        <MobileNavLink href="#process" onClick={() => setMobileMenuOpen(false)}>
          Process
        </MobileNavLink>
        <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
          About
        </MobileNavLink>
        <a
          href="mailto:koribillinandukumar@gmail.com"
          className="mt-4 px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300"
          style={{
            border: "1px solid var(--accent-glow)",
            color: "var(--accent)",
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-sm uppercase tracking-[0.15em] font-medium group transition-colors"
      style={{ color: "var(--text-muted)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
      }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300" style={{ background: "var(--accent)" }} />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-4xl font-bold tracking-tight transition-all duration-500 hover:text-gradient"
      style={{ color: "var(--text-muted)" }}
    >
      {children}
    </Link>
  );
}
