import React from "react";
import { HexHoneycomb } from "../ui/HexHoneycomb";

const halos = {
  backgroundImage: `
    radial-gradient(1200px 800px at 10% -10%, rgba(0,245,255,0.10), transparent 55%),
    radial-gradient(900px 700px at 90% 110%, rgba(255,0,170,0.10), transparent 60%),
    radial-gradient(600px 600px at 70% 20%, rgba(120,0,255,0.10), transparent 65%),
    radial-gradient(1200px 1200px at 50% 50%, #0b0f17 0%, #0b0f17 40%, #0a0d14 100%)
  `,
  backgroundBlendMode: "screen, screen, screen, normal",
};

type NodeProps = { x: string; y: string; delay?: number; hue?: number; size?: number };
const NeonNode = ({ x, y, delay = 0, hue = 200, size = 40 }: NodeProps) => {
  const glow = `radial-gradient(circle at center,
    hsla(${hue} 100% 60% / .85) 0%,
    hsla(${hue} 100% 60% / .35) 18%,
    hsla(${hue} 100% 60% / .10) 35%,
    transparent 55%)`;
  return (
    <div
      className="absolute pointer-events-none will-change-transform"
      style={{
        left: x, top: y, width: size, height: size,
        translate: "-50% -50%", backgroundImage: glow,
        filter: "blur(0.5px)", animation: `ease-in-out ${delay}s nodePulse 0s infinite`,
      }}
    />
  );
};

export const CyberpunkBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
    {/* Halos con parallax leve */}
<div
  className="pointer-events-none will-change-transform"
  style={{
    position: "fixed",
    inset: -220,
    ...halos,
    animation: "halosDrift 30s linear infinite",
  }}
/>

    {/* Panal */}
    <HexHoneycomb />

    {/* Scanlines */}
    <div
      className="absolute inset-0 pointer-events-none mix-blend-soft-light"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)",
        backgroundSize: "100% 3px",
        animation: "flicker 7s ease-in-out infinite",
      }}
    />

    {/* Vignette */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(80% 80% at 50% 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.35) 100%)",
      }}
    />

    {/* Neon nodes */}
<NeonNode x="5%" y="18%" size={70} hue={190} delay={7.0} />
<NeonNode x="75%" y="22%" size={55} hue={310} delay={9.8} />
<NeonNode x="42%" y="40%" size={65} hue={260} delay={3.5} />
<NeonNode x="55%" y="58%" size={80} hue={200} delay={4.2} />
<NeonNode x="15%" y="72%" size={60} hue={330} delay={3.0} />
<NeonNode x="68%" y="78%" size={85} hue={210} delay={4.8} />
<NeonNode x="50%" y="88%" size={72} hue={280} delay={5.6} />
<NeonNode x="91%" y="88%" size={85} hue={310} delay={4.1} />
<NeonNode x="96%" y="28%" size={92} hue={280} delay={7.9} />
  </div>
);
