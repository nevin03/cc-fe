import { offices } from "@/data/contact";
import { Container, SectionHeading } from "@/components/ui";
import { OfficeCard } from "./OfficeCard";
import { Reveal } from "@/components/motion/Reveal";

export function OfficesSection() {
  return (
    <Container as="section" className="py-16">
      <SectionHeading
        layout="split"
        eyebrow="Global Presence"
        title="Distributed Command Hubs"
        description="Strategic infrastructure laboratories and architectural hubs strategically placed across core financial and tech corridors."
        titleClassName="text-on-surface"
        className="mb-8"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {offices.map((office, index) => (
          <Reveal key={office.city} index={index} className="[&>*]:h-full">
            <OfficeCard {...office} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
