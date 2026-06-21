import clsx from "clsx";

export default function SectionDivider({
  label,
  className,
  ornament = "diamond",
  variant = "light",
}: {
  label?: string;
  className?: string;
  ornament?: "diamond" | "leaf" | "none";
  variant?: "light" | "dark";
}) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <span className="banig h-[6px] flex-1 rounded-full opacity-70" />
      {ornament === "diamond" && (
        <span
          className="block h-2 w-2 rotate-45 rounded-[2px] bg-amber-deep shadow-[0_0_0_3px_rgba(245,199,126,0.18)]"
          aria-hidden="true"
        />
      )}
      {ornament === "leaf" && (
        <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
          <path d="M0 5 q5 -5 13 0 q-8 6 -13 0z" fill="#C4540A" />
        </svg>
      )}
      {label && (
        <span
          className={clsx(
            "small-caps font-display text-[11px]",
            variant === "dark" ? "text-pearl/80" : "text-clay"
          )}
        >
          {label}
        </span>
      )}
      {ornament === "diamond" && (
        <span
          className="block h-2 w-2 rotate-45 rounded-[2px] bg-amber-deep shadow-[0_0_0_3px_rgba(245,199,126,0.18)]"
          aria-hidden="true"
        />
      )}
      <span className="banig h-[6px] flex-1 rounded-full opacity-70" />
    </div>
  );
}
