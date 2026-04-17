"use client";

import SourceTile from "./SourceTile";

const tiles = [
  {
    label: "Короткие видео",
    name: "TikTok и Reels",
    description:
      "Красиво снято, легко запомнить, работает как тренд. Но 60 секунд это не диагностика. Девушка с густым здоровым блондом рассказывает тебе, что ей помогло. Её волосы и твои волосы это два разных проекта.",
  },
  {
    label: "Длинные тексты",
    name: "Блоги и beauty-медиа",
    description:
      "Дают общую картину и термины: пористость, дисульфидные связи, pH. Это полезно, чтобы понять словарь. Но статья пишется для всех сразу, поэтому заканчивается словами \u00abподберите средство под ваш тип\u00bb.",
  },
  {
    label: "Универсальные AI",
    name: "ChatGPT и другие помощники",
    description:
      "Знают огромное количество информации и отвечают быстро. Они читали миллион статей, которые противоречат друг другу, и выдают тебе усреднённый ответ. Про \u00abволосы вообще\u00bb, не про твои. И они не видят твоё фото.",
  },
  {
    label: "Живой опыт",
    name: "Подруги, отзывы, форумы",
    description:
      "Единственный источник, который говорит про реальный результат, а не про маркетинг. Но работает случайно: совпал ваш тип волос и ваша проблема, попал. Не совпал, потратила деньги зря.",
  },
] as const;

export default function ChaosSection() {
  function handleCtaClick() {
    const screen4 = document.getElementById("screen-4");
    if (screen4) {
      screen4.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Go to Screen 4");
    }
  }
  return (
    <section id="screen-3" className="bg-cream-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* ── Intro block ── */}
        <div className="pt-16 md:pt-24 max-w-[900px] mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-sand shrink-0"
              aria-hidden="true"
            />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-charcoal-light">
              Шаг 2 из 3. Почему не получалось
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-serif font-normal text-[32px] leading-[1.25] md:text-[48px] md:leading-[1.2] tracking-[-0.02em] text-charcoal mb-6">
            Дело не в твоих волосах.
            <br />
            И не в том, что ты мало стараешься.
          </h2>

          {/* Intro paragraph */}
          <p className="font-sans text-lg leading-relaxed md:text-xl md:leading-[1.6] font-normal text-charcoal-light max-w-[680px] mb-12 md:mb-16">
            Ты делала всё, что советовали. Проблема в том, что советовали
            разное.
          </p>
        </div>

        {/* ── Quote vignette ── */}
        <div className="max-w-[680px] mx-auto mb-16 md:mb-24 pl-5 md:pl-8 border-l-[3px] border-sage">
          <div className="flex flex-col gap-4">
            <p className="font-serif font-normal not-italic text-[18px] md:text-[22px] leading-[1.5] text-charcoal italic">
              &laquo;У меня пористые волосы, мне нужны масла.&raquo;
            </p>
            <p className="font-serif font-normal not-italic text-[18px] md:text-[22px] leading-[1.5] text-charcoal italic">
              &laquo;У меня пористые волосы, масла мне категорически нельзя.&raquo;
            </p>
            <p className="font-serif font-normal not-italic text-[18px] md:text-[22px] leading-[1.5] text-charcoal italic">
              &laquo;Попробуй это, у меня сработало.&raquo;
            </p>
          </div>
          <p className="mt-6 font-sans text-sm font-normal text-charcoal-muted leading-[1.5]">
            Три совета за один вечер. Все про пористые волосы. Все уверенные.
          </p>
        </div>

        {/* ── Four source tiles ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {tiles.map((tile) => (
            <SourceTile key={tile.label} {...tile} />
          ))}
        </div>

        {/* ── Key insight block ── */}
        <div className="pt-16 md:pt-24 max-w-[680px] mx-auto">
          <h3 className="font-serif font-normal text-[24px] md:text-[32px] leading-[1.35] md:leading-[1.3] tracking-[-0.01em] text-charcoal mb-6">
            Ни один из этих источников не видел именно твои волосы.
          </h3>
          <p className="font-sans text-lg font-normal leading-[1.65] text-charcoal text-left">
            Каждый даёт кусочек: тренд, термин, идею, опыт. Ни один не
            собирает это в систему для тебя лично. Поэтому ты делаешь десять
            правильных шагов, которые не складываются в один путь.
          </p>
        </div>

        {/* ── CTA block ── */}
        <div className="pt-16 pb-24 md:pt-24 md:pb-32 text-center max-w-[680px] mx-auto">
          <h3 className="font-serif font-normal text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.01em] text-charcoal mb-8">
            Тогда что работает?
          </h3>

          <button
            type="button"
            onClick={handleCtaClick}
            className="
              inline-flex items-center justify-center
              w-full md:w-auto
              min-h-[48px] px-8 py-4
              bg-sage hover:bg-sage-dark active:scale-[0.98]
              text-cream-50 font-sans text-base font-medium
              rounded-[8px] border-0
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,140,110,0.4)]
              cursor-pointer
            "
          >
            Показать, как это делается по-другому
          </button>

          <p className="mt-4 font-sans text-sm font-normal text-charcoal-muted">
            Без магии. Просто другой подход.
          </p>
        </div>
      </div>
    </section>
  );
}
