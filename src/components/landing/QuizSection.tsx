"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

type Q1Answer = "fine" | "medium" | "thick" | "curly";
type Q2Answer = "breakage" | "frizz" | "dryness" | "color";
type Q3Answer = "daily" | "often" | "rarely" | "never";
type Q4Answer = "masks" | "salon" | "oils" | "keratin" | "botox" | "nothing";

interface Answers {
  hairType: Q1Answer | null;
  mainProblem: Q2Answer | null;
  heatFrequency: Q3Answer | null;
  triedBefore: Q4Answer[];
}

interface QuizOption {
  id: string;
  label: string;
  sub?: string;
}

interface QuizQuestion {
  eyebrow: string;
  heading: string;
  hint: string;
  multi?: boolean;
  options: QuizOption[];
}

// ─── Questions data ────────────────────────────────────────────────────────────

const QUESTIONS: QuizQuestion[] = [
  {
    eyebrow: "Структура волос",
    heading: "Какой у тебя тип волос?",
    hint: "Выбери то, что ближе всего к твоей ситуации.",
    options: [
      { id: "fine",   label: "Тонкие и мягкие",      sub: "Быстро теряют объём, видна кожа головы" },
      { id: "medium", label: "Средние",               sub: "Не слишком тонкие и не слишком густые" },
      { id: "thick",  label: "Густые и плотные",      sub: "Сложно укладываются, долго сохнут" },
      { id: "curly",  label: "Вьющиеся или волнистые", sub: "Любой плотности" },
    ],
  },
  {
    eyebrow: "Главная проблема",
    heading: "Что беспокоит больше всего?",
    hint: "Выбери одно, самое главное прямо сейчас.",
    options: [
      { id: "breakage", label: "Ломкость и сечение",      sub: "Короткие обломанные волоски, секущиеся кончики" },
      { id: "frizz",    label: "Пушистость",              sub: "Волосы не слушаются, торчат" },
      { id: "dryness",  label: "Сухость и тусклость",     sub: "Нет блеска, ощущение соломы" },
      { id: "color",    label: "Цвет быстро вымывается",  sub: "Или выглядит мёртвым сразу после окрашивания" },
    ],
  },
  {
    eyebrow: "Температурная нагрузка",
    heading: "Как часто используешь фен, плойку или утюжок?",
    hint: "Примерно, без лишней строгости к себе.",
    options: [
      { id: "daily",  label: "Каждый день",              sub: "Или почти каждый день" },
      { id: "often",  label: "Несколько раз в неделю" },
      { id: "rarely", label: "Редко",                    sub: "По особым случаям" },
      { id: "never",  label: "Практически не использую" },
    ],
  },
  {
    eyebrow: "Предыдущий опыт",
    heading: "Что уже пробовала для восстановления?",
    hint: "Можно выбрать несколько вариантов.",
    multi: true,
    options: [
      { id: "masks",   label: "Профессиональные маски",        sub: "Kerastase, Olaplex, аптечные серии" },
      { id: "salon",   label: "Процедуры в салоне",            sub: "Ламинирование, полировка, уходовые процедуры" },
      { id: "oils",    label: "Масляные протоколы",            sub: "Масла и масляное обёртывание" },
      { id: "keratin", label: "Кератиновое выпрямление" },
      { id: "botox",   label: "Ботокс для волос или коллаген" },
      { id: "nothing", label: "Ещё ничего не пробовала" },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const INITIAL_ANSWERS: Answers = {
  hairType: null,
  mainProblem: null,
  heatFrequency: null,
  triedBefore: [],
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuizSection() {
  const router = useRouter();

  const [currentQ, setCurrentQ] = useState<1 | 2 | 3 | 4>(1);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);

  // Refs used inside callbacks to avoid stale closures
  const dirRef       = useRef<"forward" | "backward">("forward");
  const currentQRef  = useRef<1 | 2 | 3 | 4>(1);
  const answersRef   = useRef<Answers>(INITIAL_ANSWERS);
  const timerRef     = useRef<ReturnType<typeof setTimeout> | null>(null);

  currentQRef.current = currentQ;
  answersRef.current  = answers;

  // Sync URL on question change
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("q", String(currentQ));
    window.history.replaceState(null, "", url.toString());
  }, [currentQ]);

  // Cleanup pending auto-advance timer on unmount
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  // ── Navigation ──────────────────────────────────────────────────────────────

  const clearTimer = () => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
  };

  // Stable reference — uses refs internally
  const goForward = useCallback(() => {
    clearTimer();
    const q = currentQRef.current;
    if (q < 4) {
      dirRef.current = "forward";
      setCurrentQ((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    } else {
      try {
        sessionStorage.setItem("quizAnswers", JSON.stringify(answersRef.current));
      } catch { /* sessionStorage unavailable */ }
      router.push("/quiz/result");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBack = useCallback(() => {
    clearTimer();
    if (currentQRef.current > 1) {
      dirRef.current = "backward";
      setCurrentQ((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Selection handlers ──────────────────────────────────────────────────────

  function selectSingle(key: "hairType" | "mainProblem" | "heatFrequency", value: string) {
    clearTimer();
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // Auto-advance after brief selection-feedback delay
    timerRef.current = setTimeout(goForward, 400);
  }

  function toggleMulti(value: Q4Answer) {
    setAnswers((prev) => {
      const cur = prev.triedBefore;
      if (value === "nothing") {
        // "nothing" is exclusive
        return { ...prev, triedBefore: cur.includes("nothing") ? [] : ["nothing"] };
      }
      const withoutNothing = cur.filter((v) => v !== "nothing");
      return {
        ...prev,
        triedBefore: withoutNothing.includes(value)
          ? withoutNothing.filter((v) => v !== value)
          : [...withoutNothing, value],
      };
    });
  }

  function handleOptionClick(optId: string) {
    switch (currentQ) {
      case 1: return selectSingle("hairType", optId);
      case 2: return selectSingle("mainProblem", optId);
      case 3: return selectSingle("heatFrequency", optId);
      case 4: return toggleMulti(optId as Q4Answer);
    }
  }

  function isSelected(optId: string): boolean {
    switch (currentQ) {
      case 1: return answers.hairType === optId;
      case 2: return answers.mainProblem === optId;
      case 3: return answers.heatFrequency === optId;
      case 4: return answers.triedBefore.includes(optId as Q4Answer);
    }
  }

  function canAdvance(): boolean {
    switch (currentQ) {
      case 1: return answers.hairType !== null;
      case 2: return answers.mainProblem !== null;
      case 3: return answers.heatFrequency !== null;
      case 4: return answers.triedBefore.length > 0;
    }
  }


  // ── Quiz layout ─────────────────────────────────────────────────────────────

  const qData   = QUESTIONS[currentQ - 1];
  const isMulti = qData.multi === true;
  const animClass = dirRef.current === "forward" ? "slide-from-right" : "slide-from-left";

  return (
    <div className="fixed inset-0 bg-cream-50 flex flex-col overflow-hidden" id="screen-5">

      {/* ── Header ── */}
      <header className="flex-shrink-0 h-12 md:h-14 flex items-center justify-between px-6 md:px-12 lg:px-16 bg-cream-50">

        {/* Left: back button + counter */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goBack}
            aria-label="Назад"
            className={`
              flex items-center gap-1.5 px-3 py-2 rounded-md
              font-sans text-sm font-medium text-charcoal-light hover:text-charcoal
              transition-colors duration-150 cursor-pointer
              ${currentQ === 1 ? "invisible pointer-events-none" : ""}
            `}
          >
            <svg
              width="20" height="20" viewBox="0 0 20 20"
              fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12.5 15L7.5 10L12.5 5" />
            </svg>
            <span className="hidden md:inline">Назад</span>
          </button>

          <span className="font-sans font-medium text-charcoal-muted" style={{ fontSize: "13px" }}>
            <span className="hidden md:inline">Вопрос {currentQ} из 4</span>
            <span className="md:hidden">{currentQ} / 4</span>
          </span>
        </div>

        {/* Right: exit */}
        <button
          type="button"
          aria-label="Выйти из квиза"
          onClick={() => router.push("/")}
          className="font-sans text-sm font-medium text-charcoal-muted hover:text-charcoal-light transition-colors duration-150 cursor-pointer px-3 py-2"
        >
          Выйти
        </button>
      </header>

      {/* ── Progress bar ── */}
      <div className="flex-shrink-0 h-[3px] bg-cream-200 relative" role="progressbar" aria-valuenow={currentQ} aria-valuemin={1} aria-valuemax={4}>
        <div
          className="absolute inset-y-0 left-0 bg-sage"
          style={{
            width: `${(currentQ / 4) * 100}%`,
            transition: "width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* ── Content viewport ── */}
      <main className="flex-grow overflow-y-auto">
        <div className="max-w-[640px] mx-auto px-6 py-8 md:py-12 md:flex md:flex-col md:justify-center" style={{ minHeight: "100%" }}>

          {/* Animated wrapper — key change triggers CSS animation remount */}
          <div key={currentQ} className={animClass}>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sand shrink-0" aria-hidden="true" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-charcoal-light">
                {qData.eyebrow}
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-serif font-normal text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.02em] text-charcoal mb-3">
              {qData.heading}
            </h2>

            {/* Hint */}
            <p className="font-sans text-base font-normal leading-[1.6] text-charcoal-light max-w-[560px] mb-8 md:mb-10">
              {qData.hint}
            </p>

            {/* Options */}
            <div
              className="flex flex-col gap-3"
              role={isMulti ? "group" : "radiogroup"}
              aria-label={qData.heading}
            >
              {qData.options.map((opt) => {
                const selected = isSelected(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role={isMulti ? "checkbox" : "radio"}
                    aria-checked={selected}
                    onClick={() => handleOptionClick(opt.id)}
                    className={[
                      "quiz-option-card",
                      "flex items-center gap-4 w-full text-left",
                      "min-h-[72px] md:min-h-[64px] p-5 rounded-xl border",
                      "transition-all duration-200 cursor-pointer",
                      selected
                        ? "quiz-option-selected bg-cream-100 border-sage"
                        : "bg-cream-100 border-cream-300",
                    ].join(" ")}
                  >
                    {/* Indicator */}
                    {isMulti ? (
                      /* Checkbox */
                      <div
                        aria-hidden="true"
                        className={`w-5 h-5 rounded-[4px] border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          selected ? "border-sage bg-sage" : "border-charcoal-muted"
                        }`}
                      >
                        {selected && (
                          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                            <path
                              d="M1 4.5L4 7.5L11 1.5"
                              stroke="#F7F4F0"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    ) : (
                      /* Radio */
                      <div
                        aria-hidden="true"
                        className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          selected ? "border-sage bg-sage" : "border-charcoal-muted"
                        }`}
                      >
                        {selected && (
                          <div className="w-1.5 h-1.5 rounded-full bg-cream-50" />
                        )}
                      </div>
                    )}

                    {/* Label + sub */}
                    <div className="flex flex-col gap-0.5">
                      <span
                        className={`font-sans text-base leading-[1.5] ${
                          selected ? "font-medium text-charcoal" : "font-normal text-charcoal"
                        }`}
                      >
                        {opt.label}
                      </span>
                      {opt.sub && (
                        <span className="font-sans text-sm font-normal leading-[1.4] text-charcoal-muted">
                          {opt.sub}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer CTA ── */}
      <footer className="flex-shrink-0 px-6 md:px-12 lg:px-16 py-4 md:py-5 bg-cream-50 border-t border-cream-300">
        <div className="max-w-[640px] mx-auto">
          <button
            type="button"
            onClick={goForward}
            disabled={!canAdvance()}
            className="
              w-full md:w-auto
              inline-flex items-center justify-center
              min-h-[48px] px-8 py-4
              bg-sage hover:bg-sage-dark active:scale-[0.98]
              disabled:opacity-40 disabled:cursor-not-allowed
              text-cream-50 font-sans text-base font-medium
              rounded-[8px] border-0
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,140,110,0.4)]
              cursor-pointer
            "
          >
            {currentQ === 4 ? "Показать результат" : "Продолжить"}
          </button>
        </div>
      </footer>

    </div>
  );
}
