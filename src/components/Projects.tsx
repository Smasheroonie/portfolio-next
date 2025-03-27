"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const projects = [
  {
    title: "NC News",
    description:
      "I created this full-stack news site as part of the Northcoders JavaScript Software Development Bootcamp.",
    image: "/nc-news.jpg",
    tags: [
      "React",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Jest",
      "TailwindCSS",
      "JavaScript",
    ],
    liveUrl: "https://luke-g-nc-news.netlify.app/articles",
    githubUrl: "https://github.com/Smasheroonie/nc-news-frontend",
  },
  {
    title: "Game Swap",
    description:
      "A community-focused web app created by 4 other great developers and me! Find new games, wishlist them, and trade your old physical copies with others.",
    image: "/game-swap.jpg",
    tags: ["React", "Firebase", "TailwindCSS", "TypeScript", "shadcn"],
    liveUrl: "https://game-swap-eurostars.vercel.app",
    githubUrl: "https://github.com/Smasheroonie/game-swap-fe",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4 md:px-6 flex max-w-[58rem] flex-col items-center justify-center space-y-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 mx-10 text-lg text-muted-foreground">
          Check out some of my recent work. These projects showcase my skills
          and experience.
        </p>
        <div className="mx-auto flex max-w-5xl flex-col gap-8 pt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden justify-between">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-row-reverse gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
          <Card className="flex flex-col justify-center overflow-hidden">
            <CardHeader>
              <CardTitle>More to come...</CardTitle>
              <CardDescription>
                I'm always working on new things!
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
