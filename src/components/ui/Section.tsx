import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** `muted` = tinted band with hairline borders top & bottom. */
  tone?: "surface" | "muted";
  containerClassName?: string;
}

/** Full-bleed page band with a centered content container. */
export function Section({ tone = "surface", className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section
      className={cn(
        "w-full py-space-xl",
        tone === "muted" ? "border-y border-surface-container-high/60 bg-surface-container-low" : "bg-surface",
        className,
      )}
      {...rest}
    >
      <Container className={cn("flex flex-col gap-space-xl", containerClassName)}>{children}</Container>
    </section>
  );
}
