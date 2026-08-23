"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, FlaskConical, Repeat, Split } from "lucide-react";
import { withAccent } from "@/lib/accent";
import type { MethodContent, MethodStep } from "@/lib/content-types";

const ICONS: Record<MethodStep["icon"], typeof Activity> = {
  activity: Activity,
  "flask-conical": FlaskConical,
  split: Split,
  repeat: Repeat,
};

export function Method({ content }: { content: MethodContent }) {
  return (
    <section id={content.id} className="border-b border-line bg-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mono text-[10px] tracking-[0.28em] text-hot uppercase">{content.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.6rem)]">
            {withAccent(content.title, "text-hot")}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-mute-on-dark">{content.lead}</p>
        </div>

        <div className="grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
          {content.steps.map((step) => (
            <FlipCard key={step.id} step={step} openHint={content.openHint} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ step, openHint }: { step: MethodStep; openHint: string }) {
  const [open, setOpen] = useState(false);
  const Icon = ICONS[step.icon];

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
              {openHint}
            </span>
          )}
        </AnimatePresence>
      </button>
    </article>
  );
}
