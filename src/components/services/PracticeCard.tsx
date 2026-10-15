import type { Practice } from "@/data/services";
import { Badge, Card, Icon } from "@/components/ui";

export function PracticeCard({ code, icon, title, description, tags }: Practice) {
  return (
    <Card as="article" interactive className="group flex flex-col justify-between p-space-lg">
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div className="flex size-12 items-center justify-center rounded-xl bg-radiant-coral-soft text-radiant-coral transition-colors group-hover:bg-gradient-to-br group-hover:from-electric-purple group-hover:to-vivid-magenta group-hover:text-on-primary">
            <Icon name={icon} />
          </div>
          <span className="font-mono text-code-sm font-bold text-radiant-coral">{code}</span>
        </div>
        <div className="flex flex-col gap-space-xs">
          <h3 className="text-headline-sm font-bold text-on-surface transition-colors group-hover:text-electric-purple">
            {title}
          </h3>
          <p className="text-body-md text-on-surface-variant">{description}</p>
        </div>
      </div>
      <div className="mt-space-md flex flex-wrap gap-1.5 pt-space-md">
        {tags.map((tag) => (
          <Badge key={tag} className="px-2 py-0.5 font-medium">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
