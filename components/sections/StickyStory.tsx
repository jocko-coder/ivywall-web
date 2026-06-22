"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";
import { useI18n } from "@/lib/i18n/I18nProvider";

/** Photo per chapter; copy comes from the dictionary (stickyStory.cN*). */
const CHAPTERS = [
  { photo: "/photos/ivy_story_aerial.jpg" },
  { photo: "/photos/BWPlus_Ivywall_11_Family_Room.jpg" },
  { photo: "/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg" },
  { photo: "/photos/ivy_story_terrace_deck.jpg" },
];

/**
 * Arch portal. The section pins; the four chapters are tall arched "windows".
 * As you scroll, the active arch expands wide (revealing its photo, title +
 * body) while the others stay slim arches showing a photo sliver + number.
 * Width eases via CSS flex-grow (smooth, no jank). Clickable. Reduced-motion safe.
 */
export default function StickyStory() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const total = CHAPTERS.length;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total * 0.999)));
    if (idx !== active) setActive(idx);
  });

  function jumpTo(i: number) {
    const el = sectionRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + ((i + 0.5) / total) * scrollable, behavior: "smooth" });
  }

  return (
    <section ref={sectionRef} style={{ height: `${total * 90}vh` }} className="relative bg-pearl text-ink">
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] flex-col overflow-hidden md:top-20 md:h-[calc(100svh-5rem)]">
        {/* Header */}
        <div className="container-x pb-5 pt-7 md:pt-10">
          <SectionDivider label={t("stickyStory.label")} className="max-w-[180px]" />
          <h2 className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-ink/70 md:text-3xl">
            <em className="italic text-gold-deep">{t("stickyStory.heading")}</em>
          </h2>
        </div>

        {/* Arch row */}
        <div className="flex flex-1 gap-2.5 px-4 pb-8 md:gap-4 md:px-12 md:pb-12">
          {CHAPTERS.map((c, i) => {
            const on = i === active;
            return (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={t(`stickyStory.c${i + 1}Title`)}
                className={`group relative overflow-hidden rounded-t-[70px] rounded-b-2xl md:rounded-t-[150px] ${
                  on ? "ring-1 ring-gold-glow/40" : ""
                }`}
                style={{ flexGrow: on ? 6 : 1, flexBasis: 0, transition: "flex-grow .7s cubic-bezier(.2,.7,.2,1)" }}
              >
                <img
                  src={c.photo}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${on ? "" : "scale-105 brightness-[.55] saturate-[.85]"}`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {/* Scrim */}
                <div className={`absolute inset-0 ${on ? "bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" : "bg-ink/45"}`} />

                {/* Inactive: number + tiny gold tick */}
                {!on && (
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 pb-5">
                    <span className="h-6 w-px bg-pearl/30" />
                    <span className="font-display text-[15px] text-pearl/85">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                )}

                {/* Active: chapter content */}
                {on && (
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2, ease: [0.2, 0.7, 0.2, 1] }}
                    className="absolute inset-x-0 bottom-0 p-6 text-left md:p-9"
                  >
                    <div className="max-w-2xl">
                      <div className="text-[11px] uppercase tracking-[0.3em] text-gold-glow">
                        {t(`stickyStory.c${i + 1}Kicker`)} · {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </div>
                      <h3
                        className="mt-2.5 font-display font-bold leading-[1.04] tracking-[-0.02em] text-pearl text-[clamp(24px,3vw,46px)]"
                        style={{ textShadow: "0 2px 24px rgba(13,20,28,0.7)" }}
                      >
                        {t(`stickyStory.c${i + 1}Title`)}
                      </h3>
                      <p
                        className="mt-2.5 hidden max-w-md text-[14.5px] leading-[1.7] text-pearl/85 sm:block"
                        style={{ textShadow: "0 1px 10px rgba(13,20,28,0.6)" }}
                      >
                        {t(`stickyStory.c${i + 1}Body`)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
