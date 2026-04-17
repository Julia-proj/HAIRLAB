import type { Bonus } from "@/lib/content/course";

type BonusCardProps = {
  bonus: Bonus;
};

export default function BonusCard({ bonus }: BonusCardProps) {
  const isAi = bonus.id === "ai-diagnosis";

  return (
    <div
      className={`rounded-card p-4 ${
        isAi
          ? "bg-cream-50 border border-sage"
          : "bg-cream-50 border border-cream-300"
      }`}
    >
      {/* Row 1: title + format badge */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-sans text-[15px] font-medium text-charcoal">
          {bonus.title}
        </h3>
        <span
          className={`shrink-0 whitespace-nowrap rounded-[20px] border px-2.5 py-0.5 font-sans text-[10px] ${
            isAi
              ? "border-sage text-sage"
              : "border-cream-300 bg-cream-100 text-charcoal-muted"
          }`}
          style={isAi ? { backgroundColor: "rgba(124,140,110,0.15)" } : undefined}
        >
          {bonus.format}
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 font-sans text-[13px] font-normal leading-[1.55] text-charcoal-light">
        {bonus.description}
      </p>
    </div>
  );
}
