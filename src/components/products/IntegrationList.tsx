import { cn } from "@/lib/cn";
import type { IntegrationNode } from "@/data/platform";
import { Icon } from "@/components/ui";

interface IntegrationListProps {
  title: string;
  nodes: IntegrationNode[];
  /** `ingest` shows status dots, `runtime` shows check marks. */
  kind: "ingest" | "runtime";
}

export function IntegrationList({ title, nodes, kind }: IntegrationListProps) {
  const isIngest = kind === "ingest";

  return (
    <div className="space-y-3">
      <span className="mb-1 block font-mono text-code-sm text-outline">{title}</span>
      <ul className="space-y-3">
        {nodes.map(({ icon, title: nodeTitle, detail }) => (
          <li
            key={nodeTitle}
            className="flex items-center justify-between gap-3 rounded-xl border border-surface-container-highest/40 bg-surface-container-low p-space-md shadow-sm transition hover:border-vivid-magenta/30 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <Icon name={icon} className={isIngest ? "text-electric-purple" : "text-vivid-magenta"} />
              <div>
                <h4 className="text-title-md text-on-surface">{nodeTitle}</h4>
                <p className="font-mono text-code-sm text-on-surface-variant">{detail}</p>
              </div>
            </div>
            {isIngest ? (
              <span aria-label="Connected" className="size-2.5 shrink-0 rounded-full bg-radiant-coral" />
            ) : (
              <Icon name="check" className={cn("text-[20px] font-bold text-radiant-coral")} aria-label="Supported" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
