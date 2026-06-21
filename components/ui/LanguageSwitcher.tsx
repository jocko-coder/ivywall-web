"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LANG_OPTIONS, useI18n } from "@/lib/i18n/I18nProvider";

export default function LanguageSwitcher({
  tone = "light",
  dropUp = false,
  align = "right",
}: {
  tone?: "light" | "dark";
  dropUp?: boolean;
  align?: "left" | "right";
}) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const active = LANG_OPTIONS.find((l) => l.code === lang)!;
  const colors =
    tone === "dark"
      ? "bg-pearl/10 text-pearl hover:bg-pearl/20"
      : "bg-pearl text-coral border border-coral/10 hover:bg-pearl-warm";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold ${colors}`}
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{active.short}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={`absolute z-50 w-44 overflow-hidden rounded-2xl border border-clay/15 bg-pearl shadow-deep ${
              dropUp ? "bottom-full mb-2" : "mt-2"
            } ${align === "left" ? "left-0" : "right-0"}`}
          >
            {LANG_OPTIONS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-[13px] ${
                  l.code === lang ? "bg-amber-soft text-ink" : "text-ink hover:bg-pearl-warm"
                }`}
              >
                <span className="font-medium">{l.label}</span>
                {l.code === lang && <Check className="h-3.5 w-3.5 text-coral" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
