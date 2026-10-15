import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { Option } from "@/types";
import { fieldBase, fieldVariants, type FieldVariant } from "./form-styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly Option[];
  variant?: FieldVariant;
}

export function Select({ options, variant = "compact", className, ...rest }: SelectProps) {
  return (
    <select className={cn(fieldBase, fieldVariants[variant], "cursor-pointer", className)} {...rest}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
