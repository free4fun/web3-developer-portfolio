import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const About = () => {

  return (
    <Section id="about">
      <SectionTitle title="About Me" />
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <Card key="about-card" className="p-0 overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/avatar/400/500" 
              alt="Alex Doe Portrait" 
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            />
          </Card>
        </div>
        <div className="md:col-span-3 text-cyber-text-secondary text-lg space-y-4">
          <p>
            Hello! I'm Alex, a fullstack developer with a deep-seated passion for blockchain technology and the decentralized web. My journey into Web3 was driven by a desire to build more transparent, secure, and user-empowering digital experiences.
          </p>
          <p>
            With a background in both frontend artistry and backend architecture, I bridge the gap between complex blockchain logic and intuitive, engaging user interfaces. I thrive on challenges, from designing intricate smart contract systems to optimizing dApp performance.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest developments in the crypto space, contributing to open-source projects, or diving into cyberpunk fiction for inspiration.
          </p>
        </div>
      </div>
    </Section>
  );
};
