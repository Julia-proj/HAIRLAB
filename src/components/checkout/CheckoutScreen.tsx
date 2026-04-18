"use client";

import Link from "next/link";
import IncludesList from "./IncludesList";
import CheckoutButton from "./CheckoutButton";
import { useCheckoutScreenAnalytics } from "@/hooks/useCheckoutAnalytics";

const PROOF_POINTS = [
  "Более 5000 клиенток Елены в Мадриде",
  "Курс работает при уровне повреждения 1-5",
  "Результат виден в течение первых 2-3 недель",
] as const;

export default function CheckoutScreen() {
  useCheckoutScreenAnalytics();

  return (
    <div className="bg-cream-50 min-h-screen pb-[130px]">

      {/* Fixed header — logo centered, unique to this screen */}
      <header className="fixed top-0 left-0 right-0 h-12 z-50 bg-cream-50 border-b border-cream-200 flex items-center justify-center px-5">
        <Link
          href="/screen-9"
          className="absolute left-5 font-sans text-[13px] font-medium text-sage hover:text-sage-dark transition-colors duration-150"
        >
          ← Назад
        </Link>
        <span className="font-serif text-[18px] tracking-[0.1em] text-charcoal">
          KM
        </span>
      </header>

      <div className="pt-12">

        {/* Price block */}
        <div className="px-5 pt-8 pb-7 text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-5">
            Keratin Madrid — Hair Recovery System
          </p>

          <div className="flex flex-col items-center gap-1.5">
            <div>
              <p className="font-serif text-[22px] text-charcoal-muted line-through">
                89 €
              </p>
              <p className="font-sans text-[11px] text-charcoal-muted">обычная цена</p>
            </div>

            <p className="font-serif font-normal text-[52px] leading-[1] tracking-[-0.02em] text-charcoal">
              49 €
            </p>

            <p className="font-sans text-[13px] text-charcoal-muted mt-1">
              один раз &middot; доступ навсегда
            </p>
          </div>
        </div>

        <IncludesList />

        {/* Social proof */}
        <div className="px-5 mb-6 flex flex-col gap-2">
          {PROOF_POINTS.map((text) => (
            <div key={text} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              <p className="font-sans text-[13px] text-charcoal-light">{text}</p>
            </div>
          ))}
        </div>

      </div>

      <CheckoutButton />

    </div>
  );
}
