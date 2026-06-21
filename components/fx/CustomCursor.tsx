"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Premium two-ring custom cursor — replaces the browser default.
 * - Inner dot: snaps immediately to pointer
 * - Outer ring: follows with a spring lag (depth cue)
 * - Hover state: dot grows + fills coral, ring contracts
 * - Touch devices: renders nothing (cursor: auto preserved)
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until proven otherwise
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);

  const ringX = useSpring(dotX, { stiffness: 180, damping: 18, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 18, mass: 0.6 });

  useEffect(() => {
    setMounted(true);

    // Only activate on non-touch pointer devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setIsTouch(false);

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"], input, textarea, select, label, summary, [tabindex]')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, [dotX, dotY]);

  if (!mounted || isTouch) return null;

  return (
    <>
      {/* Inner dot — instant follow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 14 : clicking ? 6 : 9,
          height: hovering ? 14 : clicking ? 6 : 9,
          backgroundColor: hovering ? "#F5700A" : "#221C18",
          opacity: 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Outer ring — spring lag */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full border will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 38 : clicking ? 28 : 34,
          height: hovering ? 38 : clicking ? 28 : 34,
          borderColor: hovering ? "#F5700A" : "#221C18",
          opacity: hovering ? 0.55 : 0.35,
          scale: clicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
