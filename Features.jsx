import React from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Zap,
  Percent,
  Coins,
  Users,
  Briefcase,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Min Withdraw ₹20",
    desc: "Very low minimum withdrawal.",
  },
  {
    icon: Zap,
    title: "Instant Withdrawal",
    desc: "Withdraw your winnings instantly.",
  },
  {
    icon: Percent,
    title: "Very Low Commission",
    desc: "You win more, we take very less.",
  },
  {
    icon: Coins,
    title: "Low Entry Fees",
    desc: "Every type of match starts from as low as ₹5.",
  },
  {
    icon: Users,
    title: "Refer & Earn",
    desc: "When your friend joins using your referral code and plays 3 paid matches, you get ₹5 reward.",
  },
  {
    icon: Briefcase,
    title: "Work With Us",
    desc: "First tournament app where you can work for us and earn.",
  },
  {
    icon: Trophy,
    title: "Free Winning Matches",
    desc: "Daily 3 free matches of every type with the greatest prize pool.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Features = () => {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Side glow accents */}
      <div
        className="absolute left-0 top-1/3 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,31,31,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,31,31,0.16) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="mx-auto max-w-6xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="pc-heading text-3xl sm:text-5xl md:text-6xl text-white"
            data-testid="features-title"
          >
            Why Choose{" "}
            <span className="pc-wordmark text-3xl sm:text-5xl md:text-6xl align-middle">
              Pero Clash
            </span>
          </h2>

          <p
            className="mt-4 text-red-400/90 text-sm sm:text-base uppercase tracking-[0.35em]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
            data-testid="features-subtitle"
          >
            Never Seen Before
          </p>

          <div className="pc-divider mt-10 max-w-md mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="pc-card group"
                data-testid={`feature-card-${i + 1}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="pc-card-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className="text-[10px] uppercase tracking-[0.25em] text-white/30"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-bold text-white tracking-wide"
                  style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "0.04em" }}
                  data-testid={`feature-title-${i + 1}`}
                >
                  {f.title}
                </h3>

                <p
                  className="mt-3 text-white/60 text-base leading-relaxed"
                  data-testid={`feature-desc-${i + 1}`}
                >
                  {f.desc}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(255,31,31,0.35) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
