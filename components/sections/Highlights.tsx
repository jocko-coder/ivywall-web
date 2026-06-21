"use client";

import { motion } from "framer-motion";
import { Waves, UtensilsCrossed, ShieldCheck, BedDouble, Sunrise, Plane } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import CountUp from "@/components/fx/CountUp";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Highlights() {
  const { t } = useI18n();

  const ITEMS = [
    {
      icon: <BedDouble className="h-5 w-5" />,
      titleKey: "highlights.i1Title",
      descKey: "highlights.i1Desc",
      stat: 80,
      statLabelKey: "highlights.i1StatLabel",
    },
    {
      icon: <Waves className="h-5 w-5" />,
      titleKey: "highlights.i2Title",
      descKey: "highlights.i2Desc",
      stat: t("highlights.i2Stat"),
      statLabelKey: "highlights.i2StatLabel",
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5" />,
      titleKey: "highlights.i3Title",
      descKey: "highlights.i3Desc",
      stat: 2,
      statLabelKey: "highlights.i3StatLabel",
    },
    {
      icon: <Sunrise className="h-5 w-5" />,
      titleKey: "highlights.i4Title",
      descKey: "highlights.i4Desc",
      stat: t("highlights.i4Stat"),
      statLabelKey: "highlights.i4StatLabel",
    },
    {
      icon: <Plane className="h-5 w-5" />,
      titleKey: "highlights.i5Title",
      descKey: "highlights.i5Desc",
      stat: 3.4,
      suffix: " km",
      decimals: 1,
      statLabelKey: "highlights.i5StatLabel",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      titleKey: "highlights.i6Title",
      descKey: "highlights.i6Desc",
      stat: t("highlights.i6Stat"),
      statLabelKey: "highlights.i6StatLabel",
    },
  ] as const;

  return (
    <section data-ivy-station="highlights" className="container-x py-20 md:py-24">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionDivider label={t("highlights.label")} className="max-w-[280px]" />
          <h2 className="mt-3 font-display font-bold leading-[1.04] tracking-[-0.025em] text-ink text-[clamp(32px,3.6vw,52px)]">
            {t("highlights.heading")}
            <br />
            {t("highlights.headingEm")}
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-ink/65">
          {t("highlights.body")}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.titleKey}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-pearl-warm/40 p-6">
              <div className="pointer-events-none absolute -right-6 -top-6 text-[120px] font-display font-bold leading-none text-gold/[0.07]">
                0{i + 1}
              </div>
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-soft text-gold-deep">
                  {it.icon}
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {typeof it.stat === "number" ? (
                      <CountUp value={it.stat} suffix={"suffix" in it ? it.suffix : undefined} decimals={"decimals" in it ? it.decimals : undefined} duration={1.6} />
                    ) : (
                      it.stat
                    )}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink/55">{t(it.statLabelKey)}</div>
                </div>
              </div>
              <div className="relative mt-5">
                <div className="font-display text-lg text-ink leading-snug">{t(it.titleKey)}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/65">{t(it.descKey)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
