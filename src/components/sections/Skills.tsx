import React from 'react';
import { SKILLS_DATA } from '../../constants';
import { Card } from '../ui/Card';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-cyber-surface/30">
      <SectionTitle title="Technical Arsenal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category} className="hover:-translate-y-2 transition-transform duration-300 will-change-transform">
            <Card className="animate-slide-in">
              <h3 className="text-xl font-title tracking-widest font-bold text-cyber-secondary mb-4 border-b-2 border-cyber-secondary/30 pb-2">{category}</h3>
              <ul className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <li key={skill.name} className="flex items-center space-x-2 group">
                    <span className="inline-flex items-center justify-center h-8 w-8 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300">
                      {React.cloneElement(skill.icon, { className: 'h-8 w-8' })}
                    </span>
                    <span className="text-cyber-primary text-lg font-txt tracking-widest group-hover:text-cyber-text-primary transition-colors duration-300">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};
