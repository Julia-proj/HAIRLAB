import FlowButton from "@/components/ui/FlowButton";

const SOURCES = [
  {
    label: "TikTok и Reels",
    desc: "Красиво снято, но 60 секунд — это не диагностика. Её волосы и твои волосы — два разных проекта.",
  },
  {
    label: "Блоги и медиа",
    desc: "Дают теорию и термины. Заканчивается словами: подберите средство под ваш тип.",
  },
  {
    label: "ChatGPT",
    desc: "Читал миллион статей, которые противоречат друг другу. Выдаёт усреднённый ответ про волосы вообще, не про твои.",
  },
  {
    label: "Подруги и форумы",
    desc: "Реальный опыт, но работает случайно. Совпал ваш тип волос и проблема — попал. Не совпал — потратила деньги.",
  },
] as const;

interface Props {
  onNext: () => void;
}

export default function ScreenChaos({ onNext }: Props) {
  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px]">
      <div className="px-5 pt-8 pb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-sand shrink-0" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-light">
            Шаг 2 из 3. Почему не получалось
          </span>
        </div>
        <h2 className="font-serif font-normal text-[30px] leading-[1.25] tracking-[-0.02em] text-charcoal mb-4">
          Дело не в твоих волосах.
          <br />
          И не в том, что ты мало стараешься.
        </h2>
        <p className="font-sans text-[15px] leading-relaxed text-charcoal-light mb-6">
          Ты делала всё, что советовали. Проблема в том, что советовали разное.
        </p>

        <div className="border-l-[3px] border-sage pl-4 mb-6">
          <p className="font-serif text-[16px] leading-[1.6] text-charcoal italic">
            &laquo;У меня пористые волосы, мне нужны масла.&raquo;
          </p>
          <p className="font-serif text-[16px] leading-[1.6] text-charcoal italic">
            &laquo;У меня пористые волосы, масла мне нельзя.&raquo;
          </p>
          <p className="font-serif text-[16px] leading-[1.6] text-charcoal italic">
            &laquo;Попробуй это, у меня сработало.&raquo;
          </p>
          <p className="font-sans text-[12px] text-charcoal-muted mt-3">
            Три совета за один вечер. Все уверенные.
          </p>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-3 mb-6">
        {SOURCES.map((s) => (
          <div
            key={s.label}
            className="source-tile border border-cream-200 rounded-[10px] p-4 transition-all duration-200"
          >
            <p className="font-sans text-[13px] font-medium text-charcoal mb-1">{s.label}</p>
            <p className="font-sans text-[13px] leading-relaxed text-charcoal-light">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="px-5">
        <p className="font-sans text-[14px] leading-relaxed text-charcoal">
          Ни один из этих источников не видел именно твои волосы.
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
          <FlowButton onClick={onNext}>Тогда что работает?</FlowButton>
        </div>
      </div>
    </div>
  );
}
