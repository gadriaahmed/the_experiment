"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "./Marquee";
import { withAccent } from "@/lib/accent";
import type { FooterContent } from "@/lib/content-types";

export function Footer({ content }: { content: FooterContent }) {
  const [utc, setUtc] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setUtc(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "UTC",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="bg-void">
      <Marquee reverse items={content.marquee} />

      <div className="mx-auto max-w-[1440px] px-4 pt-16 pb-8 md:px-10">
        <p className="max-w-2xl text-2xl leading-snug md:text-3xl">
          {withAccent(content.tagline, "text-hot")}
        </p>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
          <div>
            <p className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
              {content.clockLabel}
            </p>
            <p className="mono mt-2 text-3xl text-lime tabular-nums" aria-live="polite">
              {utc} UTC
            </p>
          </div>
          <div>
            <p className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
              {content.legalLabel}
            </p>
            <a
              href={content.privacyHref}
              className="mt-2 inline-flex items-center gap-1 text-paper hover:text-hot"
            >
              {content.privacyLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div>
            <p className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">
              {content.socialLabel}
            </p>
            <ul className="mt-2 space-y-1">
              {content.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="hover:text-hot"
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line px-2 pt-6 pb-2 md:px-4">
        <p className="display text-[clamp(3.2rem,18vw,14rem)] leading-[0.8] text-paper">
          {content.wordmark}
        </p>
      </div>
    </footer>
  );
}
