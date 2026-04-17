import { BONUSES } from "@/lib/content/course";
import BonusCard from "./BonusCard";

export default function BonusSection() {
  return (
    <section className="px-5 pt-2 pb-2" data-section="bonus">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-3.5">
        Бонусы
      </p>
      <div className="flex flex-col gap-2.5">
        {BONUSES.map((bonus) => (
          <BonusCard key={bonus.id} bonus={bonus} />
        ))}
      </div>
    </section>
  );
}
