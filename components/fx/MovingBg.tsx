"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle moving light background (abstract — no recognizable scene, so it can
 * never be mistaken for the real resort). Desktop-only, pauses when off-screen,
 * preload="none" so it never blocks first paint. Sits behind section content.
 */
export default function MovingBg({ tint }: { tint: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.01 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      <video
        ref={ref}
        src="/clips/story-bg.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: tint }} />
    </div>
  );
}
