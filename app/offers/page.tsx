import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionDivider from "@/components/ui/SectionDivider";
import { offers } from "@/lib/mock/offers";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Offers & Packages · The Ivywall Resort-Panglao",
  description:
    "Packages at Best Western Plus The Ivywall Resort-Panglao — free breakfast, stay-longer savings, honeymoon by the sea, and complimentary airport transfer.",
  path: "/offers",
});

export default function OffersPage() {
  return (
    <div className="container-x pt-10 pb-16 md:pt-14">
      <div className="max-w-3xl">
        <SectionDivider label="Packages & offers" className="max-w-[240px]" />
        <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
          Stay longer. Stay better.
        </h1>
        <p className="mt-3 text-[15px] text-clay">
          A handful of thoughtful packages — extra value the team built around the rhythms of a Panglao stay. Pick the one that fits your trip.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {offers.map((o) => (
          <article
            key={o.id}
            className={`relative overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br ${o.gradient} p-7 text-pearl shadow-warm`}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pearl/15 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-pearl/95">
                <Sparkles className="h-3 w-3" /> {o.badge ?? "Package"}
              </div>
              <h3 className="mt-2 font-display text-3xl leading-tight">{o.name}</h3>
              <p className="mt-2 text-[14px] text-pearl/90">{o.tagline}</p>
              <ul className="mt-4 grid gap-1.5 text-[13.5px] text-pearl">
                {o.perks.map((p) => (
                  <li key={p} className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-pearl" /> {p}</li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="rounded-full bg-pearl/15 px-3 py-1 text-[11px] uppercase tracking-[0.14em]">
                  {o.discountPct > 0 ? `Save ${o.discountPct}%` : "Free perk"} · min {o.minNights}{o.minNights > 1 ? " nights" : " night"}
                </div>
                <Link href="/book">
                  <Button variant="amber" size="md">Reserve</Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-clay/10 bg-pearl-warm p-6 text-center text-[13px] text-clay">
        Looking for something specific — a private dining setup, a corporate group rate, a wedding block?{" "}
        <Link href="/contact" className="font-semibold text-navy">Tell us</Link> and we'll put together a package.
      </div>
    </div>
  );
}
