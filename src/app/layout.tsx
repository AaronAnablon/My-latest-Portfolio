import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import Favicon from '../../public/favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aaron Anablon Portfolio',
  description: 'Aaron anablon Business page',
  icons: [{ rel: 'icon', url: Favicon.src }],
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