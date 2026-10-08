import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import type { GalleryImage } from "../data/content";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );
  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, next, prev]);

  const img = images[index];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${img.caption}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
      className="fixed inset-0 z-[110] flex flex-col bg-pine/96 backdrop-blur-sm"
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <span className="font-display text-base italic text-ivory/60">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          autoFocus
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors hover:text-terracotta"
        >
          Close
          <X size={20} strokeWidth={1.5} aria-hidden />
        </button>
      </div>

      {/* image */}
      <div
        className="flex flex-1 items-center justify-center px-6 md:px-24"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-full flex-col items-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="max-h-[72svh] w-auto max-w-full object-contain"
              decoding="async"
            />
            <figcaption className="mt-6 text-center">
              <span className="font-display text-2xl font-light italic text-ivory">
                {img.caption}
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory/40">
                Placeholder photography
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div
        className="flex items-center justify-center gap-4 pb-10 pt-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="border border-ivory/30 p-3.5 text-ivory transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-pine"
        >
          <ChevronLeft size={18} strokeWidth={1.5} aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="border border-ivory/30 p-3.5 text-ivory transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-pine"
        >
          <ChevronRight size={18} strokeWidth={1.5} aria-hidden />
        </button>
      </div>
    </motion.div>
  );
}
