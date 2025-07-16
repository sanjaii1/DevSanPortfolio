export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const skills: Skill[] = [
  // Frontend skills
  { name: 'React.js', percentage: 95, category: 'frontend' },
  { name: 'Next.js', percentage: 90, category: 'frontend' },
  { name: 'Redux', percentage: 90, category: 'frontend' },
  { name: 'JavaScript (ES6+)', percentage: 95, category: 'frontend' },
  { name: 'TypeScript', percentage: 90, category: 'frontend' },
  { name: 'jQuery', percentage: 80, category: 'frontend' },
  { name: 'HTML5', percentage: 98, category: 'frontend' },
  { name: 'CSS3', percentage: 97, category: 'frontend' },
  { name: 'Sass', percentage: 90, category: 'frontend' },
  { name: 'Tailwind CSS', percentage: 92, category: 'frontend' },
  { name: 'Bootstrap', percentage: 90, category: 'frontend' },
  { name: 'Material-UI', percentage: 88, category: 'frontend' },
  { name: 'Styled Components', percentage: 85, category: 'frontend' },
  { name: 'UI/UX Design', percentage: 80, category: 'frontend' },
  { name: 'Responsive Web Design', percentage: 95, category: 'frontend' },
  { name: 'Media Queries', percentage: 90, category: 'frontend' },
  { name: 'Component-Based Architecture', percentage: 92, category: 'frontend' },
  { name: 'React Hooks', percentage: 92, category: 'frontend' },
  { name: 'Context API', percentage: 90, category: 'frontend' },
  { name: 'Form Handling (Formik, React Hook Form)', percentage: 85, category: 'frontend' },
  { name: 'Client-Side Routing (React Router)', percentage: 90, category: 'frontend' },
  { name: 'DOM Manipulation', percentage: 85, category: 'frontend' },
  { name: 'State Management', percentage: 90, category: 'frontend' },
  { name: 'Lazy Loading', percentage: 80, category: 'frontend' },
  { name: 'Code Splitting', percentage: 80, category: 'frontend' },
  { name: 'Cross-Browser Compatibility', percentage: 85, category: 'frontend' },
  { name: 'Mobile-First Design', percentage: 90, category: 'frontend' },
  { name: 'Custom Reusable Components', percentage: 90, category: 'frontend' },
  { name: 'Error Boundaries', percentage: 80, category: 'frontend' },

  // Backend skills
  { name: 'Node.js', percentage: 90, category: 'backend' },
  { name: 'Express.js', percentage: 88, category: 'backend' },
  { name: 'RESTful APIs', percentage: 90, category: 'backend' },
  { name: 'MongoDB', percentage: 85, category: 'backend' },
  { name: 'MySQL', percentage: 80, category: 'backend' },
  { name: 'SQL', percentage: 80, category: 'backend' },
  { name: 'Mongoose', percentage: 85, category: 'backend' },
  { name: 'JWT (JSON Web Tokens)', percentage: 80, category: 'backend' },
  { name: 'Authentication & Authorization', percentage: 85, category: 'backend' },
  { name: 'Bcrypt', percentage: 80, category: 'backend' },
  { name: 'MVC Architecture', percentage: 80, category: 'backend' },
  { name: 'API Development', percentage: 88, category: 'backend' },
  { name: 'Error Handling', percentage: 85, category: 'backend' },
  { name: 'Input Validation', percentage: 85, category: 'backend' },
  { name: 'CRUD Operations', percentage: 90, category: 'backend' },
  { name: 'Middleware', percentage: 85, category: 'backend' },
  { name: 'Asynchronous Programming (Promises, async/await)', percentage: 90, category: 'backend' },
  { name: 'Environment Variables (dotenv)', percentage: 85, category: 'backend' },
  { name: 'CORS', percentage: 80, category: 'backend' },
  { name: 'WebSockets', percentage: 75, category: 'backend' },

  // Tools
  { name: 'Git', percentage: 95, category: 'tools' },
  { name: 'GitHub', percentage: 95, category: 'tools' },
  { name: 'NPM', percentage: 90, category: 'tools' },
  { name: 'Yarn', percentage: 85, category: 'tools' },
  { name: 'VS Code', percentage: 95, category: 'tools' },
  { name: 'Chrome DevTools', percentage: 90, category: 'tools' },
  { name: 'Postman', percentage: 90, category: 'tools' },
  { name: 'ESLint', percentage: 85, category: 'tools' },
  { name: 'Prettier', percentage: 85, category: 'tools' },
  { name: 'Webpack', percentage: 80, category: 'tools' },
  { name: 'Babel', percentage: 80, category: 'tools' },
  { name: 'Vite', percentage: 85, category: 'tools' },
  { name: 'Figma', percentage: 80, category: 'tools' },
  { name: 'Netlify', percentage: 80, category: 'tools' },
  { name: 'Vercel', percentage: 80, category: 'tools' },
  { name: 'Render', percentage: 75, category: 'tools' },
  { name: 'Heroku', percentage: 75, category: 'tools' },
  { name: 'Firebase', percentage: 80, category: 'tools' },
  { name: 'dotenv', percentage: 80, category: 'tools' },
  { name: 'GitLab', percentage: 75, category: 'tools' },
  { name: 'Bitbucket', percentage: 75, category: 'tools' },
  { name: 'Husky', percentage: 70, category: 'tools' },
  { name: 'Jira', percentage: 75, category: 'tools' },
  { name: 'Trello', percentage: 75, category: 'tools' },
  { name: 'CI/CD Basics', percentage: 70, category: 'tools' },
  { name: 'Swagger', percentage: 70, category: 'tools' },

  // Other
  { name: 'Deployment', percentage: 85, category: 'other' },
  { name: 'Performance Optimization', percentage: 85, category: 'other' },
  { name: 'Accessibility', percentage: 80, category: 'other' }
];

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};