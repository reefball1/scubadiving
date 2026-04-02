import type { Metadata } from "next";
import Link from "next/link";
import GearCards from "@/components/GearCards";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Pricing & Equipment",
  description:
    "Explore the costs of scuba diving certifications and packages in Fort Lauderdale.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Pricing"
        title="Pricing & Equipment"
        image="/images/pricing-header.avif"
        position="center 70%"
      />

      {/* Cost overview */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0f2232] text-center mb-4">
            How much does it cost to dive?
          </h2>
          <p className="text-center text-[#4a5568] mb-6 max-w-2xl mx-auto">
            Like many things in life, it depends — but we promise full transparency upfront.
          </p>

          {/* Pricing card — full width */}
          <div className="bg-gradient-to-br from-[#0f2232] to-[#1a6b9a] rounded-2xl p-8 md:p-10 text-white shadow-xl mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">
                  Open Water Certification
                </p>
                <p className="text-5xl font-extrabold">$900–$1,200</p>
                <p className="text-white/70 text-sm mt-1">Private instruction, all-inclusive</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:text-right">
                {[
                  "All e-learning materials",
                  "Full day of pool training",
                  "2 days of open water dives",
                  "Rental equipment included",
                ].map((item) => (
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

          {/* Copy — two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#4a5568] leading-relaxed">
            <div className="space-y-4">
              <p>
                In full transparency, diving is not an inexpensive sport — but it&apos;s
                comparable to activities like snow skiing, golfing, or even a Florida Theme Park
                visit.
              </p>
              <p>
                The specific costs will depend on factors such as the size of your party and
                where we choose to dive. We&apos;ll build a package to meet your needs.
              </p>
            </div>
            <div>
              <p className="italic text-sm bg-[#f0f7ff] border border-[#1a6b9a]/15 rounded-xl p-5">
                Note: some dive shops advertise a low teaser price that doesn&apos;t include
                everything you&apos;ll actually pay to complete your certification — or they
                keep costs down by mixing you into a large group of strangers. We guarantee a
                full, comprehensive price upfront with fully private instruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pricing-header.avif')" }}
        />
        <div className="absolute inset-0 bg-[#0a1a28]/85" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-2">
              Required Gear
            </p>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              What You&apos;ll Need
            </h2>
            <p className="text-white/60 text-sm">
              Three items to purchase — we provide everything else.
            </p>
          </div>

          {/* Required gear — glass cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { img: "/images/mask.jpg", label: "Scuba Mask", note: "Required" },
              { img: "/images/snorkel.avif", label: "Snorkel", note: "Required" },
              { img: "/images/fins.jpeg", label: "Fins", note: "Required" },
            ].map((item) => (
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
                    {item.note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <GearCards />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/open-water.jpeg')" }}
        />
        <div className="absolute inset-0 bg-[#0f2232]/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to get started? Let&apos;s build a package for you.
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
