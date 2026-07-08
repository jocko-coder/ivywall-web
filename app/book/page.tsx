"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BookingCard from "@/components/booking/BookingCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const BG = [
  "/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg",
  "/photos/BWPlus_Ivywall_03_Pool.jpg",
  "/photos/BWPlus_Ivywall_16_Pool_Area.jpg",
  "/photos/BWPlus_Ivywall_14_Aerial_DJI0002.jpg",
];

export default function BookEntryPage() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setI((x) => (x + 1) % BG.length), 6000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* full-bleed cycling backdrop */}
      <div className="absolute inset-0 z-0">
        {BG.map((src, k) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: k === i ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/45" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="w-full max-w-[540px]"
        >
          <BookingCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Link
            href="/offers"
            className="group mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 transition hover:text-white"
          >
            View packages &amp; offers
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
