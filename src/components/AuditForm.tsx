"use client";

import { FormEvent, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import type { AuditFormContent } from "@/lib/content-types";

export function AuditForm({ content }: { content: AuditFormContent }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id={content.id} className="border-b border-line bg-void">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <div className="border-b border-line px-4 py-12 md:px-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:py-24">
          <p className="mono text-[10px] tracking-[0.28em] text-lime uppercase">{content.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,4.2rem)]">{content.title}</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-mute-on-dark">{content.lead}</p>
        </div>

        <div className="px-4 py-12 md:px-10 lg:col-span-7 lg:py-24">
          <div className="border border-line bg-[#070707]">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <p className="mono text-[10px] tracking-[0.2em] text-lime uppercase">{content.prompt}</p>
              <span className="h-2 w-2 bg-hot" aria-hidden="true" />
            </div>

            {sent ? (
              <p className="p-8 text-xl leading-8" role="status">
                {content.success}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6 p-6 md:p-8">
                {content.fields.map((field) => (
                  <Field
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                  />
                ))}
                <div>
                  <label
                    htmlFor="bottleneck"
                    className="mono mb-2 block text-[10px] tracking-[0.2em] text-mute-on-dark uppercase"
                  >
                    {content.bottleneckLabel}
                  </label>
                  <select
                    id="bottleneck"
                    name="bottleneck"
                    required
                    defaultValue=""
                    className="w-full border border-line bg-void px-4 py-3 font-mono text-sm text-paper"
                  >
                    <option value="" disabled>
                      {content.bottleneckPlaceholder}
                    </option>
                    {content.bottlenecks.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <MagneticButton type="submit" className="w-full">
                  {content.submitLabel}
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
