import { Section } from "@/components/shared/section";
import { Code } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-16 border-2 border-dashed border-border rounded-lg">
        <Code className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="font-headline text-2xl font-semibold mb-2">
          Projetos em Desenvolvimento
        </h3>
        <p className="max-w-md text-muted-foreground">
          Estou trabalhando em alguns projetos interessantes. Volte em breve para ver as novidades!
        </p>
      </div>
    </Section>
  );
}
