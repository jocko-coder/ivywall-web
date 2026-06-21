"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * Subtle "there's more below" cue for tall pinned/sticky sections that can
 * otherwise read as the end of the page. Aesthetic, low-key, desktop-only.
 * Pass a MotionValue `opacity` (derived from the section's scroll progress)
 * so it fades out near the section's end instead of lingering.
 */
export default function ScrollHint({
  label,
  opacity,
  className = "bottom-5",
}: {
  label?: string;
  opacity?: MotionValue<number>;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const text = label ?? t("common.keepScrolling");
  return (
    <motion.div
      style={opacity ? { opacity } : undefined}
      className={`pointer-events-none absolute inset-x-0 z-20 flex flex-col items-center gap-1.5 ${className}`}
    >
      <span className="text-[9.5px] font-semibold uppercase tracking-[0.32em] text-pearl/65">{text}</span>
      <motion.span
        animate={reduce ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-pearl/25 bg-pearl/5 backdrop-blur-sm"
      >
        <ChevronDown className="h-3.5 w-3.5 text-gold-glow" />
      </motion.span>
    </motion.div>
  );
}
