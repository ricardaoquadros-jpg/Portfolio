import { Section } from "@/components/shared/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "Universidade Estadual do Rio Grande do Sul (UERGS)",
    course: "Engenharia da Computação",
    period: "2025 – 2030",
  },
  {
    institution: "Escola Estadual de Ensino Médio Dr. Solon Tavares",
    course: "Técnico em Informática",
    period: "2022 – 2025",
  },
  {
    institution: "Colégio Estadual Augusto Meyer",
    course: "Ensino Médio",
    period: "2022 – 2024",
  },
];

export function Education() {
  return (
    <Section id="education">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          Formação Acadêmica
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          Minha jornada educacional na área de tecnologia.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={item.institution} className="relative grid md:grid-cols-2 md:gap-8 items-start">
              <div className={`flex items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:flex justify-center w-full">
                  {index % 2 === 0 ? (
                    <Card className="w-full max-w-md shadow-md hover:shadow-primary/20 transition-shadow">
                      <CardHeader>
                        <CardTitle className="font-headline text-xl">{item.course}</CardTitle>
                        <CardDescription>{item.institution}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground/70">{item.period}</p>
                      </CardContent>
                    </Card>
                  ) : <div className="w-full max-w-md"></div>}
                </div>

                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2 border-4 border-background">
                  <GraduationCap className="h-6 w-6" />
                </div>
                
                <div className="md:hidden w-full">
                   <Card className="w-full max-w-md shadow-md hover:shadow-primary/20 transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{item.course}</CardTitle>
                      <CardDescription>{item.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">{item.period}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:flex justify-center w-full">
                  {index % 2 === 1 ? (
                    <Card className="w-full max-w-md shadow-md hover:shadow-primary/20 transition-shadow">
                      <CardHeader>
                        <CardTitle className="font-headline text-xl">{item.course}</CardTitle>
                        <CardDescription>{item.institution}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground/70">{item.period}</p>
                      </CardContent>
                    </Card>
                  ) : <div className="w-full max-w-md"></div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
