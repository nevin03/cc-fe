import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { digitalRevolution, ownBrands } from "@/data/insights";
import { cn } from "@/lib/cn";
import { GradientCube } from "./GradientCube";

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

/** Static 2D gradient orb (matches the Products blob's palette): cyan left, violet centre, pink lower right, soft highlight. */
const ORB_BACKGROUND = [
  "radial-gradient(circle at 42% 18%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 9%)",
  "radial-gradient(circle at 8% 45%, rgba(102,214,250,0.95) 0%, rgba(102,214,250,0) 38%)",
  "radial-gradient(circle at 78% 78%, rgba(233,124,232,0.95) 0%, rgba(233,124,232,0) 50%)",
  "radial-gradient(circle at 50% 50%, #8b86f6 0%, #9d9cf7 70%, #b4a9f8 100%)",
].join(", ");

/** Insights: two alternating text blocks on white, each paired with a static gradient shape. */
export function InsightsSection() {
  return (
    <section aria-label="Insights" className="relative w-full overflow-hidden bg-white">
      {/* Block 1: text left, circle right. */}
      <div className="relative pt-14 pb-8 lg:pt-16 lg:pb-10">
        <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <span className="rounded-full bg-surface-container px-4 py-1.5 text-body-md font-medium text-on-surface">Insights</span>
            <Article {...digitalRevolution} />
          </div>
          <div
            aria-hidden="true"
            className="mx-auto aspect-square w-full max-w-[420px] rounded-full animate-[shape-float_7s_ease-in-out_infinite,shape-hue_9s_ease-in-out_infinite] motion-reduce:animate-none"
            style={{ background: ORB_BACKGROUND }}
          />
        </Container>
      </div>

      {/* Block 2: cube left, text right. */}
      <div className="relative pt-8 pb-14 lg:pt-10 lg:pb-16">
        <Container className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <GradientCube className="order-last py-10 lg:order-first" />
          <Article {...ownBrands} />
        </Container>
      </div>
    </section>
  );
}
