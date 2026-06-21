import clsx from "clsx";

export default function ResortLogo({
  size = 36,
  variant = "light",
  className,
}: {
  size?: number;
  variant?: "light" | "dark";
  className?: string;
}) {
  const fg = variant === "dark" ? "#FDF8F0" : "#221C18";
  const muted = variant === "dark" ? "#FF9B4A" : "#C4540A";
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      {/* Official BW Plus logo mark */}
      <img
        src="/bw-plus-logo.png"
        alt="Best Western Plus"
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-[12px] font-medium uppercase tracking-[0.18em]"
          style={{ color: muted }}
        >
          Best Western Plus
        </span>
        <span
          className="font-display text-[20px] font-bold tracking-tight"
          style={{ color: fg }}
        >
          The Ivywall <span className="font-light italic">Panglao</span>
        </span>
      </div>
    </div>
  );
}
