"use client";

import clsx from "clsx";

/**
 * Cinematic photo plate. Uses an external real photograph with consistent
 * color-grade overlays, optional grain, and label badge — so the prototype
 * reads as "real product shot," not "missing image."
 */
export default function PhotoBackdrop({
  src,
  alt,
  label,
  rounded = "rounded-3xl",
  className,
  grade = "warm",
  kenburns = false,
  overlay = true,
  showLabel = true,
  position = "center",
}: {
  src: string;
  alt: string;
  label?: string;
  rounded?: string;
  className?: string;
  grade?: "warm" | "cool" | "neutral" | "dusk";
  kenburns?: boolean;
  overlay?: boolean;
  showLabel?: boolean;
  position?: "center" | "top" | "bottom";
}) {
  const grades = {
    warm: "linear-gradient(180deg,rgba(245,199,126,0.10),rgba(190,94,67,0.18)_55%,rgba(139,61,10,0.35))",
    cool: "linear-gradient(180deg,rgba(201,225,210,0.20),rgba(196,84,10,0.10)_50%,rgba(34,28,24,0.45))",
    dusk: "linear-gradient(180deg,rgba(245,199,126,0.08),rgba(190,94,67,0.20)_50%,rgba(34,28,24,0.60))",
    neutral: "linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.25))",
  };
  const objectPos =
    position === "top" ? "object-top" : position === "bottom" ? "object-bottom" : "object-center";
  return (
    <div
      className={clsx(
        "relative isolate overflow-hidden bg-ink/40",
        rounded,
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={clsx(
          "absolute inset-0 h-full w-full object-cover",
          objectPos,
          kenburns && "animate-kenburns will-change-transform"
        )}
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{ background: grades[grade] }}
      />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay [background:radial-gradient(75%_60%_at_75%_15%,rgba(255,231,182,0.35),transparent_65%)]" />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
      )}
      {/* Subtle grain */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-25 [background-image:radial-gradient(rgba(0,0,0,0.6)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:3px_3px,4px_4px] [background-position:0_0,1px_2px]" />
      {showLabel && label && (
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rotate-45 rounded-[2px] bg-amber-glow" />
          <span className="font-display text-[12px] uppercase tracking-[0.22em] text-pearl/95 drop-shadow">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
