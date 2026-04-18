import FlowButton from "@/components/ui/FlowButton";

const DAMAGE_TYPES = [
  {
    num: "01",
    name: "Механические",
    desc: "Волос ломается от трения и натяжения. Секущиеся концы, обломанные волоски у корней — чаще всего страдают концы и зона у лица.",
  },
  {
    num: "02",
    name: "Термические",
    desc: "Потеря влаги от фена и пластин. Пушатся, не лежат, тускнеют быстро после мытья. Повреждение накапливается тихо, месяцами.",
  },
  {
    num: "03",
    name: "Химические",
    desc: "Окрашивание, осветление, кератин. Волос тянется во влажном, маски впитываются мгновенно но не держатся, цвет вымывается.",
  },
] as const;

interface Props {
  onNext: () => void;
}

export default function ScreenDamageTypes({ onNext }: Props) {
  return (
    <div className="min-h-[calc(100vh-51px)] bg-cream-50 pb-[120px]">
      <div className="px-5 pt-8 pb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-sand shrink-0" aria-hidden="true" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-light">
            Шаг 1 из 3. Понимание
          </span>
        </div>
        <h2 className="font-serif font-normal text-[30px] leading-[1.25] tracking-[-0.02em] text-charcoal mb-4">
          Повреждения бывают разные.
          <br />
          И это хорошая новость.
        </h2>
        <p className="font-sans text-[15px] leading-relaxed text-charcoal-light">
          Одна маска не может починить всё, потому что всё — это три разные истории.
          Каждая со своей причиной и своим решением.
        </p>
      </div>

      <div className="px-5 flex flex-col gap-3 mb-6">
        {DAMAGE_TYPES.map((d) => (
          <div key={d.num} className="bg-cream-100 rounded-[10px] p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-sans text-[11px] font-medium text-charcoal-muted">{d.num}</span>
              <span className="font-serif text-[20px] text-charcoal">{d.name}</span>
            </div>
            <p className="font-sans text-[14px] leading-relaxed text-charcoal-light">{d.desc}</p>
          </div>
        ))}
      </div>

      <div className="px-5">
        <p className="font-sans text-[14px] leading-relaxed text-charcoal">
          Почти всегда у реальных волос это коктейль из двух или трёх. Поэтому
          средство для окрашенных не работает полностью: оно закрывает одну дырку из трёх.
        </p>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-30"
        style={{ background: "linear-gradient(to top, #F7F4F0 80%, transparent)" }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <FlowButton onClick={onNext}>Что я делаю не так?</FlowButton>
        </div>
      </div>
    </div>
  );
}
