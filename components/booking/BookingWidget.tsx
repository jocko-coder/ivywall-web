"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, ChevronDown, Search, ShieldCheck, Tag, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useBooking, nightsBetween } from "@/lib/store/booking";
import { useI18n } from "@/lib/i18n/I18nProvider";

type Variant = "hero" | "compact" | "inline";

/** Add n days to a YYYY-MM-DD string, returning YYYY-MM-DD. */
function addDays(iso: string, n: number) {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

export default function BookingWidget({ variant = "hero" }: { variant?: Variant }) {
  const { t } = useI18n();
  const router = useRouter();
  const { query, setQuery } = useBooking();
  const [open, setOpen] = useState(variant === "hero" || variant === "inline");

  if (!query) return null;
  const nights = nightsBetween(query.checkIn, query.checkOut);
  // premium dark-glass concierge treatment — hero + the mobile compact bar
  const glass = variant === "hero" || variant === "compact";

  function handleSearch() {
    router.push("/book/results");
  }

  if (variant === "compact" && !open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between gap-3 rounded-full border border-white/15 bg-ink/55 px-4 py-2.5 text-left text-[13px] shadow-[0_18px_44px_-22px_rgba(6,10,18,0.9)] ring-1 ring-white/10 backdrop-blur-2xl transition hover:bg-ink/65"
      >
        <span className="inline-flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gold-glow" />
          <span className="font-semibold text-pearl">{nights} night{nights !== 1 ? "s" : ""}</span>
          <span className="text-pearl/65">
            · {query.adults} {query.adults === 1 ? "adult" : "adults"}
            {query.children > 0 ? `, ${query.children} ${query.children === 1 ? "child" : "children"}` : ""}
          </span>
        </span>
        <span className="rounded-full bg-gradient-to-b from-coral to-coral-deep px-3 py-1.5 font-semibold text-pearl shadow-[0_8px_18px_-8px_rgba(245,112,10,0.8)]">{t("common.checkAvailability")}</span>
      </button>
    );
  }

  const inputCls = glass
    ? "w-full bg-transparent text-[16px] font-semibold text-pearl outline-none [color-scheme:dark]"
    : "w-full bg-transparent text-[16px] font-semibold text-ink outline-none";

  return (
    <>
      {glass && (
        <div className="mb-3 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-glow/35 bg-ink/55 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-glow shadow-[0_6px_20px_-8px_rgba(0,0,0,0.7)] backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            {t("common.bookDirectTagline")}
          </span>
        </div>
      )}
      <motion.div
        layout
        className={
          glass
            ? "relative isolate rounded-[26px] border border-white/15 bg-ink/55 p-2.5 shadow-[0_30px_80px_-30px_rgba(6,10,18,0.9)] ring-1 ring-white/10 backdrop-blur-2xl md:p-3"
            : "relative rounded-[26px] border border-coral/20 bg-pearl-warm p-3 shadow-[0_44px_100px_-46px_rgba(46,38,20,0.6)] ring-1 ring-coral/10 md:p-4"
        }
      >
        {glass && (
          <>
            {/* gold top sheen + soft warm inner glow — the premium touch */}
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-glow/60 to-transparent" />
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[26px] bg-[radial-gradient(120%_140%_at_50%_-10%,rgba(240,200,121,0.12),transparent_55%)]" />
          </>
        )}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-12 md:gap-2.5">
          <Field label={t("common.checkIn")} className="md:col-span-2" icon={<Calendar />} tone={glass ? "glass" : "light"}>
            <input
              type="date"
              value={query.checkIn}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(e) => {
                const ci = e.target.value;
                // keep check-out strictly after check-in
                const co = query.checkOut <= ci ? addDays(ci, 1) : query.checkOut;
                setQuery({ ...query, checkIn: ci, checkOut: co });
              }}
              className={inputCls}
            />
          </Field>
          <Field label={t("common.checkOut")} className="md:col-span-2" icon={<Calendar />} tone={glass ? "glass" : "light"}>
            <input
              type="date"
              value={query.checkOut}
              min={addDays(query.checkIn, 1)}
              onChange={(e) => {
                const co = e.target.value;
                setQuery({ ...query, checkOut: co <= query.checkIn ? addDays(query.checkIn, 1) : co });
              }}
              className={inputCls}
            />
          </Field>
          <GuestsPicker
            adults={query.adults}
            childrenCount={query.children}
            rooms={query.rooms}
            onChange={(v) => setQuery({ ...query, ...v })}
            className="col-span-2 md:col-span-4"
            tone={glass ? "glass" : "light"}
          />
          <Field label={t("common.promoCode")} className="col-span-2 md:col-span-2" icon={<Tag />} tone={glass ? "glass" : "light"}>
            <input
              type="text"
              value={query.promoCode ?? ""}
              placeholder="IVY"
              onChange={(e) => setQuery({ ...query, promoCode: e.target.value })}
              className={
                glass
                  ? "w-full bg-transparent text-[14px] font-semibold uppercase text-pearl outline-none placeholder:text-pearl/30 placeholder:normal-case"
                  : "w-full bg-transparent text-[14px] font-semibold uppercase text-ink outline-none placeholder:text-clay/50 placeholder:normal-case"
              }
            />
          </Field>
          <div className="col-span-2 md:col-span-2 md:flex md:items-end">
            {glass ? (
              <button
                onClick={handleSearch}
                aria-label={t("common.search")}
                data-ivy-search
                className="group flex h-[58px] w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-coral to-coral-deep px-5 text-[15px] font-bold text-pearl shadow-[0_16px_34px_-12px_rgba(245,112,10,0.75)] ring-1 ring-white/25 transition hover:brightness-110 active:scale-[0.99] md:h-[62px]"
              >
                <Search className="h-4 w-4 transition group-hover:scale-110" />
                <span className="md:hidden">{t("common.checkAvailability")}</span>
                <span className="hidden md:inline">{t("common.search")}</span>
              </button>
            ) : (
              <Button
                onClick={handleSearch}
                full
                size="lg"
                className="!h-[58px] md:!h-[62px]"
                leadingIcon={<Search className="h-4 w-4" />}
                aria-label={t("common.search")}
              >
                <span className="md:hidden">{t("common.checkAvailability")}</span>
                <span className="hidden md:inline">{t("common.search")}</span>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

function Field({
  label,
  icon,
  children,
  className,
  tone = "light",
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "glass";
}) {
  const glass = tone === "glass";
  return (
    <label
      className={`flex flex-col rounded-2xl border px-3.5 py-2.5 transition ${
        glass
          ? "border-white/10 bg-white/[0.055] hover:bg-white/[0.09] focus-within:border-gold-glow/45 focus-within:bg-white/[0.1]"
          : "border-clay/15 bg-pearl-warm"
      } ${className ?? ""}`}
    >
      <span className={`flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${glass ? "text-pearl/55" : "text-clay"}`}>
        <span className={`[&>svg]:h-3 [&>svg]:w-3 ${glass ? "text-gold-glow" : "text-coral"}`}>{icon}</span>
        {label}
      </span>
      <div className="mt-0.5">{children}</div>
    </label>
  );
}

/**
 * GuestsPicker — single field showing a plain-English summary
 * ("2 adults · 1 room") that opens a popover with labeled steppers.
 */
function GuestsPicker({
  adults,
  childrenCount,
  rooms,
  onChange,
  className,
  tone = "light",
}: {
  adults: number;
  childrenCount: number;
  rooms: number;
  onChange: (v: { adults?: number; children?: number; rooms?: number }) => void;
  className?: string;
  tone?: "light" | "glass";
}) {
  const { t } = useI18n();
  const glass = tone === "glass";
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const summary = [
    `${adults} ${adults === 1 ? "adult" : "adults"}`,
    childrenCount > 0 ? `${childrenCount} ${childrenCount === 1 ? "child" : "children"}` : null,
    `${rooms} ${rooms === 1 ? "room" : "rooms"}`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div ref={wrapRef} className={`relative ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`flex w-full flex-col rounded-2xl border px-3.5 py-2.5 text-left transition ${
          glass
            ? "border-white/10 bg-white/[0.055] hover:border-gold-glow/40 hover:bg-white/[0.1]"
            : "border-clay/15 bg-pearl-warm hover:border-clay/30 hover:bg-pearl"
        }`}
      >
        <span className={`flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${glass ? "text-pearl/55" : "text-clay"}`}>
          <Users className={`h-3 w-3 ${glass ? "text-gold-glow" : "text-coral"}`} />
          {t("common.guestsRooms")}
        </span>
        <span className="mt-0.5 flex items-center justify-between gap-2">
          <span className={`truncate text-[14px] font-semibold ${glass ? "text-pearl" : "text-ink"}`}>{summary}</span>
          <ChevronDown className={`h-4 w-4 shrink-0 transition ${glass ? "text-pearl/60" : "text-clay"} ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.2, 0.7, 0.2, 1] }}
            className={`absolute bottom-full left-0 z-50 mb-2 w-[280px] origin-bottom-left rounded-2xl border p-2 shadow-deep sm:w-[320px] ${
              glass ? "border-white/10 bg-ink/95 ring-1 ring-white/10 backdrop-blur-xl" : "border-clay/15 bg-pearl ring-1 ring-ink/5"
            }`}
            role="dialog"
            aria-label="Choose guests and rooms"
          >
            <StepperRow label={t("common.adults")} sub={t("common.adultsAge")} value={adults} min={1} max={6} onChange={(v) => onChange({ adults: v })} tone={tone} />
            <StepperRow label={t("common.children")} sub={t("common.childrenAge")} value={childrenCount} min={0} max={4} onChange={(v) => onChange({ children: v })} tone={tone} />
            <StepperRow label={t("common.rooms")} sub={t("common.roomsUpTo")} value={rooms} min={1} max={4} onChange={(v) => onChange({ rooms: v })} tone={tone} />
            <div className="mt-1 flex justify-end px-2 pb-1 pt-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-1.5 text-[12px] font-semibold transition ${glass ? "bg-gold-glow text-ink hover:brightness-105" : "bg-ink text-pearl hover:bg-clay"}`}
              >
                {t("common.done")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepperRow({
  label,
  sub,
  value,
  min,
  max,
  onChange,
  tone = "light",
}: {
  label: string;
  sub: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  tone?: "light" | "glass";
}) {
  const glass = tone === "glass";
  const btn = `grid h-8 w-8 place-items-center rounded-full border text-[16px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-30 ${
    glass
      ? "border-white/25 text-pearl hover:border-gold-glow hover:text-gold-glow disabled:hover:border-white/25 disabled:hover:text-pearl"
      : "border-clay/25 text-ink hover:border-coral hover:text-coral disabled:hover:border-clay/25 disabled:hover:text-ink"
  }`;
  return (
    <div className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 ${glass ? "hover:bg-white/5" : "hover:bg-pearl-warm"}`}>
      <div>
        <div className={`text-[13.5px] font-semibold ${glass ? "text-pearl" : "text-ink"}`}>{label}</div>
        <div className={`text-[11px] ${glass ? "text-pearl/55" : "text-clay"}`}>{sub}</div>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Decrease ${label}`} className={btn}>
          −
        </button>
        <span className={`min-w-[20px] text-center text-[15px] font-semibold tabular-nums ${glass ? "text-pearl" : "text-ink"}`}>{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`Increase ${label}`} className={btn}>
          +
        </button>
      </div>
    </div>
  );
}
