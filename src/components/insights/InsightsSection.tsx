import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { digitalRevolution, ownBrands } from "@/data/insights";
import { cn } from "@/lib/cn";

function Article({ title, paragraphs, className }: { title: string; paragraphs: string[]; className?: string }) {
  return (
    <Reveal className={cn("flex max-w-2xl flex-col items-start gap-6", className)}>
      <h2 className="text-[40px] font-medium leading-[1.15] tracking-tight text-on-surface md:text-[56px]">{title}</h2>
      <div className="flex flex-col gap-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-body-lg leading-[1.8] text-on-surface-variant md:text-[18px]">
            {paragraph}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

/** Insights: two alternating text blocks on white, each paired with a photo. */
export function InsightsSection() {
  return (
    <section aria-label="Insights" className="relative w-full overflow-hidden bg-white">
      {/* Block 1: text left, photo right. */}
      <div className="relative pt-14 pb-8 lg:pt-16 lg:pb-10">
        <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <span className="rounded-full bg-surface-container px-4 py-1.5 text-body-md font-medium text-on-surface">Insights</span>
            <Article {...digitalRevolution} />
          </div>
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/space.jpg"
              alt="Open-plan office with desks and monitors in front of large windows"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </div>

      {/* Block 2: photo left, text right. */}
      <div className="relative pt-8 pb-14 lg:pt-10 lg:pb-16">
        <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-last aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg lg:order-first">
            <Image
              src="/images/clients.jpg"
              alt="Two people shaking hands to close a business agreement"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 55%" }}
            />
          </Reveal>
          <Article {...ownBrands} />
        </Container>
      </div>
    </section>
  );
}
