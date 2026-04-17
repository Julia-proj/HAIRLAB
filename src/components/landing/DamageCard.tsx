type DamageCardProps = {
  number: string;
  name: string;
  description: string;
  signs: readonly string[];
};

export default function DamageCard({
  number,
  name,
  description,
  signs,
}: DamageCardProps) {
  return (
    <article className="damage-card relative bg-cream-100 border border-cream-300 rounded-card p-6 md:p-8 flex flex-col gap-5 transition-all duration-200 overflow-hidden">
      {/* Left accent bar — always visible on touch devices, hover-only on desktop (via globals.css) */}
      <span
        className="damage-card-accent absolute left-0 top-0 bottom-0 w-[3px] bg-sage rounded-l-card transition-opacity duration-200"
        aria-hidden="true"
      />

      {/* Number */}
      <span className="font-serif text-[40px] md:text-[48px] font-normal leading-none text-sand">
        {number}
      </span>

      {/* Name */}
      <h3 className="font-serif text-2xl md:text-[32px] font-normal tracking-[-0.01em] text-charcoal leading-[1.3]">
        {name}
      </h3>

      {/* Description */}
      <p className="font-sans text-base font-normal leading-relaxed text-charcoal">
        {description}
      </p>

      {/* Divider */}
      <hr className="border-0 h-px bg-cream-300 w-full" />

      {/* Signs label */}
      <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-charcoal-light">
        Ты узнаешь это по
      </span>

      {/* Signs list */}
      <ul className="flex flex-col gap-2">
        {signs.map((sign, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="shrink-0 w-3 h-px bg-sage mt-[10px]"
              aria-hidden="true"
            />
            <span className="font-sans text-sm font-normal leading-snug text-charcoal-light">
              {sign}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
