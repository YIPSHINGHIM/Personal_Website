export type WorkHighlightData = { id: string; title: string; description: string; tags: readonly string[] };
export type CareerEntry = { role: string; company: string; dates: string };
export type EducationEntry = { institution: string; degree: string; dates: string; result: string };
export type ProjectData = { id: string; title: string; category: string; summary: string; brief: string; contribution: string; href: string; linkLabel: string };
export type ArchivedProject = { title: string; summary: string; href: string };

export const profile = {
  name: 'Shing Him Yip', role: 'Software Developer', employer: 'Content Guru', currentDates: 'Jan 2024–present',
  intro: "I'm Shing Him, a software developer at Content Guru. I build enterprise real-time experiences and, alongside my full-time role, independent SaaS products and websites for selected clients.",
  about: [
    'I enjoy turning ideas into useful software—from enterprise communication tools to independent products and business websites.',
    'My full-time work centres on frontend architecture, real-time systems, and secure platforms. Outside that role, I explore product ideas and work on selected client projects.',
  ],
} as const;
export const contacts = {
  linkedin: 'https://www.linkedin.com/in/shing-him-yip',
  github: 'https://github.com/YIPSHINGHIM',
  resume: '/ShingHimYipCV.pdf',
} as const;
export const workHighlights: readonly WorkHighlightData[] = [
  { id: 'frontend', title: 'Enterprise experiences.', description: 'Led React frontend development and architecture for video conferencing, screen monitoring, and messaging within a CCaaS platform used by enterprise and government clients.', tags: ['React', 'Frontend architecture'] },
  { id: 'real-time', title: 'Connected across borders.', description: 'Maintained and optimised global WebRTC infrastructure supporting deployments across 50+ countries.', tags: ['WebRTC', 'Video communication'] },
  { id: 'security', title: 'Built for trust.', description: 'Contributed to FedRAMP High readiness through container hardening and signing, vulnerability scanning, automated security enforcement, and FIPS compliance.', tags: ['Container security', 'Compliance'] },
];
export const career: readonly CareerEntry[] = [
  { role: 'Graduate Software Engineer', company: 'Content Guru', dates: 'Sep 2023–Dec 2023' },
  { role: 'Full Stack Web Developer Intern', company: 'Oliver McCourty Ltd', dates: 'Jun 2022–Sep 2022' },
  { role: 'Event Support Crew', company: "Royal Holloway Students' Union", dates: 'Sep 2022–Aug 2023' },
];
export const education: readonly EducationEntry[] = [
  { institution: 'Royal Holloway, University of London', degree: 'BSc Computer Science', dates: '2020–2023', result: 'First Class Honours' },
  { institution: 'PolyU Hong Kong Community College', degree: "Associate's Degree, Engineering", dates: '2019–2020', result: 'GPA: 3.36' },
];
export const featuredProjects: readonly ProjectData[] = [
  { id: 'property-checker', title: 'UK Property Checker', category: 'Independent SaaS', summary: 'A clearer starting point for researching UK properties.', brief: 'Property reports bringing together sales history, crime information, energy performance, and connectivity data.', contribution: 'Creator of an independent SaaS side project.', href: 'https://ukpropertychecker.com/', linkLabel: 'Explore the product' },
  { id: 'mindful-craft', title: 'Mindful Craft Handmades', category: 'Freelance client website', summary: 'An online home for a handmade craft business.', brief: 'Help a client create a website for their business.', contribution: 'Website development for a freelance client.', href: 'https://www.mindfulcrafthandmades.com/', linkLabel: 'Visit the website' },
];
export const archivedProjects: readonly ArchivedProject[] = [
  { title: 'Todo List', summary: 'Web application using React and Django, with features including adding, editing, and deleting tasks, and fetching data from a REST API.', href: 'https://github.com/YIPSHINGHIM/TodoList_using_React_and_Django' },
  { title: 'Restaurant Management System', summary: 'A restaurant management system for table bookings, order placement, and real-time inventory tracking.', href: 'https://github.com/YIPSHINGHIM/Team_project' },
  { title: 'Personal Website', summary: 'My responsive portfolio, showcasing engineering work, independent projects, and client websites.', href: 'https://github.com/YIPSHINGHIM/Personal_Website' },
  { title: 'Stock Price Message Bot', summary: 'A Python bot retrieving stock prices through the Alpha Vantage API and delivering customised price alerts via Telegram.', href: 'https://github.com/YIPSHINGHIM/Stock-price-message-bot' },
  { title: 'Auto Video Uploading Bot', summary: 'Python and Selenium automation for uploading videos to multiple social media platforms.', href: 'https://github.com/YIPSHINGHIM/upload_video_bot' },
  { title: 'VaR calculation web app', summary: 'A web application for calculating Value at Risk and assessing financial risk.', href: 'https://github.com/YIPSHINGHIM/VaR_Web_app' },
];
export const skills = ['React', 'JavaScript', 'WebRTC', 'Python', 'Docker', 'Next.js'] as const;
