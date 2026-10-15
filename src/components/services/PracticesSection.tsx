import { practices } from "@/data/services";
import { Section, SectionHeading } from "@/components/ui";
import { PracticeCard } from "./PracticeCard";
import { Reveal } from "@/components/motion/Reveal";

export function PracticesSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        layout="split"
        eyebrow="Specialized Competencies"
        title="Six Core Engineering Practices"
        description="Structured for rapid integration into Fortune 500 ecosystems and hyper-scale venture backbones."
      />
      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice, index) => (
          <Reveal key={practice.code} index={index} className="[&>*]:h-full">
            <PracticeCard {...practice} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
