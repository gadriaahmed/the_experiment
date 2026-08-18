import { Ban, Microscope, ShieldOff } from "lucide-react";

const ITEMS = [
  {
    icon: Microscope,
    title: "Out of Step",
    body: "Your funnel has problems (maybe). Some are fixable in a day. Some go deeper. We find them, rank them, test them, and kill the ones that fail.",
  },
  {
    icon: Ban,
    title: "No More Heroes",
    body: "The industry runs on mystification — frameworks dressing up the same practice as proprietary method. We explain what we're doing and why.",
  },
  {
    icon: ShieldOff,
    title: "Ever been cheated?",
    body: "Fake urgency. Hidden opt-outs. Consent theatre. We identify every manipulative pattern, explain the cost, and propose replacements that still convert.",
  },
];

export function Principles() {
  return (
    <section className="border-b border-line bg-cream text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-20">
        <p className="mono text-center text-[10px] tracking-[0.28em] text-hot-deep uppercase">
          Be real and be likeable
        </p>
        <h2 className="display mx-auto mt-4 max-w-4xl text-center text-[clamp(2rem,4.5vw,3.8rem)]">
          Optimise with <span className="text-hot-deep">integrity</span> &amp; grow
          with trust.
        </h2>
        <div className="mt-12 grid gap-px bg-ink/15 md:grid-cols-3">
          {ITEMS.map((item) => {
            const Icon = item.icon;
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
