"use client";

import { Section } from "@/components/shared/section";
import { useLanguage } from "@/context/language-context";

// Mapeamento de skills para seus ícones (usando imagens da web ou emoji como fallback)
const skillIcons: Record<string, string> = {
  // Linguagens de Programação
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Assembly": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

  // Banco de Dados
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  // Ferramentas e Tecnologias
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "Pacote Office": "https://img.icons8.com/color/96/microsoft-office-2019.png",
  "Office Suite": "https://img.icons8.com/color/96/microsoft-office-2019.png",
  "Firebase": "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png?hl=pt-br",
  "AI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  // Hardware
  "Montagem e manutenção de computadores": "https://cdn-icons-png.flaticon.com/512/900/900618.png",
  "Computer assembly and maintenance": "https://cdn-icons-png.flaticon.com/512/900/900618.png",
};

function SkillCard({ skill }: { skill: string }) {
  const iconUrl = skillIcons[skill];

  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 min-w-[120px]">
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={skill}
          className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <div className="w-12 h-12 mb-3 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-lg">
          {skill.charAt(0)}
        </div>
      )}
      <span className="text-sm font-medium text-foreground text-center">{skill}</span>
    </div>
  );
}

export function Skills() {
  const { language, translations } = useLanguage();
  const skillsContent = translations[language].skills;

  // Flatten all skills from categories into a single array
  const allSkills = Object.values(skillsContent.categories).flat();

  return (
    <Section id="skills">
      <div className="flex flex-col items-start space-y-4 mb-10">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          {skillsContent.title}
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {allSkills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
