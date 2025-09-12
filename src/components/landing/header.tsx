"use client";

import * as React from "react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "Sobre Mim" },
  { href: "#education", label: "Formação" },
  { href: "#experience", label: "Experiência" },
  { href: "#skills", label: "Competências" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const NavContent = () => (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-lg md:text-sm font-medium">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 md:justify-center">
        <div className="md:absolute md:left-4">
          <Link href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold font-headline text-primary">RQ</span>
            <span className="hidden sm:inline font-bold font-headline">Ricardo Quadros</span>
          </Link>
        </div>
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-8 pt-12">
                <Link href="#" className="flex items-center gap-2 self-start" onClick={() => setIsOpen(false)}>
                  <span className="text-xl font-bold font-headline text-primary">RQ</span>
                </Link>
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavContent />
        )}
      </div>
    </header>
  );
}
