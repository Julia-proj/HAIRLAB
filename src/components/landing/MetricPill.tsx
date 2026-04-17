type MetricPillProps = {
  text: string;
};

export default function MetricPill({ text }: MetricPillProps) {
  return (
    <div className="bg-cream-100 border border-cream-300 rounded-[20px] px-3.5 py-2 text-center">
      <span className="font-sans text-[13px] font-medium text-charcoal">
        {text}
      </span>
    </div>
  );
}
