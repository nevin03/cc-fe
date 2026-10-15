import { careersEmail, openRoles } from "@/data/company";
import { Badge, Button, Section, SectionHeading } from "@/components/ui";
import { RoleCard } from "./RoleCard";
import { Reveal } from "@/components/motion/Reveal";

export function CareersSection() {
  return (
    <Section tone="muted">
      <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Careers"
          title="Build Mission-Critical Systems With Us"
          description="Staff+ engineering culture, real production scale, and pods that ship alongside the world's most demanding platform teams."
          className="max-w-2xl"
        />
        <Badge tone="amber" dot="pulse" className="shrink-0 font-bold">
          {openRoles.length} OPEN ROLES // HIRING
        </Badge>
      </div>
      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
        {openRoles.map((role, index) => (
          <Reveal key={role.title} index={index} className="[&>*]:h-full">
            <RoleCard {...role} />
          </Reveal>
        ))}
      </div>
      <div className="flex flex-col items-center gap-space-sm text-center">
        <p className="text-body-md text-on-surface-variant">Don&apos;t see your role? We&apos;re always meeting exceptional engineers.</p>
        <Button href={`mailto:${careersEmail}`} variant="soft">
          Send an Open Application
        </Button>
      </div>
    </Section>
  );
}
