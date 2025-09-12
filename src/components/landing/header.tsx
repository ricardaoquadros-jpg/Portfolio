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
      d="M4 19.1666V4H11.6923C12.7487 4 13.6923 4.83333 13.6923 5.8V7.4C13.6923 8.46667 12.7487 9.3 11.6923 9.3H8.53846"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.53845 9.3L13.6923 19.1667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="14.5"
      cy="14.5"
      r="3.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="17.5"
      y1="17.5"
      x2="20"
      y2="20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
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
