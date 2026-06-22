"use client";

import { motion } from "framer-motion";
import { Mic, MessageCircle, CalendarCheck, MapPin, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

/**
 * "Meet Ivy" — journey-led. Makes her full scope obvious at a glance:
 * Ask anything → Book in seconds → Guide you in Bohol. The chat loops through
 * the whole arc (FAQ → confirmed booking → in-destination concierge) so guests
 * grasp that she helps before, during, and throughout the stay.
 */
export default function IvyBand() {
  const { t } = useI18n();

  const STEPS = [
    { icon: <MessageCircle className="h-[18px] w-[18px]" />, title: t("ivyBand.jS1Title"), desc: t("ivyBand.jS1Desc") },
    { icon: <CalendarCheck className="h-[18px] w-[18px]" />, title: t("ivyBand.jS2Title"), desc: t("ivyBand.jS2Desc") },
    { icon: <MapPin className="h-[18px] w-[18px]" />, title: t("ivyBand.jS3Title"), desc: t("ivyBand.jS3Desc") },
  ];

  const openIvy = () => {
    if (typeof window !== "undefined" && (window as any).__openIvy) {
      (window as any).__openIvy();
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">

          {/* Left — journey ladder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">{t("ivyBand.jLead")}</div>
            <h2 className="mt-3 font-display font-bold leading-[0.98] tracking-[-0.022em] text-pearl text-[clamp(32px,4.2vw,58px)]">
              {t("ivyBand.jHeadA")}{" "}
              <em className="italic text-gold-glow">{t("ivyBand.jHeadEm")}</em>
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-pearl/70">
              {t("ivyBand.jBody")}
            </p>

            {/* Ask → Book → Guide ladder */}
            <div className="mt-8">
              {STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className={`flex items-start gap-4 border-t border-pearl/10 py-4 ${i === STEPS.length - 1 ? "border-b" : ""}`}
                >
                  <span className="font-display text-base italic text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-glow/12 text-gold-glow">
                    {s.icon}
                  </span>
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-pearl">{s.title}</div>
                    <p className="mt-1 text-[13.5px] leading-snug text-pearl/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={openIvy}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-glow to-gold-deep px-6 py-3.5 text-[14px] font-semibold text-ink shadow-glowAmber transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" />
              {t("ivyBand.cta")}
              <Mic className="h-4 w-4 transition group-hover:scale-110" />
            </button>
            <p className="mt-3 text-[12px] text-pearl/35">{t("ivyBand.ctaSub")}</p>
          </motion.div>

          {/* Right — chat that travels the journey */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-pearl/10 bg-[#0B1525] shadow-deep">
              {/* Header with cycling phase tag */}
              <div className="flex items-center gap-3 border-b border-pearl/8 px-5 py-4">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-ink shadow-glowAmber">
                  <Sparkles className="h-4 w-4" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0B1525] bg-green-400" />
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-pearl">Ivy</div>
                  <div className="text-[11px] text-pearl/45">{t("ivyBand.chatStatus")}</div>
                </div>
                <span className="relative ml-auto inline-flex h-[22px] w-[74px] items-center justify-center rounded-full bg-gold-glow text-[9px] font-semibold uppercase tracking-[0.14em] text-ink">
                  <span className="ivb-ph ivb-p1 absolute">{t("ivyBand.jPhase1")}</span>
                  <span className="ivb-ph ivb-p2 absolute">{t("ivyBand.jPhase2")}</span>
                  <span className="ivb-ph ivb-p3 absolute">{t("ivyBand.jPhase3")}</span>
                  <span className="opacity-0">{t("ivyBand.jPhase2")}</span>
                </span>
              </div>

              {/* Messages — loop Ask → Book → In Bohol */}
              <div className="flex min-h-[280px] flex-col justify-center gap-3 px-5 py-5">
                <ChatBubble side="user" className="ivb-m1">{t("ivyBand.jC1")}</ChatBubble>
                <ChatBubble side="ivy" className="ivb-m2">{t("ivyBand.jC2")}</ChatBubble>
                <ChatBubble side="ivy" className="ivb-m3">{t("ivyBand.jC3")}</ChatBubble>
                <ChatBubble side="user" className="ivb-m4">{t("ivyBand.jC4")}</ChatBubble>
                <ChatBubble side="ivy" className="ivb-m5">{t("ivyBand.jC5")}</ChatBubble>
              </div>

              {/* Input bar */}
              <div className="border-t border-pearl/8 px-4 py-3">
                <button
                  onClick={openIvy}
                  className="flex w-full items-center gap-3 rounded-xl bg-pearl/5 px-4 py-2.5 text-left text-[13px] text-pearl/35 transition hover:bg-pearl/10"
                >
                  <Mic className="h-4 w-4 text-gold-glow" />
                  {t("ivyBand.chatInput")}
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ChatBubble({
  side,
  className,
  children,
}: {
  side: "ivy" | "user";
  className?: string;
  children: React.ReactNode;
}) {
  if (side === "user") {
    return (
      <div className={`flex justify-end ${className ?? ""}`}>
        <div className="ivb-bub max-w-[80%] rounded-2xl rounded-tr-sm bg-gold-deep/80 px-4 py-2.5 text-[13.5px] leading-relaxed text-pearl/95">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className={`flex gap-3 ${className ?? ""}`}>
      <span className="ivb-bub mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-ink">
        <Sparkles className="h-3.5 w-3.5" />
      </span>
      <div className="ivb-bub max-w-[80%] rounded-2xl rounded-tl-sm bg-pearl/10 px-4 py-2.5 text-[13.5px] leading-relaxed text-pearl/90">
        {children}
      </div>
    </div>
  );
}
