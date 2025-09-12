import Image from "next/image";
import { Section } from "@/components/shared/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projectImages = {
  portfolio: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
  taskManager: PlaceHolderImages.find(img => img.id === 'project-task-manager'),
  'e-commerce': PlaceHolderImages.find(img => img.id === 'project-ecommerce-platform')
};

const projectsData = [
  {
    title: "Portfólio Pessoal v1",
    description: "Primeira versão do meu portfólio pessoal, desenvolvida para mostrar minhas habilidades e projetos iniciais. Foco em um design limpo e responsivo.",
    image: projectImages.portfolio,
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/example/portfolio-v1",
  },
  {
    title: "Gerenciador de Tarefas",
    description: "Uma aplicação web para gerenciamento de tarefas diárias, permitindo ao usuário criar, editar, e marcar tarefas como concluídas. Inclui funcionalidades de filtros e prioridades.",
    image: projectImages.taskManager,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/example/task-manager",
  },
  {
    title: "Plataforma E-commerce",
    description: "Protótipo de uma plataforma de e-commerce com funcionalidades de catálogo de produtos, carrinho de compras e um sistema de checkout simplificado.",
    image: projectImages['e-commerce'],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com/example/ecommerce-platform",
  },
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden hover:shadow-primary/20 transition-shadow">
            <CardHeader className="p-0">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              )}
            </CardHeader>
            <div className="flex flex-col flex-grow p-6">
              <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
              <CardDescription className="flex-grow text-foreground/80 text-justify">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver no GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
