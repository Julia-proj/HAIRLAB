"use client";

import { useEffect, useState } from "react";

export default function HeroHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-200 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-[12px]"
          : "bg-cream-50"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16">
        <span className="font-serif text-2xl tracking-[0.1em] text-charcoal">
          KM
        </span>
      </div>
    </header>
  );
}
