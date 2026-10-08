import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils/cn";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** pixels of vertical drift across the viewport */
  drift?: number;
  /** extra scale so edges never show during drift */
  scale?: number;
  eager?: boolean;
}

/**
 * Butter-smooth scroll-linked parallax. The image sits inside an
 * overflow-hidden frame and drifts vertically as it crosses the viewport.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  drift = 56,
  scale = 1.18,
  eager = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [drift, -drift]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}
