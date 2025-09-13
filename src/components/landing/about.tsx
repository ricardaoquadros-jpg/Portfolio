"use client";

import Image from "next/image";
import { Section } from "@/components/shared/section";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/language-context";

const avatar = PlaceHolderImages.find(img => img.id === 'ricardo-quadros-avatar');

export function About() {
  const { language, translations } = useLanguage();
  const aboutContent = translations[language].about;
  return (
    <Section id="about" className="bg-card">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
            {avatar && (
              <div className="relative group w-full max-w-[350px] mx-auto rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                <div className="aspect-square relative">
                  <Image
                    src={avatar.imageUrl}
                    alt={avatar.description}
                    fill
                    className="object-cover object-top transition-all duration-300 group-hover:scale-105 group-hover:object-contain"
                    data-ai-hint={avatar.imageHint}
                  />
                </div>
              </div>
            )}
        </div>
        <div className="md:col-span-3 space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            {aboutContent.title}
          </h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p className="indent-8 text-justify">
              {aboutContent.paragraph1}
            </p>
            <p className="indent-8 text-justify">
              {aboutContent.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
