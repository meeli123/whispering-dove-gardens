import { IMAGES, PLACEHOLDERS } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { ParallaxImage } from "./ui/ParallaxImage";
import { MaskedLine, Reveal } from "./ui/Reveal";

export function PoolSection() {
  return (
    <section
      id="swimming"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-pine"
      aria-label="Swimming"
    >
      {/* ——— Full-bleed parallax pool ——— */}
      <ParallaxImage
        src={IMAGES.poolWide.src}
        alt={IMAGES.poolWide.alt}
        className="absolute inset-0"
        drift={90}
        scale={1.28}
      />

      {/* ——— Scrims ——— */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,41,34,0.66) 0%, rgba(14,41,34,0.12) 45%, rgba(14,41,34,0.05) 70%)",
        }}
      />

      {/* ——— Content ——— */}
      <div className="shell relative z-10 pb-20 pt-40 md:pb-24">
        <Reveal>
          <p className="flex items-center gap-4 text-ivory/80">
            <span className="eyebrow">Swimming</span>
            <span className="h-px w-14 bg-terracotta" aria-hidden />
          </p>
        </Reveal>

        <h2 className="mt-6 font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-medium leading-[1.0] tracking-[-0.01em] text-ivory">
          <MaskedLine delay={0.08}>Take a dip.</MaskedLine>
          <MaskedLine delay={0.18}>
            <em className="font-light italic text-sand">Stay awhile.</em>
          </MaskedLine>
        </h2>

        <Reveal delay={0.3} className="mt-7 max-w-md">
          <p className="text-[1.02rem] leading-relaxed text-ivory/80">
            The water is the heart of the garden — cool, clear and quietly
            inviting. Bring a book. Bring the whole crew. Or bring nothing at
            all.
          </p>
        </Reveal>

        <Reveal delay={0.42} className="mt-10">
          <ArrowLink href="#visit" kind="outline" tone="ivory">
            More about the pool
          </ArrowLink>
        </Reveal>
      </div>

      {/* ——— Good-to-know strip ——— */}
      <div className="relative z-10 border-t border-ivory/15 bg-pine/40 backdrop-blur-sm">
        <div className="shell flex flex-wrap items-center gap-x-10 gap-y-2 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/65">
          <span className="text-terracotta">Good to know</span>
          <span>Day swimming</span>
          <span>Garden &amp; shade</span>
          <span>Food from the kitchen</span>
          <span className="text-ivory/40">{PLACEHOLDERS.swimDetails}</span>
        </div>
      </div>
    </section>
  );
}
