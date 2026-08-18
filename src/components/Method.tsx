"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, FlaskConical, Repeat, Split } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "DIAGNOSTIC",
    icon: Activity,
    blurb: "Find what's actually broken before guessing at fixes.",
    body: "Heatmaps, user session recording analysis, analytics audit. Heuristic review. Deceptive-pattern scan. We pull the site apart and rank the leaks.",
    items: [
      "Analytics and session data analysis",
      "Heatmaps and session recordings",
      "Heuristic and deceptive-design review",
      "Prioritised friction map",
    ],
  },
  {
    id: "02",
    title: "HYPOTHESIS",
    icon: FlaskConical,
    blurb: "Prioritising testable user friction points.",
    body: "Research and evidenced hypothesis generation before a single test gets built. If it cannot be falsified, it does not ship.",
    items: [
      "User interviews and usability testing",
      "Prioritised hypothesis backlog",
      "Experiment briefing documents",
      "Kill-criteria defined up front",
    ],
  },
  {
    id: "03",
    title: "EXPERIMENTATION",
    icon: Split,
    blurb: "A/B and multivariate testing. Custom code variants.",
    body: "Variant design, copy, build, and QA. Everything required to run an experiment worth running — not a paint job with a tracking pixel.",
    items: [
      "A/B and multivariate tests",
      "Custom front-end variants",
      "Cross-browser and device QA",
      "Targeting and trigger setup",
    ],
  },
  {
    id: "04",
    title: "ITERATION",
    icon: Repeat,
    blurb: "Permanent implementation of statistical winners.",
    body: "Statistical analysis, structured learning capture, and feeding insight back into the next cycle. Winners ship. Losers die in public.",
    items: [
      "Statistical significance readout",
      "Learning captured and stored",
      "Winner implementation",
      "Hypothesis refinement",
    ],
  },
];

export function Method() {
  return (
    <section id="method" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mono text-[10px] tracking-[0.28em] text-hot uppercase">03 // The method</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.6rem)]">
            You don&apos;t need the big CRO agency. You need{" "}
            <span className="text-hot">the lab</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-mute-on-dark">
            Research, design, build and analysis — four stark steps, no proprietary fog.
            We explain what we&apos;re doing and why.
          </p>
        </div>

        <div className="grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => (
            <FlipCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ step }: { step: (typeof STEPS)[number] }) {
  const [open, setOpen] = useState(false);
  const Icon = step.icon;

  return (
    <article className="bg-void">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-full min-h-[420px] w-full flex-col p-6 text-left md:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="mono text-[11px] tracking-[0.2em] text-lime">{`${step.id} //`}</span>
          <Icon className="h-5 w-5 text-hot" aria-hidden="true" />
        </div>
        <h3 className="display mt-8 text-4xl">{step.title}</h3>
        <p className="mt-4 text-mute-on-dark">{step.blurb}</p>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="mt-6 border-t border-line pt-6 text-sm leading-6 text-paper">{step.body}</p>
              <ul className="mt-4 space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="mono text-[11px] tracking-wide text-lime">
                    ▸ {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <span className="mono mt-auto pt-10 text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
              Click to open the protocol
            </span>
          )}
        </AnimatePresence>
      </button>
    </article>
  );
}
