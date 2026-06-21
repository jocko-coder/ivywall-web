"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A composed, original SVG scene that reads as a real tropical photograph
 * at a glance — multiple sky layers, a sun, an ocean horizon, faint
 * island silhouette, foreground palm silhouettes. Fully responsive,
 * zero external assets, on-brand to The Ivywall palette.
 *
 * Variant: "golden" (default — golden-hour Panglao), "dawn", "midday", "dusk"
 */
type Variant = "golden" | "dawn" | "midday" | "dusk";

const PALETTES: Record<Variant, {
  skyTop: string; skyMid: string; skyHorizon: string;
  oceanTop: string; oceanBot: string;
  sun: string; sunGlow: string;
  islandTone: string;
  palmTone: string;
  sandTone: string;
}> = {
  golden: {
    skyTop: "#5C9CB8",
    skyMid: "#E8B978",
    skyHorizon: "#F2D9AE",
    oceanTop: "#5A9AAA",
    oceanBot: "#0B3742",
    sun: "#FFE0A1",
    sunGlow: "rgba(255,222,150,0.85)",
    islandTone: "#1E3A36",
    palmTone: "#0B2A2A",
    sandTone: "#EDD9B2",
  },
  dawn: {
    skyTop: "#D49AA9",
    skyMid: "#F1B58F",
    skyHorizon: "#FAE0C3",
    oceanTop: "#7DA7B2",
    oceanBot: "#173341",
    sun: "#FFE3B8",
    sunGlow: "rgba(255,227,184,0.7)",
    islandTone: "#2A3F3D",
    palmTone: "#1A1A20",
    sandTone: "#F0DDB6",
  },
  midday: {
    skyTop: "#79B7C2",
    skyMid: "#BFE0E6",
    skyHorizon: "#E6F3EE",
    oceanTop: "#4D90A2",
    oceanBot: "#0B3742",
    sun: "#FFFCEB",
    sunGlow: "rgba(255,252,235,0.85)",
    islandTone: "#234D44",
    palmTone: "#13322F",
    sandTone: "#F1E2C1",
  },
  dusk: {
    skyTop: "#3E5D78",
    skyMid: "#A66565",
    skyHorizon: "#E8B978",
    oceanTop: "#3F7080",
    oceanBot: "#091B26",
    sun: "#FFC78C",
    sunGlow: "rgba(255,199,140,0.7)",
    islandTone: "#0F2C2A",
    palmTone: "#06141A",
    sandTone: "#D8B791",
  },
};

export default function CinematicScene({
  variant = "golden",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const p = PALETTES[variant];

  return (
    <div className={className}>
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.skyTop} />
            <stop offset="55%" stopColor={p.skyMid} />
            <stop offset="100%" stopColor={p.skyHorizon} />
          </linearGradient>
          <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.oceanTop} stopOpacity="0.95" />
            <stop offset="100%" stopColor={p.oceanBot} />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={p.sun} />
            <stop offset="60%" stopColor={p.sun} stopOpacity="0.4" />
            <stop offset="100%" stopColor={p.sun} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={p.sunGlow} />
            <stop offset="100%" stopColor="rgba(255,231,182,0)" />
          </radialGradient>
          <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.sandTone} stopOpacity="0" />
            <stop offset="100%" stopColor={p.sandTone} stopOpacity="0.95" />
          </linearGradient>
          <filter id="softBlur"><feGaussianBlur stdDeviation="1.4" /></filter>
        </defs>

        {/* Sky */}
        <rect width="1600" height="560" fill="url(#sky)" />

        {/* Sun halo glow (large soft) */}
        <g style={{ mixBlendMode: "screen" }}>
          <circle cx="1180" cy="280" r="420" fill="url(#sunHalo)" opacity="0.85" />
          <circle cx="1180" cy="280" r="160" fill="url(#sun)" />
          <circle cx="1180" cy="280" r="62" fill={p.sun} opacity="0.9" />
        </g>

        {/* Distant cloud band */}
        <g opacity="0.65" filter="url(#softBlur)">
          <ellipse cx="380" cy="220" rx="220" ry="22" fill={p.skyHorizon} opacity="0.55" />
          <ellipse cx="780" cy="200" rx="320" ry="18" fill={p.skyHorizon} opacity="0.4" />
          <ellipse cx="1380" cy="180" rx="200" ry="14" fill={p.skyHorizon} opacity="0.35" />
        </g>

        {/* Distant island silhouette */}
        <g opacity="0.55">
          <path
            d="M 180 540 Q 360 470 520 510 Q 700 470 880 510 Q 1040 478 1240 510 L 1240 560 L 180 560 Z"
            fill={p.islandTone}
            filter="url(#softBlur)"
          />
        </g>

        {/* Ocean */}
        <rect x="0" y="540" width="1600" height="240" fill="url(#ocean)" />
        {/* Sun glitter on water */}
        <g opacity="0.85" style={{ mixBlendMode: "screen" }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <ellipse
              key={i}
              cx={1100 + (i - 8) * 16}
              cy={560 + (i % 4) * 18}
              rx={32 + (i % 3) * 8}
              ry={2 + (i % 2)}
              fill={p.sun}
              opacity={0.18 + (i % 5) * 0.12}
              filter="url(#softBlur)"
            />
          ))}
        </g>

        {/* Sand foreground */}
        <path
          d="M 0 720 Q 400 700 800 740 Q 1200 700 1600 730 L 1600 900 L 0 900 Z"
          fill={p.sandTone}
        />
        <rect x="0" y="700" width="1600" height="200" fill="url(#sand)" />

        {/* Palm silhouettes (foreground) */}
        <g fill={p.palmTone}>
          {/* Tall palm right */}
          <g transform="translate(1380,540)">
            <path d="M 0 0 C -2 -120 6 -260 0 -380" stroke={p.palmTone} strokeWidth="9" fill="none" strokeLinecap="round" />
            <Palm dir={1} />
          </g>
          {/* Mid palm */}
          <g transform="translate(220,560)">
            <path d="M 0 0 C 3 -120 -6 -260 0 -360" stroke={p.palmTone} strokeWidth="8" fill="none" strokeLinecap="round" />
            <Palm dir={-1} />
          </g>
        </g>

        {/* Foreground bangka (boat) silhouette */}
        <g transform="translate(900,628)" fill={p.palmTone} opacity="0.9">
          <path d="M 0 0 Q 60 18 120 0 L 108 12 H 12 Z" />
          <line x1="60" y1="0" x2="60" y2="-44" stroke={p.palmTone} strokeWidth="2" />
          <path d="M 60 -42 L 86 -22 L 60 -16 Z" />
          <line x1="-20" y1="6" x2="140" y2="6" stroke={p.palmTone} strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* Subtle film grain — done via SVG noise */}
        <rect width="1600" height="900" fill="black" opacity="0.05" style={{ mixBlendMode: "overlay" }} />
      </svg>

      {/* CSS grain overlay (richer than SVG) */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30 [background-image:radial-gradient(rgba(0,0,0,0.6)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:3px_3px,4px_4px] [background-position:0_0,1px_2px]" />

      {/* Slowly drifting light */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          animate={{ x: ["-2%", "2%", "-2%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(35% 30% at 70% 25%, rgba(255,231,182,0.18), transparent 70%)",
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
  );
}

function Palm({ dir = 1 }: { dir?: 1 | -1 }) {
  // Five fronds radiating from origin
  const fronds = [-1, -0.55, -0.15, 0.25, 0.65];
  return (
    <g>
      {fronds.map((a, i) => {
        const x1 = 0;
        const y1 = -360;
        const cx = (a * 100 + 30 * dir) * dir;
        const cy = -380 - Math.abs(a) * 30;
        const x2 = (a * 200 + 50 * dir) * dir;
        const y2 = -340 - Math.abs(a) * 14;
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
            stroke="currentColor"
            strokeWidth={6}
            fill="none"
            strokeLinecap="round"
          />
        );
      })}
      {/* coconut cluster */}
      <circle cx={0} cy={-358} r={8} fill="currentColor" />
      <circle cx={dir * 10} cy={-355} r={6} fill="currentColor" />
      <circle cx={dir * -8} cy={-352} r={6} fill="currentColor" />
    </g>
  );
}
