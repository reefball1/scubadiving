export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-12 px-4 bg-white">
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
                Darin was born in South Florida where he fell in love with snorkeling in the ocean as a young child.
                In college he became a certified diver and while living in New Jersey became an avid wreck diver
                and completed his PADI (Professional Association of Diving Instructors) Divemaster training.
                After moving back to South Florida, he retired from a career as a corporate executive, and became
                a dive instructor to share his passion for the ocean with others.
              </p>
              <p>
                He loves opening the underwater world to new scuba divers and coaching experienced divers to
                become more knowledgeable, comfortable, and safe divers.
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
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
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
  );
}
