"use client";
import React, { useState } from "react";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, X, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

type Project = {
  title: string;
  description: string;
  image: { imageUrl: string; description: string; imageHint: string } | undefined;
  tags: string[];
  githubUrl?: string;
};

export function Projects() {
  const { language, translations } = useLanguage();
  const projectsContent = translations[language].projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {projectsContent.items.map((project) => (
          <SpotlightCard
            key={project.title}
            className="overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-row group rounded-xl cursor-pointer h-40"
            onClick={() => setSelectedProject(project)}
          >
            {/* Imagem do projeto - à esquerda */}
            <div className="relative w-48 md:w-64 h-full flex-shrink-0 overflow-hidden">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.image.imageHint}
                />
              )}
              {/* Overlay ao passar o mouse */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Conteúdo - à direita */}
            <div className="flex flex-col justify-center flex-grow p-4">
              <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Modal expandido no centro - 50% da tela */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-[90%] md:w-[50%] max-h-[80vh] bg-card rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Imagem do projeto */}
            {selectedProject.image && (
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={selectedProject.image.imageUrl}
                  alt={selectedProject.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={selectedProject.image.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
            )}

            {/* Conteúdo */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(80vh-14rem)]">
              <h3 className="font-headline text-2xl font-bold text-primary">
                {selectedProject.title}
              </h3>

              {/* Descrição */}
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                  {language === 'pt-BR' ? 'Sobre o Projeto' : 'About the Project'}
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tecnologias */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  {language === 'pt-BR' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Botão do repositório */}
              {selectedProject.githubUrl && (
                <div className="pt-2">
                  <Button asChild className="w-full md:w-auto">
                    <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      {projectsContent.repositoryButton}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
