"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gold bar pinned to the very top of the viewport.
 * Fills from left to right as the user scrolls the page.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[200] h-[3px] bg-gradient-to-r from-coral-deep via-coral to-gold-glow"
      aria-hidden
    />
  );
}
