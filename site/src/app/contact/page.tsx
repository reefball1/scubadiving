import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FTL Scuba Diving for your scuba diving needs in Fort Lauderdale.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start Your Journey"
        title="Contact"
        image="/images/contact.jpeg"
        position="center 50%"
      />

      {/* Ready to plunge */}
      <div className="py-10 px-4 text-center bg-white">
        <h2 className="text-3xl font-extrabold text-[#0f2232]">Ready to take the plunge?</h2>
      </div>

      {/* Form + image */}
      <section className="pb-20 px-4 bg-white">
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
      </section>

      {/* Alternate contact */}
      <section className="py-12 px-4 bg-[#f0f7ff] border-t border-[#1a6b9a]/10">
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
      </section>
    </>
  );
}
