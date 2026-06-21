"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Stepper from "@/components/booking/Stepper";
import BookingSummary from "@/components/booking/BookingSummary";
import RateOption from "@/components/ui/RateOption";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ratePlans, roomTypes } from "@/lib/mock/rooms";
import { useBooking, nightsBetween } from "@/lib/store/booking";
import { useI18n } from "@/lib/i18n/I18nProvider";

function RoomChooserInner() {
  const { t } = useI18n();
  const router = useRouter();
  const params = useSearchParams();
  const roomParam = params.get("room");
  const { query, roomTypeId, setRoom, ratePlan, setRate } = useBooking();

  useEffect(() => {
    if (roomParam && roomParam !== roomTypeId) setRoom(roomParam);
  }, [roomParam, roomTypeId, setRoom]);

  const room = roomTypes.find((r) => r.id === (roomParam ?? roomTypeId));
  const nights = query ? nightsBetween(query.checkIn, query.checkOut) : 1;

  if (!room || !query) {
    return (
      <div className="container-x pt-10">
        <Stepper active="room" />
        <p className="text-clay">{t("book.chooseRoomFirst")}</p>
        <Link href="/book/results"><Button className="mt-4">{t("book.backToResults")}</Button></Link>
      </div>
    );
  }

  return (
    <div className="container-x pt-10">
      <Stepper active="rate" />
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="grid gap-3 md:grid-cols-3">
            {room.gallery.map((p, i) => (
              <PhotoFrame
                key={i}
                photo={p}
                className={i === 0 ? "aspect-[16/10] md:col-span-3 md:aspect-[21/9]" : "aspect-[4/3]"}
              />
            ))}
          </div>

          <div className="mt-6">
            <Badge tone="dark">{room.view} {t("book.viewWord")}</Badge>
            <h1 className="mt-2 font-display text-4xl text-ink leading-tight">{room.name}</h1>
            <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-clay">{room.longDesc}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-[13px] text-ink md:grid-cols-3">
              {room.amenities.map((a) => (
                <li key={a} className="rounded-2xl bg-pearl-warm px-3 py-2 before:mr-1.5 before:text-amber-deep before:content-['✦']">{a}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-2xl text-ink">{t("book.chooseRate")}</h2>
            <p className="text-[13px] text-clay">{t("book.rateNote")}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {ratePlans.map((p) => (
                <RateOption
                  key={p.code}
                  plan={p}
                  baseRate={room.baseRate}
                  nights={nights}
                  selected={ratePlan === p.code}
                  onSelect={() => setRate(p.code)}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-3">
            <Link href="/book/results"><Button variant="secondary">{t("common.back")}</Button></Link>
            <Button
              onClick={() => router.push("/book/addons")}
              disabled={!ratePlan}
              size="lg"
              variant="primary"
            >
              {t("book.continueAddons")}
            </Button>
          </div>
        </div>
        <BookingSummary />
      </div>
    </div>
  );
}

export default function RoomChooserPage() {
  return (
    <Suspense fallback={<div className="container-x pt-10">Loading…</div>}>
      <RoomChooserInner />
    </Suspense>
  );
}
