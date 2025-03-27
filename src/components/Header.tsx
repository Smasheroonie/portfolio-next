"use client";

import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Link } from "react-scroll";
import { Button } from "./ui/Button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 z-40 px-8 w-full backdrop-blur-sm">
      <div className="flex h-16 items-center space-x-4 justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2"
          >
            <span className="inline-block font-bold cursor-pointer">
              Luke Gon&#231;alves
            </span>
          </Link>
        </div>
        <nav className="hidden sm:flex flex-1 items-center justify-end space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary cursor-pointer"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary cursor-pointer"
          >
            About
          </Link>
          <span>/</span>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary cursor-pointer"
          >
            Projects
          </Link>
          <span>/</span>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-sm font-medium hover:text-primary cursor-pointer"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
        <div className="sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="py-3 border-y border-muted">
            <div className="flex justify-between items-center space-y-1">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
              >
                About
              </Link>
              <span>/</span>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
              >
                Projects
              </Link>
              <span>/</span>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer"
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
