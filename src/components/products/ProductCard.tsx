import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Product } from "@/data/products";
import { Badge, Button, CheckList, Icon } from "@/components/ui";
import { ProductMeter } from "./ProductMeter";

export function ProductCard({ product }: { product: Product }) {
  const { name, tier, icon, iconClassName, cornerClassName, badge, description, meter, stats, features, cta } = product;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-surface-container-highest/70 bg-surface-container-lowest p-space-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-0 top-0 size-32 rounded-bl-full bg-gradient-to-br transition-transform duration-500 group-hover:scale-125",
          cornerClassName,
        )}
      />
      <div>
        <div className="mb-space-md flex flex-col-reverse items-start justify-between gap-space-sm sm:flex-row">
          <div className="flex items-center gap-space-sm">
            <div
              className={cn(
                "flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-on-primary shadow-md",
                iconClassName,
              )}
            >
              <Icon name={icon} className="text-[28px]" />
            </div>
            <div>
              <span className="font-mono text-code-sm font-semibold uppercase tracking-wider text-vivid-magenta">
                {tier}
              </span>
              <h3 className="text-headline-sm text-primary sm:text-headline-md">{name}</h3>
            </div>
          </div>
          <Badge tone={badge.tone} dot className="relative">
            {badge.label}
          </Badge>
        </div>
        <p className="mb-space-md text-body-md leading-relaxed text-on-surface-variant">{description}</p>
        <ProductMeter meter={meter} stats={stats} />
        <CheckList items={features} className="mb-space-lg gap-space-xs" itemClassName="gap-2" />
      </div>

      <div className="flex items-center justify-between gap-space-sm border-t border-surface-container-highest/40 pt-space-md">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-label-md text-electric-purple transition-colors hover:text-vivid-magenta"
        >
          View Documentation
          <Icon name="arrow_forward" className="text-[16px]" />
        </Link>
        <Button size="sm" className="h-auto py-2">
          {cta}
        </Button>
      </div>
    </article>
  );
}
