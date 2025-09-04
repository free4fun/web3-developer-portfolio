import React from 'react';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <div className="text-center mb-12 glitch-container">
    <h2
      className="text-2xl sm:text-4xl font-bold text-cyber-primary tracking-widest font-title animate-text-glow-primary glitch whitespace-nowrap"
      data-text={`[ ${title} ]`}
    >
      {`[ ${title} ]`}
    </h2>
  </div>
);
