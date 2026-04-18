import FlowButton from "@/components/ui/FlowButton";

const COMPARISON = [
  {
    title: "Интернет",
    desc: "Объясняет теорию. Рассказывает, как устроен волос, что такое pH и пористость. Ты становишься грамотнее.",
    accent: false,
  },
  {
    title: "AI",
    desc: "Обрабатывает быстро. Читает миллион статей за секунду, даёт усреднённый ответ. Ты получаешь направление.",
    accent: false,
  },
  {
    title: "Мастер",
    desc: "Видел много. Знает, что при такой пористости на 8-м уровне осветления масло даст утяжеление через неделю. Ты получаешь ответ про свою ситуацию.",
    accent: true,
  },
] satisfies { title: string; desc: string; accent: boolean }[];

interface Props {
  onNext: () => void;
}

export default function ScreenExpert({ onNext }: Props) {
  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px]">
      <div className="px-5 pt-8 pb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-sand shrink-0" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-light">
            Шаг 3 из 3. Другой подход
          </span>
        </div>
        <h2 className="font-serif font-normal text-[30px] leading-[1.25] tracking-[-0.02em] text-charcoal mb-6">
          Знакомься. Это Елена.
          <br />
          Она видела 5000 голов до твоей.
        </h2>

        <div
          className="w-full aspect-[3/2] rounded-[12px] flex flex-col items-center justify-center mb-6"
          style={{
            background: "linear-gradient(135deg, #E8E0D6 0%, #D4CBBC 50%, #E0D4C8 100%)",
          }}
        >
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted">
            Фото Елены
          </span>
        </div>

        <div className="flex items-center gap-6 mb-6">
          <div>
            <p className="font-serif text-[28px] leading-[1] text-charcoal">6 лет</p>
            <p className="font-sans text-[12px] text-charcoal-muted">практики</p>
          </div>
          <div className="h-8 w-px bg-cream-300" aria-hidden="true" />
          <div>
            <p className="font-serif text-[28px] leading-[1] text-charcoal">5000+</p>
            <p className="font-sans text-[12px] text-charcoal-muted">клиенток</p>
          </div>
          <div className="h-8 w-px bg-cream-300" aria-hidden="true" />
          <div>
            <p className="font-serif text-[28px] leading-[1] text-charcoal">Мадрид</p>
            <p className="font-sans text-[12px] text-charcoal-muted">студия</p>
          </div>
        </div>

        <blockquote className="border-l-[3px] border-sage pl-4 mb-7 not-italic">
          <p className="font-serif text-[17px] leading-[1.5] text-charcoal italic">
            &laquo;У меня нет уникальной методики. У меня есть 5000 случаев, когда я видела,
            что работает и что не работает. Этого достаточно.&raquo;
          </p>
        </blockquote>

        <div className="flex flex-col gap-0">
          {COMPARISON.map((c) => (
            <div
              key={c.title}
              className={`border-t pt-4 pb-4 ${c.accent ? "border-t-2 border-sage" : "border-cream-300"}`}
            >
              <p className="font-serif text-[18px] text-charcoal mb-1">{c.title}</p>
              <p className="font-sans text-[13px] leading-relaxed text-charcoal-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-30"
        style={{ background: "linear-gradient(to top, #F7F4F0 80%, transparent)" }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <FlowButton onClick={onNext}>Хочу проверить свои волосы</FlowButton>
        </div>
      </div>
    </div>
  );
}
