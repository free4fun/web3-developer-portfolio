import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ id, className = '', children }: SectionProps) => {

  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};