import { IMAGES, PLACEHOLDERS } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { ParallaxImage } from "./ui/ParallaxImage";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const EXAMPLES = [
  "Birthdays & anniversaries",
  "Family gatherings",
  "Private celebrations",
  "Team outings",
  "Easy garden parties",
];

export function Events() {
  return (
    <section
      id="events"
      className="bg-ivory py-24 md:py-36 lg:py-40"
      aria-label="Events and gatherings"
    >
      <div className="shell grid items-center gap-y-14 lg:grid-cols-12">
        {/* ——— Large lifestyle image ——— */}
        <Reveal className="lg:col-span-7">
          <ParallaxImage
            src={IMAGES.events.src}
            alt={IMAGES.events.alt}
            className="aspect-[4/5] sm:aspect-[4/4.4]"
            drift={56}
          />
        </Reveal>

        {/* ——— Overlapping editorial panel ——— */}
        <Reveal
          delay={0.18}
          className="relative z-10 lg:col-span-5 lg:-ml-28"
        >
          <div className="border border-forest/15 bg-ivory p-8 md:p-12">
            <SectionHeader index="04" eyebrow="Gatherings" />

            <h2 className="display-2 mt-7 text-forest">Make a day of it.</h2>

            <p className="lede mt-5">
              Bring your people. We&apos;ll make room — under the trees, by the
              water, around one long table.
            </p>

            <p className="eyebrow mt-10 text-forest/60">For example</p>
            <ul className="mt-4 space-y-3">
              {EXAMPLES.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-3 text-[15px] text-charcoal/75"
                >
                  <span
                    className="h-1.5 w-1.5 rotate-45 bg-terracotta"
                    aria-hidden
                  />
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-charcoal/50">
              Gatherings the garden suits — packages and arrangements on
              enquiry.
            </p>

            <div className="mt-9 flex flex-col gap-4">
              <ArrowLink
                href="#visit"
                kind="solid"
                tone="terracotta"
                className="self-start"
              >
                Enquire about an event
              </ArrowLink>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                Enquiries: {PLACEHOLDERS.phone} · {PLACEHOLDERS.eventEmail}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
