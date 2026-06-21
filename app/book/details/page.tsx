"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Stepper from "@/components/booking/Stepper";
import BookingSummary from "@/components/booking/BookingSummary";
import Button from "@/components/ui/Button";
import { useBooking } from "@/lib/store/booking";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function DetailsPage() {
  const { t } = useI18n();
  const router = useRouter();
  const { setGuest, roomTypeId, ratePlan } = useBooking();

  // Guard: guest details require a chosen room + rate first.
  useEffect(() => {
    if (!roomTypeId || !ratePlan) router.replace("/book/results");
  }, [roomTypeId, ratePlan, router]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Philippines",
    arrivalTime: "15:00",
    specialRequests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function next(e: React.FormEvent) {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!form.firstName) er.firstName = t("book.errRequired");
    if (!form.lastName) er.lastName = t("book.errRequired");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = t("book.errEmail");
    if (!form.phone || form.phone.length < 7) er.phone = t("book.errPhone");
    setErrors(er);
    if (Object.keys(er).length === 0) {
      setGuest(form);
      router.push("/book/payment");
    }
  }

  return (
    <div className="container-x pt-10">
      <Stepper active="details" />
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <form onSubmit={next} className="space-y-5 rounded-3xl border border-clay/15 bg-pearl p-6 shadow-soft">
          <h1 className="font-display text-3xl text-ink">{t("book.detailsTitle")}</h1>
          <p className="text-[13px] text-clay">{t("book.detailsBody")}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label={t("book.fFirstName")} error={errors.firstName}>
              <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="ivy-input" />
            </Field>
            <Field label={t("book.fLastName")} error={errors.lastName}>
              <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="ivy-input" />
            </Field>
            <Field label={t("book.fEmail")} error={errors.email}>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="ivy-input" />
            </Field>
            <Field label={t("book.fMobile")} error={errors.phone}>
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="ivy-input" placeholder="+63 ..." />
            </Field>
            <Field label={t("book.fCountry")}>
              <select value={form.country} onChange={(e) => update("country", e.target.value)} className="ivy-input">
                {["Philippines", "Japan", "Korea", "China", "Hong Kong", "Singapore", "United States", "United Kingdom", "Australia", "Other"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label={t("book.fArrival")}>
              <select value={form.arrivalTime} onChange={(e) => update("arrivalTime", e.target.value)} className="ivy-input">
                {["10:00", "12:00", "14:00", "15:00", "17:00", "19:00", "21:00", "23:00"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label={t("book.fRequests")}>
            <textarea
              value={form.specialRequests}
              onChange={(e) => update("specialRequests", e.target.value)}
              className="ivy-input min-h-[88px] py-2"
              placeholder={t("book.requestsPlaceholder")}
            />
          </Field>

          <div className="flex items-center gap-2 rounded-2xl bg-pearl-warm p-3 text-[12.5px] text-clay">
            <input id="terms" type="checkbox" defaultChecked className="h-4 w-4 accent-coral" />
            <label htmlFor="terms">
              {t("book.terms")}
            </label>
          </div>

          <div className="flex justify-between gap-3">
            <Link href="/book/addons"><Button variant="secondary" type="button">{t("common.back")}</Button></Link>
            <Button size="lg" variant="primary" type="submit">{t("book.continuePayment")}</Button>
          </div>
        </form>
        <BookingSummary />
      </div>

      <style jsx global>{`
        .ivy-input {
          width: 100%;
          border-radius: 14px;
          border: 1px solid rgba(107,93,79,.18);
          background: #FBFAF6;
          padding: 0.625rem 0.875rem;
          font-size: 14px;
          color: #221C18;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .ivy-input:focus {
          border-color: #F5700A;
          box-shadow: 0 0 0 3px rgba(245,112,10,.12);
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-clay">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1 block text-[11px] text-terracotta-deep">{error}</span>}
    </label>
  );
}
