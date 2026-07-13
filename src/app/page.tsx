'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import {
  FaBriefcase,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRegCommentDots,
  FaRegThumbsUp,
  FaSearch,
  FaShare,
  FaTiktok,
  FaUserFriends,
} from 'react-icons/fa';
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPuppeteer,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiVite,
  SiVisualstudio,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const projects = [
  {
    title: 'Animated Portfolio',
    url: 'https://animated-portfolio0.vercel.app/',
    image: '/projects/portfolio.png',
    description: 'A carefully crafted portfolio with smooth animations and transitions, built to turn a personal story into an engaging digital experience.',
    tags: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: 'AI Chatbot Integration',
    url: 'https://aaron-projects-ai-chatbot.vercel.app/',
    image: '/projects/aichat.png',
    description: 'An AI-powered chat experience with practical prompt examples that help users get clearer and more useful responses.',
    tags: ['Next.js', 'OpenAI API', 'React'],
  },
  {
    title: 'Face Recognition Attendance',
    url: 'https://ifsuattendance.netlify.app',
    image: '/projects/faceRecognition.png',
    description: 'A facial-recognition web application that records student or employee attendance and simplifies day-to-day tracking.',
    tags: ['React', 'TensorFlow.js', 'OpenCV', 'Machine Learning'],
  },
  {
    title: 'Document Processing Cleaner',
    url: 'https://www.npmjs.com/package/document-processing-cleaner',
    image: '/projects/npm.png',
    description: 'A reusable React utility for cleaning document images in the browser with DeepLab and OpenCV.js.',
    tags: ['NPM', 'React', 'TensorFlow.js', 'OpenCV.js'],
  },
  {
    title: 'E-commerce with Payment',
    url: 'https://ecommercewithpayment.vercel.app/',
    image: '/projects/withEpaymentEcommerce.png',
    description: 'A complete storefront experience with Stripe payments and social authentication for a smooth customer journey.',
    tags: ['Next.js', 'Stripe', 'NextAuth'],
  },
  {
    title: 'React QR Code Generator',
    url: 'https://www.npmjs.com/package/react-qr-code-generator-by-aaron',
    image: '/projects/qrcodegenerator.png',
    description: 'A lightweight, easy-to-use QR code generator that helps React developers ship useful QR features with minimal setup.',
    tags: ['React', 'NPM Package', 'QR Code'],
  },
];

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#d6a800' },
  { name: 'React', icon: SiReact, color: '#087ea4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#111827' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#3c873a' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#087ea4' },
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss3, color: '#1572b6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#0891b2' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Firebase', icon: SiFirebase, color: '#f59e0b' },
  { name: 'SQLite', icon: SiSqlite, color: '#0f80cc' },
  { name: 'Vite', icon: SiVite, color: '#646cff' },
  { name: 'Jest', icon: SiJest, color: '#99425b' },
  { name: 'Puppeteer', icon: SiPuppeteer, color: '#00a778' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  { name: 'Visual Basic', icon: SiVisualstudio, color: '#5c2d91' },
];

const testimonials = [
  '/testimonials/mes2.png',
  '/testimonials/mes3.png',
  '/testimonials/mes1.png',
  '/testimonials/mes4.png',
];

const getProjectId = (title: string) => `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;

function ProjectPost({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <article id={getProjectId(project.title)} className='profile-card project-post'>
      <div className='post-author'>
        <Image src='/hero/profile.png' width={48} height={48} alt='Aaron Anablon' className='post-avatar' />
        <div>
          <h2>Aaron Anablon <span>• 1st</span></h2>
          <p>Full-Stack Software Engineer</p>
          <p>{index + 1}w • Public</p>
        </div>
      </div>
      <div className='post-copy'>
        <p><strong>{project.title}</strong></p>
        <p>{project.description}</p>
        <p className='hashtags'>{project.tags.map((tag) => `#${tag.replace(/[^a-z0-9]/gi, '')}`).join(' ')}</p>
      </div>
      <a href={project.url} target='_blank' rel='noreferrer' className='project-media' aria-label={`Open ${project.title}`}>
        <Image src={project.image} width={900} height={520} alt={`${project.title} preview`} sizes='(max-width: 768px) 100vw, 620px' />
        <span>View project <FaExternalLinkAlt /></span>
      </a>
      <div className='post-stats'><span>💡 {liked ? '48' : '47'}</span><span>3 comments</span></div>
      <div className='post-actions'>
        <button onClick={() => setLiked(!liked)} className={liked ? 'liked' : ''} aria-pressed={liked}><FaRegThumbsUp /> Like</button>
        <a href={`mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(project.url)}`}><FaRegCommentDots /> Comment</a>
        <a href={project.url} target='_blank' rel='noreferrer'><FaShare /> Share</a>
      </div>
    </article>
  );
}

function TestimonialPost() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [liked, setLiked] = useState(false);

  const showPrevious = () => setCurrentSlide((slide) => (slide === 0 ? testimonials.length - 1 : slide - 1));
  const showNext = () => setCurrentSlide((slide) => (slide === testimonials.length - 1 ? 0 : slide + 1));

  return (
    <article className='profile-card project-post testimonial-post'>
      <div className='post-author'>
        <Image src='/hero/profile.png' width={48} height={48} alt='Aaron Anablon' className='post-avatar' />
        <div>
          <h2>Aaron Anablon <span>• 1st</span></h2>
          <p>Full-Stack Software Engineer</p>
          <p>3w • Public</p>
        </div>
      </div>
      <div className='post-copy'>
        <p><strong>What clients say about working with me</strong></p>
        <p>Good products come from clear communication, trust, and thoughtful execution. Here are a few messages clients have shared.</p>
        <p className='hashtags'>#ClientFeedback #Testimonials #SoftwareEngineering</p>
      </div>
      <div
        className='testimonial-carousel'
        role='region'
        aria-roledescription='carousel'
        aria-label='Client testimonials'
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') showPrevious();
          if (event.key === 'ArrowRight') showNext();
        }}
      >
        <div className='testimonial-slide' aria-live='polite'>
          <Image
            key={testimonials[currentSlide]}
            src={testimonials[currentSlide]}
            width={900}
            height={520}
            alt={`Client testimonial ${currentSlide + 1} of ${testimonials.length}`}
            sizes='(max-width: 768px) 100vw, 620px'
          />
        </div>
        <button type='button' className='carousel-arrow carousel-previous' onClick={showPrevious} aria-label='Previous testimonial'><FaChevronLeft /></button>
        <button type='button' className='carousel-arrow carousel-next' onClick={showNext} aria-label='Next testimonial'><FaChevronRight /></button>
        <div className='carousel-dots' aria-label={`Slide ${currentSlide + 1} of ${testimonials.length}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial}
              type='button'
              className={index === currentSlide ? 'is-active' : ''}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
      <div className='post-stats'><span>💡 {liked ? '39' : '38'}</span><span>{currentSlide + 1} of {testimonials.length}</span></div>
      <div className='post-actions'>
        <button onClick={() => setLiked(!liked)} className={liked ? 'liked' : ''} aria-pressed={liked}><FaRegThumbsUp /> Like</button>
        <button type='button'><FaRegCommentDots /> Comment</button>
        <button type='button'><FaShare /> Share</button>
      </div>
    </article>
  );
}

function MessageComposer({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senderEmail, message }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Unable to send your message right now.');

      setSenderEmail('');
      setMessage('');
      setStatus('Your message was sent. I’ll get back to you soon.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send your message right now.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id='contact' className={`profile-card messaging-card messaging-dock ${isOpen ? 'is-open' : 'is-collapsed'}`} aria-label='Contact messaging panel'>
      <div className='messaging-header'>
        <div>
          <Image src='/hero/profile.png' width={32} height={32} alt='' />
          <span className='online-dot' />
          <strong>Messaging</strong>
        </div>
        <button type='button' className='message-toggle' onClick={onToggle} aria-expanded={isOpen} aria-controls='message-composer-body' aria-label={isOpen ? 'Collapse contact form' : 'Open contact form'}>
          {isOpen ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      </div>
      <div id='message-composer-body' className='messaging-body' aria-hidden={!isOpen}>
        <div className='message-recipient'>
          <Image src='/hero/profile.png' width={42} height={42} alt='Aaron Anablon' />
          <div><strong>Aaron Anablon</strong><small>Full-Stack Software Engineer • Available</small></div>
        </div>
        <form onSubmit={sendMessage} className='message-form'>
          <label>
            <span>Your email</span>
            <input type='email' value={senderEmail} onChange={(event) => setSenderEmail(event.target.value)} placeholder='name@example.com' required tabIndex={isOpen ? 0 : -1} />
          </label>
          <label>
            <span>Message</span>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder='Write a message…' minLength={5} required tabIndex={isOpen ? 0 : -1} />
          </label>
          {status && <p className='message-status' role='status'>{status}</p>}
          <div className='message-toolbar'>
            <span>Start a conversation</span>
            <button type='submit' disabled={isSending || !isOpen} tabIndex={isOpen ? 0 : -1}><FaPaperPlane /> {isSending ? 'Sending…' : 'Send'}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ProfilePage() {
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const openMessaging = () => setIsMessagingOpen(true);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchSuggestions = normalizedQuery
    ? projects.filter((project) =>
      project.title.toLowerCase().includes(normalizedQuery)
      || project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)),
    )
    : [];

  const selectProject = (project: (typeof projects)[number]) => {
    setSearchQuery(project.title);
    setIsSearchFocused(false);
    requestAnimationFrame(() => {
      document.getElementById(getProjectId(project.title))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <main className='site-shell'>
      <header className='topbar'>
        <div className='topbar-inner'>
          <a href='#top' className='brand' aria-label='Aaron Anablon home'>AA</a>
          <div className='search-wrapper'>
            <label className='search-box'>
              <FaSearch />
              <span className='sr-only'>Search projects by name or technology</span>
              <input
                type='search'
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && searchSuggestions[0]) {
                    event.preventDefault();
                    selectProject(searchSuggestions[0]);
                  }
                  if (event.key === 'Escape') setIsSearchFocused(false);
                }}
                placeholder='Search projects or skills'
                aria-controls='search-suggestions'
                aria-expanded={isSearchFocused && Boolean(normalizedQuery)}
                aria-autocomplete='list'
                aria-label='Search projects by name or technology'
              />
            </label>
            {isSearchFocused && normalizedQuery && (
              <div id='search-suggestions' className='search-suggestions' role='listbox' aria-label='Project suggestions'>
                {searchSuggestions.length > 0 ? searchSuggestions.map((project) => (
                  <button
                    key={project.title}
                    type='button'
                    role='option'
                    aria-selected='false'
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => selectProject(project)}
                  >
                    <Image src={project.image} width={46} height={38} alt='' />
                    <span><strong>{project.title}</strong><small>{project.tags.join(' • ')}</small></span>
                  </button>
                )) : <p>No matching projects or skills.</p>}
              </div>
            )}
          </div>
          <nav aria-label='Primary navigation'>
            <a href='#top'><FaHome /><span>Home</span></a>
            <a href='#projects'><FaBriefcase /><span>Projects</span></a>
            <a href='#skills'><FaCode /><span>Skills</span></a>
            <button type='button' onClick={openMessaging} aria-label='Open contact form'><FaUserFriends /><span>Contact</span></button>
          </nav>
        </div>
      </header>

      <div id='top' className='profile-layout'>
        <aside className='left-column'>
          <section className='profile-card profile-summary'>
            <div className='cover'><div className='cover-grid' /></div>
            <Image src='/hero/profile.png' width={112} height={112} alt='Aaron Anablon' className='profile-photo' priority />
            <div className='summary-body'>
              <h1>Aaron Anablon</h1>
              <p className='headline'>Full-Stack Software Engineer</p>
              <p className='location'><FaMapMarkerAlt /> Philippines • Open to remote work</p>
              <p className='connections'>274 connections</p>
              <div className='profile-actions'>
                <button type='button' onClick={openMessaging} className='primary-button'>Contact me</button>
                <a href='https://www.linkedin.com/in/aaronpanablon/' target='_blank' rel='noreferrer' className='secondary-button'>LinkedIn</a>
              </div>
            </div>
          </section>

          <section className='profile-card about-card'>
            <h2>About</h2>
            <p>I build maintainable applications that connect real business needs with dependable technical execution. I enjoy turning raw ideas into production-ready web and mobile experiences.</p>
          </section>

          <section className='profile-card experience-card'>
            <h2>Focus</h2>
            <div><span className='focus-icon'><FaCode /></span><p><strong>Product engineering</strong><br /><small>Web, mobile, APIs and automation</small></p></div>
            <div><span className='focus-icon'><FaBriefcase /></span><p><strong>Client collaboration</strong><br /><small>From discovery to dependable delivery</small></p></div>
          </section>
        </aside>

        <section id='projects' className='feed' aria-label='Project posts'>
          <div className='profile-card feed-intro'>
            <div><span>Featured work</span><h2>Projects I’ve posted</h2></div>
            <p>Scroll through selected products, experiments and open-source work.</p>
          </div>
          {projects.slice(0, 2).map((project, index) => <ProjectPost key={project.title} project={project} index={index} />)}
          <TestimonialPost />
          {projects.slice(2).map((project, index) => <ProjectPost key={project.title} project={project} index={index + 2} />)}
        </section>

        <aside id='skills' className='right-column'>
          <section className='profile-card skills-card'>
            <div className='section-heading'><div><span>Expertise</span><h2>Skills</h2></div><small>Scroll to explore</small></div>
            <div className='skills-scroll' tabIndex={0} aria-label='Scrollable skills list'>
              {skills.map(({ name, icon: Icon, color }) => (
                <div className='skill-row' key={name}>
                  <span style={{ color }}><Icon /></span>
                  <div><strong>{name}</strong><small>Professional working proficiency</small></div>
                </div>
              ))}
            </div>
          </section>

          <section className='profile-card social-card'>
            <span>Connect with me</span>
            <div className='social-links'>
              <a href='https://www.linkedin.com/in/aaronpanablon/' target='_blank' rel='noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
              <a href='https://www.facebook.com/techibot/' target='_blank' rel='noreferrer' aria-label='Facebook'><FaFacebook /></a>
              <a href='https://www.instagram.com/techibot02/' target='_blank' rel='noreferrer' aria-label='Instagram'><FaInstagram /></a>
              <a href='https://www.tiktok.com/@techibot02' target='_blank' rel='noreferrer' aria-label='TikTok'><FaTiktok /></a>
              <a href='https://github.com/' target='_blank' rel='noreferrer' aria-label='GitHub'><FaGithub /></a>
              <a href='mailto:aaronpanablon@gmail.com' aria-label='Email'><FaEnvelope /></a>
            </div>
          </section>
          <footer>© {new Date().getFullYear()} Aaron Anablon</footer>
        </aside>
      </div>
      <MessageComposer isOpen={isMessagingOpen} onToggle={() => setIsMessagingOpen((open) => !open)} />
    </main>
  );
}
