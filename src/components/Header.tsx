"use client";

import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";

const LINKS = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#method", label: "Method" },
  { href: "#results", label: "Results" },
  { href: "#audit", label: "Audit" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line bg-void/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a
          href="#main-content"
          className="mono text-[13px] tracking-[0.22em] uppercase text-paper"
          aria-label="The Experiment home"
        >
          THE_EXPERIMENT
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-void/70 px-2 py-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="mono inline-block rounded-full px-4 py-1.5 text-[10px] tracking-[0.16em] uppercase text-mute-on-dark transition-colors hover:bg-paper hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <MagneticButton href="#audit">Start An Experiment</MagneticButton>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-px w-5 bg-paper" />
            <span className="block h-px w-5 bg-paper" />
            <span className="block h-px w-5 bg-paper" />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-void px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="mono block border border-line px-4 py-3 text-xs tracking-[0.16em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#audit"
                className="mono block bg-hot px-4 py-3 text-center text-xs tracking-[0.16em] uppercase text-white"
                onClick={() => setOpen(false)}
              >
                Start An Experiment
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
