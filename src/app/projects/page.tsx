"use client";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function ProjectsPage() {
    const { language, translations } = useLanguage();
    const projectsPageContent = translations[language].projectsPage;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center mb-8">
                        <Button asChild variant="outline" size="icon" className="mr-4">
                            <Link href="/">
                                <ArrowLeft className="h-4 w-4" />
                                <span className="sr-only">{projectsPageContent.backButton}</span>
                            </Link>
                        </Button>
                        <h1 className="font-headline text-4xl font-bold text-primary">{projectsPageContent.title}</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsPageContent.items.map((project) => (
                            <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col">
                                <div className="relative h-56 w-full">
                                    {project.image && (
                                        <Image
                                            src={project.image.imageUrl}
                                            alt={project.image.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={project.image.imageHint}
                                        />
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <CardHeader className="p-0 mb-4">
                                        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 flex-grow">
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter className="p-0 pt-6">
                                        {project.githubUrl && (
                                            <Button asChild variant="outline" size="sm">
                                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="mr-2 h-4 w-4" />
                                                    {projectsPageContent.repositoryButton}
                                                </Link>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
