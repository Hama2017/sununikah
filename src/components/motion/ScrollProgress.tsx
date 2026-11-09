"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gold bar under the header showing reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <motion.div
      aria-hidden
      className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-gold"
      style={{ scaleX }}
    />
  );
}
