"use client";

import { motion } from "framer-motion";
import { withAccent } from "@/lib/accent";
import type { ManifestoContent } from "@/lib/content-types";

export function Manifesto({ content }: { content: ManifestoContent }) {
  return (
    <section id={content.id} className="border-b border-line bg-paper text-ink">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <div className="border-b border-ink/15 px-4 py-10 md:px-10 lg:col-span-4 lg:border-r lg:border-b-0">
          <p className="mono text-[10px] tracking-[0.28em] text-hot-deep uppercase">{content.eyebrow}</p>
          <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.6rem)]">
            {withAccent(content.title, "text-hot-deep")}
          </h2>
        </div>

        <div className="px-4 py-12 md:px-12 lg:col-span-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl space-y-7 text-xl leading-9 text-mute md:text-[1.65rem] md:leading-[1.55]"
          >
            {content.paragraphs.map((p) => (
              <p key={p}>{withAccent(p, "text-hot-deep")}</p>
            ))}
            <p className="display text-3xl text-ink md:text-5xl">{content.closer}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
