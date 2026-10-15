import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { fieldBase, fieldVariants, type FieldVariant } from "./form-styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: FieldVariant;
}

export function Input({ variant = "compact", className, ...rest }: InputProps) {
  return <input className={cn(fieldBase, fieldVariants[variant], className)} {...rest} />;
}
