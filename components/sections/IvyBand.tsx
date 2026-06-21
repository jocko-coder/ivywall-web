"use client";

import { motion } from "framer-motion";
import { Mic, Globe, Clock, CalendarCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const FEATURE_ICONS = [
  <Clock className="h-4 w-4" key="c" />,
  <Globe className="h-4 w-4" key="g" />,
  <CalendarCheck className="h-4 w-4" key="cc" />,
  <Mic className="h-4 w-4" key="m" />,
];

export default function IvyBand() {
  const { t } = useI18n();
  const FEATURES = FEATURE_ICONS.map((icon, i) => ({
    icon,
    label: t(`ivyBand.f${i + 1}Label`),
    desc: t(`ivyBand.f${i + 1}Desc`),
  }));
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

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 h-px w-10 bg-gold-deep" />
            <h2 className="font-display font-bold leading-[0.98] tracking-[-0.022em] text-pearl text-[clamp(36px,4.5vw,64px)]">
              {t("ivyBand.heading1")}{" "}
              <em className="text-gold-glow">{t("ivyBand.headingEm")}</em>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-pearl/70">
              {t("ivyBand.body")}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <div key={f.label} className="rounded-2xl border border-pearl/8 bg-pearl/5 p-4 backdrop-blur">
                  <div className="flex items-center gap-2 text-gold-glow">
                    {f.icon}
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{f.label}</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-snug text-pearl/60">{f.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={openIvy}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-glow to-gold-deep px-6 py-3.5 text-[14px] font-semibold text-ink shadow-glowAmber transition hover:brightness-110 hover:-translate-y-0.5"
            >
              <span className="text-[18px]">✦</span>
              {t("ivyBand.cta")}
              <Mic className="h-4 w-4 transition group-hover:scale-110" />
            </button>

            <p className="mt-3 text-[12px] text-pearl/35">
              {t("ivyBand.ctaSub")}
            </p>
          </motion.div>

          {/* Right — preview card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Mock chat UI */}
            <div className="overflow-hidden rounded-3xl border border-pearl/10 bg-[#0B1525] shadow-deep">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-pearl/8 px-5 py-4">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-[18px] shadow-glowAmber">
                  ✦
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0B1525] bg-green-400" />
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-pearl">Ivy</div>
                  <div className="text-[11px] text-pearl/45">{t("ivyBand.chatStatus")}</div>
                </div>
              </div>
              {/* Chat messages */}
              <div className="space-y-4 px-5 py-5">
                {/* Ivy message */}
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-[13px]">✦</span>
                  <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-pearl/10 px-4 py-3 text-[13.5px] leading-relaxed text-pearl/90">
                    {t("ivyBand.chatMsg1")}
                  </div>
                </div>
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-gold-deep/80 px-4 py-3 text-[13.5px] leading-relaxed text-pearl/95">
                    {t("ivyBand.chatUser")}
                  </div>
                </div>
                {/* Ivy reply */}
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-[13px]">✦</span>
                  <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-pearl/10 px-4 py-3 text-[13.5px] leading-relaxed text-pearl/90">
                    {t("ivyBand.chatMsg2Pre")} <strong className="text-gold-glow">{t("ivyBand.chatMsg2Room")}</strong> {t("ivyBand.chatMsg2Post")}
                  </div>
                </div>
                {/* Typing indicator */}
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-glow to-gold-deep text-[13px]">✦</span>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-pearl/10 px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-pearl/50 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-pearl/50 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-pearl/50 [animation-delay:300ms]" />
                  </div>
                </div>
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

            {/* Floating language badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 rounded-2xl border border-pearl/10 bg-[#0B1525] px-3 py-2 shadow-deep"
            >
              <div className="text-[11px] font-semibold text-gold-glow">EN · JP · KO · ZH · PH</div>
              <div className="text-[10px] text-pearl/45">{t("ivyBand.langBadge")}</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
