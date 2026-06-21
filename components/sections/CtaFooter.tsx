"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function CtaFooter() {
  const { t } = useI18n();
  return (
    <section data-ivy-station="cta" className="container-x py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative isolate grid items-end gap-0 overflow-hidden rounded-[40px] bg-palm-night text-pearl shadow-deep md:grid-cols-[1.4fr_1fr]"
      >
        {/* atmospheric — coral + palm echo the building facade */}
        <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full bg-gold-glow/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-coral/35 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-56 w-56 rounded-full bg-palm/25 blur-3xl" />

        <div className="relative z-10 p-10 md:p-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-coral-soft">
            <span className="h-px w-10 bg-coral-soft/60" />
            {t("ctaBand.kicker")}
          </div>
          <h2 className="mt-4 font-display font-bold leading-[0.98] tracking-[-0.025em] text-pearl text-[clamp(36px,5vw,68px)]">
            {t("ctaBand.heading1")}
            <br />
            <em className="text-gold-glow">{t("ctaBand.headingEm")}</em>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-pearl/75">
            {t("ctaBand.body")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book">
              <Button size="lg" variant="amber" trailingIcon={<ArrowRight className="h-4 w-4" />}>
                {t("ctaBand.reserve")}
              </Button>
            </Link>
            <Link href="/rooms">
              <Button size="lg" variant="outline">{t("ctaBand.browse")}</Button>
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-pearl/65">
            <li>· {t("ctaBand.p1")}</li>
            <li>· {t("ctaBand.p2")}</li>
            <li>· {t("ctaBand.p3")}</li>
            <li>· {t("ctaBand.p4")}</li>
          </ul>
        </div>

        {/* Photographic moment instead of mascot */}
        <div className="relative h-72 overflow-hidden md:h-full md:min-h-[420px]">
          <img
            src="/photos/BWPlus_Ivywall_14_Aerial_DJI0002.jpg"
            alt="The Ivywall beach access on Alona, Panglao"
            className="absolute inset-0 h-full w-full object-cover will-change-transform animate-kenburns"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-palm-night/40 to-palm-night" />
          <div className="absolute bottom-5 right-5 text-right text-[11px] uppercase tracking-[0.18em] text-pearl/80">
            {t("ctaBand.photoCaption")}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
