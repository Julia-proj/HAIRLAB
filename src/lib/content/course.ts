export type LessonFormat = "video" | "pdf" | "checklist";

export type CourseLesson = {
  number: number;
  slug: string;
  title: string;
  description: string;
  duration: string;
  formats: readonly LessonFormat[];
  isFree: boolean;
  freeLabel: string | null;
};

export type Bonus = {
  id: string;
  title: string;
  description: string;
  format: string;
};

export const COURSE_LESSONS: readonly CourseLesson[] = [
  {
    number: 1,
    slug: "hair-structure",
    title: "Структура волоса и типы повреждений",
    description:
      "Разбираемся что на самом деле происходит внутри волоса при осветлении, термоукладке и химии. После этого урока ты поймёшь почему одни средства работают на одном типе и бесполезны на другом.",
    duration: "18 мин",
    formats: ["video", "pdf"],
    isFree: true,
    freeLabel: "Ты уже видела",
  },
  {
    number: 2,
    slug: "porosity-diagnosis",
    title: "Пористость: как определить и что делать",
    description:
      "Практический урок. Определяешь свой тип пористости дома за 5 минут без специальных инструментов. Получаешь список составов которые работают именно для тебя.",
    duration: "24 мин",
    formats: ["video", "pdf", "checklist"],
    isFree: false,
    freeLabel: null,
  },
  {
    number: 3,
    slug: "protein-moisture-balance",
    title: "Белковый и влажностный баланс",
    description:
      "Самая частая причина почему волосы не восстанавливаются — неправильное соотношение белка и влаги. Учимся читать составы средств и строить уход под свой текущий баланс.",
    duration: "21 мин",
    formats: ["video", "pdf"],
    isFree: false,
    freeLabel: null,
  },
  {
    number: 4,
    slug: "home-protocol",
    title: "Домашний протокол восстановления",
    description:
      "Пошаговый план на 4 недели. Какие средства, в каком порядке, как часто. Два варианта: базовый (аптечные средства) и расширенный (профессиональные линейки).",
    duration: "27 мин",
    formats: ["video", "pdf", "checklist"],
    isFree: false,
    freeLabel: null,
  },
  {
    number: 5,
    slug: "maintenance",
    title: "Поддержание результата",
    description:
      "Как не откатиться. Сезонные корректировки протокола. Как понять что волосам нужно больше белка или влаги прямо сейчас. Долгосрочная стратегия без постоянных салонов.",
    duration: "19 мин",
    formats: ["video", "pdf"],
    isFree: false,
    freeLabel: null,
  },
] as const;

export const BONUSES: readonly Bonus[] = [
  {
    id: "shopping-guide",
    title: "Гайд по составам",
    description:
      "Список из 40+ ингредиентов: что ищем на этикетке, что избегаем, почему. Берёшь в магазин — выбираешь без сомнений.",
    format: "PDF, 12 страниц",
  },
  {
    id: "ai-diagnosis",
    title: "AI-диагностика по фото",
    description:
      "Загружаешь 1-3 фото своих волос. Получаешь персональный разбор: степень повреждения, пористость, конкретные рекомендации в стиле Елены.",
    format: "Включено в курс",
  },
  {
    id: "weekly-checklist",
    title: "Недельный чеклист",
    description:
      "Печатаешь или сохраняешь на телефон. Каждый день знаешь что делать. Без необходимости каждый раз пересматривать урок.",
    format: "PDF, 1 страница",
  },
] as const;
