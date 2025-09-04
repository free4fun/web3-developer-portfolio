import React from 'react';

export const BackgroundImage = () => (
  <div className="fixed inset-0 -z-50 w-full h-full">
    <img
      src="/images/background.webp"
      alt="Background"
      className="w-full h-full object-cover"
      style={{ position: 'absolute', inset: 0 }}
    />
    <div className="absolute inset-0 bg-black/70" />
  </div>
);