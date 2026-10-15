import { Icon, PulseDot } from "@/components/ui";

export function NocCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-electric-purple via-[#5804C8] to-[#6a04bf] p-6 text-on-primary shadow-md">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-10 size-48 rounded-full bg-gradient-to-br from-radiant-coral/30 to-electric-amber/20 blur-2xl" />
      <div className="relative flex items-start justify-between">
        <span className="flex items-center gap-2 rounded border border-radiant-coral/30 bg-white/10 px-2.5 py-1 font-mono text-code-sm font-bold text-radiant-coral backdrop-blur-sm">
          <PulseDot className="size-1.5 bg-radiant-coral" animate="ping" />
          LIVE ESCALATION
        </span>
        <Icon name="support_agent" className="text-electric-amber" />
      </div>
      <h3 className="relative mt-4 text-headline-sm">24/7 Mission-Critical NOC</h3>
      <p className="relative mt-1 text-body-sm text-on-primary/80">
        Active enterprise contract holders with Sev-1 and Sev-2 incidents can dial direct bypass circuits.
      </p>
      <div className="relative mt-5 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/20 p-3 backdrop-blur-md">
        <div>
          <span className="block text-label-sm text-on-primary/70">Enterprise Hotline</span>
          <a href="tel:+18884092286" className="font-mono text-code-sm font-bold tracking-wider hover:text-electric-amber">
            +1 (888) 409-CAT-NOC
          </a>
        </div>
        <span className="rounded bg-electric-amber px-2.5 py-1 font-mono text-code-sm font-bold text-electric-amber-dark shadow-sm">
          PIN READY
        </span>
      </div>
    </div>
  );
}
