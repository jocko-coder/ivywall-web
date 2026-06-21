import type { IllustrationKey } from "@/lib/types";

/**
 * Original inline-SVG spot illustrations. Hand-drawn feel, never kitschy.
 */
export default function IllustrationSpot({
  kind,
  size = 64,
  className,
  color = "#FBFAF6",
  accent = "#F5C77E",
}: {
  kind: IllustrationKey;
  size?: number;
  className?: string;
  color?: string;
  accent?: string;
}) {
  const props = { size, color, accent };
  switch (kind) {
    case "chocolate-hills":
      return <ChocolateHills {...props} className={className} />;
    case "tarsier":
      return <Tarsier {...props} className={className} />;
    case "bangka":
      return <Bangka {...props} className={className} />;
    case "balicasag":
      return <Balicasag {...props} className={className} />;
    case "loboc-river":
      return <Loboc {...props} className={className} />;
    case "hinagdanan":
      return <Hinagdanan {...props} className={className} />;
    case "palm":
      return <Palm {...props} className={className} />;
    case "banana-leaf":
      return <BananaLeaf {...props} className={className} />;
    case "capiz-window":
      return <CapizWindow {...props} className={className} />;
    case "tereza":
      return <Tereza {...props} className={className} />;
    case "spa":
      return <Spa {...props} className={className} />;
    case "pool":
      return <Pool {...props} className={className} />;
    default:
      return null;
  }
}

interface SpotProps { size: number; color: string; accent: string; className?: string }

function ChocolateHills({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ch-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={accent} />
          <stop offset="1" stopColor="#8E422E" />
        </linearGradient>
      </defs>
      <path d="M2 60 Q12 38 22 60 T44 60 T66 60 T80 60 V80 H0Z" fill="url(#ch-g)" stroke={color} strokeOpacity=".35" />
      <circle cx="60" cy="18" r="6" fill={accent} opacity=".85" />
    </svg>
  );
}
function Tarsier({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <ellipse cx="40" cy="46" rx="22" ry="20" fill={color} opacity=".95" />
      <ellipse cx="40" cy="36" rx="20" ry="16" fill="#BE5E43" opacity=".55" />
      <circle cx="30" cy="32" r="9" fill="#fff" />
      <circle cx="50" cy="32" r="9" fill="#fff" />
      <circle cx="30" cy="32" r="5" fill={accent} />
      <circle cx="50" cy="32" r="5" fill={accent} />
      <circle cx="30" cy="32" r="2" fill="#221C18" />
      <circle cx="50" cy="32" r="2" fill="#221C18" />
      <path d="M36 46 q4 4 8 0" stroke="#221C18" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function Bangka({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M6 55 Q40 70 74 55 L66 60 H14 Z" fill={accent} />
      <path d="M14 55 H66 V58 H14 Z" fill="#8E422E" />
      <line x1="40" y1="55" x2="40" y2="20" stroke={color} strokeWidth="2" />
      <path d="M40 22 L60 32 L40 38 Z" fill={color} opacity=".85" />
      <path d="M6 56 q34 8 68 0" stroke={color} strokeOpacity=".45" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function Balicasag({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="44" r="22" fill={color} opacity=".25" />
      <path d="M20 50 q20 -16 40 0" stroke={accent} strokeWidth="2" fill="none" />
      <path d="M16 58 q24 -18 48 0" stroke={color} strokeOpacity=".7" strokeWidth="1.6" fill="none" />
      <circle cx="60" cy="22" r="6" fill={accent} />
    </svg>
  );
}
function Loboc({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M0 50 Q20 35 40 50 T80 50 V80 H0 Z" fill={accent} opacity=".75" />
      <path d="M10 60 Q40 48 70 60" stroke={color} strokeOpacity=".5" strokeWidth="1.4" fill="none" />
      <rect x="34" y="38" width="12" height="6" fill={color} />
      <path d="M34 38 L40 30 L46 38 Z" fill="#8E422E" />
    </svg>
  );
}
function Hinagdanan({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M10 20 Q40 0 70 20 L70 70 Q40 60 10 70 Z" fill={accent} opacity=".55" />
      <ellipse cx="40" cy="55" rx="20" ry="6" fill={color} opacity=".7" />
      <circle cx="40" cy="22" r="3" fill={color} />
    </svg>
  );
}
function Palm({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M40 78 C40 60 38 40 36 24" stroke="#6B5D4F" strokeWidth="3" fill="none" />
      <path d="M36 24 Q10 12 6 32" stroke={accent} strokeWidth="3" fill="none" />
      <path d="M36 24 Q66 8 76 28" stroke={accent} strokeWidth="3" fill="none" />
      <path d="M36 24 Q14 30 12 48" stroke={accent} strokeWidth="3" fill="none" />
      <path d="M36 24 Q62 34 70 52" stroke={accent} strokeWidth="3" fill="none" />
    </svg>
  );
}
function BananaLeaf({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M10 70 Q30 -5 70 12 Q60 60 10 70 Z" fill="#C4540A" opacity=".9" />
      <path d="M14 66 Q42 24 66 18" stroke={color} strokeOpacity=".5" strokeWidth="1.4" fill="none" />
    </svg>
  );
}
function CapizWindow({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <rect x="8" y="8" width="64" height="64" rx="6" fill={color} opacity=".5" />
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 4 }).map((__, c) => (
          <rect key={r + "-" + c} x={10 + c * 16} y={10 + r * 16} width="14" height="14" fill={accent} opacity={0.25 + ((r + c) % 4) * 0.15} />
        ))
      )}
    </svg>
  );
}
function Tereza({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="58" cy="22" r="10" fill={accent} />
      <path d="M0 60 H80 V64 H0 Z" fill={color} opacity=".4" />
      <rect x="14" y="44" width="10" height="20" fill={color} />
      <rect x="56" y="44" width="10" height="20" fill={color} />
      <path d="M14 44 Q40 24 66 44" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}
function Spa({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M40 12 Q56 30 40 48 Q24 30 40 12 Z" fill={accent} opacity=".95" />
      <path d="M20 36 Q40 50 60 36 Q40 70 20 36 Z" fill="#C4540A" opacity=".7" />
    </svg>
  );
}
function Pool({ size, color, accent, className }: SpotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <rect x="8" y="34" width="64" height="36" rx="6" fill="#79B7C2" />
      <path d="M10 50 q10 -6 20 0 t20 0 t20 0" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 60 q10 -6 20 0 t20 0 t20 0" stroke={color} strokeOpacity=".7" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="20" r="5" fill={accent} />
    </svg>
  );
}
