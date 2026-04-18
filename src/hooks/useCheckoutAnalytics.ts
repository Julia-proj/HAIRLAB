"use client";

import { useEffect, useCallback } from "react";

type PostHog = { capture: (event: string, props?: Record<string, unknown>) => void };

function getPostHog(): PostHog | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { posthog?: PostHog }).posthog;
}

/** Fire `screen10_viewed` on mount. Call inside CheckoutScreen. */
export function useCheckoutScreenAnalytics() {
  useEffect(() => {
    getPostHog()?.capture("screen10_viewed");
  }, []);
}

/** Return action-level analytics callbacks. Call inside CheckoutButton. */
export function useCheckoutButtonAnalytics() {
  const trackInitiated = useCallback(() => {
    getPostHog()?.capture("checkout_initiated", { price: 49, currency: "eur" });
  }, []);

  const trackSuccess = useCallback((stripeSessionId: string) => {
    getPostHog()?.capture("checkout_redirect_success", { stripeSessionId });
  }, []);

  const trackError = useCallback((error: string) => {
    getPostHog()?.capture("checkout_error", { error });
  }, []);

  return { trackInitiated, trackSuccess, trackError };
}
