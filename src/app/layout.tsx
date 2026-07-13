import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import Favicon from '../../public/assets/favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Aaron Anablon | Full-Stack Software Engineer',
  description: 'Explore Aaron Anablon’s full-stack projects, technical skills, and professional profile.',
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    title: 'Aaron Anablon | Full-Stack Software Engineer',
    description: 'Projects, skills, and professional experience in one connected portfolio.',
    type: 'website',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Aaron Anablon professional portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaron Anablon | Full-Stack Software Engineer',
    description: 'Projects, skills, and professional experience in one connected portfolio.',
    images: ['/og.png'],
  },
  verification: {
    google: 'hIjirSgOXU2TNGYRlajftvngJ3Os6fyauSrQhzNzWxc',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
