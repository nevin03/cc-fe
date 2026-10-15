import { Badge, Container, Icon, PulseDot } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";

export function ContactHero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[980px] max-w-[200vw] -translate-x-1/2 rounded-full bg-gradient-to-b from-electric-purple/15 via-radiant-coral/10 to-transparent blur-3xl"
      />
      <Container as="section" className="relative pb-12 pt-10">
        <div className="flex flex-col justify-between gap-6 border-b border-surface-container-high pb-6 md:flex-row md:items-end">
          <Reveal className="flex max-w-3xl flex-col gap-3">
            <Badge tone="magenta" dot="pulse" className="max-w-full py-1 tracking-wide">
              <span className="truncate">SYSTEM DISPATCH // GLOBAL ARCHITECTURE ADVISORY</span>
            </Badge>
            <h2 className="text-display-xl-mobile tracking-tight text-on-surface md:text-display-xl">
              Get in Touch with Our Engineers &amp; Advisors
            </h2>
            <p className="max-w-2xl text-body-lg text-on-surface-variant">
              Have an engineering challenge or looking to modernize your tech stack? Let&apos;s discuss your roadmap
              with senior platform architects and cloud systems experts.
            </p>
          </Reveal>

          <div className="flex w-fit shrink-0 items-center gap-4 rounded-xl border border-surface-container-high bg-surface-container-low p-4 shadow-sm">
            <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-electric-purple to-vivid-magenta shadow-md shadow-electric-purple/25">
              <Icon name="timer" className="text-electric-amber" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <PulseDot className="bg-electric-amber" animate={false} />
                <span className="text-label-sm uppercase tracking-wider text-vivid-magenta">SLO Guaranteed</span>
              </div>
              <span className="text-title-md font-bold text-on-surface">&lt; 2h Response Time</span>
              <span className="text-body-sm text-on-surface-variant">Tier-1 engineering escalation</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
