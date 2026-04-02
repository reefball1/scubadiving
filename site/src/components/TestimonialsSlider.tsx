"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    text: `I have known Darin as an Instructor and friend for nearly a year now! His instruction is INCREDIBLE. I met Darin when he was my instructor for my wreck and search & recovery specialties! Both of which are VERY technical and definitely present hazards... Needless to say I have never had an instructor with whom I felt so safe, confident, and eager to keep learning! His attention to detail, confidence in me, and passion for diving are unparalleled. Darin continuously challenged me and made sure I was able to meet those challenges! On top of everything he guided me with pro tips that I will be using in my scuba career path (I am getting my DM this October thanks to Darin's support and encouragement ❤️).`,
    author: "N.S. - Boston, MA",
    detail: "",
  },
  {
    text: `My 11-year-old son Eli had the incredible opportunity to become junior open water certified, diving one-on-one with Darin over three days in Ft. Lauderdale. Darin was patient, thorough, and truly passionate about teaching. He made sure Eli understood every concept, building his confidence step by step, and celebrated his progress along the way. It was clear Darin genuinely cared—not just about the skills, but about creating a memorable and empowering experience. I couldn't have asked for a better instructor.`,
    author: "Roy Wagner, parent of Eli, Age 11",
    detail: "",
  },
  {
    text: `When I completed my basic SCUBA training, I asked several local Divemasters who they considered the best instructor in the area. Every one of them gave me the same name: Darin Artman. Training with Darin provided me with the strongest foundation I could have hoped for. Under his guidance, I completed Wreck Diving, Deep Water Training, Search and Recovery, and Underwater Navigation at a variety of sites along Florida's Atlantic coast and the Florida Keys. I also earned my Rescue Diver certification with him, which ultimately led to achieving my Master Diver rating. I believe that great fundamental training builds skills and confidence that last a lifetime. Thanks to Darin's comprehensive approach, I've been able to explore wreck interiors at depths of 130 feet with complete self-assurance. His instruction also gave me the situational awareness necessary to feel at ease supervising my children in the water. My only regret is that I don't get to dive with Darin as often as I'd like. His expertise and dedication make every dive a learning experience, and we have so much damn fun!`,
    author: "WM - Fort Lauderdale",
    detail: "Master Diver Certified",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 25000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div className="relative">
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 min-h-[280px] flex flex-col justify-between shadow-xl">
        <div>
          <svg className="w-10 h-10 text-[#2a8fc9] mb-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-white/85 leading-relaxed text-base">{t.text}</p>
        </div>
        <div className="mt-6 pt-6 border-t border-white/15">
          <p className="font-bold text-white">{t.author}</p>
          {t.detail && (
            <p className="text-[#2a8fc9] text-sm mt-0.5">{t.detail}</p>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/15 flex items-center justify-center transition-colors duration-200 text-lg font-bold cursor-pointer"
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-[#2a8fc9]"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/15 flex items-center justify-center transition-colors duration-200 text-lg font-bold cursor-pointer"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </div>
  );
}
