"use client";

import { Section } from "@/components/shared/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function Education() {
  const { language, translations } = useLanguage();
  const educationContent = translations[language].education;

  return (
    <Section id="education">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          {educationContent.title}
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          {educationContent.subtitle}
        </p>
      </div>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-0 top-0 h-full w-px ml-3 sm:ml-4 bg-border" aria-hidden="true"></div>
        <div className="space-y-8">
          {educationContent.items.map((item) => (
            <div key={item.institution} className="relative flex items-start">
              <div className="absolute top-0 left-0 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 border-4 border-background mt-4 ml-[1px] sm:ml-0">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 ml-10 sm:ml-12">
                 <Card className="w-full shadow-md hover:shadow-primary/20 transition-shadow">
                  <CardHeader>
                    {item.url ? (
                      <Link href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <CardTitle className="font-headline text-lg sm:text-xl text-center">{item.course}</CardTitle>
                      </Link>
                    ) : (
                      <CardTitle className="font-headline text-lg sm:text-xl text-center">{item.course}</CardTitle>
                    )}
                    <CardDescription className="text-center px-2">{item.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 text-right">{item.period}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
