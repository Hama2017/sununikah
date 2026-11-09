"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { EASE_SERENE, VIEWPORT_ONCE } from "./motion.constants";

/** Slow zoom-out on entry, then a depth drift while the page scrolls. */
export function ParallaxLayer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div className="absolute inset-0 scale-[1.16]" style={{ y }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.14 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 2.6, ease: EASE_SERENE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
