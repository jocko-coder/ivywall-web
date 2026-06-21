"use client";

import clsx from "clsx";
import type { PhotoPlaceholder } from "@/lib/types";
import IllustrationSpot from "./IllustrationSpot";

/**
 * Render a real photograph if `photo` is supplied, falling back to a
 * sophisticated gradient + grain + spot illustration treatment. Either
 * way it reads as intentional, never "missing image."
 */
export default function PhotoFrame({
  photo,
  className,
  rounded = "rounded-3xl",
  showLabel = true,
  kenburns = false,
  overlay = true,
}: {
  photo: PhotoPlaceholder;
  className?: string;
  rounded?: string;
  showLabel?: boolean;
  kenburns?: boolean;
  overlay?: boolean;
}) {
  const hasPhoto = Boolean(photo.photo);
  return (
    <div
      className={clsx(
        "placeholder-photo relative isolate overflow-hidden bg-ink/30",
        rounded,
        className
      )}
    >
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.photo!}
          alt={photo.label}
          loading="lazy"
          className={clsx(
            "absolute inset-0 h-full w-full object-cover",
            kenburns && "animate-kenburns will-change-transform"
          )}
        />
      ) : (
        <div
          className={clsx(
            "absolute inset-0 bg-gradient-to-br",
            photo.gradient,
            kenburns && "animate-kenburns will-change-transform"
          )}
        />
      )}
      {/* warm color grade for cohesion across mixed real/illustrated */}
      {hasPhoto && (
        <>
          <div className="absolute inset-0 mix-blend-multiply [background:linear-gradient(180deg,rgba(245,199,126,0.08),rgba(190,94,67,0.16)_55%,rgba(139,61,10,0.35))]" />
          <div className="absolute inset-0 mix-blend-overlay [background:radial-gradient(70%_60%_at_75%_15%,rgba(255,231,182,0.40),transparent_65%)]" />
        </>
      )}
      {!hasPhoto && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.35),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,rgba(0,0,0,0.20),transparent_60%)]" />
        </>
      )}
      {photo.illustration && !hasPhoto && (
        <div className="absolute right-4 bottom-4 opacity-70">
          <IllustrationSpot kind={photo.illustration} size={80} />
        </div>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
      )}
      {/* subtle grain */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-25 [background-image:radial-gradient(rgba(0,0,0,0.6)_1px,transparent_1px),radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:3px_3px,4px_4px] [background-position:0_0,1px_2px]" />
      {showLabel && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rotate-45 rounded-[2px] bg-amber-glow" />
          <span className="font-display text-[12px] uppercase tracking-[0.22em] text-pearl/95 drop-shadow">
            {photo.label}
          </span>
        </div>
      )}
    </div>
  );
}
