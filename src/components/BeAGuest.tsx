import { forwardRef } from 'react';
import Image from 'next/image';
import BeAGuestCards from '@/helpers/BeAGuestCards';
import type { SectionWithViewportProps } from '@/types';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiMongodb,
  SiNextdotjs,
  SiMysql,
  SiJavascript,
  SiNodedotjs,
  SiVite,
  SiPuppeteer,
  SiJest,
  SiFirebase,
  SiSqlite,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiVisualstudio } from 'react-icons/si';

const BeAGuest = forwardRef<HTMLDivElement, SectionWithViewportProps>(({ title }, ref) => {
  return (
    <div ref={ref}>
      <div className='grid gap-12 pb-32 lg:pb-96 max-w-screen-xl mx-auto relative justify-center'>
        <Image className='absolute bottom-0 -right-24' src={'/Logo.png'} alt='logo' width={800} height={1200} />
        <Image className='absolute -bottom-96 -right-24' src={'/6thSection/Polygon_left.svg'} width={400} height={400} alt='about' />
        <p className='uppercase text-center font-bold text-2xl lg:text-5xl'>Skills</p>
        <p className='text-center mx-2 lg:mx-52'>By choosing to collaborate with me, clients become integral participants in the creation of bespoke projects, each one a testament to our shared commitment to innovation and success. Together, we embark on a journey to transform ideas into reality and elevate digital experiences to unparalleled heights.</p>
        <div className='flex flex-wrap text-gray-300 justify-center lg:mx-32 gap-4'>
          <BeAGuestCards text='Visual Basic' icon={<SiVisualstudio className='text-blue-600' size={32} />} />
          <BeAGuestCards text='HTML' icon={<SiHtml5 className='text-orange-600' size={32} />} />
          <BeAGuestCards text='JAVASCRIPT' icon={<SiJavascript className='text-yellow-600' size={32} />} />
          <BeAGuestCards text='CSS' icon={<SiCss3 className='text-blue-600' size={32} />} />
          <BeAGuestCards text='TAILWIND' icon={<SiTailwindcss className='text-blue-600' size={32} />} />
          <BeAGuestCards text='PUPPETEER' icon={<SiPuppeteer className='text-green-600' size={32} />} />
          <BeAGuestCards text='JEST' icon={<SiJest className='text-red-600' size={32} />} />
          <BeAGuestCards text='BOOTSTRAP' icon={<SiBootstrap className='text-violet-600' size={32} />} />
          <BeAGuestCards text='REACT' icon={<SiReact className='text-blue-600' size={32} />} />
          <BeAGuestCards text='NEXT JS' icon={<SiNextdotjs className='text-black bg-white rounded-full' size={32} />} />
          <BeAGuestCards text='VITE' icon={<SiVite className='text-yellow-600' size={32} />} />
          <BeAGuestCards text='NODE JS' icon={<SiNodedotjs className='text-green-600' size={32} />} />
          <BeAGuestCards text='REACT NATIVE' icon={<TbBrandReactNative className='text-blue-600' size={32} />} />
          <BeAGuestCards text='MYSQL' icon={<SiMysql className='text-blue-600' size={32} />} />
          <BeAGuestCards text='SQLITE' icon={<SiSqlite className='text-blue-600' size={32} />} />
          <BeAGuestCards text='MONGODB' icon={<SiMongodb className='text-green-600' size={32} />} />
          <BeAGuestCards text='FIREBASE' icon={<SiFirebase className='text-yellow-600' size={32} />} />
        </div>
      </div>
    </div>
  );
});

BeAGuest.displayName = 'BeAGuest';

export default BeAGuest;