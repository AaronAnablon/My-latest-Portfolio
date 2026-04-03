'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import BeAGuest from '@/components/BeAGuest';
import Footer from '@/components/Footer';
import type { ViewportKey } from '@/types';

export default function App() {
  const [viewPort, setViewPort] = useState<ViewportKey | null>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const beAGuestRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const refs = {
    homeRef,
    aboutRef,
    beAGuestRef,
  };

  useEffect(() => {
    if (!viewPort) {
      return;
    }

    refs[viewPort].current?.scrollIntoView({ behavior: 'smooth' });
  }, [viewPort]);

  const handleScroll = () => {
    setViewPort(null);

    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    scrollTimerRef.current = setTimeout(() => {
      const entries = Object.entries(refs) as [ViewportKey, React.RefObject<HTMLDivElement>][];
      const scrolledElement = entries.find(([, ref]) => {
        if (!ref.current) {
          return false;
        }

        const rect = ref.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      if (scrolledElement) {
        setViewPort(scrolledElement[0]);
      }
    }, 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  return (
    <main className='bg-[#11111b] text-gray-200 overflow-hidden text-sm lg:text-lg font-Montserrat font-normal'>
      <Header setViewPort={setViewPort} />
      <div className='max-w-screen-2xl relative mx-auto'>
        <div className='fixed z-40 rounded-full bottom-10 right-10' onClick={scrollToTop}>
          <Image height={40} width={40} className='rounded-full' src='/Arrow_up.svg' alt='logo' />
        </div>
        <Image height={1000} width={1000} className='absolute top-0 -left-4' src='/1stSection/Ellipse_green.svg' alt='bg' />
        <Image height={780} width={980} className='absolute lg:w-max w-60 top-20 lg:top-0 opacity-90 left-0' src='/1stSection/Polygon_bg_left.svg' alt='bg left design' />
        <Image height={500} width={400} className='absolute lg:w-max w-52 top-80 lg:top-0 -right-6' src='/1stSection/Polygon_bg_right.svg' alt='bg right design' />
        <Home ref={homeRef} setViewPort={setViewPort} title='Home' />
        <About ref={aboutRef} title='About' />
        <BeAGuest ref={beAGuestRef} title='Be a Guest' />
        <Footer setViewPort={setViewPort} />
      </div>
    </main>
  );
}