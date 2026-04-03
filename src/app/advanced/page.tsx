import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Advanced Diving",
  description: "Continue your scuba diving education with advanced courses in Fort Lauderdale.",
};

const specialties = [
  {
    title: "Enriched Air Nitrox",
    desc: "Extend your dive times by breathing enriched air Nitrox (rather than the 21% oxygen in the regular air we breathe), which provides longer No Decompression Limits and shorter surface intervals.",
    img: "/images/nitrox.jpeg",
    alt: "Nitrox scuba diver",
  },
  {
    title: "Rescue",
    desc: "Become a more confident diver who is able to help your buddy and other divers solve problems they may experience. Many people say it's their favorite dive training course.",
    img: "/images/rescue.avif",
    alt: "Rescue Diver",
  },
  {
    title: "Other Specialties",
    desc: "Dive deeper (pun intended) into different areas of interest—like Wreck diving, Underwater Navigation, Dry Suit, Peak Performance Buoyancy.",
    img: "/images/wreck-diver.avif",
    alt: "Inside of wreck",
  },
];

export default function AdvancedPage() {
  return (
    <>
      <PageHero
        eyebrow="Take It Further"
        title="Advanced Diving"
        image="/images/advanced.jpeg"
        position="center 35%"
      />

      {/* Why continue */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2232] text-center mb-3">
            Why continue training beyond Open Water?
          </h2>
          <p className="text-center text-[#4a5568] mb-10 max-w-2xl mx-auto">
            Open Water certification is like first learning to drive a car — you know the basics,
            but there&apos;s still a lot to learn before you&apos;re truly comfortable in any situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-[#1a6b9a]/10">
              <div className="w-10 h-10 rounded-full bg-[#1a6b9a]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#1a6b9a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0f2232] text-lg mb-3">Advanced Open Water</h3>
              <p className="text-[#4a5568] text-sm leading-relaxed mb-3">
                With diving, experience and coaching by a professional makes you a better, safer,
                and more comfortable diver. The natural progression is the Advanced Open Water course.
              </p>
              <ul className="space-y-2 text-sm text-[#4a5568]">
                <li className="flex gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1a6b9a]" />
                  2 dives focused on Deep diving and Underwater Navigation
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1a6b9a]" />
                  3 dives in areas of your choice, such as Night, Buoyancy, Fish Identification, Wreck, or Drift
                </li>
              </ul>
            </div>

            <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-[#1a6b9a]/10">
              <div className="w-10 h-10 rounded-full bg-[#1a6b9a]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#1a6b9a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0f2232] text-lg mb-3">Why it matters</h3>
              <p className="text-[#4a5568] text-sm leading-relaxed">
                Every dive after your Open Water cert builds confidence and skill. Formal
                training accelerates that. You&apos;ll learn techniques that take recreational
                divers years to figure out on their own, and you&apos;ll dive with far greater
                self-assurance from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty courses */}
      <section className="py-12 px-4 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0f2232] text-center mb-8">
            Specialty Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#0f2232] mb-3">{s.title}</h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rescue.avif')" }}
        />
        <div className="absolute inset-0 bg-[#0f2232]/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to advance your diving skills?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
