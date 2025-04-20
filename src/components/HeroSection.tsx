import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToNext = () => {
    const nextSection = document.querySelector('.about') || document.querySelector('.projects');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <motion.p 
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SANJAI BABU S
            <br />
            <span>Web Developer</span>
          </motion.h1>
          
          <motion.p 
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I create beautiful, responsive websites and web applications 
            using modern technologies and best practices.
          </motion.p>
          
          <motion.div 
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/projects" className="button primary">View My Work</Link>
            <Link to="/contact" className="button secondary">Contact Me</Link>
          </motion.div>
          
          <motion.div
            className="hero__social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <a 
              href="https://github.com/sanjaii1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: 'var(--text-color)',
                transition: 'color 0.2s ease',
              }}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sanjaii1/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: 'var(--text-color)',
                transition: 'color 0.2s ease',
              }}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:bsanjay235@gmail.com" 
              aria-label="Email"
              style={{
                color: 'var(--text-color)',
                transition: 'color 0.2s ease',
              }}
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="hero__background">
        <div className="grid">
          {Array(400).fill(null).map((_, index) => (
            <div key={index} className="cell"></div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        ref={scrollRef}
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default HeroSection;