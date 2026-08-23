import { Ban, Microscope, ShieldOff } from "lucide-react";
import { withAccent } from "@/lib/accent";
import type { PrincipleItem, PrinciplesContent } from "@/lib/content-types";

const ICONS: Record<PrincipleItem["icon"], typeof Microscope> = {
  microscope: Microscope,
  ban: Ban,
  "shield-off": ShieldOff,
};

export function Principles({ content }: { content: PrinciplesContent }) {
  return (
    <section className="border-b border-line bg-cream text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-20">
        <p className="mono text-center text-[10px] tracking-[0.28em] text-hot-deep uppercase">
          {content.eyebrow}
        </p>
        <h2 className="display mx-auto mt-4 max-w-4xl text-center text-[clamp(2rem,4.5vw,3.8rem)]">
          {withAccent(content.title, "text-hot-deep")}
        </h2>
        <div className="mt-12 grid gap-px bg-ink/15 md:grid-cols-3">
          {content.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article key={item.title} className="bg-paper p-8 text-center">
                <Icon className="mx-auto h-8 w-8 text-hot-deep" aria-hidden="true" />
                <h3 className="display mt-6 text-3xl">{item.title}</h3>
                <p className="mt-4 text-mute">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
