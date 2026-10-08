import { IMAGES, PLACEHOLDERS } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { ParallaxImage } from "./ui/ParallaxImage";
import { MaskedLine, Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Dining() {
  return (
    <section
      id="dining"
      className="relative overflow-hidden bg-sand py-24 md:py-36 lg:py-44"
      aria-label="Dining"
    >
      <div className="shell grid gap-x-16 gap-y-16 lg:grid-cols-12">
        {/* ——— Copy + menu insert ——— */}
        <div className="lg:col-span-5">
          <SectionHeader index="03" eyebrow="From the kitchen" />

          <h2 className="display-1 mt-8 text-forest">
            <MaskedLine delay={0.05}>Good food.</MaskedLine>
            <MaskedLine delay={0.14}>Good company.</MaskedLine>
            <MaskedLine delay={0.23}>
              <em className="font-light italic text-terracotta">No rush.</em>
            </MaskedLine>
          </h2>

          <Reveal delay={0.32} className="mt-8 max-w-md">
            <p className="lede">
              Lunch that lingers into the afternoon. Plates made for sharing,
              tables made for staying — eaten outside, the way weekends should
              taste.
            </p>
          </Reveal>

          {/* ——— Menu placeholder insert (swap in the real menu later) ——— */}
          <Reveal delay={0.42} className="mt-12 max-w-md">
            <div
              id="menu"
              className="border border-forest/20 bg-ivory p-7 md:p-8"
            >
              <p className="eyebrow text-forest/70">The menu</p>
              <p className="mt-4 font-display text-2xl font-medium italic leading-snug text-forest">
                Coming to the table soon.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
                The full kitchen menu will live here. For today&apos;s dishes,
                ask on arrival or via{" "}
                <span className="font-semibold text-forest">
                  {PLACEHOLDERS.whatsapp}
                </span>
                .
              </p>
              <div className="mt-6">
                <ArrowLink href="#menu" kind="text" tone="terracotta">
                  Menu &mdash; {PLACEHOLDERS.menu}
                </ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ——— Image composition ——— */}
        <div className="relative lg:col-span-7">
          <Reveal delay={0.15} className="relative w-full sm:w-[80%]">
            <ParallaxImage
              src={IMAGES.diningMain.src}
              alt={IMAGES.diningMain.alt}
              className="aspect-[4/5] sm:aspect-[3/3.4]"
              drift={46}
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-6 text-xs">
              <span className="font-display text-base italic text-forest/60">
                A shaded table, a shared plate
              </span>
              <span className="shrink-0 uppercase tracking-[0.2em] text-charcoal/40">
                Fig. 02
              </span>
            </figcaption>
          </Reveal>

          <Reveal
            delay={0.3}
            className="absolute -bottom-10 right-0 hidden w-[40%] sm:block"
          >
            <div className="border-[10px] border-sand shadow-[0_24px_60px_-30px_rgba(23,59,50,0.4)]">
              <ParallaxImage
                src={IMAGES.diningSecondary.src}
                alt={IMAGES.diningSecondary.alt}
                className="aspect-[3/4]"
                drift={74}
                scale={1.25}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
