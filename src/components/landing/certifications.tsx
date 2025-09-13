import { Section } from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import Link from "next/link";

const certificationsData = [
  { name: "Power BI", institution: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/preparando-dados-para-analise-microsoft-power-bi" },
  { name: "Python Básico", institution: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico" },
  { name: "HTML5", institution: "IFRS", url: "https://estude.ifrs.edu.br/cursos/html-tabelas-e-formularios/" },
  { name: "EF SET English Certificate C2", institution: "EF Standard English Test", url: "https://cert.efset.org/wFvpjR" },
];

export function Certifications() {
  return (
    <Section id="certifications" className="bg-card pt-0">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          Cursos e Certificações
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          Minhas qualificações e aprendizados contínuos.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificationsData.map((cert) => (
          <Link key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="text-center group-hover:border-primary transition-all group-hover:shadow-lg h-full group-hover:scale-105 duration-300">
              <CardHeader>
                <div className="mx-auto bg-muted p-3 rounded-full w-fit">
                  <Award className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <CardTitle className="font-headline text-lg mb-1">{cert.name}</CardTitle>
                <p className="text-sm text-foreground/70">{cert.institution}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
