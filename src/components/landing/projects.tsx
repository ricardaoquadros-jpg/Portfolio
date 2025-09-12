import { Section } from "@/components/shared/section";
import { Code } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" className="bg-card">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          Projetos
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-6 md:p-12 border-2 border-dashed border-border rounded-lg">
        <Code className="h-12 w-12 text-muted-foreground mb-3" />
        <h3 className="font-headline text-xl font-semibold mb-1">
          Projetos em Desenvolvimento
        </h3>
        <p className="max-w-md text-muted-foreground text-sm">
          Estou trabalhando em alguns projetos interessantes. Volte em breve para ver as novidades!
        </p>
      </div>
    </Section>
  );
}
