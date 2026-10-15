import { serviceKpis } from "@/data/services";
import { Container, PulseDot } from "@/components/ui";
import { KpiCard } from "./KpiCard";
import { TelemetryCard } from "./TelemetryCard";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-xl">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-10 size-96 rounded-full bg-vivid-magenta/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 size-80 rounded-full bg-electric-purple/10 blur-2xl" />

      <Container className="relative z-10 flex flex-col gap-space-lg">
        <div className="flex flex-wrap items-center gap-space-xs font-mono text-code-sm font-semibold text-radiant-coral">
          <PulseDot className="bg-radiant-coral" />
          <span className="uppercase tracking-wider">CAPABILITIES • ENTERPRISE PRACTICE</span>
          <span className="text-outline-variant">/</span>
          <span className="text-on-surface-variant">SYS-VER 4.2</span>
        </div>

        <div className="grid grid-cols-1 items-end gap-space-lg lg:grid-cols-12">
          <Reveal className="flex flex-col gap-space-sm lg:col-span-8">
            <h2 className="text-display-xl-mobile tracking-tight text-on-surface md:text-display-xl">
              Enterprise Services <br />
              <span className="bg-gradient-to-r from-electric-purple via-vivid-magenta to-radiant-coral bg-clip-text text-transparent">
                &amp; Solutions
              </span>
            </h2>
            <p className="max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
              End-to-end technical execution from architectural blueprinting to continuous platform reliability. We
              engineer distributed resilience for global enterprise backbones.
            </p>
          </Reveal>
          <TelemetryCard />
        </div>

        <div className="grid grid-cols-2 gap-space-md pt-space-md md:grid-cols-4">
          {serviceKpis.map((kpi, index) => (
            <Reveal key={kpi.code} index={index} className="[&>*]:h-full">
              <KpiCard {...kpi} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
