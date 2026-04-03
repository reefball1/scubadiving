import GearCards from "@/components/GearCards";

const inclusions = [
  "All e-learning materials",
  "Full day of pool training",
  "2 days of open water dives",
  "Rental equipment included",
];

const requiredGear = [
  { img: "/images/mask.jpg", label: "Scuba Mask" },
  { img: "/images/snorkel.avif", label: "Snorkel" },
  { img: "/images/fins.jpeg", label: "Fins" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20">
      {/* Banner */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pricing-header.avif')", backgroundPosition: "center 70%" }}
        />
        <div className="absolute inset-0 bg-[#0f2232]/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-3">Transparent Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Pricing & Equipment</h2>
        </div>
      </div>

      {/* Cost overview */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-extrabold text-[#0f2232] text-center mb-4">
            How much does it cost to dive?
          </h3>
          <p className="text-center text-[#4a5568] mb-6 max-w-2xl mx-auto">
            Like many things in life, it depends! But we promise full transparency upfront.
          </p>

          <div className="bg-gradient-to-br from-[#0f2232] to-[#1a6b9a] rounded-2xl p-8 md:p-10 text-white shadow-xl mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">
                  Open Water Certification
                </p>
                <p className="text-5xl font-extrabold">$900–$1,200</p>
                <p className="text-white/70 text-sm mt-1">Private instruction, all-inclusive</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <svg className="w-4 h-4 text-[#2a8fc9] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#4a5568] leading-relaxed">
            <div className="space-y-4">
              <p>
                In full transparency, diving is not an inexpensive sport, but it is comparable to
                activities like snow skiing, golfing, or even visiting a Florida Theme Park.
              </p>
              <p>
                The specific costs will depend on factors such as the size of your party and where
                we choose to dive. We&apos;ll build a package to meet your needs.
              </p>
            </div>
            <div>
              <p className="italic text-sm bg-[#f0f7ff] border border-[#1a6b9a]/15 rounded-xl p-5">
                Note that some dive shops will offer a low teaser price that is literally too good
                to be true, and doesn&apos;t include all of the costs you will actually pay to complete
                your certification. They may also offer a low price by combining a large group of
                strangers together. We will guarantee a full/comprehensive price upfront.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment */}
      <div className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pricing-header.avif')" }}
        />
        <div className="absolute inset-0 bg-[#0a1a28]/85" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-2">Required Gear</p>
            <h3 className="text-3xl font-extrabold text-white mb-2">What You&apos;ll Need</h3>
            <p className="text-white/60 text-sm">Three items to purchase — we provide everything else.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {requiredGear.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm h-48"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity duration-300"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2232]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-lg">{item.label}</p>
                  <span className="inline-block mt-1 text-xs font-semibold text-[#2a8fc9] bg-[#2a8fc9]/15 border border-[#2a8fc9]/30 rounded-full px-2 py-0.5">
                    Required
                  </span>
                </div>
              </div>
            ))}
          </div>

          <GearCards />
        </div>
      </div>
    </section>
  );
}
