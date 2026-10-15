import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/site";
import { Icon } from "@/components/ui";

export function ArchitectureTeaser() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-surface-container-high/60 bg-surface-container-low shadow-sm">
      <div className="relative h-32">
        <Image
          src="/images/ops-center.jpg"
          alt="Codecat Technologies operations center with network monitoring workstations"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent" />
      </div>
      <div className="relative bg-surface-container-lowest p-5 pt-0">
        <span className="text-label-sm uppercase tracking-wider text-vivid-magenta">
          Need Immediate Architecture Review?
        </span>
        <p className="mt-1 text-body-sm text-on-surface-variant">
          Download our Enterprise Security &amp; Infrastructure Whitepaper directly or request a targeted system
          benchmark report.
        </p>
        <Link
          href={ROUTES.products}
          className="mt-4 inline-flex items-center gap-1.5 text-label-md text-electric-purple transition-colors hover:text-vivid-magenta"
        >
          Review Security Specs
          <Icon name="north_east" className="text-base" />
        </Link>
      </div>
    </div>
  );
}
