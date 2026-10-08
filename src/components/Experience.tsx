import { IMAGES } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { ParallaxImage } from "./ui/ParallaxImage";
import { MaskedLine, Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { cn } from "../utils/cn";

const BLOCKS = [
  {
    n: "01",
    key: "Swim",
    title: "Take a dip.",
    copy: "Cool off, unwind and spend the day by the water.",
    cta: "Swimming info",
    href: "#swimming",
    img: IMAGES.swim,
  },
  {
    n: "02",
    key: "Dine",
    title: "Stay for something delicious.",
    copy: "Good food tastes even better outdoors.",
    cta: "View menu",
    href: "#dining",
    img: IMAGES.dine,
  },
  {
    n: "03",
    key: "Gather",
    title: "Bring your people.",
    copy: "Birthdays, celebrations and easy afternoons together.",
    cta: "Plan an event",
    href: "#events",
    img: IMAGES.gather,
  },
] as const;

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-ivory pb-24 pt-4 md:pb-36"
      aria-label="The experience"
    >
      <div className="shell">
        {/* ——— Section intro ——— */}
        <div className="grid gap-10 border-t border-forest/10 pt-16 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader index="02" eyebrow="The experience" />
            <h2 className="display-1 mt-8 text-forest">
              <MaskedLine delay={0.05}>One garden. Three</MaskedLine>
              <MaskedLine delay={0.14}>
                good reasons <em className="font-light italic text-sage">to stay.</em>
              </MaskedLine>
            </h2>
          </div>
          <Reveal
            delay={0.3}
            className="flex items-end justify-start lg:col-span-5 lg:justify-end"
          >
            <p className="max-w-sm text-[15px] leading-relaxed text-charcoal/60 lg:text-right">
              A slow Saturday has a rhythm here — water first, then food, then
              the people you came with. Nothing on a schedule.
            </p>
          </Reveal>
        </div>

        {/* ——— Editorial blocks ——— */}
        <div className="mt-20 md:mt-28">
          {BLOCKS.map((b, i) => (
            <article
              key={b.n}
              className={cn(
                "grid items-center gap-x-16 gap-y-10 border-t border-forest/10 py-16 md:py-20 lg:grid-cols-12",
                i === BLOCKS.length - 1 && "border-b"
              )}
            >
              {/* image */}
              <Reveal
                className={cn(
                  "group lg:col-span-7",
                  i % 2 === 1 && "lg:order-2"
                )}
              >
                <div className="transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <ParallaxImage
                    src={b.img.src}
                    alt={b.img.alt}
                    className="aspect-[4/3]"
                    drift={44}
                  />
                </div>
              </Reveal>

              {/* copy */}
              <div
                className={cn(
                  "relative lg:col-span-5",
                  i % 2 === 1 && "lg:order-1"
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 left-0 select-none font-display text-[8rem] font-light leading-none text-forest/[0.06] md:text-[10rem]"
                >
                  {b.n}
                </span>
                <Reveal delay={0.1} className="relative">
                  <p className="flex items-center gap-3 text-forest">
                    <span className="font-display text-sm italic text-terracotta">
                      {b.n} / 03
                    </span>
                    <span className="eyebrow">{b.key}</span>
                  </p>
                </Reveal>
                <Reveal delay={0.18} className="relative">
                  <h3 className="display-2 mt-6 text-balance text-forest">
                    {b.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.26} className="relative">
                  <p className="lede mt-5 max-w-sm">{b.copy}</p>
                </Reveal>
                <Reveal delay={0.34} className="relative mt-9">
                  <ArrowLink href={b.href} kind="outline" tone="forest">
                    {b.cta}
                  </ArrowLink>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
