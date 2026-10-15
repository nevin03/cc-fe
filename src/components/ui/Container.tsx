import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section";
}

/** Centered 7xl content column with the design system's responsive page margins. */
export function Container({ as: Tag = "div", className, ...rest }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12", className)} {...rest} />;
}
