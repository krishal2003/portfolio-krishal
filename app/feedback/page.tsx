"use client";

import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ConnectEmail from "../ConnectEmail";

export default function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Approximate button sizes (should match your actual CSS)
  const btnHeight = 40;
  const btnWidth = 80;

  function moveNoButton() {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const maxTop = containerRect.height - btnHeight;
    const maxLeft = containerRect.width - btnWidth;

    const top = Math.floor(Math.random() * (maxTop > 0 ? maxTop : 0));
    const left = Math.floor(Math.random() * (maxLeft > 0 ? maxLeft : 0));

    setNoBtnPos({ top, left });
  }

  // Initialize NO button to center on mount (and whenever container size stabilizes)
  useEffect(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const initialTop = Math.max(
      0,
      Math.floor((containerRect.height - btnHeight) / 2)
    );
    const initialLeft = Math.max(
      0,
      Math.floor((containerRect.width - btnWidth) / 2)
    );
    setNoBtnPos({ top: initialTop, left: initialLeft });
  }, [containerRef.current]);

  return (
    <div className="min-h-screen bg-[#E8E0D4] text-black font-mono overflow-hidden">
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
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-[8rem] font-black leading-none tracking-tighter mb-6 mt-14 sm:mb-8 md:mb-16">
          FEEDBACK
        </div>
        <p className="text-2xl mb-8">Did you like my portfolio?</p>

        <div
          ref={containerRef}
          className="relative w-full max-w-md h-40 mx-auto"
        >
          {/* YES button (normal flow, centered) */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowThankYou(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded font-bold"
            >
              YES
            </button>
          </div>

          {/* NO button absolutely positioned inside container */}
          <button
            style={{
              position: "absolute",
              top: noBtnPos.top,
              left: noBtnPos.left,
              transition: "top 0.1s ease, left 0.1s ease",
              zIndex: 10,
            }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-bold cursor-pointer"
          >
            NO
          </button>
        </div>

        {showThankYou && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded shadow-lg max-w-sm text-center">
              <h3 className="text-2xl font-bold mb-4">Thank you so much!</h3>
              <button
                className="mt-4 px-6 py-2 bg-[#b3564f] text-white rounded hover:bg-[#9c4640]"
                onClick={() => setShowThankYou(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
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
