"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";
import clsx from "clsx";

/**
 * Subtle 3D perspective tilt + glare. Wrap any card-shaped element.
 * GPU-only transforms, prefers-reduced-motion safe.
 */
export default function Tilt3D({
  children,
  className,
  max = 8,
  scale = 1.015,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  glare?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 220, damping: 20 });
  const sy = useSpring(py, { stiffness: 220, damping: 20 });

  const rotY = useTransform(sx, [0, 1], [max, -max]);
  const rotX = useTransform(sy, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["100%", "0%"]);
  const glareY = useTransform(sy, [0, 1], ["100%", "0%"]);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
    py.set(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)));
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={!reduce ? { scale } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
        transformPerspective: 1100,
      }}
      className={clsx("relative will-change-transform", className)}
    >
      <div style={{ transform: "translateZ(0)" }}>{children}</div>
      {glare && !reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          style={{ opacity: 0.45 }}
        >
          <motion.div
            className="absolute h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: glareX,
              top: glareY,
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.45), rgba(255,255,255,0) 70%)",
              mixBlendMode: "screen",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
