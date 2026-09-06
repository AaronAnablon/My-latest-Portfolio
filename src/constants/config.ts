/**
 * Application configuration and constants
 * Centralized place for all hardcoded values
 */

export const SITE_CONFIG = {
  title: 'Aaron Anablon | Full-Stack Software Engineer',
  description: 'Full-stack software engineer specializing in web development, AI/ML integration, and modern technologies.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aaron-anablon.com',
  author: 'Aaron Anablon',
  email: 'aaronpanablon@gmail.com',
  phone: '+63', // Add if needed
  location: 'Philippines',
  openToRemote: true,
  connections: 274,
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/aaronpanablon/',
  facebook: 'https://www.facebook.com/techibot/',
  instagram: 'https://www.instagram.com/techibot02/',
  tiktok: 'https://www.tiktok.com/@techibot02',
  github: 'https://github.com/',
  email: 'mailto:aaronpanablon@gmail.com',
};

export const NAVIGATION = {
  home: '#top',
  projects: '#projects',
  skills: '#skills',
  contact: '#contact',
};

export const HERO_SECTION = {
  mainHeading: 'Your Engineer IS always Available for your needs',
  subHeading: 'Arrange a meeting for us to discuss your use case and let us make it up and running for your users.',
  ctaButtonText: 'Send me an email',
};

export const ABOUT_SECTION = {
  heading: 'About',
  content:
    'I build maintainable applications that connect real business needs with dependable technical execution. I enjoy turning raw ideas into production-ready web and mobile experiences.',
};

export const FOCUS_SECTION = {
  heading: 'Focus',
  items: [
    {
      title: 'Product engineering',
      description: 'Web, mobile, APIs and automation',
    },
    {
      title: 'Client collaboration',
      description: 'From discovery to dependable delivery',
    },
  ],
};

export const HOME_FEATURED_PROJECTS_COUNT = 4;

export const COLORS = {
  primary: '#2f36ab',
  secondary: '#2e840d',
  dark: '#111827',
  light: '#f3f4f6',
};
