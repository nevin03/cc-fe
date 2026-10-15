import { caseStudies } from "@/data/services-delivery";
import { Section, SectionHeading } from "@/components/ui";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "@/components/motion/Reveal";

export function CaseStudiesSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Impact Metrics" title="Client Success & Verifiable ROI" />
      <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} index={index} className="[&>*]:h-full">
            <CaseStudyCard {...study} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
