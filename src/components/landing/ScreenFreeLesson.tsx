import FlowButton from "@/components/ui/FlowButton";

interface Props {
  onNext: () => void;
}

export default function ScreenFreeLesson({ onNext }: Props) {
  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px]">
      <div className="px-5 pt-8 pb-6">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted mb-4">
          Бесплатный урок
        </p>
        <h2 className="font-serif font-normal text-[28px] leading-[1.25] tracking-[-0.01em] text-charcoal mb-6">
          Как понять состояние своих волос
        </h2>
      </div>

      <div className="mx-5 mb-6 aspect-video bg-charcoal rounded-[10px] flex flex-col items-center justify-center gap-3">
        <div className="w-14 h-14 rounded-full border-2 border-cream-50/40 flex items-center justify-center">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
            <path d="M2 2l16 9-16 9V2z" fill="#F7F4F0" fillOpacity="0.75" />
          </svg>
        </div>
        <span className="font-sans text-[12px] text-cream-200">Видео 2-3 мин</span>
      </div>

      <div className="px-5 flex flex-col gap-4">
        <p className="font-sans text-[15px] leading-relaxed text-charcoal-light">
          В этом уроке: как определить тип повреждения дома без специального оборудования.
          Тест на пористость, тест на эластичность, что смотреть в зеркале.
        </p>
        <p className="font-sans text-[14px] leading-relaxed text-charcoal-light">
          Это только начало. В полном курсе — пошаговая система восстановления.
        </p>
      </div>

      <div
        className="flow-bottom-bar fixed bottom-0 left-0 right-0 z-30"
        style={{ background: "linear-gradient(to top, #F7F4F0 80%, transparent)" }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <FlowButton onClick={onNext}>Что внутри полного курса?</FlowButton>
        </div>
      </div>
    </div>
  );
}
