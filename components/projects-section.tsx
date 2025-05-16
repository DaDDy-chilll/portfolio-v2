"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Real World Projects
const realWorldProjects = [
  {
    id: 1,
    title: "Japan Job",
    description:
      "A comprehensive job-matching platform connecting Myanmar professionals with Japanese companies, featuring three integrated applications.",
    fullDescription:
      "Japan Job is a multi-platform solution designed to streamline the job matching process between Myanmar professionals and Japanese companies. The platform consists of three interconnected applications: an admin website for platform management, a company website for employers, and a mobile application for job seekers.",
    image: "/placeholder.svg?height=300&width=500&text=Japan+Job",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Company+Website",
      "/placeholder.svg?height=300&width=500&text=User+App",
      "/placeholder.svg?height=300&width=500&text=Admin+Panel",
    ],
    techStack: ["React", "React Native", "Tailwind CSS", "TanStack Query", "Expo", "Node.js"],
    features: [
      "Company website for posting jobs and managing applications",
      "Tinder-style mobile app for job seekers to find and apply for positions",
      "Interview scheduling and calendar management",
      "Real-time messaging between employers and candidates",
      "Admin dashboard for platform oversight",
    ],
    challenges: [
      "Creating a seamless experience across three different platforms",
      "Implementing real-time messaging and notification systems",
      "Building an intuitive swipe-based job matching interface",
    ],
    solutions: [
      "Used React and React Native with shared component libraries",
      "Implemented WebSockets for real-time communication",
      "Designed custom gesture handlers for the mobile application",
    ],
    contributions: [
      "Developed the company website with React and Tailwind CSS",
      "Built the job posting and interview management system",
      "Created the user application with React Native and Expo",
      "Implemented the swipe-based job matching interface",
    ],
    githubUrl: "https://github.com",
    prodUrl: "https://japanjob.jp",
  },
  {
    id: 2,
    title: "Document Order System",
    description: "A paperless purchase order management system for hospitals, streamlining the procurement process.",
    fullDescription:
      "The Document Order System is a comprehensive solution designed to eliminate paper-based purchase orders in hospital environments. The system digitizes the entire procurement workflow, from requisition to approval, ordering, and delivery confirmation. It includes role-based access control, approval chains, inventory integration, and comprehensive reporting.",
    image: "/placeholder.svg?height=300&width=500&text=Document+Order+System",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Dashboard",
      "/placeholder.svg?height=300&width=500&text=Order+Form",
      "/placeholder.svg?height=300&width=500&text=Approval+Workflow",
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
    githubUrl: "https://github.com",
    demoUrl: "https://vercel.com",
  },
  {
    id: 3,
    title: "Pharmacy POS System",
    description:
      "A point-of-sale system for pharmacies that tracks inventory, manages transactions, and generates reports.",
    fullDescription:
      "This comprehensive POS system is specifically designed for pharmacies, handling everything from inventory management to sales transactions and financial reporting. The system tracks medication stock levels, expiration dates, and batch numbers while processing sales, returns, and providing detailed financial analytics.",
    image: "/placeholder.svg?height=300&width=500&text=Pharmacy+POS",
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Sales+Interface",
      "/placeholder.svg?height=300&width=500&text=Inventory",
      "/placeholder.svg?height=300&width=500&text=Reports",
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
    githubUrl: "https://github.com",
    demoUrl: "https://vercel.com",
  },
]

// Personal Projects
const personalProjects = [
  {
    id: 4,
    title: "Todo App",
    description: "A full-stack todo application with user authentication and task management features.",
    fullDescription:
      "This todo application allows users to create accounts, manage tasks, set priorities, and track completion status. It features user authentication, task filtering, and responsive design for both desktop and mobile use.",
    image: "/placeholder.svg?height=300&width=500&text=Todo+App",
    techStack: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express", "MongoDB"],
    features: [
      "User authentication and account management",
      "Task creation, editing, and deletion",
      "Priority levels and due dates",
      "Task filtering and sorting options",
      "Responsive design for all devices",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://todo-8b2y.onrender.com/",
  },
  {
    id: 5,
    title: "Quiz App",
    description: "A MERN stack quiz application with multiple-choice questions and score tracking.",
    fullDescription:
      "This quiz application is built using the MERN stack and provides users with a simple interface to answer multiple-choice questions. It tracks scores, provides immediate feedback, and stores user progress.",
    image: "/placeholder.svg?height=300&width=500&text=Quiz+App",
    techStack: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    features: [
      "Multiple choice questions with A/B answers",
      "Score tracking and history",
      "Immediate feedback on answers",
      "User progress saving",
      "Mobile-friendly design",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://vercel.com",
  },
  {
    id: 6,
    title: "Mini Online E-Shop",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and user accounts.",
    fullDescription:
      "This e-commerce application provides a complete shopping experience with product browsing, cart management, checkout process, and order tracking. It includes user authentication, product categories, search functionality, and an admin dashboard.",
    image: "/placeholder.svg?height=300&width=500&text=E-Shop",
    techStack: ["React", "Express", "MongoDB", "Node.js", "Axios", "Styled Components", "Redux", "Recharts"],
    features: [
      "User authentication and profile management",
      "Product browsing and searching",
      "Shopping cart and checkout process",
      "Order history and tracking",
      "Admin dashboard for product management",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://shoppie-gqvo.onrender.com",
  },
  {
    id: 7,
    title: "OAuth Login System",
    description: "A comprehensive authentication system with multiple OAuth providers and local login.",
    fullDescription:
      "This authentication system demonstrates various login methods including local username/password, Google OAuth, and GitHub OAuth. It includes secure session management, JWT implementation, and user profile management.",
    image: "/placeholder.svg?height=300&width=500&text=OAuth+App",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "CSS", "Passport.js", "JWT", "Cookie Session"],
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
    description: "A newsletter subscription system with user management and admin dashboard.",
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
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

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
            A showcase of my professional work and personal projects. Click on any project to see more details.
          </p>

          <Tabs defaultValue="all" className="w-full max-w-2xl mx-auto" onValueChange={setActiveTab}>
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
  )
}
