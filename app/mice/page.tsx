"use client";

import { useState } from "react";
import { Users, Calendar, Check } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";
import PhotoFrame from "@/components/ui/PhotoFrame";

const VENUES = [
  { id: "v1", name: "Capiz Ballroom", capacity: "200 cocktail · 140 banquet", desc: "Pillar-free, capiz-shell chandeliers, sea-facing pre-function." },
  { id: "v2", name: "Banig Boardroom", capacity: "24 boardroom · 36 theatre", desc: "Daylight-lit, fibre wifi, conference grade AV." },
  { id: "v3", name: "Tarsier Studio", capacity: "60 classroom · 100 theatre", desc: "Multi-purpose, divisible, opens to a garden break-out area." },
  { id: "v4", name: "Bohol Garden Lawn", capacity: "180 ceremony · 220 cocktail", desc: "Open-air wedding lawn under coconut palms with sea breeze." },
];

export default function MicePage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "Meeting", date: "", attendees: 20, notes: "" });
  const [sent, setSent] = useState(false);
  return (
    <div className="container-x pt-10 pb-16 md:pt-14">
      <div className="max-w-3xl">
        <SectionDivider label="Meetings & Weddings" className="max-w-[260px]" />
        <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
          Beautiful meetings. Honest weddings.
        </h1>
        <p className="mt-3 text-[15px] text-clay">
          Four flexible spaces — from a sea-facing ballroom to an open-air garden lawn — each set up with a service team that genuinely cares about the day going well.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {VENUES.map((v, i) => (
          <article key={v.id} className="overflow-hidden rounded-3xl border border-clay/10 bg-pearl shadow-soft">
            <PhotoFrame
              photo={{
                label: v.name,
                gradient: i % 2 === 0 ? "from-amber-warm via-amber to-terracotta" : "from-palm via-palm-deep to-ink",
                illustration: i % 2 === 0 ? "capiz-window" : "banana-leaf",
              }}
              rounded="rounded-none"
              className="aspect-[16/10]"
            />
            <div className="p-5">
              <h3 className="font-display text-xl text-ink">{v.name}</h3>
              <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-pearl-warm px-2.5 py-1 text-[11px] text-clay">
                <Users className="h-3 w-3" /> {v.capacity}
              </div>
              <p className="mt-2 text-[13px] text-clay">{v.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-clay/10 bg-pearl p-6 shadow-soft">
          <h2 className="font-display text-2xl text-ink">Request a proposal</h2>
          <p className="mt-1 text-[13px] text-clay">Tell us a bit and our events team will be in touch within one business day.</p>
          {sent ? (
            <div className="mt-5 rounded-2xl bg-palm/15 p-4 text-[13px] text-palm-deep">
              <Check className="-mt-0.5 mr-1 inline h-4 w-4" />
              Thank you — your request has been received. (Prototype: not actually sent.)
            </div>
          ) : (
            <form
              className="mt-5 grid gap-3 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Your name"><input className="ivy-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></Field>
              <Field label="Email"><input className="ivy-input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></Field>
              <Field label="Company / organization"><input className="ivy-input" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></Field>
              <Field label="Event type">
                <select className="ivy-input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {["Meeting", "Conference", "Wedding", "Anniversary", "Incentive Trip", "Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Preferred date"><input className="ivy-input" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required /></Field>
              <Field label="Attendees"><input className="ivy-input" type="number" min={1} value={form.attendees} onChange={(e) => setForm({ ...form, attendees: Number(e.target.value) })} /></Field>
              <Field label="Notes" full><textarea className="ivy-input min-h-[88px]" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></Field>
              <div className="md:col-span-2">
                <Button type="submit" variant="primary" size="lg" full>Send request</Button>
              </div>
            </form>
          )}
        </div>
        <aside className="rounded-3xl border border-amber/30 bg-gradient-to-br from-pearl via-pearl-warm to-amber-soft p-6 shadow-warm">
          <h3 className="font-display text-2xl text-ink">For weddings</h3>
          <p className="mt-2 text-[13.5px] text-clay">
            Our wedding team has shaped quiet sea-side ceremonies and family-sized destination weddings. Garden vows, capiz-shell ballrooms, and Tereza rooftop receptions are popular choices.
          </p>
          <ul className="mt-4 grid gap-1 text-[13px] text-ink">
            <li className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-palm" /> Wedding planner included</li>
            <li className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-palm" /> Sunset ceremony slots</li>
            <li className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-palm" /> Group room rates</li>
          </ul>
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
