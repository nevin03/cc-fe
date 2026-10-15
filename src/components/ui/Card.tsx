import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "li";
  interactive?: boolean;
}

/** Level-1 resting surface: white, hairline border, ambient shadow. */
export function Card({ as: Tag = "div", interactive, className, ...rest }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border border-surface-container-highest/60 bg-surface-container-lowest shadow-sm",
        interactive && "transition-all hover:border-radiant-coral/50 hover:shadow-md",
        className,
      )}
      {...rest}
    />
  );
}
