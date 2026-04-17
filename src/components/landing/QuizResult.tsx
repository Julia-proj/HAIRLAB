"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";

type BezierTuple = [number, number, number, number];
const EASE: BezierTuple = [0.4, 0, 0.2, 1];

// ─── Types ────────────────────────────────────────────────────────────────────

interface StoredAnswers {
  hairType: string | null;
  mainProblem: string | null;
  heatFrequency: string | null;
  triedBefore: string[];
}

interface ResultData {
  damageLevel: number;     // 1-5
  diagnosis: string;
  diagnosticText: string;
  goodNews: string;
  signs: string[];
}

// ─── Result computation ────────────────────────────────────────────────────────

function computeResult(answers: StoredAnswers | null): ResultData {
  if (!answers) return FALLBACK_RESULT;

  let level = 2;

  // Heat frequency adds damage
  if (answers.heatFrequency === "daily") level += 2;
  else if (answers.heatFrequency === "often") level += 1;

  // Problem type
  if (answers.mainProblem === "breakage") level += 1;
  else if (answers.mainProblem === "color") level += 1;

  // Tried many things = chronic issue
  const tried = answers.triedBefore.filter((v) => v !== "nothing");
  if (tried.length >= 3) level += 1;

  level = Math.min(5, Math.max(1, level));

  if (level <= 2) return LIGHT_RESULT;
  if (level <= 3) return MODERATE_RESULT;
  return HEAVY_RESULT;
}

// ─── Result presets ───────────────────────────────────────────────────────────

const LIGHT_RESULT: ResultData = {
  damageLevel: 2,
  diagnosis: "Начальное повреждение",
  diagnosticText:
    "Твои волосы справляются лучше, чем кажется. Есть признаки лёгкой механической или термической нагрузки, но структура пока держится. Это лучший момент для работы: проще поддерживать, чем восстанавливать. Одна правильная рутина на пару месяцев даст заметный результат.",
  goodNews:
    "На этом уровне волосы реагируют быстро. Правильный уход без сложных процедур даёт результат уже через 3-4 недели.",
  signs: ["Лёгкая пористость", "Термическая нёгрузка", "Потеря блеска"],
};

const MODERATE_RESULT: ResultData = {
  damageLevel: 3,
  diagnosis: "Умеренное повреждение",
  diagnosticText:
    "У тебя смешанный тип повреждения: термическое и механическое, с признаками нарушенной пористости. Это классический сценарий для волос, которые регулярно красят и укладывают. Волос теряет влагу быстрее, чем успевает восстановиться. Именно поэтому маски дают эффект на один день, а потом всё возвращается.",
  goodNews:
    "Умеренное повреждение хорошо поддаётся восстановлению при правильном протоколе. Не нужно стричь всё и начинать заново. Нужна последовательность, а не набор дорогих средств.",
  signs: ["Высокая пористость", "Ломкость кончиков", "Термическое повреждение", "Потеря влаги", "Тусклость"],
};

const HEAVY_RESULT: ResultData = {
  damageLevel: 5,
  diagnosis: "Накопленное повреждение",
  diagnosticText:
    "Несколько видов повреждения накладываются друг на друга: термическое, механическое и, скорее всего, химическое. Структура волоса изменена достаточно глубоко, поэтому универсальные средства не работают. Каждый волос реагирует по-разному, отсюда ощущение непредсказуемости. Это поправимо, но требует системного подхода, а не точечных решений.",
  goodNews:
    "Даже сильное накопленное повреждение поддаётся коррекции. Главное не бороться с волосом, а работать с его текущим состоянием. Начинать с малого эффективнее, чем с радикальных процедур.",
  signs: ["Сверхвысокая пористость", "Ломкость по всей длине", "Термическое повреждение", "Химическое повреждение", "Потеря белка", "Нестабильная структура"],
};

const FALLBACK_RESULT = MODERATE_RESULT;

// ─── Animation config ─────────────────────────────────────────────────────────

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: EASE },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuizResult() {
  const router = useRouter();
  const [result, setResult] = useState<ResultData>(FALLBACK_RESULT);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("quizAnswers");
      const answers: StoredAnswers | null = raw ? JSON.parse(raw) : null;
      const computed = computeResult(answers);
      setResult(computed);
      // Persist result for downstream screens
      sessionStorage.setItem(
        "km_quiz_result",
        JSON.stringify({ damageLevel: computed.damageLevel, diagnosis: computed.diagnosis })
      );
    } catch {
      setResult(FALLBACK_RESULT);
    }
  }, []);

  const filledCount = result.damageLevel;

  return (
    <div className="relative bg-cream-50 min-h-screen">

      {/* ── Scrollable content ── */}
      <div
        className="max-w-[390px] mx-auto px-5 pt-6"
        style={{ paddingBottom: "148px" }} // space for sticky CTA
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >

          {/* 1. Progress bar — fully filled */}
          <motion.div variants={item} className="mb-6">
            <div
              className="w-full rounded-full"
              style={{ height: "4px", background: "#7C8C6E" }}
            />
          </motion.div>

          {/* 2. Eyebrow */}
          <motion.p
            variants={item}
            className="font-sans font-medium uppercase text-charcoal-muted mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            Результат диагностики
          </motion.p>

          {/* 3. Heading */}
          <motion.h2
            variants={item}
            className="font-serif font-normal text-[28px] leading-[1.2] tracking-[-0.02em] text-charcoal mb-6"
          >
            Вот что происходит с твоими волосами
          </motion.h2>

          {/* 4. Damage scale */}
          <motion.div variants={item} className="mb-5">
            <div className="flex mb-2" style={{ gap: "6px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full"
                  style={{
                    height: "8px",
                    background: i < filledCount ? "#7C8C6E" : "#E3DDD4",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between">
              <span
                className="font-sans text-charcoal-muted"
                style={{ fontSize: "11px" }}
              >
                Лёгкое
              </span>
              <span
                className="font-sans text-charcoal-muted"
                style={{ fontSize: "11px" }}
              >
                Сильное
              </span>
            </div>
          </motion.div>

          {/* 5. Level badge */}
          <motion.div variants={item} className="mb-5">
            <span
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border font-sans text-sm"
              style={{
                background: "#EDE8E1",
                borderColor: "#D8D2CB",
                color: "#6B6560",
              }}
            >
              Диагноз:&nbsp;
              <span className="font-semibold" style={{ color: "#2C2825" }}>
                {result.diagnosis}
              </span>
            </span>
          </motion.div>

          {/* 6. Diagnostic text */}
          <motion.p
            variants={item}
            className="font-sans font-normal text-charcoal mb-5"
            style={{ fontSize: "15px", lineHeight: "1.65" }}
          >
            {result.diagnosticText}
          </motion.p>

          {/* 7. Good news block */}
          <motion.div
            variants={item}
            className="mb-5 py-4 pr-4 rounded-r-lg"
            style={{
              paddingLeft: "16px",
              borderLeft: "3px solid #7C8C6E",
              background: "#EDE8E1",
            }}
          >
            <p
              className="font-sans font-medium uppercase text-sage mb-1.5"
              style={{ fontSize: "11px", letterSpacing: "0.08em" }}
            >
              Хорошая новость
            </p>
            <p
              className="font-sans font-normal text-charcoal"
              style={{ fontSize: "14px", lineHeight: "1.6" }}
            >
              {result.goodNews}
            </p>
          </motion.div>

          {/* 8. Sign tags */}
          <motion.div variants={item} className="flex flex-wrap" style={{ gap: "8px" }}>
            {result.signs.map((sign) => (
              <span
                key={sign}
                className="inline-flex items-center px-3 py-1.5 rounded-full border font-sans font-normal text-charcoal-light"
                style={{
                  background: "#EDE8E1",
                  borderColor: "#D8D2CB",
                  fontSize: "12px",
                }}
              >
                {sign}
              </span>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ── Sticky CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
        {/* Gradient fade */}
        <div
          style={{
            height: "40px",
            background: "linear-gradient(to bottom, transparent, #F7F4F0)",
          }}
        />
        {/* Button area */}
        <div
          className="bg-cream-50 pointer-events-auto"
          style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "32px", paddingTop: "8px" }}
        >
          <div className="max-w-[390px] mx-auto">
            <button
              type="button"
              onClick={() => router.push("/lesson/intro-hair-recovery")}
              className="
                w-full inline-flex items-center justify-center
                bg-sage hover:bg-sage-dark active:scale-[0.98]
                text-cream-50 font-sans text-base font-medium
                rounded-[8px] border-0
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,140,110,0.4)]
                cursor-pointer
              "
              style={{ minHeight: "52px" }}
            >
              Посмотреть бесплатный урок
            </button>
            <p
              className="mt-2 font-sans font-normal text-charcoal-muted text-center"
              style={{ fontSize: "12px" }}
            >
              Бесплатно. Без регистрации.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
