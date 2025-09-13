import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    title: "Portfólio Pessoal",
    description: "Este é o próprio site que você está visitando, desenvolvido para mostrar minhas habilidades e projetos. Foi construído com tecnologias modernas, incluindo IA para priorização de competências.",
    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
    tags: ["Next.js", "React", "TailwindCSS", "ShadCN", "Genkit (AI)"],
    githubUrl: "https://github.com",
  }
];

export function Projects() {
  return (
    <Section id="projects" className="bg-card">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          Projetos
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
        {projectsData.map((project) => (
          <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/3 relative">
              {project.image && (
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
                  <CardTitle className="font-headline text-xl text-left">{project.title}</CardTitle>
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
                            Ver Repositório
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
