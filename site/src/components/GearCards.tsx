const requiredGear = [
  {
    id: "mask",
    title: "Mask",
    body: "Get any scuba-quality mask that seals well against your face — try on several without the strap. A black skirt reduces glare (like wearing a hat). You'll need to scrub the lens with non-gel toothpaste before first use.",
    link: { href: "https://youtube.com/shorts/axZO7pCCDGg?feature=share", label: "Watch: Choosing a Scuba Mask" },
  },
  {
    id: "snorkel",
    title: "Snorkel",
    body: "Keep it simple — you won't use it much while diving. Skip the fancy self-sealing 'stays dry' models. Most have a purge valve on the bottom, which makes clearing water easier.",
  },
  {
    id: "fins",
    title: "Fins",
    body: "Go with open-heel fins and booties — more versatile than full-foot fins in varying water temps. Spring or bungee straps are easier on/off and last longer than buckle straps. Paddle style gives better power in currents. My personal favorites: Apeks RK3s. Good brands: Scubapro, Aqualung, Mares, Apeks, Cressi, Tusa, Atomic.",
    link: { href: "https://youtube.com/shorts/X8hsRty0Ccg?feature=share", label: "Watch: Top 3 Favorite Fins" },
  },
  {
    id: "bag",
    title: "Mesh Bag",
    body: "A mesh backpack lets you dunk all your gear in a rinse tank after diving. The Stahlsac line is excellent — waterproof compartment, holds a lot.",
  },
];

const optionalGear = [
  {
    id: "wetsuit",
    title: "Wetsuit",
    body: "A 3mm full suit covers most of the year in Fort Lauderdale. In late summer when water hits the mid-80s°F, a bathing suit and rash guard is plenty. We provide wetsuits in the course fee, but your own suit fits better and hasn't been worn by strangers.",
  },
  {
    id: "computer",
    title: "Dive Computer",
    body: "I'll show you a few options during the class and walk you through how to use them. I recommend buying one, but wait until after the class so you know what to look for.",
    link: { href: "https://youtube.com/shorts/XPbNahWa_kk?feature=share", label: "Watch: Dive Computers" },
  },
];

function GearCard({ title, body, link }: { title: string; body: string; link?: { href: string; label: string } }) {
  return (
    <div className="bg-[#0a1a28]/75 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex flex-col gap-3">
      <h4 className="font-bold text-white text-base">{title}</h4>
      <p className="text-white/80 text-sm leading-relaxed">{body}</p>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2a8fc9] hover:text-white transition-colors duration-200 mt-auto"
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {link.label}
        </a>
      )}
    </div>
  );
}

export default function GearCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p className="text-xs font-bold tracking-[0.25em] text-white/40 uppercase mb-4">You&apos;ll need to purchase</p>
        <div className="grid grid-cols-1 gap-3">
          {requiredGear.map((g) => (
            <GearCard key={g.id} {...g} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold tracking-[0.25em] text-white/40 uppercase mb-4">Optional equipment</p>
        <div className="grid grid-cols-1 gap-3">
          {optionalGear.map((g) => (
            <GearCard key={g.id} {...g} />
          ))}
        </div>
      </div>
    </div>
  );
}
