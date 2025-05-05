"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex justify-start gap-2 items-center">
          <svg width="42" height="40" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M43.7977 89.6119V14.2843L22.5246 0L0 12.9239V41.4924L21.8989 55.0965L36.2896 46.2539L27.53 55.0965V78.2234L36.2896 89.6119H43.7977Z"
              fill="#272727"
            />
            <path
              d="M20.8707 9.52283L33.5266 17.4665V33.3538L20.8707 41.2974L8.21472 33.3538V17.4665L20.8707 9.52283Z"
              fill="white"
            />
            <path
              d="M20.8707 9.52283L33.5266 17.4665V33.3538L20.8707 41.2974L8.21472 33.3538V17.4665L20.8707 9.52283Z"
              fill="#10B981"
              fillOpacity="0.85"
            />
            <path
              d="M47.5519 89.6119V14.2843L68.8251 0L91.3496 12.9239V41.4924L69.4507 55.0965L55.06 46.2539L63.8196 55.0965V78.2234L55.06 89.6119H47.5519Z"
              fill="#272727"
            />
            <path
              d="M70.4789 9.52283L57.823 17.4665V33.3538L70.4789 41.2974L83.1349 33.3538V17.4665L70.4789 9.52283Z"
              fill="white"
            />
            <path
              d="M70.4789 9.52283L57.823 17.4665V33.3538L70.4789 41.2974L83.1349 33.3538V17.4665L70.4789 9.52283Z"
              fill="#10B981"
              fillOpacity="0.85"
            />
          </svg>
          <span className="text-primary">Paing</span> Sett Kyaw
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>

            {isOpen && (
              <div className="fixed inset-0 top-16 bg-background z-40 p-4">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg py-2 border-b border-border hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
