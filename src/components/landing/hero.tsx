import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-10 opacity-70"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern opacity-10"></div>
      <div className="container relative z-20 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-primary">
            Ricardo Quadros
          </h1>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            Estudante de Engenharia da Computação | Futuro Profissional de TI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg" className="font-bold">
              <Link href="#about">
                Sobre Mim
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="#contact">Contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
