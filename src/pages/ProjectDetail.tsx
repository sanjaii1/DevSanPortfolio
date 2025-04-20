import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, Calendar, User } from 'lucide-react';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');
  
  useEffect(() => {
    if (!project) {
      // Redirect to projects page if project not found
      navigate('/projects');
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            <Link 
              to="/projects" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'var(--primary-color)',
                fontWeight: 500,
              }}
            >
              <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
              Back to Projects
            </Link>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: 'var(--spacing-md)' }}
          >
            {project.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--text-color-light)'
            }}>
              <Calendar size={16} style={{ marginRight: '0.5rem' }} />
              Year: {project.year}
            </div>
            
            {project.client && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'var(--text-color-light)'
              }}>
                <User size={16} style={{ marginRight: '0.5rem' }} />
                Client: {project.client}
              </div>
            )}
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--text-color-light)'
            }}>
              Category: {project.category}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--border-radius-md)',
                boxShadow: 'var(--shadow-md)',
              }}
            />
          </motion.div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-xl)',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Project Overview</h2>
              <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-color-light)' }}>
                {project.longDescription}
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: 'var(--spacing-sm)', 
                marginTop: 'var(--spacing-lg)',
              }}>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button secondary"
                  >
                    <Github size={16} style={{ marginRight: '0.5rem' }} />
                    View Source
                  </a>
                )}
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button primary"
                  >
                    <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Project Details</h2>
              
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>Technologies Used</h3>
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-xs)',
                }}>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      style={{
                        background: 'var(--bg-color-secondary)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>Key Features</h3>
                <ul style={{ 
                  listStylePosition: 'inside',
                  color: 'var(--text-color-light)',
                }}>
                  {project.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: 'var(--spacing-xs)' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Next/Prev Project Navigation */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
            }}
          >
            <p style={{ color: 'var(--text-color-light)', marginBottom: 'var(--spacing-sm)' }}>
              Continue Exploring
            </p>
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>More Projects</h2>
            
            <Link to="/projects" className="button primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;