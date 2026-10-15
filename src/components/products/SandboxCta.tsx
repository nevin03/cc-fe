import { ROUTES } from "@/config/site";
import { sandboxPerks } from "@/data/platform";
import { Badge, Button, Container, Icon } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";

export function SandboxCta() {
  return (
    <Container as="section" className="pb-space-xl pt-space-md">
      <Reveal className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-electric-purple via-vivid-magenta to-radiant-coral p-space-lg text-on-primary shadow-2xl sm:p-space-xl">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-electric-amber/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-electric-purple/40 blur-3xl" />

        <div className="relative z-10 max-w-3xl space-y-space-md">
          <Badge tone="glass" dot="pulse" className="max-w-full border-white/20 bg-white/15 font-bold text-electric-amber">
            <span className="truncate">INSTANT CLOUD SANDBOX // NO CREDIT CARD REQUIRED</span>
          </Badge>
          <h2 className="text-display-xl-mobile leading-tight tracking-tight text-white md:text-display-xl">
            Test-drive Codecat in a dedicated enterprise environment.
          </h2>
          <p className="max-w-2xl text-body-lg leading-relaxed text-white/90">
            Spin up an isolated sandbox cluster with 10M simulated events, test our automated multi-cloud mesh routing,
            and review complete compliance reports within 15 minutes.
          </p>
          <div className="flex flex-col items-stretch gap-space-md pt-space-sm sm:flex-row sm:items-center">
            <Button
              href={ROUTES.contact}
              variant="white"
              size="xl"
              className="font-extrabold shadow-lg hover:text-on-background"
            >
              Launch Instant Sandbox
            </Button>
            <Button href={ROUTES.contact} variant="glass" size="xl" className="px-space-lg">
              Schedule Engineering Demo
            </Button>
          </div>
          <ul className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs pt-space-xs font-mono text-code-sm font-semibold text-white/90">
            {sandboxPerks.map((perk) => (
              <li key={perk} className="flex items-center gap-1.5">
                <Icon name="check_circle" className="text-[16px] text-electric-amber" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Container>
  );
}
