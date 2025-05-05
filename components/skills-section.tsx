"use client"

import { motion } from "framer-motion"
import { Smartphone, Code, Server, Database, GitBranch, Layers } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-8 w-8 text-primary" />,
    items: [
      { name: "React", percentage: 85 },
      { name: "Next", percentage: 75 },
      { name: "Vue", percentage: 75 },
      { name: "Nuxt", percentage: 80 },
      { name: "Tailwind Css", percentage: 80 },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    items: [
      { name: "React Native", percentage: 85 },
      { name: "Expo", percentage: 80 },
      { name: "Redux", percentage: 75 },
      { name: "Native APIs", percentage: 70 },
      { name: "App Store", percentage: 65 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    items: [
      { name: "Node.js", percentage: 85 },
      { name: "Express", percentage: 80 },
      { name: "Nest.js", percentage: 90 },
      { name: "Laravel", percentage: 85 },
      { name: "GraphQL", percentage: 70 },
    ],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 text-primary" />,
    items: [
      { name: "MongoDB", percentage: 90 },
      { name: "PostgreSQL", percentage: 75 },
      { name: "Firebase", percentage: 85 },
      { name: "Prisma", percentage: 70 },
      { name: "SQL", percentage: 80 },
    ],
  },
  {
    category: "DevOps",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    items: [
      { name: "Git", percentage: 95 },
      { name: "CI/CD", percentage: 80 },
      { name: "Docker", percentage: 70 },
      { name: "AWS", percentage: 65 },
      { name: "Vercel", percentage: 90 },
    ],
  },
  {
    category: "Other",
    icon: <Layers className="h-8 w-8 text-primary" />,
    items: [
      { name: "Testing", percentage: 75 },
      { name: "Pentest", percentage: 70 },
      { name: "Networking", percentage: 85 },
      { name: "SEO", percentage: 70 },
      { name: "UI/UX", percentage: 85 },
    ],
  },
]

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium text-muted-foreground">{percentage}%</span>
      </div>
      <Progress value={progress} className="h-2" indicatorClassName="bg-gradient-to-r from-primary/80 to-primary" />
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-center inline-block mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h2>
          <div className="h-1 w-32 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in modern web and mobile development technologies, focusing on creating performant and
            user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item) => (
                  <SkillBar key={item.name} name={item.name} percentage={item.percentage} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-border/40"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold">Ready to work together?</h3>
                <p className="text-muted-foreground">Let's build something amazing</p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
