"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** App-wide animation settings: honour the visitor's OS "reduce motion" preference. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
