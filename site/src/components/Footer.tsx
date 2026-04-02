import Link from "next/link";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/why", label: "WHY DIVE?" },
  { href: "/steps", label: "LEARNING STEPS" },
  { href: "/pricing", label: "PRICING & EQUIPMENT" },
  { href: "/advanced", label: "ADVANCED" },
  { href: "/testimonials", label: "TESTIMONIALS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2232] text-white">
      <div className="h-px bg-white/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/new-logo.png"
              alt="FTL Scuba Diving"
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="h-px w-full bg-white/10" />

          <p className="text-sm text-white/70">
            Email:{" "}
            <a
              href="mailto:ftlscuba@gmail.com"
              className="text-white hover:text-[#2a8fc9] transition-colors duration-200"
            >
              ftlscuba@gmail.com
            </a>
          </p>

          <div className="flex flex-col items-center gap-1 text-xs text-white/50">
            <p>© 2026 FTL Scuba Diving, All Rights Reserved</p>
            <p>
              Website designed by{" "}
              <a
                href="https://www.zacharyartman.com"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Zachary Artman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
