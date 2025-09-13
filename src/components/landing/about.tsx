"use client";

import Image from "next/image";
import { Section } from "@/components/shared/section";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/language-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const aboutImages = [
  PlaceHolderImages.find(img => img.id === 'ricardo-quadros-avatar'),
  PlaceHolderImages.find(img => img.id === 'about-image-1'),
  PlaceHolderImages.find(img => img.id === 'about-image-2'),
].filter(Boolean);


export function About() {
  const { language, translations } = useLanguage();
  const aboutContent = translations[language].about;
  return (
    <Section id="about" className="bg-card">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
          <Carousel
            className="w-full max-w-[350px] mx-auto"
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {aboutImages.map((img, index) => (
                <CarouselItem key={index}>
                  {img && (
                    <div className="relative group w-full rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                      <div className="aspect-square relative">
                        <Image
                          src={img.imageUrl}
                          alt={img.description}
                          fill
                          className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
                          data-ai-hint={img.imageHint}
                        />
                      </div>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
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
