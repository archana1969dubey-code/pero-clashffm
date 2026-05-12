import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { PeroLogo, PeroClashWordmark } from "./PeroBrand.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/55 border-b border-white/5"
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" data-testid="navbar-brand">
          <PeroLogo className="h-8 w-8" />
          <PeroClashWordmark size="xs" />
        </a>

        <a
          href="/app.apk"
          data-testid="navbar-download-cta"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/40 text-red-300 hover:text-white hover:bg-red-500/10 transition-all text-xs font-bold uppercase tracking-widest"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          <Download className="w-4 h-4" />
          Download APK
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white/80 hover:text-white"
          aria-label="Toggle menu"
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-black/85"
            data-testid="navbar-mobile-menu"
          >
            <div className="px-6 py-5 flex">
              <a
                href="/app.apk"
                onClick={() => setOpen(false)}
                data-testid="navbar-mobile-download-cta"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-red-500/40 text-red-300 hover:text-white hover:bg-red-500/10 transition-colors text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <Download className="w-4 h-4" />
                Download APK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
