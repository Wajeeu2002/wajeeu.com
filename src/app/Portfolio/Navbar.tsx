"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Developer</div>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
