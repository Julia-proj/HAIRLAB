"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MasterSection() {
  const router = useRouter();

  function handleCtaClick() {
    router.push("/quiz");
  }

  return (
    <section id="screen-4" className="bg-cream-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">

        {/* ── 1. Intro block ── */}
        <div className="pt-16 md:pt-24 max-w-[900px] mx-auto mb-12 md:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-sand shrink-0"
              aria-hidden="true"
            />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-charcoal-light">
              Шаг 3 из 3. Другой подход
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-serif font-normal text-[32px] leading-[1.25] md:text-[48px] md:leading-[1.2] tracking-[-0.02em] text-charcoal">
            Знакомься. Это Елена.
            <br />
            Она видела 5000 голов до твоей.
          </h2>
        </div>

        {/* ── 2. Split layout: portrait + info ── */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-12 md:gap-16 items-center pb-16 md:pb-24">

          {/* Left — photo */}
          <figure className="m-0">
            <div className="w-full aspect-[4/5] rounded-[12px] overflow-hidden relative">
              <Image
                src="/images/elena.jpg"
                alt="Елена — мастер по восстановлению волос"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </figure>

          {/* Right — info */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-sand">
              Мастер курса
            </span>

            {/* Name */}
            <h3 className="font-serif font-normal text-[48px] md:text-[72px] leading-[1] tracking-[-0.02em] text-charcoal">
              Елена
            </h3>

            {/* Description */}
            <p
              className="font-sans text-lg font-normal leading-[1.65] text-charcoal-light"
              style={{ maxWidth: "540px" }}
            >
              Мастер по восстановлению волос с 2019 года. Работает в Мадриде.
              Специализация: осветлённые, кератиновые, многократно окрашенные
              волосы. К ней приходят, когда уже попробовали всё остальное.
            </p>

            {/* Three inline facts */}
            <div className="flex flex-row flex-wrap items-center gap-6 mt-2">
              <div className="flex flex-col gap-1">
                <span className="font-serif font-normal text-[32px] leading-[1] text-charcoal">
                  6 лет
                </span>
                <span className="font-sans text-[13px] font-normal leading-[1.3] text-charcoal-muted">
                  практики
                </span>
              </div>

              <div
                className="hidden md:block self-stretch w-px bg-cream-300"
                style={{ minHeight: "40px" }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1">
                <span className="font-serif font-normal text-[32px] leading-[1] text-charcoal">
                  5000+
                </span>
                <span className="font-sans text-[13px] font-normal leading-[1.3] text-charcoal-muted">
                  клиенток
                </span>
              </div>

              <div
                className="hidden md:block self-stretch w-px bg-cream-300"
                style={{ minHeight: "40px" }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1">
                <span className="font-serif font-normal text-[32px] leading-[1] text-charcoal">
                  Мадрид
                </span>
                <span className="font-sans text-[13px] font-normal leading-[1.3] text-charcoal-muted">
                  частная студия
                </span>
              </div>
            </div>

            {/* Quote */}
            <blockquote
              className="m-0 border-l-[3px] border-sage pl-6 font-serif font-normal not-italic text-[18px] md:text-[22px] leading-[1.5] text-charcoal italic"
              style={{ maxWidth: "540px" }}
            >
              &laquo;У меня нет уникальной методики. У меня есть 5000 случаев,
              когда я видела, что работает и что не работает. Этого
              достаточно.&raquo;
            </blockquote>
          </div>
        </div>

        {/* ── 3. Comparison block ── */}
        <div className="pt-16 md:pt-24 pb-16 md:pb-24 max-w-[1000px] mx-auto">
          {/* H3 heading */}
          <h3 className="font-serif font-normal text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.01em] text-charcoal text-center max-w-[720px] mx-auto mb-12">
            Интернет, AI и мастер делают разные вещи.
          </h3>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Block 1 — Internet */}
            <div className="flex flex-col gap-3 border-t border-cream-300 pt-6">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-sand">
                Источник 1
              </span>
              <p className="font-serif font-normal text-[22px] md:text-[24px] leading-[1.3] text-charcoal">
                Интернет
              </p>
              <p className="font-sans text-[15px] font-normal leading-[1.6] text-charcoal-light">
                Объясняет теорию. Рассказывает, как устроен волос, что такое pH
                и пористость. Ты становишься грамотнее.
              </p>
            </div>

            {/* Block 2 — AI */}
            <div className="flex flex-col gap-3 border-t border-cream-300 pt-6">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-sand">
                Источник 2
              </span>
              <p className="font-serif font-normal text-[22px] md:text-[24px] leading-[1.3] text-charcoal">
                AI
              </p>
              <p className="font-sans text-[15px] font-normal leading-[1.6] text-charcoal-light">
                Обрабатывает быстро. Читает миллион статей за секунду, даёт
                усреднённый ответ. Ты получаешь направление.
              </p>
            </div>

            {/* Block 3 — Master (emphasized border) */}
            <div className="flex flex-col gap-3 border-t-2 border-sage pt-6">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-sand">
                Источник 3
              </span>
              <p className="font-serif font-normal text-[22px] md:text-[24px] leading-[1.3] text-charcoal">
                Мастер
              </p>
              <p className="font-sans text-[15px] font-normal leading-[1.6] text-charcoal-light">
                Видел много. Знает, что при такой пористости на 8-м уровне
                осветления масло даст утяжеление через неделю. Ты получаешь
                ответ про твою ситуацию.
              </p>
            </div>
          </div>

          {/* Closing paragraph */}
          <p className="mt-12 font-sans text-lg font-normal leading-[1.65] text-charcoal text-left max-w-[680px]">
            Курс это попытка упаковать насмотренность Елены в пять уроков. Не
            теорию, которую ты уже читала. Не универсальные правила, которые ты
            уже слышала. Конкретные решения для конкретных ситуаций, которые
            она встречает каждый день.
          </p>
        </div>

        {/* ── 4. CTA block ── */}
        <div className="pt-16 pb-24 md:pt-24 md:pb-32 text-center max-w-[680px] mx-auto">
          <h3 className="font-serif font-normal text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.01em] text-charcoal mb-8">
            Готова проверить, что у тебя?
          </h3>

          <button
            type="button"
            onClick={handleCtaClick}
            className="
              w-full md:w-auto
              inline-flex items-center justify-center
              min-h-[48px] px-8 py-4
              bg-sage hover:bg-sage-dark active:scale-[0.98]
              text-cream-50 font-sans text-base font-medium
              rounded-[8px] border-0
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,140,110,0.4)]
              cursor-pointer
            "
          >
            Хочу проверить свои волосы
          </button>

          <p className="mt-4 font-sans text-sm font-normal text-charcoal-muted">
            4 вопроса. Пара минут. Бесплатный урок в конце.
          </p>
        </div>

      </div>
    </section>
  );
}
