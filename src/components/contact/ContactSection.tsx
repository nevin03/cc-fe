import { faqs } from "@/data/contact";
import { Badge, Container, SectionHeading } from "@/components/ui";
import { ContactHero } from "./ContactHero";
import { ContactSidebar } from "./ContactSidebar";
import { FaqAccordion } from "./FaqAccordion";
import { IntakeForm } from "./IntakeForm";
import { OfficesSection } from "./OfficesSection";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <>
      <ContactHero />

      <Container as="section" className="py-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <Reveal className="relative rounded-xl border border-surface-container-high/70 bg-surface-container-lowest p-6 shadow-md sm:p-8 lg:col-span-7 lg:p-10">
            <div className="mb-8 flex flex-col-reverse items-start justify-between gap-3 border-b border-surface-container-low pb-6 sm:flex-row sm:items-center">
              <SectionHeading
                eyebrow="Specification Matrix"
                title="Initiate Technical Consultation"
                titleClassName="text-headline-md text-on-surface md:text-headline-md"
              />
              <Badge tone="purple" square className="shrink-0">
                REQ_ID: #EN-9082
              </Badge>
            </div>
            <IntakeForm />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <ContactSidebar />
          </Reveal>
        </div>
      </Container>

      <OfficesSection />

      <Container as="section" className="py-12 pb-24">
        <Reveal className="rounded-xl border border-surface-container-high/70 bg-surface-container-lowest p-6 shadow-sm sm:p-8 lg:p-12">
          <SectionHeading
            eyebrow="Procurement & Governance"
            title="Frequently Asked Enterprise Questions"
            description="Clear guidelines on contracting, intellectual property protection, security vetting, and preliminary feasibility assessments."
            titleClassName="text-on-surface"
            className="mb-8 max-w-2xl"
          />
          <FaqAccordion items={faqs} />
        </Reveal>
      </Container>
    </>
  );
}
