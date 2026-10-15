import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface FormFieldProps {
  id: string;
  label: ReactNode;
  /** Shows the coral required marker. */
  markRequired?: boolean;
  /** Right-aligned helper on the label row (moves the marker next to the label). */
  hint?: ReactNode;
  gap?: "sm" | "md";
  className?: string;
  children: ReactNode;
}

const RequiredMark = () => (
  <span aria-hidden="true" className="text-body-sm font-bold text-radiant-coral">
    *
  </span>
);

export function FormField({ id, label, markRequired, hint, gap = "sm", className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col", gap === "sm" ? "gap-space-xs" : "gap-2", className)}>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="flex items-center gap-1 text-label-md font-semibold text-on-surface">
          {label}
          {markRequired && hint && <RequiredMark />}
        </label>
        {hint ?? (markRequired && <RequiredMark />)}
      </div>
      {children}
    </div>
  );
}
