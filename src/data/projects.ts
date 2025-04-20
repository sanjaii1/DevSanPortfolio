export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: number;
  client?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
    longDescription: 'This e-commerce platform was built using React, Node.js, and MongoDB. It features a responsive design, product search and filtering, shopping cart functionality, user authentication, and Stripe payment integration. The admin dashboard allows for product and order management.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    features: [
      'Responsive design',
      'Product search and filtering',
      'Shopping cart functionality',
      'User authentication',
      'Admin dashboard',
      'Payment integration'
    ],
    githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform.example.com',
    year: 2023,
    client: 'RetailCo'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    category: 'Web Application',
    description: 'A drag-and-drop task management application with team collaboration features.',
    longDescription: 'The Task Management App is a Trello-like application built with React and Firebase. It allows users to create boards, lists, and cards, and features drag-and-drop functionality for easy task organization. The app supports team collaboration with real-time updates.',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
    features: [
      'Drag-and-drop interface',
      'Real-time collaboration',
      'Task assignments',
      'Due dates and reminders',
      'Activity log',
      'File attachments'
    ],
    githubUrl: 'https://github.com/johndoe/task-management-app',
    liveUrl: 'https://task-management-app.example.com',
    year: 2022,
    client: 'ProductivityLabs'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    category: 'Mobile App',
    description: 'A fitness tracking application for tracking workouts, nutrition, and progress.',
    longDescription: 'The Fitness Tracker is a comprehensive application built with React Native. It allows users to track their workouts, log nutritional information, set goals, and visualize their progress over time. The app also provides custom workout recommendations based on user goals.',
    image: 'https://images.pexels.com/photos/3912371/pexels-photo-3912371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Firebase', 'Redux', 'D3.js'],
    features: [
      'Workout tracking',
      'Nutrition logging',
      'Goal setting',
      'Progress visualization',
      'Custom workout recommendations',
      'Social sharing'
    ],
    githubUrl: 'https://github.com/johndoe/fitness-tracker',
    liveUrl: 'https://fitness-tracker.example.com',
    year: 2023,
    client: 'FitLife'
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'A comprehensive real estate platform for property listings, searches, and agent management.',
    longDescription: 'This real estate platform was built with Next.js and integrates with a RESTful API. It features property listings with advanced search functionality, virtual tours, agent profiles, and a scheduling system for property viewings.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    features: [
      'Property listings',
      'Advanced search functionality',
      'Virtual tours',
      'Agent profiles',
      'Viewing scheduling',
      'Map integration'
    ],
    githubUrl: 'https://github.com/johndoe/real-estate-platform',
    liveUrl: 'https://real-estate-platform.example.com',
    year: 2022,
    client: 'HomeFinderPro'
  },
  {
    id: 'recipe-sharing-app',
    title: 'Recipe Sharing App',
    category: 'Web Application',
    description: 'A community-driven recipe sharing platform with social features and cooking tutorials.',
    longDescription: 'The Recipe Sharing App is a community-driven platform built with Vue.js and Django. It allows users to create, share, and discover recipes, follow other users, save favorites, and access step-by-step cooking tutorials.',
    image: 'https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS S3'],
    features: [
      'Recipe creation and sharing',
      'Social following',
      'Favorites and collections',
      'Step-by-step tutorials',
      'Ingredient search',
      'Nutritional information'
    ],
    githubUrl: 'https://github.com/johndoe/recipe-sharing-app',
    liveUrl: 'https://recipe-sharing-app.example.com',
    year: 2021,
    client: 'CookingCommunity'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'A modern portfolio website with animations and responsive design.',
    longDescription: 'This portfolio website was designed and built using React, SCSS, and Framer Motion. It features smooth animations, a responsive design, and an intuitive user interface to showcase projects and skills effectively.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'SCSS', 'Framer Motion', 'Figma'],
    features: [
      'Responsive design',
      'Smooth animations',
      'Project showcase',
      'Skills visualization',
      'Contact form',
      'Dark/light mode'
    ],
    githubUrl: 'https://github.com/johndoe/portfolio-website',
    liveUrl: 'https://johndoe-portfolio.example.com',
    year: 2023
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectCategories = (): string[] => {
  const categories = projects.map(project => project.category);
  // Remove duplicates
  return [...new Set(categories)];
};