"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Calendar, Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const EVENT_TYPES = [
  { title: "Weddings", desc: "Garden vows, capiz-shell ballrooms, and Teraza rooftop receptions — shaped by a planner who cares about the day.", photo: "/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg" },
  { title: "Meetings & Conferences", desc: "Daylight-lit rooms, conference-grade AV, fibre Wi-Fi, and breakouts that open to the garden.", photo: "/photos/BWPlus_Ivywall_12_Morning_Teraza.jpg" },
  { title: "Celebrations", desc: "Birthdays, anniversaries, reunions — under the coconut palms or the Bohol stars.", photo: "/photos/ivy_story_terrace_deck.jpg" },
];

const VENUES = [
  { id: "v1", name: "Capiz Ballroom", capacity: "200 cocktail · 140 banquet", desc: "Pillar-free, capiz-shell chandeliers, sea-facing pre-function.", photo: "/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg" },
  { id: "v2", name: "Banig Boardroom", capacity: "24 boardroom · 36 theatre", desc: "Daylight-lit, fibre Wi-Fi, conference-grade AV.", photo: "/photos/BWPlus_Ivywall_07_Restaurant.jpg" },
  { id: "v3", name: "Tarsier Studio", capacity: "60 classroom · 100 theatre", desc: "Multi-purpose, divisible, opens to a garden break-out area.", photo: "/photos/BWPlus_Ivywall_12_Morning_Teraza.jpg" },
  { id: "v4", name: "Bohol Garden Lawn", capacity: "180 ceremony · 220 cocktail", desc: "Open-air wedding lawn under coconut palms with sea breeze.", photo: "/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg" },
];

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
};

export default function MicePage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "Meeting", date: "", attendees: 20, notes: "" });
  const [sent, setSent] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60svh] min-h-[440px] overflow-hidden bg-palm-night">
        <Image src="/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg" alt="Teraza rooftop event space at night" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-palm-night via-palm-night/35 to-palm-night/40" />
        <div className="container-x absolute inset-x-0 bottom-0">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }} className="pb-11 md:pb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-glow">Meetings &amp; Events</span>
            <h1 className="mt-3 max-w-3xl font-display font-bold leading-[0.98] tracking-[-0.03em] text-pearl text-[clamp(38px,6vw,82px)]">
              Gather{" "}
              <em className="font-light italic text-gold-glow">on Alona.</em>
            </h1>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-pearl/80">
              Beautiful meetings, honest weddings, and celebrations under the palms — four flexible spaces and a team that genuinely cares about the day going well.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-3">
              {[["4", "Venues"], ["220", "Max guests"], ["1", "Planner included"]].map(([b, l]) => (
                <div key={l}><div className="font-display text-2xl font-semibold text-gold-glow">{b}</div><div className="text-[11px] uppercase tracking-[0.16em] text-pearl/60">{l}</div></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event types */}
      <motion.section {...fade} className="container-x py-14 md:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {EVENT_TYPES.map((e) => (
            <article key={e.title} className="group relative overflow-hidden rounded-[22px] shadow-soft">
              <div className="relative aspect-[4/5]">
                <Image src={e.photo} alt={e.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/5" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-display font-bold uppercase leading-none tracking-[-0.01em] text-pearl text-[22px]">{e.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-pearl/80">{e.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Venues */}
      <motion.section {...fade} className="container-x pb-14 md:pb-20">
        <div className="mb-7">
          <span className="text-[11px] uppercase tracking-[0.24em] text-coral">The spaces</span>
          <h2 className="mt-2 font-display font-bold leading-[1.04] tracking-[-0.02em] text-ink text-[clamp(26px,3vw,42px)]">Four venues, every kind of day.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {VENUES.map((v) => (
            <article key={v.id} className="group grid overflow-hidden rounded-[22px] border border-clay/10 bg-pearl shadow-soft sm:grid-cols-[1.1fr_1.2fr]">
              <div className="relative aspect-[16/11] overflow-hidden sm:aspect-auto">
                <Image src={v.photo} alt={v.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{v.name}</h3>
                <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-2.5 py-1 text-[11px] font-semibold text-gold-deep">
                  <Users className="h-3 w-3" /> {v.capacity}
                </div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-clay">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Proposal split */}
      <motion.section {...fade} className="container-x pb-20 md:pb-28">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[28px] border border-clay/10 bg-pearl p-6 shadow-soft md:p-8">
            <span className="text-[11px] uppercase tracking-[0.24em] text-coral">Let&apos;s plan it</span>
            <h2 className="mt-2 font-display text-2xl text-ink md:text-3xl">Request a proposal</h2>
            <p className="mt-1 text-[13px] text-clay">Tell us a bit and our events team will be in touch within one business day.</p>
            {sent ? (
              <div className="mt-5 rounded-2xl bg-palm/15 p-4 text-[13px] text-palm-deep">
                <Check className="-mt-0.5 mr-1 inline h-4 w-4" />
                Thank you — your request has been received. (Prototype: not actually sent.)
              </div>
            ) : (
              <form className="mt-5 grid gap-3 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
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
                <div className="md:col-span-2"><Button type="submit" variant="primary" size="lg" full>Send request</Button></div>
              </form>
            )}
          </div>

          <aside className="rounded-[28px] border border-amber/30 bg-gradient-to-br from-pearl via-pearl-warm to-amber-soft p-6 shadow-warm md:p-8">
            <h3 className="font-display text-2xl text-ink">For weddings</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-clay">
              Our team has shaped quiet seaside ceremonies and family-sized destination weddings — garden vows, capiz-shell ballrooms, and Teraza rooftop receptions.
            </p>
            <ul className="mt-4 grid gap-2 text-[13.5px] text-ink">
              <li className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-gold-deep" /> Wedding planner included</li>
              <li className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-gold-deep" /> Sunset ceremony slots</li>
              <li className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-gold-deep" /> Group room rates</li>
            </ul>
            <a href="mailto:resa@bwplusivywall-panglao.com" className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-coral underline-offset-4 hover:underline">
              Talk to the events team <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </aside>
        </div>
      </motion.section>

      <style jsx global>{`
        .ivy-input { width:100%; border-radius:14px; border:1px solid rgba(107,93,79,.18); background:#FBFAF6; padding:.625rem .875rem; font-size:14px; color:#221C18; outline:none; transition:border-color .15s, box-shadow .15s; }
        .ivy-input:focus { border-color:#F5700A; box-shadow:0 0 0 3px rgba(245,112,10,.12); }
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
