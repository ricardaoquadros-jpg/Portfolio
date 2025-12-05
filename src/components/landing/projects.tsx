"use client";
import React, { useState } from "react";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

// Mapeamento de tecnologias para seus ícones
const techIcons: Record<string, string> = {
  // Linguagens
  "Next.js 15": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "React 18": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

  // Frameworks & Libraries
  "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "ShadCN/Radix UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/radixui/radixui-original.svg",

  // Banco de Dados
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  // Plataformas & Ferramentas
  "Firebase": "https://images.seeklogo.com/logo-png/61/1/firebase-icon-logo-png_seeklogo-615938.png",
  "Firebase Studio": "https://images.seeklogo.com/logo-png/61/1/firebase-icon-logo-png_seeklogo-615938.png",
  "Google Genkit AI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Gemini 2.5 Flash": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  // Bibliotecas
  "Lucide Icons": "https://lucide.dev/logo.light.svg",
  "Zod": "https://zod.dev/logo.svg",
  "React Hook Form": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "PHPMailer": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Canvas API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "PDF.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

// Categorização das tecnologias
const techCategories: Record<string, { category: "primary" | "platform" | "secondary" }> = {
  // Linguagens principais
  "Next.js 15": { category: "primary" },
  "React 18": { category: "primary" },
  "TypeScript": { category: "primary" },
  "JavaScript": { category: "primary" },
  "HTML5": { category: "primary" },
  "CSS3": { category: "primary" },
  "PHP": { category: "primary" },
  "TailwindCSS": { category: "primary" },
  "MySQL": { category: "primary" },

  // Plataformas/IDEs
  "Firebase": { category: "platform" },
  "Firebase Studio": { category: "platform" },
  "Google Genkit AI": { category: "platform" },
  "Gemini 2.5 Flash": { category: "platform" },
  "Vercel": { category: "platform" },
  "Git": { category: "platform" },
  "GitHub": { category: "platform" },

  // Secundárias
  "ShadCN/Radix UI": { category: "secondary" },
  "Lucide Icons": { category: "secondary" },
  "Zod": { category: "secondary" },
  "React Hook Form": { category: "secondary" },
  "PHPMailer": { category: "secondary" },
  "Canvas API": { category: "secondary" },
  "PDF.js": { category: "secondary" },
};

function TechBadge({ tech }: { tech: string }) {
  const iconUrl = techIcons[tech];
  const category = techCategories[tech]?.category || "secondary";

  const bgColors = {
    primary: "bg-primary/10 border-primary/30 text-primary",
    platform: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    secondary: "bg-muted border-border text-muted-foreground",
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${bgColors[category]}`}>
      {iconUrl && (
        <img src={iconUrl} alt={tech} className="w-4 h-4 object-contain" />
      )}
      <span>{tech}</span>
    </div>
  );
}

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

  // Função para dividir tecnologias por categoria
  const categorizeTechs = (tags: string[]) => {
    const primary: string[] = [];
    const platform: string[] = [];
    const secondary: string[] = [];

    tags.forEach(tech => {
      const cat = techCategories[tech]?.category || "secondary";
      if (cat === "primary") primary.push(tech);
      else if (cat === "platform") platform.push(tech);
      else secondary.push(tech);
    });

    return { primary, platform, secondary };
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
      {selectedProject !== null && (() => {
        const project = projectsContent.items[selectedProject];
        const { primary, platform, secondary } = categorizeTechs(project.tags);

        return (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header com imagem */}
              <div className="relative h-56 w-full">
                {project.image && (
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
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
                <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Linguagens Principais */}
                {primary.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {language === 'pt-BR' ? 'Linguagens & Frameworks' : 'Languages & Frameworks'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {primary.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Plataformas/IDEs */}
                {platform.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                      {language === 'pt-BR' ? 'Plataformas & Ferramentas' : 'Platforms & Tools'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Bibliotecas Secundárias */}
                {secondary.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {language === 'pt-BR' ? 'Bibliotecas & Utilitários' : 'Libraries & Utilities'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {secondary.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Botão repositório */}
                {project.githubUrl && (
                  <Button asChild variant="default" className="w-full">
                    <Link
                      href={project.githubUrl}
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
        );
      })()}
    </Section>
  );
}
