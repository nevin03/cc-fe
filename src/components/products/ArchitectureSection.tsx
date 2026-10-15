import { ingestNodes, runtimeNodes } from "@/data/platform";
import { Container, SectionHeading } from "@/components/ui";
import { CoreEngineCard } from "./CoreEngineCard";
import { IntegrationList } from "./IntegrationList";
import { Reveal } from "@/components/motion/Reveal";

export function ArchitectureSection() {
  return (
    <Container as="section" className="py-space-xl">
      <Reveal className="relative overflow-hidden rounded-xl border border-surface-container-highest/60 bg-surface-container-lowest p-space-lg shadow-lg lg:p-space-xl">
        <SectionHeading
          eyebrowVariant="code"
          eyebrow="SYSTEM BLUEPRINT // INTEGRATIONS"
          title="Unified Multi-Cloud Fabric Architecture"
          description="Codecat platforms execute natively across top tier hyper-scalers and bare-metal Kubernetes orchestrators without vendor lock-in."
          titleClassName="text-primary"
          className="mb-space-xl max-w-2xl"
        />
        <div className="relative grid grid-cols-1 items-center gap-space-md lg:grid-cols-4">
          <IntegrationList kind="ingest" title="01. INGEST & HYPER-SCALERS" nodes={ingestNodes} />
          <CoreEngineCard />
          <IntegrationList kind="runtime" title="03. RUNTIMES & EDGES" nodes={runtimeNodes} />
        </div>
      </Reveal>
    </Container>
  );
}
