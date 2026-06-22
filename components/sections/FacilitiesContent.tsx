"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, Sparkles, Dumbbell, Baby, Wifi, Building2, Clock } from "lucide-react";
import IllustrationSpot from "@/components/ui/IllustrationSpot";
import { facilities } from "@/lib/mock/facilities";

const ICONS: Record<string, React.ReactNode> = {
  pool: <Waves className="h-4 w-4" />,
  spa: <Sparkles className="h-4 w-4" />,
  gym: <Dumbbell className="h-4 w-4" />,
  kids: <Baby className="h-4 w-4" />,
  wifi: <Wifi className="h-4 w-4" />,
  mice: <Building2 className="h-4 w-4" />,
  lounge: <Building2 className="h-4 w-4" />,
};
const GRADIENTS: Record<string, string> = {
  gym: "from-pearl-warm via-amber-soft to-amber-warm",
  kids: "from-palm via-palm-deep to-ink",
  wifi: "from-pearl via-amber-soft to-amber-warm",
  spa: "from-amber-warm via-amber to-terracotta",
};
const ILLUS: Record<string, "pool" | "spa" | "palm" | "banana-leaf" | "capiz-window" | "tereza"> = {
  gym: "palm",
  kids: "banana-leaf",
  wifi: "capiz-window",
  spa: "spa",
};
// Real photography where we have it; the rest fall back to the brand illustration tile.
const PHOTO: Record<string, string> = {
  "fac-pool": "/photos/BWPlus_Ivywall_16_Pool_Area.jpg",
  "fac-beach": "/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg",
  "fac-mice": "/photos/BWPlus_Ivywall_12_Morning_Teraza.jpg",
};

export default function FacilitiesContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[58svh] min-h-[420px] overflow-hidden bg-palm-night">
        <Image src="/photos/ivy_hero_2_pool.jpg" alt="The free-form pool at The Ivywall Resort" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-palm-night via-palm-night/40 to-palm-night/40" />
        <div className="container-x absolute inset-x-0 bottom-0">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }} className="pb-11 md:pb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-glow">Facilities &amp; Wellness</span>
            <h1 className="mt-3 max-w-3xl font-display font-bold leading-[0.98] tracking-[-0.03em] text-pearl text-[clamp(38px,6vw,82px)]">
              Everything,{" "}
              <em className="font-light italic text-gold-glow">five minutes apart.</em>
            </h1>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-pearl/80">
              From a sunrise on the deck to a sunset cocktail by the pool — the grounds, the water, and the wellness are all a few warm Boholano steps away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="container-x py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {facilities.map((f, i) => {
            const photo = PHOTO[f.id];
            return (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
                className="group overflow-hidden rounded-[24px] border border-clay/10 bg-pearl shadow-soft transition hover:shadow-deep"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  {photo ? (
                    <>
                      <Image src={photo} alt={f.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                    </>
                  ) : (
                    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${GRADIENTS[f.icon] ?? "from-pearl-warm to-amber-soft"}`}>
                      <IllustrationSpot kind={ILLUS[f.icon] ?? "palm"} size={92} />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-soft text-gold-deep">{ICONS[f.icon]}</span>
                    <h3 className="font-display text-xl text-ink">{f.name}</h3>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-clay">{f.description}</p>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-pearl-warm px-3 py-1 text-[11px] text-clay">
                    <Clock className="h-3 w-3 text-palm" /> {f.hours}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
