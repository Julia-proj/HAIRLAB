import type { Testimonial } from "@/lib/content/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initial = testimonial.name.charAt(0);

  return (
    <div className="bg-cream-50 border border-cream-300 rounded-card p-[18px_16px]">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream-300 bg-cream-100">
          <span className="font-sans text-sm font-medium text-charcoal-light">
            {initial}
          </span>
        </div>
        <div>
          <p className="font-sans text-sm font-medium text-charcoal">
            {testimonial.name}
          </p>
          <p className="font-sans text-xs text-charcoal-muted">
            {testimonial.location}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="font-sans text-sm italic leading-[1.6] text-charcoal">
        {testimonial.text}
      </p>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between border-t border-cream-200 pt-2.5">
        <span className="inline-block rounded-[20px] border border-cream-300 bg-cream-100 px-2.5 py-0.5 font-sans text-[11px] text-charcoal-light">
          Уровень {testimonial.damageLevel} из 5
        </span>
        <span className="font-sans text-[11px] text-charcoal-muted">
          {testimonial.weeksSince} нед. назад
        </span>
      </div>
    </div>
  );
}
