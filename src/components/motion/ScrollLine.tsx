"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

/** Vertical gold line that fills as the visitor scrolls through its parent. */
export function ScrollLine() {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });

  return (
    <span ref={ref} aria-hidden className="absolute top-0 bottom-16 left-5.5 w-0.5 -translate-x-1/2">
      <motion.span
        className="block h-full origin-top bg-gold"
        style={{ scaleY: scrollYProgress }}
      />
    </span>
  );
}
