// Domain types — designed so swapping mock → live (Oracle OPERA / OHIP, channel manager, PG)
// is purely a data-source change.

export type LangCode = "en" | "tl" | "zh-CN" | "zh-HK" | "ja" | "ko";
export type CurrencyCode = "PHP" | "USD" | "JPY" | "KRW";

export type RoomCategory =
  | "Superior"
  | "Deluxe"
  | "Premier"
  | "Sea View Suite"
  | "Jacuzzi Suite";

export type ViewType = "Community" | "Pool" | "Pool Access" | "Sea" | "Garden";

export interface RoomType {
  id: string;
  slug: string;
  name: string;
  category: RoomCategory;
  view: ViewType;
  size: number; // m²
  bed: "King" | "Twin" | "Queen" | "Two Queens";
  maxOccupancy: number;
  shortDesc: string;
  longDesc: string;
  baseRate: number; // PHP per night (lead-in)
  otaRate: number; // PHP per night (illustrative OTA price for "you save" math)
  amenities: string[];
  gallery: PhotoPlaceholder[];
  highlights: string[];
  // TODO: OHIP — fetch availability & rates from Oracle OPERA `GET /rtp/v1/rates`
}

export interface PhotoPlaceholder {
  label: string;
  /** Tailwind gradient class string, e.g. "from-amber-glow via-terracotta to-teal" */
  gradient: string;
  /** Optional inline illustration key */
  illustration?: IllustrationKey;
  /** Optional real photograph URL (Unsplash). When present, PhotoFrame prefers it. */
  photo?: string;
}

export type RatePlanCode = "ROOM_ONLY" | "BNB" | "FLEX" | "NRF";

export interface RatePlan {
  code: RatePlanCode;
  name: string;
  tagline: string;
  /** Multiplier vs. baseRate */
  multiplier: number;
  inclusions: string[];
  cancellation: string;
  badge?: "Best Value" | "Most Flexible" | "Lowest Price";
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number; // PHP
  unit: "per stay" | "per person" | "per night" | "per booking";
  icon: AddOnIconKey;
  category: "Dining" | "Transfer" | "Wellness" | "Romance" | "Tour" | "Service";
}

export type AddOnIconKey =
  | "coffee"
  | "car"
  | "spa"
  | "rose"
  | "boat"
  | "key"
  | "tarsier"
  | "champagne";

export interface Offer {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  perks: string[];
  /** Discount percent off baseRate (display only) */
  discountPct: number;
  minNights: number;
  gradient: string;
  badge?: string;
}

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  cuisine: string;
  hours: string;
  setting: string;
  signature: string[];
  gradient: string;
  /** Optional real photograph URL */
  photo?: string;
  /** Optional secondary "signature dish" photo */
  signaturePhoto?: string;
}

export interface Review {
  id: string;
  guestName: string;
  country: string;
  rating: number; // 1-5
  date: string;
  source: "Direct" | "Booking.com" | "Agoda" | "Tripadvisor" | "Expedia";
  title: string;
  body: string;
  stayType: string;
}

export interface Experience {
  id: string;
  name: string;
  category: "Island" | "Nature" | "Culture" | "Adventure";
  durationHrs: number;
  highlights: string[];
  illustration: IllustrationKey;
  /** Real photograph (under /public). Optional — falls back to illustration. */
  photo?: string;
  /** Attribution line for CC BY-SA photos. */
  photoCredit?: string;
}

export type IllustrationKey =
  | "chocolate-hills"
  | "tarsier"
  | "bangka"
  | "balicasag"
  | "loboc-river"
  | "hinagdanan"
  | "palm"
  | "banana-leaf"
  | "capiz-window"
  | "tereza"
  | "spa"
  | "pool";

// ─────────────────────────────────────────────────────────────────────
// Booking flow

export interface SearchQuery {
  checkIn: string; // ISO yyyy-mm-dd
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  promoCode?: string;
}

export interface BookingDraft {
  query: SearchQuery | null;
  roomTypeId: string | null;
  ratePlan: RatePlanCode | null;
  addOnIds: string[];
  guest: GuestForm | null;
  payment: PaymentForm | null;
  /** confirmation code if generated */
  confirmationCode: string | null;
}

export interface GuestForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  arrivalTime: string;
  specialRequests?: string;
}

export type PaymentMethod = "card" | "gcash" | "maya" | "paypal" | "alipay";

export interface PaymentForm {
  method: PaymentMethod;
  cardNumber?: string;
  cardName?: string;
  expiry?: string;
  cvc?: string;
  /** opaque token simulating the GCash / Maya / Alipay flow */
  walletToken?: string;
}
