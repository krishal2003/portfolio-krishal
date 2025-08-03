"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/mobile-nav";
import ConnectEmail from "./ConnectEmail";
import { useEffect, useState, useRef } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const navNameRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#E8E0D4] text-black font-mono overflow-hidden relative">
      {/* Background Image with subtle overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#E8E0D4] opacity-70"></div>
        <Image
          src="/krishal.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          style={{ opacity: 0.15 }}
        />
      </div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#E8E0D4]"
          >
            <motion.div
              initial={{
                scale: 0.8,
                x: 0,
                y: 0,
              }}
              animate={{
                scale: 1,
                x: navNameRef.current
                  ? -window.innerWidth / 2 +
                    navNameRef.current.getBoundingClientRect().left +
                    navNameRef.current.offsetWidth / 2
                  : 0,
                y: -window.innerHeight / 2 + 50, // Adjust this value to match your navbar height
              }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: 0.3,
              }}
              className="absolute"
            >
              <h1 ref={nameRef} className="text-4xl font-bold">
                KRISHAL BASNET
              </h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 min-h-screen flex flex-col"
          >
            {/* Header */}
            <motion.header
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring" }}
              className="flex flex-col md:flex-row justify-between items-start p-3 sm:p-4 md:p-6 gap-3 md:gap-4"
            >
              <Link
                href="/"
                ref={navNameRef}
                className="text-base sm:text-lg md:text-xl font-bold hover:underline text-gray-900"
              >
                KRISHAL BASNET
              </Link>
              <div className="hidden md:flex gap-6 lg:gap-8 text-sm">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/about" className="hover:underline text-gray-900">
                    [ABOUT ME]
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/portfolio"
                    className="hover:underline text-gray-900"
                  >
                    [PORTFOLIO]
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="/feedback"
                    className="hover:underline text-gray-900"
                  >
                    [FEEDBACK]
                  </Link>
                </motion.div>
              </div>
              <MobileNav />
              <ConnectEmail />
            </motion.header>

            {/* Rest of your content */}
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4 md:px-16 py-4 md:py-0"
            >
              {/* Large Heading */}
              <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tighter mb-6 sm:mb-8 text-center text-gray-900"
              >
                SOFTWARE DEVELOPER
              </motion.h1>

              {/* Content Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full max-w-6xl gap-8 sm:gap-12 md:gap-16 mb-20 md:mb-16"
              >
                {/* Left Services */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm md:text-lg space-y-2 md:space-y-4 text-center md:text-left"
                >
                  <div className="hover:text-gray-700 transition-colors text-gray-900">
                    PROJECT MANAGEMENT
                  </div>
                  <div className="hover:text-gray-700 transition-colors text-gray-900">
                    REACT & NEXT JS
                  </div>
                  <div className="hover:text-gray-700 transition-colors text-gray-900">
                    FLUTTER & .NET
                  </div>
                  <div className="hover:text-gray-700 transition-colors text-gray-900">
                    DESIGN & DEPLOY
                  </div>
                </motion.div>

                {/* Center - Empty space */}
                <div className="hidden md:block"></div>

                {/* Right Latest Work */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center md:text-right"
                >
                  <div className="text-sm md:text-lg mb-2 md:mb-4 text-gray-900">
                    LATEST WORK
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter text-gray-900">
                    GASTRONOMY
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Description */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center max-w-3xl mt-8 sm:mt-12 md:mt-16 px-4 mb-20 md:mb-0"
              >
                <p className="text-sm md:text-lg leading-relaxed bg-[#E8E0D4] bg-opacity-90 p-4 rounded-lg text-gray-900">
                  I CREATE SCALABLE SOFTWARE AND BEAUTIFULLY DESIGNED
                  APPLICATIONS FOR BUSINESSES OF ALL SIZES. I FOCUS ON CLEAN
                  CODE, USER-CENTERED DESIGN, AND SEAMLESS DEPLOYMENT TO DELIVER
                  HIGH-PERFORMANCE SOLUTIONS THAT DRIVE IMPACT.
                </p>
              </motion.div>
            </motion.main>

            {/* Footer Contact Info */}
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="relative z-10 p-3 sm:p-4 md:p-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-xs md:text-sm mb-2 md:mb-0">
                  <Link
                    href="mailto:bkrishal22@tbc.edu.np"
                    className="hover:underline text-gray-900"
                  >
                    bkrishal22@tbc.edu.np
                  </Link>
                </div>
                <div className="text-xs md:text-sm">
                  <a
                    href="tel:+9779840030835"
                    className="hover:underline text-gray-900"
                  >
                    +977 9840030835
                  </a>
                </div>
              </div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
