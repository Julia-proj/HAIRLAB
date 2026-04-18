import GradientMesh from "./GradientMesh";
import FlowButton from "@/components/ui/FlowButton";

interface Props {
  onNext: () => void;
}

export default function ScreenHero({ onNext }: Props) {
  return (
    <div className="relative min-h-[calc(100vh-51px)] flex flex-col overflow-hidden pb-[120px]">
      <GradientMesh />

      <div className="relative z-10 flex flex-col flex-1 justify-center px-5 pt-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-light">
            Курс восстановления от практикующего мастера
          </span>
        </div>

        <h1 className="font-serif font-normal text-[36px] leading-[1.15] tracking-[-0.02em] text-charcoal mb-6">
          Твои волосы не плохие.
          <br />
          Им нужна система, а&nbsp;не ещё одна баночка.
        </h1>

        <p className="font-sans text-[15px] leading-relaxed text-charcoal-light max-w-[480px]">
          Ты перепробовала маски, масла, кератин и советы из TikTok. Разберёмся,
          что подходит именно твоим волосам и почему до этого ничего не держалось.
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
          <FlowButton onClick={onNext}>Узнать, почему</FlowButton>
        </div>
      </div>
    </div>
  );
}
