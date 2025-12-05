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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
            className="overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col md:flex-row group rounded-xl cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Imagem do projeto - à esquerda */}
            <div className="relative w-full md:w-72 h-48 md:h-auto md:min-h-[200px] flex-shrink-0 overflow-hidden">
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
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Conteúdo - à direita */}
            <div className="flex flex-col flex-grow p-5">
              <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 flex-grow mb-4">
                {project.description}
              </p>

              {/* Botão de repositório */}
              {project.githubUrl && (
                <div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {projectsContent.repositoryButton}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Modal com detalhes do projeto */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-primary">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Imagem grande do projeto */}
              {selectedProject.image && (
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden my-4">
                  <Image
                    src={selectedProject.image.imageUrl}
                    alt={selectedProject.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={selectedProject.image.imageHint}
                  />
                </div>
              )}

              {/* Descrição completa */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'pt-BR' ? 'Sobre o Projeto' : 'About the Project'}
                  </h4>
                  <DialogDescription className="text-foreground/80 text-base leading-relaxed">
                    {selectedProject.description}
                  </DialogDescription>
                </div>

                {/* Tecnologias */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
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
                  <div className="pt-4">
                    <Button asChild size="lg">
                      <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        {projectsContent.repositoryButton}
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
