import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/johndoe', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, url: 'https://twitter.com/johndoe', label: 'Twitter' },
    { icon: <Mail size={18} />, url: 'mailto:contact@johndoe.com', label: 'Email' },
  ];
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <motion.p 
          className="footer__copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          © {currentYear} John Doe. All Rights Reserved.
        </motion.p>
        
        <motion.ul 
          className="footer__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <li key={index} className="footer__social-item">
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </footer>
  );
};

export default Footer;