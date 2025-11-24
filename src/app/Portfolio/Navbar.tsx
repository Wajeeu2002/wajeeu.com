"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="logo font-bold text-xl">Developer</div>

        {/* Hamburger button */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col sm:flex-row sm:items-center sm:gap-6 transition-all duration-300 ${
            isOpen ? "max-h-60 mt-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <li><a href="#about" className="block py-2 sm:py-0">About</a></li>
          <li><a href="#skills" className="block py-2 sm:py-0">Skills</a></li>
          <li><a href="#projects" className="block py-2 sm:py-0">Project</a></li>
          <li><a href="#contact" className="block py-2 sm:py-0">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
