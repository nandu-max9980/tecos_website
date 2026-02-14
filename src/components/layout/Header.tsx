"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/50 backdrop-blur-md border-white/10" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    TECOS
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink href="#work">Work</NavLink>
                    <NavLink href="#process">Process</NavLink>
                    <NavLink href="#about">About</NavLink>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6">
                    <NavLink href="#work" onClick={() => setMobileMenuOpen(false)}>Work</NavLink>
                    <NavLink href="#process" onClick={() => setMobileMenuOpen(false)}>Process</NavLink>
                    <NavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                </div>
            )}
        </header>
    );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
        >
            {children}
        </Link>
    );
}
