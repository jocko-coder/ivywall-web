"use client";

import { createContext, useContext, useMemo, useState, ReactNode, useCallback } from "react";
import en from "./dictionaries/en.json";
import tl from "./dictionaries/tl.json";
import zhCN from "./dictionaries/zh-CN.json";
import zhHK from "./dictionaries/zh-HK.json";
import ja from "./dictionaries/ja.json";
import ko from "./dictionaries/ko.json";
import type { LangCode } from "../types";

type Dict = Record<string, unknown>;

const DICTS: Record<LangCode, Dict> = {
  en: en as Dict,
  tl: tl as Dict,
  "zh-CN": zhCN as Dict,
  "zh-HK": zhHK as Dict,
  ja: ja as Dict,
  ko: ko as Dict,
};

export const LANG_OPTIONS: { code: LangCode; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "tl", label: "Tagalog", short: "TL" },
  { code: "zh-CN", label: "简体中文", short: "中" },
  { code: "zh-HK", label: "繁體 (粵)", short: "粵" },
  { code: "ja", label: "日本語", short: "日" },
  { code: "ko", label: "한국어", short: "한" },
];

interface I18nCtx {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (path: string, fallback?: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

function dig(obj: Dict, path: string): string | undefined {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Dict)) {
      cur = (cur as Dict)[p];
    } else return undefined;
  }
  return typeof cur === "string" ? cur : undefined;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>("en");

  const t = useCallback(
    (path: string, fallback?: string) => {
      const v = dig(DICTS[lang], path);
      if (v) return v;
      const e = dig(DICTS.en, path);
      return e ?? fallback ?? path;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n must be used inside I18nProvider");
  return v;
}
