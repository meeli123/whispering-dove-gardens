import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";

type Tone = "forest" | "ivory" | "terracotta";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  /** solid = filled button, outline = bordered that fills on hover, text = quiet underline link */
  kind?: "solid" | "outline" | "text";
  external?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
}

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-500 ease-out";

const kinds: Record<NonNullable<ArrowLinkProps["kind"]>, Record<Tone, string>> = {
  solid: {
    forest: "bg-forest px-8 py-[1.05rem] text-ivory hover:bg-terracotta",
    ivory: "bg-ivory px-8 py-[1.05rem] text-forest hover:bg-terracotta hover:text-ivory",
    terracotta:
      "bg-terracotta px-8 py-[1.05rem] text-ivory hover:bg-terracotta-deep",
  },
  outline: {
    forest: "border border-forest/50 px-8 py-[1rem] text-forest hover:border-forest hover:bg-forest hover:text-ivory",
    ivory: "border border-ivory/60 px-8 py-[1rem] text-ivory hover:border-ivory hover:bg-ivory hover:text-forest",
    terracotta:
      "border border-terracotta/60 px-8 py-[1rem] text-terracotta hover:border-terracotta hover:bg-terracotta hover:text-ivory",
  },
  text: {
    forest: "text-forest",
    ivory: "text-ivory",
    terracotta: "text-terracotta",
  },
};

export function ArrowLink({
  href,
  children,
  tone = "forest",
  kind = "outline",
  external = false,
  className,
  onClick,
  ariaLabel,
}: ArrowLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        base,
        kinds[kind][tone],
        kind === "text" &&
          "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100",
        className
      )}
    >
      <span>{children}</span>
      <Icon
        size={14}
        strokeWidth={1.75}
        aria-hidden
        className="transition-transform duration-500 ease-out group-hover/btn:translate-x-1"
      />
    </a>
  );
}
