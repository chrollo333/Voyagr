import { FaPalette, FaComments, FaSearch, FaRocket, FaGlobe, FaHandshake } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: FaPalette,
    title: 'Showcase Your Work',
    description: 'Build a personalized page with your social links, embedded content, and follower stats.',
  },
  {
    icon: FaComments,
    title: 'Community Engagement',
    description: 'Create your own fan forum where you and your audience can discuss content, updates, and more.',
  },
  {
    icon: FaSearch,
    title: 'Get Discovered',
    description: 'Be featured in the global creator directory, sortable by popularity, category, and content type.',
  },
  {
    icon: FaRocket,
    title: 'Promote Yourself',
    description: 'Get featured in premium slots on Voyagr and grow your audience through visibility.',
  },
  {
    icon: FaGlobe,
    title: 'Discover Creators',
    description: 'Follow creators based on your interests, popularity, or content category and never miss updates.',
  },
  {
    icon: FaHandshake,
    title: 'Engage & Support',
    description: 'Join community discussions, tip your favorites, and subscribe to show support.',
  },
];