"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest(".mobile-nav-container")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden mobile-nav-container">
      <button
        onClick={toggleMenu}
        className="p-3 hover:bg-black/5 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 sm:top-20 left-0 right-0 bg-[#E8E0D4] border-t border-black/10 z-50 shadow-lg">
          <nav className="flex flex-col p-4 sm:p-6 space-y-4">
            <Link
              href="/about"
              className="text-sm hover:underline py-3 px-2 min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              [ABOUT ME]
            </Link>
            <Link
              href="/portfolio"
              className="text-sm hover:underline py-3 px-2 min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              [PORTFOLIO]
            </Link>
            <Link
              href="/feedback"
              className="text-sm hover:underline py-3 px-2 min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              [FEEDBACK]
            </Link>
            <div className="pt-4 border-t border-black/10">
              <div className="text-sm mb-3">[LET'S CONNECT]</div>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="underline text-sm py-2 px-2 min-h-[44px] flex items-center"
                >
                  LI
                </Link>
                <Link
                  href="#"
                  className="underline text-sm py-2 px-2 min-h-[44px] flex items-center"
                >
                  CO
                </Link>
                <Link
                  href="#"
                  className="underline text-sm py-2 px-2 min-h-[44px] flex items-center"
                >
                  IG
                </Link>
                <Link
                  href="#"
                  className="underline text-sm py-2 px-2 min-h-[44px] flex items-center"
                >
                  TW
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
