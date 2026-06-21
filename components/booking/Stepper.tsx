"use client";

import clsx from "clsx";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const STEPS = [
  { key: "results", labelKey: "book.stepResults" },
  { key: "room", labelKey: "book.stepRoom" },
  { key: "rate", labelKey: "book.stepRate" },
  { key: "addons", labelKey: "book.stepAddons" },
  { key: "details", labelKey: "book.stepDetails" },
  { key: "payment", labelKey: "book.stepPayment" },
  { key: "confirmation", labelKey: "book.stepConfirmation" },
];

export default function Stepper({ active }: { active: string }) {
  const { t } = useI18n();
  const idx = STEPS.findIndex((s) => s.key === active);
  return (
    <ol className="mb-6 flex items-center justify-between gap-2 overflow-x-auto">
      {STEPS.map((s, i) => {
        const done = i < idx;
        const cur = i === idx;
        return (
          <li key={s.key} className="flex items-center gap-2">
            <span
              className={clsx(
                "flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ring-1",
                cur
                  ? "bg-gradient-to-br from-amber-glow to-amber-deep text-ink ring-amber"
                  : done
                    ? "bg-coral text-pearl ring-coral/40"
                    : "bg-pearl text-clay ring-clay/20"
              )}
            >
              {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </span>
            <span
              className={clsx(
                "hidden text-[12px] font-semibold uppercase tracking-[0.12em] md:inline",
                cur ? "text-ink" : done ? "text-coral" : "text-clay"
              )}
            >
              {t(s.labelKey)}
            </span>
            {i < STEPS.length - 1 && (
              <span className={clsx("hidden h-px w-6 md:inline-block", done ? "bg-coral" : "bg-clay/20")} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
