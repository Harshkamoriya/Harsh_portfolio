"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Harsh Kamoriya</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-muted-foreground hover:text-primary">
            About
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-primary">
            Skills
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-primary">
            Projects
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-background px-4 py-2 flex flex-col space-y-2">
          <a href="#about" className="text-muted-foreground hover:text-primary" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-primary" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-primary" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary" onClick={toggleMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}

