import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StoriesCards from '@/helpers/StoriesCards';
import { projectsData } from '@/data/projects';
import { HERO_SECTION, HOME_FEATURED_PROJECTS_COUNT } from '@/constants/config';
import type { SectionWithViewportProps } from '@/types';

const Home = forwardRef<HTMLDivElement, SectionWithViewportProps>(({ title, setViewPort }, ref) => {
  // Get featured projects from shared data
  const featuredProjects = projectsData.slice(0, HOME_FEATURED_PROJECTS_COUNT);

  return (
    <div ref={ref}>
      <div className='h-max grid gap-24 justify-center pt-52'>
        <div className='grid sm:grid-cols-1 lg:gap-0 gap-16 md:grid-cols-2'>
          <div className='p-4 flex items-center'>
            <div className='relative lg:ml-24'>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: 'spring' }}
                className='lg:text-4xl text-2xl text-shadow-black uppercase font-bold'
              >
                Your
                <span className='lg:text-5xl text-2xl gap-2 font-extrabold flex'>
                  <ins className='text-[#2f36ab] text-shadow-blue'>Engineer </ins><p> </p>
                </span>
                IS always Available for your needs
              </motion.h1>
              <p className='my-10 text-sm lg:mx-0 lg:text-xl'>{HERO_SECTION.subHeading}</p>
              <button
                type='button'
                onClick={() => setViewPort?.('footerRef')}
                className='rounded-full absolute -bottom-16 w-max flex items-center text-xl px-8 py-4 bg-[#2e840d] hover:bg-[#266d08] transition-colors duration-200'
              >
                {HERO_SECTION.ctaButtonText}
              </button>
            </div>
          </div>
          <div className='relative flex px-10 justify-center'>
            <Image className='absolute right-10 -bottom-10 pb-10' src={'/hero/Sound_Waves_icon.svg'} width={100} height={100} alt='decorative sound waves' />
            <Image className='absolute right-14 lg:w-max w-20 lg:right-32 top-3' src={'/assets/logo.png'} width={100} height={100} alt='logo' />
            <Image className='z-10 w-72 rounded-full border-2 border-blue-600 lg:w-96' src={'/hero/profile.png'} width={506} height={660} alt='Aaron Anablon profile' priority />
            <Image className='absolute -lg:left-14 left-6 z-20 bottom-14 lg:bottom-24 w-64 lg:w-max' src={'/hero/horizontal_Image.png'} width={323} height={85} alt='decorative horizontal image' />
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className='grid gap-6 relative justify-center'>
          <div className='flex flex-wrap text-shadow-white text-2xl lg:text-5xl font-extrabold justify-center gap-2 uppercase'>
            <p>My</p>
            <p className='text-[#2f36ab]'>Projects</p>
            <p>that</p>
            <p className='whitespace-nowrap'>help you</p>
            <p className='whitespace-nowrap'> grow your</p>
            <p className='text-[#2e840d]'>mind</p>
          </div>
          <p className='text-center px-4'>
            These represent a selection of projects I've crafted for my clients. Please note that these are placeholders designed to safeguard the privacy and confidentiality of my valued clientele.
          </p>

          <div className='grid justify-center z-10 lg:p-10 px-8 py-4 gap-2 lg:gap-8'>
            {/* Dynamically render featured projects in pairs */}
            {Array.from({ length: Math.ceil(featuredProjects.length / 2) }).map((_, rowIndex) => (
              <div key={rowIndex} className='lg:flex grid gap-2 lg:gap-12'>
                {[0, 1].map((colIndex) => {
                  const projectIndex = rowIndex * 2 + colIndex;
                  if (projectIndex >= featuredProjects.length) return null;
                  const project = featuredProjects[projectIndex];
                  return (
                    <StoriesCards
                      key={project.title}
                      navigateTo={project.url}
                      srcImage={project.image}
                      width={200}
                      height={150}
                      text={project.description}
                      alt={project.title}
                    />
                  );
                })}
              </div>
            ))}

            <div className='flex justify-center'>
              <Link
                href='/projects'
                className='px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg text-white transition-colors duration-300'
              >
                More Projects
              </Link>
            </div>
          </div>
          <Image className='absolute left-0 lg:-left-20 lg:w-max w-44 -bottom-20 lg:-bottom-60' src={'/projects/Sound_Waves.svg'} width={300} height={300} alt='decorative sound waves background' />
        </div>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
