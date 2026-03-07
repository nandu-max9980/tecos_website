"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 border-t relative z-30 transition-colors duration-500"
      style={{ background: "var(--section-alt)", borderColor: "var(--border)", color: "var(--text-primary)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-5xl font-bold tracking-[-0.04em] mb-4 text-gradient">
              TECOS
            </h2>
            <p className="max-w-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Architecting the future of the web with{" "}
              <span style={{ color: "var(--text-secondary)" }}>3D experiences</span>,{" "}
              <span style={{ color: "var(--text-secondary)" }}>advanced animations</span>, and{" "}
              <span style={{ color: "var(--text-secondary)" }}>robust engineering</span>.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6 font-mono" style={{ color: "var(--text-muted)" }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#work">Work</FooterLink>
              <FooterLink href="#process">Process</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6 font-mono" style={{ color: "var(--text-muted)" }}>
              Connect
            </h4>
            <div className="flex gap-3">
              <SocialIcon
                href="https://github.com/Nandukumar-koribilli"
                icon={<Github size={18} />}
              />
              <SocialIcon
                href="https://x.com/nandukoribilli"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="18"
                    width="18"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                }
              />
              <SocialIcon
                href="https://www.linkedin.com/in/nandukumar-koribilli-062ba42a2/"
                icon={<Linkedin size={18} />}
              />
              <SocialIcon
                href="mailto:koribillinandukumar@gmail.com"
                icon={<Mail size={18} />}
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm" style={{ borderColor: "var(--border)" }}>
          <p className="font-mono text-xs tracking-wider" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} TECOS. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-xs text-muted-links">
            <Link
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="transition-colors duration-300 text-sm"
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
        onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-muted)",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--foreground)";
        e.currentTarget.style.color = "var(--background)";
        e.currentTarget.style.borderColor = "var(--foreground)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {icon}
    </a>
  );
}
