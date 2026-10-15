import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui";

interface InfoPanelProps {
  icon: string;
  iconClassName?: string;
  title: string;
  children: ReactNode;
}

/** Titled white sidebar card used for inboxes and engagement windows. */
export function InfoPanel({ icon, iconClassName, title, children }: InfoPanelProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-surface-container-high/70 bg-surface-container-lowest p-6 shadow-sm">
      <h3 className="flex items-center gap-2 text-title-md font-bold text-on-surface">
        <Icon name={icon} className={cn("text-xl", iconClassName)} />
        {title}
      </h3>
      {children}
    </div>
  );
}
