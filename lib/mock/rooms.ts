import type { RoomType, RatePlan } from "../types";

// TODO: OHIP — replace with `GET /rtp/v1/availability` + `GET /rtp/v1/rates` from Oracle OPERA
// TODO: channel manager — enforce rate parity with OTA partners
//
// Source: 80 rooms across four categories — Superior, Deluxe, Premier, Family —
// per the resort's published positioning at bwplusivywall-panglao.com.
export const roomTypes: RoomType[] = [
  {
    id: "rt-superior",
    slug: "superior",
    name: "Superior Room",
    category: "Superior",
    view: "Community",
    size: 28,
    bed: "Queen",
    maxOccupancy: 2,
    shortDesc: "Warm, restful retreats overlooking the resort's tropical gardens.",
    longDesc:
      "Our entry category — designed around quiet, modern comfort with native Filipino touches. A queen bed, a private balcony onto the gardens, complimentary bottled water, tea and coffee, and a generous rain shower. Ideal for couples and solo travellers.",
    baseRate: 5800,
    otaRate: 7250,
    amenities: [
      "Queen bed with premium linens",
      "Private balcony · garden view",
      "Rain shower",
      "Complimentary tea, coffee & water",
      "Smart TV · cable channels",
      "In-room safe · hair dryer",
      "Air conditioning",
      "Resort-wide free Wi-Fi",
    ],
    gallery: [
      {
        label: "Superior · Twin beds",
        gradient: "from-amber-glow via-terracotta/70 to-ink",
        photo: "/photos/BWPlus_Ivywall_04_Superior_Room.jpg",
      },
      {
        label: "Resort pool",
        gradient: "from-palm-deep via-palm to-ink",
        photo: "/photos/BWPlus_Ivywall_03_Pool.jpg",
      },
      {
        label: "Facade & courtyard",
        gradient: "from-palm via-palm-deep to-ink",
        photo: "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg",
      },
    ],
    highlights: [
      "Garden view",
      "Up to 2 guests",
      "Private balcony",
    ],
  },
  {
    id: "rt-deluxe",
    slug: "deluxe",
    name: "Deluxe Room",
    category: "Deluxe",
    view: "Pool",
    size: 32,
    bed: "King",
    maxOccupancy: 3,
    shortDesc: "Bright pool- and sea-view rooms with a step-out balcony.",
    longDesc:
      "Wake up to the lagoon pool and a glimpse of the Bohol Sea. King bed, larger living area, and a balcony designed for slow mornings with coffee. Native Filipino details — woven mat headboards, capiz light fixtures — give it a sense of place.",
    baseRate: 7800,
    otaRate: 9750,
    amenities: [
      "King bed with premium linens",
      "Pool & sea-view balcony",
      "Rain shower",
      "Complimentary tea, coffee & water",
      "Smart TV · cable channels",
      "Mini-bar · in-room safe",
      "Bathrobes & slippers",
      "Air conditioning · free Wi-Fi",
    ],
    gallery: [
      {
        label: "Deluxe · Sea-view balcony",
        gradient: "from-amber-warm via-amber to-terracotta",
        photo: "/photos/BWPlus_Ivywall_05_Deluxe_Room_SeaView.jpg",
      },
      {
        label: "Deluxe · Bedside detail",
        gradient: "from-amber-warm via-amber to-terracotta",
        photo: "/photos/BWPlus_Ivywall_20_Deluxe_Alt.jpg",
      },
      {
        label: "Pool · turquoise tiles",
        gradient: "from-palm-deep via-palm to-ink",
        photo: "/photos/BWPlus_Ivywall_03_Pool.jpg",
      },
    ],
    highlights: ["Pool · sea view", "Up to 3 guests", "Balcony"],
  },
  {
    id: "rt-premier",
    slug: "premier",
    name: "Premier Room",
    category: "Premier",
    view: "Pool Access",
    size: 38,
    bed: "King",
    maxOccupancy: 3,
    shortDesc: "Step straight from your terrace into the swimming pool.",
    longDesc:
      "Our flagship pool-access category. Your private terrace opens directly onto the pool — a single barefoot step from your room to the water. Generous king bed, extra-deep soaking tub, and a sunset-facing dining nook.",
    baseRate: 10500,
    otaRate: 13125,
    amenities: [
      "Direct pool-access terrace",
      "King bed with premium linens",
      "Soaking tub & rain shower",
      "Premium bath amenities",
      "Mini-bar · in-room safe",
      "Bathrobes & slippers",
      "Complimentary tea, coffee & water",
      "Air conditioning · free Wi-Fi",
    ],
    gallery: [
      {
        label: "Premier · Twin beds",
        gradient: "from-amber-warm via-amber to-terracotta",
        photo: "/photos/BWPlus_Ivywall_06_Premier_Room.jpg",
      },
      {
        label: "Pool · direct access",
        gradient: "from-palm-deep via-palm to-ink",
        photo: "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg",
      },
      {
        label: "Resort facade",
        gradient: "from-pearl-warm via-amber-warm to-amber",
        photo: "/photos/BWPlus_Ivywall_03_Pool.jpg",
      },
    ],
    highlights: ["Direct pool access", "Sunset terrace", "Up to 3 guests"],
  },
  {
    id: "rt-family",
    slug: "family",
    name: "Family Room",
    category: "Sea View Suite",
    view: "Pool",
    size: 48,
    bed: "Two Queens",
    maxOccupancy: 4,
    shortDesc: "Generous two-queen rooms for families and small groups.",
    longDesc:
      "Built around two queen beds, a wider footprint, and a quiet seating area for evenings together. Steps from the kids' playground and the lagoon pool. Same native Filipino design language as the rest of the resort, with extra space to spread out.",
    baseRate: 12500,
    otaRate: 15600,
    amenities: [
      "Two queen beds",
      "Pool-side garden view",
      "Family seating area",
      "Rain shower",
      "Complimentary tea, coffee & water",
      "Two TVs · two safes",
      "Cribs available on request",
      "Connecting room options",
    ],
    gallery: [
      {
        label: "Family · Three beds, banig art",
        gradient: "from-amber-warm via-amber-soft to-pearl-warm",
        photo: "/photos/BWPlus_Ivywall_11_Family_Room.jpg",
      },
      {
        label: "Pool side",
        gradient: "from-palm-deep via-palm to-ink",
        photo: "/photos/BWPlus_Ivywall_15_Agos_Pool_Bar.jpg",
      },
      {
        label: "Beach access",
        gradient: "from-palm via-palm-deep to-ink",
        photo: "/photos/BWPlus_Ivywall_14_Aerial_DJI0002.jpg",
      },
    ],
    highlights: ["Up to 4 guests", "Two queen beds", "Pool side"],
  },
];

export const ratePlans: RatePlan[] = [
  {
    code: "ROOM_ONLY",
    name: "Room Only",
    tagline: "Lowest direct rate, room only.",
    multiplier: 1.0,
    inclusions: ["Direct best rate", "Free Wi-Fi", "Pool & gym access"],
    cancellation: "Free cancellation up to 3 days before arrival.",
  },
  {
    code: "BNB",
    name: "Breakfast Included",
    tagline: "Tereza breakfast spread for every guest.",
    multiplier: 1.12,
    inclusions: [
      "Daily Tereza breakfast for 2",
      "Free Wi-Fi",
      "Pool & gym access",
      "Early check-in if available",
    ],
    cancellation: "Free cancellation up to 3 days before arrival.",
    badge: "Best Value",
  },
  {
    code: "FLEX",
    name: "Flexible",
    tagline: "Plans can change — book with peace of mind.",
    multiplier: 1.18,
    inclusions: [
      "Free cancellation until 6pm day of arrival",
      "Date changes without penalty",
      "Late checkout (subject to availability)",
    ],
    cancellation: "Free cancellation until 6pm on day of arrival.",
    badge: "Most Flexible",
  },
  {
    code: "NRF",
    name: "Advance Saver",
    tagline: "Save more when you commit early. Non-refundable.",
    multiplier: 0.88,
    inclusions: [
      "Lowest rate available",
      "Pre-paid in full",
      "Confirmed instantly",
    ],
    cancellation: "Non-refundable. No changes permitted.",
    badge: "Lowest Price",
  },
];
