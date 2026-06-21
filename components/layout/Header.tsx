"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResortLogo from "@/components/ui/ResortLogo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import CurrencySwitcher from "@/components/ui/CurrencySwitcher";
import BookingWidget from "@/components/booking/BookingWidget";
import { useI18n } from "@/lib/i18n/I18nProvider";

const NAV = [
  { href: "/rooms", key: "nav.rooms" },
  { href: "/dining", key: "nav.dining" },
  { href: "/facilities", key: "nav.facilities" },
  { href: "/offers", key: "nav.offers" },
  { href: "/mice", key: "nav.mice" },
  { href: "/experiences", key: "nav.experiences" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "/about", key: "nav.about" },
];

export default function Header() {
  const { t } = useI18n();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // nav visual state: solid (scrolled/menus) | cinematic (homepage top, dark
  // scrim over the hero photo) | top (other pages, cream gradient).
  const navState =
    scrolled || open || bookingOpen ? "solid" : isHome ? "cinematic" : "top";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-nav={navState}
      className={`sticky top-0 z-40 transition-all ${
        navState === "solid"
          ? "bg-pearl/95 shadow-soft backdrop-blur-md ring-1 ring-ink/5"
          : navState === "top"
            ? "bg-gradient-to-b from-pearl/85 via-pearl/35 to-transparent backdrop-blur"
            : "" /* cinematic: dark scrim + white text + ghost pills via globals.css */
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label="Ivywall home" className="min-w-0 shrink overflow-hidden">
          <ResortLogo size={40} />
        </Link>

        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12.5px] font-medium text-ink/80 transition hover:text-ink xl:px-3"
            >
              {t(n.key)}
              <span className="absolute inset-x-2.5 -bottom-0.5 h-px origin-left scale-x-0 bg-amber-deep transition group-hover:scale-x-100 xl:inset-x-3" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 pr-1 lg:pr-0">
          <div className="hidden items-center gap-1 lg:flex">
            <LanguageSwitcher />
            <CurrencySwitcher />
          </div>
          {/* Talk to Ivy */}
          <button
            onClick={() => typeof window !== "undefined" && (window as any).__openIvy?.()}
            className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-gold/40 bg-ink/90 px-3.5 py-2 text-[12px] font-semibold text-gold-glow transition hover:bg-ink lg:inline-flex"
          >
            <span className="text-[13px] leading-none">✦</span>
            Talk to Ivy
          </button>
          <button
            onClick={() => setBookingOpen((b) => !b)}
            className="hidden shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-b from-coral to-coral-deep px-4 py-2 text-[13px] font-semibold text-pearl shadow-bezel md:inline-flex"
          >
            {t("nav.bookNow")}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${bookingOpen ? "rotate-180" : ""}`} />
          </button>
          {/* Mobile: Talk to Ivy (the Reserve action lives in the floating bar) */}
          <button
            onClick={() => typeof window !== "undefined" && (window as any).__openIvy?.()}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-gold/40 bg-ink/90 px-3 py-1.5 text-[12px] font-semibold text-gold-glow transition hover:bg-ink md:hidden"
          >
            <span className="text-[13px] leading-none">✦</span>
            Talk to Ivy
          </button>
          <button
            className="rounded-full p-2 text-ink lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Sticky inline booking */}
      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="container-x overflow-hidden pb-4"
          >
            <BookingWidget variant="inline" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="container-x grid gap-2 pb-4 pt-2 lg:hidden"
          >
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-pearl-warm px-4 py-3 text-[14px] font-semibold text-ink hover:bg-amber-soft/70"
              >
                {t(n.key)}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); typeof window !== "undefined" && (window as any).__openIvy?.(); }}
              className="flex items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-[14px] font-semibold text-gold-glow"
            >
              <span>✦</span> Talk to Ivy — AI Receptionist
            </button>
            <div className="flex items-center gap-2 px-1 pt-1">
              <LanguageSwitcher dropUp align="left" />
              <CurrencySwitcher dropUp align="left" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
