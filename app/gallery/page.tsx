"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";

const TILES = [
  { src: "/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg", label: "Aerial · Alona Beach", span: "md:col-span-2 md:row-span-2 aspect-[16/10] md:aspect-auto" },
  { src: "/photos/BWPlus_Ivywall_17_Facade_Teraza.jpg", label: "Facade & Teraza · afternoon", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_12_Morning_Teraza.jpg", label: "Teraza Rooftop · morning", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg", label: "Teraza Rooftop · blue hour", span: "md:col-span-2 aspect-[16/10]" },
  { src: "/photos/BWPlus_Ivywall_15_Agos_Pool_Bar.jpg", label: "Agos Pool Bar", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg", label: "Facade & courtyard pool", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_03_Pool.jpg", label: "Swimming pool", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_16_Pool_Area.jpg", label: "Pool complex", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_14_Aerial_DJI0002.jpg", label: "Beach access · Alona shore", span: "md:col-span-2 aspect-[16/10]" },
  { src: "/photos/BWPlus_Ivywall_04_Superior_Room.jpg", label: "Superior Room · banig headboard", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_05_Deluxe_Room_SeaView.jpg", label: "Deluxe Room · sea view", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_20_Deluxe_Alt.jpg", label: "Deluxe Room · detail", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_06_Premier_Room.jpg", label: "Premier Room", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_11_Family_Room.jpg", label: "Family Room · banig art, three beds", span: "md:col-span-2 aspect-[16/10]" },
  { src: "/photos/BWPlus_Ivywall_07_Restaurant.jpg", label: "Alon All Day Dining", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_19_Alon_Dining_Alt.jpg", label: "Alon · table setting", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_08_Bar_Lounge.jpg", label: "Bar & lounge", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_18_Bar_Lounge_Alt.jpg", label: "Bar lounge · seating", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_10_Signature_Seafood.jpg", label: "Signature seafood paella", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg", label: "Boodle-fight platter", span: "aspect-[4/3]" },
  { src: "/photos/BWPlus_Ivywall_22_Banana_Cocktail.jpg", label: "Tropical cocktail", span: "aspect-[4/3]" },
];

export default function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="container-x pt-10 pb-16 md:pt-14">
      <div className="max-w-3xl">
        <SectionDivider label="Gallery" className="max-w-[120px]" />
        <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
          The resort, in <em className="text-gold-glow">real photographs.</em>
        </h1>
        <p className="mt-3 text-[15px] text-clay">
          Press images from Best Western Plus The Ivywall Resort-Panglao. Click any tile to view full size.
        </p>
      </div>
      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {TILES.map((t, i) => (
          <motion.button
            key={t.src}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{ scale: 1.01 }}
            className={`group relative overflow-hidden rounded-3xl shadow-soft ${t.span}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.src}
              alt={t.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-90 transition group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-pearl/95">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-glow" />
                {t.label}
              </span>
              <span className="opacity-0 transition group-hover:opacity-100">↗</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-palm-night/95 backdrop-blur p-6"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-5 top-5 rounded-full bg-pearl/15 p-2 text-pearl backdrop-blur hover:bg-pearl/25"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen((open! - 1 + TILES.length) % TILES.length); }}
              className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-pearl/15 p-2 text-pearl backdrop-blur hover:bg-pearl/25"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen((open! + 1) % TILES.length); }}
              className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-pearl/15 p-2 text-pearl backdrop-blur hover:bg-pearl/25"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="max-h-[88vh] max-w-[1200px]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={TILES[open].src}
                alt={TILES[open].label}
                className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-deep"
              />
              <figcaption className="mt-3 text-center text-[12px] uppercase tracking-[0.18em] text-pearl/85">
                {TILES[open].label}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
