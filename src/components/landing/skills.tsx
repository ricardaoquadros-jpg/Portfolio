"use client";

import { Section } from "@/components/shared/section";
import { useLanguage } from "@/context/language-context";

// Skill icon mapping — reliable CDN URLs only (devicon + simple-icons via jsDelivr)
const skillIcons: Record<string, string> = {
  // Languages
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",

  // Frameworks & Libraries
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

  // DevOps & Infrastructure
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "CI/CD": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubactions.svg",

  // Databases
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  // Tools & Platforms (simple-icons via jsDelivr)
  "Zabbix": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zabbix.svg",
  "Grafana": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/grafana.svg",
  "Sophos Firewall": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sophos.svg",
  "Omada Controller": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tplink.svg",
  "Power BI": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg",
  "Jira": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jira.svg",
};

// Skills without a mapped icon get a styled initial-letter fallback (automatic)
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
          loading="lazy"
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
