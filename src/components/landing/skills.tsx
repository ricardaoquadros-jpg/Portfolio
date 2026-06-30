"use client";

import { Section } from "@/components/shared/section";
import { useLanguage } from "@/context/language-context";

// All icon URLs use jsDelivr (devicon, simple-icons, tabler-icons) — no Flaticon, no Wikimedia
const skillIcons: Record<string, string> = {
  // Languages (devicon)
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",

  // Frameworks (devicon)
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

  // DevOps & Infra (devicon + simple-icons CDN)
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "CI/CD": "https://cdn.simpleicons.org/githubactions/999",
  "Jira": "https://cdn.simpleicons.org/jira/999",

  // Databases (devicon)
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  // Tools — simple-icons CDN (official, always up)
  "Zabbix": "https://cdn.simpleicons.org/zabbix/DC382D",
  "Grafana": "https://cdn.simpleicons.org/grafana/F46800",
  "Sophos Firewall": "https://cdn.simpleicons.org/sophos/5C9AD3",
  "Omada Controller": "https://cdn.simpleicons.org/tplink/4ACBD6",
  "Power BI": "https://cdn.simpleicons.org/powerbi/F2C811",

  // Generic concepts — Tabler Icons via jsDelivr (reliable SVG)
  "Embedded Testing": "https://cdn.jsdelivr.net/npm/@tabler/icons@3.x/icons/outline/cpu.svg",
  "Test Automation": "https://cdn.jsdelivr.net/npm/@tabler/icons@3.x/icons/outline/robot.svg",
  "Simulators": "https://cdn.jsdelivr.net/npm/@tabler/icons@3.x/icons/outline/monitor.svg",
  "Simuladores": "https://cdn.jsdelivr.net/npm/@tabler/icons@3.x/icons/outline/monitor.svg",
};

function SkillCard({ skill }: { skill: string }) {
  const iconUrl = skillIcons[skill];

  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 min-w-[120px]">
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={skill}
          className="mb-3 group-hover:scale-110 transition-transform duration-300 object-contain w-12 h-12"
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
