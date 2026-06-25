"use client";

import { Section } from "@/components/shared/section";
import { useLanguage } from "@/context/language-context";

// Mapeamento de skills para seus ícones (usando imagens da web ou emoji como fallback)
const skillIcons: Record<string, string> = {
  // Linguagens de Programação
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",

  // Frameworks & Bibliotecas
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

  // Testing & QA / Infraestrutura
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  // Banco de Dados
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  // Ferramentas (fallback)
  "Zabbix": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Zabbix_logo.svg",
  "Grafana": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
  "Sophos Firewall": "https://upload.wikimedia.org/wikipedia/commons/5/53/Sophos_logo.svg",
  "Omada Controller": "https://cdn-icons-png.flaticon.com/512/3674/3674477.png",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "CI/CD": "https://cdn-icons-png.flaticon.com/512/2809/2809347.png",
  "Embedded Testing": "https://cdn-icons-png.flaticon.com/512/2103/2103499.png",
  "Test Automation": "https://cdn-icons-png.flaticon.com/512/3095/3095257.png",
  "Simulators": "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
  "Simuladores": "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
};

// Skills que precisam de ícone maior
const largerIconSkills: string[] = [];

function SkillCard({ skill }: { skill: string }) {
  const iconUrl = skillIcons[skill];
  const isLargerIcon = largerIconSkills.includes(skill);

  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 min-w-[120px]">
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={skill}
          className={`mb-3 group-hover:scale-110 transition-transform duration-300 object-contain ${isLargerIcon ? 'w-20 h-20' : 'w-12 h-12'}`}
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
