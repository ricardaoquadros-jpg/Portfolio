"use client";
import {useState, useEffect} from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <p className="text-sm text-foreground/60">
          © {year} Ricardo Quadros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
