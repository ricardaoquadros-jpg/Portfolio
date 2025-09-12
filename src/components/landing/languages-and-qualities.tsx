import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Languages, Sparkles } from 'lucide-react';

const languages = [
    { lang: "Inglês", level: "Avançado (C2)" },
    { lang: "Espanhol", level: "Básico (A2)" },
];

const qualities = [
    "Comunicação", "Oratória", "Trabalho em Equipe", "Responsabilidade", "Adaptação Rápida", "Raciocínio Lógico"
];

export function LanguagesAndQualities() {
  return (
    <Section id="languages-qualities">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <Languages className="h-8 w-8 text-primary" />
                    <h3 className="font-headline text-2xl font-bold">Idiomas</h3>
                </div>
                <div className="space-y-6">
                    {languages.map(l => (
                        <div key={l.lang}>
                            <div className="flex flex-col sm:flex-row justify-between mb-1">
                                <span className="text-base font-medium text-foreground/90">{l.lang}</span>
                                <span className="text-sm text-muted-foreground">{l.level}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: l.level.includes("C2") ? '75%' : '25%' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                    <h3 className="font-headline text-2xl font-bold">Qualidades Pessoais</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {qualities.map(q => (
                        <Badge key={q} variant="secondary" className="text-md px-3 py-1 cursor-default">{q}</Badge>
                    ))}
                </div>
            </div>

        </div>
    </Section>
  );
}
