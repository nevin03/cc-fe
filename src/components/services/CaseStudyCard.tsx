import type { CaseStudy } from "@/data/services-delivery";
import { Avatar, Badge, Card, MetricGrid } from "@/components/ui";

export function CaseStudyCard({ sector, period, title, summary, metrics, author }: CaseStudy) {
  return (
    <Card
      as="article"
      className="flex flex-col justify-between p-space-lg transition-all hover:border-vivid-magenta/30 sm:p-space-xl"
    >
      <div className="flex flex-col gap-space-md">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-space-xs">
          <Badge tone="purple" className="border-0 font-bold">
            {sector}
          </Badge>
          <span className="font-mono text-code-sm text-outline">{period}</span>
        </div>
        <h3 className="text-headline-sm text-on-surface sm:text-headline-md">{title}</h3>
        <p className="text-body-md text-on-surface-variant">{summary}</p>
        <MetricGrid
          stats={metrics}
          className="rounded-xl border border-surface-container-high bg-surface-container-low p-space-md"
        />
      </div>
      <div className="flex items-center gap-space-sm pt-space-md">
        <Avatar src={author.avatar} alt={author.name} />
        <div className="flex flex-col">
          <span className="text-title-md text-on-surface">{author.name}</span>
          <span className="text-body-sm text-on-surface-variant">{author.role}</span>
        </div>
      </div>
    </Card>
  );
}
