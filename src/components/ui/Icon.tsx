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
  typeorm: 'simple-icons:typeorm',
  ipfs: 'simple-icons:ipfs',
  postgres: 'simple-icons:postgresql',

  // Web3 & Blockchain
  solidity: 'simple-icons:solidity',
  hardhat: 'devicon-plain:hardhat',     // fallback posible: 'logos:hardhat-icon'
  ethers: 'simple-icons:ethers',       // fallback posible: 'logos:ethers'
  graphql: 'file-icons:graphql',

  // Tools & DevOps
  linux: 'simple-icons:linux',
  docker: 'simple-icons:docker',
  git: 'simple-icons:git',
  prometheus: 'simple-icons:prometheus',

  // Social
  telegram: 'simple-icons:telegram',
  github: 'simple-icons:github',
  linkedin: 'simple-icons:linkedin',
  twitter: 'simple-icons:x', // o 'simple-icons:twitter' si prefieres el pajarito

  // UI / Miscelánea (no-brand)
  target: 'lucide:crosshair',
  eye: 'mdi:eye-outline',
  users: 'mdi:users-outline',
  shield: 'mdi:account-lock-outline',
  heart: 'mdi:heart-outline',
  check: 'mdi:account-check-outline',
};


export const Icon = ({name, className = 'h-6 w-6'}: IconProps) => {
  const icon = ICONS[name] ?? 'lucide:circle-help';
  return <Ico icon={icon} className={className} aria-hidden />;
};
