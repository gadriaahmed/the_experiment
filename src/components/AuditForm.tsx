"use client";

import { FormEvent, useState } from "react";
import { MagneticButton } from "./MagneticButton";

const BOTTLENECKS = [
  "Checkout / payment",
  "Landing page / paid traffic",
  "Onboarding / activation",
  "Pricing / offer clarity",
  "Trust / deceptive patterns we inherited",
  "Not sure — that's the point of the audit",
];

export function AuditForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="audit" className="border-b border-line bg-void">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <div className="border-b border-line px-4 py-12 md:px-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:py-24">
          <p className="mono text-[10px] tracking-[0.28em] text-lime uppercase">05 // Request an audit</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,4.2rem)]">
            Start an experiment.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-mute-on-dark">
            Send the URL. Tell us the bottleneck. We will tell you if we are the right
            lab — and if we are not, we will say so. If &apos;growth with integrity&apos;
            sounds like marketing BS to you... good. That is the filter.
          </p>
        </div>

        <div className="px-4 py-12 md:px-10 lg:col-span-7 lg:py-24">
          <div className="border border-line bg-[#070707]">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <p className="mono text-[10px] tracking-[0.2em] text-lime uppercase">
                audit.request --interactive
              </p>
              <span className="h-2 w-2 bg-hot" aria-hidden="true" />
            </div>

            {sent ? (
              <p className="p-8 text-xl leading-8" role="status">
                Request queued. We will open the lab notes and reply from a human —
                not a sequence. Check your inbox.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6 p-6 md:p-8">
                <Field
                  id="url"
                  label="Website URL"
                  name="url"
                  type="url"
                  required
                  placeholder="https://"
                  autoComplete="url"
                />
                <Field
                  id="traffic"
                  label="Current monthly traffic"
                  name="traffic"
                  type="text"
                  required
                  placeholder="e.g. 80,000 sessions"
                />
                <Field
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  autoComplete="email"
                />
                <div>
                  <label htmlFor="bottleneck" className="mono mb-2 block text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
                    Primary bottleneck
                  </label>
                  <select
                    id="bottleneck"
                    name="bottleneck"
                    required
                    defaultValue=""
                    className="w-full border border-line bg-void px-4 py-3 font-mono text-sm text-paper"
                  >
                    <option value="" disabled>
                      Select a friction point
                    </option>
                    {BOTTLENECKS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <MagneticButton type="submit" className="w-full">
                  Transmit audit request
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type,
  required,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono mb-2 block text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full border border-line bg-void px-4 py-3 font-mono text-sm text-paper placeholder:text-mute"
      />
    </div>
  );
}
