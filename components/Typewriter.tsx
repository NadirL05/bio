"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms par caractère
  delay?: number; // ms avant le démarrage
  className?: string;
  cursor?: boolean;
};

/**
 * Typewriter — affiche le texte caractère par caractère.
 * Respecte prefers-reduced-motion (texte complet immédiat).
 */
export function Typewriter({
  text,
  speed = 28,
  delay = 0,
  className,
  cursor = false,
}: Props) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {shown}
      {cursor && !done ? <span className="cursor-blink">▊</span> : null}
    </span>
  );
}
