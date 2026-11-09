"use client";

import { motion } from "motion/react";
import { EASE_SERENE, VIEWPORT_ONCE } from "./motion.constants";

/** Draws the gold outline of the arch, as if traced by hand. */
export function ArchStroke({ d }: { d: string }) {
  return (
    <motion.path
      d={d}
      className="stroke-gold"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 2.4, delay: 0.5, ease: EASE_SERENE }}
    />
  );
}
