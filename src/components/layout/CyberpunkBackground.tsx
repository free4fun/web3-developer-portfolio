import { HexHoneycomb } from "../ui/HexHoneycomb";

type NodeProps = { x: string; y: string; delay?: number; hue?: number; size?: number };
const NeonNode = ({ x, y, delay = 0, hue = 200, size = 40 }: NodeProps) => {
  const glow = `radial-gradient(circle at center,
    hsla(${hue} 100% 60% / .85) 0%,
    hsla(${hue} 100% 60% / .35) 18%,
    hsla(${hue} 100% 60% / .10) 35%,
    transparent 55%)`;
  return (
    <div
      className="absolute pointer-events-none will-change-transform opacity-80"
      style={{
        left: x, top: y, width: size, height: size,
        translate: "-50% -50%", backgroundImage: glow,
        filter: "blur(0.5px)",
        animation: `nodePulse 2.5s ease-in-out ${delay}s infinite`,
      }}
    />
  );
};

export const CyberpunkBackground = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none opacity-60 z-0" aria-hidden>
    {/* HexHoneycomb */}
    <HexHoneycomb />
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