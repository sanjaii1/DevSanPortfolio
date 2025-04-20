import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  // Only show featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);
  
  // Only show top skills (first 6)
  const topSkills = skills
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 6);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      {/* About Section Preview */}
      <section className="section about">
        <div className="about__container">
          <motion.div 
            className="about__image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="John Doe" 
            />
          </motion.div>
          
          <div className="about__content">
            <motion.div 
              className="about__content-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">About Me</p>
              <h2>A dedicated Web Developer based in New York</h2>
            </motion.div>
            
            <motion.div 
              className="about__content-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                With 5+ years of experience in web development, I enjoy building responsive and performant web applications using modern technologies. I specialize in JavaScript, React, and Node.js, and I'm passionate about creating intuitive user experiences.
              </p>
              <p>
                My approach to development focuses on writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
              </p>
            </motion.div>
            
            <div className="about__skills">
              <motion.h3 
                className="about__skills-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My Skills
              </motion.h3>
              
              <div className="about__skills-list">
                {topSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    index={index}
                  />
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ marginTop: 'var(--spacing-md)', textAlign: 'center' }}
              >
                <Link to="/about" className="button secondary">
                  Learn More About Me
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section Preview */}
      <section className="section projects">
        <div className="projects__container">
          <div className="projects__header">
            <motion.p 
              className="projects__header-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              My Work
            </motion.p>
            
            <motion.h2 
              className="projects__header-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            
            <motion.p 
              className="projects__header-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Here are some of my recent projects. Each one was carefully crafted with attention to detail, performance, and user experience.
            </motion.p>
          </div>
          
          <div className="projects__grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
          
          <motion.div 
            className="projects__more"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/projects" className="button primary">
              View All Projects <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--border-radius-lg)',
              backgroundColor: 'var(--bg-color-secondary)',
            }}
          >
            <h2>Interested in working together?</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
              I'm always open to discussing new projects and opportunities.
            </p>
            <Link to="/contact" className="button primary">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;