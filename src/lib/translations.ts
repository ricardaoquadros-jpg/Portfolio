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
            title: "Estudante de Engenharia da Computação | Futuro Profissional de TI",
            aboutButton: "Sobre Mim",
            contactButton: "Contato",
        },
        about: {
            title: "Sobre Mim",
            paragraph1: "Olá! Sou Ricardo Quadros, um jovem de 18 anos apaixonado por tecnologia, residente em Guaíba, Rio Grande do Sul.",
            paragraph2: "Atualmente, estou imerso no mundo da Engenharia da Computação, sempre em busca de novos conhecimentos e desafios. Meu principal objetivo é construir uma carreira sólida na área de tecnologia, aplicando minhas habilidades para criar soluções inovadoras e eficientes.",
        },
        education: {
            title: "Formação Acadêmica",
            subtitle: "Minha jornada educacional na área de tecnologia.",
            items: [
                {
                    institution: "Universidade Estadual do Rio Grande do Sul (UERGS)",
                    course: "Engenharia da Computação",
                    period: "2025 – Presente",
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
            ],
        },
        experience: {
            title: "Experiência Profissional",
            subtitle: "Atuação prática e desenvolvimento de competências no mercado de trabalho.",
            company: "Prefeitura de Guaíba",
            role: "Técnico de TI",
            period: "Agosto/2025 – Presente",
            responsibilities: "Principais responsabilidades e destaques:",
            highlights: [
                "Suporte em Hardware e Software", "Manutenção de Computadores", "Gerenciamento de Redes",
                "Atendimento a Usuários", "Configuração de Computadores e Impressoras", "Cabeamento",
                "Instalação de Software", "Reset de Senhas", "Atividades Pertinentes à Área",
            ],
        },
        skills: {
            title: "Competências Técnicas",
            subtitle: "Habilidades e tecnologias que domino, priorizadas por relevância e sofisticação.",
            categories: {
                "Linguagens de Programação": ["Python", "Java", "C", "HTML", "CSS", "PHP", "Assembly"],
                "Banco de Dados": ["MySQL"],
                "Ferramentas e Tecnologias": ["Power BI", "Android Studio", "Pacote Office", "Firebase", "AI"],
                "Hardware": ["Montagem e manutenção de computadores"],
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
                    description: "Este é o próprio site que você está visitando, desenvolvido para mostrar minhas habilidades e projetos. Foi construído com tecnologias modernas, incluindo IA para priorização de competências.",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["Next.js", "React", "TailwindCSS", "ShadCN", "Genkit (AI)"],
                    githubUrl: "https://github.com",
                }
            ],
        },
        certifications: {
            title: "Cursos e Certificações",
            subtitle: "Minhas qualificações e aprendizados contínuos.",
            items: [
                { name: "Power BI", institution: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/preparando-dados-para-analise-microsoft-power-bi" },
                { name: "Python Básico", institution: "Fundação Bradesco", url: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico" },
                { name: "HTML5", institution: "IFRS", url: "https://estude.ifrs.edu.br/cursos/html-tabelas-e-formularios/" },
                { name: "EF SET English Certificate C2", institution: "EF Standard English Test", url: "https://cert.efset.org/wFvpjR" },
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
                { type: "email", Icon: "contact", text: "ricpiquadros@gmail.com", href: "mailto:ricpiquadros@gmail.com" },
                { type: "phone", Icon: "phone", text: "(51) 99524-1338", href: "tel:+5551995241338" },
                { type: "location", Icon: "location", text: "Guaíba – RS, Brasil", href: "https://pt.wikipedia.org/wiki/Gua%C3%ADba" },
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
                    githubUrl: "https://github.com",
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
            title: "Computer Engineering Student | Future IT Professional",
            aboutButton: "About Me",
            contactButton: "Contact",
        },
        about: {
            title: "About Me",
            paragraph1: "Hello! I'm Ricardo Quadros, an 18-year-old passionate about technology, living in Guaíba, Rio Grande do Sul.",
            paragraph2: "Currently, I'm immersed in the world of Computer Engineering, always seeking new knowledge and challenges. My main goal is to build a solid career in the technology field, applying my skills to create innovative and efficient solutions.",
        },
        education: {
            title: "Education",
            subtitle: "My educational journey in the technology field.",
            items: [
                {
                    institution: "State University of Rio Grande do Sul (UERGS)",
                    course: "Computer Engineering",
                    period: "2025 – Present",
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
            ],
        },
        experience: {
            title: "Professional Experience",
            subtitle: "Practical experience and skill development in the job market.",
            company: "Guaíba City Hall",
            role: "IT Technician",
            period: "August/2025 – Present",
            responsibilities: "Main responsibilities and highlights:",
            highlights: [
                "Hardware and Software Support", "Computer Maintenance", "Network Management",
                "User Support", "Computer and Printer Setup", "Cabling",
                "Software Installation", "Password Reset", "Related Activities",
            ],
        },
        skills: {
            title: "Technical Skills",
            subtitle: "Skills and technologies I master, prioritized by relevance and sophistication.",
            categories: {
                "Programming Languages": ["Python", "Java", "C", "HTML", "CSS", "PHP", "Assembly"],
                "Database": ["MySQL"],
                "Tools and Technologies": ["Power BI", "Android Studio", "Office Suite", "Firebase", "AI"],
                "Hardware": ["Computer assembly and maintenance"],
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
                    description: "This is the very site you are visiting, developed to showcase my skills and projects. It was built with modern technologies, including AI for skill prioritization.",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["Next.js", "React", "TailwindCSS", "ShadCN", "Genkit (AI)"],
                    githubUrl: "https://github.com",
                }
            ],
        },
        certifications: {
            title: "Courses and Certifications",
            subtitle: "My qualifications and continuous learning.",
            items: [
                { name: "Power BI", institution: "Bradesco Foundation", url: "https://www.ev.org.br/cursos/preparando-dados-para-analise-microsoft-power-bi" },
                { name: "Basic Python", institution: "Bradesco Foundation", url: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico" },
                { name: "HTML5", institution: "IFRS", url: "https://estude.ifrs.edu.br/cursos/html-tabelas-e-formularios/" },
                { name: "EF SET English Certificate C2", institution: "EF Standard English Test", url: "https://cert.efset.org/wFvpjR" },
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
                { type: "email", Icon: "contact", text: "ricpiquadros@gmail.com", href: "mailto:ricpiquadros@gmail.com" },
                { type: "phone", Icon: "phone", text: "+55 51 99524-1338", href: "tel:+5551995241338" },
                { type: "location", Icon: "location", text: "Guaíba – RS, Brazil", href: "https://en.wikipedia.org/wiki/Gua%C3%ADba" },
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
                    githubUrl: "https://github.com",
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
