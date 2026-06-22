"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const KEY = "ivy-cookie-consent"; // "all" | "essential"

/** Read stored consent (client-only). */
export function getConsent(): "all" | "essential" | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(KEY);
  return v === "all" || v === "essential" ? v : null;
}

/**
 * Cookie consent banner — DPA (PH) / GDPR-style. Essential cookies always run
 * (they're needed for the site to work); non-essential/analytics only after the
 * guest accepts. The choice is stored locally and broadcast via an "ivy-consent"
 * event so analytics can opt in without a reload.
 */
export default function CookieConsent() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!getConsent()) setShow(true);
  }, []);

  function choose(value: "all" | "essential") {
    try {
      window.localStorage.setItem(KEY, value);
      window.dispatchEvent(new CustomEvent("ivy-consent", { detail: value }));
    } catch {
      /* ignore storage failures */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label={t("consent.title")}
      className="fixed inset-x-0 bottom-0 z-[200] px-3 pb-3 md:inset-x-auto md:right-4 md:max-w-md"
    >
      <div className="rounded-2xl border border-clay/15 bg-pearl/95 p-4 shadow-deep ring-1 ring-ink/5 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-soft text-amber-deep">
            <Cookie className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0">
            <div className="font-display text-[15px] text-ink">{t("consent.title")}</div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-clay">
              {t("consent.body")}{" "}
              <Link href="/cookies" className="font-semibold text-coral underline-offset-2 hover:underline">
                {t("consent.policy")}
              </Link>
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => choose("all")}
                className="rounded-full bg-gradient-to-b from-coral to-coral-deep px-4 py-2 text-[12.5px] font-semibold text-pearl shadow-bezel transition hover:brightness-105"
              >
                {t("consent.accept")}
              </button>
              <button
                onClick={() => choose("essential")}
                className="rounded-full border border-clay/25 bg-pearl px-4 py-2 text-[12.5px] font-semibold text-ink transition hover:bg-pearl-warm"
              >
                {t("consent.reject")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
