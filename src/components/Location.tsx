import { MapPin } from "lucide-react";
import { MAPS_URL, PLACEHOLDERS } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { MaskedLine, Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const VISIT_ROWS = [
  { label: "Location", value: "Mihang'o, Nairobi" },
  { label: "Landmark", value: "Next to Kibiku Police Post" },
  { label: "Hours", value: PLACEHOLDERS.hours },
  { label: "Phone", value: PLACEHOLDERS.phone },
  { label: "WhatsApp", value: PLACEHOLDERS.whatsapp },
  { label: "Instagram", value: PLACEHOLDERS.instagram },
];

const MAP_EMBED =
  "https://www.google.com/maps?q=Whispering%20Dove%20Garden%2C%20Mihang%27o%2C%20Nairobi%2C%20Kenya&output=embed";

export function Location() {
  return (
    <section
      id="visit"
      className="border-t border-forest/10 bg-ivory py-24 md:py-36 lg:py-40"
      aria-label="Location and directions"
    >
      <div className="shell grid gap-x-16 gap-y-16 lg:grid-cols-12">
        {/* ——— Copy + visit info ——— */}
        <div className="lg:col-span-5">
          <SectionHeader index="06" eyebrow="Find us" />

          <h2 className="display-1 mt-8 text-forest">
            <MaskedLine delay={0.05}>Come find</MaskedLine>
            <MaskedLine delay={0.14}>
              <em className="font-light italic text-terracotta">your quiet.</em>
            </MaskedLine>
          </h2>

          <Reveal delay={0.28} className="mt-8 max-w-md">
            <p className="lede">
              Whispering Dove Garden sits in Mihang&apos;o — close enough for a
              spontaneous Saturday, far enough to feel like you&apos;ve left
              the city behind.
            </p>
          </Reveal>

          <Reveal delay={0.36} className="mt-9 flex items-start gap-4">
            <MapPin
              size={18}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-terracotta"
              aria-hidden
            />
            <div>
              <p className="font-display text-2xl font-medium leading-snug text-forest">
                Mihang&apos;o, Nairobi
              </p>
              <p className="mt-1 text-sm text-charcoal/60">
                Next to Kibiku Police Post
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.44} className="mt-10 flex flex-wrap items-center gap-4">
            <ArrowLink href={MAPS_URL} kind="solid" tone="terracotta" external>
              Get Directions
            </ArrowLink>
            <ArrowLink
              href={MAPS_URL}
              kind="text"
              tone="forest"
              external
              className="normal-case tracking-[0.14em]"
            >
              Search &ldquo;Whispering Dove Garden&rdquo; on Google Maps
            </ArrowLink>
          </Reveal>

          {/* ——— Plan a visit (placeholders pending verification) ——— */}
          <Reveal delay={0.52} className="mt-14 max-w-md">
            <p className="eyebrow text-forest/60">Plan a visit</p>
            <dl className="mt-5 border-t border-forest/15">
              {VISIT_ROWS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-baseline justify-between gap-6 border-b border-forest/10 py-3.5"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/50">
                    {r.label}
                  </dt>
                  <dd className="text-right text-sm text-charcoal/80">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-charcoal/50">
              Practical details are being confirmed and will be updated here.
            </p>
          </Reveal>
        </div>

        {/* ——— Map ——— */}
        <Reveal delay={0.25} className="lg:col-span-7">
          <div className="relative h-full min-h-[420px] border border-forest/20">
            <iframe
              title="Map — Whispering Dove Garden, Mihang'o, Nairobi"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full grayscale-[0.4] transition-all duration-1000 ease-out hover:grayscale-0"
            />
            <span
              aria-hidden
              className="absolute -top-3 left-6 bg-ivory px-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-forest/60"
            >
              The garden on the map
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
