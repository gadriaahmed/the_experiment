"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function money(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
}

function compact(n: number) {
  return new Intl.NumberFormat("en-GB", { notation: "compact", maximumFractionDigits: 1 }).format(n);
}

export function Calculator() {
  const [traffic, setTraffic] = useState(120000);
  const [cvr, setCvr] = useState(2.4);
  const [aov, setAov] = useState(86);

  const math = useMemo(() => {
    const baseline = traffic * (cvr / 100) * aov;
    const lift15 = baseline * 1.15;
    const lift30 = baseline * 1.3;
    return { baseline, lift15, lift30, delta15: lift15 - baseline, delta30: lift30 - baseline };
  }, [traffic, cvr, aov]);

  return (
    <section id="calculator" className="border-b border-line bg-void">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono text-[10px] tracking-[0.28em] text-lime uppercase">02 // Simulator</p>
            <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)]">
              Run the numbers before you run the test.
            </h2>
          </div>
          <p className="max-w-md text-mute-on-dark">
            Drag the sliders. A 15–30% conversion lift is the band we routinely hunt.
            No email gate. No theatre. Just the maths.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-line bg-[#070707]"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="mono text-[10px] tracking-[0.2em] text-lime uppercase">
              root@lab:~$ simulate --lift 0.15:0.30
            </p>
            <span className="mono text-[10px] text-mute-on-dark">LIVE_SESSION</span>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="space-y-10 border-b border-line p-6 md:p-10 lg:border-r lg:border-b-0">
              <Slider
                label="Monthly Traffic"
                value={traffic}
                min={10000}
                max={2000000}
                step={1000}
                display={compact(traffic)}
                onChange={setTraffic}
              />
              <Slider
                label="Current Conversion Rate"
                value={cvr}
                min={0.4}
                max={12}
                step={0.1}
                display={`${cvr.toFixed(1)}%`}
                onChange={setCvr}
              />
              <Slider
                label="Average Order Value"
                value={aov}
                min={12}
                max={480}
                step={1}
                display={money(aov)}
                onChange={setAov}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1">
              <Stat label="Current monthly revenue" value={money(math.baseline)} />
              <Stat
                label="+15% optimisation"
                value={money(math.lift15)}
                delta={`+${money(math.delta15)} / mo`}
                accent="lime"
              />
              <Stat
                label="+30% optimisation"
                value={money(math.lift30)}
                delta={`+${money(math.delta30)} / mo`}
                accent="hot"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (n: number) => void;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div>
      <div className="mb-3 flex items-end justify-between gap-4">
        <label htmlFor={id} className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
          {label}
        </label>
        <span className="mono text-lg text-lime">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={display}
      />
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
  accent,
}: {
  label: string;
  value: string;
  delta?: string;
  accent?: "lime" | "hot";
}) {
  return (
    <div className="border-b border-line p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-r-0">
      <p className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">{label}</p>
      <p className={`display mt-3 text-4xl md:text-5xl ${accent === "hot" ? "text-hot" : accent === "lime" ? "text-lime" : "text-paper"}`}>
        {value}
      </p>
      {delta ? <p className="mono mt-2 text-xs text-mute-on-dark">{delta}</p> : null}
    </div>
  );
}
