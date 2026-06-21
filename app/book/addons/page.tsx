"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Stepper from "@/components/booking/Stepper";
import BookingSummary from "@/components/booking/BookingSummary";
import AddOnCard from "@/components/ui/AddOnCard";
import Button from "@/components/ui/Button";
import { addOns } from "@/lib/mock/addOns";
import { useBooking } from "@/lib/store/booking";
import { useI18n } from "@/lib/i18n/I18nProvider";

const GROUPS = [
  { cat: "Dining", key: "book.grpDining" },
  { cat: "Transfer", key: "book.grpTransfer" },
  { cat: "Wellness", key: "book.grpWellness" },
  { cat: "Romance", key: "book.grpRomance" },
  { cat: "Tour", key: "book.grpTour" },
  { cat: "Service", key: "book.grpService" },
] as const;

export default function AddOnsPage() {
  const { t } = useI18n();
  const router = useRouter();
  const { addOnIds, toggleAddOn, roomTypeId, ratePlan } = useBooking();

  // Guard: add-ons only make sense after a room + rate are chosen.
  useEffect(() => {
    if (!roomTypeId || !ratePlan) router.replace("/book/results");
  }, [roomTypeId, ratePlan, router]);

  return (
    <div className="container-x pt-10">
      <Stepper active="addons" />
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <div>
          <h1 className="font-display text-3xl text-ink">{t("book.addonsTitle")}</h1>
          <p className="mt-1 text-[14px] text-clay">
            {t("book.addonsBody")}
          </p>

          <div className="mt-6 space-y-7">
            {GROUPS.map((g) => {
              const items = addOns.filter((a) => a.category === g.cat);
              if (items.length === 0) return null;
              return (
                <section key={g.cat}>
                  <h3 className="small-caps font-display text-[11px] text-clay">{t(g.key)}</h3>
                  <div className="mt-2 grid gap-3 md:grid-cols-2">
                    {items.map((a) => (
                      <AddOnCard
                        key={a.id}
                        addOn={a}
                        selected={addOnIds.includes(a.id)}
                        onToggle={() => toggleAddOn(a.id)}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between gap-3">
            <Link href="/book/room"><Button variant="secondary">{t("common.back")}</Button></Link>
            <Button onClick={() => router.push("/book/details")} size="lg" variant="primary">
              {t("book.continueDetails")}
            </Button>
          </div>
        </div>
        <BookingSummary />
      </div>
    </div>
  );
}
