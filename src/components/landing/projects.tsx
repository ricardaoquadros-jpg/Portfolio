"use client";
import React from "react";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Projects() {
  const { language, translations } = useLanguage();
  const projectsContent = translations[language].projects;

  return (
    <Section id="projects" className="bg-card">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          {projectsContent.title}
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          {projectsContent.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectsContent.items.map((project) => (
          <SpotlightCard 
            key={project.title} 
            className="overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col group rounded-xl"
          >
            {/* Imagem do projeto */}
            <div className="relative h-48 w-full overflow-hidden">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col flex-grow p-5">
              <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">
                {project.description}
              </p>
            </div>

            {/* Botão de repositório */}
            <div className="p-5 pt-0">
              {project.githubUrl && (
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {projectsContent.repositoryButton}
                  </Link>
                </Button>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
