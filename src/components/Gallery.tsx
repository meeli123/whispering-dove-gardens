import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { GALLERY } from "../data/content";
import { Lightbox } from "./Lightbox";
import { MaskedLine, Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="border-t border-forest/10 bg-ivory py-24 md:py-36"
      aria-label="Gallery"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader index="05" eyebrow="Gallery" />
            <h2 className="display-1 mt-8 text-forest">
              <MaskedLine delay={0.05}>Postcards from</MaskedLine>
              <MaskedLine delay={0.14}>
                a <em className="font-light italic text-sage">slow afternoon.</em>
              </MaskedLine>
            </h2>
          </div>
          <Reveal
            delay={0.3}
            className="flex items-end lg:col-span-5 lg:justify-end"
          >
            <p className="max-w-sm text-[15px] leading-relaxed text-charcoal/60 lg:text-right">
              A walk through the garden — the water, the shade, and the table
              waiting at the end of it.
            </p>
          </Reveal>
        </div>

        {/* ——— Editorial masonry ——— */}
        <div className="masonry mt-16 columns-1 sm:columns-2 lg:columns-3 md:mt-20">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} className="masonry mb-5" delay={(i % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open image: ${img.caption}`}
                className="group relative block w-full overflow-hidden text-left"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
                {/* hover veil + caption */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-forest/0 transition-colors duration-700 group-hover:bg-forest/30"
                />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-4 items-end justify-between gap-4 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="font-display text-xl font-light italic text-ivory">
                    {img.caption}
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/90">
                    View
                    <ArrowRight size={12} aria-hidden />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-charcoal/40">
            Placeholder photography — real garden photographs coming soon
          </p>
        </Reveal>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            images={GALLERY}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onNavigate={setOpenIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
