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
    id: 'rarichans-coconut-productl',
    title: "RARICHAN'S COCONUT PRODUCTL",
    category: 'Web Development',
    description: 'Corporate website for coconut oil product company.',
    longDescription: 'Developed a modern, responsive website for Rarichan\'s Coconut Productl, showcasing products and company information.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209440/rari_l3v5w3.png',
    technologies: ['html', 'css', 'javascript'],
    features: [
      'Product showcase',
      'Responsive design',
      'Contact form',
      'SEO optimized'
    ],
    liveUrl: 'https://www.rarichanscoconut.com',
    year: 2023
  },
  {
    id: 'thilakkam-fancy-mall',
    title: 'THILLAKKAM FANCY MALL',
    category: 'Web Development',
    description: 'E-commerce website for a fancy mall.',
    longDescription: 'Built an e-commerce platform for Thilakkam Fancy Mall, enabling online product browsing and purchasing.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209440/thilakkam_jnabch.png',
    technologies: ['html', 'css', 'javascript'],
    features: [
      'E-commerce functionality',
      'Product catalog',
      'Shopping cart',
      'Responsive design'
    ],
    liveUrl: 'https://thilakkamfancy.in',
    year: 2023
  },
  {
    id: 'anuraglr-website',
    title: 'ANURAGLR PORTFOLIO WEBSITE',
    category: 'Portfolio',
    description: 'Portfolio website for Anuraglr.',
    longDescription: 'Designed and developed a modern, responsive portfolio website for Anuraglr to showcase projects, skills, and experience. Implemented a clean UI, smooth navigation, and optimized performance for a professional online presence.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753210498/anurag_sn3g2r.png',
    technologies: ['html', 'css', 'javascript'],
    features: [
      'Portfolio website',
      'Project showcase',
      'Skills and experience',
      'Responsive design'
    ],
    liveUrl: 'https://lranurag5.web.app/',
    year: 2024
  },
  {
    id: 'smarter-home-website',
    title: 'SMARTER HOME WEBSITE',
    category: 'Web Application',
    description: 'Corporate website for Smarter Home.',
    longDescription: 'Designed and developed a modern, responsive portfolio website for Anuraglr to showcase projects, skills, and experience. Implemented a clean UI, smooth navigation, and optimized performance for a professional online presence.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753211828/smarthome_bircvy.png',
    technologies: ['html', 'css', 'javascript'],
    features: [
      'E-commerce functionality',
      'Product catalog',
      'Shopping cart',
      'Responsive design'
    ],
    liveUrl: 'https://smarterhome.in/',
    year: 2024
  },
  {
    id: 'tgf-website',
    title: 'TGF WEBSITE',
    category: 'CRM',
    description: 'CRM website for TGF.',
    longDescription: 'Designed and developed a modern, responsive portfolio website for Anuraglr to showcase projects, skills, and experience. Implemented a clean UI, smooth navigation, and optimized performance for a professional online presence.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753211829/tgf_jxynt3.png',
    technologies: ['html', 'css', 'javascript'],
    features: [
      'CRM functionality',
      'Product catalog',
      'Shopping cart',
      'Responsive design'
    ],
    liveUrl: 'https://tgf.in/',
    year: 2024
  },
  {
    id: 'hawksee',
    title: 'HAWKSEE',
    category: 'Interactive Website',
    description: 'Agency website for Hawksee.',
    longDescription: 'Developed a professional agency website for Hawksee, focusing on branding and lead generation.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209437/hawksee_jih6qw.png',
    technologies: ['React', 'Sass', 'javaScript'],
    features: [
      'Brand showcase',
      'Contact form',
      'Responsive design'
    ],
    liveUrl: 'https://hawksee.agency/',
    year: 2024
  },
  {
    id: 'limotex',
    title: 'LIMOTEX',
    category: 'Web Development',
    description: 'Corporate website for Limotex.',
    longDescription: 'Created a modern, responsive website for Limotex to highlight their services and products.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209439/limotex_p5cpxa.png',
    technologies: ['React', 'Sass', 'javaScript'],
    features: [
      'Service showcase',
      'Contact form',
      'Responsive design'
    ],
    liveUrl: 'https://limotex.in/',
    year: 2025
  },
  {
    id: 'skymark',
    title: 'SKYMARK',
    category: 'Web Development',
    description: 'Corporate website for Skymark.',
    longDescription: 'Developed a responsive website for Skymark, focusing on company profile and service offerings.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209439/skymark_yordtt.png',
    technologies: ['React', 'Sass', 'javaScript','node.js'],
    features: [
      'Company profile',
      'Service showcase',
      'Responsive design'
    ],
    liveUrl: 'https://www.skymark.in/',
    year: 2025
  },
  {
    id: 'drshareef',
    title: 'DRSHAREEF',
    category: 'Web Development',
    description: 'Professional website for Dr. Shareef.',
    longDescription: 'Developed a professional website for Dr. Shareef to showcase services and provide contact information.',
    image: '',
    technologies: ['React', 'Sass', 'javaScript'],
    features: [
      'Professional profile',
      'Contact form',
      'Responsive design'
    ],
    year: 2025
  },
  {
    id: 'hiline',
    title: 'HILINE',
    category: 'Web Development',
    description: 'Landing page for Hiline Developers.',
    longDescription: 'Created a high-converting landing page for Hiline Developers.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209439/hiline_l5scjr.png',
    technologies: ['React', 'Node.js'],
    features: [
      'Landing page',
      'Lead capture',
      'Responsive design'
    ],
    liveUrl: 'https://www.hilinedevelopers.com/lander',
    year: 2024
  },
  {
    id: 'motorcraze',
    title: 'MOTORCRAZE',
    category: 'Web Development',
    description: 'Automotive e-commerce website.',
    longDescription: 'Developed an e-commerce website for Motorcraze, specializing in automotive products.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209618/moto_fkzgv0.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: [
      'E-commerce functionality',
      'Product catalog',
      'Shopping cart',
      'Responsive design'
    ],
    liveUrl: 'https://www.motocraze.co.in/',
    year: 2025
  },
  {
    id: 'lalsonelectronics',
    title: 'LALSONELECTRONICS',
    category: 'Web Development',
    description: 'Corporate website for Lalson Electronics.',
    longDescription: 'Developed a modern, responsive website for Lalson Electronics.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209439/lalson_ohpugx.png',
    technologies: ['React', 'Node.js'],
    features: [
      'Product showcase',
      'Contact form',
      'Responsive design'
    ],
    liveUrl: 'https://www.lalsonselectronics.com/',
    year: 2025
  },
  {
    id: 'luxart',
    title: 'LUXART',
    category: 'Web Development',
    description: 'Corporate website for Luxart Builders.',
    longDescription: 'Created a modern, responsive website for Luxart Builders.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1753209439/luxart_grbhgr.png',
    technologies: ['React', 'Node.js'],
    features: [
      'Service showcase',
      'Contact form',
      'Responsive design'
    ],
    liveUrl: 'https://www.luxartbuilders.com/',
    year: 2025
  },
  {
    id: 'habitat',
    title: 'HABITAT',
    category: 'Web Development',
    description: 'Project for Habitat.',
    longDescription: 'Developed a web project for Habitat.',
    image: '',
    technologies: ['React', 'Node.js'],
    features: [
      'Responsive design'
    ],
    year: 2025
  },
  {
    id: 'skillhand',
    title: 'SKILLHAND',
    category: 'Web Development',
    description: 'Project for Skillhand.',
    longDescription: 'Developed a web project for Skillhand.',
    image: '',
    technologies: ['React', 'Node.js'],
    features: [
      'Responsive design'
    ],
    year: 2025
  },
  {
    id: 'yas',
    title: 'YAS',
    category: 'Web Development',
    description: 'Project for YAS.',
    longDescription: 'Developed a web project for YAS.',
    image: '',
    technologies: ['React', 'Node.js'],
    features: [
      'Responsive design'
    ],
    year: 2025
  },
  {
    id: 'dsleep',
    title: 'DSLEEP',
    category: 'Web Development',
    description: 'Project for DSleep.',
    longDescription: 'Developed a web project for DSleep.',
    image: '',
    technologies: ['React', 'Node.js'],
    features: [
      'Responsive design'
    ],
    year: 2025
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