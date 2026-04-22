"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  showRadialGradient?: boolean;
  className?: string;
}

export default function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-cream-50 text-charcoal transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert-0",
            // Белая «пустая» полоса фона — на основе нашего крем-50
            "[--white-gradient:repeating-linear-gradient(100deg,var(--color-cream-50)_0%,var(--color-cream-50)_7%,transparent_10%,transparent_12%,var(--color-cream-50)_16%)]",
            // «Перламутровая ракушка»: тёплый розово-кремовый переход без зелёного
            // #F0E6E0=светлый перламутр, #E8CEBF=тёплый персик, #EDD8CC=пудровая роза,
            // #E4C4A8=карамельный, #F2E8E4=почти белый с розовым подтоном
            "[--aurora:repeating-linear-gradient(100deg,#F0E6E0_10%,#E8CEBF_15%,#EDD8CC_20%,#E4C4A8_25%,#F2E8E4_30%)]",
            "after:content-[''] after:absolute after:inset-0",
            "after:[background-image:var(--white-gradient),var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora",
            "after:[background-attachment:fixed]",
            "after:mix-blend-mode-overlay",
            // Маска: свечение льётся сверху справа и рассеивается к центру
            showRadialGradient
              ? "[mask-image:radial-gradient(ellipse_at_80%_10%,black_5%,transparent_65%)]"
              : ""
          )}
        />
      </div>
      {children}
    </div>
  );
}
