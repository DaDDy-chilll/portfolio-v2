"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import ProjectModal from "./project-modal"

export interface Project {
  id: number
  title: string
  description: string
  fullDescription?: string
  image: string
  screenshots?: string[]
  techStack: string[]
  challenges?: string[]
  solutions?: string[]
  features?: string[]
  contributions?: string[]
  githubUrl: string | null
  demoUrl?: string | null
  prodUrl?: string | null
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <span className="text-white text-sm font-medium flex items-center gap-1">
                View Details <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>
          <CardHeader>
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 3 && <Badge variant="outline">+{project.techStack.length - 3}</Badge>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" asChild onClick={(e) => e.stopPropagation()}>
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      <ProjectModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
