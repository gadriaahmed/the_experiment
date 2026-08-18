"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const canvas = canvasRef.current;
    const ring = ringRef.current;
    if (!canvas || !ring) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type Point = { x: number; y: number; life: number };
    const trail: Point[] = [];
    const mouse = { x: w / 2, y: h / 2 };
    const ringPos = { x: w / 2, y: h / 2 };
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      trail.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (trail.length > 28) trail.shift();
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      hovering = Boolean(
        t?.closest("a, button, input, textarea, select, [data-magnetic], [role='button']"),
      );
    };

    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.22;
      ringPos.y += (mouse.y - ringPos.y) * 0.22;
      const scale = hovering ? 2.1 : 1;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      ring.style.borderColor = hovering ? "#ccff00" : "#fe4f20";

      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        p.life *= 0.9;
        const t = i / trail.length;
        ctx.beginPath();
        ctx.fillStyle = t > 0.7 ? `rgba(204,255,0,${p.life * 0.55})` : `rgba(254,79,32,${p.life * 0.45})`;
        ctx.arc(p.x, p.y, 2.4 + t * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      while (trail.length && trail[0].life < 0.04) trail.shift();
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[91] hidden h-4 w-4 rounded-full border border-hot mix-blend-difference md:block"
      />
    </>
  );
}
