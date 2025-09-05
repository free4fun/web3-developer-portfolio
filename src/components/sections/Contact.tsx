import React from 'react';
import { SOCIAL_LINKS } from '../../constants';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const Contact = () => {

  return (
    <Section id="contact" className="bg-cyber-surface/30">
      <div className="text-center">
        <SectionTitle title="Connect" />
        <p className="mb-8 max-w-3xl mx-auto text-lg font-txt tracking-widest text-white">
          Open to new code, bold visions, and networks that break the old systems. Let’s connect and build the decentralized future.
        </p>
        <div className="flex justify-center items-center space-x-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-cyber-primary hover:text-cyber-secondary transition-transform duration-300 hover:scale-125"
            >
              {React.cloneElement(link.icon, { className: "h-10 w-10" })}
            </a>
          ))}
        </div>
        <div className="mt-12 text-lg font-title tracking-widest text-cyber-secondary animate-text-glow-secondary">
          <a href="mailto:gm@free4fun.dev">gm@free4fun.dev</a>
        </div>
      </div>
    </Section>
  );
};