
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const allSkills = {
  "Linguagens de Programação": ["Python", "Java", "C", "HTML", "CSS", "PHP", "Assembly"],
  "Banco de Dados": ["MySQL"],
  "Ferramentas e Tecnologias": ["Power BI", "Android Studio", "Pacote Office"],
  "Hardware": ["Montagem e manutenção de computadores"],
};

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  if (skills.length === 0) return null;

  // AI prioritization is temporarily disabled to avoid rate limiting issues.
  const prioritizedSkills = skills;
  
  const getSkillEmphasis = (skill: string) => {
    const index = prioritizedSkills.indexOf(skill);
    if (index === -1) return "default";
    // Simplified emphasis without AI for now
    if (index < skills.length / 3) return "top";
    if (index < (skills.length * 2) / 3) return "middle";
    return "bottom";
  };

  return (
    <Card className="flex-1 min-w-[280px] bg-background/50">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {prioritizedSkills.map((skill) => {
            const emphasis = getSkillEmphasis(skill);
            return (
              <Badge
                key={skill}
                variant={
                  emphasis === "top" ? "default" : 
                  emphasis === "middle" ? "secondary" : "outline"
                }
                className={cn("transition-all", {
                  "text-base px-4 py-1 shadow-md scale-105": emphasis === "top",
                  "text-sm": emphasis === "middle",
                  "font-normal": emphasis === "bottom",
                })}
              >
                {skill}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          Competências Técnicas
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          Habilidades e tecnologias que domino, priorizadas por relevância e sofisticação.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(allSkills).map(([title, skills]) => (
          <SkillCategory key={title} title={title} skills={skills} />
        ))}
      </div>
    </Section>
  );
}
