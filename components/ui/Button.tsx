"use client";

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "amber" | "outline" | "dark";
type Size = "sm" | "md" | "lg" | "xl";

interface Props extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-coral to-coral-deep text-pearl shadow-bezel hover:brightness-110",
  amber:
    "bg-gradient-to-b from-amber-glow to-amber-deep text-ink shadow-bezel hover:brightness-105",
  secondary:
    "bg-pearl text-coral border border-coral/20 shadow-soft hover:bg-coral-soft/20",
  ghost: "bg-transparent text-coral hover:bg-coral/5",
  outline:
    "bg-transparent text-pearl border border-pearl/30 hover:border-amber-glow/60 hover:bg-pearl/5",
  dark: "bg-ink text-pearl hover:bg-ink/80",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-6 text-[15px]",
  xl: "h-16 px-8 text-base",
};

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", full, className, children, leadingIcon, trailingIcon, ...rest },
  ref
) {
  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 360, damping: 24 }}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[filter,background,box-shadow,color] disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        full && "w-full",
        className
      )}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </motion.button>
  );
});

export default Button;
