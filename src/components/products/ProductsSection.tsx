import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { HoloBlobLazy } from "./HoloBlobLazy";

// Previous building blocks, ready to re-use:
//   ProductCatalog, ArchitectureSection, ComparisonMatrix, SandboxCta (all in this folder).

export function ProductsSection() {
  return (
    <section aria-label="Products" className="w-full overflow-hidden bg-surface py-space-xl">
      <Container className="grid min-h-[60vh] grid-cols-1 items-center gap-space-xl lg:grid-cols-2">
        <Reveal className="flex flex-col items-start gap-6">
          <h2 className="max-w-2xl text-[40px] font-medium leading-[1.15] tracking-tight text-on-surface md:text-[56px]">
            <span className="block">Shape Your Ideas into</span>
            <span className="block">Meaningful Solutions.</span>
          </h2>
          <p className="max-w-xl text-body-lg text-on-surface-variant md:text-[20px] md:leading-[1.7]">
            From ideation and design to product strategy, scalable architecture, and development, we provide end-to-end
            support to turn your vision into reality and empower digital transformation.
          </p>
        </Reveal>
        <HoloBlobLazy className="mx-auto aspect-square w-full max-w-[560px]" />
      </Container>
    </section>
  );
}
