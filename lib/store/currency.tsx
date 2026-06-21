"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import type { CurrencyCode } from "../types";

interface Cur {
  code: CurrencyCode;
  symbol: string;
  /** Multiplier vs. PHP. Illustrative, not live FX. */
  rate: number;
  format: (php: number) => string;
}

const CURRENCIES: Record<CurrencyCode, Omit<Cur, "format">> = {
  PHP: { code: "PHP", symbol: "₱", rate: 1 },
  USD: { code: "USD", symbol: "$", rate: 1 / 58 },
  JPY: { code: "JPY", symbol: "¥", rate: 1 / 0.38 },
  KRW: { code: "KRW", symbol: "₩", rate: 1 / 0.043 },
};

function makeFormat(code: CurrencyCode, symbol: string, rate: number) {
  return (php: number) => {
    const converted = php * rate;
    const isWhole = code === "JPY" || code === "KRW";
    const rounded = isWhole ? Math.round(converted) : Math.round(converted);
    return `${symbol}${rounded.toLocaleString()}`;
  };
}

interface Ctx {
  currency: Cur;
  setCurrency: (c: CurrencyCode) => void;
  options: CurrencyCode[];
}

const CurCtx = createContext<Ctx | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<CurrencyCode>("PHP");
  const value = useMemo<Ctx>(() => {
    const base = CURRENCIES[code];
    return {
      currency: { ...base, format: makeFormat(code, base.symbol, base.rate) },
      setCurrency: (c) => setCode(c),
      options: Object.keys(CURRENCIES) as CurrencyCode[],
    };
  }, [code]);
  return <CurCtx.Provider value={value}>{children}</CurCtx.Provider>;
}

export function useCurrency() {
  const v = useContext(CurCtx);
  if (!v) throw new Error("useCurrency must be used inside CurrencyProvider");
  return v;
}
