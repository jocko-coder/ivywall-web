import clsx from "clsx";
import { ReactNode } from "react";

type Tone = "amber" | "teal" | "palm" | "terracotta" | "pearl" | "dark";

export default function Badge({
  children,
  tone = "amber",
  className,
  icon,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  icon?: ReactNode;
}) {
  const tones: Record<Tone, string> = {
    amber: "bg-amber-soft text-amber-deep ring-1 ring-amber/40",
    teal: "bg-coral/10 text-coral ring-1 ring-coral/20",
    palm: "bg-palm/10 text-palm-deep ring-1 ring-palm/30",
    terracotta: "bg-terracotta/10 text-terracotta-deep ring-1 ring-terracotta/30",
    pearl: "bg-pearl text-ink ring-1 ring-clay/20",
    dark: "bg-palm-night/95 text-pearl ring-1 ring-amber-glow/30",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
