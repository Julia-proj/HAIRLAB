export type Testimonial = {
  id: string;
  name: string;
  location: string;
  text: string;
  damageLevel: number;
  weeksSince: number;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "ana",
    name: "Анастасия",
    location: "Мадрид",
    text: "Наконец-то поняла, почему маски не работали. Оказывается, я наносила их неправильно и на неподготовленные волосы. После первого урока уже видна разница.",
    damageLevel: 3,
    weeksSince: 4,
  },
  {
    id: "maria",
    name: "Мария",
    location: "Барселона",
    text: "Ходила в салон каждые 6 недель на кератин. Между процедурами волосы снова становились как солома. Теперь понимаю почему и как это исправить дома.",
    damageLevel: 4,
    weeksSince: 8,
  },
  {
    id: "kate",
    name: "Катя",
    location: "Валенсия",
    text: "Осветлилась до платины и почти лишилась волос. AI-диагностика показала конкретно что происходит: это не страшилка, а реальный план действий.",
    damageLevel: 5,
    weeksSince: 6,
  },
] as const;
