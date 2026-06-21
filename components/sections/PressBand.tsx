"use client";

import { Award } from "lucide-react";
import Marquee from "@/components/fx/Marquee";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ITEMS = [
  "Best Western Plus",
  "★★★★ · Four Star",
  "Tripadvisor · 2024",
  "Bohol Sustainability Council",
  "Conde Nast Traveler · Featured",
  "Asia's Leading Boutique Resort · WTA Nominee",
  "Native Filipino Detail",
];

export default function PressBand() {
  const { t } = useI18n();
  return (
    <section className="relative isolate border-y border-ink/5 bg-pearl-warm/50 py-5">
      <div className="container-x mb-2 flex items-center gap-3">
        <Award className="h-3 w-3 text-gold-deep" />
        <span className="small-caps font-display text-[10px] text-ink/55">{t("press.recognised")}</span>
      </div>
      <Marquee speedSec={50}>
        {ITEMS.map((it) => (
          <div key={it} className="flex items-center gap-12">
            <span className="font-display text-[15px] uppercase tracking-[0.22em] text-ink/55 transition hover:text-ink/90">
              {it}
            </span>
            <span className="text-gold-deep">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
