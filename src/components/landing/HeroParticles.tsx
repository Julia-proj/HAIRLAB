// Pure CSS particles — zero JS animation, zero layout reflow

const PARTICLES: {
  x: string; y: string; size: number;
  color: string; duration: number; delay: number;
  anim: "particle-rise-a" | "particle-rise-b" | "particle-rise-c";
}[] = [
  { x: "18%",  y: "72%", size: 2,   color: "rgba(212,180,144,0.7)", duration: 7,  delay: 0,    anim: "particle-rise-a" },
  { x: "32%",  y: "65%", size: 1.5, color: "rgba(248,244,238,0.6)", duration: 9,  delay: -2.5, anim: "particle-rise-b" },
  { x: "45%",  y: "78%", size: 1.5, color: "rgba(212,180,144,0.5)", duration: 8,  delay: -5,   anim: "particle-rise-c" },
  { x: "58%",  y: "70%", size: 2,   color: "rgba(255,252,248,0.65)", duration: 10, delay: -1,   anim: "particle-rise-a" },
  { x: "70%",  y: "80%", size: 1.5, color: "rgba(196,168,136,0.55)", duration: 7,  delay: -3.5, anim: "particle-rise-b" },
  { x: "12%",  y: "55%", size: 1,   color: "rgba(248,244,238,0.5)", duration: 11, delay: -6,   anim: "particle-rise-c" },
  { x: "82%",  y: "62%", size: 2,   color: "rgba(212,180,144,0.6)", duration: 8,  delay: -4,   anim: "particle-rise-a" },
  { x: "25%",  y: "85%", size: 1.5, color: "rgba(255,252,248,0.55)", duration: 9,  delay: -7,   anim: "particle-rise-b" },
  { x: "62%",  y: "58%", size: 1,   color: "rgba(196,168,136,0.45)", duration: 12, delay: -0.5, anim: "particle-rise-c" },
  { x: "50%",  y: "88%", size: 2,   color: "rgba(212,180,144,0.5)", duration: 8,  delay: -2,   anim: "particle-rise-a" },
  { x: "76%",  y: "75%", size: 1.5, color: "rgba(248,244,238,0.6)", duration: 10, delay: -8,   anim: "particle-rise-b" },
  { x: "38%",  y: "50%", size: 1,   color: "rgba(212,180,144,0.4)", duration: 7,  delay: -4.5, anim: "particle-rise-c" },
  { x: "88%",  y: "82%", size: 2,   color: "rgba(255,252,248,0.5)", duration: 9,  delay: -1.5, anim: "particle-rise-a" },
  { x: "7%",   y: "68%", size: 1.5, color: "rgba(196,168,136,0.5)", duration: 11, delay: -6.5, anim: "particle-rise-b" },
  { x: "55%",  y: "45%", size: 1,   color: "rgba(248,244,238,0.45)", duration: 8,  delay: -3,   anim: "particle-rise-c" },
  { x: "93%",  y: "55%", size: 1.5, color: "rgba(212,180,144,0.45)", duration: 10, delay: -9,   anim: "particle-rise-a" },
];

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            animation: `${p.anim} ${p.duration}s ease-in-out ${p.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
