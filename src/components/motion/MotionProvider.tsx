"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Honours the visitor's "reduce motion" system setting everywhere. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
