import { careersEmail, type Role } from "@/data/company";
import { Badge, Card, Icon } from "@/components/ui";

export function RoleCard({ title, team, location, type, tags }: Role) {
  return (
    <Card as="article" interactive className="group flex flex-col justify-between gap-space-md p-space-lg">
      <div className="flex flex-col gap-space-sm">
        <span className="font-mono text-code-sm font-bold uppercase text-radiant-coral">{team}</span>
        <h3 className="text-headline-sm text-on-surface transition-colors group-hover:text-electric-purple">{title}</h3>
        <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-body-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <Icon name="location_on" className="text-base text-vivid-magenta" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="schedule" className="text-base text-vivid-magenta" />
            {type}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-space-sm border-t border-surface-container-highest/40 pt-space-md">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} className="px-2 py-0.5 font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <a
          href={`mailto:${careersEmail}?subject=${encodeURIComponent(`Application: ${title}`)}`}
          className="inline-flex items-center gap-1 text-label-md text-electric-purple transition-colors hover:text-vivid-magenta"
        >
          Apply
          <Icon name="arrow_forward" className="text-[16px]" />
        </a>
      </div>
    </Card>
  );
}
