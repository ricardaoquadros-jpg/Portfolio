"use client";

import { Section } from "@/components/shared/section";
import { Languages, Sparkles, MessageCircle, Mic, Users, Shield, Zap, Brain, ExternalLink } from 'lucide-react';
import { useLanguage } from "@/context/language-context";

// Mapeamento de qualidades para ícones
const qualityIcons: Record<string, React.ReactNode> = {
    "Comunicação": <MessageCircle className="w-6 h-6" />,
    "Communication": <MessageCircle className="w-6 h-6" />,
    "Oratória": <Mic className="w-6 h-6" />,
    "Public Speaking": <Mic className="w-6 h-6" />,
    "Trabalho em Equipe": <Users className="w-6 h-6" />,
    "Teamwork": <Users className="w-6 h-6" />,
    "Responsabilidade": <Shield className="w-6 h-6" />,
    "Responsibility": <Shield className="w-6 h-6" />,
    "Adaptação Rápida": <Zap className="w-6 h-6" />,
    "Quick Adaptation": <Zap className="w-6 h-6" />,
    "Raciocínio Lógico": <Brain className="w-6 h-6" />,
    "Logical Reasoning": <Brain className="w-6 h-6" />,
};

// Bandeiras dos países (usando imagens SVG para melhor visualização)
const languageFlags: Record<string, string> = {
    "Inglês": "https://flagcdn.com/w80/us.png",
    "English": "https://flagcdn.com/w80/us.png",
    "Espanhol": "https://flagcdn.com/w80/es.png",
    "Spanish": "https://flagcdn.com/w80/es.png",
    "Português": "https://flagcdn.com/w80/br.png",
    "Portuguese": "https://flagcdn.com/w80/br.png",
};

// Links de certificados
const certificationLinks: Record<string, string> = {
    "Inglês": "https://cert.efset.org/wFvpjR",
    "English": "https://cert.efset.org/wFvpjR",
};

// Função para obter a porcentagem do nível
function getLevelPercentage(level: string): number {
    if (level.includes("C2")) return 95;
    if (level.includes("C1")) return 85;
    if (level.includes("B2")) return 70;
    if (level.includes("B1")) return 55;
    if (level.includes("A2")) return 40;
    if (level.includes("A1")) return 25;
    if (level.includes("Avançado") || level.includes("Advanced")) return 90;
    if (level.includes("Intermediário") || level.includes("Intermediate")) return 60;
    if (level.includes("Básico") || level.includes("Basic")) return 35;
    return 50;
}

// Componente de indicador circular
function CircularProgress({ percentage, size = 80 }: { percentage: number; size?: number }) {
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    className="text-muted/30"
                />
                {/* Progress circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="text-primary transition-all duration-700 ease-out"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">{percentage}%</span>
            </div>
        </div>
    );
}

// Card de idioma
function LanguageCard({ lang, level }: { lang: string; level: string }) {
    const flag = languageFlags[lang] || "🌐";
    const percentage = getLevelPercentage(level);
    const certLink = certificationLinks[lang];
    const { language } = useLanguage();

    return (
        <div className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
                {/* Bandeira */}
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-muted/30">
                    <img
                        src={flag}
                        alt={lang}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-lg text-foreground">{lang}</h4>
                        {certLink && (
                            <a
                                href={certLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors"
                                title={language === 'pt-BR' ? 'Ver Certificado EF SET' : 'View EF SET Certificate'}
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{level}</p>
                    {certLink && (
                        <p className="text-xs text-primary/70 mt-1">EF SET Certified</p>
                    )}
                </div>

                {/* Indicador circular */}
                <CircularProgress percentage={percentage} />
            </div>
        </div>
    );
}

// Card de qualidade
function QualityCard({ quality }: { quality: string }) {
    const icon = qualityIcons[quality] || <Sparkles className="w-6 h-6" />;

    return (
        <div className="group flex flex-col items-center justify-center p-5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 min-w-[140px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {icon}
            </div>
            <span className="text-sm font-medium text-foreground text-center">{quality}</span>
        </div>
    );
}

export function LanguagesAndQualities() {
    const { language, translations } = useLanguage();
    const languagesAndQualitiesContent = translations[language].languagesAndQualities;

    return (
        <Section id="languages-qualities">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

                {/* Idiomas */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Languages className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl font-bold">{languagesAndQualitiesContent.languages.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {language === 'pt-BR' ? 'Habilidades linguísticas' : 'Language proficiency'}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {languagesAndQualitiesContent.languages.items.map(l => (
                            <LanguageCard key={l.lang} lang={l.lang} level={l.level} />
                        ))}
                    </div>
                </div>

                {/* Qualidades Pessoais */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl font-bold">{languagesAndQualitiesContent.qualities.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {language === 'pt-BR' ? 'Soft skills e características' : 'Soft skills and traits'}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {languagesAndQualitiesContent.qualities.items.map(q => (
                            <QualityCard key={q} quality={q} />
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
