import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-electric-purple to-vivid-magenta text-on-primary shadow-sm hover:opacity-95",
  soft: "bg-surface-container text-electric-purple hover:bg-electric-purple hover:text-on-primary",
  white: "bg-white text-electric-purple font-bold shadow-sm hover:bg-electric-amber",
  glass: "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  link: "h-auto px-0 text-electric-purple hover:text-vivid-magenta",
} as const;

const sizes = {
  sm: "h-9 px-space-md",
  md: "h-10 px-space-lg",
  lg: "h-12 px-8",
  xl: "px-space-xl py-3.5 text-title-md",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkProps = BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
type NativeProps = BaseProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

export function buttonClasses({ variant = "primary", size = "md", fullWidth, className }: Omit<BaseProps, "children">) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-sans text-label-md transition-all active:scale-[0.99] disabled:pointer-events-none disabled:opacity-70",
    sizes[size],
    variants[variant],
    fullWidth && "w-full",
    className,
  );
}

/** Renders a Next.js `<Link>` when `href` is given, otherwise a `<button>`. */
export function Button(props: LinkProps | NativeProps) {
  const { variant, size, fullWidth, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, fullWidth, className });

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as LinkProps;
    // Protocol links (mailto:, tel:, external) bypass client-side routing.
    if (/^(mailto:|tel:|https?:)/.test(href)) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as NativeProps;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
