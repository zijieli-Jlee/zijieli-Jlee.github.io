import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Featured Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.12}>
              <GlassCard className="group overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-teal-700/20 bg-teal-700/10 px-2 py-1 text-xs text-teal-800 dark:text-teal-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-center md:text-left group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-6">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-3 border-t border-border/50">
                  {project.links.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {link.label}
                    </motion.a>
                  ))}
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
