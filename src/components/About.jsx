import { forwardRef } from 'react';
import Image from 'next/image';
import Carousel from '@/helpers/Carousel';

const About = ({ title }, ref) => {
  const images = [
    '/4thSection/mes2.png',
    '/4thSection/mes3.png',
    '/4thSection/mes1.png',
    '/4thSection/mes4.png',
  ];
  return (
    <div ref={ref}>
      <div className="h-max mt-32 mb-32 flex flex-col align-center justify-center">
        <div className='grid gap-32 relative justify-center'>
          <Image className='absolute brightness-200 top-0 -right-52' src={"/4thSection/Ellipse.svg"} width={700} height={700} alt='about' />
          <Image className='absolute brightness-50 z-10 -top-10 -right-52 scale-y-[-1]' src={"/4thSection/Polygon_right.svg"} width={400} height={300} alt='about' />
          <div className='rounded-[1.5rem] backdrop-contrast-50 bg-[#292932] grid lg:grid-cols-2 grid-cols-1 items-center lg:mx-32 mx-2 md:mx-48 py-16 lg:py-24 px-6 lg:px-8 gap-10'>
            <Image className='mx-auto md:w-full w-64' src={"/profile.webp"} width={600} height={600} />
            <div className='grid justify-start lg:mx-14 mx-0 gap-10'>
              <p className='uppercase lg:text-start text-center text-2xl lg:text-4xl font-bold'>About Me</p>
              <p>Ideas spark in your mind, I make them fly on screens. I'm a passionate full stack developer who transforms visions into delightful, user-centric apps. Let's collaborate!</p>
            </div>
          </div>
          <div>
            <p className='uppercase text-center text-shadow-white text-2xl mb-10 lg:text-5xl font-bold'>
              What my clients say</p>
            <div className='md:px-20 px-2 mx-6 md:mx-32'>
              <Carousel images={images} />
            </div>
          </div>
          <div className='relative flex items-center justify-center'>
            <Image className='absolute -top-56 w-32 lg:w-max right-14' src={"/4thSection/Dots.svg"} width={140} height={100} alt='about' />
            <Image className='absolute -top-16 lg:w-max w-44 left-0 z-10' src={"/6thSection/Polygon_left.svg"} width={650} height={500} alt='about' />
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-10 md:mx-44 lg:mx-20 gap-8 items-center rounded-[1.5rem] p-6 backdrop-brightness-50 bg-[#1d1d27]'>
              <div className='grid gap-6'>
                <p className='uppercase text-2xl lg:text-start text-center lg:text-5xl font-bold'>Mission</p>
                <p>Empowering businesses through innovative and tailored solutions is my mission. I specialize in crafting dynamic desktop, mobile, and web applications that not only meet but exceed the unique needs and aspirations of my clients. With a passion for delivering excellence, I am dedicated to creating impactful digital experiences that drive success and elevate your business to new heights. Let's collaborate to transform your vision into reality and unlock the full potential of your digital presence.</p>
              </div>
              <Image className='z-50' src={"/5thSection/Mission.png"} width={1300} height={1300} alt='about' />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default forwardRef(About);
