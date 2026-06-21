"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SectionDivider from "@/components/ui/SectionDivider";
import MovingBg from "@/components/fx/MovingBg";
import ScrollHint from "@/components/ui/ScrollHint";
import { useI18n } from "@/lib/i18n/I18nProvider";

/** Photo + crop per chapter; copy comes from the dictionary (stickyStory.cN*). */
const CHAPTERS = [
  { photo: "/photos/ivy_story_aerial.jpg", pos: "center" },
  { photo: "/photos/BWPlus_Ivywall_11_Family_Room.jpg", pos: "center" },
  { photo: "/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg", pos: "center" },
  { photo: "/photos/ivy_story_terrace_deck.jpg", pos: "center" },
];

/**
 * Pinned scroll narrative.
 *
 * Desktop: 2-column — copy stages on the left, photo crossfades on the right.
 * Mobile:  photo is full-bleed background, copy overlays at the bottom.
 *
 * The sticky container is offset by the header height so the photos
 * never get hidden behind the sticky header.
 */
export default function StickyStory() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Cue is present through the section, fades out as the last chapter arrives.
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05, 0.78, 0.92], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      style={{ height: `${CHAPTERS.length * 100}vh` }}
      className="relative bg-palm-night text-pearl"
    >
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden md:top-20 md:h-[calc(100svh-5rem)]">
        <MovingBg tint="linear-gradient(105deg,rgba(150,55,8,.74) 0%,rgba(160,58,10,.58) 50%,rgba(150,55,8,.40) 100%)" />
        <div className="relative grid h-full md:grid-cols-[1.05fr_1fr]">
          {/* ─── PHOTO LAYER ───
              On mobile this is positioned absolutely behind everything so the
              full sticky container becomes a cinematic background.
              On desktop it lives in the right grid cell. */}
          <div className="absolute inset-0 md:static md:col-start-2 md:row-start-1 md:h-full">
            <div className="relative h-full w-full overflow-hidden">
              {CHAPTERS.map((c, i) => {
                const start = i / CHAPTERS.length;
                const end = (i + 1) / CHAPTERS.length;
                const opacity = useTransform(
                  scrollYProgress,
                  [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
                  [0, 1, 1, 0]
                );
                const scale = useTransform(
                  scrollYProgress,
                  [start, end],
                  reduce ? [1, 1] : [1.06, 1.14]
                );
                return (
                  <motion.div key={c.photo} className="absolute inset-0" style={{ opacity }}>
                    <motion.img
                      src={c.photo}
                      alt={t(`stickyStory.c${i + 1}Title`)}
                      className="absolute inset-0 h-full w-full object-cover will-change-transform"
                      style={{ scale, objectPosition: c.pos }}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </motion.div>
                );
              })}
              {/* Mobile-only legibility scrim — heavier at the bottom where copy sits */}
              <div className="absolute inset-0 bg-gradient-to-b from-palm-night/40 via-palm-night/20 to-palm-night/90 md:hidden" />
              {/* Desktop left-fade so left copy isn't competing with the photo edge */}
              <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-palm-night/65 via-transparent to-transparent" />
            </div>
          </div>

          {/* ─── TEXT LAYER ───
              On mobile it's overlaid at the bottom (above the photo scrim).
              On desktop it sits in the left grid cell. */}
          <div className="relative z-10 md:col-start-1 md:row-start-1 md:h-full">
            <div className="container-x flex h-full flex-col justify-end pb-16 pt-24 md:justify-center md:py-10">
              <SectionDivider variant="dark" label={t("stickyStory.label")} className="max-w-[180px]" />
              <h2 className="mt-3 font-display text-3xl font-medium leading-[1] tracking-[-0.025em] text-pearl md:text-5xl">
                <em className="italic text-gold-glow">{t("stickyStory.heading")}</em>
              </h2>
              <div className="relative mt-8 h-[260px] md:mt-10 md:h-[340px]">
                {CHAPTERS.map((c, i) => {
                  const start = i / CHAPTERS.length;
                  const end = (i + 1) / CHAPTERS.length;
                  const opacity = useTransform(
                    scrollYProgress,
                    [start - 0.03, start + 0.04, end - 0.04, end + 0.03],
                    [0, 1, 1, 0]
                  );
                  const y = useTransform(
                    scrollYProgress,
                    [start - 0.04, start + 0.04, end - 0.04, end + 0.04],
                    reduce ? [0, 0, 0, 0] : [40, 0, 0, -40]
                  );
                  return (
                    <motion.div
                      key={c.photo}
                      className="absolute inset-0 flex flex-col justify-start"
                      style={{ opacity, y }}
                    >
                      <div className={`text-[11px] uppercase tracking-[0.32em] ${i === 0 ? "text-coral-soft" : "text-gold-glow"}`}>
                        {t(`stickyStory.c${i + 1}Kicker`)}
                      </div>
                      <h3
                        className="mt-3 font-display text-[clamp(24px,3.4vw,44px)] font-medium leading-[1.08] tracking-[-0.025em] text-pearl"
                        style={{ textShadow: "0 1px 14px rgba(34,28,24,0.55)" }}
                      >
                        {t(`stickyStory.c${i + 1}Title`)}
                      </h3>
                      <p
                        className="mt-3 max-w-md text-[14.5px] leading-[1.6] text-pearl/85 md:text-[15px] md:leading-[1.7]"
                        style={{ textShadow: "0 1px 10px rgba(34,28,24,0.55)" }}
                      >
                        {t(`stickyStory.c${i + 1}Body`)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              {/* progress rail */}
              <div className="mt-6 flex items-center gap-2 md:mt-10">
                {CHAPTERS.map((_, i) => {
                  const start = i / CHAPTERS.length;
                  const end = (i + 1) / CHAPTERS.length;
                  const fill = useTransform(scrollYProgress, [start, end], ["0%", "100%"]);
                  return (
                    <div key={i} className="h-[2px] flex-1 overflow-hidden rounded bg-pearl/20">
                      <motion.div className={`h-full ${i === 0 ? "bg-coral-soft" : "bg-gold-glow"}`} style={{ width: fill }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <ScrollHint opacity={hintOpacity} className="bottom-5" />
      </div>
    </section>
  );
}
