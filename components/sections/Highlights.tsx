"use client";

import { motion } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";
import CountUp from "@/components/fx/CountUp";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * "The resort, in one glance" — kept deliberately simple: a clean numerals grid,
 * no cards. Big gold figures + a label + one descriptor line, separated by thin rules.
 */
export default function Highlights() {
  const { t } = useI18n();

  const ITEMS = [
    { titleKey: "highlights.i1Title", stat: 80, statLabelKey: "highlights.i1StatLabel" },
    { titleKey: "highlights.i3Title", stat: 2, statLabelKey: "highlights.i3StatLabel" },
    { titleKey: "highlights.i5Title", stat: 3.4, suffix: " km", decimals: 1, statLabelKey: "highlights.i5StatLabel" },
    { titleKey: "highlights.i2Title", stat: t("highlights.i2Stat"), statLabelKey: "highlights.i2StatLabel" },
    { titleKey: "highlights.i4Title", stat: t("highlights.i4Stat"), statLabelKey: "highlights.i4StatLabel" },
    { titleKey: "highlights.i6Title", stat: t("highlights.i6Stat"), statLabelKey: "highlights.i6StatLabel" },
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
        <p className="max-w-md text-[15px] leading-relaxed text-ink/65">{t("highlights.body")}</p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-y-12">
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.titleKey}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="border-t border-ink/12 pt-5"
          >
            <div className="font-display font-semibold leading-[0.95] tracking-tight text-gold-deep text-[clamp(28px,3.4vw,46px)]">
              {typeof it.stat === "number" ? (
                <CountUp value={it.stat} suffix={"suffix" in it ? it.suffix : undefined} decimals={"decimals" in it ? it.decimals : undefined} duration={1.6} />
              ) : (
                it.stat
              )}
            </div>
            <div className="mt-3 text-[10.5px] uppercase tracking-[0.2em] text-ink/50">{t(it.statLabelKey)}</div>
            <div className="mt-1 text-[13.5px] leading-snug text-ink/80">{t(it.titleKey)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
