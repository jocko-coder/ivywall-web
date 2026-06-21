"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * "Our story" intro — international comfort with a Boholano soul.
 * Sits right after the hero. Video in a 16:9 frame so the full scene reads.
 */
export default function OurStory() {
  const { t } = useI18n();
  return (
    <section className="relative isolate bg-pearl py-20 md:py-28">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionDivider label={t("ourStory.label")} className="max-w-[180px]" />
          <h2 className="mt-4 font-display font-bold leading-[1.04] tracking-[-0.025em] text-ink text-[clamp(34px,4.4vw,58px)]">
            {t("ourStory.heading1")}{" "}
            <em className="italic text-gold-deep">{t("ourStory.headingEm")}</em>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-ink/75">
            {t("ourStory.body1")}
          </p>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.75] text-ink/75">
            {t("ourStory.body2")}
          </p>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-coral transition hover:text-coral-deep"
          >
            {t("ourStory.cta")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] shadow-deep">
            <video
              src="/clips/ourstory.mp4"
              poster="/clips/ourstory_poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Life at The Ivywall — international comfort with a Boholano soul"
              className="aspect-video h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
