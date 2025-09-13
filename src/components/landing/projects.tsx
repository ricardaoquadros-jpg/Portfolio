"use client";
import React from "react";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

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

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
        {projectsContent.items.map((project) => (
          <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              {project.image && (
                <Link href="/projects" className="block w-full h-full">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    fill
                    className="w-full h-full object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                </Link>
              )}
            </div>
            <div className="md:w-2/3 flex flex-col">
              <CardHeader>
                <Link href="/projects">
                  <CardTitle className="font-headline text-xl text-left hover:underline">{project.title}</CardTitle>
                </Link>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4 text-left">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                 {project.githubUrl && (
                    <Button asChild variant="outline">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            {projectsContent.repositoryButton}
                        </Link>
                    </Button>
                )}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
