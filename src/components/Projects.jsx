import { motion } from 'framer-motion';
import Image from 'next/image';
import StoriesCards from '@/helpers/StoriesCards';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = {
    featured: [
      {
        id: 1,
        title: "Animated Portfolio",
        navigateTo: "https://animated-portfolio0.vercel.app/",
        srcImage: "/2ndSection/portfolio.png",
        description: "A carefully crafted portfolio with animations and transitions that may suit your needs. This is developed using Next.js with Framer Motion for smooth animations.",
        technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
        category: "Web Development"
      },
      {
        id: 2,
        title: "AI chatbot integration",
        navigateTo: "https://aaron-projects-ai-chatbot.vercel.app/",
        srcImage: "/2ndSection/aichat.png",
        description: "This is developed using Next Js and OpenAi Api version 3.5. The website provides example of correct prompts and response to get the correct or desired output. Feel free to experiment ai chatbot prompts here.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        category: "E-commerce"
      }
    ],
    webApps: [
      {
        id: 3,
        title: "Face Recognition Attendance",
        navigateTo: "https://ifsuattendance.netlify.app",
        srcImage: "/2ndSection/faceRecognition.png",
        description: "Facial recognition web application that can record attendance of students or employees using advanced AI algorithms.",
        technologies: ["React", "TensorFlow.js", "OpenCV", "Machine Learning"],
        category: "AI/ML"
      },
      {
        id: 4,
        title: "Document Processing Cleaner",
        navigateTo: "https://www.npmjs.com/package/document-processing-cleaner",
        srcImage: "/2ndSection/npm.png",
        description: "react-document-cleaner package. A React hook-based utility for processing document images in the browser using DeepLab (TensorFlow.js) and OpenCV.js.",
        technologies: ["React", "TensorFlow.js", "OpenCV.js", "NPM Package"],
        category: "Library/Package"
      }
    ],
    more: [
      {
        id: 5,
        title: "Animated Portfolio",
        navigateTo: "https://animated-portfolio0.vercel.app/",
        srcImage: "/2ndSection/portfolio.png",
        description: "A carefully crafted portfolio with animations and transitions that may suit your needs. This is developed using Next js"
      },
      {
        id: 6,
        title: "E-commerce Platform",
        navigateTo: "https://moon-delivery.vercel.app",
        srcImage: "/2ndSection/ecommerce.png",
        description: "E-commerce web application. Web application that have GUI for Customers, Sellers, Rider and admin."
      },
      {
        id: 7,
        title: "E-Commerce with Payment",
        navigateTo: "https://ecommercewithpayment.vercel.app/",
        srcImage: "/2ndSection/withEpaymentEcommerce.png",
        description: "An e-commerce web application with payment gateway integration using the Stripe API and login authentication using NextAuth for Google and Facebook."
      },
      {
        id: 8,
        title: "Document Processing Cleaner",
        navigateTo: "https://www.npmjs.com/package/document-processing-cleaner",
        srcImage: "/2ndSection/npm.png",
        description: "react-document-cleaner package. A React hook-based utility for processing document images in the browser using DeepLab (TensorFlow.js) and OpenCV.js.",
        buttonText: "View Package"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 px-4"
      >
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-shadow-white">
          My <span className="text-[#2f36ab] text-shadow-blue">Projects</span> Portfolio
        </h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto text-gray-300">
          Explore a collection of innovative projects that showcase my expertise in web development,
          AI/ML integration, and modern technologies. Each project represents a unique solution
          crafted with precision and creativity.
        </p>
      </motion.div>

      {/* Featured Projects Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20 px-4 lg:px-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 text-shadow-white"
        >
          Featured <span className="text-[#2e840d]">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
              hoverColor="#2f36ab"
              buttonColor="#2e840d"
              categoryColor="#2f36ab"
            />
          ))}
        </div>
      </motion.section>

      {/* Web Applications Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20 px-4 lg:px-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 text-shadow-white"
        >
          Web <span className="text-[#2f36ab]">Applications</span> & <span className="text-[#2e840d]">Libraries</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.webApps.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
              hoverColor="#2e840d"
              buttonColor="#2f36ab"
              categoryColor="#2e840d"
            />
          ))}
        </div>
      </motion.section>

      {/* Legacy Projects Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 lg:px-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 text-shadow-white"
        >
          More <span className="text-[#2f36ab]">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.more.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
              hoverColor={index % 2 === 0 ? "#2f36ab" : "#2e840d"}
              buttonColor={index % 2 === 0 ? "#2f36ab" : "#2e840d"}
            />
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20 px-4"
      >
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-shadow-white">
          Ready to Start Your <span className="text-[#2e840d]">Project</span>?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's collaborate to bring your ideas to life. I'm always excited to work on innovative projects
          that challenge creativity and technical expertise.
        </p>
        <a
          target="_blank"
          href="https://www.facebook.com/techibot"
          className="inline-block rounded-full px-8 py-4 bg-[#2e840d] hover:bg-[#2e840d]/80 text-white text-xl transition-colors duration-300"
        >
          Let's Work Together
        </a>
      </motion.div>

      {/* Background Elements */}
      <Image
        className='absolute left-0 lg:-left-20 lg:w-max w-44 -bottom-20 lg:-bottom-60'
        src="/2ndSection/Sound_Waves.svg"
        width={300}
        height={300}
        alt='background decoration'
      />
    </div>
  );
};

export default Projects;
