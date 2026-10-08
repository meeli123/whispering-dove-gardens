import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** delay in seconds */
  delay?: number;
  /** vertical offset in px */
  y?: number;
  /** viewport margin for triggering */
  margin?: string;
  as?: "div" | "span" | "figure" | "li";
}

/**
 * Subtle editorial reveal: fade + soft upward drift.
 * Respects the user's reduced-motion preference via MotionConfig.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  margin = "-10% 0px",
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: EASE, delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
    >
      {children}
    </motion.div>
  );
}

/** Line-mask reveal for display headlines — text rises out of an overflow mask */
export function MaskedLine({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.12em] ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "112%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
