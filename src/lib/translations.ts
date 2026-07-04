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
        items: {
            company: string;
            role: string;
            period: string;
            details: string[];
            highlights: string[];
            logoUrl: string;
        }[];
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
            { href: "#certifications", label: "Certificações" },
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
                    items: [
                        {
                            company: "TK Elevator",
                            role: "Analista de Testes e Qualificação (Estágio)",
                            period: "Junho/2026 – Presente",
                            details: [
                                "Atuo na qualificação e validação de sistemas embarcados para mobilidade urbana, utilizando Python para automação de testes em ambientes Linux (Raspberry Pi).",
                                "Realizo preparação de simuladores, suporte às equipes de teste e estabilização da testing farm, garantindo a confiabilidade do ambiente de testes.",
                            ],
                            highlights: [
                                "Embedded Software Testing", "Python Automation", "Linux (Raspberry Pi)",
                                "Test Farm Stability", "Simulator Preparation", "Test Qualification & Validation",
                            ],
                            logoUrl: "https://i.imgur.com/ukxrMO0.png",
                        },
                        {
                            company: "Prefeitura Municipal de Guaíba",
                            role: "Infraestrutura e Redes (Estágio)",
                            period: "Novembro/2025 – Junho/2026",
                            details: [
                                "Gerenciei redes com Omada Controller (APs, switches, VLANs) e monitorei a infraestrutura via Zabbix e Grafana, identificando falhas e indisponibilidades.",
                                "Configurei políticas de segurança no Sophos Firewall (VPN, inspeção de tráfego, controle de acesso) e realizei implantação de certificados digitais nos departamentos municipais.",
                                "Desenvolvi e implantei um sistema web interno em PHP/MySQL para controle de protocolos com CRUD completo, geração de PDF com assinatura digital e envio automatizado por e-mail — adotado por toda a equipe, reduzindo o retrabalho entre setores.",
                            ],
                            highlights: [
                                "PHP/MySQL", "Omada Controller", "Zabbix/Grafana",
                                "Sophos Firewall", "Certificados Digitais", "Desenvolvimento Web",
                            ],
                            logoUrl: "https://i.imgur.com/Lgsy22x.png",
                        },
                        {
                            company: "Prefeitura Municipal de Guaíba",
                            role: "Suporte Técnico (Estágio)",
                            period: "Agosto/2025 – Novembro/2025",
                            details: [
                                "Resolvi mais de 250 tickets de suporte técnico remoto e presencial em ambiente Windows, realizando diagnóstico de hardware, software e rede via AnyDesk.",
                                "Realizei treinamento de usuários e suporte contínuo, reduzindo a taxa de chamados recorrentes. Instalação e configuração de impressoras, softwares e gerenciamento de senhas.",
                            ],
                            highlights: [
                                "Suporte Técnico", "+250 Chamados", "AnyDesk",
                                "Windows", "Hardware/Software", "Treinamento de Usuários",
                            ],
                            logoUrl: "https://i.imgur.com/Lgsy22x.png",
                        },
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
                            "DevOps & Versionamento": ["Git", "GitHub", "Docker", "Jira", "CI/CD"],
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
                    description: "Site educacional interativo desenvolvido como TCC, explicando as diferenças entre Frontend e Backend com cards de tecnologia, dashboard de pesquisa real e chatbot com IA (Gemini).",
                    image: PlaceHolderImages.find(img => img.id === 'project-frontend-backend'),
                    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Recharts", "Vercel"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Tcc",
                },
                {
                    title: "Lume — Rastreador Financeiro IA",
                    description: "Aplicativo completo de gestão financeira com rastreamento em tempo real, 20+ categorias, gráficos interativos (Chart.js), assistente de IA conversacional (LLaMA 3.3 via OpenRouter) e comando de voz para adicionar despesas (n8n + OpenAI Whisper).",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["PHP", "MySQL", "TypeScript", "Chart.js", "OpenAI", "n8n", "LLaMA 3.3", "OpenRouter"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Lume",
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
                            { name: "Introduction to Cybersecurity", institution: "Cisco Networking Academy", url: "https://www.credly.com/badges/dbe8e869-8459-48cd-8b4d-ba1d17aee407/linked_in_profile" },
                            { name: "Technical Support Fundamentals", institution: "Google (Coursera)", url: "https://www.coursera.org/account/accomplishments/verify/MD5VGZSKHF81" },
                            { name: "Linux Unhatched", institution: "Cisco Networking Academy & NDG", url: "https://www.credly.com/badges/d47a7a2e-68f5-4339-9e42-80bbaff0f600/linked_in_profile" },
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
                { type: "cv", Icon: "download", text: "Baixar Currículo", href: "/Ricardo-Quadros-CV.pdf" },
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
            { href: "#certifications", label: "Certifications" },
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
                    items: [
                        {
                            company: "TK Elevator",
                            role: "Tests & Qualification Analyst (Intern)",
                            period: "June/2026 – Present",
                            details: [
                                "I work on qualification and validation of embedded systems for urban mobility, using Python for test automation on Linux environments (Raspberry Pi).",
                                "I handle simulator setup, testing team support, and test farm stability, ensuring a reliable testing environment.",
                            ],
                            highlights: [
                                "Embedded Software Testing", "Python Automation", "Linux (Raspberry Pi)",
                                "Test Farm Stability", "Simulator Preparation", "Test Qualification & Validation",
                            ],
                            logoUrl: "https://i.imgur.com/ukxrMO0.png",
                        },
                        {
                            company: "Guaíba City Hall",
                            role: "IT Intern (Infrastructure & Networks)",
                            period: "November/2025 – June/2026",
                            details: [
                                "Managed networks with Omada Controller (APs, switches, VLANs) and monitored infrastructure via Zabbix and Grafana, identifying failures and outages.",
                                "Configured security policies on Sophos Firewall (VPN, traffic inspection, access control) and deployed digital certificates across municipal departments.",
                                "Developed and deployed an internal PHP/MySQL web system for protocol management with full CRUD, PDF generation with digital signature, and automated email notifications — adopted by the entire team, reducing inter-department rework.",
                            ],
                            highlights: [
                                "PHP/MySQL", "Omada Controller", "Zabbix/Grafana",
                                "Sophos Firewall", "Digital Certificates", "Web Development",
                            ],
                            logoUrl: "https://i.imgur.com/Lgsy22x.png",
                        },
                        {
                            company: "Guaíba City Hall",
                            role: "IT Support Intern",
                            period: "August/2025 – November/2025",
                            details: [
                                "Resolved 250+ remote and on-site support tickets in a Windows environment, performing hardware, software, and network diagnosis via AnyDesk.",
                                "Conducted user training and ongoing support, reducing recurring ticket rates. Printer installation, software configuration, and password management.",
                            ],
                            highlights: [
                                "Technical Support", "+250 Tickets", "AnyDesk",
                                "Windows", "Hardware/Software", "User Training",
                            ],
                            logoUrl: "https://i.imgur.com/Lgsy22x.png",
                        },
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
                            "DevOps & Version Control": ["Git", "GitHub", "Docker", "Jira", "CI/CD"],
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
                    description: "Interactive educational website developed as a final project (TCC), explaining Frontend vs Backend with technology cards, real survey data dashboard, and an AI-powered chatbot (Gemini).",
                    image: PlaceHolderImages.find(img => img.id === 'project-frontend-backend'),
                    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "Recharts", "Vercel"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Tcc",
                },
                {
                    title: "Lume — AI Financial Tracker",
                    description: "Full-stack finance app with real-time tracking, 20+ categories, interactive charts (Chart.js), conversational AI assistant (LLaMA 3.3 via OpenRouter), and voice-to-expense command (n8n + OpenAI Whisper).",
                    image: PlaceHolderImages.find(img => img.id === 'project-portfolio-v1'),
                    tags: ["PHP", "MySQL", "TypeScript", "Chart.js", "OpenAI", "n8n", "LLaMA 3.3", "OpenRouter"],
                    githubUrl: "https://github.com/ricardaoquadros-jpg/Lume",
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
                            { name: "Introduction to Cybersecurity", institution: "Cisco Networking Academy", url: "https://www.credly.com/badges/dbe8e869-8459-48cd-8b4d-ba1d17aee407/linked_in_profile" },
                            { name: "Technical Support Fundamentals", institution: "Google (Coursera)", url: "https://www.coursera.org/account/accomplishments/verify/MD5VGZSKHF81" },
                            { name: "Linux Unhatched", institution: "Cisco Networking Academy & NDG", url: "https://www.credly.com/badges/d47a7a2e-68f5-4339-9e42-80bbaff0f600/linked_in_profile" },
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
                { type: "cv", Icon: "download", text: "Download CV", href: "/Ricardo-Quadros-CV.pdf" },
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
