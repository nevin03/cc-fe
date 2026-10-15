import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { fieldBase, fieldVariants, type FieldVariant } from "./form-styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: FieldVariant;
}

export function Textarea({ variant = "compact", className, ...rest }: TextareaProps) {
  return (
    <textarea
      className={cn(fieldBase, fieldVariants[variant], "h-auto", variant === "compact" ? "p-space-sm" : "p-4", className)}
      {...rest}
    />
  );
}
