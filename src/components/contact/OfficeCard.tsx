import Image from "next/image";
import type { Office } from "@/data/contact";
import { Badge, Icon } from "@/components/ui";
import { OfficeClock } from "./OfficeClock";

export function OfficeCard({ division, city, address, phone, tag, timeZone, zoneLabel, image }: Office) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-surface-container-high/70 bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="relative h-44 w-full">
          <Image src={image} alt={`Map of ${city}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-label-sm uppercase tracking-wide text-electric-purple">{division}</span>
            <Badge tone="magenta" square className="shrink-0 px-2 py-0.5 font-medium text-on-surface">
              <Icon name="schedule" className="text-xs text-radiant-coral" />
              <OfficeClock timeZone={timeZone} zoneLabel={zoneLabel} />
            </Badge>
          </div>
          <h3 className="text-title-md font-bold text-on-surface">{city}</h3>
          <address className="mt-2 text-body-sm not-italic text-on-surface-variant">
            {address[0]}
            <br />
            {address[1]}
          </address>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-surface-container-low px-6 pb-6 pt-4">
        <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="font-mono text-code-sm text-outline hover:text-electric-purple">
          {phone}
        </a>
        <Badge tone="purple" square className="border-0 px-2 py-0.5">
          {tag}
        </Badge>
      </div>
    </article>
  );
}
