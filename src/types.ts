import type { ReactElement } from 'react';
import type { IconProps } from './components/ui/Icon';

export interface Skill {
  name: string;
  icon: ReactElement<IconProps>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactElement<IconProps>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface CoreValueItem {
  title: string;
  description: string;
  icon: ReactElement<IconProps>;
}

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: ReactElement<IconProps>;
}
