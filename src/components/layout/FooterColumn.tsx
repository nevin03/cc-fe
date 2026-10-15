import Link from "next/link";
import type { FooterColumnData } from "@/data/footer";

export function FooterColumn({ title, links }: FooterColumnData) {
  return (
    <div className="flex flex-col gap-space-sm">
      <h4 className="text-label-md uppercase tracking-wider text-white">{title}</h4>
      <ul className="flex flex-col gap-space-xs">
        {links.map(({ label, href, badge }) => (
          <li key={label}>
            <Link href={href} className="text-body-sm text-white/60 transition-colors hover:text-white">
              {label}
              {badge && (
                <span className="ml-1 rounded bg-electric-amber px-1.5 py-0.5 text-[10px] font-bold text-on-background">
                  {badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
