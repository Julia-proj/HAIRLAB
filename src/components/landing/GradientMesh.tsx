export default function GradientMesh() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{ contain: "strict" }}
    >
      {/* Layer 1 — warm stone, top-left anchor */}
      <div
        className="absolute rounded-full will-change-transform blur-[40px] md:blur-[60px]"
        style={{
          width: "min(80vmax, 600px)",
          height: "min(80vmax, 600px)",
          top: "-30%",
          left: "-20%",
          background: "radial-gradient(circle, #E8E2DC 0%, #DDD8D2 40%, transparent 68%)",
          opacity: 0.85,
          animation: "mesh-float 32s ease-in-out infinite",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Layer 2 — neutral greige, bottom-right */}
      <div
        className="absolute rounded-full will-change-transform blur-[40px] md:blur-[70px]"
        style={{
          width: "min(72vmax, 540px)",
          height: "min(72vmax, 540px)",
          bottom: "-25%",
          right: "-15%",
          background: "radial-gradient(circle, #D8D0C8 0%, #CCC4BC 35%, transparent 68%)",
          opacity: 0.6,
          animation: "mesh-float 28s ease-in-out infinite reverse",
          animationDelay: "-12s",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Layer 3 — cool taupe, center */}
      <div
        className="absolute rounded-full will-change-transform blur-[50px] md:blur-[90px]"
        style={{
          width: "min(55vmax, 420px)",
          height: "min(55vmax, 420px)",
          top: "20%",
          left: "30%",
          background: "radial-gradient(circle, #D4CEC8 0%, #C8C2BC 35%, transparent 68%)",
          opacity: 0.38,
          animation: "mesh-float 38s ease-in-out infinite",
          animationDelay: "-7s",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Layer 4 — stone gray, bottom-left */}
      <div
        className="absolute rounded-full will-change-transform blur-[40px] md:blur-[80px]"
        style={{
          width: "min(40vmax, 300px)",
          height: "min(40vmax, 300px)",
          bottom: "5%",
          left: "-5%",
          background: "radial-gradient(circle, #C4BCB4 0%, #B8B0A8 35%, transparent 68%)",
          opacity: 0.25,
          animation: "mesh-float 42s ease-in-out infinite reverse",
          animationDelay: "-20s",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Layer 5 — warm white highlight, top-right */}
      <div
        className="absolute rounded-full will-change-transform blur-[30px] md:blur-[50px]"
        style={{
          width: "min(35vmax, 260px)",
          height: "min(35vmax, 260px)",
          top: "-5%",
          right: "5%",
          background: "radial-gradient(circle, rgba(255,252,250,0.98) 0%, rgba(248,246,242,0.7) 40%, transparent 68%)",
          opacity: 0.65,
          animation: "mesh-float 24s ease-in-out infinite",
          animationDelay: "-4s",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Layer 6 — neutral mist, center-bottom */}
      <div
        className="absolute rounded-full will-change-transform blur-[50px] md:blur-[100px]"
        style={{
          width: "min(45vmax, 340px)",
          height: "min(30vmax, 220px)",
          bottom: "10%",
          left: "20%",
          background: "radial-gradient(ellipse, #E0DAD4 0%, #D4CEC8 35%, transparent 68%)",
          opacity: 0.3,
          animation: "mesh-float 35s ease-in-out infinite",
          animationDelay: "-15s",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Light sweep */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "60%",
          height: "200%",
          top: "-50%",
          left: "0",
          background: "linear-gradient(105deg, transparent 40%, rgba(255,252,250,0.07) 50%, transparent 60%)",
          animation: "light-sweep 40s ease-in-out infinite",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
}
