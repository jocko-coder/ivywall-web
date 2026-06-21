"use client";

import { Check, Coffee, Car, Sparkles, Heart, Ship, KeyRound, Wine } from "lucide-react";
import clsx from "clsx";
import type { AddOn, AddOnIconKey } from "@/lib/types";
import PriceTag from "./PriceTag";
import IllustrationSpot from "./IllustrationSpot";

const ICONS: Record<AddOnIconKey, JSX.Element> = {
  coffee: <Coffee className="h-5 w-5" />,
  car: <Car className="h-5 w-5" />,
  spa: <Sparkles className="h-5 w-5" />,
  rose: <Heart className="h-5 w-5" />,
  boat: <Ship className="h-5 w-5" />,
  key: <KeyRound className="h-5 w-5" />,
  tarsier: <IllustrationSpot kind="tarsier" size={28} />,
  champagne: <Wine className="h-5 w-5" />,
};

export default function AddOnCard({
  addOn,
  selected,
  onToggle,
}: {
  addOn: AddOn;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={clsx(
        "group relative flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition",
        selected
          ? "border-amber-deep bg-amber-soft/60 shadow-warm"
          : "border-clay/15 bg-pearl hover:border-amber-deep/60 hover:bg-pearl-warm"
      )}
    >
      <div
        className={clsx(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
          selected ? "bg-amber-deep text-pearl" : "bg-amber-soft text-amber-deep"
        )}
      >
        {ICONS[addOn.icon]}
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-3 pr-7">
          <div className="font-display text-[15px] text-ink">{addOn.name}</div>
          <div className="text-right">
            <PriceTag php={addOn.price} size="sm" />
            <div className="text-[10px] uppercase tracking-[0.18em] text-clay">{addOn.unit}</div>
          </div>
        </div>
        <p className="mt-1 text-[12.5px] leading-snug text-clay">{addOn.description}</p>
      </div>
      <span
        className={clsx(
          "absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border-2",
          selected ? "border-amber-deep bg-amber-deep text-pearl" : "border-clay/30 bg-pearl"
        )}
      >
        {selected && <Check className="h-3 w-3" />}
      </span>
    </button>
  );
}
