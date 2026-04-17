export default function GradientMesh() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Circle 1 — sage green */}
      <div
        className="absolute w-[60vmax] h-[60vmax] rounded-full opacity-60 animate-mesh-float will-change-transform blur-[40px] md:blur-[80px]"
        style={{
          background: "radial-gradient(circle, #C8D4C0 0%, transparent 70%)",
          top: "-20%",
          left: "-10%",
        }}
      />
      {/* Circle 2 — warm sand */}
      <div
        className="absolute w-[60vmax] h-[60vmax] rounded-full opacity-60 animate-mesh-float will-change-transform blur-[40px] md:blur-[80px]"
        style={{
          background: "radial-gradient(circle, #E0D4C8 0%, transparent 70%)",
          bottom: "-20%",
          right: "-10%",
          animationDelay: "-10s",
        }}
      />
      {/* Circle 3 — neutral warm */}
      <div
        className="absolute w-[50vmax] h-[50vmax] rounded-full opacity-40 will-change-transform blur-[50px] md:blur-[100px]"
        style={{
          background: "radial-gradient(circle, #D4CBBC 0%, transparent 70%)",
          top: "30%",
          left: "40%",
          animation: "mesh-float 25s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
