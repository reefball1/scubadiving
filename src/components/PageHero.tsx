interface PageHeroProps {
  eyebrow: string;
  title: string;
  image: string;
  /** CSS background-position, e.g. "center 25%" — lower % = show more of the top of the image */
  position?: string;
}

export default function PageHero({ eyebrow, title, image, position = "center center" }: PageHeroProps) {
  return (
    <section className="relative flex items-center justify-center" style={{ minHeight: "300px" }}>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${image}')`, backgroundPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2232]/70 via-[#0f2232]/55 to-[#0f2232]/75" />

      <div className="relative z-10 text-center px-4 pt-28 pb-14">
        <p className="text-xs font-bold tracking-[0.3em] text-[#2a8fc9] uppercase mb-3">
          {eyebrow}
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg">{title}</h1>
      </div>
    </section>
  );
}
