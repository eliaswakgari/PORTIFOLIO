export interface Project {
  id: number;
  title: string;
  description: string;
  gradient: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'technical' | 'professional';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with user authentication, product management, and payment integration.",
    gradient: "from-purple-500 to-pink-500",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop functionality and real-time updates.",
    gradient: "from-cyan-500 to-blue-500",
    technologies: ["React", "Express", "MongoDB", "Socket.io"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing and analyzing social media performance across platforms.",
    gradient: "from-green-400 to-blue-500",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    demoLink: "#",
    codeLink: "#"
  }
];

export const technicalSkills: Skill[] = [
  { name: "React.js", percentage: 95, category: "technical" },
  { name: "Node.js & Express", percentage: 90, category: "technical" },
  { name: "MongoDB", percentage: 85, category: "technical" },
  { name: "Redux Toolkit", percentage: 88, category: "technical" },
  { name: "Tailwind CSS", percentage: 92, category: "technical" }
];

export const professionalSkills: Skill[] = [
  { name: "Problem Solving", percentage: 90, category: "professional" },
  { name: "Communication", percentage: 85, category: "professional" },
  { name: "Team Collaboration", percentage: 88, category: "professional" },
  { name: "Project Management", percentage: 80, category: "professional" },
  { name: "Client Communication", percentage: 87, category: "professional" }
];