import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { restaurants } from "@/lib/mock/restaurants";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Dining · The Ivywall Resort-Panglao",
  description:
    "Three restaurants — Tereza Rooftop Deck for sunsets, Saffron for all-day dining, and Kawayan Poolside Bar. Modern Boholano with international touches.",
  path: "/dining",
});

export default function DiningPage() {
  return (
    <div className="container-x pt-10 pb-16 md:pt-14">
      <div className="max-w-3xl">
        <SectionDivider label="Dining" className="max-w-[140px]" />
        <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
          Bohol on a plate.
        </h1>
        <p className="mt-3 text-[15px] text-clay">
          Three distinct venues, one shared belief: that the best meals are slow, local, and shared. Our chefs work with Bohol farmers, fishermen, and chocolatiers — and finish with global technique.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {restaurants.map((r, i) => (
          <article
            key={r.id}
            className={`overflow-hidden rounded-[36px] border border-clay/10 bg-pearl shadow-soft md:grid md:grid-cols-2 md:items-stretch ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Full-bleed photo — no padding, clips to card's rounded corners */}
            <PhotoFrame
              photo={{
                label: r.name,
                gradient: r.gradient,
                illustration: r.slug === "teraza-rooftop-deck" ? "tereza" : "banana-leaf",
                photo: r.photo,
              }}
              rounded=""
              className="aspect-[4/3] w-full md:aspect-auto md:min-h-[380px]"
              kenburns
            />
            <div className="flex flex-col p-6 md:p-8">
              <div className="small-caps font-display text-[11px] text-amber-deep">{r.cuisine}</div>
              <h2 className="mt-1 font-display text-3xl text-ink leading-tight">{r.name}</h2>
              <p className="mt-2 text-[14.5px] text-clay">{r.tagline}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-[12px]">
                <li className="inline-flex items-center gap-1 rounded-full bg-pearl-warm px-3 py-1 text-clay">
                  <Clock className="h-3 w-3" /> {r.hours}
                </li>
                <li className="inline-flex items-center gap-1 rounded-full bg-pearl-warm px-3 py-1 text-clay">
                  <MapPin className="h-3 w-3" /> {r.setting}
                </li>
              </ul>
              <div className="mt-6">
                <div className="small-caps font-display text-[10px] text-clay">Signature</div>
                <ul className="mt-2 grid gap-1 text-[14px] text-ink">
                  {r.signature.map((s) => (
                    <li key={s} className="before:mr-1.5 before:text-amber-deep before:content-['✦']">{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
