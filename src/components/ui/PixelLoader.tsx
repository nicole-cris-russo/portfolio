import { useEffect, useState } from "react";

const COLORS = ["#1f1f1f", "#808080", "#f7f2e8"] as const;
const COLS = 4;
const CELLS = COLS * COLS;
const CELL_SIZE = 7.65;
const GAP = 1.8;

function randomColor(except?: string) {
  let color = COLORS[Math.floor(Math.random() * COLORS.length)];
  if (except && color === except) {
    color =
      COLORS[
        (COLORS.indexOf(color as (typeof COLORS)[number]) + 1) % COLORS.length
      ];
  }
  return color;
}

interface PixelLoaderProps {
  label?: string;
  className?: string;
}

/** Grade 4×4 em que cada pixel pisca aleatoriamente entre preto, cinza e branco. */
export function PixelLoader({
  label = "Carregando",
  className = "",
}: PixelLoaderProps) {
  const [colors, setColors] = useState(() =>
    Array.from({ length: CELLS }, () => randomColor()),
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let cancelled = false;
    const timeouts: number[] = [];

    const schedule = (index: number) => {
      timeouts[index] = window.setTimeout(
        () => {
          if (cancelled) return;
          setColors((prev) => {
            const next = [...prev];
            next[index] = randomColor(prev[index]);
            return next;
          });
          schedule(index);
        },
        50 + Math.random() * 600,
      );
    };

    for (let i = 0; i < CELLS; i++) schedule(i);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <span
      role="status"
      aria-label={label}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <span
        className="grid"
        style={{
          gap: `${GAP}px`,
          gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
        }}
      >
        {colors.map((color, index) => (
          <span
            key={index}
            className="block"
            style={{
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              backgroundColor: color,
            }}
          />
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
