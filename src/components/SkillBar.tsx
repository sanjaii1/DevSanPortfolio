import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  index: number;
}

const SkillBar = ({ skill, percentage, index }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  
  return (
    <div className="about__skills-item" ref={ref}>
      <div className="about__skills-item-name">
        <span>{skill}</span>
        <span className="percentage">{percentage}%</span>
      </div>
      
      <div className="about__skills-item-bar">
        <motion.div
          className="fill"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;