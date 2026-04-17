"use client";

export default function HeroCta() {
  const handleClick = () => {
    const screen2 = document.getElementById("screen-2");
    if (screen2) {
      screen2.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Go to Screen 2");
    }
  };

  return (
    <div className="flex flex-col items-center md:items-start">
      <button
        onClick={handleClick}
        className="w-full md:w-auto inline-flex items-center justify-center bg-sage text-cream-50 px-8 py-4 rounded-lg font-sans text-base font-medium min-h-[48px] transition-all duration-200 hover:bg-sage-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 cursor-pointer"
      >
        Начать диагностику
      </button>
      <p className="mt-4 font-sans text-sm font-normal text-charcoal-muted">
        4 вопроса. Бесплатный урок в конце. Без регистрации.
      </p>
    </div>
  );
}
