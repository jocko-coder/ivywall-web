"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { roomTypes } from "@/lib/mock/rooms";
import HeroVideo from "@/components/ui/HeroVideo";

const peso = (n: number) => "₱" + n.toLocaleString("en-US");
const fromRate = Math.min(...roomTypes.map((r) => r.baseRate));
const BEST_FOR: Record<string, string> = {
  superior: "Couples & solo travellers",
  deluxe: "Slow-morning couples",
  premier: "Romantic escapes",
  family: "Families",
};
const INTRO =
  "Each category is shaped around a different mood — a bright community-facing room, a step-out pool view, a swim-up pool-access terrace, or a roomy family retreat. All carry the same Boholano warmth.";

const IcSize = () => (<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V3h4M21 7V3h-4M3 17v4h4M21 17v4h-4M4 12h16" /></svg>);
const IcBed = () => (<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M4 18v2M20 18v2M7 10V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>);
const IcGuests = () => (<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16.5 6.2a3 3 0 0 1 0 5.6M21 20a5 5 0 0 0-4-4.9" /></svg>);
const IcView = () => (<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>);

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pearl-warm text-gold-deep">{icon}</span>
      <div className="leading-tight">
        <div className="text-[10px] uppercase tracking-[0.16em] text-clay">{label}</div>
        <div className="text-[13.5px] font-semibold text-ink">{value}</div>
      </div>
    </div>
  );
}

function RoomBand({ r, idx }: { r: (typeof roomTypes)[number]; idx: number }) {
  const flip = idx % 2 === 1;
  return (
    <motion.section
      id={`room-${r.slug}`}
      data-room={r.slug}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
      className="container-x scroll-mt-32 py-12 md:py-16"
    >
      <div className="grid items-center gap-7 md:grid-cols-2 md:gap-14">
        {/* Photo */}
        <div className={`relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-deep ${flip ? "md:order-2" : ""}`}>
          <Image
            src={r.gallery[0].photo ?? "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg"}
            alt={r.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink/45 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-pearl backdrop-blur">
            {r.view}
          </span>
        </div>

        {/* Text */}
        <div className={flip ? "md:order-1" : ""}>
          <div className="text-[11px] uppercase tracking-[0.24em] text-coral">
            {String(idx + 1).padStart(2, "0")} · {r.category}
          </div>
          <h2 className="mt-2 font-display font-bold leading-[0.98] tracking-[-0.025em] text-ink text-[clamp(32px,4.4vw,58px)]">
            {r.name}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-clay">{r.shortDesc}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Spec icon={<IcSize />} label="Room size" value={`${r.size} m²`} />
            <Spec icon={<IcBed />} label="Bed" value={r.bed} />
            <Spec icon={<IcGuests />} label="Guests" value={`Up to ${r.maxOccupancy}`} />
            <Spec icon={<IcView />} label="Best for" value={BEST_FOR[r.slug] ?? r.category} />
          </div>

          <ul className="mt-5 flex flex-wrap gap-2 text-[12px]">
            {r.amenities.slice(0, 4).map((a) => (
              <li key={a} className="rounded-full border border-clay/15 bg-pearl-warm/60 px-3 py-1 text-clay">{a}</li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-end gap-5">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-clay">From / night</div>
              <div className="font-display text-3xl font-semibold text-ink md:text-4xl">{peso(r.baseRate)}</div>
              <div className="mt-0.5 text-[11.5px] text-palm-deep">Save {peso(r.otaRate - r.baseRate)} vs other sites</div>
            </div>
            <Link
              href={`/book?room=${r.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-coral to-coral-deep px-7 py-3.5 text-[14px] font-bold text-pearl shadow-warm transition hover:brightness-105"
            >
              Reserve this room
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 6l6 6-6 6" /></svg>
            </Link>
            <Link href={`/rooms/${r.slug}`} className="text-[13px] font-semibold text-ink/70 underline-offset-4 hover:text-ink hover:underline">
              View gallery →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function RoomsOTA() {
  const rooms = roomTypes;
  const [activeSlug, setActiveSlug] = useState<string>(rooms[0]?.slug ?? "");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const bands = Array.from(root.querySelectorAll<HTMLElement>("[data-room]"));
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActiveSlug((e.target as HTMLElement).dataset.room ?? ""); }),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    bands.forEach((b) => obs.observe(b));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      {/* Hero */}
      <section className="relative h-[68svh] min-h-[460px] overflow-hidden bg-palm-night">
        <HeroVideo
          src="/clips/rooms-hero.mp4"
          poster="/clips/rooms-hero-poster.jpg"
          alt="Aerial view of The Ivywall rooftop deck and rooms on Alona Beach, Panglao"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-palm-night via-palm-night/40 to-palm-night/45" />
        <div className="container-x absolute inset-x-0 bottom-0">
          <div className="pb-10 md:pb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-glow">Rooms &amp; Suites</span>
            <h1 className="mt-3 max-w-2xl font-display font-bold leading-[0.98] tracking-[-0.025em] text-pearl text-[clamp(36px,5.5vw,76px)]">
              Four ways to settle into Bohol.
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-pearl/80">{INTRO}</p>
            <div className="mt-7 flex flex-wrap gap-x-9 gap-y-3">
              {[["80", "Rooms & suites"], [String(rooms.length), "Categories"], [peso(fromRate), "From / night"], ["0 m", "To the pool"]].map(([b, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-semibold text-gold-glow">{b}</div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-pearl/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky room nav */}
      <nav aria-label="Room categories" className="sticky top-16 z-30 border-b border-clay/10 bg-pearl/95 backdrop-blur md:top-20">
        <div className="container-x flex items-center justify-between gap-4 py-3">
          <div className="flex gap-1.5 overflow-x-auto">
            {rooms.map((r) => (
              <a
                key={r.slug}
                href={`#room-${r.slug}`}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition ${
                  activeSlug === r.slug ? "bg-ink text-pearl" : "text-ink/60 hover:bg-pearl-warm hover:text-ink"
                }`}
              >
                {r.name.replace(/\s*(Room|Suite)\s*$/, "")}
              </a>
            ))}
          </div>
          <Link href="/book" className="hidden shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-b from-coral to-coral-deep px-4 py-2 text-[12.5px] font-semibold text-pearl shadow-bezel sm:inline-flex">
            Check availability →
          </Link>
        </div>
      </nav>

      {/* Editorial room bands */}
      {rooms.map((r, i) => <RoomBand key={r.slug} r={r} idx={i} />)}

      {/* Book-direct band */}
      <section className="container-x pb-24 pt-8 md:pb-32">
        <div className="relative overflow-hidden rounded-[32px] bg-palm-night px-8 py-14 text-center text-pearl md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-glow/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-10 h-64 w-64 rounded-full bg-coral/25 blur-3xl" />
          <span className="relative text-[11px] uppercase tracking-[0.3em] text-gold-glow">Book direct</span>
          <h2 className="relative mx-auto mt-3 max-w-2xl font-display font-bold leading-[1.02] tracking-[-0.02em] text-pearl text-[clamp(28px,3.6vw,48px)]">
            Always a better rate here than the booking sites.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-pearl/75">
            Reserve on our own site for the lowest available price, free cancellation, and a complimentary upgrade whenever one is available — never a middleman markup.
          </p>
          <Link
            href="/book"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-glow to-gold-deep px-7 py-3.5 text-[14px] font-bold text-ink shadow-warm transition hover:brightness-105"
          >
            Reserve your stay →
          </Link>
        </div>
      </section>
    </div>
  );
}
