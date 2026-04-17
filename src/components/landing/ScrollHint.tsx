export default function ScrollHint() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      {/* Vertical line — hidden on mobile */}
      <div
        className="hidden md:block w-px h-8 bg-cream-300 animate-scroll-hint"
      />
      <span className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-charcoal-muted">
        Листай дальше
      </span>
    </div>
  );
}
