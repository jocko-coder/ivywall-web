"use client";

import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Plane, MapPin, Clock, Phone, Sun } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import { useI18n } from "@/lib/i18n/I18nProvider";

function Fact({ icon, title, body, index }: { icon: React.ReactNode; title: string; body: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group rounded-2xl border border-ink/5 bg-pearl p-4 shadow-soft transition hover:border-amber/30 hover:shadow-warm"
    >
      <div className="flex items-center gap-2 text-palm">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">{title}</span>
      </div>
      <div className="mt-1 text-[14px] text-ink">{body}</div>
    </motion.li>
  );
}

export default function LocationBand() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mapRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mapY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const factsY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [20, -20]);

  // Matches the real Google route: airport (top-centre) → short jog, then south
  // down the Circumferential Rd (bulging east) → curve down-left to the resort
  // at Alona Beach (lower-left).
  const ROUTE = "M160 104 Q181 99 187 132 L191 168 Q191 193 172 207 Q150 225 138 245 Q133 252 130 256";

  return (
    <section ref={ref} data-ivy-station="location" className="container-x py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.15fr]">
        {/* ── Crafted route map: the real airport → resort route ── */}
        <motion.div
          ref={mapRef}
          style={{ y: mapY }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-gradient-to-b from-[#cfe7df] via-[#7fb3a3] to-[#2f6f5e] shadow-deep ring-1 ring-ink/5"
        >
          <svg viewBox="0 0 320 400" className="absolute inset-0 h-full w-full" role="img" aria-label="Map: 3.4 km, about 10 minutes by car from Panglao International Airport to The Ivywall at Alona Beach">
            <defs>
              <linearGradient id="lm-land" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#d4641a" />
                <stop offset="100%" stopColor="#9a3f08" />
              </linearGradient>
            </defs>

            {/* sea depth lines near the south coast */}
            <g stroke="#ffffff" strokeOpacity="0.12" fill="none">
              <path d="M0 326 Q160 310 320 326" strokeWidth="2" />
              <path d="M0 352 Q160 336 320 352" strokeWidth="2" />
            </g>

            {/* Panglao land with a wavy south coast (Alona Beach side at the bottom) */}
            <path d="M-12 -12 H332 V278 Q280 296 240 282 Q200 268 160 288 Q120 308 82 286 Q44 266 -12 282 Z" fill="url(#lm-land)" />
            {/* sandy coastline */}
            <path d="M332 278 Q280 296 240 282 Q200 268 160 288 Q120 308 82 286 Q44 266 -12 282" fill="none" stroke="#f3ddb8" strokeWidth="5" strokeOpacity="0.9" strokeLinecap="round" />
            {/* faint inland texture */}
            <g fill="#ffffff" opacity="0.06">
              <circle cx="70" cy="70" r="26" /><circle cx="258" cy="90" r="30" /><circle cx="250" cy="200" r="30" />
            </g>

            {/* compass */}
            <g transform="translate(36,48)" opacity="0.9">
              <circle r="12" fill="#FBFAF6" opacity="0.85" />
              <path d="M0 -8 L3 1 L0 8 L-3 1 Z" fill="#0F4C5C" />
              <text y="-14" fontFamily="var(--font-sans), system-ui" fontSize="7.5" textAnchor="middle" fill="#FBFAF6">N</text>
            </g>

            {/* route line — draws in on scroll */}
            <motion.path
              id="lm-route"
              d={ROUTE}
              fill="none"
              stroke="#FBFAF6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="1 7"
              initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 0.9 : 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.9 } : {}}
              transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
            />

            {/* distance + time chips (open land, west of the route) */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <g transform="translate(40,150)">
                <rect x="0" y="0" width="62" height="22" rx="11" fill="#FBFAF6" />
                <text x="31" y="15" fontFamily="var(--font-sans), system-ui" fontSize="11" fontWeight="700" textAnchor="middle" fill="#9a3f08">3.4 km</text>
              </g>
              <g transform="translate(34,178)">
                <rect x="0" y="0" width="96" height="22" rx="11" fill="#0d1b2a" />
                <text x="48" y="15" fontFamily="var(--font-sans), system-ui" fontSize="10.5" fontWeight="600" textAnchor="middle" fill="#f0c879">≈ 10 min by car</text>
              </g>
            </motion.g>

            {/* moving Ivywall transfer van along the route (top-down, logo on roof) */}
            {!reduce && (
              <g>
                <g transform="translate(-11,-6)">
                  {/* van roof — front (windshield) points +x = travel direction */}
                  <rect x="0.5" y="1" width="21" height="10" rx="3.2" fill="#FBFAF6" stroke="#0d1b2a" strokeOpacity="0.25" strokeWidth="0.6" />
                  {/* coral brand stripes down the sides */}
                  <rect x="3" y="1.5" width="13" height="0.9" rx="0.45" fill="#f5700a" />
                  <rect x="3" y="9.6" width="13" height="0.9" rx="0.45" fill="#f5700a" />
                  {/* windshield (front) */}
                  <path d="M16.8 1.6 h2.4 a2.3 2.3 0 0 1 2.3 2.3 v4.2 a2.3 2.3 0 0 1 -2.3 2.3 H16.8 Z" fill="#173a44" opacity="0.85" />
                  {/* rear window */}
                  <rect x="1.4" y="3" width="1.8" height="6" rx="0.7" fill="#173a44" opacity="0.5" />
                  {/* BW Plus / Ivywall logo decal on the roof */}
                  <image href="/bw-plus-logo.png" x="8.2" y="2.9" width="5.6" height="5.6" preserveAspectRatio="xMidYMid meet" />
                </g>
                <animateMotion dur="5.2s" repeatCount="indefinite" rotate="auto" begin="1.4s">
                  <mpath href="#lm-route" />
                </animateMotion>
              </g>
            )}

            {/* Alona Beach marker (to the right of the resort, on the coast) */}
            <motion.g
              transform="translate(186,266)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.92 } : {}}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <circle r="4.5" fill="#f3ddb8" stroke="#FBFAF6" strokeWidth="1" />
              <text x="9" y="3.5" fontFamily="var(--font-sans), system-ui" fontSize="9.5" fill="#FBFAF6">Alona Beach</text>
            </motion.g>

            {/* airport marker (top-centre) */}
            <motion.g
              transform="translate(160,104)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <motion.circle r="16" fill="none" stroke="#FBFAF6" strokeOpacity="0.5"
                animate={{ r: [16, 22, 16], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.6, repeat: Infinity }} />
              <circle r="13" fill="#FBFAF6" />
              <g transform="translate(-6,-6) scale(0.5)" fill="#0F4C5C">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5z" />
              </g>
            </motion.g>
            <motion.text x="160" y="80" fontFamily="var(--font-sans), system-ui" fontSize="9.5" fontWeight="700" letterSpacing="0.5" textAnchor="middle" fill="#FBFAF6"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
              PANGLAO INTL · TAG
            </motion.text>

            {/* resort marker — coral pin (lower-left, at Alona) */}
            <motion.g
              transform="translate(130,258)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <motion.circle cx="0" cy="-12" r="18" fill="none" stroke="#f5700a" strokeOpacity="0.55"
                animate={{ r: [18, 26, 18], opacity: [0.55, 0, 0.55] }} transition={{ duration: 2.4, repeat: Infinity }} />
              <path d="M0 2 C-9 -8 -9 -20 0 -24 C9 -20 9 -8 0 2 Z" fill="#f5700a" stroke="#FBFAF6" strokeWidth="1.5" />
              <circle cx="0" cy="-14" r="4" fill="#FBFAF6" />
            </motion.g>
            <motion.text x="116" y="256" fontFamily="var(--font-sans), system-ui" fontSize="12.5" fontWeight="700" textAnchor="end" fill="#FBFAF6"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 2 }}>
              The Ivywall
            </motion.text>
            <motion.text x="116" y="270" fontFamily="var(--font-sans), system-ui" fontSize="9.5" textAnchor="end" fill="#FBFAF6" opacity="0.85"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.85 } : {}} transition={{ duration: 0.5, delay: 2.1 }}>
              P-5 Danao · Panglao
            </motion.text>
          </svg>

          <div className="painterly absolute inset-0" />
          <div className="absolute right-5 top-5 rounded-full bg-pearl/85 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink shadow-soft backdrop-blur">
            Panglao Island
          </div>
          <div className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-pearl/90 px-3 py-1.5 text-[11px] font-semibold text-ink shadow-soft backdrop-blur">
            <Plane className="h-3.5 w-3.5 text-coral" />
            Airport transfer available
          </div>
        </motion.div>

        <motion.div style={{ y: factsY }}>
          <SectionDivider label={t("location.label")} className="max-w-[160px]" />
          <h2 className="mt-4 font-display font-bold leading-[0.98] tracking-[-0.025em] text-ink text-[clamp(36px,4.8vw,64px)]">
            {t("location.heading")}
            <br />
            <em className="text-palm">{t("location.headingEm")}</em>
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink/70">
            {t("location.body")}
          </p>
          <ul className="mt-7 grid gap-3 md:grid-cols-2">
            <Fact icon={<Plane className="h-4 w-4" />} title={t("location.f1Title")} body={t("location.f1Body")} index={0} />
            <Fact icon={<MapPin className="h-4 w-4" />} title={t("location.f2Title")} body={t("location.f2Body")} index={1} />
            <Fact icon={<Sun className="h-4 w-4" />} title={t("location.f3Title")} body={t("location.f3Body")} index={2} />
            <Fact icon={<Clock className="h-4 w-4" />} title={t("location.f4Title")} body={t("location.f4Body")} index={3} />
          </ul>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-pearl px-4 py-2 text-[12.5px] text-ink/75 shadow-soft">
            <Phone className="h-3.5 w-3.5 text-palm" />
            {t("location.reservations")} · <strong className="text-ink">+63 (038) 412 1128</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
