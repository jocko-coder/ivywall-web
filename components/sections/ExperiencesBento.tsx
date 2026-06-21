"use client";

import Link from "next/link";
import { experiences } from "@/lib/mock/experiences";
import { useI18n } from "@/lib/i18n/I18nProvider";

const TC: Record<string, string> = { Island: "island", Nature: "nature", Adventure: "adventure", Culture: "culture" };
const LAYOUT = ["ivy-exp-feature", "ivy-exp-sec", "ivy-exp-sec", "ivy-exp-sm", "ivy-exp-sm", "ivy-exp-sm"];

const Dia = () => (<svg viewBox="0 0 10 10" width="9" height="9" fill="currentColor" aria-hidden><rect x="2.2" y="2.2" width="5.6" height="5.6" rx="1" transform="rotate(45 5 5)" /></svg>);
const Clock = () => (<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></svg>);
const Arrow = () => (<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h13M12 6l6 6-6 6" /></svg>);
const Crown = () => (<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden><path d="M3 7.5l4.2 3.2L12 4l4.8 6.7L21 7.5 19.2 18H4.8L3 7.5z" /></svg>);

/**
 * "Explore Bohol" experiences bento — a 12-col mosaic (feature + 2 + 3),
 * horizontal-scroll carousel on mobile. Built from the shared experiences data.
 */
export default function ExperiencesBento({ link = "/experiences" }: { link?: string }) {
  const { t } = useI18n();
  const items = experiences.slice(0, 6);
  const external = link.startsWith("http");
  return (
    <section className="container-x py-20 md:py-28">
      <div className="ivy-exp">
        <div className="ivy-exp-head">
          <div className="ivy-exp-hl">
            <div className="ivy-exp-kicker"><Dia /> {t("expBento.kicker")}</div>
            <div className="ivy-exp-titlerow">
              <h2 className="ivy-exp-title">{t("expBento.title1")}<br />{t("expBento.title2")}</h2>
              <div className="ivy-exp-lead">
                <span className="sep" />
                <p>{t("expBento.lead")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ivy-exp-cards">
          {items.map((e, i) => {
            const inner = (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.photo} alt={e.name} loading="lazy" decoding="async" />
                <div className="ivy-exp-tags">
                  <span className={`ivy-exp-tag ${TC[e.category] || "island"}`}>{e.category.toUpperCase()}</span>
                  <span className="ivy-exp-hrs"><Clock />{e.durationHrs} {t("expBento.hrs")}</span>
                </div>
                <div className="ivy-exp-body">
                  <h3 className="ivy-exp-name">{e.name}</h3>
                  {i < 3 && e.highlights?.length ? (
                    <ul className="ivy-exp-bullets">{e.highlights.map((b) => <li key={b}>{b}</li>)}</ul>
                  ) : null}
                  <span className="ivy-exp-view">{t("expBento.view")} <Arrow /></span>
                </div>
                {i === 0 ? (
                  <div className="ivy-exp-badge"><Crown /><span>{t("expBento.privateBadge")}</span></div>
                ) : null}
              </>
            );
            const cls = `ivy-exp-card ${LAYOUT[i]}`;
            return external ? (
              <a key={e.id} href={link} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={e.id} href={link} className={cls}>{inner}</Link>
            );
          })}
        </div>

        <div className="ivy-exp-foot"><Dia /> {t("expBento.foot")}</div>
      </div>
    </section>
  );
}
