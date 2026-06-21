"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BedDouble, Maximize2, Users, Eye } from "lucide-react";
import { roomTypes } from "@/lib/mock/rooms";
import SectionDivider from "@/components/ui/SectionDivider";
import PriceTag from "@/components/ui/PriceTag";
import ScrollHint from "@/components/ui/ScrollHint";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * Apple-style pinned horizontal scroll. The section is 3x viewport tall;
 * as you scroll through it, the inner rail translates horizontally.
 *
 * Each panel is a full-bleed real photo with an editorial title plate.
 */
export default function HorizontalRooms() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const panels = roomTypes;
  // Translate as a percent string so framer interprets it relative to
  // the rail's own width (panels.length × 100vw). At progress=1 the rail
  // is shifted by -(N-1)/N × 100%, parking the last panel in view.
  const endPct = -((panels.length - 1) / panels.length) * 100;
  const xPct = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", `${endPct}%`]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05, 0.82, 0.93], [0, 1, 1, 0]);

  // Height scales with the number of panels so scroll feels right.
  const heightVh = panels.length * 100;

  return (
    <section ref={ref} style={{ height: `${heightVh}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-stretch overflow-hidden bg-palm-night">
        {/* Floating section header on top */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-8 pt-8 md:px-14 md:pt-12">
          <div>
            <SectionDivider variant="dark" label={t("rooms.railKicker")} className="max-w-[260px]" />
            <h2 className="mt-3 font-display text-3xl font-medium leading-[1] tracking-[-0.025em] text-pearl md:text-5xl">
              {t("rooms.railTitle")}
            </h2>
          </div>
          <Link
            href="/rooms"
            className="pointer-events-auto hidden items-center gap-1.5 rounded-full bg-pearl/10 px-4 py-2 text-[12.5px] font-semibold text-pearl backdrop-blur transition hover:bg-pearl/20 md:inline-flex"
          >
            {t("rooms.seeAll")} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <motion.div
          className="flex h-full will-change-transform"
          style={{ width: `${panels.length * 100}vw`, x: xPct }}
        >
          {panels.map((room, i) => (
            <div
              key={room.id}
              className="relative h-full w-screen shrink-0 overflow-hidden"
            >
                {/* full-bleed real photo with ken-burns */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.gallery[0].photo ?? "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg"}
                  alt={room.name}
                  className="absolute inset-0 h-full w-full object-cover will-change-transform animate-kenburns"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {/* Grade */}
                <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(34,28,24,0.78),rgba(34,28,24,0.35)_45%,rgba(34,28,24,0.1)_80%,transparent)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-palm-night/40 to-palm-night" />

                {/* Content plate */}
                <div className="container-x relative z-10 grid h-full items-end pb-24 pt-32">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-pearl/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold-glow backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-glow" />
                      {String(i + 1).padStart(2, "0")} of {String(panels.length).padStart(2, "0")} · {room.category}
                    </div>
                    <h3
                      className="mt-4 font-display font-bold leading-[0.96] tracking-[-0.02em] text-pearl text-[clamp(40px,6vw,88px)]"
                      style={{ textShadow: "0 2px 28px rgba(34,28,24,0.85)" }}
                    >
                      {room.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-pearl/80" style={{ textShadow: "0 1px 10px rgba(34,28,24,0.7)" }}>
                      {room.longDesc}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2 text-[12px]">
                      <Stat icon={<Maximize2 className="h-3 w-3" />} label={`${room.size} m²`} />
                      <Stat icon={<BedDouble className="h-3 w-3" />} label={room.bed} />
                      <Stat icon={<Users className="h-3 w-3" />} label={`${t("common.upTo")} ${room.maxOccupancy}`} />
                      <Stat icon={<Eye className="h-3 w-3" />} label={room.view} />
                    </ul>
                    <div className="mt-7 flex flex-wrap items-end gap-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-pearl/70">{t("common.fromNight")}</div>
                        <div className="mt-1 inline-flex items-baseline gap-2">
                          <PriceTag php={room.baseRate} size="xl" tone="light" />
                        </div>
                      </div>
                      <Link
                        href={`/book?room=${room.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-glow to-gold-deep px-6 py-3 text-[14px] font-semibold text-ink shadow-warm transition hover:brightness-105"
                      >
                        {t("rooms.bookThis")}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </Link>
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="text-[13px] font-semibold text-pearl/80 underline-offset-4 hover:text-pearl hover:underline"
                      >
                        {t("common.viewDetails")} →
                      </Link>
                    </div>
                  </div>
                </div>

              {/* corner index */}
              <div className="absolute right-8 bottom-8 z-10 font-display text-[160px] leading-none text-pearl/10 md:right-14">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </motion.div>

        <ScrollHint opacity={hintOpacity} className="bottom-14" />

        {/* Progress rail */}
        <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-20 flex justify-center">
          <div className="flex items-center gap-1.5">
            {panels.map((_, i) => (
              <motion.span
                key={i}
                className="h-[3px] w-10 rounded-full bg-pearl/20"
                style={{
                  background: useTransform(scrollYProgress, [i / panels.length, (i + 1) / panels.length], ["rgba(251,250,246,0.2)", "rgba(240,200,121,1)"]),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full bg-pearl/10 px-2.5 py-1 text-pearl/85 backdrop-blur">
      <span className="text-gold-glow">{icon}</span> {label}
    </li>
  );
}
