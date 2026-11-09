"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_SERENE, VIEWPORT_ONCE } from "./motion.constants";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  delay?: number;
  className?: string;
};

/** Fades and lifts its content the first time it enters the viewport. */
export function Reveal({ children, as = "div", delay = 0, className }: RevealProps) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.9, delay, ease: EASE_SERENE }}
    >
      {children}
    </Tag>
  );
}
