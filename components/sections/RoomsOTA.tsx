"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { roomTypes } from "@/lib/mock/rooms";

const peso = (n: number) => "₱" + n.toLocaleString("en-US");
const fromRate = Math.min(...roomTypes.map((r) => r.baseRate));
// "Best for" derived from each room's own longDesc / character (no PMS field for it).
const BEST_FOR: Record<string, string> = {
  superior: "Couples & solo travellers",
  deluxe: "Slow-morning couples",
  premier: "Romantic escapes",
  family: "Families",
};
const INTRO =
  "Each category is shaped around a different mood — a bright community-facing room, a step-out pool view, a swim-up pool-access terrace, or a roomy family retreat. All carry the same Boholano warmth.";

const IcSize = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V3h4M21 7V3h-4M3 17v4h4M21 17v4h-4M4 12h16" /></svg>);
const IcBed = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M4 18v2M20 18v2M7 10V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>);
const IcGuests = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16.5 6.2a3 3 0 0 1 0 5.6M21 20a5 5 0 0 0-4-4.9" /></svg>);
const IcView = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>);
const IcCheck = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>);

function RoomShowcase({ r, idx }: { r: (typeof roomTypes)[number]; idx: number }) {
  const photos = r.gallery.map((g) => g.photo).filter(Boolean) as string[];
  const [active, setActive] = useState(0);
  return (
    <section id={`room-${r.slug}`} className={`ivy-rm-room${idx % 2 ? " rev" : ""}`} data-room={r.slug}>
      <div className="container-x ivy-rm-room-grid">
        <div className="ivy-rm-gallery">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="ivy-rm-main"><img src={photos[active]} alt={r.name} loading="lazy" decoding="async" /></div>
          <div className="ivy-rm-thumbs">
            {photos.slice(0, 3).map((p, i) => (
              <button key={p + i} className={`ivy-rm-thumb${i === active ? " on" : ""}`} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1} of ${r.name}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
        <div className="ivy-rm-body">
          <span className="ivy-rm-cat">{r.category} · {r.view}</span>
          <h2 className="ivy-rm-name">{r.name}</h2>
          <p className="ivy-rm-desc">{r.longDesc}</p>
          <div className="ivy-rm-specs">
            <div><span className="ic"><IcSize /></span><span className="lb">Room size</span><b>{r.size} m²</b></div>
            <div><span className="ic"><IcBed /></span><span className="lb">Bed</span><b>{r.bed}</b></div>
            <div><span className="ic"><IcGuests /></span><span className="lb">Guests</span><b>Up to {r.maxOccupancy}</b></div>
            <div><span className="ic"><IcView /></span><span className="lb">View</span><b>{r.view}</b></div>
          </div>
          <div className="ivy-rm-incl">
            <h3>What&apos;s included</h3>
            <ul>{r.amenities.map((a) => <li key={a}><IcCheck /><span>{a}</span></li>)}</ul>
          </div>
          <div className="ivy-rm-price">
            <div className="ivy-rm-from">from <b>{peso(r.baseRate)}</b> <span>/ night</span></div>
            <div className="ivy-rm-save">Save {peso(r.otaRate - r.baseRate)} vs other sites</div>
            <Link className="ivy-rm-reserve" href={`/book?room=${r.slug}`}>Reserve this room →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RoomsOTA() {
  const rooms = roomTypes;
  const [activeSlug, setActiveSlug] = useState<string>(rooms[0]?.slug ?? "");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const header = document.querySelector("header");
    const headerH = header ? (header as HTMLElement).offsetHeight : 72;
    const catnav = root.querySelector<HTMLElement>(".ivy-rm-catnav");
    if (catnav) catnav.style.top = headerH + "px";
    const catH = catnav ? catnav.offsetHeight : 58;
    const offset = headerH + catH + 14;
    const sections = Array.from(root.querySelectorAll<HTMLElement>(".ivy-rm-room"));
    sections.forEach((s) => (s.style.scrollMarginTop = offset + "px"));

    const reveal = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    sections.forEach((s) => reveal.observe(s));
    root.querySelectorAll(".ivy-rm-compare,.ivy-rm-band").forEach((s) => { s.classList.add("ivy-rm-reveal"); reveal.observe(s); });

    const active = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActiveSlug((e.target as HTMLElement).dataset.room ?? ""); }),
      { rootMargin: `-${offset + 4}px 0px -55% 0px`, threshold: 0 }
    );
    sections.forEach((s) => active.observe(s));
    return () => { reveal.disconnect(); active.disconnect(); };
  }, []);

  const scrollTo = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(`room-${slug}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ivy-rooms-root" ref={rootRef}>
      {/* 1 — hero strip */}
      <section className="ivy-rm-hero">
        <video
          className="ivy-rm-hero-img"
          src="/clips/rooms-hero.mp4"
          poster="/clips/rooms-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Aerial view of The Ivywall rooftop deck and rooms on Alona Beach, Panglao"
        />
        <div className="ivy-rm-hero-scrim" />
        <div className="ivy-rm-hero-in container-x">
          <span className="ivy-rm-eyebrow">Rooms &amp; Suites</span>
          <h1 className="ivy-rm-h1">Four ways to settle into Bohol.</h1>
          <p className="ivy-rm-intro">{INTRO}</p>
          <div className="ivy-rm-stats">
            <div><b>80</b><span>Rooms &amp; suites</span></div>
            <div><b>{rooms.length}</b><span>Categories</span></div>
            <div><b>{peso(fromRate)}</b><span>From / night</span></div>
            <div><b>0 m</b><span>To the pool</span></div>
          </div>
        </div>
      </section>

      {/* 2 — sticky category nav */}
      <nav className="ivy-rm-catnav" aria-label="Room categories">
        <div className="container-x ivy-rm-catnav-in">
          <div className="ivy-rm-pills">
            {rooms.map((r) => (
              <a key={r.slug} href={`#room-${r.slug}`} onClick={scrollTo(r.slug)} className={`ivy-rm-pill${activeSlug === r.slug ? " on" : ""}`} data-room={r.slug}>
                {r.name.replace(/\s*(Room|Suite)\s*$/, "")}
              </a>
            ))}
          </div>
          <Link className="ivy-rm-cta-sm" href="/book">Check availability →</Link>
        </div>
      </nav>

      {/* 3 — alternating room showcases */}
      {rooms.map((r, i) => <RoomShowcase key={r.slug} r={r} idx={i} />)}

      {/* 4 — compare table */}
      <section className="ivy-rm-compare">
        <div className="container-x">
          <span className="ivy-rm-eyebrow">Side by side</span>
          <h2 className="ivy-rm-h2">Compare every room.</h2>
          <div className="ivy-rm-table-wrap">
            <table className="ivy-rm-table">
              <thead>
                <tr><th scope="col"><span className="sr-only">Feature</span></th>{rooms.map((r) => <th key={r.slug} scope="col">{r.name}</th>)}</tr>
              </thead>
              <tbody>
                <tr><th scope="row">Size</th>{rooms.map((r) => <td key={r.slug}>{r.size} m²</td>)}</tr>
                <tr><th scope="row">Bed</th>{rooms.map((r) => <td key={r.slug}>{r.bed}</td>)}</tr>
                <tr><th scope="row">Sleeps</th>{rooms.map((r) => <td key={r.slug}>Up to {r.maxOccupancy}</td>)}</tr>
                <tr><th scope="row">View</th>{rooms.map((r) => <td key={r.slug}>{r.view}</td>)}</tr>
                <tr><th scope="row">Best for</th>{rooms.map((r) => <td key={r.slug}>{BEST_FOR[r.slug] ?? r.category}</td>)}</tr>
                <tr className="ivy-rm-row-price"><th scope="row">From / night</th>{rooms.map((r) => <td key={r.slug}><b>{peso(r.baseRate)}</b></td>)}</tr>
                <tr className="ivy-rm-row-cta"><th scope="row"><span className="sr-only">Reserve</span></th>{rooms.map((r) => <td key={r.slug}><Link className="ivy-rm-reserve-dark" href={`/book?room=${r.slug}`}>Reserve</Link></td>)}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 — book-direct band */}
      <section className="ivy-rm-band">
        <div className="container-x">
          <span className="ivy-rm-eyebrow">Book direct</span>
          <h2 className="ivy-rm-band-h">Always a better rate here than the booking sites.</h2>
          <p className="ivy-rm-band-p">Reserve on our own site for the lowest available price, free cancellation, and a complimentary room upgrade whenever one is available — never a middleman markup.</p>
          <Link className="ivy-rm-reserve" href="/book">Reserve your stay →</Link>
        </div>
      </section>
    </div>
  );
}
