import { TESTIMONIALS } from "@/lib/content/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="px-5 pb-6" data-section="testimonials">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-4">
        Что говорят
      </p>
      <div className="flex flex-col gap-3">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
      <p className="mt-2.5 text-center font-sans text-[11px] text-charcoal-muted">
        Отзывы реальных клиенток Елены. Результаты индивидуальны.
      </p>
    </section>
  );
}
