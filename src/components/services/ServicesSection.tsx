import { AboutVisual } from "@/components/about/AboutVisual";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { serviceOfferings } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

// Previous building blocks, ready to re-use:
//   ServicesHero, PracticesSection, EngagementSection, ProcessSection, ConsultationSection (all in this folder).

/** Services: intro and a glass card grid over a black stage with the About section's sweeps, mirrored left-to-right. */
export function ServicesSection() {
  return (
    <section aria-label="Services" className="relative w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* Top-right band: About's top-left sweep mirrored, entering from the top edge and exiting right. */}
      <AboutVisual
        idPrefix="services-sweep-top"
        className="pointer-events-none absolute right-0 top-0 hidden h-[78%] w-[24%] rotate-180 -scale-x-100 md:block"
      />
      {/* Main band on the left half, sweeping the opposite way to About's; sits behind the cards. */}
      <AboutVisual
        idPrefix="services-sweep"
        className="pointer-events-none absolute inset-y-0 left-0 w-full -scale-x-100 lg:w-1/2"
      />

      <Container className="relative z-10 flex flex-col gap-14 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-body-md font-medium text-white">Services</span>
          <h2 className="max-w-xl text-[40px] font-medium leading-[1.15] tracking-tight text-white md:text-[56px]">
            End-to-end expertise, from idea to impact.
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOfferings.map(({ icon, title, description }, index) => (
            <Reveal
              key={title}
              as="li"
              index={index}
              y={40}
              className="flex flex-col gap-6"
            >
              <ServiceIcon name={icon} shineDelay={index * 0.3} />
              <div className="flex flex-col gap-3">
                <h3 className="text-[22px] font-medium leading-tight tracking-tight text-white">{title}</h3>
                <p className="text-body-md leading-relaxed text-white/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
