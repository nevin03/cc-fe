import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  eyebrowVariant?: "label" | "code";
  title: ReactNode;
  description?: ReactNode;
  /** `split` places the description to the right of the title on desktop. */
  layout?: "stack" | "center" | "split";
  as?: "h1" | "h2";
  titleClassName?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = "label",
  title,
  description,
  layout = "stack",
  as: Title = "h2",
  titleClassName,
  className,
}: SectionHeadingProps) {
  const heading = (
    <div className={cn("flex flex-col gap-space-xs", layout === "center" && "mx-auto max-w-2xl text-center")}>
      {eyebrow && <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>}
      <Title className={cn("text-headline-lg-mobile text-electric-purple md:text-headline-lg", titleClassName)}>
        {title}
      </Title>
      {description && layout !== "split" && (
        <p className="mt-1 text-body-md text-on-surface-variant">{description}</p>
      )}
    </div>
  );

  if (layout !== "split") return <Reveal className={className}>{heading}</Reveal>;

  return (
    <Reveal className={cn("flex flex-col justify-between gap-space-md md:flex-row md:items-end", className)}>
      {heading}
      {description && <p className="max-w-md text-body-md text-on-surface-variant">{description}</p>}
    </Reveal>
  );
}
