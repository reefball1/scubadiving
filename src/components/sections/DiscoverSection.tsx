const features = [
  {
    text: "Private instruction with a customized schedule",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    text: "Option to learn in your pool and on your boat*",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12M12 3L7 10h10L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16l-2 3H6l-2-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20.5c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      </svg>
    ),
  },
  {
    text: "No pressure from groups of strangers",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "Honest advice on the best equipment",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function DiscoverSection() {
  return (
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

        <div className="relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/diving-on-boat.jpeg')" }}
          />
          <div className="absolute inset-0 bg-[#0f2232]/80 backdrop-blur-[2px]" />
          <div className="relative z-10 p-8 md:p-12">
            <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-2 text-center">
              Why Choose Us?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {features.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 bg-[#0a1a28]/60 hover:bg-[#0a1a28]/75 border border-white/15 backdrop-blur-sm rounded-2xl px-5 py-5 transition-colors duration-200"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1a6b9a]/30 border border-[#1a6b9a]/40 flex items-center justify-center text-[#2a8fc9]">
                    {item.icon}
                  </span>
                  <span className="text-white font-medium text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-white/45 text-xs italic">
              * Size &amp; conditions permitting. We also partner with local dive operators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
