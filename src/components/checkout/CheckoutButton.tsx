"use client";

import { useState } from "react";
import Toast from "@/components/ui/Toast";
import { useCheckoutButtonAnalytics } from "@/hooks/useCheckoutAnalytics";

const CARD_LABELS = ["Visa", "Mastercard", "Amex", "Apple Pay"] as const;

type CheckoutApiResponse = { url: string; sessionId: string };

export default function CheckoutButton() {
  const { trackInitiated, trackSuccess, trackError } = useCheckoutButtonAnalytics();
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  async function handleClick() {
    if (loading) return;
    trackInitiated();
    setLoading(true);
    try {
      const res = await fetch("/api/checkout/create-session", { method: "POST" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { url, sessionId } = (await res.json()) as CheckoutApiResponse;
      trackSuccess(sessionId);
      window.location.href = url;
    } catch (err) {
      const error = err instanceof Error ? err.message : "Payment error";
      trackError(error);
      setLoading(false);
      setToastVisible(true);
    }
  }

  return (
    <>
      <Toast
        visible={toastVisible}
        message="Не удалось перейти к оплате. Попробуй ещё раз."
        onDismiss={() => setToastVisible(false)}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{ background: "linear-gradient(to top, #F7F4F0 80%, transparent)" }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <button
            type="button"
            onClick={handleClick}
            disabled={loading}
            className={[
              "w-full font-sans text-base font-medium text-cream-50 rounded-[8px] border-0",
              "py-[15px] px-5 min-h-[56px]",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,140,110,0.4)]",
              loading
                ? "bg-sage opacity-70 cursor-not-allowed"
                : "bg-sage hover:bg-sage-dark active:scale-[0.98] cursor-pointer",
            ].join(" ")}
          >
            {loading ? "Переходим к оплате..." : "Оплатить 49 €"}
          </button>

          <div className="flex items-center justify-center gap-2 mt-[10px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="#9C9590" strokeWidth="1.3" />
              <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="#9C9590" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <p className="font-sans text-xs text-charcoal-muted">
              Безопасная оплата через Stripe
            </p>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-2">
            {CARD_LABELS.map((label) => (
              <span
                key={label}
                className="font-sans font-medium bg-cream-100 border border-cream-300 rounded-[4px] px-2 py-[3px] text-charcoal-light text-[10px]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
