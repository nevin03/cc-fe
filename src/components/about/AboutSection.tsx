import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui";
import { AboutVisual } from "./AboutVisual";
import { Reveal } from "@/components/motion/Reveal";
// import { GlassStackVisual } from "./GlassStackVisual";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-20 lg:py-28">
      {/* Top-left band: the same glass sweep rotated 180°, entering from the top edge and exiting left. */}
      <AboutVisual
        idPrefix="sweep-top"
        className="pointer-events-none absolute left-0 top-0 hidden h-[78%] w-[24%] rotate-180 md:block"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:min-h-[560px] lg:grid-cols-2">
        <Reveal className="relative z-10 flex flex-col items-start gap-6">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-body-md font-medium text-white">
            About Us
          </span>
          <h2 className="max-w-2xl text-[40px] font-medium leading-[1.15] tracking-tight text-white md:text-[56px]">
            <span className="block">Ideas into products.</span>
            <span className="block">Products into impact.</span>
          </h2>
          <p className="max-w-xl text-body-lg text-white/70 md:text-[20px] md:leading-[1.7]">
            We build technology-driven products that solve meaningful problems. From the first concept to a scalable
            solution, {siteConfig.name} turns ambitious ideas into products people love to use.
          </p>
        </Reveal>

        {/* Previous design — isometric glass stack: */}
        {/* <GlassStackVisual className="pointer-events-none mx-auto w-full max-w-md lg:max-w-[560px]" /> */}
      </Container>

      <AboutVisual className="pointer-events-none mt-12 h-[380px] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-1/2" />
    </section>
  );
}
