import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-12 px-4 bg-[#0f2232]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-4 text-center">
          Student Stories
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6">
          What Our Students Say
        </h2>
        <TestimonialsSlider />
      </div>
    </section>
  );
}
