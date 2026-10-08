const WORDS = [
  "Slow down",
  "Swim",
  "Dine",
  "Gather",
  "Good company",
  "Mihang'o",
];

function Strip({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="whitespace-nowrap px-7 font-display text-3xl font-light italic text-ivory/85 md:text-4xl">
            {w}
          </span>
          <span
            className="inline-block h-2 w-2 rotate-45 bg-terracotta/80"
            aria-hidden
          />
        </span>
      ))}
    </div>
  );
}

/** A slow, calm editorial ticker — one quiet breath between sections */
export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ivory/10 bg-forest py-6">
      <div className="flex w-max animate-marquee">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
