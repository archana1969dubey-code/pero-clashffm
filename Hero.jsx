import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, ChevronDown } from "lucide-react";
import { PeroClashWordmark, PeroLogo } from "./PeroBrand.jsx";

const Sparks = () => {
  const sparks = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${5 + Math.random() * 5}s`,
        scale: 0.5 + Math.random() * 1.2,
      })),
    []
  );
  return (
    <div className="pc-sparks" aria-hidden>
      {sparks.map((s, i) => (
        <span
          key={i}
          style={{
            left: s.left,
            bottom: "-10px",
            animationDelay: s.delay,
            animationDuration: s.duration,
            transform: `scale(${s.scale})`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 pc-grid-bg opacity-60" aria-hidden />
      <div className="pc-hero-glow" aria-hidden />
      <Sparks />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Top emblem */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex justify-center"
        >
          <PeroLogo className="h-24 w-24 sm:h-28 sm:w-28" testId="hero-logo" />
        </motion.div>

        {/* Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="leading-[0.95]"
          data-testid="hero-title"
        >
          <PeroClashWordmark size="xl" testId="hero-wordmark" />
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-white/90 text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.18em] uppercase"
          style={{ fontFamily: "Orbitron, sans-serif" }}
          data-testid="hero-tagline"
        >
          Be Pero. <span className="text-red-500">Be Fearless.</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed"
          data-testid="hero-description"
        >
          Our priority: <span className="text-white font-semibold">Low entry fees</span> and{" "}
          <span className="text-white font-semibold">very low commission.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <a href="/app.apk" className="pc-cta" data-testid="hero-download-cta">
            <Download className="w-5 h-5" />
            Download APK
          </a>

          <div className="pc-offer-badge" data-testid="hero-offer-badge">
            <span className="pc-dot" />
            <Sparkles className="w-3.5 h-3.5 text-red-300" />
            <span>
              Limited Time Offer — First <span className="text-white font-bold">100 users</span> get{" "}
              <span className="text-white font-bold">₹5 free deposit cash</span>
            </span>
          </div>
        </motion.div>

        <motion.a
          href="#features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-14 inline-flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors"
          data-testid="hero-scroll-indicator"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none" />
    </section>
  );
};

export default Hero;
