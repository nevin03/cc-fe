import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { PulseDot } from "./PulseDot";

const tones = {
  coral: "bg-radiant-coral-soft text-radiant-coral border-radiant-coral/20",
  amber: "bg-electric-amber-muted text-electric-amber-dark border-electric-amber/30",
  purple: "bg-electric-purple-soft text-electric-purple border-surface-glass-border",
  magenta: "bg-surface-container text-vivid-magenta border-surface-glass-border",
  neutral: "bg-surface-container text-on-surface-variant border-surface-container-highest/60",
  glass: "bg-white/10 text-white border-white/15 backdrop-blur-md",
} as const;

const dotTones: Record<keyof typeof tones, string> = {
  coral: "bg-radiant-coral",
  amber: "bg-electric-amber",
  purple: "bg-radiant-coral",
  magenta: "bg-radiant-coral",
  neutral: "bg-outline",
  glass: "bg-electric-amber",
};

interface BadgeProps {
  tone?: keyof typeof tones;
  /** Shows a leading status dot; `"pulse"` animates it. */
  dot?: boolean | "pulse";
  square?: boolean;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "neutral", dot, square, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 border px-2.5 py-1 font-mono text-code-sm font-semibold",
        square ? "rounded" : "rounded-full",
        tones[tone],
        className,
      )}
    >
      {dot && <PulseDot className={cn("size-1.5", dotTones[tone])} animate={dot === "pulse"} />}
      {children}
    </span>
  );
}
