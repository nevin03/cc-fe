import Image from "next/image";
import { cn } from "@/lib/cn";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function Avatar({ src, alt, size = 40, className }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("shrink-0 rounded-full object-cover ring-2 ring-primary-fixed", className)}
      style={{ width: size, height: size }}
    />
  );
}
