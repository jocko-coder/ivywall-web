"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Branded cinematic preloader — plays once per browser session.
 *
 * Sequence:
 *   0.0s  coral-deep curtains (top + bottom) fill the screen
 *   0.1s  gold ornament line sweeps in from centre
 *   0.35s Star badge scales in
 *   0.55s wordmark rises in
 *   1.3s  "· Alona Beach · Bohol ·" tagline appears
 *   1.55s gold progress bar fills
 *   2.8s  setTimeout fires → show = false → curtains split (top ↑, bottom ↓)
 *
 * Both curtains are coral-deep — one brand colour, cinematic split reveal.
 */
const SESSION_KEY = "ivywall-intro-played";
const DURATION_MS = 2800;

let __fired = false;

export default function CinematicIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || reduce || __fired) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      __fired = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      setShow(true);
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "";
      }, DURATION_MS);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
        __fired = false;
      };
    } catch {
      /* ignore storage failures */
    }
  }, [mounted, reduce]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[300] flex items-center justify-center pointer-events-none"
        >
          {/* ── Top curtain (coral-deep) — exits UP ── */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-[#c4540a] to-[#9a3f08]"
            initial={{ y: 0 }}
            exit={{ y: "-101%", transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
          />

          {/* ── Bottom curtain (coral-deep) — exits DOWN ── */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-br from-[#c4540a] to-[#9a3f08]"
            initial={{ y: 0 }}
            exit={{ y: "101%", transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
          />

          {/* ── Gold ornament line at curtain seam ── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute left-1/2 top-1/2 z-10 h-px w-[55vw] max-w-[480px] -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-gold-glow to-transparent"
          />

          {/* ── Subtle pearl accent line ── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.35 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute left-1/2 top-1/2 z-10 h-px w-[30vw] max-w-[260px] translate-y-3 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-pearl to-transparent"
          />

          {/* ── BW Plus logo badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute top-1/2 z-10 -mt-24"
          >
            <img
              src="/bw-plus-logo.png"
              alt="Best Western Plus"
              width={72}
              height={72}
              className="mx-auto object-contain"
            />
          </motion.div>

          {/* ── Wordmark + tagline + progress bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
            transition={{ duration: 0.85, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute top-1/2 z-10 mt-6 w-full text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.44em] text-gold-glow">
              Best Western Plus
            </div>
            <div className="mt-2 font-display text-[clamp(32px,4.5vw,64px)] font-medium tracking-tight text-pearl leading-none">
              The Ivywall{" "}
              <em className="font-light italic text-gold-glow">Panglao</em>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-3 text-[10px] uppercase tracking-[0.36em] text-pearl/50"
            >
              · Alona Beach · Bohol ·
            </motion.div>

            {/* gold progress bar */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.55, duration: 0.9, ease: "linear" }}
              className="mx-auto mt-7 h-[2px] w-[110px] origin-left rounded-full bg-gradient-to-r from-pearl/30 via-gold-glow to-pearl/30"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
