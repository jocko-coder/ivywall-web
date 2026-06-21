import { NextResponse } from "next/server";

// Secure proxy to Oracle OPERA / OHIP for room availability + rates.
//
// SECURITY: OHIP credentials live ONLY here (server-side env vars) and are NEVER
// shipped to the browser. The client calls /api/availability (see lib/api/booking.ts).
//
// Configure in Vercel → Project → Settings → Environment Variables:
//   OHIP_BASE_URL, OHIP_CLIENT_ID, OHIP_CLIENT_SECRET, OHIP_HOTEL_ID, OHIP_APP_KEY
//
// Until set, returns { configured:false } and the client falls back to mock data.

export const dynamic = "force-dynamic"; // never cache availability

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const checkIn = searchParams.get("checkIn") ?? "";
    const checkOut = searchParams.get("checkOut") ?? "";
    const adults = searchParams.get("adults") ?? "2";
    const children = searchParams.get("children") ?? "0";
    const rooms = searchParams.get("rooms") ?? "1";
    const promoCode = searchParams.get("promoCode") ?? "";

    const { OHIP_BASE_URL, OHIP_CLIENT_ID, OHIP_CLIENT_SECRET, OHIP_HOTEL_ID, OHIP_APP_KEY } = process.env;

    if (!OHIP_BASE_URL || !OHIP_CLIENT_ID || !OHIP_CLIENT_SECRET || !OHIP_HOTEL_ID) {
      return NextResponse.json({ configured: false, rooms: [] });
    }

    // ── TODO(OHIP): real integration ──
    // 1) OAuth2 token (client credentials):
    //      POST `${OHIP_BASE_URL}/oauth/v1/tokens`
    //      headers: { "x-app-key": OHIP_APP_KEY, "Content-Type": "application/x-www-form-urlencoded",
    //                 Authorization: "Basic " + btoa(`${OHIP_CLIENT_ID}:${OHIP_CLIENT_SECRET}`) }
    //      body: "grant_type=client_credentials"
    // 2) Availability:
    //      GET `${OHIP_BASE_URL}/par/v1/hotels/${OHIP_HOTEL_ID}/availability`
    //          ?arrivalDate=${checkIn}&departureDate=${checkOut}&adults=${adults}
    //          &childCount=${children}&roomCount=${rooms}&promotionCode=${promoCode}
    //      headers: { Authorization: `Bearer ${token}`, "x-app-key": OHIP_APP_KEY, "x-hotelid": OHIP_HOTEL_ID }
    // 3) Map OHIP roomTypes + rate plans → the shape the client expects:
    //      { id, name, category, view, baseRate, shortDesc, highlights[], amenities[], gallery[] }
    //    (see lib/mock/rooms.ts — keep it identical so the UI needs no changes.)
    //
    // const token = await getOhipToken();
    // const data  = await fetch(availUrl, { headers }).then((r) => r.json());
    // return NextResponse.json({ configured: true, rooms: mapOhipAvailability(data) });

    return NextResponse.json(
      { configured: true, error: "OHIP integration not implemented yet", rooms: [] },
      { status: 501 }
    );
  } catch (err) {
    return NextResponse.json({ error: String((err as Error)?.message ?? err), rooms: [] }, { status: 500 });
  }
}
