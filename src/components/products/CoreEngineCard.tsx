import { Badge, PulseDot } from "@/components/ui";

const flowMetrics = [
  { label: "GLOBAL CONCURRENCY", value: "14.8M REQ / SEC", className: "text-white" },
  { label: "PACKET LOSS RATE", value: "0.00001% (NOMINAL)", className: "text-electric-amber" },
];

/** Central orchestration node of the multi-cloud fabric diagram. */
export function CoreEngineCard() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-electric-purple via-primary to-vivid-magenta p-space-lg text-on-primary shadow-xl lg:col-span-2">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-12 size-64 rounded-full bg-radiant-coral/25 blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-12 -top-12 size-48 rounded-full bg-electric-amber/20 blur-2xl" />

      <div className="relative">
        <div className="mb-space-md flex flex-wrap items-center justify-between gap-2">
          <Badge tone="glass">CORE SYSTEM ENGINE BUS</Badge>
          <span className="flex items-center gap-1.5 font-mono text-code-sm font-bold text-electric-amber">
            <PulseDot className="bg-electric-amber" animate="ping" /> MESH ACTIVE
          </span>
        </div>
        <h3 className="mb-space-xs text-headline-md font-extrabold text-white">Codecat Unified Engine Fabric</h3>
        <p className="mb-space-md text-body-sm leading-relaxed text-on-primary-container">
          Provides intelligent cross-cloud request routing, zero-trust telemetry interception, automated secret
          synchronization, and real-time event aggregation.
        </p>
        <div className="grid grid-cols-1 gap-space-sm font-mono text-code-sm sm:grid-cols-2">
          {flowMetrics.map(({ label, value, className }) => (
            <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
              <span className="block text-[11px] text-white/80">{label}</span>
              <span className={`text-[15px] font-bold ${className}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-space-lg flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pt-space-sm font-mono text-code-sm text-white/90">
        <span>MUTUAL TLS 1.3 PROTOCOL</span>
        <span className="font-bold text-electric-amber">K8s OPERATOR v1.28</span>
      </div>
    </div>
  );
}
