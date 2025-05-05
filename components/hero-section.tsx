"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary">React</span> Developer
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Building modern web & mobile experiences</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I create responsive, user-friendly applications using React, React Native, and Next.js. Let's build
              something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/DaDDy-chilll" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/paing-sett-kyaw/" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-10">
                        <svg className="w-100 h-100" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M43.7977 89.6119V14.2843L22.5246 0L0 12.9239V41.4924L21.8989 55.0965L36.2896 46.2539L27.53 55.0965V78.2234L36.2896 89.6119H43.7977Z"
              fill="#8f8d8d"
            />
            <path
              d="M20.8707 9.52283L33.5266 17.4665V33.3538L20.8707 41.2974L8.21472 33.3538V17.4665L20.8707 9.52283Z"
              fill="white"
            />
            <path
              d="M20.8707 9.52283L33.5266 17.4665V33.3538L20.8707 41.2974L8.21472 33.3538V17.4665L20.8707 9.52283Z"
              fill="#04b518"
              fillOpacity="0.85"
            />
            <path
              d="M47.5519 89.6119V14.2843L68.8251 0L91.3496 12.9239V41.4924L69.4507 55.0965L55.06 46.2539L63.8196 55.0965V78.2234L55.06 89.6119H47.5519Z"
              fill="#8f8d8d"
            />
            <path
              d="M70.4789 9.52283L57.823 17.4665V33.3538L70.4789 41.2974L83.1349 33.3538V17.4665L70.4789 9.52283Z"
              fill="white"
            />
            <path
              d="M70.4789 9.52283L57.823 17.4665V33.3538L70.4789 41.2974L83.1349 33.3538V17.4665L70.4789 9.52283Z"
              fill="#04b518"
              fillOpacity="0.85"
            />
          </svg>
              </div>
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/profile-image.png"
                    alt="Paing Sett Kyaw"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-medium">Paing Sett Kyaw</h3>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
