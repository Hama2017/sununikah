"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const CYCLE_SECONDS = 5;

/** Keeps dissolving a blur away, to illustrate a photo being revealed. */
export function BlurDissolve({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ filter: ["blur(9px)", "blur(0px)", "blur(0px)", "blur(9px)"] }}
      transition={{
        duration: CYCLE_SECONDS,
        times: [0, 0.35, 0.8, 1],
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
