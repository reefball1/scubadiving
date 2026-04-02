import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Why Dive?",
  description: "Discover the transformative experience of scuba diving in Fort Lauderdale.",
};

const reasons = [
  {
    num: "1",
    title: "There is so much to explore.",
    body: "Earning a scuba certification does more than just allow you to breathe underwater (although that's really, really cool.) It opens the door for you to go to places few people have gone before. From vast oceans to crystal clear lakes, there is a huge world out there just ready for you to join it.",
  },
  {
    num: "2",
    title: "Marine life is just better up close.",
    body: "There are millions of species out there. Sure, you can go to an aquarium and see some fish. But why not join them in their natural environment, up close and in person? Nothing compares to seeing a massive sea turtle or moray eel in their natural habitat.",
  },
  {
    num: "3",
    title: "Freedom and tranquility.",
    body: "It's hard to explain just how freeing it feels to escape gravity for the first time. There is something so peaceful about having all of the weight in your life lifted away as you float through the quiet, serene seascapes.",
  },
  {
    num: "4",
    title: "It's an amazing social activity.",
    body: "Diving is the perfect activity for couples, friends, and family. You will learn new ways to communicate with each other underwater and you will improve your appreciation for each other when on land as well. Plus, if you have kids (age 10+), they can take the Junior Open Water Diver course and earn their certification alongside you.",
  },
  {
    num: "5",
    title: "It gets you moving.",
    body: "Many of us don't get out as much as we should, but once you start diving, you won't think of anything else. Scuba is an outdoor activity and whether you choose to explore the vast, flowing seas or a relaxing, shallow lake, you will find yourself becoming a more active and exciting person.",
  },
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Discover the Ocean"
        title="Why Dive?"
        image="/images/turtle.avif"
        position="center 65%"
      />

      {/* Intro */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2232] mb-10">
            Why learn to dive?
          </h2>
          <div className="space-y-6 text-[#4a5568] text-lg leading-relaxed">
            <p>
              Imagine floating weightlessly like an astronaut, watching colorful fish, or exploring
              shipwrecks. Scuba diving immerses you in a world that many people never get to see
              firsthand. With your Open Water Scuba Diver certification, you gain access to this
              world in a safe and educated manner.
            </p>
            <p>
              Scuba diving is not just another sport; it&apos;s a transformative experience that
              allows you to witness life under the waves. It is an activity that can be enjoyed at
              almost any age and can be combined with travel to some of the most beautiful
              destinations in the world.
            </p>
            <p>
              Underwater is one of the few places in the world where you can truly &apos;check
              out&apos;. No emails, text messages, or social media while diving!
            </p>
            <p className="italic text-[#1a2533] border-l-4 border-[#1a6b9a] pl-4">
              It&apos;s also an excellent gift for the family member who has always wanted to dive!
            </p>
          </div>
        </div>
      </section>

      {/* Top 5 reasons */}
      <section className="py-12 px-4 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2232] text-center mb-4">
            Top 5 Reasons You Should Become a Scuba Diver
          </h2>
          {/* Full-width photo banner */}
          <div className="mt-6 mb-10 sm:col-span-2 grid grid-cols-2 gap-4">
            <img
              src="/images/photo-4.png"
              alt="Underwater selfie"
              className="rounded-2xl shadow-lg w-full h-56 object-cover"
            />
            <img
              src="/images/photo-5.png"
              alt="Holding fish"
              className="rounded-2xl shadow-lg w-full h-56 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#0f2232] to-[#1a6b9a] text-white font-extrabold flex items-center justify-center text-sm">
                  {r.num}
                </span>
                <div>
                  <h3 className="font-bold text-[#0f2232] mb-2">{r.title}</h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#0f2232] mb-4">
              Here are my most recent diving videos—join us and create amazing memories!
            </h2>
            <a
              href="https://www.youtube.com/@reefball1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold rounded-full transition-all duration-300 shadow hover:shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Click here for more videos
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "https://www.youtube-nocookie.com/embed?listType=user_uploads&list=reefball1",
              "https://www.youtube-nocookie.com/embed?listType=user_uploads&list=reefball1&index=2",
              "https://www.youtube-nocookie.com/embed?listType=user_uploads&list=reefball1&index=3",
              "https://www.youtube-nocookie.com/embed?listType=user_uploads&list=reefball1&index=4",
            ].map((src, i) => (
              <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={src}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  title={`Diving video ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/photo-5.png')" }}
        />
        <div className="absolute inset-0 bg-[#0f2232]/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-8">
            Do you want to explore the world and the animals in it? Are you looking for a new
            activity to do with friends, an excuse to experience the great outdoors, or just some
            peace and quiet? If so, it&apos;s time to learn to dive today.
          </h3>
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
