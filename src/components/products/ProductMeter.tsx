import { cn } from "@/lib/cn";
import type { ProductMeter as ProductMeterData } from "@/data/products";
import type { Stat } from "@/types";
import { MetricGrid, ProgressBar } from "@/components/ui";

const SPARKLINE = "M0,35 Q30,10 60,25 T120,15 T180,30 T240,8 T300,18";

function Sparkline() {
  return (
    <div className="flex h-12 w-full items-end">
      <svg aria-hidden="true" className="h-10 w-full text-radiant-coral" fill="none" preserveAspectRatio="none" viewBox="0 0 300 40">
        <path d={SPARKLINE} stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
        <path d={`${SPARKLINE} L300,40 L0,40 Z`} fill="currentColor" fillOpacity="0.18" />
      </svg>
    </div>
  );
}

interface ProductMeterProps {
  meter: ProductMeterData;
  stats: Stat[];
}

/** Benchmark panel: live gauge (bar or sparkline) plus a boxed KPI row. */
export function ProductMeter({ meter, stats }: ProductMeterProps) {
  const hasBar = meter.percent !== undefined;

  return (
    <div className="mb-space-md rounded-xl border border-surface-container-highest/50 bg-surface-container-low p-space-md shadow-sm">
      <div className={cn("flex items-center justify-between gap-2", hasBar ? "mb-space-xs" : "mb-2")}>
        <span className="font-mono text-code-sm text-on-surface">{meter.label}</span>
        <span className={cn("shrink-0 font-mono text-code-sm font-bold", meter.valueClassName)}>{meter.value}</span>
      </div>
      {hasBar ? (
        <ProgressBar
          value={meter.percent!}
          label={meter.label}
          className="bg-surface-container"
          barClassName={cn("from-electric-purple via-vivid-magenta to-radiant-coral", meter.barClassName)}
        />
      ) : (
        <Sparkline />
      )}
      <MetricGrid stats={stats} variant="boxed" className="mt-space-sm pt-space-xs" />
    </div>
  );
}
