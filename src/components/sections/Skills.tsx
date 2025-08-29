import React from 'react';
import { SKILLS_DATA } from '../../constants';
import { Card } from '../ui/Card';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const Skills = () => {
  return (
    <Section id="skills" className="bg-cyber-surface/50">
      <SectionTitle title="Technical Arsenal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <Card key={category} className="animate-slide-in">
            <h3 className="text-xl font-bold text-cyber-accent mb-4 border-b-2 border-cyber-accent/30 pb-2">{category}</h3>
            <ul className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <li key={skill.name} className="flex items-center space-x-3 group">
                  <span className="text-cyber-primary group-hover:text-cyber-accent transition-colors duration-300">
                    {React.cloneElement(skill.icon, { className: "h-6 w-6" })}
                  </span>
                  <span className="text-cyber-text-secondary group-hover:text-cyber-text-primary transition-colors duration-300">{skill.name}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};