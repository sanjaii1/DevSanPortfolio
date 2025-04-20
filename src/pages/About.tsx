import { motion } from 'framer-motion';
import SkillBar from '../components/SkillBar';
import { skills, getSkillsByCategory } from '../data/skills';
import { Download, Award, Calendar, Users } from 'lucide-react';

const About = () => {
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const toolsAndOtherSkills = [...getSkillsByCategory('tools'), ...getSkillsByCategory('other')];
  
  const stats = [
    { icon: <Calendar size={24} />, value: '5+', label: 'Years Experience' },
    { icon: <Award size={24} />, value: '20+', label: 'Projects Completed' },
    { icon: <Users size={24} />, value: '10+', label: 'Happy Clients' },
  ];
  
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      period: '2022 - Present',
      description: 'Lead the frontend development team in building responsive web applications. Implement modern JavaScript frameworks and optimize performance.'
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed and maintained client websites and web applications. Worked with React, Node.js, and various CMS platforms.'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2018 - 2020',
      description: 'Assisted in the development of web applications and implemented UI designs. Collaborated with cross-functional teams.'
    }
  ];
  
  const education = [
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of Technology',
      period: '2014 - 2018',
      description: 'Focused on web technologies, databases, and software engineering principles.'
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Code Academy',
      period: '2018',
      description: 'Intensive 12-week program covering modern web development technologies and best practices.'
    }
  ];
  
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
      <section className="section about">
        <div className="about__container">
          <motion.div 
            className="about__image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="John Doe" 
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
          
          <div className="about__content">
            <motion.div 
              className="about__content-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="subtitle">About Me</p>
              <h2>A passionate Web Developer based in New York</h2>
            </motion.div>
            
            <motion.div 
              className="about__content-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Hello! I'm John Doe, a professional web developer with 5+ years of experience in creating responsive and functional web applications. I specialize in both frontend and backend development, with a strong focus on user experience and performance optimization.
              </p>
              <p>
                My journey in web development began during my Computer Science studies when I discovered my passion for creating digital experiences. Since then, I've worked with various technologies and frameworks to deliver high-quality solutions for clients across different industries.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices. My goal is to create websites and applications that not only look great but also provide excellent user experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="about__stats" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 'var(--spacing-lg)',
                gap: 'var(--spacing-md)'
              }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  style={{
                    textAlign: 'center',
                    flex: '1 1 calc(33.333% - var(--spacing-md))',
                    minWidth: '120px'
                  }}
                >
                  <div style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                    {stat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{stat.value}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-color-light)' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ marginTop: 'var(--spacing-lg)' }}
            >
              <a href="/resume.pdf" className="button primary" download>
                <Download size={16} style={{ marginRight: '0.5rem' }} />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience & Education Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
          >
            <p style={{ color: 'var(--primary-color)', fontWeight: 500, marginBottom: 'var(--spacing-xs)' }}>
              My Journey
            </p>
            <h2>Experience & Education</h2>
          </motion.div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--spacing-xl)'
          }}>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: 'var(--spacing-lg)' }}
              >
                Work Experience
              </motion.h3>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    marginBottom: 'var(--spacing-lg)',
                    position: 'relative',
                    paddingLeft: 'var(--spacing-lg)',
                    borderLeft: '2px solid var(--primary-color)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: -8,
                    top: 0,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)'
                  }}></div>
                  <p style={{ color: 'var(--text-color-light)', marginBottom: 'var(--spacing-xs)' }}>
                    {exp.period}
                  </p>
                  <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{exp.title}</h4>
                  <p style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>
                    {exp.company}
                  </p>
                  <p style={{ color: 'var(--text-color-light)' }}>{exp.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: 'var(--spacing-lg)' }}
              >
                Education
              </motion.h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    marginBottom: 'var(--spacing-lg)',
                    position: 'relative',
                    paddingLeft: 'var(--spacing-lg)',
                    borderLeft: '2px solid var(--primary-color)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: -8,
                    top: 0,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)'
                  }}></div>
                  <p style={{ color: 'var(--text-color-light)', marginBottom: 'var(--spacing-xs)' }}>
                    {edu.period}
                  </p>
                  <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>{edu.degree}</h4>
                  <p style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>
                    {edu.institution}
                  </p>
                  <p style={{ color: 'var(--text-color-light)' }}>{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
          >
            <p style={{ color: 'var(--primary-color)', fontWeight: 500, marginBottom: 'var(--spacing-xs)' }}>
              My Skills
            </p>
            <h2>Professional Skills</h2>
          </motion.div>
          
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 'var(--spacing-md)' }}
            >
              Frontend Development
            </motion.h3>
            
            <div className="about__skills-list">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 'var(--spacing-md)' }}
            >
              Backend Development
            </motion.h3>
            
            <div className="about__skills-list">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 'var(--spacing-md)' }}
            >
              Tools & Other Skills
            </motion.h3>
            
            <div className="about__skills-list">
              {toolsAndOtherSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;