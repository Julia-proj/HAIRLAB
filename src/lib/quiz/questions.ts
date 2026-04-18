export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: readonly QuizOption[];
}

export const QUIZ_QUESTIONS: readonly QuizQuestion[] = [
  {
    id: "q1",
    text: "Какой у тебя тип волос?",
    options: [
      { value: "natural", label: "Натуральные" },
      { value: "colored", label: "Окрашенные" },
      { value: "bleached", label: "Осветлённые" },
      { value: "damaged", label: "Сильно повреждённые" },
    ],
  },
  {
    id: "q2",
    text: "Что беспокоит больше всего?",
    options: [
      { value: "dryness", label: "Сухость" },
      { value: "breakage", label: "Ломкость и сечение" },
      { value: "tangling", label: "Путаются" },
      { value: "growth", label: "Не растут" },
    ],
  },
  {
    id: "q3",
    text: "Как часто используешь фен или утюжок?",
    options: [
      { value: "daily", label: "Каждый день" },
      { value: "few", label: "2-3 раза в неделю" },
      { value: "rare", label: "Редко" },
      { value: "never", label: "Не использую" },
    ],
  },
  {
    id: "q4",
    text: "Что уже пробовала?",
    options: [
      { value: "masks", label: "Дорогие маски и шампуни" },
      { value: "folk", label: "Народные средства" },
      { value: "salon", label: "Салонные процедуры" },
      { value: "nothing", label: "Ничего конкретного" },
    ],
  },
] as const;
