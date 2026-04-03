const tiles = [
  {
    id: "why",
    title: "Why Learn to Dive?",
    desc: "Explore the transformative experience of life beneath the surface.",
    link: "#why",
    cta: "Discover Why",
    img: "/images/turtle.avif",
  },
  {
    id: "steps",
    title: "Learning Process",
    desc: "Understand the simple steps to becoming a certified diver.",
    link: "#steps",
    cta: "Learn More",
    img: "/images/learning-steps.avif",
  },
  {
    id: "advanced",
    title: "Beyond Open Water",
    desc: "Continue your training to become a better, safer, more confident diver.",
    link: "#advanced",
    cta: "Advance Your Skills",
    img: "/images/advanced.jpeg",
  },
  {
    id: "pricing",
    title: "Pricing & Equipment",
    desc: "Transparent pricing and honest gear advice.",
    link: "#pricing",
    cta: "View Pricing",
    img: "/images/pricing-header.avif",
  },
  {
    id: "contact",
    title: "Sign Up & Contact",
    desc: "Ready to take the plunge? Get in touch and let's get started.",
    link: "#contact",
    cta: "Contact Us",
    img: "/images/contact.jpeg",
  },
];

export default function TileNavSection() {
  return (
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
            <a
              key={tile.id}
              href={tile.link}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/35 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
