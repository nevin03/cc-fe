import Image from "next/image";
import Link from "next/link";
import { ROUTES, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  textClassName?: string;
}

/** CC infinity mark plus wordmark, linking home. */
export function Logo({ textClassName }: LogoProps) {
  return (
    <Link href={ROUTES.home} className="flex shrink-0 items-center gap-2.5">
      {/* SVG needs no resizing, so it skips the image optimizer. */}
      <Image src="/images/codecat-mark.svg" alt="" width={48} height={24} unoptimized priority className="h-6 w-12" />
      <span className={cn("bg-clip-text text-title-md tracking-tight text-transparent", textClassName)}>
        {siteConfig.name}
      </span>
    </Link>
  );
}
