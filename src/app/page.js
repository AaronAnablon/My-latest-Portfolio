"use client"
import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import BeAGuest from '@/components/BeAGuest';
import Footer from '@/components/Footer';
import Image from "next/image";


export default function App() {
  const [viewPort, setViewPort] = useState(null);
  const refs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    beAGuestRef: useRef(null),
  };
  const scrollTimerRef = useRef(null);

  useEffect(() => {
    refs[viewPort]?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [viewPort, refs]);

  const handleScroll = () => {
    setViewPort(null);

    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      const scrolledElement = Object.entries(refs).find(([key, ref]) => {
        if (!ref.current) return false;
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
    };
  }, []);
  return (
    <main className={`bg-[#11111b] text-gray-200 overflow-hidden text-sm lg:text-lg font-Montserrat font-normal`}>
      <Header setViewPort={setViewPort} />
      <div className={`max-w-screen-2xl relative mx-auto`}>
        <div className='fixed z-40 rounded-full bottom-10 right-10' onClick={() => scrollToTop()}>
          <Image height={40} width={40} className='rounded-full' src={"Arrow_up.svg"} alt='logo' />
        </div>
        <Image height={1000} width={1000} className='absolute top-0 -left-4' src={"1stSection/Ellipse_green.svg"} alt='bg' />
        <Image height={780} width={980} className='absolute lg:w-max w-60 top-20 lg:top-0 opacity-90 left-0' src={"1stSection/Polygon_bg_left.svg"} alt='bg left design' />
        <Image height={500} width={400} className='absolute lg:w-max w-52 top-80 lg:top-0 -right-6' src={"1stSection/Polygon_bg_right.svg"} alt='bg right design' />
        <Home ref={refs.homeRef} setViewPort={setViewPort} title="Home" />
        <About ref={refs.aboutRef} title="About" />
        <BeAGuest ref={refs.beAGuestRef} title="Be a Guest" />
        <Footer setViewPort={setViewPort} />
      </div>
    </main>
  )
}
