import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="project-card__image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      
      <div className="project-card__content">
        <p className="project-card__category">{project.category}</p>
        <h3 className="project-card__title">
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-card__technologies-item">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-card__footer">
          <Link to={`/projects/${project.id}`} className="project-card__link">
            View Details <ArrowRight size={16} />
          </Link>
          
          <div className="project-card__links">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
                style={{ marginRight: '0.75rem' }}
              >
                <Github size={18} />
              </a>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View live project"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;