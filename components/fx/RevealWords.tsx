"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: string;
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of each word's animation (seconds) */
  wordDuration?: number;
  /** Stagger between each word (seconds) */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  /** Optional static wrapper className (e.g. italic, color) */
  emSlices?: { text: string; className: string }[];
}

/**
 * Splits text into words and reveals each one via a clip-path slide-up.
 * Useful for section headings to add a scroll-driven editorial feel.
 */
export default function RevealWords({
  children,
  className = "",
  delay = 0,
  wordDuration = 0.55,
  stagger = 0.06,
  as: Tag = "h2",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as any, { once: true, margin: "-60px" });

  const words = children.split(" ");

  return (
    <Tag ref={ref as any} className={`${className} overflow-visible`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? {} : { y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: wordDuration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {/* Non-breaking space between words */}
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
