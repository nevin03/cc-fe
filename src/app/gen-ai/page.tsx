import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button, Container, Eyebrow, Icon } from "@/components/ui";
/** The home page Contact section is hidden for now, so contact links go straight to email. */
const CONTACT_HREF = "mailto:enterprise@codecat.tech?subject=AI%20enquiry";

export const metadata: Metadata = {
  title: "Agentic & Gen AI",
  description: "How Codecat Technologies uses generative and agentic AI in its products to reduce manual effort.",
};

const effortSteps = [
  {
    title: "Automate the repetitive",
    text: "Find the tasks people repeat every day, such as data entry, triage and status updates, and let AI handle them end to end.",
  },
  {
    title: "Draft first, review second",
    text: "AI produces the first draft of emails, reports, code or replies. People spend their time reviewing and improving instead of starting from a blank page.",
  },
  {
    title: "Answer from your own knowledge",
    text: "Connect AI to your documents and systems so teams get accurate answers instantly rather than searching or asking around.",
  },
  {
    title: "Keep a human in the loop",
    text: "Sensitive or high-impact actions always pass through a person, so you save effort without giving up control.",
  },
  {
    title: "Measure and improve",
    text: "Track time saved, accuracy and adoption, then refine prompts, data and workflows based on real results.",
  },
];

const principles = [
  { icon: "lock", title: "Private by design", text: "Your data stays protected and is never used to train public models." },
  { icon: "verified", title: "Accurate & grounded", text: "Answers are grounded in your own trusted sources and checked for quality." },
  { icon: "tune", title: "Fits your stack", text: "We integrate with the tools and platforms your teams already use." },
];

export default function GenAiPage() {
  return (
    <>
      <SiteHeader initialSection={null} />
      <main className="w-full overflow-x-clip bg-surface pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#06021a] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(154,92,240,0.35),transparent_55%),radial-gradient(ellipse_at_20%_90%,rgba(79,123,255,0.25),transparent_50%)]"
          />
          <Container className="relative flex flex-col items-start gap-space-md py-space-xl md:py-28">
            <span className="text-label-md uppercase tracking-wider text-[#ff8fb1]">Agentic &amp; Gen AI</span>
            <h1 className="max-w-3xl text-display-xl-mobile md:text-display-xl">
              Less effort.{" "}
              <span className="bg-gradient-to-r from-[#4f7bff] via-[#9a5cf0] to-[#ff5c8e] bg-clip-text text-transparent">
                More impact.
              </span>
            </h1>
            <p className="max-w-2xl text-body-lg text-white/80 md:text-[20px] md:leading-[1.6]">
              We build generative and agentic AI into our products to take repetitive work off people&apos;s plates, so
              teams can focus on the decisions and ideas that matter.
            </p>
            <div className="flex flex-wrap gap-space-sm pt-space-xs">
              <Button href="#reduce-effort" size="lg">
                See how it works
                <Icon name="arrow_downward" className="text-[18px]" />
              </Button>
              <Button href={CONTACT_HREF} size="lg" variant="glass">
                Talk to our team
              </Button>
            </div>
          </Container>
        </section>

        {/* Minimising effort */}
        <section id="reduce-effort" className="scroll-mt-20 border-y border-surface-container-high/60 bg-surface-container-low py-space-xl">
          <Container className="grid grid-cols-1 gap-space-xl lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col gap-space-xs lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Minimising effort</Eyebrow>
              <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">How AI reduces the work</h2>
              <p className="text-body-md text-on-surface-variant">
                Our approach to cutting manual effort is practical: start with the work that costs the most time, automate
                it safely, and keep improving.
              </p>
              <div className="relative mt-space-md aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/grandma.jpg"
                  alt="Smiling older woman relaxing on a sofa while using a laptop"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "55% center" }}
                />
              </div>
            </div>
            <ul className="flex flex-col gap-space-md">
              {effortSteps.map(({ title, text }) => (
                <li key={title} className="flex gap-space-md">
                  <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-gradient-to-br from-electric-purple to-vivid-magenta" />
                  <div className="flex flex-col gap-1 border-b border-surface-container-high/60 pb-space-md">
                    <h3 className="text-title-md text-on-surface">{title}</h3>
                    <p className="text-body-md text-on-surface-variant">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Principles */}
        <section className="py-space-xl">
          <Container className="flex flex-col gap-space-lg">
            <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-2">
              <div className="flex flex-col gap-space-xs">
                <Eyebrow>Responsible AI</Eyebrow>
                <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">Built to be trusted</h2>
                <p className="max-w-xl text-body-md text-on-surface-variant">
                  AI only saves effort when people can rely on it. We build every feature so teams can use it with
                  confidence, knowing their data is safe and the results are dependable.
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/confidence.jpg"
                  alt="A confident, smiling team standing together outdoors with arms crossed"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
              {principles.map(({ icon, title, text }) => (
                <div key={title} className="flex flex-col gap-space-xs border-t-2 border-electric-purple pt-space-sm">
                  <Icon name={icon} className="text-[28px] text-electric-purple" />
                  <h3 className="text-title-md text-on-surface">{title}</h3>
                  <p className="text-body-md text-on-surface-variant">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-space-xl">
          <Container>
            <div className="flex flex-col items-start justify-between gap-space-md rounded-2xl bg-gradient-to-r from-electric-purple to-vivid-magenta p-space-lg text-white md:flex-row md:items-center md:p-space-xl">
              <div className="flex flex-col gap-space-xs">
                <h2 className="text-headline-md text-white">Ready to put AI to work?</h2>
                <p className="max-w-xl text-body-md text-white/85">
                  Tell us where your team loses the most time, and we&apos;ll show you what AI can take off their plate.
                </p>
              </div>
              <Button href={CONTACT_HREF} variant="white" size="lg" className="shrink-0">
                Start a conversation
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
