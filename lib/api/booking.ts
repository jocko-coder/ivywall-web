import { roomTypes } from "@/lib/mock/rooms";
import type { SearchQuery } from "@/lib/types";

const FN = "/api";

/**
 * Fetch live availability from the OHIP / Opera proxy
 * (app/api/availability/route.ts).
 *
 * While the backend isn't configured — or in static/local dev where the Netlify
 * Functions aren't running — this transparently falls back to the bundled mock
 * room data so the UI keeps working. It flips to live automatically the moment
 * the Netlify env vars are set; no component changes needed.
 */
export async function fetchAvailability(query: SearchQuery) {
  try {
    const qs = new URLSearchParams({
      checkIn: query.checkIn,
      checkOut: query.checkOut,
      adults: String(query.adults),
      children: String(query.children),
      rooms: String(query.rooms),
      promoCode: query.promoCode ?? "",
    });
    const res = await fetch(`${FN}/availability?${qs.toString()}`, {
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.configured && Array.isArray(data.rooms) && data.rooms.length) {
        return { live: true as const, rooms: data.rooms };
      }
    }
  } catch {
    /* fall through to mock */
  }
  return { live: false as const, rooms: roomTypes };
}

/**
 * Create a payment intent via the gateway proxy (app/api/create-payment/route.ts).
 * Returns { live:false, mock:true } until a provider + secret key are configured,
 * which keeps the prototype's mock checkout working in the meantime.
 */
export async function createPayment(input: {
  amount: number;
  currency?: string;
  method?: string;
  bookingRef?: string;
}) {
  try {
    const res = await fetch(`${FN}/create-payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.configured) return { live: true as const, ...data };
    }
  } catch {
    /* fall through to mock */
  }
  return { live: false as const, mock: true as const };
}
