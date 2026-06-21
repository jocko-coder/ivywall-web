"use client";

import { useMemo } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import Stepper from "@/components/booking/Stepper";
import BookingWidget from "@/components/booking/BookingWidget";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { roomTypes } from "@/lib/mock/rooms";
import { useBooking, nightsBetween } from "@/lib/store/booking";
import { useCurrency } from "@/lib/store/currency";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function ResultsPage() {
  const { t } = useI18n();
  const { query } = useBooking();
  const { currency } = useCurrency();

  const nights = useMemo(
    () => (query ? nightsBetween(query.checkIn, query.checkOut) : 1),
    [query]
  );

  return (
    <div className="container-x pt-10">
      <Stepper active="results" />
      <BookingWidget variant="hero" />

      <div className="mt-8 flex items-baseline justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl text-ink">{t("book.availableRooms")}</h1>
          <p className="text-[14px] text-clay">
            {nights} {t(nights === 1 ? "book.night" : "book.nights")} · {t("book.pricesIn")} {currency.code}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        {roomTypes.map((room, i) => {
          const left = i === 0 ? 2 : i === 2 ? 1 : null;
          return (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid overflow-hidden rounded-3xl border border-clay/15 bg-pearl shadow-soft md:grid-cols-[1.1fr_1.5fr_1fr]"
            >
              <PhotoFrame photo={room.gallery[0]} rounded="rounded-none" className="aspect-[16/10] md:aspect-auto md:min-h-[260px]" />
              <div className="flex flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="palm">{room.view} {t("book.viewWord")}</Badge>
                  {left && (
                    <Badge tone="terracotta">
                      <AlertCircle className="h-3 w-3" /> {t("book.onlyLeft").replace("{n}", String(left))}
                    </Badge>
                  )}
                </div>
                <div>
                  <div className="small-caps font-display text-[10px] text-clay">{room.category}</div>
                  <h3 className="font-display text-2xl text-ink leading-tight">{room.name}</h3>
                </div>
                <p className="text-[13.5px] leading-relaxed text-clay">{room.shortDesc}</p>
                <ul className="flex flex-wrap gap-1.5 text-[11px]">
                  {room.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-pearl-warm px-2 py-1 text-clay">{h}</li>
                  ))}
                </ul>
                <ul className="mt-1 grid grid-cols-2 gap-1 text-[12px] text-clay">
                  {room.amenities.slice(0, 4).map((a) => (
                    <li key={a} className="truncate before:mr-1.5 before:text-amber-deep before:content-['✦']">{a}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-3 border-t border-clay/10 bg-pearl-warm p-6 md:border-l md:border-t-0">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-clay">{t("book.from")}</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold text-ink">{currency.format(room.baseRate)}</span>
                    <span className="text-[12px] text-clay">{t("book.perNight")}</span>
                  </div>
                  <div className="mt-1 text-[12px] text-clay">{t("book.allInFor").replace("{n}", String(nights))} <strong className="text-ink">{currency.format(room.baseRate * nights)}</strong></div>
                </div>
                <Link href={`/book/room?room=${room.id}`}>
                  <Button full size="lg" variant="primary">{t("book.selectContinue")}</Button>
                </Link>
                <div className="text-center text-[11px] text-clay">{t("book.resultsFootnote")}</div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
