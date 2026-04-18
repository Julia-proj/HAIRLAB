import FlowButton from "@/components/ui/FlowButton";

const SCENARIOS = [
  {
    title: "Нет возможности ходить в салон",
    desc: "Дорого, далеко, нет времени. Курс даёт конкретную систему домашнего ухода.",
  },
  {
    title: "Хожу в салон, но между процедурами всё уходит",
    desc: "Эффект держится неделю. Курс объясняет, что делать дома, чтобы результат сохранялся.",
  },
  {
    title: "Просто хочу разобраться",
    desc: "Наконец понять: что с волосами, почему это происходит, и что с этим делать системно.",
  },
] as const;

const TESTIMONIALS = [
  { name: "Мария, Мадрид" },
  { name: "Анна, Барселона" },
  { name: "Катя, Валенсия" },
] as const;

interface Props {
  onNext: () => void;
}

export default function ScreenProof({ onNext }: Props) {
  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px] px-5 pt-8">
      <h2 className="font-serif font-normal text-[28px] leading-[1.25] tracking-[-0.01em] text-charcoal mb-7">
        Для кого этот курс
      </h2>

      <div className="flex flex-col gap-3 mb-8">
        {SCENARIOS.map((s) => (
          <div key={s.title} className="bg-cream-100 rounded-[10px] p-5">
            <p className="font-sans text-[14px] font-medium text-charcoal mb-1">{s.title}</p>
            <p className="font-sans text-[13px] leading-relaxed text-charcoal-light">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-cream-100 rounded-[10px] p-5 mb-8">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted mb-4">
          Сравнение стоимости
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="font-sans text-[14px] text-charcoal-light">Одна процедура в салоне</span>
            <span className="font-sans text-[14px] font-medium text-charcoal">120 евро</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-sans text-[14px] text-charcoal-light">Курс из 4 процедур</span>
            <span className="font-sans text-[14px] font-medium text-charcoal">480 евро</span>
          </div>
          <div className="h-px bg-cream-300 my-1" />
          <div className="flex justify-between items-center">
            <span className="font-sans text-[14px] font-medium text-charcoal">Этот курс</span>
            <span className="font-serif text-[22px] text-sage">49 евро</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="border border-cream-200 rounded-[10px] p-4">
            <div className="h-3 bg-cream-200 rounded mb-2 w-full" />
            <div className="h-3 bg-cream-200 rounded mb-2 w-4/5" />
            <div className="h-3 bg-cream-200 rounded w-3/5" />
            <p className="font-sans text-[11px] text-charcoal-muted mt-3">{t.name}</p>
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
          <FlowButton onClick={onNext}>Начать восстановление</FlowButton>
        </div>
      </div>
    </div>
  );
}
