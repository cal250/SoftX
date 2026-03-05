"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to ensure correct initial state, especially if reloading middle of page
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Decide if we should show transparent/white navbar based on scroll AND route (e.g. only transparent on Home)
  // For now, let's assume transparent on top of every page, or specifically restrict to home top?
  // The request implies normal navbar before scrolling is white/transparent for the hero
  const isTransparentTop = !isScrolled && pathname === '/';

  return (
    <div
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: isScrolled
            ? "linear-gradient(145deg, #f0ece6, #F6F2EF)"
            : "transparent",
          boxShadow: isScrolled
            ? "8px 8px 20px rgba(0,0,0,0.06), -8px -8px 20px rgba(255,255,255,0.9), inset 1px 1px 2px rgba(255,255,255,0.6)"
            : "none",
          transition: "all 0.5s ease",
        }}
        className="flex items-center justify-between w-full max-w-6xl px-10 py-5 rounded-full"
      >
        {/* Logo */}
        <div className="flex-1 shrink-0">
          <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.03] active:scale-95">
            <Image
              src={isScrolled ? "/Logo_scroll.svg" : "/Logo.svg"}
              alt="SoftX Logo"
              width={140}
              height={46}
              className="h-10 w-auto transition-all duration-500"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            // Text color logic: white when transparent top, dark grey when scrolled
            const baseTextColor = isTransparentTop ? "text-white/90" : "text-zinc-600";
            const activeTextColor = isTransparentTop ? "text-white" : "text-zinc-800";
            const hoverTextColor = isTransparentTop ? "text-white" : "text-zinc-800";

            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  ...(isActive && isScrolled
                    ? {
                        background: "linear-gradient(145deg, #e8e4de, #F6F2EF)",
                        boxShadow:
                          "3px 3px 8px rgba(0,0,0,0.06), -3px -3px 8px rgba(255,255,255,0.9), inset 1px 1px 2px rgba(255,255,255,0.5)",
                      }
                    : isActive && !isScrolled
                    ? {
                        background: "rgba(255, 255, 255, 0.12)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }
                    : {}),
                  transition: "all 0.3s ease",
                }}
                className={`
                  relative px-7 py-2 text-[15px] font-medium rounded-full transition-all duration-300
                  ${isActive ? activeTextColor : `${baseTextColor} hover:${hoverTextColor}`}
                `}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    if (isScrolled) {
                      e.currentTarget.style.background = "linear-gradient(145deg, #ebe7e1, #f8f5f0)";
                      e.currentTarget.style.boxShadow = "2px 2px 6px rgba(0,0,0,0.04), -2px -2px 6px rgba(255,255,255,0.8)";
                    } else {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Contact Button */}
        <div className="flex-1 flex justify-end shrink-0">
          <Link
            href="/contact"
            className="text-white px-8 py-2.5 rounded-full text-[15px] transition-all duration-300 hover:scale-[1.04] active:scale-95"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 500,
              background: isTransparentTop ? "#FF6A00" : "linear-gradient(135deg, #FF6B00, #FF5200)",
              boxShadow: isTransparentTop ? "none" : "0 6px 20px rgba(255,92,0,0.3), inset 0 1px 1px rgba(255,255,255,0.15)",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = isTransparentTop ? "0 4px 15px rgba(255,106,0,0.4)" : "0 8px 28px rgba(255,92,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = isTransparentTop ? "none" : "0 6px 20px rgba(255,92,0,0.3), inset 0 1px 1px rgba(255,255,255,0.15)";
            }}
          >
            Contact us
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
