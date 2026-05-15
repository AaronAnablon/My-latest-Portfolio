'use client';

import { forwardRef, useState, type FormEvent } from 'react';
import Image from 'next/image';
import SocialMediaIcons from '@/helpers/SocialMediaIcons';
import type { SectionWithViewportProps, ViewportKey } from '@/types';

const Footer = forwardRef<HTMLDivElement, SectionWithViewportProps>(({ setViewPort }, ref) => {
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleScrollToSection = (reference: ViewportKey) => {
    setViewPort?.(reference);
  };

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senderEmail, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message right now.');
      }

      setSenderEmail('');
      setMessage('');
      setStatusMessage('Thanks, your message has been sent.');
      alert('Thanks, your message has been sent.');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unable to send your message right now.';
      setStatusMessage(errorMessage);
      alert(errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div ref={ref} id='contact' className='border-t relative bg-[#11111b]'>
      <Image className='absolute bottom-0' height={1500} width={1500} src={'/footer/Looper_bg.svg'} alt='bg' />
      <div className='grid lg:mx-28 pt-10 lg:py-32 relative z-10'>
        <div className='lg:flex grid gap-12 lg:items-start justify-center lg:justify-between'>
          <div className='grid gap-6'>
            <div className='flex bg-white rounded-full justify-center'>
              <Image
                height={180}
                width={180}
                onClick={() => handleScrollToSection('homeRef')}
                src={'/Logo.png'}
                alt='logo'
              />
            </div>
            <div className='flex justify-center'>
              <p className='w-64 text-center text-sm'>Send an email for project inquiries, or connect with me on Facebook and other social platforms.</p>
            </div>
          </div>

          <form onSubmit={handleEmailSubmit} className='grid gap-4 w-[min(90vw,420px)]'>
            <p className='text-2xl font-bold text-white'>Send me an email</p>
            <input
              className='rounded-lg border border-gray-600 bg-[#171724] px-4 py-3 text-white outline-none focus:border-[#2e840d]'
              type='email'
              value={senderEmail}
              onChange={(event) => setSenderEmail(event.target.value)}
              placeholder='Your email address'
              required
            />
            <textarea
              className='min-h-36 rounded-lg border border-gray-600 bg-[#171724] px-4 py-3 text-white outline-none focus:border-[#2e840d]'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder='Tell me about your project'
              required
            />
            <button
              type='submit'
              disabled={isSending}
              className='rounded-full bg-[#2e840d] px-8 py-4 text-xl text-white hover:bg-[#2e840d]/80 disabled:cursor-not-allowed disabled:opacity-70'
            >
              {isSending ? 'Sending...' : 'Send me an email'}
            </button>
            {statusMessage && <p className='text-sm text-gray-300'>{statusMessage}</p>}
          </form>

          <div className='grid gap-4 justify-center'>
            <a
              href='https://www.facebook.com/techibot/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-gray-500 px-8 py-4 text-center text-white hover:bg-gray-400'
            >
              Contact me on Facebook
            </a>
            <div className='grid gap-2 justify-center'>
              <p>Social media to connect with me:</p>
              <div className='flex justify-center z-50 gap-6'>
                <SocialMediaIcons width={28} height={28} navigateTo={'https://www.facebook.com/techibot/'} srcImage={'/footer/Facebook_logo.svg'} alt={'fb'} />
                <SocialMediaIcons width={28} height={28} navigateTo={'https://www.instagram.com/techibot02/'} srcImage={'/footer/Instagram_logo.svg'} alt={'Instagram'} />
                <SocialMediaIcons width={28} height={28} navigateTo={'https://www.linkedin.com/in/aaronpanablon/'} srcImage={'/footer/Linkedin_logo.svg'} alt={'linkedin'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-gray-500 border-t text-sm mt-10 mx-6 lg:mx-32 py-10'>©{new Date().getFullYear()}, All Rights Reserved.</p>
    </div>
  );
});

Footer.displayName = 'Footer';

export default Footer;
