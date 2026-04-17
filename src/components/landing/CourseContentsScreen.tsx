"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import MetricPill from "./MetricPill";
import LessonList from "./LessonList";
import BonusSection from "./BonusSection";
import PriceJustification from "./PriceJustification";
import { useScreenAnalytics } from "@/hooks/useScreenAnalytics";
import { COURSE_LESSONS } from "@/lib/content/course";

const METRICS = ["5 уроков", "3 PDF-гайда", "AI-диагностика"] as const;

export default function CourseContentsScreen() {
  const { trackEvent, observeOnce } = useScreenAnalytics("screen8_viewed");

  const bonusRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const lessonRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observeOnce(bonusRef.current, "bonus_section_visible");
    observeOnce(priceRef.current, "price_justification_visible");

    lessonRefs.current.forEach((el, i) => {
      const lesson = COURSE_LESSONS[i];
      if (el && lesson) {
        observeOnce(
          el,
          "lesson_card_expanded",
          { lessonSlug: lesson.slug, lessonNumber: lesson.number },
          0.9,
        );
      }
    });
  }, [observeOnce]);

  return (
    <div className="min-h-screen bg-cream-50 pb-[110px]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-cream-200 bg-cream-50 px-5">
        <span className="font-serif text-lg tracking-[0.1em] text-charcoal">
          KM
        </span>
        <Link
          href="/lesson/intro-hair-recovery"
          className="font-sans text-[13px] text-sage hover:text-sage-dark transition-colors duration-200"
        >
          &larr; Назад
        </Link>
      </header>

      {/* ── Hero heading ── */}
      <section className="px-5 pt-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-2">
          Полный курс
        </p>
        <h1 className="font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.01em] text-charcoal mb-3 md:text-[34px]">
          Пять уроков. Реальная система.
        </h1>
        <p className="font-sans text-[15px] leading-[1.6] text-charcoal-light mb-6">
          Не просто видео. Каждый урок это пошаговый протокол с инструкцией что,
          как и в каком порядке делать.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {METRICS.map((text) => (
            <MetricPill key={text} text={text} />
          ))}
        </div>
      </section>

      {/* ── Lesson list ── */}
      <div ref={(el) => { lessonRefs.current[0] = el; }}>
        <LessonList />
      </div>

      {/* ── Bonuses ── */}
      <div ref={bonusRef}>
        <BonusSection />
      </div>

      {/* ── Price justification ── */}
      <div ref={priceRef}>
        <PriceJustification />
      </div>

      {/* ── Sticky CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-5 pt-3.5"
        style={{
          paddingBottom: "max(24px, env(safe-area-inset-bottom))",
          background: "linear-gradient(to top, #F7F4F0 70%, transparent)",
        }}
      >
        <Link
          href="/screen-9"
          onClick={() => trackEvent("course_contents_cta_clicked")}
          className="flex w-full items-center justify-center rounded-lg bg-sage px-5 py-[15px] font-sans text-base font-medium text-cream-50 min-h-[52px] transition-all duration-200 hover:bg-sage-dark active:scale-[0.98]"
        >
          Сколько это стоит?
        </Link>
        <p className="mt-[7px] text-center font-sans text-xs text-charcoal-muted">
          39 евро. Один раз. Доступ навсегда.
        </p>
      </div>
    </div>
  );
}
