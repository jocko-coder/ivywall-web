"use client";

import Link from "next/link";
import { experiences } from "@/lib/mock/experiences";
import { useI18n } from "@/lib/i18n/I18nProvider";

const Dia = () => (
  <svg viewBox="0 0 10 10" width="9" height="9" fill="currentColor" aria-hidden>
    <rect x="2.2" y="2.2" width="5.6" height="5.6" rx="1" transform="rotate(45 5 5)" />
  </svg>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h13M12 6l6 6-6 6" />
  </svg>
);

/** Desktop stagger: alternating heights + downward offsets for the collage. */
const H = [300, 236, 300, 236, 300, 236];
const OFFSET = [0, 56, 0, 56, 0, 56];

/**
 * "Explore Bohol" — staggered collage. All six experiences visible at once over a
 * giant faint "BOHOL"; compact (no long scroll). Hover a tile to zoom + reveal.
 * Mobile collapses to a tidy 2-column grid so everything still shows in one glance.
 */
export default function ExperiencesBento({ link = "/experiences" }: { link?: string }) {
  const { t } = useI18n();
  const items = experiences.slice(0, 6);
  const external = link.startsWith("http");

  const Tile = ({ e }: { e: (typeof experiences)[number] }) => (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={e.photo} alt={e.name} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/5" />
      <div className="absolute left-3 top-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-glow">{e.category}</div>
      <div className="absolute inset-x-3 bottom-3">
        <h3 className="font-display font-bold uppercase leading-[0.98] tracking-[-0.01em] text-pearl text-[15px]">{e.name}</h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-pearl/0 transition-colors duration-300 group-hover:text-gold-glow">
          {t("expBento.view")} <Arrow />
        </div>
      </div>
    </>
  );

  const wrapCls = "group relative overflow-hidden rounded-2xl ring-1 ring-ink/5 transition duration-300 hover:ring-2 hover:ring-gold/40";
  const Card = ({ e, style }: { e: (typeof experiences)[number]; style?: React.CSSProperties }) =>
    external ? (
      <a href={link} target="_blank" rel="noreferrer" className={wrapCls} style={style}><Tile e={e} /></a>
    ) : (
      <Link href={link} className={wrapCls} style={style}><Tile e={e} /></Link>
    );

  return (
    <section className="container-x py-14 md:py-20">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-coral">
            <Dia /> {t("expBento.kicker")}
          </div>
          <h2 className="mt-3 font-display font-bold leading-[0.98] tracking-[-0.025em] text-ink text-[clamp(32px,4vw,56px)]">
            {t("expBento.title1")} {t("expBento.title2")}
          </h2>
        </div>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-ink/65">{t("expBento.lead")}</p>
      </div>

      {/* Desktop staggered collage */}
      <div className="relative mt-9 hidden md:block" style={{ height: 300 }}>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold tracking-[-0.04em] text-ink/[0.05] leading-none text-[150px]">BOHOL</span>
        </div>
        <div className="relative flex items-start gap-4">
          {items.map((e, i) => (
            <div key={e.id} className="flex-1" style={{ marginTop: OFFSET[i] }}>
              <Card e={e} style={{ display: "block", height: H[i] }} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile grid — all six in one glance */}
      <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
        {items.map((e) => (
          <Card key={e.id} e={e} style={{ display: "block", height: 200 }} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-[12px] text-ink/55">
        <span className="text-gold-deep"><Dia /></span> {t("expBento.foot")}
      </div>
    </section>
  );
}
