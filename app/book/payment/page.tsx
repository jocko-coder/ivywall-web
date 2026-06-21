"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, CreditCard, Wallet, ShieldCheck } from "lucide-react";
import clsx from "clsx";
import Stepper from "@/components/booking/Stepper";
import BookingSummary from "@/components/booking/BookingSummary";
import Button from "@/components/ui/Button";
import { useBooking } from "@/lib/store/booking";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { PaymentMethod } from "@/lib/types";

const METHODS: { code: PaymentMethod; label: string; tag?: string; tagKey?: string }[] = [
  { code: "card", label: "Card", tag: "Visa · Mastercard · Amex" },
  { code: "gcash", label: "GCash", tagKey: "book.tagEwalletPH" },
  { code: "maya", label: "Maya", tagKey: "book.tagEwalletPH" },
  { code: "paypal", label: "PayPal", tagKey: "book.tagGlobal" },
  { code: "alipay", label: "Alipay", tag: "支付宝 · 中国" },
];

export default function PaymentPage() {
  const { t } = useI18n();
  const router = useRouter();
  const { roomTypeId, ratePlan, guest, setPayment, confirm } = useBooking();
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [card, setCard] = useState({ cardNumber: "", cardName: "", expiry: "", cvc: "" });
  const [processing, setProcessing] = useState(false);

  // Guard: a payment page reached without a chosen room/rate or guest details
  // is a dead end — send the user back to the right step instead.
  useEffect(() => {
    if (!roomTypeId || !ratePlan) router.replace("/book/results");
    else if (!guest) router.replace("/book/details");
  }, [roomTypeId, ratePlan, guest, router]);

  function pay(e: React.FormEvent) {
    e.preventDefault();
    setProcessing(true);
    setPayment({ method, ...(method === "card" ? card : { walletToken: `mock_${method}_${Date.now()}` }) });
    // TODO: payment gateway integration (Stripe / PayMongo / DragonPay).
    setTimeout(() => {
      confirm();
      router.push("/book/confirmation");
    }, 900);
  }

  return (
    <div className="container-x pt-10">
      <Stepper active="payment" />
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <form onSubmit={pay} className="rounded-3xl border border-clay/15 bg-pearl p-6 shadow-soft">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl text-ink">{t("book.payTitle")}</h1>
              <p className="text-[13px] text-clay">{t("book.payMock")}</p>
            </div>
            <div className="hidden items-center gap-2 rounded-full bg-palm/10 px-3 py-1.5 text-[11px] font-semibold text-palm-deep md:inline-flex">
              <Lock className="h-3 w-3" /> {t("book.secured")}
            </div>
          </div>

          <div className="mt-5">
            <div className="small-caps font-display text-[11px] text-clay">{t("book.payMethod")}</div>
            <div className="mt-2 grid gap-2 md:grid-cols-5">
              {METHODS.map((m) => (
                <button
                  type="button"
                  key={m.code}
                  onClick={() => setMethod(m.code)}
                  className={clsx(
                    "flex flex-col rounded-2xl border p-3 text-left transition",
                    method === m.code ? "border-coral bg-pearl-warm shadow-warm" : "border-clay/15 bg-pearl hover:bg-pearl-warm"
                  )}
                >
                  <span className="flex items-center gap-1 text-[13px] font-semibold text-ink">
                    {m.code === "card" ? <CreditCard className="h-3.5 w-3.5" /> : <Wallet className="h-3.5 w-3.5" />}
                    {m.label}
                  </span>
                  <span className="text-[11px] text-clay">{m.tagKey ? t(m.tagKey) : m.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {method === "card" && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label={t("book.fCardNumber")} full>
                <input
                  value={card.cardNumber}
                  onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
                  className="ivy-input"
                  placeholder="1234 5678 9012 3456"
                  inputMode="numeric"
                />
              </Field>
              <Field label={t("book.fCardName")} full>
                <input value={card.cardName} onChange={(e) => setCard({ ...card, cardName: e.target.value })} className="ivy-input" />
              </Field>
              <Field label={t("book.fExpiry")}>
                <input value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} className="ivy-input" placeholder="MM/YY" />
              </Field>
              <Field label={t("book.fCvc")}>
                <input value={card.cvc} onChange={(e) => setCard({ ...card, cvc: e.target.value })} className="ivy-input" placeholder="123" inputMode="numeric" />
              </Field>
            </div>
          )}

          {method === "gcash" && (
            <WalletPanel brand="GCash" accent="#0079FE" body={t("book.walletGcash")} />
          )}
          {method === "maya" && (
            <WalletPanel brand="Maya" accent="#00BE6E" body={t("book.walletMaya")} />
          )}
          {method === "paypal" && (
            <WalletPanel brand="PayPal" accent="#003087" body={t("book.walletPaypal")} />
          )}
          {method === "alipay" && (
            <WalletPanel brand="Alipay 支付宝" accent="#1677FF" body={t("book.walletAlipay")} />
          )}

          <ul className="mt-6 grid gap-2 text-[12.5px] text-clay md:grid-cols-3">
            <li className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 text-palm-deep" /> {t("book.payFn1")}</li>
            <li className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 text-palm-deep" /> {t("book.payFn2")}</li>
            <li className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 text-palm-deep" /> {t("book.payFn3")}</li>
          </ul>

          <div className="mt-6 flex justify-between gap-3">
            <Link href="/book/details"><Button variant="secondary" type="button">{t("common.back")}</Button></Link>
            <Button size="lg" variant="primary" type="submit" disabled={processing}>
              {processing ? t("book.processing") : t("book.confirmPay")}
            </Button>
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

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={full ? "md:col-span-2 block" : "block"}>
      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-clay">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function WalletPanel({ brand, accent, body }: { brand: string; accent: string; body: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-clay/15 bg-pearl-warm p-5 text-[14px]">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full text-pearl font-bold"
          style={{ background: accent }}
        >
          {brand[0]}
        </span>
        <div className="font-display text-lg text-ink">{brand}</div>
      </div>
      <p className="mt-3 text-clay">{body}</p>
    </div>
  );
}
