"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ScenarioCard from "./ScenarioCard";
import SavingsCalculator from "./SavingsCalculator";
import TestimonialsSection from "./TestimonialsSection";
import { useScreenAnalytics } from "@/hooks/useScreenAnalytics";
import { TESTIMONIALS } from "@/lib/content/testimonials";

const SCENARIOS = [
  {
    key: "no_salon",
    title: "Нет возможности ходить в салон",
    text: "Времени нет, далеко, дорого или просто не хочется зависеть. Курс сделан для домашнего ухода: всё, что можно купить в обычной аптеке или онлайн, и сделать самой.",
  },
  {
    key: "between_procedures",
    title: "Хожу в салон, но между процедурами всё возвращается",
    text: "Это самая частая история. Результат есть только пока ты у мастера. Потому что дома нет системы. Курс закрывает именно этот промежуток.",
  },
  {
    key: "want_to_understand",
    title: "Хочу разобраться, а не просто купить ещё одно средство",
    text: "Ты уже потратила деньги на маски, которые не помогли. Потому что выбирала без понимания своего типа повреждения. Курс начинается с диагностики, а не с продаж.",
  },
] as const;

export default function ProofScreen() {
  const { trackEvent, observeOnce } = useScreenAnalytics("screen9_viewed");

  const scenarioRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    SCENARIOS.forEach((s, i) => {
      const el = scenarioRefs.current[i];
      if (el) {
        observeOnce(el, "scenario_card_focused", { scenario: s.key });
      }
    });
    TESTIMONIALS.forEach((t, i) => {
      const el = testimonialRefs.current[i];
      if (el) {
        observeOnce(el, "testimonial_visible", { testimonialId: t.id });
      }
    });
  }, [observeOnce]);

  return (
    <div className="min-h-screen bg-cream-50 pb-[110px]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-cream-200 bg-cream-50 px-5">
        <span className="font-serif text-lg tracking-[0.1em] text-charcoal">
          KM
        </span>
        <Link
          href="/offer"
          className="font-sans text-[13px] text-sage hover:text-sage-dark transition-colors duration-200"
        >
          &larr; Назад
        </Link>
      </header>

      {/* Scenarios */}
      <section className="px-5 pt-6 pb-2">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-4">
          Это твоё, если...
        </p>
        <div className="flex flex-col gap-3">
          {SCENARIOS.map((s, i) => (
            <div key={s.key} ref={(el) => { scenarioRefs.current[i] = el; }}>
              <ScenarioCard title={s.title} text={s.text} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* Kerastase positioning */}
      <KerastaseSection />

      {/* Calculator */}
      <section className="px-5 pb-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-4">
          Посчитай сама
        </p>
        <SavingsCalculator
          onFirstInteraction={(sessions, savings) =>
            trackEvent("calculator_interacted", { sessions, savings })
          }
        />
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-5 pt-3.5"
        style={{
          paddingBottom: "max(24px, env(safe-area-inset-bottom))",
          background: "linear-gradient(to top, #F7F4F0 70%, transparent)",
        }}
      >
        <Link
          href="/checkout"
          onClick={() => trackEvent("proof_cta_clicked")}
          className="flex w-full items-center justify-center rounded-lg bg-sage px-5 py-[15px] font-sans text-base font-medium text-cream-50 min-h-[52px] transition-all duration-200 hover:bg-sage-dark active:scale-[0.98]"
        >
          Начать восстановление
        </Link>
        <p className="mt-[7px] text-center font-sans text-xs text-charcoal-muted">
          39 евро. Доступ навсегда. Возврат в течение 14 дней.
        </p>
      </div>
    </div>
  );
}

/* ── Kerastase positioning (extracted to stay under 120 lines) ── */

function KerastaseSection() {
  return (
    <section className="px-5 py-6">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-3.5">
        Хорошие средства работают
      </p>

      <p className="font-sans text-sm leading-[1.65] text-charcoal-light mb-3">
        K&eacute;rastase делает хорошие средства. Olaplex тоже. Но они продают
        тебе продукты, а не понимание.
      </p>

      <p className="font-sans text-sm leading-[1.65] text-charcoal-light mb-3">
        Ты покупаешь маску за 65 евро. Наносишь. Не знаешь: подходит ли она
        твоему типу повреждения? Правильно ли ты её держишь? Нужна ли тебе
        вообще маска, или в твоём случае важнее низкомолекулярный белок?
      </p>

      <div className="border-l-[3px] border-sage pl-3.5">
        <p className="font-sans text-sm leading-[1.65] text-charcoal">
          Мы не конкуренты K&eacute;rastase. Мы то, что подсказывает тебе,
          какие средства покупать и как ими пользоваться. С правильной системой
          даже K&eacute;rastase работает в три раза лучше. Потому что
          используется правильно.
        </p>
      </div>

      <p className="mt-4 font-sans text-sm font-medium text-charcoal">
        Хорошие средства работают. Если ты знаешь, какие именно тебе нужны.
      </p>
    </section>
  );
}
