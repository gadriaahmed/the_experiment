"use client";

const FAQS = [
  {
    q: "What does ethical optimisation mean here?",
    a: "Boosting conversions by removing pain and clarifying decisions — not by manipulating people. We will not ask you to ship anything you could not defend to a customer's face.",
  },
  {
    q: "Won't this leave money on the table?",
    a: "In the shortest term you could squeeze a few extra sales by confusing people. Then you lose the ones who work out they have been had. The ethics-versus-results trade-off is a fiction sold by people whose model depends on hacks.",
  },
  {
    q: "What if we ask for something you won't do?",
    a: "We will say why, then offer an alternative aimed at the same business goal. Fake countdown timers and hidden opt-outs are not a strategy. They are a confession.",
  },
  {
    q: "Who do you partner with?",
    a: "Businesses that care whether customers come back. If you sell something useful and would rather grow through respect than through tricks, we will get on. If your model depends on misleading people, we are not the lab.",
  },
];

export function StraightTalk() {
  return (
    <section className="border-b border-line bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24">
        <p className="mono text-[10px] tracking-[0.28em] text-hot-deep uppercase">
          FAQ // Straight talk
        </p>
        <h2 className="display mt-4 max-w-4xl text-[clamp(2rem,4.5vw,4rem)]">
          Ethics <span className="text-hot-deep">first</span> for results that{" "}
          <span className="text-hot-deep">last</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-mute">
          If &apos;growth with integrity&apos; sounds like marketing BS to you... good.
          Here is what we mean.
        </p>

        <div className="mt-12 divide-y divide-ink/20 border-y border-ink/20">
          {FAQS.map((item) => (
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
