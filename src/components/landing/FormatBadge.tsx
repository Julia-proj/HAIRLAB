import type { LessonFormat } from "@/lib/content/course";

type FormatBadgeProps = {
  format: LessonFormat | "free";
  label?: string;
};

const FORMAT_LABELS: Record<LessonFormat, string> = {
  video: "Видеоурок",
  pdf: "PDF-гайд",
  checklist: "Чеклист",
};

export default function FormatBadge({ format, label }: FormatBadgeProps) {
  if (format === "free") {
    return (
      <span className="inline-block rounded-[20px] border border-sage px-2.5 py-0.5 font-sans text-[11px] text-sage" style={{ backgroundColor: "rgba(124,140,110,0.15)" }}>
        {label}
      </span>
    );
  }

  return (
    <span className="inline-block rounded-[20px] border border-cream-300 bg-cream-50 px-2.5 py-0.5 font-sans text-[11px] text-charcoal-light">
      {FORMAT_LABELS[format]}
    </span>
  );
}
