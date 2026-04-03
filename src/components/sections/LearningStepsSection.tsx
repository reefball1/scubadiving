const steps = [
  {
    num: "01",
    title: "E-learning",
    desc: "Learn the fundamentals about diving at your own pace. About 10 hours of online coursework you can complete whenever and wherever works for you.",
    img: "/images/learning.jpeg",
    alt: "E-learning",
    time: "~10 hours",
  },
  {
    num: "02",
    title: "Pool or Confined Water",
    desc: "Work with an experienced instructor to master the basics of working with scuba equipment, breathing and swimming underwater, and handling situations you're likely to encounter.",
    img: "/images/pool.avif",
    alt: "Diver in pool",
    time: "~5–8 hours",
  },
  {
    num: "03",
    title: "Go Diving",
    desc: "In the ocean (from shore or from a boat), or in a large body of water like a lake, put your scuba skills to work while enjoying the underwater environment.",
    img: "/images/go-diving.png",
    alt: "Sitting on boat",
    time: "~2 half-days",
  },
];

export default function LearningStepsSection() {
  return (
    <section id="steps" className="scroll-mt-20">
      {/* Banner */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/learning-steps.avif')", backgroundPosition: "center 70%" }}
        />
        <div className="absolute inset-0 bg-[#0f2232]/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-3">Your Path to Certification</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Learning Steps</h2>
        </div>
      </div>

      <div className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0f2232] text-center mb-4">
            What is the Process to Learn to Dive?
          </h3>
          <p className="text-center text-[#4a5568] mb-8 max-w-2xl mx-auto">
            Getting your Open Water certification is straightforward and fun. Here&apos;s how it works:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#f7f9fc] rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <img src={step.img} alt={step.alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-7xl font-extrabold text-[#1a6b9a]/10 leading-none block -mt-2 mb-1 select-none">
                    {step.num}
                  </span>
                  <h4 className="text-xl font-extrabold text-[#0f2232] mb-3">{step.title}</h4>
                  <p className="text-[#4a5568] text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a6b9a] bg-[#1a6b9a]/10 px-3 py-1.5 rounded-full self-start">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                    </svg>
                    {step.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[#4a5568] italic text-sm max-w-2xl mx-auto">
            Note: time estimates are averages — it depends on how quickly you master the specific skills and performance requirements.<br />We will always work at your pace.
          </p>
        </div>
      </div>
    </section>
  );
}
