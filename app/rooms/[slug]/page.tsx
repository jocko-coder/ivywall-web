import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BedDouble, Eye, Maximize2, Users, Check, Sparkles, ArrowUpRight } from "lucide-react";
import PhotoFrame from "@/components/ui/PhotoFrame";
import PriceTag from "@/components/ui/PriceTag";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionDivider from "@/components/ui/SectionDivider";
import { roomTypes, ratePlans } from "@/lib/mock/rooms";
import { pageMeta } from "@/lib/seo/meta";

export function generateStaticParams() {
  return roomTypes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const room = roomTypes.find((r) => r.slug === params.slug);
  if (!room) return pageMeta({ title: "Room · The Ivywall", description: "Room detail.", path: `/rooms/${params.slug}` });
  return pageMeta({
    title: `${room.name} · ${room.view} View · The Ivywall Resort-Panglao`,
    description: room.shortDesc,
    path: `/rooms/${room.slug}`,
  });
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = roomTypes.find((r) => r.slug === params.slug);
  if (!room) return notFound();
  return (
    <div className="container-x pt-10 pb-16 md:pt-14">
      <Link href="/rooms" className="text-[12px] uppercase tracking-[0.16em] text-clay hover:text-coral-deep">
        ← All rooms
      </Link>

      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <PhotoFrame photo={room.gallery[0]} className="md:col-span-2 md:row-span-2 aspect-[4/3]" kenburns />
        {room.gallery.slice(1, 3).map((p, i) => (
          <PhotoFrame key={i} photo={p} className="aspect-[4/3]" />
        ))}
        <PhotoFrame
          photo={{ label: "Resort lagoon", gradient: "from-palm/20 via-palm-deep to-ink", illustration: "pool" }}
          className="aspect-[4/3]"
        />
        <PhotoFrame
          photo={{ label: "Tereza Rooftop", gradient: "from-sunrise via-amber to-terracotta", illustration: "tereza" }}
          className="aspect-[4/3]"
        />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="dark">{room.view} View</Badge>
            <Badge tone="palm">{room.view} View</Badge>
          </div>
          <h1 className="mt-3 font-display text-5xl text-ink leading-tight">{room.name}</h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-clay">{room.longDesc}</p>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-[13px] md:grid-cols-4">
            <Stat icon={<Maximize2 className="h-3.5 w-3.5" />} label={`${room.size} m²`} />
            <Stat icon={<BedDouble className="h-3.5 w-3.5" />} label={room.bed} />
            <Stat icon={<Users className="h-3.5 w-3.5" />} label={`Up to ${room.maxOccupancy}`} />
            <Stat icon={<Eye className="h-3.5 w-3.5" />} label={`${room.view} view`} />
          </ul>

          <div className="mt-10">
            <SectionDivider label="In the room" className="max-w-[200px]" />
            <ul className="mt-4 grid gap-2 text-[13.5px] md:grid-cols-2">
              {room.amenities.map((a) => (
                <li key={a} className="inline-flex items-start gap-2 rounded-2xl bg-pearl-warm px-3 py-2 text-ink">
                  <Check className="mt-0.5 h-3.5 w-3.5 text-palm-deep" /> {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <SectionDivider label="Rate options" className="max-w-[200px]" />
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {ratePlans.map((p) => {
                const total = Math.round(room.baseRate * p.multiplier);
                return (
                  <div key={p.code} className="rounded-3xl border border-clay/15 bg-pearl p-4 shadow-soft">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="font-display text-lg text-ink">{p.name}</div>
                        <div className="text-[12px] text-clay">{p.tagline}</div>
                      </div>
                      <div className="text-right">
                        <PriceTag php={total} perNight size="md" />
                      </div>
                    </div>
                    <ul className="mt-2 text-[12.5px] text-clay">
                      {p.inclusions.slice(0, 2).map((i) => (
                        <li key={i} className="before:mr-1.5 before:text-amber-deep before:content-['✦']">{i}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="sticky top-24 self-start rounded-3xl border border-amber/30 bg-gradient-to-br from-pearl via-pearl-warm to-amber-soft p-6 shadow-warm">
          <div className="text-[11px] uppercase tracking-[0.18em] text-clay">From / night</div>
          <PriceTag php={room.baseRate} size="xl" />
          <div className="mt-5 grid gap-2 text-[13px] text-ink">
            {["Free Wi-Fi resort-wide", "Pool & beach access", "Complimentary tea, coffee & water", "Free cancellation*"].map(
              (i) => (
                <div key={i} className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-palm-deep" /> {i}
                </div>
              )
            )}
          </div>
          <div className="mt-6 grid gap-2">
            <Link href={`/book?room=${room.slug}`}>
              <Button full size="lg" variant="primary">Check availability</Button>
            </Link>
            <Link href="/offers" className="text-center text-[12px] font-semibold text-navy underline-offset-4 hover:underline">
              See current offers <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full bg-pearl-warm px-3 py-1.5 text-[12px] text-ink">
      <span className="text-navy">{icon}</span> {label}
    </li>
  );
}
