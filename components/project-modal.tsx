"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, X, Code, CheckCircle, AlertCircle, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Project } from "./project-card"

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(project.image)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-start justify-between">
          <div>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-base mt-1">{project.description}</DialogDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="mt-1">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-4">
          <div className="lg:col-span-3 space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/40">
              <Image src={activeImage || project.image} alt={project.title} fill className="object-cover" />
            </div>

            {project.screenshots && project.screenshots.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveImage(project.image)}
                  className={`flex-shrink-0 relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                    activeImage === project.image ? "border-primary" : "border-border/40"
                  }`}
                >
                  <Image src={project.image || "/placeholder.svg"} alt="Main" fill className="object-cover" />
                </button>
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(screenshot)}
                    className={`flex-shrink-0 relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                      activeImage === screenshot ? "border-primary" : "border-border/40"
                    }`}
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`Screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild className="w-full">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  View Source Code
                </Link>
              </Button>

              {project.demoUrl && (
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Link>
                </Button>
              )}

              {project.prodUrl && (
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.prodUrl} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Production Site
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            {project.challenges && project.challenges.length > 0 && (
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            )}
            {project.contributions && project.contributions.length > 0 && (
              <TabsTrigger value="contributions">My Role</TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="overview" className="p-4 border rounded-md mt-2">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground">{project.fullDescription || project.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="features" className="p-4 border rounded-md mt-2">
            <ul className="space-y-2">
              {project.features ? (
                project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))
              ) : (
                <li className="text-muted-foreground">No features listed for this project.</li>
              )}
            </ul>
          </TabsContent>
          {project.challenges && project.challenges.length > 0 && (
            <TabsContent value="challenges" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" /> Challenges
                  </h4>
                  <ul className="space-y-2 pl-6 list-disc">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                {project.solutions && project.solutions.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" /> Solutions
                    </h4>
                    <ul className="space-y-2 pl-6 list-disc">
                      {project.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </TabsContent>
          )}
          {project.contributions && project.contributions.length > 0 && (
            <TabsContent value="contributions" className="p-4 border rounded-md mt-2">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" /> My Contributions
                </h4>
                <ul className="space-y-2 pl-6 list-disc">
                  {project.contributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
