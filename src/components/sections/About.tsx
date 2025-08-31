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
          gm.
I’m free4fun.
Fullstack developer.
White belt in the arts of blockchain.</p>
<p>
Driven by an obsession with decentralized technology.
Born almost by accident in a horizon full of digital noise.
Once I saw the magnitude of this crypto-philosophical engine.
I moved forward without pause in its direction.</p>
<p>
I design digital experiences that are transparent and secure.
Control returns to the hands of the user.
With the mix of frontend and backend in my arsenal.
I translate encrypted chain logic into clear interfaces.
I enjoy deciphering challenges.
From smart contract architectures.
To squeezing every drop of performance out of a dApp.</p>
<p>
When I leave the keyboard, I stay connected.
Tracking mutations of the crypto ecosystem.
Contributing to open-source projects.
Finding inspiration in the cyberpunk vision.
Always focused on building the decentralized future.</p>
        </div>
      </div>
    </Section>
  );
};
