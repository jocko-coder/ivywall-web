"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

/**
 * Floating, scroll-aware "Reserve a stay" CTA. Appears after the hero
 * scrolls off; hidden on the booking flow itself.
 */
export default function FloatingBookCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/book")) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="fixed bottom-20 right-5 z-40 hidden md:block"
        >
          <Link href="/book" className="group">
            <div className="flex items-center gap-3 rounded-full border border-pearl/15 bg-palm-night/95 px-2 py-2 pr-5 text-pearl shadow-deep backdrop-blur transition hover:-translate-y-0.5 hover:bg-palm-night">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-ink">
                <Calendar className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold-glow">Plan your stay</div>
                <div className="text-[13.5px] font-semibold">Check availability</div>
              </div>
              <ArrowRight className="h-4 w-4 text-pearl/70 transition group-hover:translate-x-0.5 group-hover:text-gold-glow" />
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
