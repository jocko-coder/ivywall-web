"use client";

import { useCurrency } from "@/lib/store/currency";

export default function PriceTag({
  php,
  strike,
  perNight = false,
  size = "md",
  tone = "ink",
}: {
  php: number;
  strike?: number;
  perNight?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  /** "ink" for light backgrounds (default); "light" for dark photos/panels. */
  tone?: "ink" | "light";
}) {
  const { currency } = useCurrency();
  const sizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl md:text-4xl",
  };
  const light = tone === "light";
  return (
    <div className="flex items-baseline gap-2">
      {typeof strike === "number" && (
        <span className={`text-sm line-through ${light ? "text-pearl/55" : "text-clay/80"}`}>{currency.format(strike)}</span>
      )}
      <span
        className={`font-display font-semibold tracking-tight ${light ? "text-pearl" : "text-ink"} ${sizes[size]}`}
        style={light ? { textShadow: "0 1px 14px rgba(34,28,24,0.85)" } : undefined}
      >
        {currency.format(php)}
      </span>
      {perNight && <span className={`text-[11px] uppercase tracking-[0.18em] ${light ? "text-pearl/65" : "text-clay"}`}>/ night</span>}
    </div>
  );
}
