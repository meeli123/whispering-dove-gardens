import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { MAPS_URL, NAV_LINKS } from "../data/content";
import { cn } from "../utils/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

function Wordmark({ tone }: { tone: "light" | "dark" }) {
  return (
    <a
      href="#top"
      className={cn(
        "group flex flex-col leading-none transition-colors duration-500",
        tone === "light" ? "text-ivory" : "text-forest"
      )}
      aria-label="Whispering Dove — back to top"
    >
      <span className="font-display text-[17px] font-semibold uppercase tracking-[0.26em]">
        Whispering Dove
      </span>
      <span
        className={cn(
          "mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.5em] transition-colors duration-500",
          tone === "light" ? "text-ivory/60" : "text-forest/50"
        )}
      >
        Garden &amp; Pool
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 48));

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      {/* scroll progress hairline */}
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-terracotta"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-700",
          scrolled
            ? "border-b border-forest/10 bg-ivory/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "shell flex items-center justify-between transition-all duration-700",
            scrolled ? "py-3.5" : "py-6"
          )}
        >
          <Wordmark tone={scrolled ? "dark" : "light"} />

          <nav
            aria-label="Primary"
            className={cn(
              "hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 lg:flex",
              scrolled ? "text-forest" : "text-ivory"
            )}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a
              href="#visit"
              className={cn(
                "ml-2 border px-5 py-2.5 transition-colors duration-500",
                scrolled
                  ? "border-forest/50 hover:bg-forest hover:text-ivory"
                  : "border-ivory/60 hover:bg-ivory hover:text-forest"
              )}
            >
              Visit Us
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={cn(
              "flex items-center gap-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-500 lg:hidden",
              scrolled ? "text-forest" : "text-ivory"
            )}
          >
            Menu
            <Menu size={20} strokeWidth={1.5} aria-hidden />
          </button>
        </div>
      </motion.header>

      {/* ——— Full-screen mobile menu ——— */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[90] flex flex-col bg-forest text-ivory"
          >
            <div className="shell flex items-center justify-between py-5">
              <Wordmark tone="light" />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                autoFocus
                className="flex items-center gap-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
              >
                Close
                <X size={22} strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="shell flex flex-1 flex-col justify-center gap-1"
            >
              {[...NAV_LINKS, { label: "Visit Us", href: "#visit" }].map(
                (l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.7,
                      ease: EASE,
                    }}
                  >
                    <a
                      href={l.href}
                      onClick={close}
                      className="group flex items-baseline gap-5 border-b border-ivory/10 py-4"
                    >
                      <span className="font-display text-sm italic text-terracotta">
                        0{i + 1}
                      </span>
                      <span className="font-display text-4xl font-medium leading-none transition-transform duration-500 group-hover:translate-x-2">
                        {l.label}
                      </span>
                    </a>
                  </motion.div>
                )
              )}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="shell flex flex-col gap-4 pb-10 pt-6"
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta"
              >
                Get Directions
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden
                />
              </a>
              <p className="text-xs leading-relaxed text-ivory/50">
                Mihang&apos;o, Nairobi — next to Kibiku Police Post
                <br />
                [PHONE NUMBER] · [WHATSAPP NUMBER]
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
