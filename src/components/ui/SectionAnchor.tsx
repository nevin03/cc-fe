import type { ReactNode } from "react";
import type { SectionId } from "@/config/site";
import { cn } from "@/lib/cn";

interface SectionAnchorProps {
  id: SectionId;
  label: string;
  className?: string;
  children: ReactNode;
}

/** Scroll target for a single-page section; offsets the fixed header. */
export function SectionAnchor({ id, label, className, children }: SectionAnchorProps) {
  return (
    <div id={id} role="region" aria-label={label} className={cn("scroll-mt-20", className)}>
      {children}
    </div>
  );
}
