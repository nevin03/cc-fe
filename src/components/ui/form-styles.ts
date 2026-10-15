export const fieldVariants = {
  /** Services consultation form & footer newsletter. */
  compact:
    "h-10 px-space-sm rounded-lg border border-surface-container-high bg-surface-container-low focus:bg-surface-container-lowest focus:ring-2 focus:ring-electric-purple",
  /** Contact page intake form. */
  comfortable:
    "h-11 px-4 rounded-lg border border-transparent bg-surface-container-low transition-all duration-150 focus:border-vivid-magenta focus:bg-surface-container-lowest focus:shadow-sm focus:ring-2 focus:ring-vivid-magenta/20",
} as const;

export type FieldVariant = keyof typeof fieldVariants;

export const fieldBase = "w-full text-body-md text-on-surface outline-none placeholder:text-outline";
