import { ArrowUp } from "lucide-react";
import { MAPS_URL, NAV_LINKS, PLACEHOLDERS } from "../data/content";
import { ArrowLink } from "./ui/ArrowLink";
import { Reveal } from "./ui/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-pine text-ivory"
      aria-label="Footer"
    >
      <div className="shell pb-10 pt-20 md:pt-28">
        {/* ——— Brand statement ——— */}
        <div className="flex flex-wrap items-end justify-between gap-10">
          <Reveal>
            <p className="eyebrow text-sage">Garden &amp; Pool · Nairobi</p>
            <p className="mt-5 font-display text-[clamp(3.2rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.01em]">
              Whispering{" "}
              <em className="font-light italic text-sand">Dove</em>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ArrowLink
              href={MAPS_URL}
              kind="outline"
              tone="ivory"
              external
              ariaLabel="Get directions to Whispering Dove Garden"
            >
              Visit Us
            </ArrowLink>
          </Reveal>
        </div>

        {/* ——— Columns ——— */}
        <div className="mt-16 grid gap-12 border-t border-ivory/15 pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-2xl font-light italic leading-snug text-ivory/80">
              A garden escape for swimming, dining and good company.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ivory/50">
              Mihang&apos;o, Nairobi
              <br />
              Next to Kibiku Police Post
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow text-ivory/40">Explore</p>
            <ul className="mt-6 space-y-3.5">
              {[...NAV_LINKS, { label: "Location", href: "#visit" }].map(
                (l) => (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      className="nav-link text-sm text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="md:col-span-5">
            <p className="eyebrow text-ivory/40">Visit</p>
            <dl className="mt-6 space-y-3.5 text-sm">
              {[
                { k: "Hours", v: PLACEHOLDERS.hours },
                { k: "Phone", v: PLACEHOLDERS.phone },
                { k: "WhatsApp", v: PLACEHOLDERS.whatsapp },
                { k: "Instagram", v: PLACEHOLDERS.instagram },
              ].map((r) => (
                <div key={r.k} className="flex justify-between gap-6">
                  <dt className="text-ivory/45">{r.k}</dt>
                  <dd className="text-right text-ivory/75">{r.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mt-6 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* ——— Bottom bar ——— */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ivory/15 pt-7 text-[11px] leading-relaxed text-ivory/40">
          <p>
            © {year} Whispering Dove Garden — Mihang&apos;o, Nairobi
          </p>
          <p className="max-w-md">
            Concept website — imagery is directional placeholder photography
            (Pexels), pending official property photos.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-semibold uppercase tracking-[0.22em] text-ivory/60 transition-colors hover:text-ivory"
            aria-label="Back to top"
          >
            Top
            <ArrowUp
              size={13}
              aria-hidden
              className="transition-transform duration-500 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
