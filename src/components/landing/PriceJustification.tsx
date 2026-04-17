const VALUE_ITEMS = [
  "5 видеоуроков от практикующего мастера (109 минут)",
  "3 PDF-гайда и 2 чеклиста для работы вне уроков",
  "AI-диагностика по твоим фото — персонально, не усреднённо",
  "Доступ навсегда. Пересматриваешь когда нужно.",
  "Протокол на 4 недели с конкретными шагами",
] as const;

export default function PriceJustification() {
  return (
    <section className="px-5 py-6" data-section="price-justification">
      <div className="bg-cream-100 border border-cream-300 rounded-card p-5">
        {/* Eyebrow */}
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted mb-4">
          Что ты получаешь за 39 евро
        </p>

        {/* Value list */}
        <ul className="flex flex-col gap-2.5">
          {VALUE_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span
                className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                aria-hidden="true"
              />
              <span className="font-sans text-sm leading-[1.4] text-charcoal">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <hr className="my-4 border-0 h-px bg-cream-300" />

        {/* Comparison row 1: salon */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-[13px] text-charcoal-muted">
              Процедура в салоне
            </p>
            <p className="mt-0.5 font-sans text-[11px] text-charcoal-muted">
              ~120 евро, результат на 6 недель
            </p>
          </div>
          <span className="font-serif text-[22px] text-error line-through">
            120 &euro;
          </span>
        </div>

        {/* Comparison row 2: course */}
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="font-sans text-[13px] font-medium text-charcoal">
              Курс Keratin Madrid
            </p>
            <p className="mt-0.5 font-sans text-[11px] text-charcoal-light">
              Результат остаётся. Знание остаётся.
            </p>
          </div>
          <span className="font-serif text-[22px] text-sage">
            39 &euro;
          </span>
        </div>
      </div>
    </section>
  );
}
