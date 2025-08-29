import React from 'react';
import { PHILOSOPHY_DATA } from '../../constants';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { InfoCard } from '../ui/InfoCard';

export const Philosophy = () => {

  return (
    <Section id="philosophy">
      <SectionTitle title="Code & Creed" />
      <p className="text-center max-w-3xl mx-auto text-cyber-text-secondary mb-16">
        My approach to development is guided by a set of core principles that ensure every project is not just functional, but also resilient, user-friendly, and future-proof.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PHILOSOPHY_DATA.map((item, index) => (
          <InfoCard 
            key={index} 
            item={item} 
            animationDelay={`${index * 100}ms`} 
          />
        ))}
      </div>
    </Section>
  );
};
