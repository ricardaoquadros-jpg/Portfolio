"use client";
import {useState, useEffect} from 'react';
import { useLanguage } from '@/context/language-context';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const { language, translations } = useLanguage();
  const footerContent = translations[language].footer;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <p className="text-sm text-foreground/60">
          © {year} {footerContent.text}
        </p>
      </div>
    </footer>
  );
}