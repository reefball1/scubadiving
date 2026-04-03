import type { Metadata } from "next";
import Link from "next/link";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what students say about learning to scuba dive with FTL Scuba Diving.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Stories"
        title="Testimonials"
        image="/images/diving-on-boat.jpeg"
        position="center 50%"
      />

      {/* Slider */}
      <section className="py-12 px-4 bg-[#0f2232]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6">
            What Our Students Say
          </h2>
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pool.avif')" }}
        />
        <div className="absolute inset-0 bg-[#0f2232]/80" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to write your own story?
          </h3>
          <p className="text-white/70 mb-8 leading-relaxed">
            Join our students and discover the underwater world with private, personalized
            instruction in Fort Lauderdale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Get Started Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
