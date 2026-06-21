"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

/**
 * Mobile-only sticky CTA bar. Appears after a small scroll, hides on the booking flow itself.
 */
export default function StickyBookBar({ hide = false }: { hide?: boolean }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (hide || !visible) return null;
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-clay/10 bg-pearl/95 px-4 py-3 shadow-deep backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[12px]">
          <div className="font-semibold text-ink">Plan your stay</div>
          <div className="inline-flex items-center gap-1 text-clay">
            <Calendar className="h-3 w-3" /> Check availability
          </div>
        </div>
        <Link href="/book">
          <Button size="md" variant="primary">Reserve</Button>
        </Link>
      </div>
    </div>
  );
}
