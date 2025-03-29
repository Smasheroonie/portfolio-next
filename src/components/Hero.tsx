"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center py-12 md:py-24 lg:py-32 space-y-4">
      <div className="animate-in fade-in zoom-in duration-700">
        <h1 className="p-2 text-transparent text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text animate-gradient">
          Hi, I'm Luke Gon&#231;alves
        </h1>
      </div>
      <div className="h-1 w-8 rounded-full bg-primary animate-in fade-in zoom-in duration-1000"></div>
      <p className="text-lg font-medium animate-in fade-in zoom-in duration-1000">
        Software Developer
      </p>
      <div className="h-1 w-8 rounded-full bg-primary animate-in fade-in zoom-in duration-1000"></div>
      <p className="max-w-[800px] text-center mx-10 text-lg text-muted-foreground md:text-xl animate-in fade-in zoom-in duration-[1200ms]">
        I craft responsive websites and robust applications that provide
        seamless user experiences. Specializing in development with React,
        TypeScript, SQL, C# and .NET.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-in fade-in zoom-in duration-[1500ms]">
        <Button asChild>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="flex justify-center items-center cursor-pointer"
          >
            <span className="font-bold">View Projects</span>{" "}
            <ArrowRight className="ml-1 size-5" />
          </Link>
        </Button>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a
              href="https://github.com/Smasheroonie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 sm:w-auto"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://www.linkedin.com/in/lukenunogoncalves/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 sm:w-auto"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
