import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ 
  project, 
  variants, 
  hoverColor = '#2f36ab',
  buttonColor = '#2f36ab',
  categoryColor = '#2f36ab'
}) => {
  return (
    <motion.div
      variants={variants}
      className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-[${hoverColor}] transition-all duration-300 hover:transform hover:scale-105`}
      style={{ '--hover-color': hoverColor }}
    >
      <div className="mb-4">
        <Image 
          src={project.srcImage} 
          width={400} 
          height={250} 
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.category && (
            <span 
              className="text-xs px-2 py-1 rounded-full text-white"
              style={{ backgroundColor: categoryColor }}
            >
              {project.category}
            </span>
          )}
        </div>
        <p className="text-gray-300 text-sm">{project.description}</p>
        {project.technologies && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-slate-700 text-xs px-2 py-1 rounded-md text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <a 
          href={project.navigateTo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-white px-6 py-2 rounded-lg transition-colors duration-300"
          style={{ 
            backgroundColor: buttonColor,
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          {project.buttonText || 'View Project'}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
