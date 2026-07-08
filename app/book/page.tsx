"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookingWidget from "@/components/booking/BookingWidget";
import SectionDivider from "@/components/ui/SectionDivider";
import { offers } from "@/lib/mock/offers";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Scattered white-framed photos that cross the giant word and frame the
 *  booking window. All share one `phase` → they slide up together. */
type Slot = {
  srcs: string[];
  alt: string;
  style: React.CSSProperties;
  rotate: number;
  delay: number;
};

const SLOTS: Slot[] = [
  {
    srcs: [
      "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg",
      "/photos/BWPlus_Ivywall_17_Facade_Teraza.jpg",
      "/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg",
    ],
    alt: "The Ivywall facade and pool",
    style: { left: "3%", top: "6%", width: "clamp(230px,23vw,450px)", aspectRatio: "3 / 4" },
    rotate: -7,
    delay: 0.15,
  },
  {
    srcs: [
      "/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg",
      "/photos/BWPlus_Ivywall_08_Bar_Lounge.jpg",
      "/photos/BWPlus_Ivywall_12_Morning_Teraza.jpg",
    ],
    alt: "Teraza rooftop and lounge",
    style: { right: "4%", top: "11%", width: "clamp(200px,19vw,380px)", aspectRatio: "4 / 5" },
    rotate: 6,
    delay: 0.28,
  },
  {
    srcs: [
      "/photos/BWPlus_Ivywall_05_Deluxe_Room_SeaView.jpg",
      "/photos/BWPlus_Ivywall_04_Superior_Room.jpg",
      "/photos/BWPlus_Ivywall_06_Premier_Room.jpg",
    ],
    alt: "Rooms at The Ivywall",
    style: { left: "6%", bottom: "6%", width: "clamp(210px,21vw,410px)", aspectRatio: "1 / 1" },
    rotate: 5,
    delay: 0.42,
  },
  {
    srcs: [
      "/photos/BWPlus_Ivywall_16_Pool_Area.jpg",
      "/photos/BWPlus_Ivywall_03_Pool.jpg",
      "/photos/BWPlus_Ivywall_15_Agos_Pool_Bar.jpg",
    ],
    alt: "Pool and poolside bar",
    style: { right: "2%", bottom: "9%", width: "clamp(240px,24vw,480px)", aspectRatio: "4 / 5" },
    rotate: -6,
    delay: 0.56,
  },
];

function CyclingShot({ srcs, alt, style, rotate, delay, phase }: Slot & { phase: number }) {
  const idx = phase % srcs.length;
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.9, y: 30, rotate: rotate * 0.4 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className="absolute z-20 hidden overflow-hidden rounded-[2px] border-[6px] border-white bg-white shadow-deep lg:block"
      style={style}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={srcs[idx]}
          src={srcs[idx]}
          alt={alt}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.66, 0, 0.34, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
    </motion.figure>
  );
}

const WORD = "IVYWALL".split("");

export default function BookEntryPage() {
  const reduce = useReducedMotion();
  const [entered, setEntered] = useState(false);
  const [phase, setPhase] = useState(0);

  // entrance: hold the giant word, then flash → booking window
  useEffect(() => {
    if (reduce) {
      setEntered(true);
      return;
    }
    const t = setTimeout(() => setEntered(true), 1550);
    return () => clearTimeout(t);
  }, [reduce]);

  // shared clock → photos slide together
  useEffect(() => {
    const iv = setInterval(() => setPhase((p) => p + 1), 3400);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="relative overflow-x-clip">
      {/* ─────────── TIDESCAPE-STYLE STAGE · word ⟶ booking window ─────────── */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
        {/* giant wordmark — behind the photos, fades to the booking window */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-[3vw]"
          animate={{
            opacity: entered ? 0 : 1,
            scale: entered ? 1.05 : 1,
            filter: entered ? "blur(9px)" : "blur(0px)",
          }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div
            className="flex w-full max-w-[1440px] items-end justify-between font-display font-bold uppercase leading-[0.78] tracking-[-0.01em] text-ink"
            style={{ fontSize: "clamp(54px, 14vw, 236px)" }}
          >
            {WORD.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </motion.div>

        {/* scattered white-framed photos */}
        {SLOTS.map((s, i) => (
          <CyclingShot key={i} {...s} phase={phase} />
        ))}

        {/* booking window — dead centre, fades in after the flash */}
        <div className="relative z-30 flex flex-1 items-center justify-center px-5 py-10">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[540px] w-[860px] max-w-[93vw] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(245,112,10,0.15),transparent)]" />

          <motion.div
            className="w-full max-w-[880px] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: entered ? 1 : 0, scale: entered ? 1 : 0.97, y: entered ? 0 : 10 }}
            transition={{ duration: 0.9, ease: EASE, delay: entered ? 0.2 : 0 }}
            style={{ pointerEvents: entered ? "auto" : "none" }}
          >
            <div className="mb-4 font-display text-[clamp(17px,1.7vw,24px)] italic text-coral">
              Reserve your stay
            </div>
            <div className="text-left">
              <BookingWidget variant="inline" />
            </div>
          </motion.div>
        </div>

        {/* editorial tagline — bottom right, like the inspo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: entered ? 1 : 0 }}
          transition={{ duration: 0.8, delay: entered ? 0.5 : 0 }}
          className="absolute bottom-[7%] right-[4%] z-30 hidden max-w-[230px] text-right font-display text-[15px] italic leading-snug text-clay xl:block"
        >
          Refined rooms, honest Filipino flavours, and the Bohol Sea at your door.
        </motion.p>

        <motion.a
          href="#offers"
          initial={{ opacity: 0 }}
          animate={{ opacity: entered ? 1 : 0 }}
          transition={{ duration: 0.7, delay: entered ? 0.6 : 0 }}
          className="relative z-30 mx-auto mb-8 block w-max text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/50 transition hover:text-coral"
        >
          See packages &amp; offers
        </motion.a>
      </section>

      {/* slow entrance flash */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] bg-[#FBF3E4]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.92, 0] }}
          transition={{ duration: 2.5, times: [0, 0.55, 0.66, 1], ease: "easeInOut" }}
        />
      )}

      {/* ─────────── PACKAGES & OFFERS (editorial list) ─────────── */}
      <section id="offers" className="container-x scroll-mt-24 pb-6 pt-4 md:pt-8">
        <SectionDivider label="Packages & offers" />
        <div className="mt-8 border-t border-clay/15">
          {offers.map((o, i) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.05 }}
            >
              <Link
                href="/offers"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 border-b border-clay/15 py-6 transition-[padding] duration-300 hover:pl-3 md:grid-cols-[3rem_1fr_auto_auto] md:gap-x-8 md:py-8"
              >
                <span className="font-display text-[15px] font-medium text-coral/60 md:text-base">
                  0{i + 1}
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-2xl leading-tight text-ink transition group-hover:text-coral md:text-[32px]">
                    {o.name}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-clay">{o.tagline}</p>
                </div>

                <span className="col-start-2 row-start-2 justify-self-start rounded-full border border-clay/25 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-clay md:col-start-3 md:row-start-1 md:justify-self-auto">
                  Min {o.minNights}
                  {o.minNights > 1 ? " nights" : " night"}
                </span>

                <span className="col-start-3 row-start-1 row-span-2 grid h-11 w-11 place-items-center self-center justify-self-end rounded-full border border-clay/25 text-ink transition group-hover:rotate-45 group-hover:border-coral group-hover:bg-coral group-hover:text-pearl md:col-start-4">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
