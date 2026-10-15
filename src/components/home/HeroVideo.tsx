"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  /** Video URL from the API: an HLS playlist (.m3u8) or a plain file. Until one is provided the stage stays black. */
  src?: string | null;
  /** Plain video file used when the browser cannot play HLS at all. */
  fallbackSrc?: string;
  /** Optional poster frame shown while the video loads. */
  poster?: string;
  /** Accessible description of the video content. */
  label?: string;
}

const isHls = (url: string) => /\.m3u8($|\?)/i.test(url);

/** Full-bleed black stage for the home hero video. Streams HLS natively (Safari) or via hls.js elsewhere. */
export function HeroVideo({ src, fallbackSrc, poster, label = "Codecat Technologies showcase video" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (!isHls(src) || video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    let destroyed = false;
    let hls: import("hls.js").default | undefined;

    // Load hls.js only when needed, so browsers with native HLS never download it.
    import("hls.js").then(({ default: Hls }) => {
      if (destroyed) return;
      if (!Hls.isSupported()) {
        if (fallbackSrc) video.src = fallbackSrc;
        return;
      }
      hls = new Hls({ capLevelToPlayerSize: true });
      hls.loadSource(src);
      hls.attachMedia(video);
    });

    return () => {
      destroyed = true;
      hls?.destroy();
    };
  }, [src, fallbackSrc]);

  return (
    <div className="relative h-full w-full bg-black">
      {src && (
        <video
          key={src}
          ref={videoRef}
          poster={poster}
          aria-label={label}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover"
        />
      )}
      {/* Keeps the transparent header's white nav legible over bright footage. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
    </div>
  );
}
