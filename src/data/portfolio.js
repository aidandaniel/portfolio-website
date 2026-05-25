const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const profile = {
  name: 'Aidan Decker',
  title: 'Get to Know Me',
  eyebrow: 'About Me and My Work',
  portrait: publicAsset('hero-slide-coastal.png'),
  headerImage: publicAsset('aidan-header-background.png'),
  summary:
    'I enjoying hiking through nature, rock climbing and everything adventurous in between. ',
  links: [
    { label: 'About', href: '#about', icon: '01' },
    { label: 'Employment', href: '#employment', icon: '02' },
    { label: 'Shelf', href: '#shelf', icon: '03' },
  ],
};

export const heroSlides = [
  {
    src: publicAsset('hero-slide-coastal.png'),
    alt: 'Aidan Decker on a coastal hiking trail',
    caption: ' Out on the East Coast Trail',
  },
  {
    src: publicAsset('hero-slide-edgewalk.png'),
    alt: 'Aidan Decker on the CN Tower EdgeWalk above Toronto',
    caption: 'CN tower edgewalk',
  },
  {
    src: publicAsset('hero-slide-climbing.png'),
    alt: 'Aidan Decker on North Americas longest zipline platform',
    caption: 'North Americas Longest Zipline',
  },
  {
    src: publicAsset('hero-slide-winter.png'),
    alt: 'Aidan Decker exploring a frozen sinkhole in winter',
    caption: 'Exploring a frozen sinkhole',
  },
];

export const socialLinks = [
  {
    label: 'About',
    href: '#about',
    shortLabel: '01',
  },
  {
    label: 'Employment',
    href: '#employment',
    shortLabel: '02',
  },
  {
    label: 'Shelf',
    href: '#shelf',
    shortLabel: '03',
  },
];

export const sideNav = [
  { label: 'About Me', href: '#about', shortLabel: '01' },
  { label: 'Employment', href: '#employment', shortLabel: '02' },
  { label: 'Projects', href: '#shelf', shortLabel: '03' },
  { label: 'Contact', href: '#contact', shortLabel: '04' },
];

export const interests = [
  'Building full-stack tools that feel fast, useful, and polished.',
  'Machine learning, computer vision, robotics, and applied AI systems.',
  'Self-hosting, dashboards, containers, and practical infrastructure.',
  'Manga-inspired visual design, stark monochrome layouts, and quiet cinematic interfaces.',
];

export const catalogVolumes = [
  {
    title: 'Fitness Logbook',
    creator: 'AI Hackathon / 3rd Place',
    shelf: 'React / TypeScript / Vite',
    description: 'A fast-built full-stack training logbook shipped during an AI build-off, with auth, workout flows, goals, PRs, schedules, and settings.',
    chapters: [
      'Won 3rd place among 120 competitors in the InsForge-sponsored AI Build-Off Hackathon 2025.',
      'Built a React and TypeScript frontend on Vite with an InsForge backend using PostgreSQL and SDK tooling.',
      'Implemented authentication, two-step verification, workout templates, logs, goals, photos, and settings flows.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'InsForge', 'PostgreSQL'],
    accent: 'build-off',
    link: '#',
    image: publicAsset('Fitnesslogbook.png'),
    imageAlt: 'Fitness Logbook dashboard',
  },
  {
    title: 'LiDAR Terrain',
    creator: 'Robot Navigation Sim',
    shelf: 'Python / Open3D / Robotics',
    description: 'A 3D reconstruction and traversability pipeline for Antarctic LiDAR terrain, shaped here like a field report volume from the shelf.',
    chapters: [
      'Engineered an automated 3D data pipeline in Python using Open3D for Antarctic LiDAR surveys.',
      'Reduced point density by 81.2% with voxel-grid decimation and reconstructed smooth surfaces with Poisson reconstruction.',
      'Mapped terrain inclines with vector calculus to identify no-go hazards for robot navigation.',
    ],
    tech: ['Python', 'Open3D', 'Laspy', 'NumPy', 'LiDAR', 'Robotics'],
    accent: 'terrain',
    link: 'https://github.com/aidandaniel/LiDARToMesh',
    image: publicAsset('b4andafter.png'),
    imageAlt: 'LiDAR terrain reconstruction before and after comparison',
  },
  {
    title: 'Minecraft Server',
    creator: 'Containerized Monitoring',
    shelf: 'Docker / Grafana / Prometheus',
    description: 'A home-server infrastructure volume: containers, dashboards, metrics, and a practical deployment story.',
    chapters: [
      'Deployed a Minecraft Java server with Docker images and Docker Compose for 10+ users.',
      'Reduced setup time by 75% with repeatable containerized configuration.',
      'Built real-time hardware and container monitoring dashboards using Grafana, Prometheus, PromQL, and cAdvisor.',
    ],
    tech: ['Docker', 'Docker Compose', 'Grafana', 'Prometheus', 'PowerShell'],
    accent: 'server room',
    link: 'https://github.com/aidandaniel/Minecraft-Server',
    image: publicAsset('dashboardGarfana.jfif'),
    imageAlt: 'Grafana dashboard for containerized Minecraft server',
  },
  {
    title: 'Financial Education',
    creator: 'IBM AI Learning Lab',
    shelf: 'Supabase / Spring Boot / Agents',
    description: 'A platform chapter about financial learning, secure backend flows, personalized learning, and multi-agent routing.',
    chapters: [
      'Built a full-stack financial education platform using Supabase, Spring Boot, and PostgreSQL.',
      'Designed a hierarchical multi-agent system that routes each request to the best specialist agent.',
      'Added guardrail-aware orchestration for advice boundaries, refusal logic, and escalation paths.',
    ],
    tech: ['Supabase', 'Spring Boot', 'PostgreSQL', 'watsonx', 'RAG'],
    accent: 'agents',
    image: publicAsset('finsight-financial-education.png'),
    imageAlt: 'FinSight multi-agent financial education workspace',
  },
];

export const experiences = [
  {
    role: 'Software Developer Intern',
    institution: 'Intact - St. John’s, NL',
    date: 'May 2026 - Aug 2026',
    details: [
      'Built a Microsoft Teams transcript-to-database pipeline and an LLM-based classifier that flags mentions of individuals by name, notifying those people and cutting down on unnecessary meetings.',
    ],
  },
  {
    role: 'Technical Lead',
    institution: 'IBM AI Learning Lab - Spring Cohort (Remote)',
    date: 'Feb 2026 - Apr 2026',
    details: [
      'Developed a full-stack financial education platform using Supabase, Spring Boot, and PostgreSQL, with secure authentication, personalized learning, and scalable backend performance.',
      'Designed a hierarchical multi-agent system that routes each request to the best specialist agent, combining live backend context with RAG using IBM watsonx.',
      'Added guardrail-aware orchestration (advice boundaries, refusal logic, escalation paths) for safer behavior in high-stakes financial interactions.',
    ],
  },
  {
    role: 'Machine Learning Researcher',
    institution: 'Memorial University - St. John’s, NL',
    date: 'Oct 2025 - Apr 2026',
    details: [
      'Built a preprocessing pipeline using computer vision algorithms to normalize mammogram annotations into a standard layout, improving comparability for analysis and CNN training.',
      'Implemented analysis and visualization tooling (heatmaps, centroid plots) to compare annotation distributions across cohorts and run statistical tests between groups.',
      'Delivered a config-driven test selector so analysts could define subsets without code changes, reducing iteration time from minutes to seconds.',
    ],
  },
];

export const contact = {
  primaryEmail: 'aidandecker264@gmail.com',
  formAction: 'mailto:aidandecker264@gmail.com',
  intro: 'Have a question? Send me a message!',
  details:
    'I am open to software roles and collaborations. My inbox is always open!',
  links: [
    { label: 'aidandecker264@gmail.com', href: 'mailto:aidandecker264@gmail.com', icon: '@' },
    { label: 'adanield@mun.ca', href: 'mailto:adanield@mun.ca', icon: '@' },
    { label: '+1 (709) 330-2130', href: 'tel:+17093302130', icon: 'tel' },
    {
      label: 'Aidan Daniel Decker',
      href: 'https://www.linkedin.com/in/aidan-daniel-decker23/',
      icon: 'in',
    },
  ],
};
