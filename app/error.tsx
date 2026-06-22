"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Global error boundary — shown if a route throws at runtime. Friendly, on-brand,
 * with a retry and a way home (so a single broken component never dead-ends a guest).
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Hook for error monitoring (e.g. Sentry) once configured.
    console.error(error);
  }, [error]);

  return (
    <div className="container-x flex min-h-[70svh] flex-col items-center justify-center text-center">
      <div className="text-[11px] uppercase tracking-[0.3em] text-coral">Something went wrong</div>
      <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">A little hiccup by the sea.</h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/70">
        We hit an unexpected error. Please try again — if it keeps happening, our team is one
        message away.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-full bg-gradient-to-b from-coral to-coral-deep px-6 py-3 text-[14px] font-semibold text-pearl shadow-warm transition hover:brightness-105"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-clay/25 px-6 py-3 text-[14px] font-semibold text-ink transition hover:bg-pearl-warm"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
