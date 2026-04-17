import GradientMesh from "./GradientMesh";
import HeroCta from "./HeroCta";
import ScrollHint from "./ScrollHint";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <GradientMesh />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-24 text-center md:text-left">
        {/* Eyebrow */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
          <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-charcoal-light">
            Курс восстановления волос от практикующего мастера
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-serif font-normal text-[40px] leading-[1.15] md:text-[72px] md:leading-[1.1] tracking-[-0.02em] text-charcoal max-w-[900px] mb-8">
          Твои волосы не плохие.
          <br />
          Им нужна система, а&nbsp;не ещё одна баночка.
        </h1>

        {/* Subheading */}
        <p className="font-sans font-normal text-lg leading-relaxed md:text-xl md:leading-[1.6] text-charcoal-light max-w-[680px] mb-12 mx-auto md:mx-0">
          Ты перепробовала маски, масла, кератин в салоне и советы из TikTok.
          Одно работает неделю, другое сушит, третье обещало чудо. Мы
          разберёмся, что подходит именно твоим волосам, и почему до этого ничего
          не&nbsp;держалось.
        </p>

        {/* CTA */}
        <HeroCta />
      </div>

      <ScrollHint />
    </section>
  );
}
