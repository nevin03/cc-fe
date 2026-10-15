import { cn } from "@/lib/cn";

interface ProgressBarProps {
  /** 0–100 */
  value: number;
  className?: string;
  barClassName?: string;
  label?: string;
}

export function ProgressBar({ value, className, barClassName, label }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-full overflow-hidden rounded-full bg-surface-container-high", className)}
    >
      <div
        className={cn("h-full rounded-full bg-gradient-to-r from-electric-purple to-radiant-coral", barClassName)}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
