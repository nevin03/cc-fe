import { engagementTiers } from "@/data/services";
import { Section, SectionHeading } from "@/components/ui";
import { EngagementCard } from "./EngagementCard";
import { Reveal } from "@/components/motion/Reveal";

export function EngagementSection() {
  return (
    <Section>
      <SectionHeading
        layout="center"
        eyebrow="Operational Flexibility"
        title="Tailored Engagement Frameworks"
        description="Choose the exact contractual model that aligns with your engineering governance and roadmap delivery targets."
      />
      <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-3">
        {engagementTiers.map((tier, index) => (
          <Reveal key={tier.title} index={index} className="[&>*]:h-full">
            <EngagementCard {...tier} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
