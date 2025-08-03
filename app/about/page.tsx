import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import type { Metadata } from "next";
import ConnectEmail from "../ConnectEmail";

export const metadata: Metadata = {
  title: "About Me - Krishal | Software Developer",
  description:
    "Learn about Krishal, a passionate software developer specializing in full-stack web development with expertise in React, Node.js, Python, and cloud platforms.",
  openGraph: {
    title: "About Me - Krishal | Software Developer",
    description:
      "Learn about Krishal, a passionate software developer specializing in full-stack web development with expertise in React, Node.js, Python, and cloud platforms.",
    url: "https://krishal.dev/about",
  },
  twitter: {
    title: "About Me - Krishal | Software Developer",
    description:
      "Learn about Krishal, a passionate software developer specializing in full-stack web development with expertise in React, Node.js, Python, and cloud platforms.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E8E0D4] text-black font-mono overflow-hidden md:overflow-hidden">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start p-3 sm:p-4 md:p-6 gap-3 md:gap-4">
        <Link
          href="/"
          className="text-base sm:text-lg md:text-xl font-bold hover:underline"
        >
          KRISHAL BASNET
        </Link>
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm">
          <Link href="/about" className="hover:underline">
            [ABOUT ME]
          </Link>
          <Link href="/portfolio" className="hover:underline">
            [PORTFOLIO]
          </Link>
          <Link href="/feedback" className="hover:underline">
            [FEEDBACK]
          </Link>
        </div>
        <MobileNav />
        <ConnectEmail />
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] md:h-[calc(100vh-200px)] px-3 sm:px-4 md:px-16 py-4 md:py-0">
        {/* Large Heading */}
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-[8rem] font-black leading-none tracking-tighter mb-6 sm:mb-8 md:mb-16 text-center">
          ABOUT ME
        </div>

        {/* Content */}
        <div className="max-w-4xl text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 mb-20 md:mb-0">
          <p className="text-xs sm:text-sm md:text-lg leading-relaxed">
            I'M KRISHAL, A PASSIONATE SOFTWARE DEVELOPER SPECIALIZING IN
            <br className="hidden md:block" />
            FULL-STACK WEB DEVELOPMENT. I CREATE ROBUST, SCALABLE
            <br className="hidden md:block" />
            APPLICATIONS USING MODERN TECHNOLOGIES LIKE REACT, NODE.JS,
            <br className="hidden md:block" />
            PYTHON, AND CLOUD PLATFORMS. I BUILD DIGITAL SOLUTIONS
            <br className="hidden md:block" />
            ACROSS INDUSTRIES.
          </p>

          <p className="text-xs sm:text-sm md:text-lg leading-relaxed">
            I COLLABORATE WITH STARTUPS AND ENTERPRISES TO BRING
            <br className="hidden md:block" />
            INNOVATIVE IDEAS TO LIFE. WORKING WITH CROSS-FUNCTIONAL
            <br className="hidden md:block" />
            TEAMS AND STAKEHOLDERS, I DELIVER HIGH-QUALITY SOFTWARE
            <br className="hidden md:block" />
            SOLUTIONS THAT DRIVE BUSINESS GROWTH.
          </p>
        </div>
      </div>

      {/* Bottom Info - Fixed positioning */}
      <div className="fixed md:absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 text-xs md:text-sm bg-[#E8E0D4] md:bg-transparent px-2 py-1 md:p-0 rounded md:rounded-none">
        <br />
        <Link
          href="mailto:bkrishal22@tbc.edu.np "
          className="text-inherit no-underline hover:underline"
        >
          bkrishal22@tbc.edu.np{" "}
        </Link>
      </div>

      <div className="fixed md:absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 text-xs md:text-sm bg-[#E8E0D4] md:bg-transparent px-2 py-1 md:p-0 rounded md:rounded-none">
        <a
          href="tel:+9779840030835"
          className="text-inherit no-underline hover:underline"
        >
          +977 9840030835
        </a>
      </div>
    </div>
  );
}
