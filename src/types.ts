import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';

export type ViewportKey = 'homeRef' | 'aboutRef' | 'beAGuestRef';

export interface SectionProps {
  title?: string;
}

export interface SectionWithViewportProps extends SectionProps {
  setViewPort?: (reference: ViewportKey) => void;
}

export interface Project {
  id: number;
  title: string;
  navigateTo: string;
  srcImage: string;
  description: string;
  technologies?: string[];
  category?: string;
  buttonText?: string;
}

export interface ProjectCardProps {
  project: Project;
  variants?: Variants;
  hoverColor?: string;
  buttonColor?: string;
  categoryColor?: string;
}

export interface BeAGuestCardProps {
  navigateTo?: string;
  icon: ReactNode;
  text: string;
}

export interface CarouselProps {
  images: string[];
}

export interface SocialMediaIconsProps {
  navigateTo: string;
  srcImage: string;
  alt: string;
  width: number;
  height: number;
}

export interface StoriesCardsProps {
  navigateTo: string;
  srcImage: string;
  width: number;
  height: number;
  alt: string;
  text: string;
}