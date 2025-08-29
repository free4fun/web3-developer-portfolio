import React from 'react';
import { MISSION_VISION_VALUES_DATA } from '../../constants';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { InfoCard } from '../ui/InfoCard';

export const Mission = () => {

  return (
    <Section id="mission" className="bg-cyber-surface/50">
      <SectionTitle title="Mission & Creed" />
      <p className="text-center max-w-3xl mx-auto text-cyber-text-secondary mb-16">
        Beyond code, my work is driven by a core mission, a clear vision for the future of the web, and a set of unwavering values that guide every decision.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MISSION_VISION_VALUES_DATA.map((item, index) => (
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