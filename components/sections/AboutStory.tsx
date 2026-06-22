"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Car, Ship, MapPin, Clock } from "lucide-react";
import HeroVideo from "@/components/ui/HeroVideo";

const STATS = [
  { v: "2017", k: "Opened" },
  { v: "80", k: "Rooms" },
  { v: "3", k: "Restaurants" },
  { v: "★★★★", k: "Best Western Plus" },
];

const CHAPTERS = [
  {
    n: "01",
    eyebrow: "Where it began",
    title: "The first international-chain resort in Bohol.",
    body: "We didn't import a foreign hotel onto Panglao — we set a higher bar for one that belongs here. Best Western Plus standards, finished to a four-star level, with a Boholano soul running through every choice.",
    photo: "/photos/BWPlus_Ivywall_14_Aerial_DJI0002.jpg",
  },
  {
    n: "02",
    eyebrow: "How it's made",
    title: "Native Filipino detail, room by room.",
    body: "Banig-weave headboards. Capiz-shell light. Palm-wood inlay. Eighty rooms across four categories, each grounded in Visayan craft rather than generic resort — designed around the way the island already lives.",
    photo: "/photos/BWPlus_Ivywall_06_Premier_Room.jpg",
  },
  {
    n: "03",
    eyebrow: "Who's behind it",
    title: "Local team. Local suppliers.",
    body: "Filipino farmers, fishermen, weavers and roasters supply most of what you'll eat, drink and sleep on. Our beach access is protected by Bohol's conservation rules — and we wouldn't have it any other way.",
    photo: "/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg",
  },
];

const ROUTES = [
  { icon: <Plane className="h-4 w-4" />, title: "From the Airport", a: "3.4 km · 8–12 min drive", b: "Bohol-Panglao International Airport (BPIA)" },
  { icon: <Car className="h-4 w-4" />, title: "From Tagbilaran City", a: "23 km · ~40 min drive", b: "Via Gallares Street and the Panglao Bridge" },
  { icon: <Ship className="h-4 w-4" />, title: "From Cebu by Ferry", a: "~2 hrs to Tagbilaran port", b: "Then ~40 min drive to the resort" },
];

const fade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
};

export default function AboutStory() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[80svh] min-h-[540px] overflow-hidden bg-palm-night">
        <HeroVideo
          src="/clips/ourstory.mp4"
          poster="/clips/ourstory_poster.jpg"
          alt="Life at The Ivywall — international comfort with a Boholano soul"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-palm-night via-palm-night/65 to-palm-night/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-palm-night/55 via-palm-night/15 to-transparent md:to-50%" />
        <div className="container-x absolute inset-x-0 bottom-0">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }} className="pb-12 md:pb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-glow">About · The Ivywall</span>
            <h1 className="mt-3 max-w-3xl font-display font-bold leading-[0.98] tracking-[-0.03em] text-pearl text-[clamp(38px,6vw,86px)]">
              International comfort,{" "}
              <em className="font-light italic text-gold-glow">a Boholano soul.</em>
            </h1>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-pearl/80">
              The first international-chain resort in Bohol — eighty rooms on Alona Beach, Panglao, built the way the island lives: unhurried, generous, and proud of where it stands.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
              {STATS.map((s) => (
                <div key={s.k}>
                  <div className="font-display text-2xl font-semibold text-gold-glow">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-pearl/60">{s.k}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Story chapters ── */}
      <div className="bg-pearl">
        {CHAPTERS.map((c, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.section key={c.n} {...fade} className="container-x py-14 md:py-20">
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-deep ${flip ? "md:order-2" : ""}`}>
                  <Image src={c.photo} alt={c.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]" />
                </div>
                <div className={flip ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-coral">
                    <span className="font-display text-base text-gold-deep">{c.n}</span>
                    <span className="h-px w-8 bg-gold-deep/40" />
                    {c.eyebrow}
                  </div>
                  <h2 className="mt-3 font-display font-bold leading-[1.04] tracking-[-0.02em] text-ink text-[clamp(26px,3.4vw,46px)]">
                    {c.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[15.5px] leading-[1.8] text-clay">{c.body}</p>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* ── Pull quote ── */}
      <section className="relative overflow-hidden bg-palm-night">
        <Image src="/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg" alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-palm-night/80 via-palm-night/70 to-palm-night/90" />
        <motion.div {...fade} className="container-x relative py-24 text-center md:py-32">
          <span className="font-display text-5xl text-gold-glow/40">“</span>
          <blockquote className="mx-auto -mt-4 max-w-3xl font-display font-medium italic leading-[1.2] tracking-[-0.02em] text-pearl text-[clamp(24px,3.4vw,46px)]">
            We wanted a luxury that doesn&apos;t feel imported — a place where you feel the island, not the brand.
          </blockquote>
          <div className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold-glow">The Ivywall team</div>
        </motion.div>
      </section>

      {/* ── Best Western Plus + Getting here ── */}
      <div className="bg-pearl">
        <motion.section {...fade} className="container-x py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-deep">
              <Image src="/photos/ivy_story_terrace_deck.jpg" alt="Teraza terrace deck at The Ivywall" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.24em] text-coral">The brand</span>
              <h2 className="mt-2 font-display font-bold leading-[1.04] tracking-[-0.02em] text-ink text-[clamp(26px,3vw,40px)]">
                Best Western Plus — global standard, Boholano heart.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-clay">
                Best Western Plus is an international upper-midscale brand operating in 100+ countries. The Ivywall is independently owned and operated — following Best Western brand standards while staying true to its Boholano roots.
              </p>
              <ul className="mt-5 grid gap-2 text-[13.5px] text-ink">
                <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-deep" /> Tawala, Alona Beach Road, Panglao, Bohol 6340</li>
                <li className="inline-flex items-center gap-2"><Plane className="h-4 w-4 text-gold-deep" /> 12 minutes from Bohol-Panglao International Airport (BPIA)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Getting here */}
        <motion.section {...fade} className="container-x pb-16 md:pb-20">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.24em] text-coral">Getting here</span>
              <h2 className="mt-2 font-display font-bold leading-[1.04] tracking-[-0.02em] text-ink text-[clamp(26px,3vw,40px)]">
                How to find us.
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Best+Western+Plus+The+Ivywall+Resort+Panglao"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-coral underline-offset-4 hover:underline"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps ↗
            </a>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {ROUTES.map((r) => (
              <div key={r.title} className="rounded-2xl border border-clay/12 bg-pearl-warm/50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold-deep">{r.icon}</div>
                <div className="mt-3 text-[14px] font-semibold text-ink">{r.title}</div>
                <div className="mt-1 text-[13.5px] text-clay">{r.a}</div>
                <div className="mt-0.5 text-[12px] text-clay/70">{r.b}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-clay">
            <Clock className="h-3.5 w-3.5 text-palm" /> Airport transfers available — book via concierge.
          </div>
        </motion.section>
      </div>
    </div>
  );
}
