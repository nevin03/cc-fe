"use client";

import { useState } from "react";
import type { SectionId } from "@/config/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui";
import { NavLinks } from "./NavLinks";
import { headerOverlayStyles, headerStyles } from "./header-styles";

interface MobileMenuProps {
  activeId: SectionId | null;
  /** Toggle button styling while the header floats over the hero video. */
  overlay?: boolean;
}

export function MobileMenu({ activeId, overlay }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex size-10 items-center justify-center rounded-lg transition-colors",
          overlay ? headerOverlayStyles.toggle : headerStyles.toggle,
        )}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className={cn("absolute inset-x-0 top-full border-b px-4 pb-6 pt-2 sm:px-6", headerStyles.panel)}
        >
          <NavLinks activeId={activeId} onNavigate={close} className="flex flex-col items-start gap-1 [&>a]:py-2.5" />
        </div>
      )}
    </div>
  );
}
