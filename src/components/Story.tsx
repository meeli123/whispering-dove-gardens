import { IMAGES } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { ParallaxImage } from "./ui/ParallaxImage";
import { MaskedLine, Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-ivory py-24 md:py-36 lg:py-44"
      aria-label="Our story"
    >
      <div className="shell grid gap-x-14 gap-y-20 lg:grid-cols-12">
        {/* ——— Editorial copy ——— */}
        <div className="lg:col-span-5 lg:pt-6">
          <SectionHeader index="01" eyebrow="More than a pool" />

          <h2 className="display-1 mt-8 text-forest">
            <MaskedLine delay={0.05}>There are places</MaskedLine>
            <MaskedLine delay={0.14}>you visit. And there</MaskedLine>
            <MaskedLine delay={0.23}>are places where</MaskedLine>
            <MaskedLine delay={0.32}>
              <em className="font-light italic text-terracotta">
                the day seems to slow down.
              </em>
            </MaskedLine>
          </h2>

          <Reveal delay={0.35} className="mt-10 max-w-md space-y-5">
            <p className="lede">
              Whispering Dove is a garden in Mihang&apos;o, on Nairobi&apos;s
              quiet eastern side — a swimming pool under open sky, green
              corners made for lingering, and a kitchen that understands
              weekends.
            </p>
            <p className="lede">
              Come for an hour. Stay for the afternoon. Swim first, eat
              slowly, and let the day do the rest.
            </p>
            <p className="font-display text-xl italic text-sage">
              Close to the city — somehow far from it.
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-12">
            <ArrowLink href="#experience" kind="text" tone="forest">
              See the experience
            </ArrowLink>
          </Reveal>
        </div>

        {/* ——— Image composition ——— */}
        <div className="relative lg:col-span-7">
          <Reveal delay={0.15} className="relative lg:ml-auto lg:w-[84%]">
            <ParallaxImage
              src={IMAGES.storyMain.src}
              alt={IMAGES.storyMain.alt}
              className="aspect-[4/5]"
              drift={52}
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-6 text-xs">
              <span className="font-display text-base italic text-sage">
                The walk in — green on every side
              </span>
              <span className="shrink-0 uppercase tracking-[0.2em] text-charcoal/40">
                Fig. 01
              </span>
            </figcaption>
          </Reveal>

          <Reveal
            delay={0.35}
            className="absolute -bottom-14 left-0 hidden w-[42%] max-w-[290px] sm:block"
          >
            <div className="border-[10px] border-ivory shadow-[0_24px_60px_-30px_rgba(23,59,50,0.45)]">
              <ParallaxImage
                src={IMAGES.storySecondary.src}
                alt={IMAGES.storySecondary.alt}
                className="aspect-[3/4]"
                drift={80}
                scale={1.25}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
