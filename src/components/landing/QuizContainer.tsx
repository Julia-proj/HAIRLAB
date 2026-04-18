"use client";

import { useState, useRef, useCallback } from "react";
import { QUIZ_QUESTIONS } from "@/lib/quiz/questions";
import type { QuizAnswers } from "@/lib/quiz/scoring";

interface Props {
  onComplete: (answers: QuizAnswers) => void;
}

export default function QuizContainer({ onComplete }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [animKey, setAnimKey] = useState(0);
  const dirRef = useRef<"forward" | "backward">("forward");

  const question = QUIZ_QUESTIONS[currentQ];
  const total = QUIZ_QUESTIONS.length;

  const handleSelect = useCallback(
    (value: string) => {
      const newAnswers = { ...answers, [question.id]: value };
      setAnswers(newAnswers);

      if (currentQ < total - 1) {
        setTimeout(() => {
          dirRef.current = "forward";
          setAnimKey((k) => k + 1);
          setCurrentQ((q) => q + 1);
        }, 300);
      } else {
        setTimeout(() => onComplete(newAnswers), 300);
      }
    },
    [answers, question.id, currentQ, total, onComplete]
  );

  const animClass = dirRef.current === "forward" ? "slide-from-right" : "slide-from-left";

  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 flex flex-col">
      <div className="px-5 pt-6 pb-4 shrink-0">
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans text-[12px] font-medium text-charcoal-muted">
            Вопрос {currentQ + 1} из {total}
          </span>
        </div>
        <div className="h-[2px] bg-cream-200 rounded-full">
          <div
            className="h-full bg-sage rounded-full transition-all duration-300"
            style={{ width: `${((currentQ + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <div key={animKey} className={`flex-1 px-5 pt-4 pb-8 flex flex-col ${animClass}`}>
        <h2 className="font-serif font-normal text-[26px] leading-[1.3] tracking-[-0.01em] text-charcoal mb-8">
          {question.text}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((opt) => {
            const selected = answers[question.id] === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSelect(opt.value)}
                className={[
                  "quiz-option-card w-full text-left px-5 py-4 rounded-[10px] border font-sans text-[15px] font-medium transition-all duration-150 min-h-[56px]",
                  selected
                    ? "quiz-option-selected border-sage bg-sage text-cream-50"
                    : "border-cream-300 bg-cream-100 text-charcoal",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
