"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#why", label: "WHY DIVE?" },
  { href: "#steps", label: "LEARNING STEPS" },
  { href: "#advanced", label: "ADVANCED" },
  { href: "#pricing", label: "PRICING & EQUIPMENT" },
  { href: "#testimonials", label: "TESTIMONIALS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = !scrolled && !menuOpen;
  const bg = scrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/images/new-logo.png"
              alt="FTL Scuba Diving"
              className={`h-32 w-auto transition-all duration-300 ${
                transparent ? "brightness-0 invert" : ""
              }`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold tracking-widest rounded-md transition-all duration-200
                  ${transparent ? "text-white hover:bg-white/20" : "text-[#0f2232] hover:bg-[#0f2232]/10"}
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md transition-colors duration-200 hover:bg-black/10"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                transparent ? "bg-white" : "bg-[#0f2232]"
              } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                transparent ? "bg-white" : "bg-[#0f2232]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                transparent ? "bg-white" : "bg-[#0f2232]"
              } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 text-sm font-semibold tracking-widest rounded-md transition-colors duration-200 text-[#0f2232] hover:bg-[#0f2232]/10"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
