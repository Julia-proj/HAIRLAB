const INSIGHTS = [
  "Почему дорогие маски не работают, если нарушен один простой шаг перед нанесением",
  "Как пористость волоса влияет на то, что вообще имеет смысл покупать",
  "Что такое белковый и влажностный баланс простым языком — и почему без этого любой уход временный",
] as const;

export default function LessonInsights() {
  return (
    <div className="px-5 py-5">
      <p
        className="font-sans font-medium uppercase text-sage mb-4 tracking-[0.08em]"
        style={{ fontSize: "11px" }}
      >
        Что ты узнаешь
      </p>
      <div className="flex flex-col" style={{ gap: "14px" }}>
        {INSIGHTS.map((text, i) => (
          <div key={i} className="flex" style={{ gap: "12px" }}>
            <span
              className="font-sans font-medium text-sage flex-shrink-0 pt-[1px]"
              style={{ fontSize: "12px", minWidth: "18px" }}
            >
              {i + 1}
            </span>
            <p
              className="font-sans font-normal text-charcoal"
              style={{ fontSize: "14px", lineHeight: "1.55" }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
