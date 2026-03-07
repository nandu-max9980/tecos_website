import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ThemeProvider from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TECOS | Architecting the Future of Digital Experiences",
  description:
    "TECOS is a high-end creative agency merging 3D aesthetics, WebGL shaders, and performant engineering to build mind-blowing digital experiences.",
  keywords: ["TECOS", "creative agency", "3D web", "WebGL", "Next.js", "GSAP", "Three.js"],
  openGraph: {
    title: "TECOS | Architecting the Future",
    description: "High-end creative agency specializing in 3D web experiences and next-gen digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll />
          <CustomCursor />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
