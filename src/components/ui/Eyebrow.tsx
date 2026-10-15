import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  /** `label` = sans uppercase overline, `code` = monospace telemetry overline. */
  variant?: "label" | "code";
  className?: string;
  children: ReactNode;
}

export function Eyebrow({ variant = "label", className, children }: EyebrowProps) {
  return (
    <span
      className={cn(
        "block uppercase text-vivid-magenta",
        variant === "label" ? "text-label-md tracking-wider" : "font-mono text-code-sm font-semibold tracking-wider",
        className,
      )}
    >
      {children}
    </span>
  );
}
