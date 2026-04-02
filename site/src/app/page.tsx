import type { Metadata } from "next";
import Link from "next/link";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export const metadata: Metadata = {
  title: "FTL Scuba Diving",
  description: "Personalized scuba dive instruction in Fort Lauderdale, FL.",
};

const tiles = [
  {
    id: "why",
    title: "Why Learn to Dive?",
    desc: "Explore the transformative experience of life beneath the surface.",
    link: "/why",
    cta: "Discover Why",
    img: "/images/turtle.avif",
  },
  {
    id: "steps",
    title: "Learning Process",
    desc: "Understand the simple steps to becoming a certified diver.",
    link: "/steps",
    cta: "Learn More",
    img: "/images/learning-steps.avif",
  },
  {
    id: "advanced",
    title: "Beyond Open Water",
    desc: "Continue your training to become a better, safer, more confident diver.",
    link: "/advanced",
    cta: "Advance Your Skills",
    img: "/images/advanced.jpeg",
  },
  {
    id: "pricing",
    title: "Pricing & Equipment",
    desc: "Transparent pricing and honest gear advice.",
    link: "/pricing",
    cta: "View Pricing",
    img: "/images/pricing-header.avif",
  },
  {
    id: "contact",
    title: "Sign Up & Contact",
    desc: "Ready to take the plunge? Get in touch and let's get started.",
    link: "/contact",
    cta: "Contact Us",
    img: "/images/contact.jpeg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cover-photo.avif')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2232]/60 via-[#0f2232]/40 to-[#0f2232]/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight animate-fade-in-up">
            Welcome to<br />FTL Scuba Diving
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-white/85 font-light animate-fade-in-up delay-200">
            Your personalized scuba diving experience starts here.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#1a6b9a] hover:bg-[#2a8fc9] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <a
              href="#discover"
              className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Explore More
            </a>
          </div>
        </div>
        {/* Scroll indicator — clickable, mouse on desktop, chevron on mobile */}
        <a
          href="#discover"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          {/* Desktop: scroll mouse */}
          <div className="hidden sm:flex w-5 h-8 border-2 border-white/40 hover:border-white/70 rounded-full justify-center pt-1.5 transition-colors duration-200">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
          {/* Mobile: chevron arrow */}
          <svg className="sm:hidden w-8 h-8 text-white/60 hover:text-white/90 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Discover section */}
      <section id="discover" className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-[#1a6b9a] uppercase mb-4">
              Fort Lauderdale, FL
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f2232] mb-6">
              Discover FTL Scuba Diving
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed max-w-2xl mx-auto">
              Experience the underwater world with personalized instruction and customized schedules.
              We offer private courses tailored to your pace and preferences.
            </p>
          </div>

          {/* Why Choose Us — glass cards on dark background */}
          <div className="relative rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/diving-on-boat.jpeg')" }}
            />
            <div className="absolute inset-0 bg-[#0f2232]/75 backdrop-blur-[2px]" />
            <div className="relative z-10 p-8 md:p-12">
              <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-2 text-center">
                Why Choose Us?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: "👤", text: "Private instruction with a customized schedule" },
                  { icon: "🚢", text: "Option to learn in your pool and on your boat*" },
                  { icon: "🤿", text: "No pressure from groups of strangers" },
                  { icon: "🎯", text: "Honest advice on the best equipment" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm rounded-2xl px-5 py-5 min-h-[72px] transition-colors duration-200"
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-white font-medium text-sm leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-white/50 text-xs italic">
                * Size &amp; conditions permitting. We also partner with local dive operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiles — glass cards over dark underwater photo */}
      <section className="relative py-14 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/wreck-diver.avif')" }}
        />
        <div className="absolute inset-0 bg-[#0a1a28]/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-3">
              Everything You Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Where would you like to start?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tiles.map((tile) => (
              <Link
                key={tile.id}
                href={tile.link}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/35 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
              >
                {/* Subtle photo hint in the card background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundImage: `url('${tile.img}')` }}
                />
                <div className="relative z-10 p-7 flex flex-col h-full min-h-[160px]">
                  <h3 className="text-lg font-bold text-white mb-2">{tile.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">{tile.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                    {tile.cta}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-[#0f2232]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6">
            What Our Students Say
          </h2>
          <TestimonialsSlider />
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/25 transition-all duration-300 backdrop-blur-sm text-sm"
            >
              Read All Testimonials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs font-bold tracking-[0.3em] text-[#1a6b9a] uppercase mb-4">
                Meet Your Instructor
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2232] mb-6">
                Darin Artman
              </h2>
              <div className="space-y-4 text-[#4a5568] leading-relaxed">
                <p>
                  Want to learn how to scuba dive in Fort Lauderdale? You came to the right place.
                  Darin was born in South Florida where he fell in love with snorkeling in the ocean
                  as a young child. In college he became a certified diver and while living in New
                  Jersey became an avid wreck diver and completed his PADI (Professional Association
                  of Diving Instructors) Divemaster training.
                </p>
                <p>
                  After moving back to South Florida, he retired from a career as a corporate
                  executive, and became a dive instructor to share his passion for the ocean with
                  others.
                </p>
                <p>
                  He loves opening the underwater world to new scuba divers and coaching experienced
                  divers to become more knowledgeable, comfortable, and safe divers.
                </p>
                <p className="font-semibold text-[#0f2232]">Let&apos;s go diving!</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@reefball1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold rounded-full transition-all duration-300 shadow hover:shadow-md text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube Channel
                </a>
                <a
                  href="https://www.instagram.com/ftlscubadiving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold rounded-full transition-all duration-300 shadow hover:shadow-md text-sm hover:opacity-90"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#1a6b9a]/20 to-[#0f2232]/20 blur-xl" />
                <img
                  src="/images/bio-photo.avif"
                  alt="Darin Artman - FTL Scuba Diving Instructor"
                  className="relative rounded-2xl shadow-2xl max-w-sm w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
