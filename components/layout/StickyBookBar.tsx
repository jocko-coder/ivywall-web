"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * Mobile-only floating Reserve button (bottom-right). Just the orange CTA — no
 * "plan your stay" copy. Appears after a small scroll, hides on the booking flow.
 */
export default function StickyBookBar({ hide = false }: { hide?: boolean }) {
  const { t } = useI18n();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (hide || pathname?.startsWith("/book")) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="safe-bottom fixed bottom-4 right-4 z-40 md:hidden"
        >
          <Link
            href="/book"
            className="flex items-center gap-2 rounded-full bg-gradient-to-b from-coral to-coral-deep px-6 py-3.5 text-[14px] font-bold text-pearl shadow-warm ring-1 ring-white/15 transition active:scale-[0.98]"
          >
            {t("nav.bookNow")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
