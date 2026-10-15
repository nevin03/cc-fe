import { mainNav, sectionHref, type SectionId } from "@/config/site";
import { cn } from "@/lib/cn";
import { headerOverlayStyles, headerStyles } from "./header-styles";

interface NavLinksProps {
  activeId: SectionId | null;
  /** Light-on-dark styling while the header floats over the hero video. */
  overlay?: boolean;
  className?: string;
  onNavigate?: () => void;
}

export function NavLinks({ activeId, overlay, className, onNavigate }: NavLinksProps) {
  const styles = overlay ? headerOverlayStyles : headerStyles;

  return (
    <nav aria-label="Main" className={className}>
      {mainNav.map(({ label, id }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={sectionHref(id)}
            onClick={onNavigate}
            aria-current={isActive ? "location" : undefined}
            className={cn("transition-colors", isActive ? styles.active : styles.link)}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
