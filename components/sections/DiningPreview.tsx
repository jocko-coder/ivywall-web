"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import MovingBg from "@/components/fx/MovingBg";
import { restaurants } from "@/lib/mock/restaurants";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * "Bohol on a plate" — day / night diptych. Alon (all-day) and Teraza (rooftop)
 * sit side by side; hovering a venue widens it and zooms its photo. Stacks on mobile.
 */
export default function DiningPreview() {
  const { t } = useI18n();
  const venues = restaurants.slice(0, 2); // Alon · Teraza

  return (
    <section data-ivy-station="dining" className="relative isolate overflow-hidden bg-palm-deep py-24 text-pearl md:py-32">
      <MovingBg tint="linear-gradient(160deg,rgba(34,14,5,.66) 0%,rgba(58,23,8,.52) 55%,rgba(34,14,5,.7) 100%)" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid items-end gap-6 md:grid-cols-[1.4fr_1fr]"
        >
          <div>
            <SectionDivider variant="dark" label={t("dining.label")} className="max-w-[420px]" />
            <h2 className="mt-4 font-display font-bold leading-[0.98] tracking-[-0.025em] text-pearl text-[clamp(36px,5vw,68px)]">
              <em className="text-amber-glow">{t("dining.heading")}</em>
              <br />
              {t("dining.headingLine2")}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-pearl/75">{t("dining.body")}</p>
        </motion.div>

        {/* Diptych */}
        <div className="mt-12 flex flex-col gap-4 md:mt-14 md:h-[clamp(460px,66svh,620px)] md:flex-row">
          {venues.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative h-[360px] overflow-hidden rounded-[28px] md:h-auto md:flex-1 md:grow md:basis-0 md:hover:grow-[1.7]"
              style={{ transition: "flex-grow .6s cubic-bezier(.2,.7,.2,1)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.photo}
                alt={r.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />

              <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-9">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-amber-glow">
                  <span className="h-1 w-1 rounded-full bg-amber-glow" />
                  {r.cuisine}
                </div>
                <h3 className="mt-2 font-display leading-[1.02] text-pearl text-[clamp(30px,3.4vw,52px)]" style={{ textShadow: "0 2px 22px rgba(13,20,28,0.7)" }}>
                  {r.name}
                </h3>
                <p className="mt-2 max-w-md text-[14px] text-pearl/80" style={{ textShadow: "0 1px 10px rgba(13,20,28,0.6)" }}>
                  {r.tagline}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-[11.5px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-pearl/12 px-2.5 py-1 text-pearl/90 backdrop-blur">
                    <Clock className="h-3 w-3" /> {r.hours}
                  </span>
                  <span className="hidden rounded-full bg-pearl/12 px-2.5 py-1 text-pearl/90 backdrop-blur sm:inline-flex">
                    {r.setting}
                  </span>
                </div>
                {/* Signature — always shows the top dish; the rest reveal as the panel widens */}
                <div className="mt-4 border-t border-pearl/15 pt-3">
                  <div className="small-caps font-display text-[10px] text-amber-glow">{t("dining.signature")}</div>
                  <div className="mt-1 text-[13.5px] text-pearl/90 before:mr-1.5 before:text-amber-glow before:content-['✦']">
                    {r.signature[0]}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/dining"
            className="inline-flex items-center gap-1.5 rounded-full bg-pearl/10 px-5 py-2.5 text-[13px] font-semibold text-pearl backdrop-blur transition hover:bg-pearl/20"
          >
            {t("dining.exploreMenus")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
