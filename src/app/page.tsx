export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-[60vmax] h-[60vmax] rounded-full opacity-60 animate-mesh-float"
          style={{
            background: 'radial-gradient(circle, #C8D4C0 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute w-[60vmax] h-[60vmax] rounded-full opacity-60 animate-mesh-float"
          style={{
            background: 'radial-gradient(circle, #E0D4C8 0%, transparent 70%)',
            bottom: '-20%',
            right: '-10%',
            filter: 'blur(80px)',
            animationDelay: '-10s',
          }}
        />
        <div
          className="absolute w-[50vmax] h-[50vmax] rounded-full opacity-40 animate-mesh-float"
          style={{
            background: 'radial-gradient(circle, #D4CBBC 0%, transparent 70%)',
            top: '30%',
            left: '40%',
            filter: 'blur(100px)',
            animationDirection: 'reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="text-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <span className="font-serif text-5xl tracking-widest text-charcoal">
            KM
          </span>
          <p className="mt-2 text-xs font-sans font-medium uppercase tracking-[0.15em] text-charcoal-light">
            Keratin Madrid
          </p>
        </div>

        {/* Hero text */}
        <h1 className="font-serif text-4xl md:text-hero text-charcoal max-w-3xl mx-auto leading-tight">
          Система восстановления волос
        </h1>
        <p className="mt-6 text-lg md:text-body-lg text-charcoal-light max-w-prose mx-auto">
          Профессиональный подход к восстановлению,
          построенный на 6 годах практики и 5000+ реальных клиентов
        </p>

        {/* CTA */}
        <button className="mt-10 bg-sage text-cream-50 px-8 py-4 rounded-lg font-sans font-medium text-base hover:bg-sage-dark transition-colors duration-200">
          Пройти диагностику
        </button>
      </div>
    </main>
  )
}