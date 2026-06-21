# The Ivywall · Marketing Website + Direct Booking Engine

High-fidelity, runnable prototype of the **public marketing website and direct booking engine** for **Best Western Plus The Ivywall Resort-Panglao** (Panglao Island, Bohol, Philippines).

Designed to feel like one product family with the existing in-stay **guest app** at https://ivywall-app.vercel.app/ — same palette, fonts, mascot (Ivy the tarsier), and homey-traditional Boholano feel.

> **One job:** turn lookers into direct bookers and reduce dependence on OTAs (15–25% commission). The direct booking engine is the hero feature.

## Stack

- **Next.js 14 (App Router)** · **TypeScript** · **Tailwind CSS**
- **framer-motion** for motion, **lucide-react** for icons, **next/font** for typography
- **Zustand** for booking state, light React Context for i18n & currency
- i18n: lightweight dictionary system — English fully written; scaffold + sample strings for Tagalog, Mandarin, Cantonese, Japanese, Korean. Visible language switcher. `hreflang` scaffolding via `Metadata.alternates`.
- SEO: per-page `<title>`/meta, Open Graph + Twitter, **Hotel/LodgingBusiness JSON-LD** in `app/layout.tsx`.
- No real backend, payments, or secrets. All data is typed mock in `/lib/mock`.

## Run

```bash
cd ivywall-web
npm install
npm run dev          # http://localhost:3000
```

Production:

```bash
npm run build && npm start
```

Deploy on Vercel: import the directory; no env vars required for the prototype.

## File structure

```
ivywall-web/
├─ app/
│  ├─ layout.tsx               # root: fonts, providers, JSON-LD, header/footer, AskIvy
│  ├─ page.tsx                 # home
│  ├─ providers.tsx            # I18n + Currency providers
│  ├─ globals.css              # design tokens, banig/capiz/paper textures
│  ├─ rooms/                   # rooms list + [slug] detail
│  ├─ dining/                  # 3 restaurants incl. Tereza Rooftop
│  ├─ facilities/              # pools, spa, gym, kids, wifi, mice
│  ├─ offers/                  # direct-only packages
│  ├─ mice/                    # meetings & weddings + enquiry form
│  ├─ experiences/             # Bohol tour teaser → guest app
│  ├─ gallery/
│  ├─ about/                   # about + location
│  ├─ contact/
│  ├─ book/                    # 🟢 direct booking engine
│  │  ├─ page.tsx              # entry · search widget + offers
│  │  ├─ results/page.tsx      # available rooms + savings vs. OTA
│  │  ├─ room/page.tsx         # room detail + rate options
│  │  ├─ addons/page.tsx       # upsells from the marketplace
│  │  ├─ details/page.tsx      # guest form (validation)
│  │  ├─ payment/page.tsx      # mock cards + GCash + Maya + PayPal + Alipay
│  │  └─ confirmation/page.tsx # confirmation + "Continue to Guest App"
│  └─ not-found.tsx
├─ components/
│  ├─ ivy/                     # Ivy mascot SVG, AskIvy floating chat
│  ├─ ui/                      # Button, RoomCard, RateOption, AddOnCard,
│  │                           # ReviewCard, SectionDivider (banig), PhotoFrame,
│  │                           # IllustrationSpot (inline SVG art), Badge,
│  │                           # PriceTag, LanguageSwitcher, CurrencySwitcher,
│  │                           # ResortLogo
│  ├─ booking/                 # BookingWidget, BookingSummary, Stepper
│  ├─ layout/                  # Header (with sticky booking), Footer, StickyBookBar
│  └─ sections/                # Hero, Highlights, StoryBand, RoomsPreview,
│                              # DiningPreview, BestRateBand, ExperiencesTeaser,
│                              # ReviewsBand, LocationBand, CtaFooter
└─ lib/
   ├─ types.ts                 # all domain types (Room, RatePlan, AddOn, …)
   ├─ mock/                    # rooms, addOns, offers, restaurants, reviews,
   │                           # experiences, facilities
   ├─ i18n/                    # I18nProvider + dictionaries (en, tl, zh-CN,
   │                           # zh-HK, ja, ko)
   ├─ store/                   # booking (zustand) + currency context
   └─ seo/                     # JSON-LD + per-page meta helper
```

## Where to swap mock → live

Every integration seam is marked with a `TODO:` comment near the relevant mock. The key seams:

| Concern              | File                          | Seam                                                                 |
|----------------------|-------------------------------|----------------------------------------------------------------------|
| Availability / rates | `lib/mock/rooms.ts`           | `TODO: OHIP — GET /rtp/v1/availability + /rtp/v1/rates`              |
| Create reservation   | `lib/types.ts` `Reservation`  | `TODO: OHIP — POST /rsv/v1/reservations`                             |
| Rate parity          | `lib/mock/rooms.ts`           | `TODO: channel manager — enforce rate parity with OTA partners`      |
| POS (dining)         | `lib/mock/restaurants.ts`     | `TODO: POS / spa booking integration`                                |
| Payment              | `app/book/payment/page.tsx`   | `TODO: payment gateway integration (Stripe / PayMongo / DragonPay)`  |

The domain types in `lib/types.ts` were intentionally shaped so the integration swap is a data-source change, not a rewrite.

## Brand notes

- Design system (palette, fonts, banig/capiz textures) deliberately matches the **existing guest app** at https://ivywall-app.vercel.app/.
- The Ivywall, Best Western Plus, and partner logos used in this prototype are placeholders. The final build **must follow Best Western brand standards** and the resort's OTA rate-parity rules.
- Photos are placeholder gradient/illustration tiles — replace with original photography before launch.

## i18n

English is fully written. The other languages (`tl`, `zh-CN`, `zh-HK`, `ja`, `ko`) ship with sample strings for hero, nav, common, and CTAs — extend as content grows. The active language reflects in `<html lang>` via the framework defaults; further `hreflang` work happens in `app/layout.tsx` metadata.

## Currency

Switcher at the top right of the header. Stores the active currency in React context. Rates in `lib/store/currency.tsx` are **illustrative** — wire a live FX feed before production.

## Accessibility & performance

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<article>`, `<aside>`)
- Visible focus rings, sufficient contrast, labelled inputs
- `prefers-reduced-motion` respected in `globals.css`
- `next/font` for self-hosted Google Fonts (Fraunces + Plus Jakarta Sans)
- Generated static room pages via `generateStaticParams`
- Most pages are server-rendered; interactivity is opt-in via `"use client"`

## Pages cheat-sheet

| Path                       | Purpose                                                                 |
|----------------------------|-------------------------------------------------------------------------|
| `/`                        | Home — cinematic hero with booking widget; story; rooms; dining; reviews |
| `/book`                    | Booking entry — big widget + direct-only offers                        |
| `/book/results`            | Available rooms with "save vs. OTA" framing                            |
| `/book/room?room=…`        | Room detail + rate options                                             |
| `/book/addons`             | Upsells: dining, transfer, spa, romance, tours                         |
| `/book/details`            | Guest form (validated)                                                  |
| `/book/payment`            | Mock card / GCash / Maya / PayPal / Alipay checkout                    |
| `/book/confirmation`       | Confirmation + handoff to the guest app                                |
| `/rooms`, `/rooms/[slug]`  | Room category list + 5 detail pages                                    |
| `/dining`                  | Three restaurants with hours, signature dishes                         |
| `/facilities`              | Pools, spa, gym, kids, wifi, MICE                                       |
| `/offers`                  | Direct-only packages                                                    |
| `/mice`                    | Meetings & weddings + enquiry form                                      |
| `/experiences`             | Bohol tour curation + link to guest app                                |
| `/gallery`                 | Visual tour                                                              |
| `/about`                   | About + location band                                                   |
| `/contact`                 | Contact form + phone/email                                              |

## Why we built it this way

Direct bookings save the resort 15–25% in OTA commission. We pass that value back to the guest — every direct page, every CTA, every confirmation reinforces it. The site is intentionally honest about the tradeoff: real-feeling reviews, real-feeling scarcity, and a clear "you save" comparison instead of fake urgency. The booking flow is fast and built for thumbs.
