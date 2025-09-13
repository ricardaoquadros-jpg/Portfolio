"use client";

import { Section } from "@/components/shared/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";

export function Experience() {
  const { language, translations } = useLanguage();
  const experienceContent = translations[language].experience;

  return (
    <Section id="experience" className="bg-card">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="bg-primary text-primary-foreground p-3 rounded-full">
            <Briefcase className="h-8 w-8" />
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            {experienceContent.title}
          </h2>
          <p className="text-foreground/80 md:text-lg">
            {experienceContent.subtitle}
          </p>
        </div>
        <div className="md:col-span-3">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-2xl">{experienceContent.role}</CardTitle>
                    <CardDescription>{experienceContent.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{experienceContent.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{experienceContent.responsibilities}</p>
              <div className="flex flex-wrap gap-2">
                {experienceContent.highlights.map((highlight) => (
                  <Badge key={highlight} variant="secondary">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
