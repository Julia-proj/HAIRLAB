import DamageCard from "./DamageCard";
import ProblemCta from "./ProblemCta";

const cards = [
  {
    number: "01",
    name: "Механические",
    description:
      "Волос ломается от трения, натяжения или неправильного расчёсывания. Чаще всего страдают концы и зона у лица.",
    signs: [
      "Секущиеся кончики, которые отрастают и всё равно секутся",
      "Короткие обломанные волоски у корней и висков",
      'Ощущение "пакли" после распутывания',
    ],
  },
  {
    number: "02",
    name: "Термические",
    description:
      "Волос теряет влагу и белок от горячего воздуха и пластин. Повреждение накапливается тихо, несколько месяцев.",
    signs: [
      "Волосы стали пушиться и не лежат, хотя раньше лежали",
      "Концы как проволока: жёсткие, но ломкие одновременно",
      "После мытья волосы быстро снова выглядят тусклыми",
    ],
  },
  {
    number: "03",
    name: "Химические",
    description:
      "Окрашивание, осветление, кератин, ботокс, химическая завивка. Работают внутри волоса и меняют его структуру.",
    signs: [
      "Волос тянется как резинка во влажном состоянии",
      "Пористость: маски впитываются за секунду, но результат не держится",
      "Цвет вымывается за 2-3 мытья, хотя краска была дорогая",
    ],
  },
] as const;

export default function ProblemSection() {
  return (
    <section id="screen-2" className="bg-cream-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Intro block */}
        <div className="pt-16 md:pt-24 max-w-[900px] mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-sand shrink-0"
              aria-hidden="true"
            />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-charcoal-light">
              Шаг 1 из 3. Понимание
            </span>
          </div>

          {/* H2 */}
          <h2 className="font-serif font-normal text-[32px] leading-[1.25] md:text-[48px] md:leading-[1.2] tracking-[-0.02em] text-charcoal mb-6">
            Повреждения бывают разные.
            <br />
            И это хорошая новость.
          </h2>

          {/* Intro paragraph */}
          <p className="font-sans text-lg leading-relaxed md:text-xl md:leading-[1.6] font-normal text-charcoal-light max-w-[680px] mb-12 md:mb-16">
            Одна маска не может &ldquo;починить всё&rdquo;, потому что
            &ldquo;всё&rdquo; это три разные истории. Каждая со своей причиной и
            своим решением. Разберёмся по порядку.
          </p>
        </div>

        {/* Damage cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {cards.map((card) => (
            <DamageCard key={card.number} {...card} />
          ))}
        </div>

        {/* Connecting paragraph */}
        <div className="pt-12 md:pt-16 max-w-[680px] mx-auto">
          <p className="font-sans text-lg font-normal leading-[1.65] text-charcoal text-left">
            Почти всегда у реальных волос это коктейль из двух или трёх.
            Осветлила, высушила феном, расчёсывала мокрыми. Все три по чуть-чуть.
            Поэтому средство &ldquo;для окрашенных&rdquo; не работает полностью:
            оно закрывает одну дырку из трёх.
          </p>
        </div>

        {/* CTA block */}
        <ProblemCta />
      </div>
    </section>
  );
}
