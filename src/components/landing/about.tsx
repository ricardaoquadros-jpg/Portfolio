import Image from "next/image";
import { Section } from "@/components/shared/section";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const avatar = PlaceHolderImages.find(img => img.id === 'ricardo-quadros-avatar');

export function About() {
  return (
    <Section id="about" className="bg-card">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
            {avatar && (
              <Image
                src={avatar.imageUrl}
                alt={avatar.description}
                width={250}
                height={250}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
                data-ai-hint={avatar.imageHint}
              />
            )}
        </div>
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Sobre Mim
          </h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              Olá! Sou Ricardo Quadros, um jovem de 18 anos apaixonado por tecnologia, residente em Guaíba, Rio Grande do Sul.
            </p>
            <p>
              Atualmente, estou imerso no mundo da Engenharia da Computação, sempre em busca de novos conhecimentos e desafios. Meu principal objetivo é construir uma carreira sólida na área de tecnologia, aplicando minhas habilidades para criar soluções inovadoras e eficientes.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
