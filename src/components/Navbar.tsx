"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when shifting routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Decide if we should show transparent/white navbar based on scroll AND route
  const isTransparentTop = !isScrolled && (pathname === '/' || pathname === '/case-studies' || pathname === '/about' || pathname === '/contact' || pathname === '/case-studies/kbc');
  const isContactPage = pathname === '/contact';

  // Toggle body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
          backdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
        className="flex items-center justify-between w-full max-w-6xl px-6 md:px-10 py-5 rounded-full"
      >
        {/* Logo */}
        <div className="flex-1 shrink-0 relative z-50">
          <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.03] active:scale-95">
            <Image
              src={(isScrolled || isContactPage || isMobileMenuOpen) ? "/Logo_scroll.svg" : "/Logo.svg"}
              alt="SoftX Logo"
              width={140}
              height={46}
              className="h-8 md:h-10 w-auto transition-all duration-500"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const useWhiteText = isTransparentTop && !isContactPage;
            const baseTextColor = useWhiteText ? "text-white/90" : "text-zinc-600";
            const activeTextColor = useWhiteText ? "text-white" : "text-zinc-800";
            const hoverTextColor = useWhiteText ? "text-white" : "text-zinc-800";

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
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Desktop Contact Button + Mobile Menu Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4 shrink-0 relative z-50">
          <Link
            href="/contact"
            className="hidden sm:flex text-white px-6 md:px-8 py-2.5 rounded-full text-[14px] md:text-[15px] transition-all duration-300 hover:scale-[1.04] active:scale-95 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 500,
              background: isTransparentTop ? "#FF6A00" : "linear-gradient(135deg, #FF6B00, #FF5200)",
              boxShadow: isTransparentTop ? "none" : "0 6px 20px rgba(255,92,0,0.3), inset 0 1px 1px rgba(255,255,255,0.15)",
            }}
          >
            Contact us
          </Link>

          {/* Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
              isScrolled || isContactPage || isMobileMenuOpen ? "text-zinc-800 bg-white/10" : "text-white bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-0 left-0 w-screen h-screen bg-[#F6F2EF]/95 backdrop-blur-xl z-[40] flex flex-col items-center justify-center p-10 space-y-8"
            >
              <div className="flex flex-col items-center space-y-6 w-full pt-20">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className={`text-4xl font-bold tracking-tight block py-4 ${
                        pathname === link.href ? "text-[#FF6A00]" : "text-[#111111]"
                      }`}
                      style={{ fontFamily: "'Cal Sans', sans-serif" }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * navLinks.length }}
                  className="w-full pt-8"
                >
                  <Link
                    href="/contact"
                    className="w-full bg-[#FF6A00] text-white py-6 rounded-3xl text-2xl font-bold flex items-center justify-center gap-4"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    Contact us <ArrowUpRight size={28} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
