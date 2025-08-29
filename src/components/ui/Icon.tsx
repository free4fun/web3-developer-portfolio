import React from 'react';
import { Icon as Ico } from '@iconify/react';

export interface IconProps {
  name: string;
  className?: string;
}

const ICONS: Record<string, string> = {
  // Frontend
  react: 'simple-icons:react',
  typescript: 'simple-icons:typescript',
  nextjs: 'simple-icons:nextdotjs',
  tailwind: 'simple-icons:tailwindcss',

  // Backend
  nodejs: 'simple-icons:nodedotjs',
  express: 'simple-icons:express',
  graphql: 'simple-icons:graphql',
  postgres: 'simple-icons:postgresql',

  // Web3 & Blockchain
  solidity: 'simple-icons:solidity',
  hardhat: 'simple-icons:hardhat',     // fallback posible: 'logos:hardhat-icon'
  ethers: 'simple-icons:ethers',       // fallback posible: 'logos:ethers'
  graph: 'simple-icons:thegraph',

  // Tools & DevOps
  docker: 'simple-icons:docker',
  git: 'simple-icons:git',
  vercel: 'simple-icons:vercel',
  figma: 'simple-icons:figma',

  // Social
  github: 'simple-icons:github',
  linkedin: 'simple-icons:linkedin',
  twitter: 'simple-icons:x', // o 'simple-icons:twitter' si prefieres el pajarito

  // UI / Miscelánea (no-brand)
  target: 'lucide:target',
  eye: 'lucide:eye',
  gem: 'lucide:gem',
  users: 'lucide:users',
  shield: 'lucide:shield',
  brain: 'lucide:brain',
};


export const Icon = ({name, className = 'h-6 w-6'}: IconProps) => {
  const icon = ICONS[name] ?? 'lucide:circle-help';
  return <Ico icon={icon} className={className} aria-hidden />;
};
