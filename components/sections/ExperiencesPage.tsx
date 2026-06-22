"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Clock, ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/mock/experiences";

const GUEST_APP = "https://ivywall-app.vercel.app/";
const CATS = ["All", "Island", "Nature", "Culture", "Adventure"] as const;
const dur = (h: number) => (Number.isInteger(h) ? `${h} hrs` : `${h} hrs`);

export default function ExperiencesPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const list = useMemo(() => (cat === "All" ? experiences : experiences.filter((e) => e.category === cat)), [cat]);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[62svh] min-h-[440px] overflow-hidden bg-palm-night">
        <Image src="/experiences/exp_chocolate_hills.jpg" alt="The Chocolate Hills of Bohol" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-palm-night via-palm-night/30 to-palm-night/35" />
        <div className="container-x absolute inset-x-0 bottom-0">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }} className="pb-11 md:pb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-glow">Explore Bohol</span>
            <h1 className="mt-3 max-w-3xl font-display font-bold leading-[0.98] tracking-[-0.03em] text-pearl text-[clamp(38px,6vw,82px)]">
              The island,{" "}
              <em className="font-light italic text-gold-glow">curated.</em>
            </h1>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-pearl/80">
              Sunrise dolphins at Balicasag, the Chocolate Hills loop, quiet visits to the tarsiers — handpicked island days, all arrangeable as private tours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + gallery */}
      <section className="container-x py-12 md:py-16">
        <div className="flex flex-wrap items-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition ${
                cat === c ? "bg-ink text-pearl" : "border border-clay/20 text-ink/65 hover:bg-pearl-warm hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div key={cat} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((e, i) => (
            <motion.a
              key={e.id}
              href={GUEST_APP}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative block overflow-hidden rounded-[22px] shadow-soft ring-1 ring-ink/5 transition hover:shadow-deep hover:ring-gold/40"
            >
              <div className="relative aspect-[3/4]">
                <Image src={e.photo ?? "/experiences/exp_chocolate_hills.jpg"} alt={e.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/5" />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded-full bg-pearl/15 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-gold-glow backdrop-blur">{e.category}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-ink/45 px-2.5 py-1 text-[10px] text-pearl/90 backdrop-blur"><Clock className="h-3 w-3" /> {dur(e.durationHrs)}</span>
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="font-display font-bold uppercase leading-[1.02] tracking-[-0.01em] text-pearl text-[19px]">{e.name}</h3>
                  <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-[11.5px] text-pearl/70">
                    {e.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="before:mr-1 before:text-gold-glow before:content-['✦']">{h}</li>
                    ))}
                  </ul>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-pearl/0 transition group-hover:text-gold-glow">
                    View experience <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Plan-with-Ivy CTA */}
      <section className="container-x pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-[32px] bg-palm-night px-8 py-14 text-center text-pearl md:px-16 md:py-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-glow/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-10 h-64 w-64 rounded-full bg-coral/25 blur-3xl" />
          <span className="relative text-[11px] uppercase tracking-[0.3em] text-gold-glow">Book once, do more</span>
          <h2 className="relative mx-auto mt-3 max-w-2xl font-display font-bold leading-[1.04] tracking-[-0.02em] text-pearl text-[clamp(26px,3.4vw,44px)]">
            Plan your Bohol days with Ivy.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-pearl/75">
            Every experience can be arranged as a private tour. Open the guest app to build your itinerary and have it ready before you arrive.
          </p>
          <a
            href={GUEST_APP}
            target="_blank"
            rel="noreferrer"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-glow to-gold-deep px-7 py-3.5 text-[14px] font-bold text-ink shadow-warm transition hover:brightness-105"
          >
            Open the tour guide <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mt-8 text-[11px] leading-relaxed text-clay/70">
          Photos courtesy of Wikimedia Commons contributors under CC BY-SA 3.0 / 4.0 licences. Edited versions, if any, are released under the same licence.
        </p>
      </section>
    </div>
  );
}
