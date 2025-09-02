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
  { name: 'TypeORM', icon: <Icon name="typeorm" /> },
  { name: 'PostgreSQL', icon: <Icon name="postgres" /> },
  { name: 'IPFS', icon: <Icon name="ipfs" /> },
  ],
  'Web3 & Blockchain': [
    { name: 'Solidity', icon: <Icon name="solidity" /> },
    { name: 'Hardhat', icon: <Icon name="hardhat" /> },
    { name: 'Ethers.js', icon: <Icon name="ethers" /> },
    { name: 'GraphQL', icon: <Icon name="graphql" /> },
  ],
  'Tools & DevOps': [
    { name: 'Linux', icon: <Icon name="linux" /> },
    { name: 'Docker', icon: <Icon name="docker" /> },
    { name: 'Git', icon: <Icon name="git" /> },
    { name: 'Prometheus', icon: <Icon name="prometheus" /> },
  ],
};

export const MISSION_VISION_VALUES_DATA: CoreValueItem[] = [
{
  title: 'Mission',
  description:
    'Engineer a decentralized digital world — open, transparent, and equitable — where individuals reclaim true ownership of assets and data.',
  icon: <Icon name="target" />,
},
{
  title: 'Vision',
  description:
    'A future where blockchain runs through daily interactions, shaping a secure, verifiable, and user-driven web that fuels constant innovation.',
  icon: <Icon name="eye" />
},
{
  title: 'Values',
  description:
    'Integrity as code. Security as armor. Innovation as survival. Solutions forged to endure, built for clarity and power in a decentralized age.',
  icon: <Icon name="heart" />,
}
];

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
  {
    title: 'Decentralization First',
     description:
      'I build systems where power is distributed, resistance is intrinsic, and no single point can silence the network.',
    icon: <Icon name="users" />
  },
  {
    title: 'User-Centric Security',
    description:
      'Security is written into every line of code. User assets and data remain protected through hardened, verifiable logic.',
    icon: <Icon name="shield" />
  },
  {
    title: 'Pragmatic Innovation',
    description:
      "I explore the edge of technology, but I wield tools with precision. Innovation is nothing without practicality and impact in the real world.",
    icon: <Icon name="check" />
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'DeFi Yield Aggregator',
       description:
      'A platform that automatically moves user funds between different DeFi lending protocols to maximize yield. ' +
      'Features a clean dashboard and transaction history.',
    tags: ['Solidity', 'React', 'Ethers.js', 'The Graph', 'Node.js'],
    imageUrl: 'images/projectDefiYieldAggregator.webp',
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'Cyberpunk NFT Marketplace',
    description:
      'A futuristic NFT marketplace for generative art. Users can mint, buy, and sell unique digital assets on the ' +
      'Ethereum blockchain.',
    tags: ['Next.js', 'Solidity', 'Hardhat', 'IPFS', 'Tailwind CSS'],
    imageUrl: 'images/projectMarketplaceNFT.webp',
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'DAO Voting System',
      description:
      'A decentralized autonomous organization governance platform. Token holders can create and vote on proposals, ' +
      'shaping the future of the organization.',
    tags: ['React', 'Solidity', 'Snapshot', 'GraphQL', 'TypeScript'],
    imageUrl: 'images/projectDAO.webp',
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'Real-time Oracle Network',
    description:
      'A custom oracle solution to bring off-chain data onto the blockchain securely. Used for dynamic pricing in a ' +
      'decentralized prediction market.',
    tags: ['Node.js', 'Solidity', 'Chainlink', 'WebSockets', 'PostgreSQL'],
    imageUrl: 'images/projectNetworkOracle.webp',
    repoUrl: '',
    liveUrl: '',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://www.github.com/free4fun', icon: <Icon name="github" /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/free4fun', icon: <Icon name="linkedin" /> },
  { name: 'Twitter', url: 'https://www.x.com/fr334fun', icon: <Icon name="twitter" /> },
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Mission', href: '#mission' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
