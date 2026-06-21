"use client";

import { useBooking, nightsBetween, calcAddOnTotal } from "@/lib/store/booking";
import { roomTypes, ratePlans } from "@/lib/mock/rooms";
import { addOns } from "@/lib/mock/addOns";
import PriceTag from "@/components/ui/PriceTag";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function BookingSummary({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  const { query, roomTypeId, ratePlan, addOnIds } = useBooking();
  if (!query) return null;
  const nights = nightsBetween(query.checkIn, query.checkOut);
  const room = roomTypes.find((r) => r.id === roomTypeId);
  const plan = ratePlans.find((p) => p.code === ratePlan);
  const roomTotal = room && plan ? Math.round(room.baseRate * plan.multiplier * nights) : 0;
  const addOnTotal = calcAddOnTotal(addOns, addOnIds, query.adults, nights);
  const taxes = Math.round((roomTotal + addOnTotal) * 0.12);
  const grand = roomTotal + addOnTotal + taxes;

  return (
    <aside className="sticky top-24 space-y-4 rounded-3xl border border-clay/15 bg-pearl p-5 shadow-soft">
      <div>
        <div className="small-caps font-display text-[10px] text-clay">{t("book.yourStay")}</div>
        <div className="font-display text-lg text-ink">
          {new Date(query.checkIn).toLocaleDateString("en-US", { month: "short", day: "numeric" })} →{" "}
          {new Date(query.checkOut).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </div>
        <div className="text-[12px] text-clay">
          {nights} {t(nights === 1 ? "book.night" : "book.nights")} · {query.adults} {t(query.adults === 1 ? "book.adult" : "book.adults")}
          {query.children > 0 ? `, ${query.children} ${t(query.children === 1 ? "book.child" : "book.children")}` : ""}
          {" "}· {query.rooms} {t(query.rooms === 1 ? "book.roomU" : "book.roomsU")}
        </div>
      </div>

      {room && (
        <div className="rounded-2xl border border-clay/10 bg-pearl-warm p-3">
          <div className="text-[11px] uppercase tracking-[0.16em] text-clay">{room.category}</div>
          <div className="font-display text-[15px] text-ink">{room.name}</div>
          {plan && <div className="mt-1 text-[12px] text-coral">{plan.name}</div>}
        </div>
      )}

      {!compact && room && (
        <ul className="space-y-2 text-[13px]">
          <Row label={t("book.roomLine").replace("{n}", String(nights))} value={roomTotal} />
          {addOnIds.map((id) => {
            const a = addOns.find((x) => x.id === id);
            if (!a) return null;
            const sub = a.unit === "per person" ? a.price * query.adults : a.unit === "per night" ? a.price * nights : a.price;
            return <Row key={id} label={a.name} value={sub} small />;
          })}
          <Row label={t("book.taxes")} value={taxes} small />
        </ul>
      )}

      <div className="flex items-end justify-between border-t border-clay/15 pt-3">
        <div className="text-[11px] uppercase tracking-[0.16em] text-clay">{t("book.total")}</div>
        <PriceTag php={grand} size="lg" />
      </div>

      <ul className="space-y-1 text-[12px] text-clay">
        <li className="inline-flex items-center gap-1.5"><Check className="h-3 w-3 text-palm" /> {t("book.sumInstant")}</li>
        <li className="inline-flex items-center gap-1.5"><Check className="h-3 w-3 text-palm" /> {t("book.sumWifi")}</li>
        <li className="inline-flex items-center gap-1.5"><Check className="h-3 w-3 text-palm" /> {t("book.sumSecure")}</li>
      </ul>
    </aside>
  );
}

function Row({ label, value, small }: { label: string; value: number; small?: boolean }) {
  return (
    <li className={`flex items-baseline justify-between ${small ? "text-clay" : "text-ink"}`}>
      <span>{label}</span>
      <PriceTag php={value} size="sm" />
    </li>
  );
}
