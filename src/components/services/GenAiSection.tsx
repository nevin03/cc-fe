import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { ROUTES } from "@/config/site";
import { GenAiSphereLazy } from "./GenAiSphereLazy";

/** Centered Gen AI spotlight over an animated glass sphere shader. */
export function GenAiSection() {
  return (
    <section
      aria-label="Generative AI"
      className="relative flex min-h-dvh w-full items-center overflow-hidden bg-[#06021a] py-24"
    >
      <GenAiSphereLazy className="pointer-events-none absolute inset-0" />

      <Container className="relative z-10">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="text-[44px] font-normal leading-[1.15] tracking-tight text-white md:text-[64px]">
            <span className="block">Building What the World</span>
            <span className="block">Needs Next with</span>
            <span className="inline-block bg-gradient-to-r from-[#4f7bff] via-[#9a5cf0] to-[#ff5c8e] bg-clip-text text-transparent">
              Agentic &amp; Gen AI
            </span>
          </h2>
          <p className="max-w-xl text-body-lg text-white/85 md:text-[20px] md:leading-[1.6]">
            The future belongs to businesses that think smarter, build better, and turn emerging possibilities into
            meaningful progress.
          </p>
          <Link
            href={ROUTES.contact}
            className="mt-4 inline-flex items-center gap-3 border border-white/80 px-8 py-4 text-body-md font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Unlock the Potential of AI
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
