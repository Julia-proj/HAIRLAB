export type QuizAnswers = Record<string, string>;

export interface DamageResult {
  level: 1 | 2 | 3 | 4 | 5;
  label: string;
  description: string;
}

const DESCRIPTIONS: Record<number, { label: string; description: string }> = {
  1: {
    label: "Уровень 1 — Минимальное повреждение",
    description:
      "Волосы в хорошем состоянии. Нужна профилактика и грамотный уход, чтобы сохранить здоровье надолго.",
  },
  2: {
    label: "Уровень 2 — Лёгкое повреждение",
    description:
      "Есть небольшие признаки стресса. Правильная система ухода даст заметный результат уже через 2-3 недели.",
  },
  3: {
    label: "Уровень 3 — Среднее повреждение",
    description:
      "Волосы устали от накопленного стресса. Системный подход поможет восстановить структуру за 4-6 недель.",
  },
  4: {
    label: "Уровень 4 — Значительное повреждение",
    description:
      "Волосы требуют серьёзного внимания. Курс поможет разобраться что именно происходит и выстроить правильный план.",
  },
  5: {
    label: "Уровень 5 — Сильное повреждение",
    description:
      "Волосы накопили серьёзный стресс. Начинать нужно с базы — именно для этого и создан этот курс.",
  },
};

const TYPE_SCORE: Record<string, number> = {
  natural: 0,
  colored: 1,
  bleached: 3,
  damaged: 4,
};
const CONCERN_SCORE: Record<string, number> = {
  dryness: 1,
  breakage: 2,
  tangling: 1,
  growth: 1,
};
const HEAT_SCORE: Record<string, number> = {
  daily: 3,
  few: 2,
  rare: 1,
  never: 0,
};
const TRIED_SCORE: Record<string, number> = {
  masks: 1,
  folk: 1,
  salon: 2,
  nothing: 0,
};

// max possible score: 4+2+3+2 = 11
export function calculateDamageLevel(answers: QuizAnswers): DamageResult {
  if (Object.keys(answers).length < 4) {
    const level: 1 | 2 | 3 | 4 | 5 = 3;
    return { level, ...DESCRIPTIONS[3] };
  }
  const score =
    (TYPE_SCORE[answers.q1] ?? 1) +
    (CONCERN_SCORE[answers.q2] ?? 1) +
    (HEAT_SCORE[answers.q3] ?? 1) +
    (TRIED_SCORE[answers.q4] ?? 1);

  const level = Math.max(1, Math.min(5, Math.ceil((score / 11) * 5))) as 1 | 2 | 3 | 4 | 5;
  return { level, ...DESCRIPTIONS[level] };
}
