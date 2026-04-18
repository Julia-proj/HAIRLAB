"use client";

import FlowButton from "@/components/ui/FlowButton";

const INCLUDES = [
  "5 видеоуроков по восстановлению волос",
  "Бонус: гайд по подбору средств",
  "Бонус: чеклист ежедневного ухода",
  "Доступ навсегда, без подписки",
] as const;

export default function ScreenPayment() {
  function handlePay() {
    alert("Оплата через Stripe — скоро");
  }

  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px] px-5 pt-8">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted mb-6">
        Keratin Madrid — Hair Recovery System
      </p>

      <div className="flex flex-col items-start gap-1 mb-8">
        <p className="font-serif text-[22px] text-charcoal-muted line-through">89 евро</p>
        <p className="font-sans text-[11px] text-charcoal-muted">обычная цена</p>
        <p className="font-serif font-normal text-[56px] leading-[1] tracking-[-0.02em] text-charcoal">
          49 евро
        </p>
        <p className="font-sans text-[13px] text-charcoal-muted">один раз · доступ навсегда</p>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {INCLUDES.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-sage flex items-center justify-center shrink-0">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                <path
                  d="M1 3l2 2 4-4"
                  stroke="#F7F4F0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-sans text-[14px] text-charcoal">{item}</span>
          </div>
        ))}
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-30"
        style={{ background: "linear-gradient(to top, #F7F4F0 80%, transparent)" }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <FlowButton onClick={handlePay}>Оплатить 49 евро</FlowButton>
          <div className="flex items-center justify-center gap-2 mt-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="#9C9590" strokeWidth="1.3" />
              <path
                d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6"
                stroke="#9C9590"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <p className="font-sans text-xs text-charcoal-muted">Безопасная оплата через Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
