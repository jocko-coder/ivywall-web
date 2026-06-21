"use client";

import Link from "next/link";
import { Sparkles, ShieldCheck, Clock, Tag } from "lucide-react";
import BookingWidget from "@/components/booking/BookingWidget";
import SectionDivider from "@/components/ui/SectionDivider";
import { offers } from "@/lib/mock/offers";

export default function BookEntryPage() {
  return (
    <div className="container-x pt-10 md:pt-14">
      <div className="grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="small-caps font-display text-[12px] text-gold-deep">Plan your stay</div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-ink md:text-5xl">
            Find your <em className="text-navy-soft">best stay.</em>
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-clay">
            Pick your dates, your room, your rate. Instant confirmation and free Wi-Fi for every guest. The whole booking takes about a minute.
          </p>
          <div className="mt-6">
            <BookingWidget variant="hero" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-[13px] md:grid-cols-4">
            <Pill icon={<Clock className="h-3.5 w-3.5" />}>Instant confirmation</Pill>
            <Pill icon={<Tag className="h-3.5 w-3.5" />}>Free Wi-Fi resort-wide</Pill>
            <Pill icon={<ShieldCheck className="h-3.5 w-3.5" />}>Free cancellation*</Pill>
            <Pill icon={<Sparkles className="h-3.5 w-3.5" />}>Secure checkout</Pill>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[32px] shadow-deep">
          <img
            src="/photos/BWPlus_Ivywall_02_Facade_Pool.jpg"
            alt="The Ivywall pool"
            className="aspect-[3/4] h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/30 to-ink/95" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-pearl">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold-glow">The property</div>
            <h3 className="mt-2 font-display text-2xl leading-tight">
              Eighty rooms on <em className="text-gold-glow">Alona Beach.</em>
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-pearl/80">
              The first international-chain resort in Bohol — in native Filipino detail, three and a half kilometres from Panglao International Airport.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <SectionDivider label="Packages & offers" />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <Link
              key={o.id}
              href="/offers"
              className={`relative overflow-hidden rounded-3xl border border-clay/10 bg-gradient-to-br p-5 text-pearl shadow-soft transition hover:scale-[1.01] ${o.gradient}`}
            >
              <div className="font-display text-xl leading-tight">{o.name}</div>
              <p className="mt-1 text-[13px] text-pearl/90">{o.tagline}</p>
              <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-pearl/15 px-3 py-1 text-[11px] uppercase tracking-[0.12em]">
                Min {o.minNights}{o.minNights > 1 ? " nights" : " night"}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pill({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-clay/10 bg-pearl px-3 py-2 text-[12px] font-semibold text-ink shadow-soft">
      <span className="text-palm">{icon}</span>
      {children}
    </div>
  );
}
