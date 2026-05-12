import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, ShieldCheck } from "lucide-react";
import { PeroClashWordmark, PeroLogo } from "./PeroBrand.jsx";

const DownloadSection = () => {
  return (
    <section
      id="download"
      data-testid="download-section"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pc-grid-bg opacity-40" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,31,31,0.28) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="relative rounded-3xl border border-red-500/25 bg-gradient-to-b from-[#141414] to-[#0d0d0d] px-6 sm:px-12 py-16 text-center overflow-hidden shadow-[0_30px_80px_-30px_rgba(255,31,31,0.45)]">
          {/* corner glows */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,31,31,0.35), transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,31,31,0.3), transparent 70%)", filter: "blur(50px)" }} />

          <div className="relative">
            <div className="flex justify-center mb-6">
              <PeroLogo className="h-16 w-16 sm:h-20 sm:w-20" testId="download-logo" />
            </div>

            <h2
              className="pc-heading text-3xl sm:text-5xl text-white"
              data-testid="download-title"
            >
              Get The <PeroClashWordmark size="md" className="align-middle" /> App
            </h2>

            <p
              className="mt-5 mx-auto max-w-xl text-white/65 text-base sm:text-lg leading-relaxed"
              data-testid="download-description"
            >
              Download the latest version of{" "}
              <span className="text-red-400 font-semibold">Pero Clash</span> and start competing now.
            </p>

            <motion.a
              href="/app.apk"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="pc-cta mt-9 text-base sm:text-lg"
              data-testid="download-cta"
            >
              <Download className="w-5 h-5" />
              Download APK Now
            </motion.a>

            <div className="mt-7 flex justify-center">
              <div className="pc-offer-badge" data-testid="download-offer-badge">
                <span className="pc-dot" />
                <Sparkles className="w-3.5 h-3.5 text-red-300" />
                <span>
                  Limited Time Offer — First <span className="text-white font-bold">100 users</span> get{" "}
                  <span className="text-white font-bold">₹5 free deposit cash</span>
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xs text-white/45">
              <div className="flex items-center gap-2" data-testid="download-trust-secure">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span className="uppercase tracking-[0.2em]" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  Safe Install
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10" />
              <div data-testid="download-trust-version">
                <span className="uppercase tracking-[0.2em]" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  Latest Build · Android
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadSection;
