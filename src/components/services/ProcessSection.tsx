import { processSteps } from "@/data/services-delivery";
import { Reveal } from "@/components/motion/Reveal";
import { Card, Section, SectionHeading } from "@/components/ui";

export function ProcessSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        layout="split"
        eyebrow="Rigorous Methodology"
        title="Proven 4-Step Execution Process"
        description="Tested across 140+ mission-critical infrastructure deployments. No ambiguous handoffs."
      />
      <ol className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map(({ step, title, description, deliverable }, index) => (
          <Reveal as="li" key={step} index={index} className="[&>*]:h-full">
            <Card className="relative flex flex-col justify-between overflow-hidden p-space-lg">
              <div className="relative z-10 flex flex-col gap-space-sm">
                <span aria-hidden="true" className="select-none text-display-xl leading-none text-surface-container-high">
                  {step}
                </span>
                <h3 className="text-headline-sm font-bold text-on-surface">{title}</h3>
                <p className="text-body-sm text-on-surface-variant">{description}</p>
              </div>
              <div className="flex items-center gap-space-xs pt-space-md font-mono text-code-sm font-semibold text-radiant-coral">
                <span className="size-1.5 shrink-0 rounded-full bg-radiant-coral" />
                Deliverable: {deliverable}
              </div>
            </Card>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
