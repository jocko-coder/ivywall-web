"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Number stat with a soft fade/slide-in when scrolled into view. We deliberately
 * do NOT count from 0 — that was showing "0" on first paint and on items above
 * the fold, which read as broken. The number is always real; the entrance is
 * tasteful and quick.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  /** legacy — accepted for API stability, unused */
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const formatted =
    decimals > 0 ? Number(value.toFixed(decimals)).toLocaleString() : Math.round(value).toLocaleString();

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : reduce ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}
