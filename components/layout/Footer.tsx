"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Sparkles } from "lucide-react";
import ResortLogo from "@/components/ui/ResortLogo";
import SectionDivider from "@/components/ui/SectionDivider";
import IllustrationSpot from "@/components/ui/IllustrationSpot";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative mt-24 overflow-hidden bg-coral-deep text-pearl">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sand to-transparent opacity-10" />
      <div className="pointer-events-none absolute -right-6 top-8 opacity-25">
        <IllustrationSpot kind="palm" size={140} color="#FBFAF6" accent="#F5C77E" />
      </div>
      <div className="pointer-events-none absolute -left-6 bottom-8 opacity-25">
        <IllustrationSpot kind="bangka" size={120} color="#FBFAF6" accent="#F5C77E" />
      </div>

      <div className="container-x relative grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <ResortLogo variant="dark" size={42} />
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-pearl/80">
            {t("footer.tagline")}
          </p>
          <SectionDivider variant="dark" className="mt-6 max-w-sm" label={t("footer.findUs")} />
          <ul className="mt-4 space-y-2 text-[14px] text-pearl/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
              {t("footer.address")}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
              <span>
                <a href="tel:+6303841211128" className="hover:text-amber-glow">{t("footer.phone")}</a>
                {" · "}
                <a href="tel:+639171662184" className="hover:text-amber-glow">{t("footer.mobile")}</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
              <a href={`mailto:${t("footer.email")}`} className="hover:text-amber-glow">{t("footer.email")}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="small-caps text-[11px] text-amber-glow">{t("footer.stayColumn")}</h4>
          <ul className="mt-3 space-y-1.5 text-[14px] text-pearl/85">
            <li><Link href="/rooms">{t("nav.rooms")}</Link></li>
            <li><Link href="/offers">{t("nav.offers")}</Link></li>
            <li><Link href="/dining">{t("nav.dining")}</Link></li>
            <li><Link href="/facilities">{t("nav.facilities")}</Link></li>
            <li><Link href="/experiences">{t("nav.experiences")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="small-caps text-[11px] text-amber-glow">{t("footer.resortColumn")}</h4>
          <ul className="mt-3 space-y-1.5 text-[14px] text-pearl/85">
            <li><Link href="/mice">{t("nav.mice")}</Link></li>
            <li><Link href="/gallery">{t("nav.gallery")}</Link></li>
            <li><Link href="/about">{t("nav.about")}</Link></li>
            <li><Link href="/contact">{t("nav.contact")}</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li>
              <a href="https://ivywall-app.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-amber-glow">
                <Sparkles className="h-3 w-3" /> {t("footer.guestApp")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-pearl/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 pb-28 pt-6 text-[12px] text-pearl/65 md:flex-row md:pb-6">
          <p>© {new Date().getFullYear()} The Ivywall Resort-Panglao. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/bwplusivywallpanglao/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-amber-glow"><Facebook className="h-4 w-4" /></a>
            <Link href="/privacy" className="hover:text-amber-glow">Privacy</Link>
            <Link href="/cookies" className="hover:text-amber-glow">Cookies</Link>
            <Link href="/terms" className="hover:text-amber-glow">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
