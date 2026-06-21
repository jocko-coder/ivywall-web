"use client";

import { ReactNode } from "react";
import clsx from "clsx";

/**
 * Infinite horizontal marquee. Duplicates content twice for seamless loop
 * and uses the `marquee` keyframe from tailwind config (translateX -50%).
 */
export default function Marquee({
  children,
  className,
  speedSec = 40,
  reverse = false,
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  speedSec?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={clsx("group relative w-full overflow-hidden", className)}
      style={{ ["--marquee-duration" as any]: `${speedSec}s` }}
    >
      <div
        className={clsx(
          "flex w-max shrink-0 items-center gap-12 will-change-transform",
          reverse ? "animate-[marquee_var(--marquee-duration)_linear_infinite_reverse]" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speedSec}s` }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
