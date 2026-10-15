import { cn } from "@/lib/cn";

interface PulseDotProps {
  className?: string;
  animate?: boolean | "ping";
}

/** Small round status indicator used across telemetry badges. */
export function PulseDot({ className, animate = true }: PulseDotProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-2 shrink-0 rounded-full",
        animate === "ping" ? "animate-ping" : animate && "animate-pulse",
        className,
      )}
    />
  );
}
