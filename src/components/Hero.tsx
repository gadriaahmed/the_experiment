"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Marquee } from "./Marquee";

const TICKER = [
  "A/B TEST RUNNING: +24.8% CVR",
  "CHECKOUT VARIANT B: +18.2% RPV",
  "LANDING PAGE: −22.4% BOUNCE",
  "STAT SIG: 97.3% CONFIDENCE",
  "PAID TRAFFIC: −31.0% CAC",
  "HYPOTHESIS KILLED: H-014",
];

export function Hero() {
  const [metric, setMetric] = useState(24.8);

  useEffect(() => {
    const id = window.setInterval(() => {
      setMetric((n) => {
        const next = n + (Math.random() - 0.45) * 0.6;
        return Math.min(32, Math.max(18, Number(next.toFixed(1))));
      });
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-line">
      <div className="grid min-h-[100dvh] lg:grid-cols-2">
        <div className="relative hidden min-h-[48vh] border-b border-line lg:block lg:min-h-[100dvh] lg:border-b-0 lg:border-r">
          <div className="grid-lines absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-br from-hot/25 via-transparent to-lime/10" />
          <div className="absolute inset-8 border border-line" />
          <div className="absolute top-1/2 left-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg]">
            <p className="display text-[18vw] leading-none text-hot/90 select-none">KILL</p>
            <p className="display text-[14vw] leading-none text-paper/90 select-none">GROW</p>
          </div>
          <p className="mono absolute right-8 bottom-8 text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
            LAB_00 // LIVE
          </p>
        </div>

        <div className="relative flex flex-col justify-end px-4 pt-28 pb-10 md:px-10 lg:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mono mb-6 text-[10px] tracking-[0.28em] text-hot uppercase"
          >
            Ethical CRO laboratory — no hacks, no fake urgency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="display text-[clamp(2.6rem,8vw,7.2rem)] text-paper"
          >
            WE <span className="text-hot">KILL</span> HYPOTHESES.
            <br />
            WE <span className="text-hot">GROW</span> REVENUE.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-8 max-w-xl text-lg leading-8 text-mute-on-dark md:text-xl md:leading-9"
          >
            Deceptive designs and extractive hacks are lazy. Most websites look pretty
            and convert terribly. We treat your digital product like a laboratory.
            Data over opinion. Statistically significant growth over artistic preferences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#audit">Start An Experiment</MagneticButton>
            <a
              href="#manifesto"
              className="mono border border-line px-6 py-3 text-[11px] tracking-[0.18em] uppercase text-paper hover:border-hot"
            >
              Read the manifesto
            </a>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-line bg-void">
        <Marquee
          items={[
            ...TICKER,
            `[ A/B TEST RUNNING: +${metric.toFixed(1)}% CVR ]`,
          ]}
        />
      </div>
    </section>
  );
}
