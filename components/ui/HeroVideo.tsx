"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-bleed hero media that stays light on weak devices.
 * - Always renders the poster via next/image (optimized, per-device AVIF/WebP) as the LCP.
 * - Only mounts the (multi-MB) autoplay video on capable devices — phones on data-saver,
 *   <4GB RAM, or reduced-motion never download it; they keep the poster.
 * - The video fades in only once it is actually playing, so the optimized poster shows
 *   first (no black flash) and the video layers over it.
 * Parent must be `relative` with a defined height.
 */
export default function HeroVideo({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const [playVideo, setPlayVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const lowEnd =
      nav.connection?.saveData === true ||
      (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!lowEnd) setPlayVideo(true);
  }, []);

  return (
    <>
      <Image src={poster} alt={alt} fill priority sizes="100vw" className="object-cover" />
      {playVideo && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setReady(true)}
          aria-hidden
        />
      )}
    </>
  );
}
