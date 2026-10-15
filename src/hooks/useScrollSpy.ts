"use client";

import { useEffect, useState } from "react";

/** Probe line just below the fixed 80px header: the section under it decides the header's style. */
const PROBE_OFFSET_PX = 96;

/**
 * Tracks which section sits directly beneath the fixed header.
 * Recomputed on every scroll/resize (throttled to one check per frame) so short sections are never skipped.
 * Returns `initialId` until the first check (and when no section exists).
 */
export function useScrollSpy<T extends string>(ids: readonly T[], initialId: T | null = null) {
  const [activeId, setActiveId] = useState<T | null>(initialId);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // If sections overlap, the visible one is the last in DOM order (later sections paint over earlier ones).
      const covering = elements.filter((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        return top <= PROBE_OFFSET_PX && bottom > PROBE_OFFSET_PX;
      });
      const visible = covering.at(-1);
      if (visible) setActiveId(visible.id as T);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return activeId;
}
