import React from 'react';
import { SOCIAL_LINKS } from '../../constants';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const Contact = () => {

  return (
    <Section id="contact" className="bg-cyber-surface/50">
      <div className="text-center">
        <SectionTitle title="Connect" />
        <p className="mb-8 max-w-2xl mx-auto">
          Open to new projects, bold ideas, and opportunities to build ambitious visions. Let’s connect.
        </p>
        <div className="flex justify-center items-center space-x-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-cyber-text-secondary hover:text-cyber-primary transition-transform duration-300 hover:scale-125"
            >
              {React.cloneElement(link.icon, { className: "h-8 w-8" })}
            </a>
          ))}
        </div>
        <div className="mt-12 font-mono text-cyber-secondary">
          <a href="mailto:gm@free4fun.dev" className="hover:underline">gm@free4fun.dev</a>
        </div>
      </div>
    </Section>
  );
};