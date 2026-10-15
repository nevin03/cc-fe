import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * CSS 3D cube in the orb's palette (cyan, violet, pink). Each face gets its own gradient so the
 * cube reads as lit from the top left; it tilts toward the viewer and turns slowly.
 */
const faces: { transform: string; background: string }[] = [
  // front
  { transform: "translateZ(var(--half))", background: "linear-gradient(135deg, #66D6FA, #8B86F6)" },
  // back
  { transform: "rotateY(180deg) translateZ(var(--half))", background: "linear-gradient(135deg, #8B86F6, #E97CE8)" },
  // right
  { transform: "rotateY(90deg) translateZ(var(--half))", background: "linear-gradient(135deg, #8B86F6, #E97CE8)" },
  // left
  { transform: "rotateY(-90deg) translateZ(var(--half))", background: "linear-gradient(135deg, #7FE2FF, #66D6FA)" },
  // top (lightest, catches the light)
  { transform: "rotateX(90deg) translateZ(var(--half))", background: "linear-gradient(135deg, #B9EEFF, #B4A9F8)" },
  // bottom (darkest)
  { transform: "rotateX(-90deg) translateZ(var(--half))", background: "linear-gradient(135deg, #6F68E8, #C25FD6)" },
];

export function GradientCube({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center [perspective:1200px]", className)}
      style={{ "--size": "clamp(160px, 20vw, 260px)", "--half": "calc(var(--size) / 2)" } as CSSProperties}
    >
      <div className="animate-[shape-float_8s_ease-in-out_-2s_infinite] motion-reduce:animate-none">
        <div
          className="relative size-[var(--size)] animate-[cube-spin_24s_linear_infinite] [transform-style:preserve-3d] motion-reduce:animate-none motion-reduce:[transform:rotateX(-22deg)_rotateY(-35deg)]"
        >
          {faces.map(({ transform, background }) => (
            <div
              key={transform}
              className="absolute inset-0 border border-white/40 [backface-visibility:hidden]"
              style={{ transform, background }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
