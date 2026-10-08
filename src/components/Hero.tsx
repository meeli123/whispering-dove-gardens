import { motion } from "framer-motion";
import { IMAGES, MAPS_URL } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { MaskedLine, Reveal } from "./ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[620px] flex-col overflow-hidden bg-pine"
      aria-label="Welcome to Whispering Dove"
    >
      {/* ——— Cinematic image: slow settle from 1.07 → 1.0 ——— */}
      <motion.img
        src={IMAGES.hero.src}
        alt={IMAGES.hero.alt}
        initial={{ scale: 1.07, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        fetchPriority="high"
        decoding="async"
      />

      {/* ——— Readability scrims ——— */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,41,34,0.78) 0%, rgba(14,41,34,0.28) 42%, rgba(14,41,34,0.12) 62%, rgba(14,41,34,0.42) 100%)",
        }}
      />

      {/* ——— Vertical side note ——— */}
      <div
        aria-hidden
        className="absolute right-9 top-1/2 hidden -translate-y-1/2 items-center gap-6 xl:flex"
      >
        <span className="writing-vertical eyebrow text-ivory/45">
          Garden — Pool — Kitchen
        </span>
        <span className="h-20 w-px bg-ivory/25" />
      </div>

      {/* ——— Content ——— */}
      <div className="shell relative z-10 flex flex-1 flex-col justify-end pb-24 md:pb-28">
        <Reveal delay={0.85} y={16}>
          <p className="flex items-center gap-4 text-ivory/80">
            <span className="h-px w-10 bg-terracotta" aria-hidden />
            <span className="eyebrow">Mihang&apos;o · Nairobi</span>
          </p>
        </Reveal>

        <h1 className="display-hero mt-6 text-ivory">
          <MaskedLine delay={0.4}>A place to</MaskedLine>
          <MaskedLine delay={0.52}>
            <em className="font-light italic text-sand">slow down.</em>
          </MaskedLine>
        </h1>

        <Reveal delay={1.05} className="mt-7 max-w-md">
          <p className="text-[1.05rem] leading-relaxed text-ivory/85 md:text-lg">
            Swim. Dine. Relax.
            <br />
            <span className="text-ivory/65">
              Discover a garden escape made for good days.
            </span>
          </p>
        </Reveal>

        <Reveal delay={1.2} className="mt-10 flex flex-wrap items-center gap-4">
          <ArrowLink href="#story" kind="solid" tone="ivory">
            Explore Whispering Dove
          </ArrowLink>
          <ArrowLink href={MAPS_URL} kind="outline" tone="ivory" external>
            Get Directions
          </ArrowLink>
        </Reveal>
      </div>

      {/* ——— Scroll cue ——— */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-24 right-10 z-10 hidden flex-col items-center gap-4 md:flex lg:right-16"
      >
        <span className="writing-vertical text-[10px] font-semibold uppercase tracking-[0.4em] text-ivory/55">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-ivory/20">
          <motion.span
            className="absolute left-0 top-0 h-full w-full bg-terracotta"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </span>
      </motion.div>
    </section>
  );
}
