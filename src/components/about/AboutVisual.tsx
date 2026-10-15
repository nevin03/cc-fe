import { cn } from "@/lib/cn";

/**
 * Dark glass band with natural edge lighting: a near-clear body, crisp thin
 * highlights that catch light toward the lower left, a second faint line
 * showing the glass thickness, and only a whisper of halo. Stretched viewBox.
 */

const BAND = "M-60 800 C130 520 360 370 720 270 L720 400 C400 470 230 600 70 820 Z";
const OUTER_EDGE = "M720 270 C360 370 130 520 -60 800";
const OUTER_THICKNESS = "M720 284 C366 382 142 530 -46 805";
const INNER_EDGE = "M720 400 C400 470 230 600 70 820";
const INNER_THICKNESS = "M720 388 C396 460 222 593 58 818";

/** Light along the band: invisible at the top right, brightest near the lower left. */
function AlongGradient({ id, color, peak }: { id: string; color: string; peak: number }) {
  return (
    <linearGradient id={id} x1="720" y1="280" x2="0" y2="820" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor={color} stopOpacity="0" />
      <stop offset="30%" stopColor={color} stopOpacity={0.15 * peak} />
      <stop offset="62%" stopColor={color} stopOpacity={peak} />
      <stop offset="100%" stopColor={color} stopOpacity={0.7 * peak} />
    </linearGradient>
  );
}

interface EdgeProps {
  d: string;
  gradient: string;
  width: number;
  /** Filter id for a soft halo under the line. */
  halo?: string;
}

function Edge({ d, gradient, width, halo }: EdgeProps) {
  return (
    <>
      {halo && <path d={d} stroke={`url(#${gradient})`} strokeWidth="6" filter={`url(#${halo})`} opacity="0.55" />}
      <path d={d} stroke={`url(#${gradient})`} strokeWidth={width} vectorEffect="non-scaling-stroke" />
    </>
  );
}

interface AboutVisualProps {
  className?: string;
  /** Unique prefix for SVG ids — required when the band is rendered more than once. */
  idPrefix?: string;
}

export function AboutVisual({ className, idPrefix = "sweep" }: AboutVisualProps) {
  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <svg viewBox="0 0 700 800" preserveAspectRatio="none" fill="none" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <AlongGradient id={id("outer-light")} color="#FF5C8E" peak={1} />
          <AlongGradient id={id("outer-core")} color="#FFF1F5" peak={0.85} />
          <AlongGradient id={id("outer-tint")} color="#FF467A" peak={0.6} />
          <AlongGradient id={id("inner-light")} color="#C77DFF" peak={0.8} />
          <AlongGradient id={id("inner-tint")} color="#AB03A9" peak={0.45} />

          {/* Body: barely-there tint, slightly denser toward the lit end */}
          <linearGradient id={id("body")} x1="720" y1="300" x2="0" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5003C0" stopOpacity="0" />
            <stop offset="75%" stopColor="#AB03A9" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FF467A" stopOpacity="0.08" />
          </linearGradient>

          <clipPath id={id("clip")}>
            <path d={BAND} />
          </clipPath>
          <filter id={id("halo")} x="-200" y="0" width="1100" height="1000" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <filter id={id("fresnel")} x="-200" y="0" width="1100" height="1000" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <path d={BAND} fill={`url(#${id("body")})`} />
        {/* Faint light pooling just inside the outer wall */}
        <g clipPath={`url(#${id("clip")})`}>
          <path d={OUTER_EDGE} stroke={`url(#${id("outer-tint")})`} strokeWidth="18" filter={`url(#${id("fresnel")})`} opacity="0.5" />
        </g>

        <Edge d={INNER_THICKNESS} gradient={id("inner-tint")} width={1} />
        <Edge d={INNER_EDGE} gradient={id("inner-light")} width={1.5} halo={id("halo")} />
        <Edge d={OUTER_THICKNESS} gradient={id("outer-tint")} width={1} />
        <Edge d={OUTER_EDGE} gradient={id("outer-light")} width={2.2} halo={id("halo")} />
        <Edge d={OUTER_EDGE} gradient={id("outer-core")} width={0.8} />
      </svg>
    </div>
  );
}
