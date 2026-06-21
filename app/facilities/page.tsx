import type { Metadata } from "next";
import { Waves, Sparkles, Dumbbell, Baby, Wifi, Building2, Clock } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { facilities } from "@/lib/mock/facilities";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Facilities & Wellness · The Ivywall Resort-Panglao",
  description:
    "Lagoon swimming pools, the Ivy Spa pavilion, fitness studio, children's playground, resort-wide free Wi-Fi, and event spaces.",
  path: "/facilities",
});

const ICONS = {
  pool: <Waves className="h-5 w-5" />,
  spa: <Sparkles className="h-5 w-5" />,
  gym: <Dumbbell className="h-5 w-5" />,
  kids: <Baby className="h-5 w-5" />,
  wifi: <Wifi className="h-5 w-5" />,
  mice: <Building2 className="h-5 w-5" />,
  lounge: <Building2 className="h-5 w-5" />,
};

const GRADIENTS: Record<string, string> = {
  pool: "from-pearl-warm via-amber-soft to-gold-glow",
  spa: "from-amber-warm via-amber to-terracotta",
  gym: "from-pearl-warm via-amber-soft to-amber-warm",
  kids: "from-palm via-palm-deep to-ink",
  wifi: "from-pearl via-amber-soft to-amber-warm",
  mice: "from-coral/20 via-coral-deep to-ink",
  lounge: "from-amber-glow via-amber to-terracotta",
};

const ILLUS: Record<string, "pool" | "spa" | "palm" | "banana-leaf" | "capiz-window" | "tereza"> = {
  pool: "pool",
  spa: "spa",
  gym: "palm",
  kids: "banana-leaf",
  wifi: "capiz-window",
  mice: "tereza",
  lounge: "tereza",
};

export default function FacilitiesPage() {
  return (
    <div className="container-x pt-10 pb-16 md:pt-14">
      <div className="max-w-3xl">
        <SectionDivider label="Facilities & Wellness" className="max-w-[280px]" />
        <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
          A property built for slow days.
        </h1>
        <p className="mt-3 text-[15px] text-clay">
          From a sunrise on the deck to a sunset cocktail by the pool — everything is here, within a few warm Boholano steps.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {facilities.map((f) => (
          <article key={f.id} className="overflow-hidden rounded-3xl border border-clay/10 bg-pearl shadow-soft">
            <PhotoFrame
              photo={{ label: f.name, gradient: GRADIENTS[f.icon], illustration: ILLUS[f.icon] }}
              rounded="rounded-none"
              className="aspect-[16/10]"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 text-palm">
                <span className="rounded-2xl bg-amber-soft p-2 text-amber-deep">{ICONS[f.icon]}</span>
                <h3 className="font-display text-xl text-ink">{f.name}</h3>
              </div>
              <p className="mt-2 text-[13.5px] text-clay">{f.description}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-pearl-warm px-3 py-1 text-[11px] text-clay">
                <Clock className="h-3 w-3" /> {f.hours}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
