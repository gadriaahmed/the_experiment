"use client";

import { withAccent } from "@/lib/accent";
import type { StraightTalkContent } from "@/lib/content-types";

export function StraightTalk({ content }: { content: StraightTalkContent }) {
  return (
    <section className="border-b border-line bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24">
        <p className="mono text-[10px] tracking-[0.28em] text-hot-deep uppercase">{content.eyebrow}</p>
        <h2 className="display mt-4 max-w-4xl text-[clamp(2rem,4.5vw,4rem)]">
          {withAccent(content.title, "text-hot-deep")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-mute">{content.lead}</p>

        <div className="mt-12 divide-y divide-ink/20 border-y border-ink/20">
          {content.faqs.map((item) => (
            <div key={item.q} className="grid gap-4 py-8 md:grid-cols-12">
              <h3 className="display text-2xl md:col-span-5">{item.q}</h3>
              <p className="text-lg leading-8 text-mute md:col-span-7">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
