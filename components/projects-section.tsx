"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Real World Projects
const realWorldProjects = [
  {
    id: 1,
    title: "Japan Job",
    description:
      "A multi-platform job-matching system connecting Myanmar professionals with Japanese employers. Includes a React Native mobile app, user web portal, company web portal, and admin dashboard.",
    fullDescription:
      "Japan Job is a complete recruitment ecosystem designed to streamline hiring between Myanmar job seekers and Japanese companies. The platform consists of four integrated applications: (1) a React Native mobile app for users, (2) a user web application, (3) a company web application for employers, and (4) an admin dashboard for platform management. I developed the user mobile application, user web app, and company web portal.",
    image: "/japanjob/logo.png",
    screenshots: [
      "/japanjob/client.png",
      "/japanjob/client2.png",
      "/japanjob/client3.png",
      "/japanjob/client4.png",
      "/japanjob/admin.png",
      "/japanjob/mobile1.jpg",
      "/japanjob/mobile2.jpg",
      "/japanjob/mobile3.jpg",
      "/japanjob/mobile4.jpg",
    ],
    techStack: [
      "React Native",
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Expo",
      "Node.js",
      "REST APIs",
    ],
    features: [
      "User mobile app for browsing jobs, swiping, and applying",
      "Company web portal for posting jobs and reviewing applicants",
      "User web platform for managing profiles and tracking applications",
      "Interview scheduling with built-in calendar tools",
      "Real-time communication between employers and job seekers",
    ],
    challenges: [
      "Maintaining consistent UX across mobile and web platforms",
      "Implementing reliable real-time messaging",
      "Building an intuitive swipe-to-apply interface on mobile",
    ],
    solutions: [
      "Shared UI/logic patterns between React and React Native apps",
      "Used WebSockets for fast and stable real-time chat",
      "Custom gesture handlers and animations for swipe-based job matching",
    ],
    contributions: [
      "Developed the React Native user mobile application (Expo)",
      "Built the user web application in React & Tailwind CSS",
      "Built the company web portal for job posting and candidate management",
      "Integrated TanStack Query for efficient server-state management",
      "Collaborated with backend team to integrate REST API endpoints",
    ],
    githubUrl: "",
    demoUrl: "https://japanjob.jp",
    googleUrl: "https://play.google.com/store/apps/details?id=com.japanjob.app",
    appStoreUrl: "https://apps.apple.com/jp/app/japan-job/id6446256287",
  },
  {
    id: 2,
    title: "Document Order System For DMH",
    description:
      "A paperless purchase order management system for hospitals, streamlining the procurement process.",
    fullDescription:
      "The Document Order System is a comprehensive solution designed to eliminate paper-based purchase orders in hospital environments. The system digitizes the entire procurement workflow, from requisition to approval, ordering, and delivery confirmation. It includes role-based access control, approval chains, inventory integration, and comprehensive reporting.",
    image: "/dmh/logo.png",
    screenshots: [
      "/dmh/client.png",
      "/dmh/dmh1.png",
      "/dmh/dmh2.png",
      // "/dmh/client2.png",
      // "/dmh/admin.png",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    features: [
      "Digital purchase order creation and management",
      "Multi-level approval workflows",
      "Real-time order tracking",
      "Document history and audit trails",
      "Reporting and analytics dashboard",
    ],
    challenges: [
      "Replicating complex paper-based approval workflows in digital form",
      "Ensuring security and compliance with healthcare regulations",
      "Creating an intuitive interface for users with varying technical skills",
    ],
    solutions: [
      "Implemented a flexible workflow engine to model existing processes",
      "Built comprehensive access controls and audit logging",
      "Designed a simple, step-by-step interface with contextual help",
    ],
    githubUrl: "",
    demoUrl: "",
  },
    {
    id: 3,
    title: "Document Order System For Parami",
    description:
      "A paperless purchase order management system for hospitals, streamlining the procurement process.",
    fullDescription:
      "The Document Order System is a comprehensive solution designed to eliminate paper-based purchase orders in hospital environments. The system digitizes the entire procurement workflow, from requisition to approval, ordering, and delivery confirmation. It includes role-based access control, approval chains, inventory integration, and comprehensive reporting.",
    image: "/parami/logo.jpg",
    screenshots: [
      "/parami/parami1.png",
      "/parami/parami2.png",
      "/parami/parami3.png",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    features: [
      "Digital purchase order creation and management",
      "Single-level approval workflows",
      "Real-time order tracking",
      "Document history and audit trails",
      "Reporting and analytics dashboard",
    ],
    challenges: [
      "Replicating complex paper-based approval workflows in digital form",
      "Ensuring security and compliance with healthcare regulations",
      "Creating an intuitive interface for users with varying technical skills",
    ],
    solutions: [
      "Implemented a flexible workflow engine to model existing processes",
      "Built comprehensive access controls and audit logging",
      "Designed a simple, step-by-step interface with contextual help",
    ],
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 4,
    title: "Pharmacy POS System",
    description:
      "A point-of-sale system for pharmacies that tracks inventory, manages transactions, and generates reports.",
    fullDescription:
      "This comprehensive POS system is specifically designed for pharmacies, handling everything from inventory management to sales transactions and financial reporting. The system tracks medication stock levels, expiration dates, and batch numbers while processing sales, returns, and providing detailed financial analytics.",
    image: "/pos/logo.png",
    screenshots: [
      "/pos/client.png",
      // "/pos/client2.png",
      // "/pos/admin.png",
    ],
    techStack: ["React", "NestJS", "PostgreSQL", "Redux", "Chart.js"],
    features: [
      "Inventory management with expiration date tracking",
      "Barcode scanning and quick search",
      "Customer management and loyalty program",
      "Prescription tracking and refill reminders",
      "Comprehensive sales and inventory reports",
    ],
    challenges: [
      "Managing complex inventory with batch tracking and expiration dates",
      "Ensuring high performance during busy periods",
      "Creating intuitive reports for business decision-making",
    ],
    solutions: [
      "Designed an optimized database schema for pharmaceutical inventory",
      "Implemented caching and optimized queries for performance",
      "Created customizable dashboard with interactive visualizations",
    ],
    githubUrl: "",
    demoUrl: "https://pos.y-care.app/",
  },
];

// Personal Projects
const personalProjects = [
  {
    id: 4,
    title: "Todo App",
    description:
      "A full-stack todo application with user authentication and task management features.",
    fullDescription:
      "This todo application allows users to create accounts, manage tasks, set priorities, and track completion status. It features user authentication, task filtering, and responsive design for both desktop and mobile use.",
    image: "/todo/logo.png",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    features: [
      "User authentication and account management",
      "Task creation, editing, and deletion",
      "Priority levels and due dates",
      "Task filtering and sorting options",
      "Responsive design for all devices",
    ],
    screenshots: ["/todo/client.png", "/todo/client1.png", "/todo/client2.png"],
    githubUrl: "https://github.com/who-0/todoapp",
    demoUrl: "https://todoapp-y9wf.onrender.com",
  },
  {
    id: 5,
    title: "Quiz App",
    description:
      "A MERN stack quiz application with multiple-choice questions and score tracking.",
    fullDescription:
      "This quiz application is built using the MERN stack and provides users with a simple interface to answer multiple-choice questions. It tracks scores, provides immediate feedback, and stores user progress.",
    image: "/mathquiz/logo.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    features: [
      "Multiple choice questions with A/B answers",
      "Score tracking and history",
      "Immediate feedback on answers",
      "User progress saving",
      "Mobile-friendly design",
    ],
    screenshots: [
      "/mathquiz/client.png",
      "/mathquiz/client1.png",
      "/mathquiz/client2.png",
    ],
    githubUrl: "https://github.com/DaDDy-chilll/math-quiz",
    demoUrl: "https://daddy-chilll.github.io/math-quiz/",
  },
  {
    id: 6,
    title: "Mini Online E-Shop",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and user accounts.",
    fullDescription:
      "This e-commerce application provides a complete shopping experience with product browsing, cart management, checkout process, and order tracking. It includes user authentication, product categories, search functionality, and an admin dashboard.",
    image: "/shoppie/logo.png",
    techStack: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Axios",
      "Styled Components",
      "Redux",
      "Recharts",
    ],
    features: [
      "User authentication and profile management",
      "Product browsing and searching",
      "Shopping cart and checkout process",
      "Order history and tracking",
      "Admin dashboard for product management",
    ],
    screenshots: [
      "/shoppie/client.png",
      "/shoppie/client1.png",
      "/shoppie/client2.png",
      "/shoppie/client3.png",
    ],
    githubUrl: "https://github.com/who-0/shoppie",
    demoUrl: "https://shoppie-gqvo.onrender.com",
  },
  {
    id: 7,
    title: "OAuth Login System",
    description:
      "A comprehensive authentication system with multiple OAuth providers and local login.",
    fullDescription:
      "This authentication system demonstrates various login methods including local username/password, Google OAuth, and GitHub OAuth. It includes secure session management, JWT implementation, and user profile management.",
    image: "/placeholder.svg?height=300&width=500&text=OAuth+App",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "CSS",
      "Passport.js",
      "JWT",
      "Cookie Session",
    ],
    features: [
      "Local username/password authentication",
      "Google OAuth integration",
      "GitHub OAuth integration",
      "Secure session management",
      "User profile management",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://oauth-h3cg.onrender.com",
  },
  {
    id: 8,
    title: "Newsletter Signup",
    description:
      "A newsletter subscription system with user management and admin dashboard.",
    fullDescription:
      "This newsletter signup application allows visitors to subscribe to a newsletter and includes an admin interface to manage subscribers. It features form validation, email verification, and subscriber analytics.",
    image: "/placeholder.svg?height=300&width=500&text=Newsletter",
    techStack: ["HTML", "CSS", "EJS", "Node.js", "Express", "MongoDB"],
    features: [
      "Newsletter subscription form",
      "Email validation",
      "Admin dashboard for subscriber management",
      "Subscriber analytics and reporting",
      "Export subscriber list functionality",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://newsletter-c3an.onrender.com",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-center inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
            <div className="h-1 w-32 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my professional work and personal projects. Click on
            any project to see more details.
          </p>

          <Tabs
            defaultValue="all"
            className="w-full max-w-2xl mx-auto"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="real-world">Real World</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Real World Projects */}
        {(activeTab === "all" || activeTab === "real-world") && (
          <div className="mb-16">
            {activeTab === "all" && (
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-semibold mb-8 text-center"
              >
                Real World Projects
              </motion.h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realWorldProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Personal Projects */}
        {(activeTab === "all" || activeTab === "personal") && (
          <div>
            {activeTab === "all" && (
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-semibold mb-8 text-center"
              >
                Personal Projects
              </motion.h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
