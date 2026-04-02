const requiredGear = [
  {
    id: "mask",
    title: "Mask",
    body: "Get any scuba-quality mask that is comfortable and seals well against your face. Hold them to your face without the strap and try on several. I like a black skirt rather than a clear skirt for better vision (like wearing a hat to reduce sun glare). You'll need to clean the lens with an abrasive (not gel) toothpaste or inexpensive mask scrub product before you use it.",
    link: { href: "https://youtube.com/shorts/axZO7pCCDGg?feature=share", label: "Watch: Choosing a Scuba Mask" },
  },
  {
    id: "snorkel",
    title: "Snorkel",
    body: "Don't spend much money on a snorkel since you won't use it very much while diving. You don't want anything fancy or self-sealing/'stays dry.' Most have a purge valve on the bottom which makes it easier to clear water from the snorkel.",
  },
  {
    id: "fins",
    title: "Fins",
    body: "2 main styles: Open heel with a heel strap, and full-foot. Full-foot fins are typically ligher weight, and usually don't give you as much propulsion, and you can't wear booties with them in colder water, so I recommend open heel fins with booties for scuba diving. Fins with spring straps or bungee straps are easier to get on/off and last longer than ones with a traditional strap and buckle. Fins also come in 'split fin' and traditional/paddle styles. The split fins claim they are easier to kick and more efficient, but I prefer that traditional style for better power in currents and better control. Note: my personal favorite fins are the Apeks RK3s. Good quality brands for these gear that I like include Scubapro, Aqualung, Mares, Apeks, Fourth Element, Dive Rite, Cressi, Tusa, Hollis, Oceanic, Atomic, and Halcyon (among others).",
    link: { href: "https://youtube.com/shorts/X8hsRty0Ccg?feature=share", label: "Watch: Top 3 Favorite Fins" },
  },
  {
    id: "bag",
    title: "Mesh Bag",
    body: "A mesh backpack makes it easy to carry your gear and dunk the whole thing in a rinse tank after diving. My favorite is the Stahlsac line which also have a waterproof compartment and they hold a lot.",
  },
];

const optionalGear = [
  {
    id: "wetsuit",
    title: "Wetsuit",
    body: "A 3mm thick full wetsuit is usually sufficient for all but the coldest months in Fort Lauderdale. In late summer, when water temperatures are in the mid 80s, just a bathing suit and rash-guard long sleeve top are comfortable for most people. We will provide wetsuits as part of the course fee, but if you're going to dive often, it's nice to have your own suit that fits you perfectly and has never been peed in (by anyone but you).",
  },
  {
    id: "computer",
    title: "Dive Computer",
    body: "I will show you a few options during the class, as well as how to use them. I recommend buying one, but not before the class.",
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
