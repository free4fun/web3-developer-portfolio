import React, { useEffect, useState } from "react";

const S = 20; // igual a --s
const M = 3; // igual a --m
const CELL_W = S;
const STEP_Y = 1.732 * S + 4 * M; // == ::before width

export const HexHoneycomb = () => {
  const [count, setCount] = useState(0);

useEffect(() => { const calc = () => { 
  const w = window.innerWidth + 160; // coincide con inset:-80px
  const h = window.innerHeight + 160;
  const cols = Math.ceil(w / (CELL_W + 2 * M)) + 2;
  const rows = Math.ceil(h / STEP_Y) + 2;
  setCount(cols * rows);
}; calc(); window.addEventListener("resize", calc); return () => window.removeEventListener("resize", calc); }, []);
  return (
    <div className="honey-main pointer-events-none">
      <div className="honey-container">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="honey-cell" />
        ))}
      </div>
    </div>
  );
};
