"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";
import IllustrationSpot from "@/components/ui/IllustrationSpot";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container-x pt-10 pb-16 md:pt-14">
      <div className="max-w-3xl">
        <SectionDivider label="Contact" className="max-w-[120px]" />
        <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
          We're here, and we answer.
        </h1>
        <p className="mt-3 text-[15px] text-clay">
          For reservations, special requests, group enquiries, or just to say hi to Ivy — our team replies within one business day.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-clay/10 bg-pearl p-6 shadow-soft">
          {sent ? (
            <div className="rounded-2xl bg-palm/15 p-4 text-[14px] text-palm-deep">
              <Check className="-mt-0.5 mr-1 inline h-4 w-4" />
              Thank you — we've received your message. (Prototype: not actually sent.)
            </div>
          ) : (
            <form
              className="grid gap-3 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Name"><input className="ivy-input" required /></Field>
              <Field label="Email"><input className="ivy-input" type="email" required /></Field>
              <Field label="Subject" full>
                <select className="ivy-input">
                  {["Reservations", "Group booking", "Wedding enquiry", "Press / Media", "Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Message" full><textarea className="ivy-input min-h-[120px]" required /></Field>
              <div className="md:col-span-2">
                <Button type="submit" variant="primary" size="lg" full>Send message</Button>
              </div>
            </form>
          )}
        </div>
        <aside className="rounded-3xl border border-amber/30 bg-gradient-to-br from-pearl via-pearl-warm to-amber-soft p-6 shadow-warm">
          <h3 className="font-display text-2xl text-ink">Reach the resort</h3>
          <ul className="mt-4 grid gap-3 text-[14px] text-ink">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-palm" /> +63 38 502 9000</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-palm" /> reservations@ivywall.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-palm" /> Tawala, Alona Beach Road, Panglao Island, Bohol 6340</li>
          </ul>
          <div className="mt-5 opacity-80">
            <IllustrationSpot kind="bangka" size={120} color="#C4540A" accent="#F5700A" />
          </div>
        </aside>
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
