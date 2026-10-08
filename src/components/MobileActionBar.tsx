import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { MAPS_URL } from "../data/content";

/**
 * Persistent mobile action bar — only verified actions are shown.
 * Directions (Google Maps link) is verified; call/WhatsApp stay hidden
 * until real numbers are confirmed.
 */
export function MobileActionBar() {
  const [pastHero, setPastHero] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) =>
    setPastHero(y > window.innerHeight * 0.85)
  );

  useEffect(() => {
    const targets = ["visit", "footer"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => setNearEnd(entries.some((e) => e.isIntersecting)),
      { rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const visible = pastHero && !nearEnd;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[55] border-t border-forest/10 bg-ivory/95 px-4 pt-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "calc(0.8rem + env(safe-area-inset-bottom))" }}
        >
          <div className="grid grid-cols-2 gap-3">
            <a
              href="#visit"
              className="flex items-center justify-center bg-forest py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory"
            >
              Plan a visit
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-forest/40 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest"
            >
              <MapPin size={13} strokeWidth={1.75} aria-hidden />
              Directions
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
