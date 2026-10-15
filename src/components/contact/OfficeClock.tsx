"use client";

import { useEffect, useState } from "react";

const REFRESH_MS = 30_000;

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(
    new Date(),
  );
}

interface OfficeClockProps {
  timeZone: string;
  zoneLabel: string;
}

/** Live local time; renders a placeholder until mounted to keep SSR output static. */
export function OfficeClock({ timeZone, zoneLabel }: OfficeClockProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatTime(timeZone));
    update();
    const id = window.setInterval(update, REFRESH_MS);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <time suppressHydrationWarning>
      {time ?? "--:--"} {zoneLabel}
    </time>
  );
}
