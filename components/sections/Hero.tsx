"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/booking/BookingWidget";
import MagneticButton from "@/components/fx/MagneticButton";
import { useI18n } from "@/lib/i18n/I18nProvider";

const HERO_PHOTOS = [
  { src: "/photos/BWPlus_Ivywall_17_Facade_Teraza.jpg", alt: "The Ivywall facade and Teraza rooftop in afternoon light" },
  { src: "/photos/ivy_hero_4_night.jpg", alt: "The Ivywall Resort and Alona Beach at night, aerial" },
  { src: "/photos/ivy_hero_3_poolwalk.jpg", alt: "The lagoon pool leading to the resort" },
  { src: "/photos/ivy_hero_2_pool.jpg", alt: "The free-form pool with shade sails" },
];

export default function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const springConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };
  const yBgRaw = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const scaleBgRaw = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.18]);
  const yBg = useSpring(yBgRaw, springConfig);
  const scaleBg = useSpring(scaleBgRaw, springConfig);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const fadeCopy = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.75, 0]);

  const [photoIdx, setPhotoIdx] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setPhotoIdx((i) => (i + 1) % HERO_PHOTOS.length), 6000);
    return () => clearInterval(id);
  }, [reduce]);

  // Rotating top two lines (the gold "a Boholano welcome." line stays constant) —
  // showcases different moods for wider marketing reach.
  const PHRASES = useMemo<[string, string][]>(
    () => [
      [t("hero.line1"), t("hero.line2")],
      [t("hero.line1b"), t("hero.line2b")],
      [t("hero.line1c"), t("hero.line2c")],
    ],
    [t]
  );
  const [phrase, setPhrase] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setPhrase((p) => (p + 1) % PHRASES.length), 6500);
    return () => clearInterval(id);
  }, [reduce, PHRASES.length]);

  return (
    <section
      ref={ref}
      className="relative isolate -mt-16 flex min-h-[100svh] flex-col overflow-hidden bg-palm-night md:-mt-20 md:block md:min-h-[100svh]"
    >
      {/* L1: crossfading real photographs */}
      <motion.div
        className="absolute inset-0 -z-30 will-change-transform"
        style={{ y: yBg, scale: scaleBg }}
        aria-hidden
      >
        {HERO_PHOTOS.map((p, i) => (
          <motion.img
            key={p.src}
            src={p.src}
            alt={p.alt}
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: i === photoIdx ? 1 : 0 }}
            transition={{ duration: 2.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding={i === 0 ? "sync" : "async"}
          />
        ))}
      </motion.div>

      {/* L2: overlays — ORIGINAL / REVERT TARGET (clean, no dark overlays)
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-b from-transparent to-ink/70" />
      </div>
      END ORIGINAL */}

      {/* L2: minimal scrim for text legibility — top/bottom + a directional
          left wash so the headline reads over bright photos (photo stays vivid right). */}
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-b from-transparent to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-ink/10 to-transparent md:to-60%" />
      </div>

      {/* Photo rail indicator */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {HERO_PHOTOS.map((p, i) => (
          <button
            key={p.src}
            aria-label={`Photo ${i + 1}`}
            onClick={() => setPhotoIdx(i)}
            className="group h-12 w-[3px] overflow-hidden rounded-full bg-pearl/20"
          >
            <span
              className={`block w-full origin-top bg-pearl transition-transform duration-700 ${
                i === photoIdx ? "scale-y-100" : "scale-y-0"
              }`}
              style={{ height: "100%" }}
            />
          </button>
        ))}
      </div>

      {/* Editorial copy */}
      <motion.div
        style={{ y: yCopy, opacity: fadeCopy }}
        className="container-x relative mt-auto flex items-end pb-6 pt-20 md:mt-0 md:min-h-[calc(100svh-6rem)] md:items-center md:pb-44 md:pt-24"
      >
        <div className="relative max-w-3xl">
          <span className="mb-6 block h-px w-16 bg-gradient-to-r from-gold-glow to-transparent md:mb-8" />
          <h1
            className="font-display font-black leading-[0.92] tracking-[-0.03em] text-pearl text-[clamp(40px,6.4vw,96px)] md:leading-[0.95]"
            style={{ textShadow: "0 1px 3px rgba(13,27,42,0.55), 0 2px 14px rgba(13,27,42,0.4)" }}
          >
            <span className="block pb-2">
              <span key={`l1-${phrase}`} className="ivy-blur-in block">{PHRASES[phrase][0]}</span>
            </span>
            <span className="block pb-2">
              <span key={`l2-${phrase}`} className="ivy-blur-in ivy-blur-in--2 block">{PHRASES[phrase][1]}</span>
            </span>
            <span className="block pb-2">
              <span
                className="headline-line headline-line-3 text-gold-glow"
                style={{
                  fontFamily: "var(--font-script), cursive",
                  lineHeight: 1.15,
                  display: "inline-block",
                  paddingBottom: "0.08em",
                  textShadow: "0 2px 28px rgba(168,122,46,0.55), 0 1px 6px rgba(34,28,24,0.85)",
                }}
              >
                {t("hero.line3")}
              </span>
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton strength={0.4}>
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-coral to-coral-deep px-8 py-4 text-[15px] font-bold text-pearl shadow-warm transition hover:brightness-105"
              >
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 rounded-full border border-pearl/30 px-6 py-3.5 text-[14px] font-semibold text-pearl hover:bg-pearl/10"
              >
                {t("hero.ctaRooms")}
              </Link>
            </MagneticButton>
          </div>

        </div>

      </motion.div>

      {/* Booking widget — DESKTOP: full glass concierge pinned to the hero bottom (unchanged). */}
      <div data-ivy-booking className="container-x relative z-10 hidden pb-10 md:absolute md:inset-x-0 md:bottom-0 md:block md:pb-10">
        <BookingWidget variant="hero" />
      </div>
      {/* Booking widget — MOBILE: compact tap-to-expand bar directly below the copy
          (the copy carries mt-auto), with the resort photo showcased above. */}
      <div className="container-x relative z-10 pb-8 md:hidden">
        <BookingWidget variant="compact" />
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 z-0 hidden items-center justify-center md:flex">
        <div className="inline-flex items-center gap-2 rounded-full bg-pearl/15 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-pearl/70 backdrop-blur">
          {t("hero.scrollCue")}
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
