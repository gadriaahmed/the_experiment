"use client";

import { useRef, type MouseEvent, type ReactNode, type RefObject } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  className = "",
  href,
  type = "button",
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.32}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const cls = `inline-flex items-center justify-center gap-2 border border-ink bg-hot px-6 py-3 font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-white transition-transform duration-150 ease-out hover:bg-hot-deep ${className}`;

  if (href) {
    return (
      <a
        href={href}
        ref={ref as RefObject<HTMLAnchorElement>}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        data-magnetic="true"
        aria-label={ariaLabel}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      ref={ref as RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnetic="true"
      aria-label={ariaLabel}
      className={cls}
    >
      {children}
    </button>
  );
}
