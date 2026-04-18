import FlowButton from "@/components/ui/FlowButton";

const LESSONS = [
  "Как устроены волосы и почему разрушаются",
  "Ошибки домашнего ухода, которые убивают волосы",
  "Правильная система ежедневного ухода",
  "Домашнее восстановление — пошаговый процесс",
  "Блонд и сильно повреждённые волосы",
] as const;

const BONUSES = [
  "Гайд по подбору средств под тип повреждения",
  "Чеклист ежедневного ухода",
] as const;

interface Props {
  onNext: () => void;
}

export default function ScreenCourseContent({ onNext }: Props) {
  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px] px-5 pt-8">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted mb-4">
        Что внутри курса
      </p>
      <h2 className="font-serif font-normal text-[28px] leading-[1.25] tracking-[-0.01em] text-charcoal mb-7">
        5 уроков. Конкретные решения для конкретных ситуаций.
      </h2>

      <div className="flex flex-col mb-7">
        {LESSONS.map((lesson, i) => (
          <div key={lesson} className="flex items-start gap-4 py-4 border-b border-cream-200">
            <span className="font-sans text-[12px] font-medium text-charcoal-muted mt-[2px] shrink-0 w-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-[15px] leading-[1.5] text-charcoal">{lesson}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted mb-3">
          Бонусы
        </p>
        <div className="flex flex-col gap-2">
          {BONUSES.map((b) => (
            <div key={b} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" aria-hidden="true" />
              <span className="font-sans text-[14px] text-charcoal-light">{b}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="font-sans text-[13px] text-charcoal-muted">Доступ навсегда. Смотри в своём темпе.</p>

      <div
        className="flow-bottom-bar fixed bottom-0 left-0 right-0 z-30"
        style={{ background: "linear-gradient(to top, #F7F4F0 80%, transparent)" }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <FlowButton onClick={onNext}>Сколько это стоит?</FlowButton>
        </div>
      </div>
    </div>
  );
}
