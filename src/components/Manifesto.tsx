"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-line bg-paper text-ink">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <div className="border-b border-ink/15 px-4 py-10 md:px-10 lg:col-span-4 lg:border-r lg:border-b-0">
          <p className="mono text-[10px] tracking-[0.28em] text-hot-deep uppercase">
            01 // Anti-agency
          </p>
          <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.6rem)]">
            What if the web were <span className="text-hot-deep">better</span>?
          </h2>
        </div>

        <div className="px-4 py-12 md:px-12 lg:col-span-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl space-y-7 text-xl leading-9 text-mute md:text-[1.65rem] md:leading-[1.55]"
          >
            <p>
              Not just faster. Not just shinier. Actually{" "}
              <span className="text-hot-deep">better</span> for the people using it.
            </p>
            <p>
              Most websites look pretty and convert terribly. Agencies ship moodboards.
              We ship experiments. We treat your digital product like a laboratory.{" "}
              <span className="text-ink">Data over opinion.</span> Statistically
              significant growth over artistic preferences.
            </p>
            <p>
              We refuse the hacks and deceptive design game. We reject artificial
              scarcity. We disavow fake urgency. Exploiting cognitive biases to trick
              people into decisions they will regret is a race to the bottom — and a
              lousy way to grow a business that wants customers to come back.
            </p>
            <p>
              You don&apos;t need the big CRO agency. You need the{" "}
              <span className="text-hot-deep">right</span> one. Research, design, build
              and analysis run directly — without the account-manager tax, the beer
              taps, or the retainer that only ever climbs.
            </p>
            <p className="display text-3xl text-ink md:text-5xl">
              Kill the hypothesis. Keep the revenue. Power to the users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
