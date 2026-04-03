import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      {/* Banner */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact.jpeg')", backgroundPosition: "center 50%" }}
        />
        <div className="absolute inset-0 bg-[#0f2232]/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-3">Start Your Journey</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Contact</h2>
        </div>
      </div>

      <div className="py-10 px-4 text-center bg-white">
        <h3 className="text-3xl font-extrabold text-[#0f2232]">Ready to take the plunge?</h3>
      </div>

      <div className="pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <div className="hidden lg:block">
            <img
              src="/images/plunge.avif"
              alt="Scuba diver"
              className="rounded-2xl shadow-2xl w-full object-cover max-h-[700px]"
            />
          </div>
        </div>
      </div>

      <div className="py-12 px-4 bg-[#f0f7ff] border-t border-[#1a6b9a]/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-[#4a5568]">
            Alternatively, send me an e-mail at{" "}
            <a
              href="mailto:ftlscuba@gmail.com"
              className="text-[#1a6b9a] hover:text-[#0f2232] font-semibold transition-colors duration-200"
            >
              ftlscuba@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
