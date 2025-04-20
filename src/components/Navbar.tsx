import { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  
  const mobileNavVariants = {
    closed: { x: '100%' },
    open: { x: 0 },
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <motion.div 
          className="navbar__logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Code size={24} />
          <span>SANJA!</span>
        </motion.div>
        
        <motion.ul 
          className="navbar__menu"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="navbar__menu-item" variants={itemVariants}>
            <NavLink to="/" end>Home</NavLink>
          </motion.li>
          <motion.li className="navbar__menu-item" variants={itemVariants}>
            <NavLink to="/about">About</NavLink>
          </motion.li>
          <motion.li className="navbar__menu-item" variants={itemVariants}>
            <NavLink to="/projects">Projects</NavLink>
          </motion.li>
          <motion.li className="navbar__menu-item" variants={itemVariants}>
            <NavLink to="/contact">Contact</NavLink>
          </motion.li>
          <motion.li variants={itemVariants}>
            <button 
              className="navbar__theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </motion.li>
        </motion.ul>
        
        <div 
          className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <motion.div 
          className={`navbar__mobile ${isMenuOpen ? 'open' : ''}`}
          variants={mobileNavVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul>
            <li>
              <NavLink to="/" end onClick={toggleMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
            </li>
            <li>
              <button 
                className="navbar__theme-toggle" 
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;