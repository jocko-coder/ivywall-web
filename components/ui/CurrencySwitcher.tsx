"use client";

import { useState } from "react";
import { Coins, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency } from "@/lib/store/currency";
import type { CurrencyCode } from "@/lib/types";

const LABELS: Record<CurrencyCode, string> = {
  PHP: "₱ PHP",
  USD: "$ USD",
  JPY: "¥ JPY",
  KRW: "₩ KRW",
};

export default function CurrencySwitcher({
  tone = "light",
  dropUp = false,
  align = "right",
}: {
  tone?: "light" | "dark";
  dropUp?: boolean;
  align?: "left" | "right";
}) {
  const { currency, setCurrency, options } = useCurrency();
  const [open, setOpen] = useState(false);
  const colors =
    tone === "dark"
      ? "bg-pearl/10 text-pearl hover:bg-pearl/20"
      : "bg-pearl text-coral border border-coral/10 hover:bg-pearl-warm";
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold ${colors}`}
        aria-label="Change currency"
      >
        <Coins className="h-3.5 w-3.5" />
        <span>{currency.code}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={`absolute z-50 w-36 overflow-hidden rounded-2xl border border-clay/15 bg-pearl shadow-deep ${
              dropUp ? "bottom-full mb-2" : "mt-2"
            } ${align === "left" ? "left-0" : "right-0"}`}
          >
            {options.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCurrency(c);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-[13px] ${
                  c === currency.code ? "bg-amber-soft text-ink" : "text-ink hover:bg-pearl-warm"
                }`}
              >
                <span className="font-medium">{LABELS[c]}</span>
                {c === currency.code && <Check className="h-3.5 w-3.5 text-coral" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
