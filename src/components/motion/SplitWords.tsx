"use client";

import { motion } from "motion/react";
import { EASE_SERENE } from "./motion.constants";

const WORD_STAGGER = 0.08;

type SplitWordsProps = {
  text: string;
  delay?: number;
};

/** Raises each word of a title from behind a mask, one after the other. */
export function SplitWords({ text, delay = 0 }: SplitWordsProps) {
  return text.split(" ").map((word, index) => (
    <span key={`${word}-${index}`} className="-mb-2 inline-block overflow-hidden pb-2 align-top">
      <motion.span
        className="inline-block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: delay + index * WORD_STAGGER, ease: EASE_SERENE }}
      >
        {word}&nbsp;
      </motion.span>
    </span>
  ));
}
