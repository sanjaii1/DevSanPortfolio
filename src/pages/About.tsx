import { motion } from 'framer-motion';
import SkillBar from '../components/SkillBar';
import { skills, getSkillsByCategory } from '../data/skills';
import { Download, Award, Calendar, Users } from 'lucide-react';

const About = () => {
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const toolsAndOtherSkills = [...getSkillsByCategory('tools'), ...getSkillsByCategory('other')];
  
  const stats = [
    { icon: <Calendar size={24} />, value: '2.5+', label: 'Years Experience' },
    { icon: <Award size={24} />, value: '60+', label: 'Projects Completed' },
    { icon: <Users size={24} />, value: '20+', label: 'Happy Clients' },
  ];
  
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Marketlube',
      period: '2024, Dec 9 - Present',
      description: 'Developed visually engaging websites featuring rich animations and interactive user experiences using modern front-end technologies. Built and maintained full-stack web applications, integrating frontend and backend systems for seamless performance. Leveraged AI-powered tools and APIs to automate features and enhance website functionality and user personalization. Collaborated on CRM system improvements, optimizing user flows and enhancing data integration and reporting capabilities.'
    },
    {
      title: 'Software Developer',
      company: 'Frugal Scientific Pvt. Ltd.',
      period: '2023, May - 2024, Oct',
      description: 'Built and maintained dynamic, responsive web applications using React.js, ensuring compatibility across various devices and browsers. Implemented user interfaces with React Core UI components to deliver consistent and efficient user experiences. Utilized React Material-UI to design visually appealing interfaces following modern design principles. Troubleshooted and resolved software issues to ensure uninterrupted operations for platforms like SmarterHomes and Torus. Consistently met project deadlines while contributing to the successful development and delivery of robust solutions.'
    },
    {
      title: 'Front End Developer Intern',
      company: 'Full-stack Developer Academy',
      period: '2022, Dec - 2023, May',
      description: 'Utilized HTML, CSS, Bootstrap, and JavaScript to create visually appealing and responsive web applications. Designed dynamic user interfaces with precision and interactivity to ensure a seamless user experience. Applied ES6+ features to write clean and efficient JavaScript code, leveraging modern language capabilities. Developed robust back-end services using Node.js and Express, creating RESTful APIs for handling CRUD (Create, Read, Update, Delete) operations. Managed application data with databases like MongoDB and MySQL, implementing efficient querying and indexing strategies.'
    }
  ];
  
  const education = [
    {
      degree: 'B.Tech, Mechanical Engineering',
      institution: 'Jyothi Engineering College, Kerala Technical University',
      period: '2015 - 2019',
      description: 'Mechanical Engineering'
    },
    {
      degree: '10+2, Science',
      institution: 'Perambra Higher Secondary School',
      period: '2004 - 2008',
      description: 'Science'
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
              <h2>SOFTWARE DEVELOPER</h2>
            </motion.div>
            
            <motion.div 
              className="about__content-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Expert MERN stack developer with a proven track record of building high-performance, scalable, and user-focused web applications. Proficient in React.js, Redux, Node.js, Express.js, and MongoDB, with deep expertise in modern JavaScript (ES6+), HTML5, and CSS3. Skilled in writing clean, maintainable code and following industry best practices. Experienced in agile environments, automated development workflows, and version control using Git. Dedicated to delivering reliable, secure, and optimized solutions that align with business goals and enhance user experience.
              </p>
              <p><b>Email:</b> bsanjay235@gmil.com</p>
              <p><b>Address:</b> Sreenadhanam House, Thendankkandy Meethal, Perambra post, Kozhikode, Pin- 673525</p>
              <p><b>Phone:</b> 723361859</p>
              <p><b>GitHub:</b> <a href="https://github.com/sanjaii1" target="_blank" rel="noopener noreferrer">sanjaii1</a></p>
              <p><b>LinkedIn:</b> <a href="http://www.linkedin.com/in/sanjaii1" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sanjaii1</a></p>
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
              <a href="/public/resume.pdf" className="button primary" download>
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