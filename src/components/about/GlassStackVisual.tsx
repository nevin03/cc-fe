import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * (Currently unused — kept for reference.) Frosted-glass platform stack: three isometric glass tiles floating over
 * blurred brand-colour light, which shows through via backdrop blur.
 */

const ISO = "[transform:rotateX(55deg)_rotateZ(-45deg)]";

interface Layer {
  top: string;
  tint: string;
  edge: string;
  delay: string;
}

const layers: Layer[] = [
  { top: "42%", tint: "from-radiant-coral/25 to-electric-amber/10", edge: "from-radiant-coral/50 to-electric-amber/40", delay: "0s" },
  { top: "24%", tint: "from-vivid-magenta/25 to-radiant-coral/10", edge: "from-vivid-magenta/50 to-radiant-coral/40", delay: "0.4s" },
  { top: "6%", tint: "from-electric-purple/30 to-vivid-magenta/10", edge: "from-electric-purple/60 to-vivid-magenta/40", delay: "0.8s" },
];

const nodes = [
  { pos: "left-1/2 top-[14%]", color: "bg-vivid-magenta" },
  { pos: "left-[86%] top-1/2", color: "bg-electric-amber" },
  { pos: "left-1/2 top-[86%]", color: "bg-electric-purple-light" },
  { pos: "left-[14%] top-1/2", color: "bg-radiant-coral" },
];

const tile = "absolute left-[21%] aspect-square w-[58%] rounded-[28px]";

function CoreChip() {
  return (
    <>
      {/* Links from the chip to the edge nodes */}
      <span className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-gradient-to-b from-vivid-magenta/70 via-white/80 to-electric-purple-light/70" />
      <span className="absolute left-[14%] top-1/2 h-px w-[72%] -translate-y-1/2 bg-gradient-to-r from-radiant-coral/70 via-white/80 to-electric-amber/70" />
      <span className="absolute left-1/2 top-1/2 size-[24%] -translate-1/2 rounded-2xl border border-white/70 bg-gradient-to-br from-electric-purple to-vivid-magenta shadow-[0_0_30px_rgba(171,3,169,0.55),inset_0_1px_0_rgba(255,255,255,0.6)]" />
      {nodes.map(({ pos, color }) => (
        <span key={pos} className={cn("absolute size-3 -translate-1/2 rounded-full ring-4 ring-white/60", pos, color)}>
          <span className={cn("absolute inset-0 animate-ping rounded-full opacity-60", color)} />
        </span>
      ))}
    </>
  );
}

function GlassLayer({ top, tint, edge, delay, isTop }: Layer & { isTop: boolean }) {
  const style: CSSProperties = { top, animationDelay: delay };
  return (
    <div className="absolute inset-x-0 aspect-square animate-float" style={style}>
      {/* Edge: a tinted copy offset below the face reads as glass thickness */}
      <div className={cn(tile, ISO, "top-[3%] bg-gradient-to-br opacity-80", edge)} />
      {/* Face */}
      <div
        className={cn(
          tile,
          ISO,
          "top-0 overflow-hidden border border-white/70 bg-gradient-to-br backdrop-blur-xl",
          "shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-12px_24px_rgba(255,255,255,0.18),0_30px_60px_-20px_rgba(80,3,192,0.35)]",
          tint,
        )}
      >
        <div className="absolute inset-0 bg-white/20" />
        {/* Specular sheen */}
        <div className="absolute -left-1/4 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        {isTop && <CoreChip />}
      </div>
    </div>
  );
}

export function GlassStackVisual({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative aspect-square", className)}>
      {/* Coloured light behind the glass */}
      <div className="absolute left-[18%] top-[16%] size-[38%] rounded-full bg-electric-purple/45 blur-3xl" />
      <div className="absolute right-[14%] top-[36%] size-[34%] rounded-full bg-vivid-magenta/40 blur-3xl" />
      <div className="absolute bottom-[10%] left-[30%] size-[36%] rounded-full bg-radiant-coral/35 blur-3xl" />
      <div className="absolute bottom-[18%] right-[22%] size-[20%] rounded-full bg-electric-amber/40 blur-2xl" />

      {layers.map((layer, index) => (
        <GlassLayer key={layer.top} {...layer} isTop={index === layers.length - 1} />
      ))}

      {/* Ground shadow */}
      <div className="absolute bottom-[1%] left-1/2 h-[6%] w-[62%] -translate-x-1/2 rounded-[50%] bg-electric-purple/20 blur-xl" />
    </div>
  );
}
