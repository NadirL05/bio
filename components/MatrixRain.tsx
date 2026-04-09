"use client";

import { useEffect, useRef } from "react";

/**
 * MatrixRain — fond animé "pluie de caractères" style Matrix.
 * Canvas full-screen, fixed, derrière le contenu.
 * Respecte prefers-reduced-motion (canvas vide si actif).
 */
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respecte le réglage utilisateur "réduire les mouvements"
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎ<>{}[]()/*+-=";

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      columns = Math.floor(w / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
      ctx.font = `${fontSize}px var(--font-geist-mono), ui-monospace, monospace`;
    };

    let last = 0;
    const TICK_MS = 60; // ralentit l'effet pour qu'il reste lisible

    const draw = (t: number) => {
      if (t - last >= TICK_MS) {
        last = t;
        // Trail noir semi-transparent → effet de traînée qui s'efface
        ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
        ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

        for (let i = 0; i < drops.length; i++) {
          const ch = charset[Math.floor(Math.random() * charset.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Tête lumineuse
          ctx.fillStyle = "rgba(57, 255, 20, 0.95)";
          ctx.shadowColor = "#39ff14";
          ctx.shadowBlur = 8;
          ctx.fillText(ch, x, y);

          // Queue verte plus sombre
          ctx.shadowBlur = 0;
          ctx.fillStyle = "rgba(0, 143, 17, 0.55)";
          ctx.fillText(ch, x, y - fontSize);

          if (y > canvas.height / dpr && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none opacity-40"
    />
  );
}
