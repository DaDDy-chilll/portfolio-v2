"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Briefcase, GraduationCap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          <div className="text-center inline-block mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=400" alt="Profile" fill className="object-cover" />
              <div className="absolute">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244511.9271574595!2d96.17133955385268!3d16.75146866010315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2ssg!4v1746420309930!5m2!1sen!2ssg"
                  width="700"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40">
              <h3 className="text-xl font-semibold mb-2">Paing Sett Kyaw</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Yangon, Myanmar</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Passionate React Developer with 2+ Years Experience</h3>
            <p className="text-muted-foreground mb-6">
              I'm a full-stack developer specializing in React and React Native development. With a strong foundation in
              JavaScript and TypeScript, I build performant, accessible, and user-friendly applications that solve
              real-world problems.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development began during college, where I discovered my passion for creating interactive
              user interfaces. Since then, I've worked with startups and established companies to deliver high-quality
              software solutions.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Frontend Developer (Remote)</h4>
                  <p className="text-sm text-muted-foreground">Exbrain. (2024 - Present)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Full Stack Developer (Onsite)</h4>
                  <p className="text-sm text-muted-foreground">MyanCare Telemedicine (2025 - Present)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Diploma in Network Communications</h4>
                  <p className="text-sm text-muted-foreground">KMD (2018 - 2019)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem Solver</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Player</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Detail-Oriented</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Continuous Learner</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
