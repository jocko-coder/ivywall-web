"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowUpRight, MapPin } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import PhotoFrame from "@/components/ui/PhotoFrame";
import MovingBg from "@/components/fx/MovingBg";
import { restaurants } from "@/lib/mock/restaurants";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function DiningPreview() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const blob1Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 40]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const card1Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  const card2Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -10]);

  return (
    <section
      ref={ref}
      data-ivy-station="dining"
      className="relative isolate overflow-hidden bg-palm-deep py-24 text-pearl md:py-32"
    >
      <MovingBg tint="linear-gradient(160deg,rgba(34,14,5,.62) 0%,rgba(58,23,8,.50) 55%,rgba(34,14,5,.66) 100%)" />
      <motion.div
        style={{ y: blob1Y }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_75%_10%,rgba(245,199,126,0.18),transparent_60%)]"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_15%_85%,rgba(190,94,67,0.18),transparent_60%)]"
      />
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(255,239,200,0.6)_1px,transparent_1px)] [background-position:0_0,7px_13px] [background-size:90px_90px]" />

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
          <p className="text-[15px] leading-relaxed text-pearl/75">
            {t("dining.body")}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {restaurants.map((r, i) => (
            <motion.div key={r.id} style={{ y: i === 0 ? card1Y : card2Y }}>
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group overflow-hidden rounded-[32px] border border-pearl/10 bg-gradient-to-br from-palm-deep/80 to-ink/90 backdrop-blur-sm transition hover:border-amber-glow/30"
              >
                <PhotoFrame
                  photo={{
                    label: r.name,
                    gradient: r.gradient,
                    illustration: r.slug === "teraza-rooftop-deck" ? "tereza" : "banana-leaf",
                    photo: r.photo,
                  }}
                  rounded="rounded-none"
                  className="aspect-[16/10] md:aspect-[4/3]"
                  kenburns
                />
                <div className="p-7 md:p-9">
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-amber-glow">
                    <span className="h-1 w-1 rounded-full bg-amber-glow" />
                    {r.cuisine}
                  </div>
                  <h3 className="mt-2 font-display text-3xl text-pearl leading-tight md:text-4xl">{r.name}</h3>
                  <p className="mt-2 text-[14.5px] text-pearl/75">{r.tagline}</p>
                  <ul className="mt-5 flex flex-wrap gap-2 text-[11.5px]">
                    <li className="inline-flex items-center gap-1.5 rounded-full bg-pearl/10 px-2.5 py-1 text-pearl/85">
                      <Clock className="h-3 w-3" /> {r.hours}
                    </li>
                    <li className="inline-flex items-center gap-1.5 rounded-full bg-pearl/10 px-2.5 py-1 text-pearl/85">
                      <MapPin className="h-3 w-3" /> {r.setting}
                    </li>
                  </ul>
                  <div className="mt-6 border-t border-pearl/10 pt-5">
                    <div className="small-caps font-display text-[10px] text-amber-glow">{t("dining.signature")}</div>
                    <ul className="mt-2 grid gap-1 text-[14px] text-pearl/90">
                      {r.signature.slice(0, 3).map((s) => (
                        <li key={s} className="before:mr-1.5 before:text-amber-glow before:content-['✦']">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            </motion.div>
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
