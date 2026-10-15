"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const elements = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
} as const;

/** Tuning for the scroll reveal — slow and noticeable by design. */
const DURATION = 1.2;
const BLUR_PX = 8;
/** Fraction of the element that must be on screen before it animates. */
const VISIBLE_AMOUNT = 0.3;
/** Per-item stagger for lists, capped so long lists don't lag. */
const STAGGER_STEP = 0.15;
const MAX_STAGGER = 0.6;

interface RevealProps {
  children: ReactNode;
  as?: keyof typeof elements;
  /** Seconds before the animation starts. */
  delay?: number;
  /** Position in a list; adds a capped stagger on top of `delay`. */
  index?: number;
  /** Starting vertical offset in px. */
  y?: number;
  className?: string;
}

/**
 * Fades, lifts, and un-blurs its children into place the first time they scroll into view.
 * Server components can render it; only this wrapper ships to the client.
 */
export function Reveal({ children, as = "div", delay = 0, index = 0, y = 60, className }: RevealProps) {
  const Component = elements[as];
  const totalDelay = delay + Math.min(index * STAGGER_STEP, MAX_STAGGER);

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${BLUR_PX}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: VISIBLE_AMOUNT }}
      transition={{ duration: DURATION, delay: totalDelay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
