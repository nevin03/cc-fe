import { ROUTES } from "@/config/site";
import { cn } from "@/lib/cn";
import type { EngagementTier } from "@/data/services";
import { Button, CheckList, Icon } from "@/components/ui";

export function EngagementCard({ tier, icon, title, description, features, cta, featured }: EngagementTier) {
  return (
    <article
      className={cn(
        "relative flex flex-col justify-between rounded-xl p-space-lg sm:p-space-xl",
        featured
          ? "bg-gradient-to-br from-electric-purple to-vivid-magenta text-on-primary shadow-xl ring-1 ring-white/20 lg:-translate-y-2"
          : "border border-surface-container-highest/60 bg-surface-container-lowest shadow-sm",
      )}
    >
      {featured && (
        <span className="absolute -top-3 right-6 rounded-full bg-electric-amber px-3 py-1 text-label-sm uppercase tracking-wider text-on-background shadow-sm">
          Most Selected
        </span>
      )}
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between pb-space-sm">
          <span className={cn("font-mono text-code-sm", featured ? "text-white/80" : "text-on-surface-variant")}>
            {tier}
          </span>
          <Icon name={icon} className={featured ? "text-electric-amber" : "text-radiant-coral"} />
        </div>
        <h3 className={cn("text-headline-md", featured ? "text-white" : "text-on-surface")}>{title}</h3>
        <p className={cn("text-body-md", featured ? "text-white/90" : "text-on-surface-variant")}>{description}</p>
        <CheckList
          items={features}
          className={cn("pt-space-sm", featured && "text-white")}
          iconClassName={featured ? "text-electric-amber" : undefined}
        />
      </div>
      <div className="pt-space-lg">
        <Button
          href={ROUTES.consultation}
          variant={featured ? "white" : "soft"}
          fullWidth
          className="px-space-md"
        >
          {cta}
        </Button>
      </div>
    </article>
  );
}
