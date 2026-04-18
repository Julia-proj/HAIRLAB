import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST() {
  // Dynamic import so the Stripe SDK is never loaded at build time
  const { default: Stripe } = await import("stripe");
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 500 }
    );
  }
  const stripe = new Stripe(key);
  const session = await auth();

  try {
    const stripeSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 3900,
            product_data: {
              name: "Keratin Madrid — Hair Recovery System",
              description: "5 видеоуроков + AI-диагностика + PDF-гайды",
            },
          },
          quantity: 1,
        },
      ],
      customer_email: session?.user?.email ?? undefined,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
      metadata: {
        productSlug: "home-recovery-course",
        userId: session?.user?.id ?? "anonymous",
      },
      payment_intent_data: {
        metadata: {
          productSlug: "home-recovery-course",
          userId: session?.user?.id ?? "anonymous",
        },
      },
    });

    if (!stripeSession.url) {
      return NextResponse.json(
        { error: "No checkout URL returned" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: stripeSession.url,
      sessionId: stripeSession.id,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Stripe error";
    console.error("[checkout/create-session]", message);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
