import React from "react";

// Centralized branded wordmark — same color, font, glow everywhere.
export const PeroClashWordmark = ({ size = "md", className = "", testId = "pero-clash-wordmark" }) => {
  const sizeMap = {
    xs: "text-lg sm:text-xl",
    sm: "text-2xl sm:text-3xl",
    md: "text-4xl sm:text-5xl",
    lg: "text-5xl sm:text-7xl md:text-8xl",
    xl: "text-6xl sm:text-8xl md:text-9xl",
  };
  return (
    <span data-testid={testId} className={`pc-wordmark ${sizeMap[size] || sizeMap.md} ${className}`}>
      Pero Clash
    </span>
  );
};

export const PeroLogo = ({ className = "h-10 w-10", testId = "pero-logo" }) => (
  <span
    data-testid={testId}
    className={`${className} inline-flex items-center justify-center rounded-full overflow-hidden bg-black ring-1 ring-red-500/40 shadow-[0_0_18px_rgba(255,31,31,0.5)]`}
    aria-label="Pero Clash logo"
  >
    <img
      src="/pero-logo.png"
      alt="Pero Clash logo"
      className="w-full h-full object-cover scale-110"
      loading="eager"
      decoding="async"
    />
  </span>
);

export const PeroLockup = ({ size = "md", className = "", logoSize = "h-10 w-10" }) => (
  <div className={`flex items-center gap-3 ${className}`} data-testid="pero-lockup">
    <PeroLogo className={logoSize} />
    <PeroClashWordmark size={size} />
  </div>
);
