// data/portfolioData.js
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack MERN e-commerce with Stripe payments, user auth, product management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
    gradient: "from-purple-500 to-pink-500",
    demoLink: "#",
    codeLink: "#",
    image: "/assets/projects/ecommerce.jpg", // Replace with your image
    // Temporary placeholder from Unsplash:
    tempImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Hotel Room Booking System", 
    description: "Hotel reservation platform with room management, real-time booking, and Stripe payments.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
    gradient: "from-blue-500 to-cyan-500",
    demoLink: "#",
    codeLink: "#", 
    image: "/assets/projects/hotel-booking.jpg",
    tempImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Food Delivery Application",
    description: "Food delivery app with restaurant listings, order tracking, and Stripe payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Geolocation API"],
    gradient: "from-green-500 to-emerald-500", 
    demoLink: "#",
    codeLink: "#",
    image: "/assets/projects/food-delivery.jpg",
    tempImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
  }
];

// Skills data matching your projects
export const skills = [
  {
    category: "Frontend Development",
    technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    category: "Backend Development", 
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Socket.io", "Stripe API"]
  },
  {
    category: "Tools & Technologies",
    technologies: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Chrome DevTools", "MongoDB Compass"]
  }
];

// Education information
export const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Haramaya University, Ethiopia",
    year: "2022 - 2026 (Expected)",
    description: "5th Year Software Engineering Student. Specializing in Full-Stack Web Development, Database Systems, and Software Architecture. Expected graduation in 2026.",
    courses: [
      "Web Application Development",
      "Database Management Systems", 
      "Software Engineering",
      "Mobile Application Development",
      "Computer Networks",
      "Artificial Intelligence"
    ]
  }
];

// Experience information
export const experience = [
  {
    period: "2023 - Present",
    role: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    description: "Developing full-stack web applications using MERN stack. Specializing in e-commerce, booking systems, and food delivery applications with Stripe payment integration.",
    projects: ["E-Commerce Platform", "Hotel Booking System", "Food Delivery App"]
  },
  {
    period: "2022 - 2023", 
    role: "Frontend Developer",
    company: "Personal Projects",
    description: "Built responsive user interfaces and interactive web applications. Focused on modern React development and user experience design.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"]
  }
];

// About me information
export const about = {
  title: "Software Engineering Student & MERN Stack Developer",
  description: "I'm a 5th year Software Engineering student at Haramaya University, Ethiopia, passionate about building scalable web applications. I specialize in the MERN stack with expertise in React, Node.js, MongoDB, and Express. My focus is on creating full-stack solutions with modern technologies and payment integrations like Stripe.",
  highlights: [
    "Full-Stack MERN Development",
    "Stripe Payment Integration", 
    "Responsive Web Design",
    "REST API Development",
    "Database Design & Management",
    "Software Architecture"
  ],
  currentFocus: "Building production-ready applications with focus on e-commerce, booking systems, and delivery platforms while completing my Software Engineering degree."
};