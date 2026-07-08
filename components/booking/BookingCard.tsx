"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, CalendarDays, Moon, Tag, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useBooking } from "@/lib/store/booking";

const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WD1 = ["S", "M", "T", "W", "T", "F", "S"];
const MO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MOF = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const pad = (n: number) => String(n).padStart(2, "0");
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const todayISO = () => iso(new Date());
function addDaysISO(s: string, n: number) {
  const d = new Date(s + "T00:00:00");
  d.setDate(d.getDate() + n);
  return iso(d);
}
function parts(s: string) {
  const d = new Date(s + "T00:00:00");
  return { wd: WD[d.getDay()], day: d.getDate(), mo: MO[d.getMonth()], y: d.getFullYear(), m: d.getMonth() };
}

export default function BookingCard() {
  const router = useRouter();
  const { query, setQuery } = useBooking();

  const [people, setPeople] = useState<number>(query?.adults ?? 2);
  const [morePeople, setMorePeople] = useState(false);
  const [checkIn, setCheckIn] = useState<string>(query?.checkIn ?? todayISO());
  const [nights, setNights] = useState<number>(3);

  const start = todayISO();
  const quick = Array.from({ length: 6 }, (_, i) => addDaysISO(start, i));
  const isQuick = quick.includes(checkIn);

  // calendar view state
  const [showCal, setShowCal] = useState(false);
  const ci = parts(checkIn);
  const [vy, setVy] = useState(ci.y);
  const [vm, setVm] = useState(ci.m);

  const checkOut = addDaysISO(checkIn, nights);
  const co = parts(checkOut);

  function proceed() {
    setQuery({
      ...(query ?? { children: 0, rooms: 1 }),
      adults: people,
      children: query?.children ?? 0,
      rooms: query?.rooms ?? 1,
      checkIn,
      checkOut,
      promoCode: query?.promoCode,
    });
    router.push("/book/results");
  }

  // month grid
  const firstDow = new Date(vy, vm, 1).getDay();
  const dim = new Date(vy, vm + 1, 0).getDate();
  const cells: (string | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= dim; d++) cells.push(`${vy}-${pad(vm + 1)}-${pad(d)}`);
  const canPrev = new Date(vy, vm, 1) > new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  function prevMonth() {
    if (!canPrev) return;
    const m = vm - 1;
    if (m < 0) { setVm(11); setVy(vy - 1); } else setVm(m);
  }
  function nextMonth() {
    const m = vm + 1;
    if (m > 11) { setVm(0); setVy(vy + 1); } else setVm(m);
  }

  return (
    <div className="w-full max-w-[540px] overflow-hidden rounded-[24px] bg-white shadow-[0_50px_120px_-38px_rgba(20,15,8,0.55)] ring-1 ring-black/[0.06]">
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-coral to-transparent opacity-70" />
      <div className="p-7 md:p-9">
        {/* header */}
        <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-coral">The Ivywall · Panglao</div>
        <h1 className="mt-2 font-display text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.02] text-ink">
          Reserve your stay.
        </h1>

        {/* Guests */}
        <SectionLabel icon={<Users className="h-3.5 w-3.5" />} n={`${people} ${people === 1 ? "guest" : "guests"}`}>
          Guests
        </SectionLabel>
        <div className="grid grid-cols-7 gap-2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <Pill key={n} active={!morePeople && people === n} onClick={() => { setPeople(n); setMorePeople(false); }}>
              {n}
            </Pill>
          ))}
          <Pill active={morePeople} onClick={() => setMorePeople(true)}>…</Pill>
        </div>
        {morePeople && (
          <div className="mt-2.5 flex items-center justify-center gap-4 rounded-xl border border-clay/12 py-2">
            <button type="button" onClick={() => setPeople((p) => Math.max(1, p - 1))} className="grid h-8 w-8 place-items-center rounded-full border border-clay/20 text-lg text-ink hover:border-coral hover:text-coral">−</button>
            <span className="min-w-8 text-center text-[16px] font-bold tabular-nums text-ink">{people}</span>
            <button type="button" onClick={() => setPeople((p) => Math.min(20, p + 1))} className="grid h-8 w-8 place-items-center rounded-full border border-clay/20 text-lg text-ink hover:border-coral hover:text-coral">+</button>
          </div>
        )}

        {/* Check-in */}
        <SectionLabel
          icon={<CalendarDays className="h-3.5 w-3.5" />}
          n={`${parts(checkIn).wd} ${parts(checkIn).day} ${parts(checkIn).mo}`}
        >
          Check-in
        </SectionLabel>

        {!showCal ? (
          <div className="grid grid-cols-7 gap-2">
            {quick.map((d, i) => {
              const p = parts(d);
              return (
                <DatePill key={d} active={isQuick && checkIn === d} top={i === 0 ? "Today" : p.wd} day={p.day} mo={p.mo} onClick={() => setCheckIn(d)} />
              );
            })}
            <button
              type="button"
              onClick={() => { setShowCal(true); setVy(parts(checkIn).y); setVm(parts(checkIn).m); }}
              className={`flex h-[62px] flex-col items-center justify-center rounded-xl border text-[15px] font-semibold transition ${
                !isQuick ? "border-ink bg-ink text-white" : "border-clay/15 bg-white text-ink hover:border-ink/30"
              }`}
            >
              …
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-clay/12 p-3.5">
            <div className="flex items-center justify-between px-1">
              <button type="button" onClick={prevMonth} disabled={!canPrev} className="grid h-8 w-8 place-items-center rounded-full text-ink transition hover:bg-pearl-warm disabled:opacity-25">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-display text-[17px] font-semibold text-ink">{MOF[vm]} {vy}</span>
              <button type="button" onClick={nextMonth} className="grid h-8 w-8 place-items-center rounded-full text-ink transition hover:bg-pearl-warm">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 grid grid-cols-7 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-clay/70">
              {WD1.map((w, i) => (<span key={i} className="py-1">{w}</span>))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {cells.map((d, i) =>
                d === null ? (
                  <span key={i} />
                ) : (
                  <button
                    key={i}
                    type="button"
                    disabled={d < start}
                    onClick={() => { setCheckIn(d); setShowCal(false); }}
                    className={`grid h-9 place-items-center rounded-lg text-[14px] font-semibold tabular-nums transition ${
                      d === checkIn ? "bg-ink text-white" : d < start ? "text-clay/25" : "text-ink hover:bg-pearl-warm"
                    }`}
                  >
                    {parts(d).day}
                  </button>
                )
              )}
            </div>
            <button type="button" onClick={() => setShowCal(false)} className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-coral-deep">
              <ChevronLeft className="h-3 w-3" /> Quick dates
            </button>
          </div>
        )}

        {/* Nights */}
        <SectionLabel icon={<Moon className="h-3.5 w-3.5" />} n={`${nights} ${nights === 1 ? "night" : "nights"}`}>
          Nights
        </SectionLabel>
        <div className="grid grid-cols-7 gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Pill key={n} active={nights === n} onClick={() => setNights(n)}>{n}</Pill>
          ))}
        </div>

        {/* summary */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[12.5px] text-clay">
          <span className="font-semibold text-ink">{parts(checkIn).wd} {parts(checkIn).day} {parts(checkIn).mo}</span>
          <ArrowRight className="h-3.5 w-3.5 text-coral" />
          <span className="font-semibold text-ink">{co.wd} {co.day} {co.mo}</span>
          <span className="text-clay/60">·</span>
          <span>{nights} {nights === 1 ? "night" : "nights"}, {people} {people === 1 ? "guest" : "guests"}</span>
        </div>

        <button
          onClick={proceed}
          className="mt-4 w-full rounded-2xl bg-gradient-to-b from-coral to-coral-deep py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-14px_rgba(245,112,10,0.8)] transition hover:brightness-105 active:scale-[0.99]"
        >
          Continue
        </button>

        <PromoField
          value={query?.promoCode ?? ""}
          onChange={(v) => setQuery({ ...(query as NonNullable<typeof query>), promoCode: v || undefined })}
        />

        <p className="mt-5 text-center text-[12.5px] text-clay">
          Call us on{" "}
          <a href="tel:+6303841211128" className="font-semibold text-coral-deep">+63 (038) 412 1128</a>{" "}
          if you have any questions.
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ icon, n, children }: { icon: React.ReactNode; n?: string; children: React.ReactNode }) {
  return (
    <div className="mb-2.5 mt-6 flex items-center justify-between">
      <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
        <span className="text-coral">{icon}</span>
        {children}
      </span>
      {n && <span className="text-[11px] font-semibold text-clay">{n}</span>}
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-12 items-center justify-center rounded-xl border text-[15px] font-semibold transition ${
        active ? "border-ink bg-ink text-white" : "border-clay/15 bg-white text-ink hover:border-ink/30"
      }`}
    >
      {children}
    </button>
  );
}

function DatePill({ active, top, day, mo, onClick }: { active: boolean; top: string; day: number; mo: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[62px] flex-col items-center justify-center rounded-xl border leading-none transition ${
        active ? "border-ink bg-ink text-white" : "border-clay/15 bg-white text-ink hover:border-ink/30"
      }`}
    >
      <span className="text-[8.5px] font-bold uppercase tracking-[0.08em] opacity-80">{top}</span>
      <span className="mt-1 text-[17px] font-bold tabular-nums">{day}</span>
      <span className="mt-1 text-[8.5px] font-bold uppercase tracking-[0.08em] opacity-80">{mo}</span>
    </button>
  );
}

function PromoField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(!!value);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-clay/20 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-coral-deep transition hover:border-coral/50"
      >
        <Tag className="h-3.5 w-3.5" />
        Redeem gift card or code
      </button>
    );
  }
  return (
    <input
      type="text"
      autoFocus
      placeholder="Promo or gift code"
      value={value}
      onChange={(e) => onChange(e.target.value.toUpperCase())}
      className="mt-3 w-full rounded-2xl border border-clay/20 px-4 py-3 text-center text-[14px] font-semibold uppercase tracking-[0.1em] text-ink outline-none placeholder:font-normal placeholder:tracking-normal placeholder:text-clay/50 focus:border-coral"
    />
  );
}
