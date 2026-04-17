interface SourceTileProps {
  label: string;
  name: string;
  description: string;
}

export default function SourceTile({ label, name, description }: SourceTileProps) {
  return (
    <div className="source-tile bg-cream-100 border border-cream-300 rounded-[12px] p-6 md:p-8 flex flex-col gap-4 cursor-default transition-all duration-200">
      <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-sand">
        {label}
      </span>
      <h3 className="font-serif font-normal text-[22px] md:text-[28px] leading-[1.25] tracking-[-0.01em] text-charcoal">
        {name}
      </h3>
      <p className="font-sans text-base font-normal leading-[1.65] text-charcoal-light">
        {description}
      </p>
    </div>
  );
}
