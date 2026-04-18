import { calculateDamageLevel } from "@/lib/quiz/scoring";
import type { QuizAnswers } from "@/lib/quiz/scoring";
import FlowButton from "@/components/ui/FlowButton";

interface Props {
  answers: QuizAnswers;
  onNext: () => void;
}

const LEVELS = [1, 2, 3, 4, 5] as const;

export default function ScreenQuizResult({ answers, onNext }: Props) {
  const result = calculateDamageLevel(answers);

  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px] px-5 pt-8">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted mb-5">
        Результат диагностики
      </p>

      <h2 className="font-serif font-normal text-[28px] leading-[1.25] tracking-[-0.01em] text-charcoal mb-6">
        {result.label}
      </h2>

      <div className="flex items-center gap-2 mb-2">
        {LEVELS.map((n) => (
          <div
            key={n}
            className="flex-1 h-2 rounded-full"
            style={{ background: n <= result.level ? "#7C8C6E" : "#E3DDD4" }}
          />
        ))}
      </div>
      <div className="flex justify-between mb-8">
        <span className="font-sans text-[11px] text-charcoal-muted">Минимум</span>
        <span className="font-sans text-[11px] text-charcoal-muted">Максимум</span>
      </div>

      <p className="font-sans text-[15px] leading-relaxed text-charcoal-light mb-6">
        {result.description}
      </p>

      <div className="border-l-[3px] border-sage pl-4 mb-8">
        <p className="font-sans text-[15px] font-medium text-charcoal">
          Хорошая новость: это можно исправить.
        </p>
        <p className="font-sans text-[13px] text-charcoal-light mt-1">
          Елена видела сотни похожих историй. Есть конкретный путь.
        </p>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-30"
        style={{ background: "linear-gradient(to top, #F7F4F0 80%, transparent)" }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <FlowButton onClick={onNext}>Посмотреть бесплатный урок</FlowButton>
        </div>
      </div>
    </div>
  );
}
