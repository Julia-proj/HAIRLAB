"use client";

export default function ProblemCta() {
  const handleClick = () => {
    const screen3 = document.getElementById("screen-3");
    if (screen3) {
      screen3.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Go to Screen 3");
    }
  };

  return (
    <div className="pt-16 md:pt-24 pb-24 md:pb-32 text-center max-w-[680px] mx-auto">
      <h3 className="font-serif font-normal text-2xl md:text-[32px] tracking-[-0.01em] leading-[1.3] text-charcoal mb-8">
        Хочешь понять, какой у тебя коктейль?
      </h3>

      <button
        onClick={handleClick}
        className="w-full md:w-auto inline-flex items-center justify-center bg-sage text-cream-50 px-8 py-4 rounded-lg font-sans text-base font-medium min-h-[48px] transition-all duration-200 hover:bg-sage-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 cursor-pointer"
      >
        Что я делаю не так?
      </button>

      <p className="mt-4 font-sans text-sm font-normal text-charcoal-muted">
        Дальше расскажу, кто я и почему это вообще моя зона.
      </p>
    </div>
  );
}
