import React from "react";
import { Mail } from "lucide-react";
import { PeroClashWordmark, PeroLogo } from "./PeroBrand.jsx";

const CONTACT_EMAIL = "realshivworks@gmail.com";

const Footer = () => {
  return (
    <footer
      id="footer"
      data-testid="footer"
      className="relative border-t border-white/5 bg-[#070707] pt-16 pb-8 px-6"
    >
      <div className="pc-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Brand block */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <PeroLogo className="h-12 w-12" />
              <PeroClashWordmark size="sm" />
            </div>
            <p
              className="mt-5 text-white/60 text-sm leading-relaxed"
              data-testid="footer-description"
            >
              Never seen before tournament app.
            </p>
          </div>

          {/* Contact */}
          <div data-testid="footer-contact">
            <div
              className="text-[10px] uppercase tracking-[0.35em] text-red-400 mb-4"
              style={{ fontFamily: "Orbitron, sans-serif" }}
              data-testid="footer-contact-heading"
            >
              Contact
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-testid="footer-contact-email"
              className="group inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white/80 hover:text-white hover:border-red-500/60 hover:bg-red-500/10 transition-all duration-300"
            >
              <span className="w-9 h-9 rounded-lg flex items-center justify-center border border-red-500/30 bg-red-500/10 text-red-300 group-hover:shadow-[0_0_18px_rgba(255,31,31,0.45)] transition-shadow">
                <Mail className="w-[18px] h-[18px]" />
              </span>
              <span className="text-sm sm:text-base font-medium tracking-wide">
                {CONTACT_EMAIL}
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div data-testid="footer-copyright">
            © {new Date().getFullYear()} <span className="pc-wordmark-sm text-xs">Pero Clash</span>. All rights reserved.
          </div>
          <div
            className="uppercase tracking-[0.3em]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Be Pero · Be Fearless
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
