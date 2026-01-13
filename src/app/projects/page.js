"use client"
import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Image from "next/image";

export default function ProjectsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={`bg-[#11111b] text-gray-200 overflow-hidden text-sm lg:text-lg font-Montserrat font-normal`}>
      <Header />
      <div className={`max-w-screen-2xl relative mx-auto`}>
        <div className='fixed z-40 rounded-full bottom-10 right-10' onClick={() => scrollToTop()}>
          <Image height={40} width={40} className='rounded-full' src={"/Arrow_up.svg"} alt='scroll to top' />
        </div>
        <Image height={1000} width={1000} className='absolute top-0 -left-4' src={"/1stSection/Ellipse_green.svg"} alt='bg' />
        <Image height={780} width={980} className='absolute lg:w-max w-60 top-20 lg:top-0 opacity-90 left-0' src={"/1stSection/Polygon_bg_left.svg"} alt='bg left design' />
        <Image height={500} width={400} className='absolute lg:w-max w-52 top-80 lg:top-0 -right-6' src={"/1stSection/Polygon_bg_right.svg"} alt='bg right design' />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
