import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-white py-20 border-t border-white/10 relative z-30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-4xl font-bold tracking-tighter mb-4">TECOS</h2>
                        <p className="text-gray-400 max-w-sm">
                            Architecting the future of the web with 3D experiences, advanced animations, and robust engineering.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest font-semibold mb-6 text-gray-500">Sitemap</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="#work" className="hover:text-cyan-400 transition-colors">Work</Link></li>
                            <li><Link href="#process" className="hover:text-cyan-400 transition-colors">Process</Link></li>
                            <li><Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                            <li><Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest font-semibold mb-6 text-gray-500">Connect</h4>
                        <div className="flex gap-4">
                            <SocialIcon href="https://github.com/Nandukumar-koribilli" icon={<Github size={20} />} />
                            <SocialIcon href="https://x.com/nandukoribilli" icon={
                                <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            } />
                            <SocialIcon href="https://www.linkedin.com/in/nandukumar-koribilli-062ba42a2/" icon={<Linkedin size={20} />} />
                            <SocialIcon href="mailto:koribillinandukumar@gmail.com" icon={<Mail size={20} />} />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} TECOS Agency. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
        >
            {icon}
        </a>
    );
}
