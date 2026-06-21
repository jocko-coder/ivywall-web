# Ivywall Web — Dev & Deploy

Next.js (App Router) site for **Best Western Plus The Ivywall Resort, Panglao**.
Deployed on **Vercel**, source on **GitHub**.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

Node **20** (see `.nvmrc`).

## Project map

- `app/` — routes (App Router). Booking flow under `app/book/*`.
- `app/api/` — serverless API routes (the secure backend proxy).
- `components/` — UI + sections.
- `lib/i18n/` — 6-language dictionaries (`en, tl, zh-CN, zh-HK, ja, ko`) + provider.
- `lib/store/` — zustand stores (booking draft persists to sessionStorage).
- `lib/api/booking.ts` — client wrapper for the API routes (mock fallback until configured).
- `public/` — photos, clips, Ivy mascot scripts.

## Deploy (Vercel)

1. Push this repo to GitHub (see below).
2. In Vercel → **Add New → Project → Import** the GitHub repo.
3. Framework preset: **Next.js** (auto-detected). No build settings to change.
4. Deploy. Every push to `main` auto-deploys; PRs get preview URLs.

## Backend env vars (add when the OHIP key arrives)

Vercel → Project → **Settings → Environment Variables** (server-side only — never `NEXT_PUBLIC_*`). See `.env.example`:

**OHIP / Opera (availability + rates):**
`OHIP_BASE_URL`, `OHIP_CLIENT_ID`, `OHIP_CLIENT_SECRET`, `OHIP_HOTEL_ID`, `OHIP_APP_KEY`

**Payments (pick one):**
`PAYMENT_PROVIDER` = `paymongo` | `stripe`, plus `PAYMONGO_SECRET_KEY` or `STRIPE_SECRET_KEY`

Until these exist, `app/api/availability` and `app/api/create-payment` return
`{ configured: false }` and the UI uses mock data — so the site runs fine today.
To go live: set the vars + fill the `TODO` blocks in those two route files.

## First push to GitHub

```bash
# create an empty repo at github.com/<you>/ivywall-web (no README/license)
git remote add origin git@github.com:<you>/ivywall-web.git
git branch -M main
git push -u origin main
```
