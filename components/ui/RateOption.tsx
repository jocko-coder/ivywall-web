"use client";

import { Check, ShieldCheck, Clock, Award } from "lucide-react";
import clsx from "clsx";
import type { RatePlan } from "@/lib/types";
import PriceTag from "./PriceTag";

export default function RateOption({
  plan,
  baseRate,
  nights,
  selected,
  onSelect,
}: {
  plan: RatePlan;
  baseRate: number;
  nights: number;
  selected: boolean;
  onSelect: () => void;
}) {
  const total = Math.round(baseRate * plan.multiplier * nights);
  const perNight = Math.round(baseRate * plan.multiplier);
  return (
    <button
      type="button"
      onClick={onSelect}
      className={clsx(
        "relative w-full overflow-hidden rounded-3xl border p-5 text-left transition",
        selected
          ? "border-coral bg-pearl-warm shadow-deep"
          : "border-clay/15 bg-pearl hover:border-coral/60 hover:bg-pearl-warm"
      )}
    >
      {plan.badge && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-amber-glow to-amber-deep px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-warm">
          <Award className="h-3 w-3" /> {plan.badge}
        </span>
      )}
      <div className="font-display text-lg text-ink">{plan.name}</div>
      <p className="mt-1 text-[12.5px] text-clay">{plan.tagline}</p>
      <ul className="mt-3 space-y-1.5">
        {plan.inclusions.map((inc) => (
          <li key={inc} className="flex items-start gap-2 text-[13px] text-ink">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-palm-deep" />
            <span>{inc}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 text-[12px] text-clay">
        {plan.code === "FLEX" ? (
          <ShieldCheck className="h-3.5 w-3.5 text-palm-deep" />
        ) : plan.code === "NRF" ? (
          <Clock className="h-3.5 w-3.5 text-terracotta" />
        ) : (
          <ShieldCheck className="h-3.5 w-3.5 text-coral" />
        )}
        <span>{plan.cancellation}</span>
      </div>
      <div className="mt-4 flex items-end justify-between border-t border-clay/15 pt-3">
        <div className="text-[11px] uppercase tracking-[0.16em] text-clay">{nights} nights · all incl.</div>
        <div className="text-right">
          <PriceTag php={total} size="lg" />
          <div className="text-[11px] text-clay">avg ₱{perNight.toLocaleString()} / night</div>
        </div>
      </div>
      <span
        className={clsx(
          "mt-3 inline-flex items-center justify-center rounded-full px-4 py-2 text-[13px] font-semibold transition",
          selected ? "bg-coral text-pearl" : "border border-coral/30 text-coral"
        )}
      >
        {selected ? "Selected" : "Select this rate"}
      </span>
    </button>
  );
}
