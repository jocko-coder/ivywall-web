import type { Metadata } from "next";
import { MapPin, Plane, Car, Ship, Clock } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import IllustrationSpot from "@/components/ui/IllustrationSpot";
import LocationBand from "@/components/sections/LocationBand";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "About · The Ivywall Resort-Panglao",
  description:
    "A four-star Boholano resort on Alona Beach, Panglao — designed around homey Boholano warmth and modern ease. Twelve minutes from Bohol-Panglao International Airport.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <div className="container-x pt-10 pb-4 md:pt-14">
        <div className="max-w-3xl">
          <SectionDivider label="About" className="max-w-[120px]" />
          <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
            A homely four-star on Alona Beach.
          </h1>
          <p className="dropcap mt-6 max-w-2xl text-[15.5px] leading-relaxed text-clay">
            The Ivywall is a Best Western Plus resort in Danao, Panglao Island — the first international-chain
            resort in Bohol. Designed around the values of Boholano hospitality: quiet warmth, an instinct for
            taking care of people, and a love for the island's landscapes. Eighty rooms across four categories,
            three dining venues, Fiora Spa, a free-form pool, and a team that learns your name by day two.
          </p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {[
            { k: "Opened", v: "2017" },
            { k: "Rooms", v: "80" },
            { k: "Restaurants", v: "3" },
            { k: "Star Rating", v: "★★★★" },
          ].map((s) => (
            <div key={s.k} className="rounded-3xl border border-clay/10 bg-pearl p-5 text-center shadow-soft">
              <div className="font-display text-2xl text-coral">{s.v}</div>
              <div className="small-caps font-display text-[10px] text-clay">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Get Here */}
      <div className="container-x pb-4">
        <div className="rounded-[36px] border border-clay/10 bg-pearl p-8 shadow-soft md:p-10">
          <h2 className="font-display text-2xl text-ink">How to Get Here</h2>
          <p className="mt-1 text-[14px] text-clay">Tawala, Alona Beach Road, Panglao Island, Bohol 6340, Philippines</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl border border-clay/8 bg-pearl-warm p-4">
              <div className="mt-0.5 rounded-full bg-coral/10 p-2"><Plane className="h-4 w-4 text-coral" /></div>
              <div>
                <div className="text-[13px] font-semibold text-ink">From the Airport</div>
                <div className="mt-0.5 text-[13px] text-clay">3.4 km · 8–12 min drive</div>
                <div className="mt-1 text-[12px] text-clay/70">Bohol-Panglao International Airport (BPIA)</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-clay/8 bg-pearl-warm p-4">
              <div className="mt-0.5 rounded-full bg-coral/10 p-2"><Car className="h-4 w-4 text-coral" /></div>
              <div>
                <div className="text-[13px] font-semibold text-ink">From Tagbilaran City</div>
                <div className="mt-0.5 text-[13px] text-clay">23 km · ~40 min drive</div>
                <div className="mt-1 text-[12px] text-clay/70">Via Gallares Street and the Panglao Bridge</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-clay/8 bg-pearl-warm p-4">
              <div className="mt-0.5 rounded-full bg-coral/10 p-2"><Ship className="h-4 w-4 text-coral" /></div>
              <div>
                <div className="text-[13px] font-semibold text-ink">From Cebu by Ferry</div>
                <div className="mt-0.5 text-[13px] text-clay">~2 hrs to Tagbilaran port</div>
                <div className="mt-1 text-[12px] text-clay/70">Then ~40 min drive to the resort</div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-clay">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-palm" /> Airport transfers available — book via concierge</span>
            <a
              href="https://maps.google.com/?q=Best+Western+Plus+The+Ivywall+Resort+Panglao"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-coral hover:underline"
            >
              <MapPin className="h-3.5 w-3.5" /> Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>

      <LocationBand />

      <div className="container-x pb-16">
        <div className="rounded-[36px] border border-clay/10 bg-pearl p-8 shadow-soft md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
            <div className="relative aspect-square overflow-hidden rounded-organic bg-gradient-to-br from-amber-glow via-amber to-terracotta shadow-warm">
              <div className="absolute inset-0 painterly" />
              <div className="absolute right-2 top-2 opacity-90"><IllustrationSpot kind="palm" size={120} /></div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight">About Best Western Plus</h2>
              <p className="mt-3 text-[15px] text-clay">
                Best Western Plus is an international upper-midscale brand operating in 100+ countries. The Ivywall is independently owned and operated, following Best Western brand standards while staying true to its Boholano roots.
              </p>
              <ul className="mt-4 grid gap-1 text-[13.5px] text-ink">
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-palm" /> Tawala, Alona Beach Road, Panglao, Bohol 6340</li>
                <li className="inline-flex items-center gap-2"><Plane className="h-3.5 w-3.5 text-palm" /> 12 minutes from Bohol-Panglao International Airport (BPIA)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
