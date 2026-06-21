import { Star, Quote } from "lucide-react";
import type { Review } from "@/lib/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="capiz relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/30" />
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < review.rating ? "h-4 w-4 fill-gold-glow text-gold-glow" : "h-4 w-4 text-clay/30"}
          />
        ))}
      </div>
      <h4 className="font-display text-lg text-ink leading-tight">{review.title}</h4>
      <p className="text-[14px] leading-relaxed text-clay">"{review.body}"</p>
      <div className="mt-auto flex items-center justify-between border-t border-clay/10 pt-3 text-[12px]">
        <div>
          <div className="font-semibold text-ink">{review.guestName}</div>
          <div className="text-clay">{review.country} · {review.stayType}</div>
        </div>
        <div className="text-right text-clay">
          <div className="text-[10px] uppercase tracking-[0.18em]">{review.source}</div>
          <div>{new Date(review.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</div>
        </div>
      </div>
    </article>
  );
}
