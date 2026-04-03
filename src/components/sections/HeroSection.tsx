export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          <a
            href="#contact"
            className="px-8 py-4 bg-[#1a6b9a] hover:bg-[#2a8fc9] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <a
            href="#discover"
            className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Explore More
          </a>
        </div>
      </div>
      <a
        href="#discover"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="hidden sm:flex w-5 h-8 border-2 border-white/40 hover:border-white/70 rounded-full justify-center pt-1.5 transition-colors duration-200">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
        <svg className="sm:hidden w-8 h-8 text-white/60 hover:text-white/90 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
