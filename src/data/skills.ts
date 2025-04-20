export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const skills: Skill[] = [
  // Frontend skills
  { name: 'HTML & CSS', percentage: 95, category: 'frontend' },
  { name: 'JavaScript', percentage: 90, category: 'frontend' },
  { name: 'TypeScript', percentage: 85, category: 'frontend' },
  { name: 'React', percentage: 92, category: 'frontend' },
  { name: 'Vue.js', percentage: 80, category: 'frontend' },
  { name: 'Angular', percentage: 75, category: 'frontend' },
  { name: 'SASS/SCSS', percentage: 88, category: 'frontend' },
  { name: 'Tailwind CSS', percentage: 90, category: 'frontend' },
  { name: 'Framer Motion', percentage: 85, category: 'frontend' },
  
  // Backend skills
  { name: 'Node.js', percentage: 88, category: 'backend' },
  { name: 'Express', percentage: 85, category: 'backend' },
  { name: 'MongoDB', percentage: 80, category: 'backend' },
  { name: 'PostgreSQL', percentage: 78, category: 'backend' },
  { name: 'Firebase', percentage: 82, category: 'backend' },
  { name: 'REST API', percentage: 90, category: 'backend' },
  { name: 'GraphQL', percentage: 75, category: 'backend' },
  
  // Tools and other skills
  { name: 'Git', percentage: 92, category: 'tools' },
  { name: 'Docker', percentage: 70, category: 'tools' },
  { name: 'CI/CD', percentage: 75, category: 'tools' },
  { name: 'Figma', percentage: 85, category: 'tools' },
  { name: 'Responsive Design', percentage: 95, category: 'other' },
  { name: 'Performance Optimization', percentage: 85, category: 'other' },
  { name: 'Accessibility', percentage: 80, category: 'other' }
];

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};