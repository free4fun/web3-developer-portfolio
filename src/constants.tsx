import React from 'react';
import { Project, Skill, SocialLink, CoreValueItem, PhilosophyItem } from './types';
import { Icon } from './components/ui/Icon';

export const SKILLS_DATA: { [key: string]: Skill[] } = {
  'Frontend': [
    { name: 'React', icon: <Icon name="react" /> },
    { name: 'TypeScript', icon: <Icon name="typescript" /> },
    { name: 'Next.js', icon: <Icon name="nextjs" /> },
    { name: 'Tailwind CSS', icon: <Icon name="tailwind" /> },
  ],
  'Backend': [
    { name: 'Node.js', icon: <Icon name="nodejs" /> },
    { name: 'Express', icon: <Icon name="express" /> },
    { name: 'GraphQL', icon: <Icon name="graphql" /> },
    { name: 'PostgreSQL', icon: <Icon name="postgres" /> },
  ],
  'Web3 & Blockchain': [
    { name: 'Solidity', icon: <Icon name="solidity" /> },
    { name: 'Hardhat', icon: <Icon name="hardhat" /> },
    { name: 'Ethers.js', icon: <Icon name="ethers" /> },
    { name: 'The Graph', icon: <Icon name="graph" /> },
  ],
  'Tools & DevOps': [
    { name: 'Docker', icon: <Icon name="docker" /> },
    { name: 'Git', icon: <Icon name="git" /> },
    { name: 'Vercel', icon: <Icon name="vercel" /> },
    { name: 'Figma', icon: <Icon name="figma" /> },
  ],
};

export const MISSION_VISION_VALUES_DATA: CoreValueItem[] = [
  {
    title: 'Mission',
        description:
      'To engineer a decentralized digital world that is more open, transparent, and equitable, empowering ' +
      'individuals with true ownership of their assets and data.',
    icon: <Icon name="target" />,
  },
  {
    title: 'Vision',
        description:
      'I envision a future where blockchain is seamlessly integrated into our daily digital interactions, creating a ' +
      'secure and user-centric web that fosters trust and innovation.',
    icon: <Icon name="eye" />
  },
  {
    title: 'Values',
    description:
      'Integrity, robust security, and continuous innovation are the pillars of my work. I build solutions that are ' +
      'not only powerful but also reliable and user-friendly.',
    icon: <Icon name="gem" />
  }
];

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
  {
    title: 'Decentralization First',
     description:
      'I prioritize building systems that are censorship-resistant and distribute control, empowering users and ' +
      'removing single points of failure.',
    icon: <Icon name="users" />
  },
  {
    title: 'User-Centric Security',
    description:
      'Security is not an afterthought. I design with a security-first mindset, ensuring user assets and data are ' +
      'protected through robust, audited code.',
    icon: <Icon name="shield" />
  },
  {
    title: 'Pragmatic Innovation',
    description:
      "While I'm passionate about cutting-edge tech, I choose the right tools for the job, balancing innovation with " +
      "practicality to deliver real-world value.",
    icon: <Icon name="brain" />
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'DeFi Yield Aggregator',
       description:
      'A platform that automatically moves user funds between different DeFi lending protocols to maximize yield. ' +
      'Features a clean dashboard and transaction history.',
    tags: ['Solidity', 'React', 'Ethers.js', 'The Graph', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '',
    repoUrl: 'https://github.com/user/project1',
  },
  {
    title: 'Cyberpunk NFT Marketplace',
    description:
      'A futuristic NFT marketplace for generative art. Users can mint, buy, and sell unique digital assets on the ' +
      'Ethereum blockchain.',
    tags: ['Next.js', 'Solidity', 'Hardhat', 'IPFS', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'DAO Voting System',
      description:
      'A decentralized autonomous organization governance platform. Token holders can create and vote on proposals, ' +
      'shaping the future of the organization.',
    tags: ['React', 'Solidity', 'Snapshot', 'GraphQL', 'TypeScript'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    repoUrl: '',
    liveUrl: '#',
  },
  {
    title: 'Real-time Oracle Network',
    description:
      'A custom oracle solution to bring off-chain data onto the blockchain securely. Used for dynamic pricing in a ' +
      'decentralized prediction market.',
    tags: ['Node.js', 'Solidity', 'Chainlink', 'WebSockets', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    repoUrl: '',
    liveUrl: '',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: '#', icon: <Icon name="github" /> },
  { name: 'LinkedIn', url: '#', icon: <Icon name="linkedin" /> },
  { name: 'Twitter', url: '#', icon: <Icon name="twitter" /> },
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Mission', href: '#mission' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
