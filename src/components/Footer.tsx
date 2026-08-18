"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "./Marquee";

export function Footer() {
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
      <Marquee
        reverse
        items={[
          "NO FAKE URGENCY",
          "NO DARK PATTERNS",
          "DATA OVER OPINION",
          "KILL THE HYPOTHESIS",
          "POWER TO THE USERS",
        ]}
      />

      <div className="mx-auto max-w-[1440px] px-4 pt-16 pb-8 md:px-10">
        <p className="max-w-2xl text-2xl leading-snug md:text-3xl">
          Most of the web is built to trick you. We&apos;re{" "}
          <span className="text-hot">the other kind</span>.
        </p>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
          <div>
            <p className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">UTC clock</p>
            <p className="mono mt-2 text-3xl text-lime tabular-nums" aria-live="polite">
              {utc} UTC
            </p>
          </div>
          <div>
            <p className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">Legal</p>
            <a href="/privacy" className="mt-2 inline-flex items-center gap-1 text-paper hover:text-hot">
              Privacy policy <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div>
            <p className="mono text-[10px] tracking-[0.2em] text-mute-on-dark uppercase">Social</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="https://www.linkedin.com" className="hover:text-hot" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com" className="hover:text-hot" rel="noreferrer" target="_blank">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="mailto:lab@theexperiment.studio" className="hover:text-hot">
                  lab@theexperiment.studio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line px-2 pt-6 pb-2 md:px-4">
        <p className="display text-[clamp(3.2rem,18vw,14rem)] leading-[0.8] text-paper">
          THE EXPERIMENT
        </p>
      </div>
    </footer>
  );
}
