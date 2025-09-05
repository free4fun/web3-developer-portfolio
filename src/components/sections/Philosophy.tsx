import React from 'react';
import { PHILOSOPHY_DATA } from '../../constants';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { InfoCard } from '../ui/InfoCard';

export const Philosophy = () => {

  return (
    <Section id="philosophy">
      <SectionTitle title="Code & Creed" />
      <p className="text-center max-w-3xl mx-auto mb-16 text-white text-lg font-txt tracking-widest">
        My approach to development is forged in a landscape of noise and code. Every project must be resilient, intuitive, and aligned with the decentralized future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PHILOSOPHY_DATA.map((item, index) => (
          <InfoCard 
            key={index} 
            item={item} 
            animationDelay={`${index * 100}ms`} 
            className="h-full"
          />
        ))}
      </div>
    </Section>
  );
};
