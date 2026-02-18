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
    id: 'dsleep',
    title: 'DSLEEP',
    category: 'Web Development',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771446262/dsleep_uatzje.png',
    description: 'Project for DSleep.',
    longDescription: 'Developed a web project for DSleep.',
    technologies: ['React', 'Node.js'],
    features: [
      'Responsive design'
    ],
    year: 2025,
    liveUrl: 'https://dsleepstore.in/'
  },
  {
    id: 'rootow',
    title: 'ROOTOW',
    category: 'E-commerce',
    description: 'Custom Acrylic Frames & Personalized Gifts.',
    longDescription: 'Rootow crafts bespoke acrylic photo frames, polaroid calendars, and personalized gifts that turn weddings, milestones, and cozy corners into art.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771446260/rootow_tij3w9.png',
    technologies: ['React', 'Tailwind CSS'],
    features: [
      'Custom Acrylic Frames',
      'Personalized Gifts',
      'Calendar Frames',
      'Responsive design'
    ],
    liveUrl: 'https://www.rootow.com/',
    year: 2025
  },
  {
    id: 'market-lube',
    title: 'MARKET LUBE',
    category: 'Digital Agency',
    description: 'Comprehensive service provider for businesses.',
    longDescription: 'Market Lube offers everything your business will ever need, from marketing to operations, technology, and growth strategies, expertly delivered.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771446260/marketlube_oxqcbx.png',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    features: [
      'Video Production',
      'Branding & Designing',
      'Performance Marketing',
      'Website Development'
    ],
    liveUrl: 'https://www.marketlube.in/',
    year: 2025
  },
  {
    id: 'yesjay',
    title: 'YESJAY',
    category: 'Web Development',
    description: 'Audit and Tax Advisory Services.',
    longDescription: 'Yesjay provides expert financial and advisory support including audit advisory, tax advisory, business entity registrations, and GST services.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771446527/yesjay_kaych7.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    features: [
      'Audit Advisory',
      'Tax Advisory',
      'Business Registration',
      'GST Services'
    ],
    liveUrl: 'https://www.yesjay.in/',
    year: 2025
  },
  {
    id: 'klaan-fitness',
    title: 'KLAAN FITNESS',
    category: 'Web Application',
    description: 'Complete Family Fitness Solution.',
    longDescription: 'Klaan Fitness offers a complete family fitness solution with personalized training, group sessions, and specialized programs like Reformer Pilates.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771446261/klaan_dj2spd.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    features: [
      'Personal Training',
      'Group Sessions',
      'Reformer Pilates',
      'Fitness Assessment'
    ],
    liveUrl: 'https://klaan-fitness.vercel.app/',
    year: 2025
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
    technologies: ['React', 'Sass', 'javaScript', 'node.js'],
    features: [
      'Company profile',
      'Service showcase',
      'Responsive design'
    ],
    liveUrl: 'https://www.skymark.in/',
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
    title: 'MOTO CRAZE',
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
    id: 'vajraah-stores',
    title: 'VAJRAAH STORES',
    category: 'E-commerce',
    description: 'Ultimate fashion destination for customised clothing.',
    longDescription: 'Get your customised clothing and glam up your style quotient. Shipping all over India.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771446262/vajrhaa_upjagu.png',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    features: [
      'E-commerce functionality',
      'Customised clothing',
      'Responsive design',
      'Nationwide shipping'
    ],
    liveUrl: 'https://www.vajraahstores.com/',
    year: 2025
  },
  {
    id: 'drshareef',
    title: 'DRSHAREEF',
    category: 'Web Development',
    description: 'Professional website for Dr. Shareef.',
    longDescription: 'Developed a professional website for Dr. Shareef to showcase services and provide contact information.',
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771447164/drshareef_j8ckty.png',
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
    liveUrl: 'https://hiline-five.vercel.app/',
    year: 2026
  },
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
    image: 'https://res.cloudinary.com/dfbauxmin/image/upload/v1771446260/yas_zvfj8r.png',
    technologies: ['React', 'Node.js'],
    features: [
      'Responsive design'
    ],
    year: 2025
  },

];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectCategories = (): string[] => {
  const categories = projects.map(project => project.category);
  // Remove duplicates
  return [...new Set(categories)];
};