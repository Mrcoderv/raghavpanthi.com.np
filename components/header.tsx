"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md py-3" : "bg-background/50 py-5"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Raghav Vian Panthi Logo"
            width={50}
            height={50}
            className="rounded-full border-2 border-blue-500"
            unoptimized
          />
          <h1 className="text-xl md:text-2xl font-bold text-blue-500">Raghav Vian Panthi</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link href="#about" className="text-foreground hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-foreground hover:text-blue-400 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-foreground hover:text-blue-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-foreground hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-blue-400 transition-colors"
              >
                Skills
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

