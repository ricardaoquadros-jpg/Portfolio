import { PlaceHolderImages, ImagePlaceholder } from './placeholder-images';

type NavLink = {
    href: string;
    label: string;
};

type Project = {
    title: string;
    description: string;
    image: ImagePlaceholder | undefined;
    tags: string[];
    githubUrl?: string;
};

export interface Translation {
    navLinks: NavLink[];
    header: {
        openMenu: string;
    };
    hero: {
        name: string;
        title: string;
        aboutButton: string;
        contactButton: string;
    };
    about: {
        title: string;
        paragraph1: string;
        paragraph2: string;
    };
    education: {
        title: string;
        subtitle: string;
        items: {
            institution: string;
            course: string;
            period: string;
            url: string;
        }[];
    };
    experience: {
        title: string;
        subtitle: string;
        company: string;
        role: string;
        period: string;
        responsibilities: string;
        experienceDetails: string[];
        highlights: string[];
    };
    skills: {
        title: string;
        subtitle: string;
        categories: {
            [key: string]: string[];
        };
    };
    projects: {
        title: string;
        subtitle: string;
        repositoryButton: string;
        viewProjectButton: string;
        items: Project[];
    };
    certifications: {
        title: string;
        subtitle: string;
        items: {
            name: string;
            institution: string;
            url: string;
        }[];
    };
    languagesAndQualities: {
        languages: {
            title: string;
            items: {
                lang: string;
                level: string;
            }[];
        };
        qualities: {
            title: string;
            items: string[];
        };
    };
    contact: {
        title: string;
        subtitle: string;
        info: {
            type: string;
            Icon: string;
            text: string;
            href: string;
        }[];
        toast: {
            title: string;
            email: string;
            phone: string;
        };
    };
    footer: {
        text: string;
    };
    projectsPage: {
        title: string;
        backButton: string;
        repositoryButton: string;
        items: Project[];
    };
}

export const translations: Record<'pt-BR' | 'en', Translation> = {
    'pt-BR': {
        navLinks: [
            { href: "#about", label: "Sobre Mim" },
            { href: "#education", label: "Formação" },
            { href: "#experience", label: "Experiência" },
            { href: "#skills", label: "Competências" },
            { href: "#projects", label: "Projetos" },
            { href: "#contact", label: "Contato" },
        ],
        header: {
            openMenu: "Abrir menu",
        },
        hero: {
            name: "Ricardo Quadros",
            title: "Estudante de Ciência da Computação | Tests & Qualification Analyst @ TK Elevator",
            aboutButton: "Sobre Mim",
            contactButton: "Contato",
        },
        about: {
            title: "Sobre Mim",
            paragraph1: "Olá! Sou Ricardo Quadros, profissional de TI com experiência em QA de software embarcado, infraestrutura de redes e desenvolvimento web. Tenho 19 anos e resido em Guaíba, Rio Grande do Sul.",
                        paragraph2: "Atualmente atuo como Tests & Qualification Analyst na TK Elevator e curso Ciência da Computação na ULBRA. Minha stack inclui Python para automação de testes em sistemas Linux embarcados (Raspberry Pi), além de infraestrutura com Zabbix, Grafana e Sophos. Inglês certificado C2 (EF SET 75/100).",
        },
        education: {
            title: "Formação Acadêmica",
            subtitle: "Minha jornada educacional na área de tecnologia.",
            items: [
                            {
                                institution: "Universidade Luterana do Brasil (ULBRA)",
                                course: "Ciência da Computação (Bacharelado)",
                                period: "2026 – 2030",
                                url: "https://www.ulbra.br/cursos/graduacao/ciencia-da-computacao",
                            },
                            {
                                institution: "Universidade Estadual do Rio Grande do Sul (UERGS)",
                                course: "Engenharia da Computação (Transferido)",
                                period: "2025 – 2026",
                                url: "https://www.uergs.edu.br/engenharia-de-computacao",
                            },
                {
                    institution: "Escola Estadual de Ensino Médio Dr. Solon Tavares",
                    course: "Técnico em Informática",
                    period: "2023 – 2025",
                    url: "https://www.solontavares.com/informatica.html",
                },
                {
                    institution: "Colégio Estadual Augusto Meyer",
                    course: "Ensino Médio",
                    period: "2022 – 2024",
                    url: "https://www.escol.as/245742-colegio-estadual-augusto-meyer",
                },
                {
                    institution: "Yázigi",
                    course: "Curso de Inglês",
                    period: "2022 – 2023",
                    url: "https://www.yazigi.com.br/",
                },
            ],
        },
        experience: {
                    title: "Experiência Profissional",
                    subtitle: "Atuação prática e desenvolvimento de competências no mercado de trabalho.",
                    company: "TK Elevator",
                    role: "Tests & Qualification Analyst (Estágio)",
                    period: "Junho/2026 – Presente",
                    responsibilities: "",
                    experienceDetails: [
                        "Atuo na qualificação e validação de sistemas embarcados para mobilidade urbana, utilizando Python para automação de testes em ambientes Linux (Raspberry Pi). Realizo preparação de simuladores, suporte às equipes de teste e estabilização da testing farm.",
                        "Anteriormente, atuei como Estagiário de TI na Prefeitura de Guaíba (ago/2025 – jun/2026), onde comecei no suporte técnico remoto (+250 chamados resolvidos) e fui promovido para Infraestrutura e Redes. Lá gerenciei redes com Omada Controller, monitoramento com Zabbix/Grafana, Sophos Firewall e desenvolvi um sistema web PHP/MySQL para controle de protocolos adotado por toda a equipe.",
                    ],
                    highlights: [
                        "Embedded Software Testing", "Python Automation", "Linux (Raspberry Pi)",
                        "Test Farm Stability", "Simulator Preparation", "Test Qualification & Validation",
                    ],
        },
        skills: {
            title: "Competências Técnicas",
            subtitle: "Habilidades e tecnologias que domino, priorizadas por relevância e sofisticação.",
            categories: {
                            "Linguagens de Programação": ["Python", "JavaScript", "TypeScript", "PHP", "SQL", "C"],
                            "Frameworks & Bibliotecas": ["React", "Next.js", "Tailwind CSS"],
                            "Ferramentas de Teste & QA": ["Embedded Testing", "Test Automation", "Simuladores"],
                            "Infraestrutura & Redes": ["Linux", "Zabbix", "Grafana", "Sophos Firewall", "Omada Controller"],
                            "DevOps & Versionamento": ["Git", "GitHub", "CI/CD"],
                            "Banco de Dados": ["MySQL", "PostgreSQL"],
                        },
        },
        projects: {
            title: "Projetos",
            subtitle: "Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento.",
            repositoryButton: "Ver Repositório",
            viewProjectButton: "Ver Projetos",
            items: [
                {
                    title: "Portfólio Pessoal",
                    description: "Site pessoal responsivo com tema dark/light, animações suaves e integração com IA do Google para priorização inteligente de competências. Inclui sistema de internacionalização (PT-BR/EN).",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["Next.js", "React", "TypeScript", "HTML5", "CSS3", "TailwindCSS", "Antigravity IDE", "Claude Opus 4.5", "Gemini 3 Pro", "Firebase", "ShadCN/Radix UI"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Portfolio",
                },
                {
                    title: "Frontend vs. Backend",
                    description: "Site educacional interativo desenvolvido como TCC, explicando as diferenças entre Frontend e Backend com exemplos práticos, diagramas e conteúdo gerado por IA.",
                    image: PlaceHolderImages.find(img => img.id === 'project-frontend-backend'),
                    tags: ["HTML5", "CSS3", "JavaScript", "Firebase Studio", "Gemini 2.5 Flash", "Git", "GitHub"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Tcc",
                },
                {
                    title: "Protocolo de Entrega",
                    description: "Sistema completo para a Prefeitura de Guaíba com geração de protocolos, assinatura digital via Canvas, geração de PDF, envio automático por e-mail e painel administrativo com dashboard.",
                    image: PlaceHolderImages.find(img => img.id === 'project-protocolo-entrega'),
                    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "PHPMailer", "Antigravity IDE", "Gemini 3 Pro", "Claude Opus 4.5", "Claude Sonnet 4.5", "Vercel"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/ProtocolodeEntrega",
                }
            ],
        },
        certifications: {
            title: "Cursos e Certificações",
            subtitle: "Minhas qualificações e aprendizados contínuos.",
            items: [
                            { name: "Relational Databases and SQL", institution: "Stanford Online (edX)", url: "https://www.edx.org/learn/sql/stanford-university-databases-relational-databases-and-sql" },
                            { name: "Claude Code 101", institution: "Anthropic", url: "https://learn.anthropic.com/" },
                            { name: "Intro to CS with Python", institution: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/" },
                            { name: "EF SET English Certificate C2", institution: "EF Standard English Test", url: "https://cert.efset.org/wFvpjR" },
                            { name: "Python Básico", institution: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico" },
                            { name: "HTML5", institution: "IFRS", url: "https://estude.ifrs.edu.br/cursos/html-tabelas-e-formularios/" },
                            { name: "Power BI", institution: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/preparando-dados-para-analise-microsoft-power-bi" },
                        ],
        },
        languagesAndQualities: {
            languages: {
                title: "Idiomas",
                items: [
                    { lang: "Inglês", level: "Avançado (C2)" },
                    { lang: "Espanhol", level: "Básico (A2)" },
                ],
            },
            qualities: {
                title: "Qualidades Pessoais",
                items: ["Comunicação", "Oratória", "Trabalho em Equipe", "Responsabilidade", "Adaptação Rápida", "Raciocínio Lógico"],
            },
        },
        contact: {
            title: "Vamos Conversar?",
            subtitle: "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.",
            info: [
                { type: "email", Icon: "contact", text: "ricardaoquadros@gmail.com", href: "mailto:ricardaoquadros@gmail.com" },
                { type: "phone", Icon: "phone", text: "(51) 99524-1338", href: "tel:+5551995241338" },
                { type: "location", Icon: "location", text: "Guaíba – Rio Grande do Sul, Brasil", href: "https://pt.wikipedia.org/wiki/Gua%C3%ADba" },
                { type: "cv", Icon: "download", text: "Baixar Currículo", href: "https://docs.google.com/document/d/1bz_syLDndCEs0JT92XSdn1VsyBVwUvjg/export?format=docx" },
            ],
            toast: {
                title: "Copiado!",
                email: "O endereço de e-mail foi copiado para a área de transferência.",
                phone: "O número de telefone foi copiado para a área de transferência.",
            }
        },
        footer: {
            text: "Ricardo Quadros. Todos os direitos reservados.",
        },
        projectsPage: {
            title: "Meus Projetos",
            backButton: "Voltar",
            repositoryButton: "Repositório",
            items: [
                {
                    title: "Portfólio Pessoal",
                    description: "Este é o próprio site que você está visitando, desenvolvido para mostrar minhas habilidades e projetos. Foi construído com tecnologias modernas, incluindo IA para priorização de competências.",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["Next.js", "React", "TailwindCSS", "ShadCN", "Genkit (AI)"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Portfolio",
                },
                {
                    title: "Gerenciador de Tarefas",
                    description: "Um aplicativo simples para gerenciamento de tarefas diárias, permitindo criar, editar e excluir tarefas.",
                    image: PlaceHolderImages.find(img => img.id === 'project-task-manager'),
                    tags: ["React", "Firebase"],
                    githubUrl: "https://github.com",
                },
                {
                    title: "Plataforma de E-commerce",
                    description: "Uma plataforma de e-commerce completa com carrinho de compras, checkout e integração de pagamento.",
                    image: PlaceHolderImages.find(img => img.id === 'project-ecommerce-platform'),
                    tags: ["Next.js", "Stripe", "TailwindCSS"],
                    githubUrl: "https://github.com",
                }
            ],
        }
    },
    'en': {
        navLinks: [
            { href: "#about", label: "About Me" },
            { href: "#education", label: "Education" },
            { href: "#experience", label: "Experience" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
        ],
        header: {
            openMenu: "Open menu",
        },
        hero: {
            name: "Ricardo Quadros",
            title: "Computer Science Student | Tests & Qualification Analyst @ TK Elevator",
            aboutButton: "About Me",
            contactButton: "Contact",
        },
        about: {
            title: "About Me",
            paragraph1: "Hello! I'm Ricardo Quadros, an IT professional with experience in embedded software QA, network infrastructure, and web development. I'm 19 years old and live in Guaíba, Rio Grande do Sul.",
                        paragraph2: "I currently work as a Tests & Qualification Analyst at TK Elevator and study Computer Science at ULBRA. My tech stack includes Python for test automation on embedded Linux systems (Raspberry Pi), plus infrastructure with Zabbix, Grafana, and Sophos. English certified C2 (EF SET 75/100).",
        },
        education: {
            title: "Education",
            subtitle: "My educational journey in the technology field.",
            items: [
                            {
                                institution: "Lutheran University of Brazil (ULBRA)",
                                course: "Computer Science (Bachelor's)",
                                period: "2026 – 2030",
                                url: "https://www.ulbra.br/cursos/graduacao/ciencia-da-computacao",
                            },
                            {
                                institution: "State University of Rio Grande do Sul (UERGS)",
                                course: "Computer Engineering (Transferred)",
                                period: "2025 – 2026",
                                url: "https://www.uergs.edu.br/engenharia-de-computacao",
                            },
                {
                    institution: "Dr. Solon Tavares State High School",
                    course: "IT Technician",
                    period: "2023 – 2025",
                    url: "https://www.solontavares.com/informatica.html",
                },
                {
                    institution: "Augusto Meyer State College",
                    course: "High School",
                    period: "2022 – 2024",
                    url: "https://www.escol.as/245742-colegio-estadual-augusto-meyer",
                },
                {
                    institution: "Yázigi",
                    course: "English Course",
                    period: "2022 – 2023",
                    url: "https://www.yazigi.com.br/",
                },
            ],
        },
        experience: {
                    title: "Professional Experience",
                    subtitle: "Practical experience and skill development in the job market.",
                    company: "TK Elevator",
                    role: "Tests & Qualification Analyst (Intern)",
                    period: "June/2026 – Present",
                    responsibilities: "",
                    experienceDetails: [
                        "I work on qualification and validation of embedded systems for urban mobility, using Python for test automation on Linux environments (Raspberry Pi). I handle simulator setup, testing team support, and test farm stability.",
                        "Previously, I worked as an IT Intern at Guaíba City Hall (Aug/2025 – Jun/2026), starting in remote technical support (+250 tickets resolved) and being promoted to Infrastructure & Networks. There I managed networks with Omada Controller, monitoring with Zabbix/Grafana, Sophos Firewall, and developed a PHP/MySQL web system for protocol management adopted by the entire team.",
                    ],
                    highlights: [
                        "Embedded Software Testing", "Python Automation", "Linux (Raspberry Pi)",
                        "Test Farm Stability", "Simulator Preparation", "Test Qualification & Validation",
                    ],
        },
        skills: {
            title: "Technical Skills",
            subtitle: "Skills and technologies I master, prioritized by relevance and sophistication.",
            categories: {
                            "Programming Languages": ["Python", "JavaScript", "TypeScript", "PHP", "SQL", "C"],
                            "Frameworks & Libraries": ["React", "Next.js", "Tailwind CSS"],
                            "Testing & QA Tools": ["Embedded Testing", "Test Automation", "Simulators"],
                            "Infrastructure & Networks": ["Linux", "Zabbix", "Grafana", "Sophos Firewall", "Omada Controller"],
                            "DevOps & Version Control": ["Git", "GitHub", "CI/CD"],
                            "Databases": ["MySQL", "PostgreSQL"],
                        },
        },
        projects: {
            title: "Projects",
            subtitle: "A selection of projects demonstrating my development skills.",
            repositoryButton: "View Repository",
            viewProjectButton: "View Projects",
            items: [
                {
                    title: "Personal Portfolio",
                    description: "Responsive personal website with dark/light theme, smooth animations and Google AI integration for intelligent skill prioritization. Includes internationalization system (PT-BR/EN).",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["Next.js", "React", "TypeScript", "HTML5", "CSS3", "TailwindCSS", "Antigravity IDE", "Claude Opus 4.5", "Gemini 3 Pro", "Firebase", "ShadCN/Radix UI"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Portfolio",
                },
                {
                    title: "Frontend vs. Backend",
                    description: "Interactive educational website developed as a final project, explaining the differences between Frontend and Backend with practical examples, diagrams and AI-generated content.",
                    image: PlaceHolderImages.find(img => img.id === 'project-frontend-backend'),
                    tags: ["HTML5", "CSS3", "JavaScript", "Firebase Studio", "Gemini 2.5 Flash", "Git", "GitHub"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Tcc",
                },
                {
                    title: "Delivery Protocol",
                    description: "Complete system for Guaíba City Hall with protocol generation, digital signature via Canvas, PDF generation, automatic email sending and administrative panel with dashboard.",
                    image: PlaceHolderImages.find(img => img.id === 'project-protocolo-entrega'),
                    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "PHPMailer", "Antigravity IDE", "Gemini 3 Pro", "Claude Opus 4.5", "Claude Sonnet 4.5", "Vercel"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/ProtocolodeEntrega",
                }
            ],
        },
        certifications: {
            title: "Courses and Certifications",
            subtitle: "My qualifications and continuous learning.",
            items: [
                            { name: "Relational Databases and SQL", institution: "Stanford Online (edX)", url: "https://www.edx.org/learn/sql/stanford-university-databases-relational-databases-and-sql" },
                            { name: "Claude Code 101", institution: "Anthropic", url: "https://learn.anthropic.com/" },
                            { name: "Intro to CS with Python", institution: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/" },
                            { name: "EF SET English Certificate C2", institution: "EF Standard English Test", url: "https://cert.efset.org/wFvpjR" },
                            { name: "Basic Python", institution: "Bradesco Foundation", url: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico" },
                            { name: "HTML5", institution: "IFRS", url: "https://estude.ifrs.edu.br/cursos/html-tabelas-e-formularios/" },
                            { name: "Power BI", institution: "Bradesco Foundation", url: "https://www.ev.org.br/cursos/preparando-dados-para-analise-microsoft-power-bi" },
                        ],
        },
        languagesAndQualities: {
            languages: {
                title: "Languages",
                items: [
                    { lang: "English", level: "Advanced (C2)" },
                    { lang: "Spanish", level: "Basic (A2)" },
                ],
            },
            qualities: {
                title: "Personal Qualities",
                items: ["Communication", "Public Speaking", "Teamwork", "Responsibility", "Quick Adaptation", "Logical Reasoning"],
            },
        },
        contact: {
            title: "Let's Talk?",
            subtitle: "I am always open to new opportunities and collaborations. Feel free to get in touch.",
            info: [
                { type: "email", Icon: "contact", text: "ricardaoquadros@gmail.com", href: "mailto:ricardaoquadros@gmail.com" },
                { type: "phone", Icon: "phone", text: "+55 51 99524-1338", href: "tel:+5551995241338" },
                { type: "location", Icon: "location", text: "Guaíba – Rio Grande do Sul, Brazil", href: "https://en.wikipedia.org/wiki/Gua%C3%ADba" },
                { type: "cv", Icon: "download", text: "Download CV", href: "https://docs.google.com/document/d/1bz_syLDndCEs0JT92XSdn1VsyBVwUvjg/export?format=docx" },
            ],
            toast: {
                title: "Copied!",
                email: "The email address has been copied to the clipboard.",
                phone: "The phone number has been copied to the clipboard.",
            },
        },
        footer: {
            text: "Ricardo Quadros. All rights reserved.",
        },
        projectsPage: {
            title: "My Projects",
            backButton: "Back",
            repositoryButton: "Repository",
            items: [
                {
                    title: "Personal Portfolio",
                    description: "This is the very site you are visiting, developed to showcase my skills and projects. It was built with modern technologies, including AI for skill prioritization.",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["Next.js", "React", "TailwindCSS", "ShadCN", "Genkit (AI)"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Portfolio",
                },
                {
                    title: "Task Manager",
                    description: "A simple application for managing daily tasks, allowing you to create, edit, and delete tasks.",
                    image: PlaceHolderImages.find(img => img.id === 'project-task-manager'),
                    tags: ["React", "Firebase"],
                    githubUrl: "https://github.com",
                },
                {
                    title: "E-commerce Platform",
                    description: "A complete e-commerce platform with a shopping cart, checkout, and payment integration.",
                    image: PlaceHolderImages.find(img => img.id === 'project-ecommerce-platform'),
                    tags: ["Next.js", "Stripe", "TailwindCSS"],
                    githubUrl: "https://github.com",
                }
            ],
        }
    }
};
