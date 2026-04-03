"use client";

import { useState } from "react";

const requiredItems = [
  {
    id: "mask",
    title: "Mask",
    content: (
      <>
        <p>
          Get any scuba-quality mask that is comfortable and seals well against your face. Hold them
          to your face without the strap and try on several. I like a black skirt rather than a
          clear skirt for better vision (like wearing a hat to reduce sun glare).
          <br />
          You&apos;ll need to clean the lens with an abrasive (not gel) toothpaste or inexpensive
          mask scrub product before you use it.
        </p>
        <a
          href="https://youtube.com/shorts/axZO7pCCDGg?feature=share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-[#1a6b9a] hover:text-[#0f2232] font-medium text-sm transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          The Only Thing That Matters When Choosing a Scuba Mask
        </a>
      </>
    ),
  },
  {
    id: "snorkel",
    title: "Snorkel",
    content: (
      <p>
        Don&apos;t spend much money on a snorkel since you won&apos;t use it very much while
        diving. You don&apos;t want anything fancy or self-sealing/&apos;stays dry.&apos; Most have
        a purge valve on the bottom which makes it easier to clear water from the snorkel.
      </p>
    ),
  },
  {
    id: "fins",
    title: "Fins",
    content: (
      <>
        <p>
          2 main styles: <strong>Open heel</strong> with a heel strap, and{" "}
          <strong>full-foot.</strong> Full-foot fins are typically lighter weight, and usually
          don&apos;t give you as much propulsion, and you can&apos;t wear booties with them in
          colder water, so I recommend open heel fins with booties for scuba diving. Fins with{" "}
          <strong>spring straps</strong> or <strong>bungee straps</strong> are easier to get on/off
          and last longer than ones with a traditional strap and buckle.
          <br />
          Fins also come in &apos;split fin&apos; and traditional/paddle styles. The split fins
          claim they are easier to kick and more efficient, but I prefer that traditional style for
          better power in currents and better control. Note: my personal favorite fins are the Apeks
          RK3s.
          <br />
          Good quality brands for these gear that I like include{" "}
          <em>
            Scubapro, Aqualung, Mares, Apeks, Fourth Element, Dive Rite, Cressi, Tusa, Hollis,
            Oceanic, Atomic, and Halcyon (among others).
          </em>
        </p>
        <a
          href="https://youtube.com/shorts/X8hsRty0Ccg?feature=share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-[#1a6b9a] hover:text-[#0f2232] font-medium text-sm transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Top 3 Favorite Scuba Diving Fins
        </a>
      </>
    ),
  },
  {
    id: "bag",
    title: "Mesh Bag",
    content: (
      <p>
        A mesh backpack makes it easy to carry your gear and dunk the whole thing in a rinse tank
        after diving. My favorite is the Stahlsac line which also have a waterproof compartment and
        they hold a lot.
      </p>
    ),
  },
];

const optionalItems = [
  {
    id: "wetsuit",
    title: "Wetsuit",
    content: (
      <p>
        A 3mm thick full wetsuit is usually sufficient for all but the coldest months in Fort
        Lauderdale. In late summer, when water temperatures are in the mid 80s, just a bathing suit
        and rash-guard long sleeve top are comfortable for most people.
        <br />
        We will provide wetsuits as part of the course fee, but if you&apos;re going to dive often,
        it&apos;s nice to have your own suit that fits you perfectly and has never been peed in (by
        anyone but you).
      </p>
    ),
  },
  {
    id: "computer",
    title: "Dive Computer",
    content: (
      <>
        <p>
          I will show you a few options during the class, as well as how to use them. I recommend
          buying one, but not before the class.
        </p>
        <a
          href="https://youtube.com/shorts/XPbNahWa_kk?feature=share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-[#1a6b9a] hover:text-[#0f2232] font-medium text-sm transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch Video
        </a>
      </>
    ),
  },
];

function Accordion({
  items,
  label,
  dark = false,
}: {
  items: typeof requiredItems;
  label: string;
  dark?: boolean;
}) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <h3 className={`text-sm font-bold uppercase tracking-widest mb-3 ${dark ? "text-white/50" : "text-[#0f2232]"}`}>{label}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl overflow-hidden ${dark ? "border border-white/15 bg-white/5" : "border border-gray-200 bg-white shadow-sm"}`}
          >
            <button
              onClick={() => setOpen(open === item.id ? null : item.id)}
              className={`w-full flex items-center justify-between px-5 py-4 text-left font-semibold transition-colors duration-200 ${dark ? "text-white hover:bg-white/10" : "text-[#0f2232] hover:bg-[#f0f7ff]"}`}
            >
              {item.title}
              <svg
                className={`w-5 h-5 text-[#1a6b9a] transition-transform duration-300 ${
                  open === item.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === item.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className={`px-5 pb-5 text-sm leading-relaxed space-y-2 ${dark ? "text-white/65" : "text-[#4a5568]"}`}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AccordionSection({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Accordion items={requiredItems} label="You'll need to purchase:" dark={dark} />
      <Accordion items={optionalItems} label="Optional Equipment:" dark={dark} />
    </div>
  );
}
