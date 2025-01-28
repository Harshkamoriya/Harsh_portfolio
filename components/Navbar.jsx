"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800">
            Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 flex flex-col space-y-2">
          <a href="#about" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800" onClick={toggleMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}

