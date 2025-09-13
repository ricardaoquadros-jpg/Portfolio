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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const portfolioImages = [
    "https://i.imgur.com/FzXWSsB.jpeg",
    "https://i.imgur.com/4U2FjLL.jpeg",
    "https://i.imgur.com/la6cDsx.jpeg",
];

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
            <div className="md:w-1/3 relative">
              {project.title === "Portfólio Pessoal" || project.title === "Personal Portfolio" ? (
                 <Carousel 
                    className="w-full h-full"
                    plugins={[
                        Autoplay({
                          delay: 2000,
                          stopOnInteraction: true,
                        }),
                    ]}
                 >
                    <CarouselContent>
                        {portfolioImages.map((src, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-full aspect-square md:aspect-auto">
                                <Image
                                    src={src}
                                    alt={`${project.title} - Imagem ${index + 1}`}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
              ) : project.image && (
                <Link href="/projects" className="block w-full h-full">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    width={600}
                    height={400}
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
