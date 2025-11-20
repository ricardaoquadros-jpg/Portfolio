"use client";
import * as React from "react";
import { Section } from "@/components/shared/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "../ui/button";

export function Experience() {
  const { language, translations } = useLanguage();
  const experienceContent = translations[language].experience;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Section id="experience" className="bg-card">
      <div className="grid md:grid-cols-5 gap-12 items-start">
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
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <Card className="shadow-lg">
              <CardHeader>
                <CollapsibleTrigger asChild>
                  <div className="flex justify-between items-center cursor-pointer">
                    <div className="text-left">
                      <CardTitle className="font-headline text-2xl">{experienceContent.role}</CardTitle>
                      <CardDescription>{experienceContent.company}</CardDescription>
                    </div>
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="hidden sm:block">{experienceContent.period}</Badge>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            <span className="sr-only">{isOpen ? "Fechar" : "Expandir"}</span>
                        </Button>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <Badge variant="outline" className="sm:hidden mt-2 inline-flex w-fit">{experienceContent.period}</Badge>
              </CardHeader>
              <CollapsibleContent>
                <CardContent>
                  <p className="mb-4 text-justify">{experienceContent.responsibilities}</p>
                  <div className="space-y-4">
                    <p className="indent-8 text-justify">{experienceContent.experienceDetails}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experienceContent.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
