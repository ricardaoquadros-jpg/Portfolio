"use client";

import { Section } from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function Certifications() {
  const { language, translations } = useLanguage();
  const certificationsContent = translations[language].certifications;

  return (
    <Section id="certifications" className="bg-card pt-0">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
          {certificationsContent.title}
        </h2>
        <p className="max-w-[700px] text-foreground/80 md:text-xl">
          {certificationsContent.subtitle}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificationsContent.items.map((cert) => (
          <Link key={cert.name} href={cert.url} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="text-center group-hover:border-primary transition-all group-hover:shadow-lg h-full group-hover:scale-105 duration-300">
              <CardHeader>
                <div className="mx-auto bg-muted p-3 rounded-full w-fit">
                  <Award className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <CardTitle className="font-headline text-lg mb-1">{cert.name}</CardTitle>
                <p className="text-sm text-foreground/70">{cert.institution}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
