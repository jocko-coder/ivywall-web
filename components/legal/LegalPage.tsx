import type { ReactNode } from "react";

/**
 * Shared shell for legal/policy pages — readable prose column with scoped
 * typography so content pages just use plain <h2>/<p>/<ul>.
 */
export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-coral">Legal</div>
        <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">{title}</h1>
        <p className="mt-3 text-[13px] text-clay">Last updated: {updated}</p>
        {intro && <p className="mt-6 text-[15.5px] leading-relaxed text-ink/75">{intro}</p>}
        <div className="ivy-legal mt-8 text-[15px] leading-relaxed text-ink/80">{children}</div>

        <div className="mt-12 rounded-2xl border border-clay/15 bg-pearl-warm/50 p-4 text-[12.5px] leading-relaxed text-clay">
          This document is a general template provided for transparency and is not legal advice.
          Please have it reviewed by qualified counsel before relying on it, and tailor it to your
          actual data practices.
        </div>
      </div>

      <style>{`
        .ivy-legal h2 { font-family: var(--font-display), serif; color: #221C18; font-size: 1.35rem; line-height: 1.2; margin: 2rem 0 .6rem; }
        .ivy-legal h3 { font-weight: 700; color: #221C18; font-size: 1.02rem; margin: 1.4rem 0 .4rem; }
        .ivy-legal p { margin: .6rem 0; }
        .ivy-legal ul { margin: .6rem 0 .6rem 1.1rem; list-style: disc; }
        .ivy-legal li { margin: .3rem 0; }
        .ivy-legal a { color: #c4540a; text-decoration: underline; text-underline-offset: 2px; }
        .ivy-legal strong { color: #221C18; }
      `}</style>
    </div>
  );
}
