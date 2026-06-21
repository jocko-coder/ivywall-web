import { NextResponse } from "next/server";

// Create a payment intent with the gateway (PayMongo / Stripe / DragonPay).
//
// SECURITY: the gateway SECRET key lives ONLY here. The browser posts the amount +
// booking reference and receives back a client token / redirect URL — never the secret.
//
// Configure in Vercel → Project → Settings → Environment Variables:
//   PAYMENT_PROVIDER = paymongo | stripe
//   PAYMONGO_SECRET_KEY  (if PayMongo)  — or —  STRIPE_SECRET_KEY (if Stripe)
//
// Until set, returns { configured:false } and the client keeps the mock checkout.

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { amount, currency = "PHP", method = "card", bookingRef } = await req.json();
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "amount required" }, { status: 400 });
    }

    const provider = process.env.PAYMENT_PROVIDER;
    const secret = process.env.PAYMONGO_SECRET_KEY || process.env.STRIPE_SECRET_KEY;
    if (!provider || !secret) {
      return NextResponse.json({ configured: false });
    }

    // ── TODO(payment): create the intent with `secret`, return ONLY the client token ──
    // PayMongo:
    //   POST https://api.paymongo.com/v1/payment_intents
    //   headers: { Authorization: "Basic " + btoa(`${secret}:`), "Content-Type": "application/json" }
    //   body: { data: { attributes: { amount: Math.round(amount * 100), currency,
    //          payment_method_allowed: [method], capture_type: "automatic" } } }
    //   → return { configured:true, clientKey: intent.attributes.client_key, id: intent.id }
    // Stripe:
    //   POST https://api.stripe.com/v1/payment_intents  (amount in centavos)
    //   → return { configured:true, clientSecret: intent.client_secret }
    //
    // Attach bookingRef as metadata so the webhook can reconcile the OPERA reservation.
    void bookingRef;

    return NextResponse.json(
      { configured: true, error: "payment integration not implemented yet" },
      { status: 501 }
    );
  } catch (err) {
    return NextResponse.json({ error: String((err as Error)?.message ?? err) }, { status: 500 });
  }
}
