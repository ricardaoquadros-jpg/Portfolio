import { Section } from "@/components/shared/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experienceData = {
  company: "Prefeitura de Guaíba",
  role: "Técnico de TI",
  period: "Agosto/2025 – Presente",
  highlights: [
    "Suporte em Hardware e Software",
    "Manutenção de Computadores",
    "Gerenciamento de Redes",
    "Atendimento a Usuários",
  ],
};

export function Experience() {
  return (
    <Section id="experience" className="bg-card">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="bg-primary text-primary-foreground p-3 rounded-full">
            <Briefcase className="h-8 w-8" />
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Experiência Profissional
          </h2>
          <p className="text-foreground/80 md:text-lg">
            Atuação prática e desenvolvimento de competências no mercado de trabalho.
          </p>
        </div>
        <div className="md:col-span-3">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-2xl">{experienceData.role}</CardTitle>
                    <CardDescription>{experienceData.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{experienceData.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Principais responsabilidades e destaques:</p>
              <div className="flex flex-wrap gap-2">
                {experienceData.highlights.map((highlight) => (
                  <Badge key={highlight} variant="secondary">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
