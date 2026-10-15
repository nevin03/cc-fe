import { Badge, ProgressBar } from "@/components/ui";

export function TelemetryCard() {
  return (
    <div className="flex flex-col gap-space-xs rounded-xl border border-surface-container-high bg-surface-container-low p-space-md shadow-sm lg:col-span-4">
      <div className="flex items-center justify-between pb-space-xs">
        <span className="text-label-sm uppercase tracking-wider text-outline">Cluster Telemetry</span>
        <Badge tone="amber" className="border-electric-amber/40 px-2 py-0.5 font-bold">
          ACTIVE NODE
        </Badge>
      </div>
      <div className="flex items-baseline gap-space-xs">
        <span className="text-headline-lg text-electric-purple">99.995%</span>
        <span className="text-body-sm text-on-surface-variant">Fleet Uptime SLA</span>
      </div>
      <ProgressBar value={94} label="Fleet uptime" />
      <span className="pt-1 font-mono text-code-sm text-on-surface-variant">2,480+ Microservices Managed Globally</span>
    </div>
  );
}
