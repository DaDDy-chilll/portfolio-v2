"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

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
    githubUrl: null,
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
    githubUrl: null,
    demoUrl: null,
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
    githubUrl: null,
    demoUrl: null,
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
    image: "images/todo.svg",
    techStack: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express", "MongoDB"],
    features: [
      "User authentication and account management",
      "Task creation, editing, and deletion",
      "Priority levels and due dates",
      "Task filtering and sorting options",
      "Responsive design for all devices",
    ],
    githubUrl: "https://github.com/who-0/todoapp",
    demoUrl: "https://todoapp-y9wf.onrender.com/",
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
    githubUrl: "https://github.com/who-0/quiz-app",
    demoUrl: "https://vercel.com",
  },
  {
    id: 6,
    title: "Mini Online E-Shop",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and user accounts.",
    fullDescription:
      "This e-commerce application provides a complete shopping experience with product browsing, cart management, checkout process, and order tracking. It includes user authentication, product categories, search functionality, and an admin dashboard.",
    image: "images/shoppie.svg",
    techStack: ["React", "Express", "MongoDB", "Node.js", "Axios", "Styled Components", "Redux", "Recharts"],
    features: [
      "User authentication and profile management",
      "Product browsing and searching",
      "Shopping cart and checkout process",
      "Order history and tracking",
      "Admin dashboard for product management",
    ],
    githubUrl: "https://github.com/who-0/shoppie",
    demoUrl: "https://shoppie-gqvo.onrender.com",
  },
  {
    id: 7,
    title: "OAuth Login System",
    description: "A comprehensive authentication system with multiple OAuth providers and local login.",
    fullDescription:
      "This authentication system demonstrates various login methods including local username/password, Google OAuth, and GitHub OAuth. It includes secure session management, JWT implementation, and user profile management.",
    image: "images/oauth.svg",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "CSS", "Passport.js", "JWT", "Cookie Session"],
    features: [
      "Local username/password authentication",
      "Google OAuth integration",
      "GitHub OAuth integration",
      "Secure session management",
      "User profile management",
    ],
    githubUrl: "https://github.com/who-0/Oauth",
    demoUrl: "https://oauth-h3cg.onrender.com",
  },
  {
    id: 8,
    title: "Newsletter Signup",
    description: "A newsletter subscription system with user management and admin dashboard.",
    fullDescription:
      "This newsletter signup application allows visitors to subscribe to a newsletter and includes an admin interface to manage subscribers. It features form validation, email verification, and subscriber analytics.",
    image: "images/newsletter.svg",
    techStack: ["HTML", "CSS", "EJS", "Node.js", "Express", "MongoDB"],
    features: [
      "Newsletter subscription form",
      "Email validation",
      "Admin dashboard for subscriber management",
      "Subscriber analytics and reporting",
      "Export subscriber list functionality",
    ],
    githubUrl: "https://github.com/who-0/newsletter",
    demoUrl: "https://newsletter-c3an.onrender.com",
  },
  {
    id: 9,
    title: "Guess My Number",
    description: "A fun number-guessing game where players guess a secret number between 1-20 within 20 attempts.",
    fullDescription: "Interactive JavaScript game with DOM manipulation. Features score tracking, high-score recording, and dynamic UI feedback. Perfect for learning core JS concepts.",
    image: "images/guessnumber.svg",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Random number generation (1-20)",
      "20 attempts per game",
      "High-score persistence",
      "Visual feedback (color changes, messages)",
      "Reset game functionality"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/guessmynumber",
    demoUrl: "https://daddy-chilll.github.io/guessmynumber/"
  },
  {
    id: 10,
    title: "Pig Game",
    description: "A strategic dice game where two players race to reach 100 points.",
    fullDescription: "Turn-based game implementing DOM manipulation. Players roll dice to accumulate points but risk losing everything if they roll a 1. Demonstrates state management in vanilla JS.",
    image: "images/piggame.svg",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "2-player turn system",
      "Dynamic dice roll animations",
      "Score threshold (100 points to win)",
      "Hold/roll button logic",
      "Mobile-responsive UI"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/pig-game",
    demoUrl: "https://daddy-chilll.github.io/pig-game/"
  },
  {
    id: 11,
    title: "CSS + JS Clock",
    description: "A real-time analog clock with smooth animations.",
    fullDescription: "Demonstrates CSS transforms and JavaScript timing functions. Second, minute, and hour hands update smoothly without UI jumps.",
    image: "images/clock.svg",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Real-time updates using Date()",
      "CSS transform rotations",
      "Minimalist design",
      "No external libraries"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/cssjsclock",
    demoUrl: "https://daddy-chilll.github.io/cssjsclock/"
  },
  {
    id: 12,
    title: "Drum Kit",
    description: "Interactive virtual drum machine triggered by keyboard or clicks.",
    fullDescription: "Play drum sounds by pressing ASDFGHJKL keys or clicking buttons. Built as part of JavaScript30 challenge, showcasing event listeners and audio API.",
    image: "images/drum.svg",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "9 drum sound pads",
      "Keydown event listeners",
      "Visual feedback on activation",
      "Responsive design"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/drumkit-js30",
    demoUrl: "https://daddy-chilll.github.io/drumkit-js30/"
  },
  {
    id: 13,
    title: "CSS Variables",
    description: "Dynamic CSS variable control panel with live preview.",
    fullDescription: "Adjust spacing, blur, and base color via sliders to see changes in real-time. Demonstrates CSS custom properties and JS event handling.",
    image: "images/cssvariable.svg",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "3 adjustable parameters",
      "Live DOM updates",
      "Data attributes for JS hooks",
      "Visual feedback on changes"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/css-variable",
    demoUrl: "https://daddy-chilll.github.io/css-variable/"
  },
  {
    id: 14,
    title: "QR Code Generator",
    description: "A dynamic QR code generator that converts input text/URLs into scannable QR codes.",
    fullDescription: "This Node.js application uses the 'qrcode' library to generate QR codes in real-time. Users can input any text or URL, and the system outputs a downloadable QR image with error correction.",
    image: "images/qrcode.svg",
    techStack: ["Node.js", "Express", "EJS", "QRcode Library"],
    features: [
      "Real-time QR code generation",
      "Customizable error correction levels",
      "Downloadable PNG output",
      "Input validation",
      "Responsive web interface"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/qrcode",
    demoUrl: "https://qrcode-bzya.onrender.com"
  },
  {
    id: 15,
    title: "Email Authentication System",
    description: "A full-stack email verification system with JWT authentication and nodemailer integration.",
    fullDescription: "Secure user registration flow with email verification links. Implements JWT for session management, password hashing with bcrypt, and SMTP email delivery via nodemailer. Includes protected routes and token expiration.",
    image: "images/verifymail.svg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    features: [
      "Email verification workflow",
      "JWT token authentication",
      "Password hashing (bcrypt)",
      "Protected routes",
      "React + MUI frontend"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/nodemailer",
    demoUrl: "https://nodemailer-x5ur.onrender.com/"
  },
  {
    id: 16,
    title: "Image Uploader",
    description: "A file upload system with MongoDB GridFS storage for handling large images.",
    fullDescription: "Uses Multer middleware with GridFS to store images in MongoDB. Features file validation, progress tracking, and responsive gallery display. Demonstrates streaming files from database.",
    image: "images/upload.svg",
    techStack: ["Node.js", "Express", "MongoDB", "Multer", "GridFS"],
    features: [
      "File type/size validation",
      "Progress indicators",
      "GridFS storage for large files",
      "Image gallery view",
      "UUID-based file naming"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/multer-image-upload",
    demoUrl: "https://image-uploader-dawe.onrender.com"
  },
  {
    id: 17,
    title: "Weather Proxy API",
    description: "A rate-limited weather data proxy server that caches API responses.",
    fullDescription: "Acts as middleware between frontend and weather APIs. Implements request caching, rate limiting (express-rate-limit), and API key rotation. Built to demonstrate backend optimization techniques.",
    image: "images/weather.svg",
    techStack: ["Node.js", "Express", "API Cache", "Rate Limiting"],
    features: [
      "Cached API responses (15 mins)",
      "100 requests/hour rate limit",
      "Multiple weather data sources",
      "Error handling fallbacks",
      "Lightweight (~2MB memory)"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/proxy-server",
    demoUrl: "https://proxyserver-08yd.onrender.com/"
  },
  {
    id: 18,
    title: "Two-Factor Authentication",
    description: "A TOTP-based 2FA system with QR code setup and backup codes.",
    fullDescription: "Implements RFC 6238 time-based OTPs using Speakeasy. Generates QR codes for authenticator apps and provides emergency backup codes. Integrates with existing auth systems.",
    image: "images/2fa.svg",
    techStack: ["Node.js", "Speakeasy", "MongoDB", "EJS"],
    features: [
      "TOTP/RFC 6238 compliant",
      "QR code enrollment",
      "Backup code generation",
      "30-second token expiry",
      "Session management"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/2FA",
    demoUrl: "https://twofa-lscw.onrender.com/"
  },
  {
    id: 19,
    title: "MySQL Login System",
    description: "A traditional authentication system using MySQL with cookie-based sessions.",
    fullDescription: "Demonstrates relational database auth with password hashing (bcryptjs), JWT tokens, and Handlebars templates. Includes password reset flow and CSRF protection.",
    image: "images/node-mysql.svg",
    techStack: ["Node.js", "MySQL", "Handlebars", "JWT"],
    features: [
      "MySQL user storage",
      "Cookie-based sessions",
      "Password reset flow",
      "CSRF protection",
      "Server-side rendering"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/node-mysql-login",
    demoUrl: "https://node-mysql-login-zvs7.onrender.com/"
  },
  {
    id: 20,
    title: "Calculator",
    description: "A responsive calculator with keyboard support and arithmetic operations.",
    fullDescription: "Vanilla JavaScript calculator supporting basic operations (+, -, ×, ÷) with decimal handling. Features keyboard input, error states, and responsive design.",
    image: "images/calculator.svg",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Keyboard event support",
      "Decimal precision handling",
      "Operation chaining",
      "Error state detection",
      "Mobile-responsive UI"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/calculator",
    demoUrl: "https://daddy-chilll.github.io/calculator/"
  },
  {
    id: 21,
    title: "CinemaCraze",
    description: "A movie booking platform with seat selection and payment processing.",
    fullDescription: "School group project featuring real-time seat availability, Stripe payment integration, and admin dashboard. I developed the payment gateway and ticket generation system.",
    image: "/placeholder.svg?height=300&width=500&text=CinemaCraze",
    techStack: ["HTML", "CSS", "JavaScript", "Stripe API"],
    features: [
      "Interactive seat map",
      "Stripe payment processing",
      "PDF ticket generation",
      "Admin analytics dashboard",
      "Responsive booking flow"
    ],
    githubUrl: "https://github.com/ExBrain-B13-Group-1/CinemaCraze",
    demoUrl: "https://cinemacraze.onrender.com/"
  },
  {
    id: 22,
    title: "Currency Exchange",
    description: "Real-time currency converter using public forex API data.",
    fullDescription: "School project fetching live exchange rates from API. Features historical data charts, amount conversion, and 160+ currency support. Demonstrates API error handling.",
    image: "images/currency.svg",
    techStack: ["HTML", "CSS", "JavaScript", "ExchangeRate-API"],
    features: [
      "Live rate updates (60min cache)",
      "Amount conversion",
      "Historical rate charts",
      "Currency search",
      "Offline error states"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/exchange",
    demoUrl: "https://daddy-chilll.github.io/exchange/"
  },
  {
    id: 23,
    title: "Robot Friends",
    description: "A React app displaying robot cards with search functionality.",
    fullDescription: "Fetches robot profiles from an API, displays them as cards, and allows filtering via search. Demonstrates React state management and API calls.",
    image: "images/robot.svg",
    techStack: ["React", "CSS"],
    features: [
      "Dynamic API data fetching",
      "Real-time search filtering",
      "Card-based UI",
      "Responsive grid layout",
      "Loading state handling"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/myrobotsfriend",
    demoUrl: "https://daddy-chilll.github.io/myrobotsfriend/"
  },
  {
    id: 24,
    title: "2FA Authentication",
    description: "A secure two-factor authentication system with email verification.",
    fullDescription: "Implements Speakeasy for OTP generation and Node Mailer for email delivery. Includes JWT for session management and MongoDB for user storage.",
    image: "images/2fa.svg",
    techStack: ["Node.js", "Express", "MongoDB", "Speakeasy"],
    features: [
      "Time-based OTP (TOTP)",
      "QR code setup for authenticator apps",
      "Email verification fallback",
      "JWT session management",
      "Rate limiting for security"
    ],
    githubUrl: "https://github.com/DaDDy-chilll/2FA",
    demoUrl: "https://twofa-lscw.onrender.com/"
  }
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [showAllProjects, setShowAllProjects] = useState({
    all: false,
    realWorld: false,
    personal: false
  })

  // Combine and sort projects by ID
  const allProjects = [...realWorldProjects, ...personalProjects].sort((a, b) => a.id - b.id)
  
  // Get projects to show based on active tab and showAll state
  const getProjectsToShow = () => {
    switch (activeTab) {
      case "all":
        return showAllProjects.all ? allProjects : allProjects.slice(0, 3)
      case "real-world":
        return showAllProjects.realWorld ? realWorldProjects : realWorldProjects.slice(0, 3)
      case "personal":
        return showAllProjects.personal ? personalProjects : personalProjects.slice(0, 3)
      default:
        return []
    }
  }

  const projectsToShow = getProjectsToShow()

  // Check if there are more projects to show in the current tab
  const hasMoreProjects = () => {
    switch (activeTab) {
      case "all":
        return allProjects.length > 3
      case "real-world":
        return realWorldProjects.length > 3
      case "personal":
        return personalProjects.length > 3
      default:
        return false
    }
  }

  // Handle show more click
  const handleShowMore = () => {
    setShowAllProjects(prev => ({
      ...prev,
      [activeTab]: true
    }))
  }

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on
          </p>

          <Tabs defaultValue="all" className="w-full max-w-2xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="real-world">Real World</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
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

        {!showAllProjects[activeTab as keyof typeof showAllProjects] && hasMoreProjects() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button
              onClick={handleShowMore}
              className="bg-primary hover:bg-primary/90"
            >
              Show More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
