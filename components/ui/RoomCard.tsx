"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BedDouble, Eye, Maximize2, Users } from "lucide-react";
import type { RoomType } from "@/lib/types";
import PhotoFrame from "./PhotoFrame";
import PriceTag from "./PriceTag";
import Button from "./Button";
import Badge from "./Badge";
import Tilt3D from "@/components/fx/Tilt3D";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function RoomCard({ room, dense = false }: { room: RoomType; dense?: boolean }) {
  const { t } = useI18n();
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col"
    >
      <Tilt3D max={6} className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-clay/10 bg-pearl shadow-soft">
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <PhotoFrame photo={room.gallery[0]} rounded="rounded-none" className={dense ? "aspect-[16/10]" : "aspect-[4/3]"} />
        </div>
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <Badge tone="dark">{room.view} View</Badge>
        </div>
        {/* Coral shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-coral-deep/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="small-caps font-display text-[11px] text-clay">{room.category}</div>
            <h3 className="font-display text-xl text-ink leading-tight">{room.name}</h3>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.18em] text-clay">{t("common.from")}</div>
            <PriceTag php={room.baseRate} size="md" perNight />
          </div>
        </div>
        <p className="text-[13.5px] leading-relaxed text-clay">{room.shortDesc}</p>
        <ul className="flex flex-wrap gap-1.5 text-[11px]">
          <li className="inline-flex items-center gap-1 rounded-full bg-pearl-warm px-2 py-1 text-clay"><Maximize2 className="h-3 w-3" /> {room.size} m²</li>
          <li className="inline-flex items-center gap-1 rounded-full bg-pearl-warm px-2 py-1 text-clay"><BedDouble className="h-3 w-3" /> {room.bed}</li>
          <li className="inline-flex items-center gap-1 rounded-full bg-pearl-warm px-2 py-1 text-clay"><Users className="h-3 w-3" /> {room.maxOccupancy}</li>
          <li className="inline-flex items-center gap-1 rounded-full bg-pearl-warm px-2 py-1 text-clay"><Eye className="h-3 w-3" /> {room.view}</li>
        </ul>
        <div className="mt-2 flex items-center justify-between gap-3">
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-coral hover:text-coral-deep"
          >
            {t("common.viewDetails")} <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link href={`/book?room=${room.slug}`}>
            <Button size="sm" variant="primary">Reserve</Button>
          </Link>
        </div>
      </div>
      </Tilt3D>
    </motion.article>
  );
}
