import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Material Symbols ligature name, e.g. `check_circle`. */
  name: string;
  filled?: boolean;
}

export function Icon({ name, filled, className, style, ...rest }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols text-2xl leading-none select-none", className)}
      style={filled ? { fontVariationSettings: "'FILL' 1", ...style } : style}
      {...rest}
    >
      {name}
    </span>
  );
}
