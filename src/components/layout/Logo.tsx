import Link from "next/link";
import { ROUTES, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  textClassName?: string;
}

/** Text-only wordmark linking home. */
export function Logo({ textClassName }: LogoProps) {
  return (
    <Link href={ROUTES.home} className="flex shrink-0 items-center">
      <span className={cn("bg-clip-text text-title-md tracking-tight text-transparent", textClassName)}>
        {siteConfig.name}
      </span>
    </Link>
  );
}
