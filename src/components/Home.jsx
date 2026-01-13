import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StoriesCards from '@/helpers/StoriesCards';


const Home = ({ }, ref) => {

  return (
    <div ref={ref}>
      <div className="h-max grid gap-24 justify-center pt-52">
        <div className={`grid sm:grid-cols-1 lg:gap-0 gap-16 md:grid-cols-2`}>
          <div className='p-4 flex items-center'>
            <div className='relative lg:ml-24'>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: 'spring' }}
                className='lg:text-4xl text-2xl text-shadow-black uppercase font-bold'>Your Favorite
                <span className='lg:text-5xl text-2xl gap-2 font-extrabold flex'>
                  <ins className='text-[#2f36ab] text-shadow-blue'>Developer </ins><p> </p>
                </span>
                IS always Available for your needs</motion.h1>
              <p className='my-10 text-sm lg:mx-0 lg:text-xl'>Arrange a meeting for us to discuss your use case and let us make it up and running for your users.</p>
              <a target='blank' href="https://www.facebook.com/techibot"
                className='rounded-full absolute -bottom-16 w-max flex items-center text-xl px-8 py-4 bg-[#2e840d]'>
                Chat with me
              </a>
            </div>
          </div>
          <div className='relative flex px-10 justify-center'>
            <Image className='absolute right-10 -bottom-10 pb-10' src={"1stSection/Sound_Waves_icon.svg"} width={100} height={100} alt='blog' />
            <Image className='absolute right-14 lg:w-max w-20 lg:right-32 top-3' src={"/Logo.png"} width={100} height={100} alt='blog' />
            <Image className='z-10 w-72 rounded-full border-2 border-blue-600 lg:w-96' src={"/1stSection/profile.png"} width={506} height={660} alt='blog' />
            <Image className='absolute -lg:left-14 left-6 z-20 bottom-14 lg:bottom-24 w-64 lg:w-max' src={"/1stSection/horizontal_Image.png"} width={323} height={85} alt='blog' />
          </div>
        </div>
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
            These represent a selection of projects I've crafted for my clients. Please note that these are placeholders designed to safeguard the privacy and confidentiality of my valued clientele.</p>
          <div className='grid justify-center z-10 lg:p-10 px-8 py-4 gap-2 lg:gap-8'>
            <div className='lg:flex grid gap-2 lg:gap-12'>
              <StoriesCards navigateTo={"https://animated-portfolio0.vercel.app/"}
                srcImage={"/2ndSection/portfolio.png"}
                width={200}
                height={150}
                text={"A carefully crafted portfolio with animations and transitions that may suit your needs. This is developed using Next js"}
                alt={"Stories cards"} />
              <StoriesCards navigateTo={"https://ecommercewithpayment.vercel.app/"}
                srcImage={"/2ndSection/withEpaymentEcommerce.png"}
                width={200}
                text={"An e-commerce web application with payment gateway integration using the Stripe API and login authentication using NextAuth for Google and Facebook."}
                height={150}
                alt={"Stories cards"} />
            </div>
            <div className='lg:flex grid gap-2 lg:gap-12'>
              <StoriesCards navigateTo={"https://ifsuattendance.netlify.app"}
                srcImage={"/2ndSection/faceRecognition.png"}
                width={200}
                height={150}
                text={"Facial recogniton web application that can record attendance of students or employees."}
                alt={"Stories cards"} />
              <StoriesCards navigateTo={"https://www.npmjs.com/package/document-processing-cleaner"}
                srcImage={"/2ndSection/npm.png"}
                width={200}
                text={"react-document-cleaner package. A React hook-based utility for processing document images in the browser using DeepLab (TensorFlow.js) and OpenCV.js."}
                height={150}
                alt={"Stories cards"} />
            </div>
            <div className='flex justify-center'>
              <Link href="/projects" className='px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg text-white transition-colors duration-300'>
                More Projects
              </Link>
            </div>
          </div>
          <Image className='absolute left-0 lg:-left-20 lg:w-max w-44 -bottom-20 lg:-bottom-60' src={"2ndSection/Sound_Waves.svg"} width={300} height={300} alt='blog' />
        </div>
      </div>

    </div >
  );
}

export default forwardRef(Home);

