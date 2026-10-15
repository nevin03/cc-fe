import { engagementWindows, inboxes } from "@/data/contact";
import { Icon, PulseDot } from "@/components/ui";
import { ArchitectureTeaser } from "./ArchitectureTeaser";
import { InfoPanel } from "./InfoPanel";
import { NocCard } from "./NocCard";

export function ContactSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <NocCard />

      <InfoPanel icon="alternate_email" iconClassName="text-vivid-magenta" title="Direct Inboxes">
        <ul className="space-y-3">
          {inboxes.map(({ email, purpose }) => (
            <li key={email}>
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between rounded-lg border border-transparent bg-surface-container-low p-3 transition-colors hover:border-surface-glass-border hover:bg-surface-container"
              >
                <span className="flex flex-col">
                  <span className="text-label-md font-semibold text-on-surface transition-colors group-hover:text-vivid-magenta">
                    {email}
                  </span>
                  <span className="text-body-sm text-on-surface-variant">{purpose}</span>
                </span>
                <Icon name="chevron_right" className="text-outline transition-all group-hover:translate-x-0.5 group-hover:text-vivid-magenta" />
              </a>
            </li>
          ))}
        </ul>
      </InfoPanel>

      <InfoPanel icon="schedule" iconClassName="text-electric-purple" title="Engagement Windows">
        <dl className="grid grid-cols-2 gap-3">
          {engagementWindows.map(({ label, value, detail }) => (
            <div key={label} className="rounded-lg bg-surface-container-low p-3">
              <dt className="block text-label-sm uppercase text-on-surface-variant">{label}</dt>
              <dd className="text-body-md font-bold text-on-surface">{value}</dd>
              <dd className="mt-0.5 font-mono text-code-sm text-on-surface-variant">{detail}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between border-t border-surface-container-low pt-2">
          <span className="flex items-center gap-2 text-body-sm text-on-surface">
            <Icon name="schedule" className="text-base text-electric-amber" />
            Platform Status:
          </span>
          <span className="flex items-center gap-1.5 font-mono text-code-sm font-bold text-electric-purple">
            <PulseDot className="bg-electric-amber" /> 99.998% UPTIME
          </span>
        </div>
      </InfoPanel>

      <ArchitectureTeaser />
    </aside>
  );
}
