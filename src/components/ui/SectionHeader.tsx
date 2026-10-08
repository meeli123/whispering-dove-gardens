import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  /** e.g. "02" */
  index: string;
  eyebrow: string;
  className?: string;
  light?: boolean;
  align?: "left" | "center";
}

/** Numbered editorial eyebrow: "02 · THE EXPERIENCE" with a thin rule */
export function SectionHeader({
  index,
  eyebrow,
  className,
  light = false,
  align = "left",
}: SectionHeaderProps): ReactNode {
  return (
    <Reveal
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center",
        light ? "text-ivory" : "text-forest",
        className
      )}
    >
      <span className="font-display text-sm italic text-terracotta">
        ({index})
      </span>
      <span className="eyebrow">{eyebrow}</span>
      <span className="rule hidden max-w-24 sm:block" aria-hidden />
    </Reveal>
  );
}
