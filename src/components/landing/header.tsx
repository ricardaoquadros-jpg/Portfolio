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

const Logo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary h-7 w-7"
  >
    <path
      d="M4 20V4H11C13.2091 4 15 5.79086 15 8V9C15 11.2091 13.2091 13 11 13H8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 9L18 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


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
            <Logo />
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
                  <Logo />
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
