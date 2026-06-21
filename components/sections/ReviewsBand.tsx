"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ReviewCard from "@/components/ui/ReviewCard";
import Marquee from "@/components/fx/Marquee";
import { reviews } from "@/lib/mock/reviews";
import { useI18n } from "@/lib/i18n/I18nProvider";

const MARQUEE_QUOTES = [
  { quote: "Soft mornings, an incredible breakfast, and staff who knew our names by dinner.", guest: "Hiroko & Kenji · Tokyo" },
  { quote: "Three stays in. The little things make it every single time.", guest: "Jonathan T. · Singapore" },
  { quote: "Felt like coming home — Boholano warmth with four-star finish.", guest: "Aileen & Marco · Manila" },
  { quote: "We put the phones down by the pool and didn't mind at all.", guest: "Hiroko & Kenji · Tokyo" },
  { quote: "Late checkout, free upgrade, and kids who had to be dragged away from the pool.", guest: "The Park Family · Seoul" },
  { quote: "The banig headboard, the capiz lamp. Design that knows where it is.", guest: "Mei Lin & David · Hong Kong" },
  { quote: "Worth every peso. The rooftop at golden hour — book it.", guest: "Aileen & Marco · Manila" },
  { quote: "Nothing transactional about this place. Rare for a chain hotel.", guest: "Jonathan T. · Singapore" },
];

export default function ReviewsBand() {
  const { t } = useI18n();
  const featured = reviews[0];
  const rest = reviews.slice(1, 5);

  return (
    <section data-ivy-station="reviews" className="overflow-hidden py-24 pb-44 md:py-32 md:pb-48">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 h-px w-10 bg-gold-deep" />
            <h2 className="font-display font-bold leading-[0.98] tracking-[-0.025em] text-ink text-[clamp(36px,4.8vw,68px)]">
              {t("reviews.heading")}
              <br />
              {t("reviews.headingLine2")}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-end gap-2"
          >
            <div className="inline-flex items-center gap-2">
              <span className="font-display text-5xl font-medium tracking-tight text-ink">4.6</span>
              <div className="flex flex-col">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-glow text-gold-glow" />
                  ))}
                </div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-ink/55">{t("reviews.ratingLabel")}</span>
              </div>
            </div>
            <span className="text-[12px] text-ink/55">{t("reviews.reviewsCount")}</span>
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g664893-d17512963"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-navy/20 bg-pearl-warm px-3 py-1.5 text-[11px] font-semibold text-navy transition hover:bg-navy hover:text-pearl"
            >
              Read all reviews on TripAdvisor ↗
            </a>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071528] via-[#0D1B2A] to-[#0B2545] p-8 text-pearl shadow-deep md:col-span-1 md:row-span-2"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber/20 blur-3xl" />
            <Quote className="h-10 w-10 text-amber-glow" />
            <div className="mt-4 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-glow text-gold-glow" />
              ))}
            </div>
            <p className="mt-5 font-display text-[22px] leading-[1.35] tracking-tight text-pearl md:text-[26px]">
              &ldquo;{featured.title}&rdquo; — {featured.body.slice(0, 200)}{featured.body.length > 200 ? "…" : ""}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-pearl/20 pt-5 text-[12px]">
              <div>
                <div className="font-semibold text-pearl">{featured.guestName}</div>
                <div className="text-pearl/65">{featured.country} · {featured.stayType}</div>
              </div>
              <div className="text-right text-pearl/65">
                <div className="text-[10px] uppercase tracking-[0.18em] text-amber-glow">{featured.source}</div>
                <div>{new Date(featured.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</div>
              </div>
            </div>
          </motion.article>

          {rest.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <ReviewCard review={r} />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-16 border-y border-ink/6 bg-pearl-warm/60 py-6"
      >
        <Marquee speedSec={45} pauseOnHover>
          {MARQUEE_QUOTES.map((q, i) => (
            <div key={`${q.guest}-${i}`} className="flex shrink-0 items-center gap-8 pr-16">
              <span className="text-gold-deep/70 text-lg">✦</span>
              <div>
                <p className="font-display text-[15px] italic leading-snug text-ink/80">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ink/45">{q.guest}</p>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee speedSec={55} reverse pauseOnHover className="mt-3">
          {MARQUEE_QUOTES.slice().reverse().map((q, i) => (
            <div key={`${q.guest}-rev-${i}`} className="flex shrink-0 items-center gap-8 pr-16">
              <span className="text-gold-deep/60 text-lg">✦</span>
              <div>
                <p className="font-display text-[14px] italic leading-snug text-ink/65">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ink/35">{q.guest}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
