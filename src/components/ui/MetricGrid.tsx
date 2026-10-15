import { cn } from "@/lib/cn";
import { accentText } from "@/lib/accent";
import type { Stat } from "@/types";

interface MetricGridProps {
  stats: readonly Stat[];
  /** `boxed` gives each metric its own tile (product cards). */
  variant?: "plain" | "boxed";
  className?: string;
}

/** Three-up KPI row used in case studies and product cards. */
export function MetricGrid({ stats, variant = "plain", className }: MetricGridProps) {
  const boxed = variant === "boxed";
  return (
    <div className={cn("grid grid-cols-3", boxed ? "gap-2 text-center" : "gap-space-sm", className)}>
      {stats.map(({ value, label, accent = "purple" }) => (
        <div
          key={label}
          className={cn(
            "flex flex-col",
            boxed && "rounded-lg border border-surface-container-highest/40 bg-surface-container-lowest p-2",
          )}
        >
          <span
            className={cn(
              "font-bold",
              boxed ? "text-[13px] leading-tight sm:text-headline-sm" : "text-headline-sm sm:text-headline-md",
              accentText[accent],
            )}
          >
            {value}
          </span>
          <span className={cn("text-on-surface-variant", boxed ? "text-label-sm" : "text-body-sm")}>{label}</span>
        </div>
      ))}
    </div>
  );
}
