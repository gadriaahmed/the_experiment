"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { withAccent } from "@/lib/accent";
import type { CaseStudiesContent, CaseStudy } from "@/lib/content-types";

export function CaseStudies({ content }: { content: CaseStudiesContent }) {
  return (
    <section id={content.id} className="border-b border-line bg-cream text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono text-[10px] tracking-[0.28em] text-hot-deep uppercase">{content.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.6rem)]">
              {withAccent(content.title, "text-hot-deep")}
            </h2>
          </div>
          <p className="max-w-md text-mute">{content.lead}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {content.studies.map((study) => (
            <StudyCard key={study.brand} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StudyCard({ study }: { study: CaseStudy }) {
  const [side, setSide] = useState<"before" | "after">("after");
  const view = side === "before" ? study.before : study.after;

  return (
    <article className="flex flex-col border border-ink bg-paper">
      <div className="flex items-start justify-between gap-4 border-b border-ink px-6 py-5">
        <div>
          <p className="mono text-[10px] tracking-[0.2em] text-hot-deep uppercase">{study.sector}</p>
          <h3 className="display mt-2 text-4xl">{study.brand}</h3>
        </div>
        <p className="text-right">
          <span className="display block text-4xl text-hot-deep">{study.metric}</span>
          <span className="mono text-[10px] tracking-[0.16em] uppercase">{study.unit}</span>
        </p>
      </div>

      <div className="flex border-b border-ink" role="tablist" aria-label={`${study.brand} experiment view`}>
        {(["before", "after"] as const).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={side === key}
            onClick={() => setSide(key)}
            className={`mono flex-1 px-4 py-3 text-[11px] tracking-[0.2em] uppercase ${
              side === key ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-cream"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="flex-1 p-6">
        <motion.ul
          key={side}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {view.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg">
              <span className="mt-2 block h-2 w-2 shrink-0 bg-hot-deep" aria-hidden="true" />
              {item}
            </li>
          ))}
        </motion.ul>
        <p className="mt-8 border-t border-ink/15 pt-6 text-sm leading-6 text-mute">{study.note}</p>
      </div>
    </article>
  );
}
