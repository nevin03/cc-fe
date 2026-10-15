import { consultationPerks } from "@/data/services-delivery";
import { Container, Icon, PulseDot } from "@/components/ui";
import { ConsultationForm } from "./ConsultationForm";
import { Reveal } from "@/components/motion/Reveal";

export function ConsultationSection() {
  return (
    <section id="consultation" className="w-full scroll-mt-24 bg-surface-container-low py-space-xl">
      <Container>
        <Reveal className="grid grid-cols-1 overflow-hidden rounded-xl border border-surface-container-highest/60 bg-surface-container-lowest shadow-lg lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-space-lg bg-gradient-to-br from-electric-purple to-vivid-magenta p-space-lg text-on-primary sm:p-space-xl lg:col-span-5">
            <div className="flex flex-col gap-space-md">
              <span className="inline-flex items-center gap-space-xs font-mono text-code-sm font-bold text-electric-amber">
                <PulseDot className="bg-electric-amber" />
                DIRECT ARCHITECT DISPATCH
              </span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg">Schedule an Architectural Evaluation</h2>
              <p className="text-body-md leading-relaxed text-white/90">
                Skip the sales qualification reps. Connect directly with a Principal Cloud Architect to audit your
                immediate infrastructure challenges and get actionable scoping within 48 hours.
              </p>
            </div>
            <ul className="flex flex-col gap-space-sm">
              {consultationPerks.map(({ icon, label }) => (
                <li key={label} className="flex items-center gap-space-sm">
                  <Icon name={icon} className="text-electric-amber" />
                  <span className="text-body-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center p-space-lg sm:p-space-xl lg:col-span-7">
            <ConsultationForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
