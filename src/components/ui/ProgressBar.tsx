interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-cream-200">
      <div
        className="h-full bg-sage transition-all duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
