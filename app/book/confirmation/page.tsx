"use client";

import Link from "next/link";
import { CalendarPlus, Check, ExternalLink, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Stepper from "@/components/booking/Stepper";
import BookingSummary from "@/components/booking/BookingSummary";
import Button from "@/components/ui/Button";
import { useBooking } from "@/lib/store/booking";
import { roomTypes } from "@/lib/mock/rooms";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function ConfirmationPage() {
  const { t } = useI18n();
  const { confirmationCode, query, guest, roomTypeId } = useBooking();
  const room = roomTypes.find((r) => r.id === roomTypeId);

  if (!confirmationCode || !query) {
    return (
      <div className="container-x pt-10 text-center">
        <Stepper active="confirmation" />
        <p className="text-clay">{t("book.noBooking")}</p>
        <Link href="/book"><Button className="mt-4">{t("book.startBooking")}</Button></Link>
      </div>
    );
  }

  return (
    <div className="container-x pt-10">
      <Stepper active="confirmation" />
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[32px] border border-amber/30 bg-gradient-to-br from-pearl via-pearl-warm to-amber-soft p-8 shadow-deep"
        >
          <div className="absolute -right-6 -top-6 opacity-30 blur-2xl">
            <div className="h-40 w-40 rounded-full bg-amber" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-palm/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-palm-deep">
              <Check className="h-3.5 w-3.5" /> {t("book.confirmed")}
            </div>
            <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
              {t("book.thanks")}{guest ? `, ${guest.firstName}` : ""}!
            </h1>
            <p className="mt-2 max-w-xl text-[14.5px] text-clay">
              {t("book.confirmBody").replace("{email}", guest?.email ?? t("book.yourInbox"))}
            </p>
          </div>

          <div className="mt-6 grid gap-4 rounded-3xl border border-clay/10 bg-pearl p-5 md:grid-cols-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-clay">{t("book.labelConfirmation")}</div>
              <div className="font-display text-2xl text-ink">{confirmationCode}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-clay">{t("book.labelCheckIn")}</div>
              <div className="font-display text-lg text-ink">
                {new Date(query.checkIn).toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" })}
              </div>
              <div className="text-[12px] text-clay">{t("book.afterTime")}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-clay">{t("book.labelCheckOut")}</div>
              <div className="font-display text-lg text-ink">
                {new Date(query.checkOut).toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" })}
              </div>
              <div className="text-[12px] text-clay">{t("book.beforeTime")}</div>
            </div>
            {room && (
              <div className="md:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.16em] text-clay">{t("book.labelRoom")}</div>
                <div className="font-display text-lg text-ink">{room.name} · {room.view} {t("book.viewWord")}</div>
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Button variant="secondary" leadingIcon={<CalendarPlus className="h-4 w-4" />}>{t("book.addCalendar")}</Button>
            <Button variant="secondary" leadingIcon={<Mail className="h-4 w-4" />}>{t("book.emailReceipt")}</Button>
            <a href="https://ivywall-app.vercel.app/" target="_blank" rel="noreferrer">
              <Button variant="primary" full leadingIcon={<Sparkles className="h-4 w-4" />} trailingIcon={<ExternalLink className="h-3.5 w-3.5" />}>
                {t("book.continueApp")}
              </Button>
            </a>
          </div>

          <div className="mt-6 rounded-2xl bg-palm-night p-5 text-pearl">
            <div className="font-display text-xl">{t("book.beforeArrive")}</div>
            <p className="mt-1 text-[13.5px] text-pearl/85">
              {t("book.beforeArriveBody")}
            </p>
            <a
              href="https://ivywall-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-amber-glow"
            >
              {t("book.openApp")} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        <BookingSummary />
      </div>
    </div>
  );
}
