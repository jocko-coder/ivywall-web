"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

/**
 * Cinematic intro — "oversized type" preloader. Plays once per browser session.
 *
 * Deep-ink stage; the wordmark tracks in wide→tight (pearl + gold), a gold rule
 * draws, then the whole panel lifts up to reveal the site. Minimal, modern.
 * Entrance is CSS-driven (reliable); exit lift is framer. Click anywhere to skip.
 */
const SESSION_KEY = "ivywall-intro-played";
const DURATION_MS = 2200;

let __fired = false;

export default function CinematicIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = useCallback(() => {
    setShow(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!mounted || reduce || __fired) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      __fired = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      setShow(true);
      document.body.style.overflow = "hidden";
      const t = setTimeout(dismiss, DURATION_MS);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
        __fired = false;
      };
    } catch {
      /* ignore storage failures */
    }
  }, [mounted, reduce, dismiss]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          onClick={dismiss}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[300] flex cursor-pointer flex-col items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(120% 90% at 50% 38%, #ffffff 0%, #FBF6EC 75%)" }}
        >
          <div className="intro-eyebrow text-[10px] uppercase tracking-[0.44em] text-gold-deep">
            Best Western Plus
          </div>

          <div className="mt-4 text-center leading-[0.9]">
            <div className="intro-word whitespace-nowrap font-display font-bold text-ink text-[clamp(34px,8vw,104px)]">
              The Ivywall
            </div>
            <div className="intro-word intro-word--2 -mt-1 whitespace-nowrap font-display font-light italic text-coral text-[clamp(26px,6vw,76px)]">
              Panglao
            </div>
          </div>

          <div className="intro-rule mt-7 h-px w-[130px] bg-gradient-to-r from-transparent via-gold-deep to-transparent" />

          <div className="intro-sub mt-4 text-[10px] uppercase tracking-[0.36em] text-ink/40">
            · Alona Beach · Bohol ·
          </div>

          <div className="intro-skip absolute bottom-8 text-[9px] uppercase tracking-[0.3em] text-ink/35">
            Tap to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
