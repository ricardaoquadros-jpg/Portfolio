"use client";
import React, { useState } from "react";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Projects() {
  const { language, translations } = useLanguage();
  const projectsContent = translations[language].projects;
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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

      {/* Grid de projetos - cards verticais lado a lado */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {projectsContent.items.map((project, index) => (
          <SpotlightCard
            key={project.title}
            onClick={() => handleProjectClick(index)}
            className="overflow-hidden shadow-lg hover:shadow-primary/40 transition-all duration-300 flex flex-col group rounded-2xl cursor-pointer hover:scale-105 w-48 md:w-56"
          >
            {/* Imagem do projeto */}
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.image.imageHint}
                />
              )}
              {/* Overlay com título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <h3 className="font-headline text-sm md:text-base font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Modal expandido */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com imagem */}
            <div className="relative h-64 w-full">
              {projectsContent.items[selectedProject].image && (
                <Image
                  src={projectsContent.items[selectedProject].image!.imageUrl}
                  alt={projectsContent.items[selectedProject].image!.description}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

              {/* Botão fechar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-6 -mt-8 relative">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                {projectsContent.items[selectedProject].title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {projectsContent.items[selectedProject].description}
              </p>

              {/* Tecnologias */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                  {projectsContent.items[selectedProject].tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Botão repositório */}
              {projectsContent.items[selectedProject].githubUrl && (
                <Button asChild variant="default" className="w-full">
                  <Link
                    href={projectsContent.items[selectedProject].githubUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {projectsContent.repositoryButton}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
