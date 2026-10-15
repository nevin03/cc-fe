import { cn } from "@/lib/cn";

/** The glass sweep's two light colors (see AboutVisual). */
const CORAL = "#FF5C8E";
const LAVENDER = "#C77DFF";

const STROKE = { fill: "none", strokeWidth: 7 } as const;

/** Two-tone geometric glyphs: thick arcs and solid dots. 48×48 grid. */
const glyphs = {
  product: (
    <>
      <path d="M18 8 A16 16 0 0 0 18 40" stroke={LAVENDER} {...STROKE} />
      <path d="M30 8 A16 16 0 0 1 30 40" stroke={CORAL} {...STROKE} />
    </>
  ),
  web: (
    <>
      <path d="M38.5 16 A16 16 0 1 0 38.5 32" stroke={LAVENDER} {...STROKE} />
      <circle cx="24" cy="24" r="5" fill={CORAL} />
    </>
  ),
  desktop: (
    <>
      <path d="M7.5 32 V22 A16.5 16.5 0 0 1 40.5 22 V32" stroke={LAVENDER} {...STROKE} />
      <path d="M13 41.5 H35" stroke={CORAL} {...STROKE} />
    </>
  ),
  mobile: (
    <>
      <path d="M14.5 5 V31 A9.5 9.5 0 0 0 33.5 31 V5" stroke={LAVENDER} {...STROKE} />
      <circle cx="24" cy="30" r="4.5" fill={CORAL} />
    </>
  ),
  ai: (
    <>
      <path d="M8 18 A16 16 0 0 1 40 18" stroke={LAVENDER} {...STROKE} />
      <circle cx="24" cy="24" r="5" fill={CORAL} />
      <path d="M40 30 A16 16 0 0 1 8 30" stroke={CORAL} {...STROKE} />
    </>
  ),
  blockchain: (
    <>
      <path d="M22 16.5 A10 10 0 1 0 22 31.5" stroke={LAVENDER} {...STROKE} />
      <path d="M26 16.5 A10 10 0 1 1 26 31.5" stroke={CORAL} {...STROKE} />
      <path d="M17 24 H31" stroke={LAVENDER} {...STROKE} />
    </>
  ),
  marketing: (
    <>
      <path d="M8 10 A16 16 0 0 0 40 10" stroke={CORAL} {...STROKE} />
      <circle cx="24" cy="10" r="5" fill={LAVENDER} />
      <circle cx="15" cy="38" r="4.5" fill={LAVENDER} />
      <circle cx="33" cy="38" r="4.5" fill={LAVENDER} />
    </>
  ),
} as const;

export type ServiceGlyph = keyof typeof glyphs;

interface ServiceIconProps {
  name: ServiceGlyph;
  /** Seconds to offset the shine so neighbouring icons sweep in turn. */
  shineDelay?: number;
  className?: string;
}

/** Diagonal highlight band; moved across the white copy by the `shine` keyframes. */
const SHINE_MASK = "linear-gradient(110deg, transparent 35%, black 50%, transparent 65%)";

export function ServiceIcon({ name, shineDelay = 0, className }: ServiceIconProps) {
  return (
    <span aria-hidden="true" className={cn("relative inline-block size-12", className)}>
      <svg viewBox="0 0 48 48" className="absolute inset-0 size-full">
        {glyphs[name]}
      </svg>
      {/* White copy of the glyph, revealed only where the sweeping band passes. */}
      <svg
        viewBox="0 0 48 48"
        className="absolute inset-0 size-full animate-shine opacity-90 brightness-0 invert motion-reduce:hidden"
        style={{
          maskImage: SHINE_MASK,
          maskSize: "250% 100%",
          maskRepeat: "no-repeat",
          animationDelay: `${shineDelay}s`,
        }}
      >
        {glyphs[name]}
      </svg>
    </span>
  );
}
