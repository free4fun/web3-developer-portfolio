export const Scanlines = () => (
      <div
        className="absolute inset-0 pointer-events-none mix-blend-soft-light"
        style={{
          opacity: 0.55,
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.18) 0px, transparent 6px)",
          backgroundSize: "100% 6px",
          animation: "flicker 1s ease-in-out infinite",
        }}
      />
    );