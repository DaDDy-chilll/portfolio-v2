"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  LayoutDashboard,
  Sparkles,
  Code2,
  Terminal,
  Database,
  Server,
  CpuIcon,
  Braces,
  Brackets,
  Bug,
  CodeXml,
  CpuOff,
  FileCode,
  FileJson,
  FileTerminal,
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Github,
  Gitlab,
  HardDrive,
  Laptop,
  Laptop2,
  Monitor,
  Network,
  ServerCrash,
  ServerOff,
  TerminalSquare,
  ArrowRight,
  Download,
  Linkedin,
  Facebook,
  Type,
  Variable,
  Webhook,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

// Add this inside your component, before the return statement
const devIcons = [
  { icon: <Code2 className="h-5 w-5" />, name: "Code" },
  { icon: <Terminal className="h-5 w-5" />, name: "Terminal" },
  { icon: <Database className="h-5 w-5" />, name: "Database" },
  { icon: <Server className="h-5 w-5" />, name: "Server" },
  { icon: <CpuIcon className="h-5 w-5" />, name: "CPU" },
  { icon: <Braces className="h-5 w-5" />, name: "Braces" },
  { icon: <Brackets className="h-5 w-5" />, name: "Brackets" },
  { icon: <CodeXml className="h-5 w-5" />, name: "XML" },
  { icon: <GitBranch className="h-5 w-5" />, name: "Git" },
  { icon: <Type className="h-5 w-5" />, name: "Type" },
  { icon: <Webhook className="h-5 w-5" />, name: "Webhook" },
];

const floatingVariants = {
  initial: (custom: { delay: number }) => ({
    opacity: 0,
    y: 20,
    x: (Math.random() - 0.5) * 100,
    scale: 0.8,
  }),
  animate: (custom: { delay: number }) => ({
    opacity: [0, 1, 1, 0],
    y: [20, 0, 0, -20],
    x: [
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 100,
    ],
    scale: [0.8, 1.1, 1, 0.9],
    transition: {
      duration: 8 + Math.random() * 10,
      repeat: Infinity,
      repeatType: "loop" as const, // Add 'as const' to ensure type safety
      repeatDelay: 1,
      delay: custom.delay,
      ease: "easeInOut",
    },
  }),
};

export default function HeroSection() {
  const getRandomIcons = (count: number) => {
    const shuffled = [...devIcons].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black"
    >
      {/* BIG GRADIENT BLOBS FOR BEAUTY */}
      <div className="absolute top-0 left-0 -z-10 w-[550px] h-[550px] rounded-full bg-primary/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 -z-10 w-[450px] h-[450px] rounded-full bg-green-600/20 blur-[160px]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-primary">Full-Stack Developer</span>
              <br />
              Building Modern Web & Mobile Experiences
            </h1>

            <h2 className="text-xl md:text-2xl text-neutral-300 mb-6">
              Skilled in React • React Native • Node.js • NestJS • Next.js • Vue
              • Nuxt • CI/CD • GitHub • Figma & more
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              I create fast, scalable, and user-friendly applications. Let’s
              build something amazing together.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/documents/Paing_Sett_Kyaw_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/DaDDy-chilll" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/paing-sett-kyaw/"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.facebook.com/paing.420" target="_blank">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT SIDE — PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[360px] h-[420px] rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow-xl backdrop-blur-md p-8 flex flex-col items-center text-center">
              {/* GLOW RING */}
              <div className="absolute top-4 w-40 h-40 rounded-full bg-primary/25 blur-3xl" />

              {/* AVATAR */}
              <div className="relative w-40 h-40 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary/80 shadow-2xl">
                  <Image
                    src="/images/mm.png"
                    alt="Paing Sett Kyaw"
                    width={260}
                    height={260}
                    className="object-cover w-full h-full object-[center_5340%]"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-background p-2 rounded-full border-2 border-primary/80">
                  <Code className="h-5 w-5 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2">Paing Sett Kyaw</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Software Engineer
              </p>
              {getRandomIcons(15).map((icon, index) => (
                <motion.div
                  key={`${icon.name}-${index}`}
                  className="absolute p-2 bg-primary/10 rounded-full"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${Math.random() * 90}%`,
                  }}
                  custom={{ delay: index * 0.5 }}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{
                    scale: 1.5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {React.cloneElement(icon.icon, {
                    className: "h-5 w-5 text-primary",
                  })}
                </motion.div>
              ))}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const iconVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: {
    y: -5,
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};
