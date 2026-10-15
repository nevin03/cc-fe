interface KpiCardProps {
  code: string;
  value: string;
  label: string;
}

export function KpiCard({ code, value, label }: KpiCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-surface-container-highest/60 bg-surface-container-lowest p-space-md shadow-sm transition-colors hover:border-radiant-coral/40">
      <span className="font-mono text-code-sm font-bold text-radiant-coral">{code}</span>
      <span className="mt-1 text-headline-sm text-electric-purple sm:text-headline-md">{value}</span>
      <span className="text-body-sm text-on-surface-variant">{label}</span>
    </div>
  );
}
