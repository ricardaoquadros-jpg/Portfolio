"use client";
import React, { useState } from "react";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Projects() {
  const { language, translations } = useLanguage();
  const projectsContent = translations[language].projects;
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
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

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {projectsContent.items.map((project) => {
          const isExpanded = expandedProject === project.title;

          return (
            <SpotlightCard
              key={project.title}
              className="overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 flex flex-col rounded-xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Imagem do projeto - clicável para expandir */}
                <div
                  className="relative w-full md:w-72 h-48 md:h-auto md:min-h-[200px] flex-shrink-0 overflow-hidden cursor-pointer"
                  onClick={() => toggleProject(project.title)}
                >
                  {project.image && (
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      data-ai-hint={project.image.imageHint}
                    />
                  )}
                  {/* Overlay com ícone de expandir */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      {isExpanded ? (
                        <ChevronUp className="h-8 w-8 text-white" />
                      ) : (
                        <ChevronDown className="h-8 w-8 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Conteúdo básico - à direita */}
                <div className="flex flex-col flex-grow p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-headline text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => toggleProject(project.title)}
                      className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className={`text-sm text-muted-foreground mb-4 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                    {project.description}
                  </p>

                  {/* Botão de repositório */}
                  {project.githubUrl && (
                    <div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {projectsContent.repositoryButton}
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Conteúdo expandido - tecnologias */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-5 pb-5 pt-2 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    {language === 'pt-BR' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
}
