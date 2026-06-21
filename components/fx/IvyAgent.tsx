"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, MessageCircle } from "lucide-react";

/**
 * Ivy — AI Receptionist floating widget.
 * Renders a persistent bubble (bottom-left) that opens a full-height
 * drawer containing the live Ivy booking agent iframe.
 * Exposes a global `window.__openIvy()` so any page component can
 * trigger it (e.g. hero CTA, homepage band).
 */

const IVY_URL = "https://ivyanimation.netlify.app/";

export default function IvyAgent() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [show, setShow] = useState(false);

  // Reveal the floating affordance only after the hero scrolls away,
  // so it never overlaps the hero booking form / primary CTA.
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop pulse ring after first 8 seconds
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 8000);
    return () => clearTimeout(t);
  }, []);

  // Global opener — allows other components to open the drawer
  useEffect(() => {
    (window as any).__openIvy = () => setOpen(true);
    return () => { delete (window as any).__openIvy; };
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Signal the canvas mascot to hide + pause its render loop while chatting.
    document.documentElement.classList.toggle("ivy-panel-open", open);
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Floating bubble — bottom-left */}
      <AnimatePresence>
        {false && show && !open && (
          <motion.button
            key="ivy-bubble"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            onClick={() => setOpen(true)}
            aria-label="Talk to Ivy, our AI receptionist"
            className="fixed bottom-20 left-5 z-40 hidden md:flex items-center gap-3 rounded-full border border-pearl/15 bg-ink/95 px-2 py-2 pr-5 text-pearl shadow-deep backdrop-blur transition hover:-translate-y-0.5 hover:bg-ink"
          >
            {/* Starfish avatar */}
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-[20px]">
              ✦
              {pulse && (
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
              )}
            </span>
            <div className="leading-tight text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-glow">AI Receptionist</div>
              <div className="text-[13.5px] font-semibold">Talk to Ivy</div>
            </div>
            <Mic className="h-4 w-4 text-pearl/70" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile sticky Ivy bar */}
      <AnimatePresence>
        {false && show && !open && (
          <motion.button
            key="ivy-mobile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            onClick={() => setOpen(true)}
            aria-label="Talk to Ivy, our AI receptionist"
            className="fixed bottom-[88px] left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-ink text-pearl shadow-deep md:hidden"
          >
            <span className="relative flex items-center justify-center text-[24px] leading-none text-gold-glow">
              ✦
              {pulse && (
                <span className="absolute inset-[-10px] animate-ping rounded-full bg-gold/30" />
              )}
            </span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-ink shadow-soft">
              <MessageCircle className="h-3 w-3" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Drawer overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="ivy-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
            />

            {/* Drawer panel */}
            <motion.div
              key="ivy-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-ink shadow-deep md:w-[480px]"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-pearl/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-[18px] shadow-glowAmber">
                    ✦
                  </span>
                  <div className="leading-tight">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-gold-glow">AI Receptionist</div>
                    <div className="text-[15px] font-semibold text-pearl">Ivy · The Ivywall</div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close Ivy"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-pearl/15 text-pearl/70 transition hover:border-pearl/40 hover:text-pearl"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* iframe */}
              <iframe
                src={IVY_URL}
                title="Ivy — AI Receptionist"
                allow="microphone; camera"
                className="flex-1 w-full border-0 bg-ink"
              />

              {/* Footer note */}
              <div className="border-t border-pearl/10 px-5 py-3 text-center text-[11px] text-pearl/40">
                Ivy is an AI — responses may not always be perfect. For urgent needs call{" "}
                <a href="tel:+639171662184" className="text-gold-glow hover:underline">+63 917 166 2184</a>.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
