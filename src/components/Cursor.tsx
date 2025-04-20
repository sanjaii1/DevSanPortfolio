import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", mouseMove);
    
    // Add event listeners for cursor changes
    const links = document.querySelectorAll('a, button');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => setCursorVariant('hover'));
      link.addEventListener('mouseleave', () => setCursorVariant('default'));
    });
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => setCursorVariant('hover'));
        link.removeEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(var(--primary-color-rgb), 0.1)",
      border: "1px solid var(--primary-color)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(var(--primary-color-rgb), 0.2)",
      border: "1px solid var(--primary-color)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 30
      }
    }
  };
  
  return (
    <>
      <motion.div
        className="cursor custom-cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: "fixed",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference"
        }}
      />
      <style jsx>{`
        body {
          cursor: none;
        }
        
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default Cursor;