"use client";

import { mainNav, SECTIONS, type SectionId } from "@/config/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { headerOverlayStyles, headerStyles } from "./header-styles";

/** Nav sections plus sections without a nav link whose background still decides the header style. */
const sectionIds = [...mainNav.map(({ id }) => id), SECTIONS.projects];

interface SiteHeaderProps {
  /** Section treated as active before the scroll-spy reports (null on non-home routes). */
  initialSection?: SectionId | null;
}

/**
 * Fixed header. Transparent with white text over the dark Home and About sections, black over Services,
 * solid white once the content sections scroll into view.
 */
export function SiteHeader({ initialSection = SECTIONS.home }: SiteHeaderProps) {
  const activeId = useScrollSpy(sectionIds, initialSection);
  // Dark sections get white text; Services gets a solid black bar instead of a transparent one.
  // Light sections (Products, Insights) fall through to the default white bar.
  const solidDark = activeId === SECTIONS.services;
  const overlay = activeId === SECTIONS.home || activeId === SECTIONS.about || solidDark;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        headerStyles.shell,
        overlay && headerOverlayStyles.shell,
        solidDark && headerOverlayStyles.solidShell,
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-space-md px-4 sm:px-6 lg:px-12",
          headerStyles.height,
        )}
      >
        <Logo textClassName={overlay ? headerOverlayStyles.brand : headerStyles.brand} />
        <NavLinks activeId={activeId} overlay={overlay} className="hidden items-center gap-space-lg xl:flex" />
        <MobileMenu activeId={activeId} overlay={overlay} />
      </div>
    </header>
  );
}
