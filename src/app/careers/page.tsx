import type { Metadata } from "next";
import Image from "next/image";
import { CareerList } from "@/components/careers/CareerList";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button, Container, Eyebrow, Icon } from "@/components/ui";
import { careersEmail } from "@/data/company";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at Codecat Technologies. Apply online with your CV.",
};

const values = [
  {
    icon: "rocket_launch",
    title: "Real ownership",
    text: "Small senior teams own their systems end to end, from design review to production.",
  },
  {
    icon: "school",
    title: "Keep learning",
    text: "Time and budget for courses, certifications and conferences that grow your craft.",
  },
  {
    icon: "diversity_3",
    title: "Supportive team",
    text: "Mentorship, code reviews that teach, and colleagues who care about doing it right.",
  },
  {
    icon: "balance",
    title: "Sustainable pace",
    text: "Flexible hours and hybrid work, so great engineering never costs your wellbeing.",
  },
];

const steps = [
  { title: "Apply online", text: "Pick a role and send your details with your CV." },
  { title: "Intro call", text: "A short conversation with our hiring team about you and the role." },
  { title: "Technical interview", text: "A practical discussion with the engineers you would work with." },
  { title: "Offer", text: "We move quickly and keep you informed at every step." },
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader initialSection={null} />
      <main className="w-full overflow-x-clip bg-surface pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-surface-container-high/60 bg-gradient-to-b from-electric-purple-soft/60 to-surface">
          <Container className="flex flex-col items-start gap-space-md py-space-xl md:py-28">
            <Eyebrow>Careers at Codecat</Eyebrow>
            <h1 className="max-w-3xl text-display-xl-mobile text-on-surface md:text-display-xl">
              Build the systems the world relies on.
            </h1>
            <p className="max-w-2xl text-body-lg text-on-surface-variant">
              We design and run cloud architecture and high-assurance software for organisations that can&apos;t
              afford downtime. Join a team where your work ships to production and matters.
            </p>
            <div className="flex flex-wrap gap-space-sm pt-space-xs">
              <Button href="#open-roles" size="lg">
                View open roles
                <Icon name="arrow_downward" className="text-[18px]" />
              </Button>
              <Button href={`mailto:${careersEmail}`} size="lg" variant="soft">
                Send open application
              </Button>
            </div>
          </Container>
        </section>

        {/* Why join: banner styled like the home page story carousel. */}
        <section aria-labelledby="why-join-heading" className="relative w-full overflow-hidden bg-white pt-12 pb-space-xl lg:pt-16">
          <div className="relative px-4 sm:px-8 lg:px-16">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-x-[100vw] top-1/2 h-px -translate-y-1/2 bg-black/15" />
              <div className="relative grid grid-cols-1 overflow-hidden bg-black md:min-h-[300px] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
                <div className="relative h-52 md:order-2 md:h-auto">
                  <Image
                    src="/images/desk-job.jpg"
                    alt="Hands working at a keyboard and mouse on a clean white desk"
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "center 40%" }}
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:bg-gradient-to-r md:from-black md:via-black/30" />
                </div>
                <div className="relative flex flex-col justify-center gap-4 px-8 py-8 md:pl-[clamp(2rem,6vw,6rem)] md:pr-6">
                  <span className="text-label-md uppercase tracking-wider text-[#f08a4b]">Why join us</span>
                  <h2 id="why-join-heading" className="font-serif text-[30px] leading-[1.15] tracking-tight text-[#f5d9a8] md:text-[38px]">
                    A place to do your best work
                  </h2>
                  <p className="max-w-md font-serif text-[17px] leading-relaxed text-[#f5d9a8]/90">
                    Senior teams, real responsibility and room to grow, at a pace you can keep up for years.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-space-lg grid max-w-7xl grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon, title, text }) => (
                <div key={title} className="flex flex-col gap-space-xs border-t-2 border-black pt-space-sm">
                  <Icon name={icon} className="text-[28px] text-electric-purple" />
                  <h3 className="text-title-md text-on-surface">{title}</h3>
                  <p className="text-body-md text-on-surface-variant">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section id="open-roles" className="scroll-mt-24 border-y border-surface-container-high/60 bg-surface-container-low py-space-xl">
          <Container>
            <CareerList />
          </Container>
        </section>

        {/* Hiring process */}
        <section className="py-space-xl">
          <Container className="flex flex-col gap-space-lg">
            <div className="flex max-w-2xl flex-col gap-space-xs">
              <Eyebrow>Hiring process</Eyebrow>
              <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">What to expect</h2>
            </div>
            <ol className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ title, text }, index) => (
                <li key={title} className="flex flex-col gap-space-xs border-t-2 border-electric-purple pt-space-sm">
                  <span className="font-mono text-code-sm font-bold text-electric-purple">0{index + 1}</span>
                  <h3 className="text-title-md text-on-surface">{title}</h3>
                  <p className="text-body-md text-on-surface-variant">{text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="pb-space-xl">
          <Container>
            <div className="flex flex-col items-start justify-between gap-space-md rounded-2xl bg-gradient-to-r from-electric-purple to-vivid-magenta p-space-lg text-white md:flex-row md:items-center md:p-space-xl">
              <div className="flex flex-col gap-space-xs">
                <h2 className="text-headline-md text-white">Don&apos;t see the right role?</h2>
                <p className="max-w-xl text-body-md text-white/85">
                  We&apos;re always happy to meet talented people. Send us your CV and tell us what you&apos;d like to work on.
                </p>
              </div>
              <Button href={`mailto:${careersEmail}`} variant="white" size="lg" className="shrink-0">
                Email {careersEmail}
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
